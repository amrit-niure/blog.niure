
import { formatDate } from "@/lib/utils";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
    try {
        return NextResponse.json({ success: true,date: formatDate(Date.now()) }, { status: 200 });
    } catch (error) {
        console.log(error)
    }
}