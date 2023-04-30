"use client";

import { useSearchParams } from "next/navigation";

async function fetchData(url: string | null) {
    // Error handling
    if (typeof url === null) {
        throw new Error("Null url, can't make api request for this search");
    }
    // Hit the API endpoint with query
    const res = await fetch(`/api/search?q=${url}`);

    // Error handling
    if (!res.ok) {
        throw new Error("Failed while resolving promise from search api res");
    }

    // Resolve the promise, returns an obj
    const { result } = await res.json();
    return result;
}

export default async function SearchPage() {
    // Get query params from URL path
    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null;
    console.log("saerchquery", searchQuery);
    // Obj
    const data = await fetchData(searchQuery);

    // If not found such charge in DB, throw error
    if (!data) {
        return console.log("NO SUCH THING");
    }
    console.log("apidan gelen data", data.name);

    return <div>ARAMA SAYFASI {data.name}</div>;
}
// Format the query
// const decodedSearchQuery = decodeURI(searchQuery || "").replace(/-/g, " ");
