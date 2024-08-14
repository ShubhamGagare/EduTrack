import { NextResponse } from 'next/server';
//import { PrismaClient } from "../../../../../packages/db/prisma/generated/client";

//const prisma = new PrismaClient();

export async function GET() {
    try {
      // Fetch all cls from the database
  //    const cls = await prisma.cls.findMany();
  
      // Send the list of cls as a JSON response
      return ""//NextResponse.json(cls);
    } catch (error) {
      console.error('Error fetching cls:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
      // Disconnect the Prisma Client
      //await prisma.$disconnect();
    }
  }