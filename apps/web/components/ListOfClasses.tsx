import { ListOfRegisters } from "./ListOfRegisters";
import { getListOfALLRegisters } from "../app/utils/utils";

export async function ListOfClasses() {
    const response: any = await getListOfALLRegisters(new Date())

    //const data = response.data
    console.log(response)
    return <ListOfRegisters array={response}/>;
}