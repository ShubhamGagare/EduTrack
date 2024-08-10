import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "../../../../../packages/db/prisma/generated/client";

const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all students from the database
      const students = await prisma.student.findMany();

      // Send the list of students as a JSON response
      res.status(200).json(students);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      // Disconnect the Prisma Client
      await prisma.$disconnect();
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}