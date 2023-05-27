import { db } from "@/lib/db";

// Fetch the names of all charges on server-side via prisma
async function fetchCharges() {
    const res = await db.charge.findMany({
        select: { name: true, updatedAt: true },
    });
    const charges = res.map((charge) => ({
        url: encodeURIComponent(charge.name),
        updatedAt: charge.updatedAt,
    }));
    return charges;
}

export default async function sitemap() {
    const allCharges = await fetchCharges();
    const charges = allCharges.map((charge: any) => ({
        url: `https://bilinmeyenharcama.com/${charge.url}`,
        lastModified: new Date(charge.updatedAt).toISOString().split("T")[0],
    }));

    const routes = [
        "",
        "/i/about",
        "/i/disclaimer",
        "/i/contact",
        "/check",
    ].map((route) => ({
        url: `https://bilinmeyenharcama.com${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...charges];
}
