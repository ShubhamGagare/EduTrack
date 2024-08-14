// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from "../../../../../../packages/db/prisma/generated/client";

// const prisma = new PrismaClient();

// export async function GET(req:NextRequest) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const id = searchParams.get('id');

//       // Fetch all cls from the database
//       const cls = await prisma.student.findUnique({
//         where:{
//             id:Number(id)
//         },
//         include:{
//           user:{
//             select:{
//               username:true
//             }
//           }
//         }
//       });
  
//       // Send the list of cls as a JSON response
//       return NextResponse.json(cls);
//     } catch (error) {
//       console.error('Error fetching cls:', error);
//       return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     } finally {
//       // Disconnect the Prisma Client
//       await prisma.$disconnect();
//     }
//   }