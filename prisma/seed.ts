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

    const comments = await prisma.comment.createMany({
        data: [
            {
                email: "john_doe@example.com",
                displayName: "John Doe",
                content:
                    "I don't know what this Koton charge is for, but it's a bit too high for my liking.",
                likeCounter: 238,
                dislikeCounter: 14,
                chargeName: "Koton",
            },
            {
                email: "jane_doe@example.com",
                displayName: "Jane Doe",
                content:
                    "I love Koton, but this charge seems suspicious. Has anyone else experienced this?",
                likeCounter: 142,
                dislikeCounter: 37,
                chargeName: "Koton",
            },
            {
                email: "sam_smith@example.com",
                displayName: "Sam Smith",
                content:
                    "I got charged by Koton, but I haven't shopped there in weeks. Anyone else have this issue?",
                likeCounter: 433,
                dislikeCounter: 93,
                chargeName: "Koton",
            },
            {
                email: "emma_watson@example.com",
                displayName: "Emma Watson",
                content:
                    "I was surprised to see a Koton charge on my card. I haven't been to Koton in months!",
                likeCounter: 856,
                dislikeCounter: 27,
                chargeName: "Koton",
            },
            {
                email: "david_beckham@example.com",
                displayName: "David Beckham",
                content:
                    "I don't understand this Koton charge. I haven't shopped there in ages!",
                likeCounter: 601,
                dislikeCounter: 53,
                chargeName: "Koton",
            },
        ],
    });
    console.log("Comments added");
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
