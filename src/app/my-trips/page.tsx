"use client";

import { Prisma, TripReservation } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserReservationItem from "./components/UserReservationItem";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]); // [1
  const { status, data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      router.push("/");
    }

    const fetchReservations = async () => {
      const response = await fetch(
        `/api/user/${(data?.user as any).id}/reservations`
      );
      const reservations = await response.json();
      setReservations(reservations);
    };

    fetchReservations();
  }, [status]);

  console.log({ reservations });

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDark text-xl">Minhas Viagens</h1>
      {reservations?.map((reservation) => (
        <UserReservationItem reservation={reservation} key={reservation.id} />
      ))}
    </div>
  );
};

export default MyTrips;
