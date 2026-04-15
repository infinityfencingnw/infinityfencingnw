/**
 * GET /api/spocket/products/[id]
 *
 * Fetch a single product by Spocket product ID.
 * Used on product detail pages.
 */

import { NextRequest, NextResponse } from "next/server";
import { getProduct, getInventory } from "@/lib/spocket";

export const runtime = "nodejs";
export const revalidate = 120; // cache 2 minutes

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!process.env.SPOCKET_CLIENT_ID || !process.env.SPOCKET_CLIENT_SECRET) {
    return NextResponse.json({ error: "Spocket not configured" }, { status: 503 });
  }

  try {
    const [product, ...variantInventory] = await Promise.all([
      getProduct(params.id),
      // Fetch live inventory for all variants in parallel
      // (we don't have variants yet, so this is a placeholder)
    ]);

    return NextResponse.json({ product, variantInventory });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[Spocket] GET /products/${params.id} error:`, message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
