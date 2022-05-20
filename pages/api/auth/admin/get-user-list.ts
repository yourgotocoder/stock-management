// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectToDatabase from "../../../../lib/database";

type GetError = {
    error: true;
    message: string;
};

type User = {
    name: string;
    empCode: string;
    emailId: string;
    role: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[] | GetError>
) {
    if (req.method === "GET") {
        const session = await getSession({ req });
        if (!session) {
            res.status(401).json({
                error: true,
                message:
                    "Unauthorized (You dont't have the proper permissions for this action)",
            });
            return;
        }
        const email = session.user?.email;
        const client = await connectToDatabase();
        const db = client.db();
        const collection = db.collection("admin");
        const foundUser = await collection.find().toArray();
        if (foundUser) {
            const filterUserList = foundUser.filter(
                (user) => user.emailId !== email
            );
            const transformedUserList = filterUserList.map((user) => ({
                emailId: user.emailId,
                name: user.name,
                empCode: user.empCode,
                role: user.role,
            }));
            res.status(200).json(transformedUserList);
            return;
        }
        res.status(500).json({ error: true, message: "Something went wrong" });
    }
}
