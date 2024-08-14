import { Card } from "@repo/ui";
import axios from "axios";
import { ListOfRegisters } from "./ListOfRegisters";
import { PrismaClient } from "../../../packages/db/prisma/generated/client";
import { getListOfALLRegisters } from "../app/utils/utils";

const client = new PrismaClient()
export async function ListOfClasses() {
    const response: any = await getListOfALLRegisters(new Date())

    //const data = response.data
    console.log(response)
    return <ListOfRegisters array={response}/>;
}