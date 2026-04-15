/**
 * Spocket API Client
 * ─────────────────────────────────────────────────────────────────
 * Setup:
 * 1. Sign up for Spocket Empire plan ($99/mo) at spocket.co
 * 2. Go to Settings → Developer → Generate API credentials
 * 3. Add these to your .env.local:
 *
 *    SPOCKET_CLIENT_ID=your_client_id
 *    SPOCKET_CLIENT_SECRET=your_client_secret
 *    SPOCKET_API_URL=https://api.spocket.co
 *
 * Spocket uses OAuth 2.0 client_credentials flow for server-to-server auth.
 * ─────────────────────────────────────────────────────────────────
 */

const SPOCKET_API_URL = process.env.SPOCKET_API_URL ?? "https://api.spocket.co";
const CLIENT_ID = process.env.SPOCKET_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.SPOCKET_CLIENT_SECRET ?? "";

// ── Token cache (module-level, reused across requests) ────────────
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) {
    return cachedToken;
  }

  const res = await fetch(`${SPOCKET_API_URL}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Spocket auth failed (${res.status}): ${body}`);
  }

  const data = await res.json();
  cachedToken = data.access_token as string;
  tokenExpiresAt = Date.now() + (data.expires_in ?? 3600) * 1000;
  return cachedToken;
}

// ── Base fetch wrapper ─────────────────────────────────────────────
async function spocketFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(`${SPOCKET_API_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Spocket API error ${res.status} on ${path}: ${body}`);
  }

  return res.json() as Promise<T>;
}

// ── Types ──────────────────────────────────────────────────────────
export interface SpocketProduct {
  id: string;
  title: string;
  description: string;
  vendor: string;              // brand/supplier name
  category: string;
  handle: string;              // URL slug
  images: { src: string; alt?: string }[];
  variants: SpocketVariant[];
  tags: string[];
  published: boolean;
}

export interface SpocketVariant {
  id: string;
  title: string;
  sku: string;
  price: string;               // "29.99"
  compare_at_price: string | null;
  inventory_quantity: number;
  available: boolean;
  weight: number;
  weight_unit: string;
}

export interface SpocketOrder {
  id: string;
  status: string;
  tracking_number: string | null;
  tracking_url: string | null;
  line_items: SpocketOrderLineItem[];
  created_at: string;
  updated_at: string;
}

export interface SpocketOrderLineItem {
  product_id: string;
  variant_id: string;
  quantity: number;
  price: string;
}

export interface CreateOrderPayload {
  line_items: {
    product_id: string;
    variant_id: string;
    quantity: number;
  }[];
  shipping_address: {
    first_name: string;
    last_name: string;
    address1: string;
    address2?: string;
    city: string;
    province: string;
    zip: string;
    country: string;
    phone?: string;
  };
  customer_email: string;
}

// ── Product endpoints ──────────────────────────────────────────────

/**
 * List products from your Spocket catalog.
 * @param page  Page number (1-based)
 * @param limit Products per page (max 50)
 * @param search Optional search term
 */
export async function listProducts(
  page = 1,
  limit = 24,
  search?: string
): Promise<{ products: SpocketProduct[]; total: number; pages: number }> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(search ? { search } : {}),
  });
  return spocketFetch(`/v1/products?${params}`);
}

/**
 * Get a single product by ID.
 */
export async function getProduct(productId: string): Promise<SpocketProduct> {
  return spocketFetch(`/v1/products/${productId}`);
}

/**
 * List products filtered by category/tag — useful for showing only
 * fence tools vs. hardware vs. panels on different shop pages.
 */
export async function listProductsByCategory(
  category: string,
  page = 1,
  limit = 24
): Promise<{ products: SpocketProduct[]; total: number; pages: number }> {
  const params = new URLSearchParams({
    category,
    page: String(page),
    limit: String(limit),
  });
  return spocketFetch(`/v1/products?${params}`);
}

// ── Inventory ──────────────────────────────────────────────────────

/**
 * Get real-time inventory for a specific variant.
 * Call this before allowing add-to-cart to avoid overselling.
 */
export async function getInventory(
  variantId: string
): Promise<{ variant_id: string; inventory_quantity: number; available: boolean }> {
  return spocketFetch(`/v1/inventory/${variantId}`);
}

// ── Order endpoints ────────────────────────────────────────────────

/**
 * Create a drop ship order in Spocket.
 * Call this after successful payment (e.g., Stripe webhook).
 * Spocket routes the order directly to the supplier.
 */
export async function createOrder(
  payload: CreateOrderPayload
): Promise<SpocketOrder> {
  return spocketFetch("/v1/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Get order status and tracking info.
 */
export async function getOrder(orderId: string): Promise<SpocketOrder> {
  return spocketFetch(`/v1/orders/${orderId}`);
}

/**
 * List all orders (for admin/dashboard use).
 */
export async function listOrders(
  page = 1,
  limit = 20
): Promise<{ orders: SpocketOrder[]; total: number }> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  return spocketFetch(`/v1/orders?${params}`);
}
