import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    projects: [
      {
        name: "Ahmad Mufid Risqi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  });
}
