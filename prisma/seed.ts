import { PrismaClient } from "@prisma/client";
// import { db } from "@/lib/db";

// need to import the client from db to prevent violating db connection limit tho. thats the reason for db.ts
const prisma = new PrismaClient();

async function main() {
    const charge = await prisma.charge.createMany({
        data: [
            { name: "Arçelik", viewsCount: 14 },
            { name: "Burger King", viewsCount: 39 },
            {
                name: "Starbucks",
                viewsCount: 125,
                description:
                    "Global coffeehouse chain known for its premium coffee, signature drinks, and cozy ambiance.",
            },
            {
                name: "Defacto",
                viewsCount: 4,
                description:
                    "Turkish fashion brand offering trendy and affordable clothing for men, women, and children.",
            },
            {
                name: "A101",
                viewsCount: 2534,
                description:
                    "Discount retail chain in Turkey offering a variety of groceries, household items, and personal care products at affordable prices.",
            },
            {
                name: "Koton",
                viewsCount: 55,
                description:
                    "Turkish clothing brand with a wide range of fashionable apparel, accessories, and footwear.",
            },
            { name: "Mavi Jeans", viewsCount: 889 },
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
            {
                email: "jennifer_aniston@example.com",
                displayName: "Jennifer Aniston",
                content:
                    "I was surprised to see a Starbucks charge on my card. I haven't been to Starbucks in weeks!",
                likeCounter: 435,
                dislikeCounter: 19,
                chargeName: "Starbucks",
            },
            {
                email: "leonardo_dicaprio@example.com",
                displayName: "Leonardo DiCaprio",
                content:
                    "This Starbucks charge is making me suspicious. I hope my card hasn't been compromised.",
                likeCounter: 621,
                dislikeCounter: 56,
                chargeName: "Starbucks",
            },
            {
                email: "angelina_jolie@example.com",
                displayName: "Angelina Jolie",
                content:
                    "I got charged by Starbucks for a coffee that I didn't even buy. This is frustrating!",
                likeCounter: 125,
                dislikeCounter: 67,
                chargeName: "Starbucks",
            },
            {
                email: "brad_pitt@example.com",
                displayName: "Brad Pitt",
                content:
                    "I don't know what this A101 charge is for. I haven't even heard of this store!",
                likeCounter: 391,
                dislikeCounter: 14,
                chargeName: "A101",
            },
            {
                email: "scarlett_johansson@example.com",
                displayName: "Scarlett Johansson",
                content:
                    "I'm pretty sure I didn't make this A101 purchase. Has anyone else experienced this?",
                likeCounter: 267,
                dislikeCounter: 46,
                chargeName: "A101",
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
