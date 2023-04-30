"use client";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
    const [chargeData, setChargeData] = useState("");
    const router = useRouter();

    function onSearch(event: React.FormEvent) {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(chargeData).replace(/%20/g, "-");
        router.push(`/search?q=${encodedSearchQuery}`);

        console.log("search input detected", encodedSearchQuery);
    }

    return (
        <div className="flex">
            <form onSubmit={onSearch}>
                <Input
                    type="text"
                    placeholder="Bilinmeyen harcamanizi girin..."
                    onChange={(e) => setChargeData(e.target.value)}
                    value={chargeData}
                />
                <Button type="submit" className="ml-6 px-10">
                    Sorgula
                </Button>
            </form>
        </div>
    );
}
