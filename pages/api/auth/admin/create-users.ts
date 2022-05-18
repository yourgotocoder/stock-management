// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import connectToDatabase from "../../../../lib/database";

type Data = {
    message: string;
};

type CreationError = {
    error: true;
    message: string;
};

type NewUser = {
    name: string;
    empCode: string;
    emailId: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | CreationError>
) {
    if (req.method === "POST") {
        const session = await getSession({ req });

        console.log(session);
    }

    // const { name, emailId, empCode }: NewUser = req.body;

    // if (
    //   !name ||
    //   name.trim().length === 0 ||
    //   !emailId ||
    //   !emailId.includes("@smit.smu.edu.in") ||
    //   !empCode
    // ) {
    //   res.status(422).json({ error: true, message: "Failed to create a user" });
    //   return;
    // }

    // const client = await connectToDatabase();

    // const db = client.db();
    // const collections = db.collection("admin");

    // const newUser = await collections.insertOne({
    //   emailId,
    //   name,
    //   empCode
    // });

    // console.log(newUser);

    res.status(200).json({ message: "Created User" });
}
