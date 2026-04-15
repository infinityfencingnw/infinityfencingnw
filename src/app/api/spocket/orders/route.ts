/**
 * POST /api/spocket/orders
 *
 * Creates a drop ship order in Spocket after successful payment.
 * Call this from your Stripe webhook or checkout completion handler.
 *
 * Request body: CreateOrderPayload (see src/lib/spocket.ts)
 *
 * GET /api/spocket/orders?id=ORDER_ID
 * Returns order status and tracking info.
 */

import { NextRequest, NextResponse } from "next/server";
import { createOrder, getOrder, listOrders, CreateOrderPayload } from "@/lib/spocket";

export const runtime = "nodejs";

// ── GET — fetch order status or list all orders ───────────────────
export async function GET(req: NextRequest) {
  if (!process.env.SPOCKET_CLIENT_ID || !process.env.SPOCKET_CLIENT_SECRET) {
    return NextResponse.json({ error: "Spocket not configured" }, { status: 503 });
  }

  const { searchParams } = req.nextUrl;
  const orderId = searchParams.get("id");

  try {
    if (orderId) {
      const order = await getOrder(orderId);
      return NextResponse.json(order);
    }

    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 20);
    const orders = await listOrders(page, limit);
    return NextResponse.json(orders);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Spocket] GET /orders error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

// ── POST — create a new drop ship order ───────────────────────────
export async function POST(req: NextRequest) {
  if (!process.env.SPOCKET_CLIENT_ID || !process.env.SPOCKET_CLIENT_SECRET) {
    return NextResponse.json({ error: "Spocket not configured" }, { status: 503 });
  }

  let body: CreateOrderPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Basic validation
  if (!body.line_items?.length) {
    return NextResponse.json({ error: "line_items is required" }, { status: 400 });
  }
  if (!body.shipping_address || !body.customer_email) {
    return NextResponse.json(
      { error: "shipping_address and customer_email are required" },
      { status: 400 }
    );
  }

  try {
    const order = await createOrder(body);
    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Spocket] POST /orders error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
