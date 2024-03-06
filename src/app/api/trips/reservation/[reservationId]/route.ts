import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
): Promise<void | Response> {
  if (!reservationId) {
    return new NextResponse("Reservation ID is required", { status: 400 });
  }

  const reservation = await prisma.tripReservation.delete({
    where: {
      id: reservationId,
    },
  });

  return new NextResponse(JSON.stringify(reservation), { status: 200 });
}
