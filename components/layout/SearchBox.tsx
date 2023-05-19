"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBox() {
    return (
        <div className="flex">
            <form
                className="flex"
                action="https://www.google.com/search"
                method="get"
            >
                <Input type="text" maxLength={60} />
                <Button className="flex">
                    <Search className="h-4 w-4" />
                </Button>
            </form>
        </div>
    );
}
