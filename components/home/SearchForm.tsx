"use client";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
    const [chargeData, setChargeData] = useState("");
    const router = useRouter();

    async function inquireCharge(event: React.FormEvent) {
        event.preventDefault();

        try {
            // Format user input to be used as query param
            const id = encodeURI(chargeData);
            // Inquiry
            const res = await fetch(`/api/charges/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const existingCharge = await res.json();
            if (existingCharge) {
                console.log("BOYLE BIR KAYIT VAR", existingCharge);

                // Formats url for readibility, swaps %20s with dashes
                const redirectTo = id.replace(/%20/g, "-");
                router.replace(`/${redirectTo}`);
            }

            if (!existingCharge) {
                console.log("BULUNMADIADMDSAN");
                const res = await fetch(`/api/charges/${id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        charge: chargeData,
                    }),
                });

                const newCharge = await res.json();
                console.log("new charge created", newCharge);
                router.replace(`/${newCharge.name}`);
            }
        } catch (err) {}
    }
    return (
        <div className="flex">
            <form onSubmit={inquireCharge}>
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
