import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = decodeURI(params.id);
    // const charge = await db.charge.findUnique({
    //     where: {
    //         name: id,
    //     },
    // });

    const charge = await db.charge.findFirst({
        where: {
            name: {
                equals: id,
                mode: "insensitive",
            },
        },
    });

    return NextResponse.json(charge);
}

const chargeCreateSchema = z.object({
    charge: z.string(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const body = chargeCreateSchema.parse(json);

        const newCharge = await db.charge.create({
            data: {
                name: body.charge,
            },
        });

        return new Response(JSON.stringify(newCharge));
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response(JSON.stringify(err.issues), { status: 422 });
        }

        return new Response("Failed at API, post req for create charge", {
            status: 500,
        });
    }
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
