"use server"
import { ListOfRegisters } from "./ListOfRegisters";
import { createTodaysAllRegister, getListOfALLRegisters } from "../app/utils/utils";
import { PrismaClient } from "../../../packages/db/prisma/generated/client";

const client = new PrismaClient();

export async function ListOfClasses() {
    console.log("Fetching registers-----------")
    //const response: any = await getListOfALLRegisters(new Date())
    const date = new Date()
    try {
        const response = await client.register.findMany({
            where: {
                date: {
                    gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()), // Greater than or equal to today
                    lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1), // Less than tomorrow
                },
            },
            include: {
                cls: {
                    select: {
                        name: true,
                    },
                },
                teacher: {
                    select: {
                        user: {
                            select: {
                                username: true,
                            },
                        },
                    },
                },
            },
        });
        if (response.length === 0) {
            const response = await createTodaysAllRegister();


            console.log(response)
            return <ListOfRegisters array={response} />;
        }

        console.log(response)
        return <ListOfRegisters array={response} />;
    } catch (error) {
        console.log(error);
        return [];
    }
    //const data = response.data
}