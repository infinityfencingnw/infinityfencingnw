/**
 * POST /api/spocket/webhook
 *
 * Receives order status updates from Spocket (shipped, tracking updated, etc.)
 * Register this URL in your Spocket Developer Settings as a webhook endpoint.
 *
 * Event types Spocket sends:
 *   order.shipped       – supplier has shipped the order
 *   order.cancelled     – supplier cancelled the order
 *   order.updated       – tracking number or status changed
 *   product.updated     – product details or inventory changed
 *   product.deleted     – product removed from supplier catalog
 *
 * Set SPOCKET_WEBHOOK_SECRET in .env.local to verify webhook signatures.
 */

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface SpocketWebhookEvent {
  event: string;
  data: Record<string, unknown>;
  timestamp: string;
}

function verifySignature(body: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  // Constant-time comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-spocket-signature") ?? "";
  const webhookSecret = process.env.SPOCKET_WEBHOOK_SECRET ?? "";

  // Verify webhook authenticity if secret is configured
  if (webhookSecret) {
    if (!signature || !verifySignature(rawBody, signature, webhookSecret)) {
      console.warn("[Spocket Webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  let event: SpocketWebhookEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log(`[Spocket Webhook] Event: ${event.event}`, event.data);

  // ── Handle each event type ──────────────────────────────────────
  switch (event.event) {
    case "order.shipped": {
      const { order_id, tracking_number, tracking_url, carrier } = event.data as {
        order_id: string;
        tracking_number: string;
        tracking_url: string;
        carrier: string;
      };
      // TODO: Update your order database, email the customer
      console.log(`Order ${order_id} shipped via ${carrier}. Tracking: ${tracking_number} — ${tracking_url}`);
      break;
    }

    case "order.updated": {
      const { order_id, status } = event.data as { order_id: string; status: string };
      // TODO: Update order status in your database
      console.log(`Order ${order_id} status updated to: ${status}`);
      break;
    }

    case "order.cancelled": {
      const { order_id, reason } = event.data as { order_id: string; reason: string };
      // TODO: Refund the customer, update order status
      console.log(`Order ${order_id} cancelled. Reason: ${reason}`);
      break;
    }

    case "product.updated": {
      const { product_id } = event.data as { product_id: string };
      // TODO: Revalidate/refresh product cache
      console.log(`Product ${product_id} updated — refresh your product cache`);
      break;
    }

    case "product.deleted": {
      const { product_id } = event.data as { product_id: string };
      // TODO: Mark product as unavailable in your store
      console.log(`Product ${product_id} removed from supplier catalog`);
      break;
    }

    default:
      console.log(`[Spocket Webhook] Unhandled event type: ${event.event}`);
  }

  // Always return 200 quickly — Spocket will retry if it doesn't get a 200
  return NextResponse.json({ received: true });
}
