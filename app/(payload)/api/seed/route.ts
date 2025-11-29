
import { NextResponse } from "next/server"



export async function Get(request : Request){



  return NextResponse.json({ message : "succes"},{status : 200})
}
