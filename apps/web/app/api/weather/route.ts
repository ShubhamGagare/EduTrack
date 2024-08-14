import { NextRequest, NextResponse } from 'next/server';



export async function GET(req:NextRequest) {

    console.log("hi from api--------------")
    const weatherData:any = {
        Pune: {
            temperature: "28°C",
            condition: "Partly Cloudy",
            humidity: "60%",
            wind: "10 km/h",
        },
        Mumbai: {
            temperature: "32°C",
            condition: "Sunny",
            humidity: "70%",
            wind: "15 km/h",
        },
        Delhi: {
            temperature: "35°C",
            condition: "Hot",
            humidity: "50%",
            wind: "8 km/h",
        },
    };

    //const url = new URL(req.url, `http://${req.headers.host}`);
    
    const { searchParams } = new URL(req.url);
    const unit:any = searchParams.get('unit');
    const city:any = searchParams.get('city');
    console.log(city)
    const data = weatherData[city] || {
        temperature: "N/A",
        condition: "N/A",
        humidity: "N/A",
        wind: "N/A",
    };
    console.log(data)
    return new Response(JSON.stringify({ city, ...data }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}