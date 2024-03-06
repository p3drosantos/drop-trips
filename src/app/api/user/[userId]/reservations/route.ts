import { prisma } from "@/lib/prisma";
import { useParams, useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
): Promise<void | Response> {
  if (!userId) {
    return new NextResponse("User ID is required", { status: 400 });
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId,
    },
    include: {
      trip: true,
    },
  });

  return new NextResponse(JSON.stringify(reservations), { status: 200 });
}
