import { db } from "@/lib/db";

export async function GET(request: Request) {
    try {
        /**
         * Grab the search params
         * Then delete dashes and make it compatible with DB records
         * Find that unique charge in DB or create one
         * Return it
         */
        const url = request.url;
        const query = url.substring(url.indexOf("?q=") + 3);
        const decodedQuery = decodeURIComponent(query);

        const result = await db.charge.findUnique({
            where: {
                name: decodedQuery,
            },
        });

        if (result) {
            console.log("Found in DB", result);
            return new Response(JSON.stringify(result.name));
        }

        if (!result) {
            console.log(
                `Couldnt find in DB, creating one with the name ${decodedQuery} because result was`,
                result
            );
            const createCharge = await db.charge.create({
                data: {
                    name: decodedQuery,
                },
            });

            console.log("CREATED", createCharge);

            return new Response(JSON.stringify(createCharge.name));
        }
    } catch (err: any) {
        const message =
            err.message || "an unknown error occurred at search route";
        return new Response(message, { status: 500 });
    }
}

export async function POST(request: Request) {
    return console.log("HI THERE!");
}

//another possible solution for getting query params - did not test
// const {searchParams} = new URL(request.url)
// const query = searchParams.get('q')
// ask for prisma client
