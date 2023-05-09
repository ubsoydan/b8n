"use client";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FraudCheckForm() {
    const [chargeToCheck, setChargeToCheck] = useState("");
    const router = useRouter();

    async function inquireCharge(event: React.FormEvent) {
        event.preventDefault();

        // Format query parameter with dashes
        const queryParam = chargeToCheck.replace(/\s+/g, "-");
        try {
            // Format user input to be used as query param
            const id = encodeURI(chargeToCheck);
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
                // const redirectTo = id.replace(/%20/g, "-");
                router.push(`/check?q=${queryParam}`);
            }

            if (!existingCharge) {
                console.log("BULUNMADIADMDSAN");
                const res = await fetch(`/api/charges/${id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        charge: chargeToCheck,
                    }),
                });

                const newCharge = await res.json();
                console.log("new charge created", newCharge);

                router.push(`/check?q=${queryParam}`);
            }
        } catch (err) {
            console.log(err);
            return new Error();
        }
    }

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={inquireCharge} className="w-full">
                <Input
                    type="text"
                    placeholder="Bilinmeyen harcamanizi girin..."
                    onChange={(e) => setChargeToCheck(e.target.value)}
                    value={chargeToCheck}
                />
                <Button type="submit">Sorgula</Button>
            </form>
        </div>
    );
}
