import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Invalidate cached data every 10 seconds (Next.js)
export const revalidate = 600;

export async function GET() {
    const popularcharges = await db.charge.findMany({
        select: { name: true, views: true },
        orderBy: { views: "desc" },
        take: 15,
    });

    return NextResponse.json(popularcharges);
}
