import { db } from "@/lib/db";

// Fetch the names of all charges on server-side via prisma
async function fetchCharges() {
    const allCharges = await db.charge.findMany({
        select: { name: true },
    });
    return allCharges;
}

// Make URLs out of charge names
async function generateUrls() {
    const data = await fetchCharges();
    const URLs = data.map((charge) => encodeURIComponent(charge.name));
    return URLs;
}

export default async function sitemap() {
    const allCharges = await generateUrls();
    const charges = allCharges.map((charge: any) => ({
        url: `https://bilinmeyenharcama.com/${charge}`,
    }));

    const routes = [
        "",
        "/i/about",
        "/i/disclaimer",
        "/i/contact",
        "/check",
    ].map((route) => ({
        url: `https://bilinmeyenharcama.com${route}`,
    }));

    return [...routes, ...charges];
}
