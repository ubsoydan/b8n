"use client";
import { useState, useEffect } from "react";
const axios = require("axios").default;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ChargeItem from "./ChargeItem";

export default function MostPopularCharges() {
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
    //     }, 3600000); // 10 min

    //     return () => clearInterval(interval);
    // }, []);

    async function getCharges() {
        try {
            const res = await axios.get("/api/popular");
            return res;
        } catch (err) {
            throw new Error("Failed fetching most popular charges!", {
                cause: err,
            });
        }
    }

    return (
        <Card className="w-full h-auto lg:w-1/2 mr-4">
            <CardHeader>
                <CardTitle className="text-xl text-[#1797ff]">
                    En çok arananlar
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
