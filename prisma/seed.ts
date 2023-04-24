import { PrismaClient } from "@prisma/client";
// import { db } from "@/lib/db";

// need to import the client from db to prevent violating db connection limit tho. thats the reason for db.ts
const prisma = new PrismaClient();

async function main() {
    const charge = await prisma.charge.createMany({
        data: [
            { name: "Arçelik" },
            { name: "Burger King" },
            { name: "Starbucks" },
            { name: "Defacto" },
            { name: "A101" },
            { name: "Koton" },
            { name: "Mavi Jeans" },
        ],
    });
    console.log("Created some charges! -->", charge.count);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
