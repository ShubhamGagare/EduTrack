import { NextResponse } from 'next/server';
import { PrismaClient } from "../../../../../packages/db/prisma/generated/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
      // Fetch all students from the database
      const students = await prisma.student.findMany();
  
      // Send the list of students as a JSON response
      return NextResponse.json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
      // Disconnect the Prisma Client
      await prisma.$disconnect();
    }
  }