import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json(
       [ {
            "id":1,
            "name":"John",
        },
        {
            "id":2,
            "name":"Jane",
        }]
    )
}