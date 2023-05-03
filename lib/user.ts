import { v4 as uuidv4 } from "uuid";

export default async function UserLS() {
    const user = localStorage.getItem("user");

    if (user) {
        return user;
    }

    if (!user) {
        const setNewUser = localStorage.setItem("user", uuidv4());
        const getNewUser = localStorage.getItem("user");

        const res = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: getNewUser,
            }),
        });

        const user = await res.json();
        console.log("NEW USER SAVED INTO DB", user);
        return getNewUser;
    }
}
