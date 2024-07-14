"use server"
import { authOptions } from "app/lib/auth";
import { getServerSession } from "next-auth";

export async function getCurrentUser() {
    const session = await getServerSession(authOptions);
	return session
}