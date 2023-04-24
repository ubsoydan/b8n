import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const charge = await db.charge.findUnique({
        where: {
            name: id,
        },
    });
    return NextResponse.json(charge);
}

// I won't probably need this one, but better to have.
// Modified 'data' payload to be semantically matching with PUT
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const json = await request.json();

    const updated = await db.charge.update({
        where: {
            name: id,
        },
        data: {
            name: json.name || null,
        },
    });
    return NextResponse.json(updated);
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const json = await request.json();

    const updated = await db.charge.update({
        where: {
            name: id,
        },
        data: json,
    });
    return NextResponse.json(updated);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    const deleted = await db.charge.delete({
        where: {
            name: id,
        },
    });
    return NextResponse.json(deleted);
}
