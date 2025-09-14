import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("/research/afile.pdf", 302);
}