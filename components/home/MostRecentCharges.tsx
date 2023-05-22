"use client";

import { useState, useEffect } from "react";
const axios = require("axios").default;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChargeItem from "./ChargeItem";

export default function MostRecentCharges() {
    const [charges, setCharges] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getCharges();
            setCharges(result.data);
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         const result = await getCharges();
    //         setCharges(result.data);
    //     }
    //     const interval = setInterval(() => {
    //         fetchData();
    //     }, 15000);

    //     return () => clearInterval(interval);
    // }, []);

    async function getCharges() {
        try {
            const res = await axios.get("/api/recent");
            return res;
        } catch (err) {
            throw new Error("Failed fetching most recent charges!", {
                cause: err,
            });
        }
    }

    return (
        <Card className="w-full h-auto my-6 md:my-0 lg:w-1/2">
            <CardHeader>
                <CardTitle className="text-xl text-[#1797ff]">
                    En son arananlar
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    {Array.isArray(charges)
                        ? charges.map((charge: any) => {
                              return (
                                  <ChargeItem
                                      key={charge.name}
                                      chargeName={charge.name}
                                  />
                              );
                          })
                        : null}
                </ul>
            </CardContent>
        </Card>
    );
}
