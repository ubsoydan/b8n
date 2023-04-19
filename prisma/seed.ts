import { db } from "@/lib/db";

async function main() {
    const user = await db.user.upsert({
        where: { email: "user@email.com" },
        update: {},
        create: {
            email: "user@email.com",
            firstName: "User",
            lastName: "Person",
            password: "password",
            chargeQueries: {
                create: new Array(5).fill(1).map((_, i) => ({
                    name: `Charge Query ${i}`,
                })),
            },
        },
        include: {
            chargeQueries: true,
        },
    });

    const comments = await Promise.all(
        user.chargeQueries.map((query) =>
            db.comment.createMany({
                data: new Array(10).fill(1).map((_, i) => {
                    return {
                        content: `Comment number ${i}`,
                        ownerId: user.id,
                        chargeId: query.id,
                    };
                }),
            })
        )
    );
    console.log({ user, comments });
}
main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
