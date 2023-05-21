import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Invalidate cached data every 10 seconds (Next.js)
export const revalidate = 10;

export async function GET() {
    const recentcharges = await db.charge.findMany({
        select: { name: true, id: true },
        orderBy: { id: "desc" },
        take: 15,
    });
    return NextResponse.json(recentcharges);
    // return new Response(JSON.stringify(recentcharges));
}
