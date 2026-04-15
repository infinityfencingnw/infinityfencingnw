/**
 * GET /api/spocket/products
 *
 * Query params:
 *   page     – page number (default 1)
 *   limit    – products per page (default 24, max 50)
 *   search   – search term
 *   category – filter by category name
 *
 * Returns Spocket product data to the client without exposing
 * API credentials (they stay server-side only).
 */

import { NextRequest, NextResponse } from "next/server";
import {
  listProducts,
  listProductsByCategory,
} from "@/lib/spocket";

export const runtime = "nodejs";
export const revalidate = 300; // cache for 5 minutes

export async function GET(req: NextRequest) {
  // Verify env vars are configured
  if (!process.env.SPOCKET_CLIENT_ID || !process.env.SPOCKET_CLIENT_SECRET) {
    return NextResponse.json(
      {
        error: "Spocket API credentials not configured.",
        setup: "Add SPOCKET_CLIENT_ID and SPOCKET_CLIENT_SECRET to .env.local",
      },
      { status: 503 }
    );
  }

  const { searchParams } = req.nextUrl;
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Math.min(Number(searchParams.get("limit") ?? 24), 50);
  const search = searchParams.get("search") ?? undefined;
  const category = searchParams.get("category") ?? undefined;

  try {
    const data = category
      ? await listProductsByCategory(category, page, limit)
      : await listProducts(page, limit, search);

    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Spocket] GET /products error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
