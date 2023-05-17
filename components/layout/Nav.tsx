import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import NavBar from "./NavBar";

export default async function Nav() {
    const session = await getServerSession(authOptions);
    return <NavBar session={session} />;
}
