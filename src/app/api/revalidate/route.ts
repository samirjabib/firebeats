import { TAGS } from "@/lib/shopify/constants";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest): Promise<Response> {
  console.log("run");

  const topic = headers().get("x-shopify-topic") || "unknown";
  console.log(topic);

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
