import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("wanderluxe");

    const users = await db.collection("users").find({}).toArray();
    const tours = await db.collection("tours").find({}).toArray();
    const bookings = await db.collection("bookings").find({}).toArray();

    return NextResponse.json({
      users,
      tours,
      bookings,
    });
  } catch (error) {
    console.error("Admin Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch admin data" },
      { status: 500 }
    );
  }
}