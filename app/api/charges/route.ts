// DO NOT NEED THIS FOR NOW

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // const charges = await db.charge.findMany();
    // activated only this part due to build issue
    return NextResponse.json("ok");
}

// export async function POST(request: Request) {
//     const json = await request.json();
//     const created = await db.charge.create({
//         data: json,
//     });
//     return new NextResponse(JSON.stringify(created), { status: 201 });
// }
