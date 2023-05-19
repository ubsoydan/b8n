// DISABLED - going for anonymous users rn

// import { db } from "@/lib/db";
// import * as z from "zod";

// const userCreateSchema = z.object({
//     id: z.string(),
// });

// export async function POST(req: Request) {
//     try {
//         const json = await req.json();
//         const body = userCreateSchema.parse(json);

//         const user = await db.user.create({
//             data: {
//                 id: body.id,
//             },
//         });

//         return new Response(JSON.stringify(user));
//     } catch (err) {
//         if (err instanceof z.ZodError) {
//             return new Response(JSON.stringify(err.issues), { status: 422 });
//         }

//         return new Response("problem with user api endpoint", { status: 500 });
//     }
// }
