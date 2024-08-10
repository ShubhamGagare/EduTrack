import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../../packages/db/prisma/generated/client';

// Create a Prisma Client instance
const prisma = new PrismaClient();

// Define the Student type (optional, for better type safety)
interface Student {
  id: number;
  // Add other fields that match your Prisma Student model
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Student | { error: string }>
) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    if (typeof id !== 'string') {
      res.status(400).json({ error: 'Invalid student ID' });
      return;
    }

    try {
      // Fetch the student details from the database
      const student = await prisma.student.findUnique({
        where: { id: Number(id) },
      });

      if (student) {
        // Send the student details as a JSON response
        res.status(200).json(student);
      } else {
        // Handle case where the student is not found
        res.status(404).json({ error: 'Student not found' });
      }
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
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}