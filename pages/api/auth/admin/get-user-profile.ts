// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectToDatabase from "../../../../lib/database";

type CreationError = {
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
    res: NextApiResponse<User | CreationError>
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
        const foundUser = await collection.findOne({ emailId: email });
        if (foundUser) {
            const { name, emailId, empCode, role } = foundUser;
            res.status(200).json({ name, emailId, empCode, role });
            return;
        }
        res.status(500).json({ error: true, message: "Something went wrong" });
    }
}
