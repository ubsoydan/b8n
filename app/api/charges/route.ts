import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const charges = await db.charge.findMany();
    return NextResponse.json(charges);
}

export async function POST(request: Request) {
    const json = await request.json();
    const created = await db.charge.create({
        data: json,
    });
    return new NextResponse(JSON.stringify(created), { status: 201 });
}
