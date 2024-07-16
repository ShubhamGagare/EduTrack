import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { sql } from "@vercel/postgres";
import { PrismaClient } from "../../../../../../packages/db/prisma/generated/client";

export async function POST(request: Request) {
    const client = new PrismaClient();
  try {
    const { email, password,role } = await request.json();
    // YOU MAY WANT TO ADD SOME VALIDATION HERE
    const roles = await client.role.findMany();

    if (!roles || roles.length !== 3) {
        throw new Error("Failed to load roles.");
      }else{
    console.log({ email, password, role });

    const hashedPassword = await hash(password, 10);
  
    const roleId=roles?.find(r => r.name === role)?.id ||0
    
    const response = await client.user.create({
        data:{
            username:email,
            password:hashedPassword,
            email:email,
            roleId: roleId
        }
    })
}
    // const response =
    //   await sql`INSERT INTO User (email, password) VALUES (${email}, ${hashedPassword})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" })}
