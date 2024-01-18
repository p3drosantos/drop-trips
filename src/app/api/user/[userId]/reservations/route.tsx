import { prisma } from "@/lib/prisma";
import { useParams, useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) {
  if (!userId) {
    return {
      status: 400,
      body: {
        message: "Missing user id",
      },
    };
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
