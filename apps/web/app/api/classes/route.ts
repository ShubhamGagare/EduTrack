import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../packages/db/prisma/generated/client";
import { getClasses } from "app/utils/utils";

export async function GET() {
    const client = new PrismaClient();
  try {
    const response = getClasses();
    return response;
 } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" })}
