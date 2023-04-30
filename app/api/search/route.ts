import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        /**
         * Grab the search params on server-side(yeah i know)
         * Then delete dashes and make it compatible with DB records
         * Find that unique charge in DB
         * Return it
         */
        const url = request.url;
        const query = url.substring(url.indexOf("?q=") + 3).replace(/-/g, " ");

        const result = await db.charge.findUnique({
            where: {
                name: query,
            },
        });

        return NextResponse.json({ result });
    } catch (err) {
        NextResponse.error();
    }
}

//another possible solution for getting query params - did not test
// const {searchParams} = new URL(request.url)
// const query = searchParams.get('q')
// ask for prisma client
