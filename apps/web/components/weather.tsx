import axios from "axios";

export async function Weather({city,unit}:{city:any,unit:any} ) {
    const response:any = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/weather?city=${city}&unit=${unit}`,
    );
  
   
    const data =response.data
    console.log(data)
    return (
      <div className="bg-blue-600 text-2xl border">
        <div className="">{data.temperature}123</div>
        <div>{data.condition}</div>
        <div>{data.humidity}</div>
      </div>
    );
  }