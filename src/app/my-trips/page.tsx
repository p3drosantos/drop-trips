"use client";

import { Prisma, TripReservation } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserReservationItem from "./components/UserReservationItem";
import Button from "@/components/Button";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]); // [1
  const { status, data } = useSession();

  const router = useRouter();

  const fetchReservations = async () => {
    const response = await fetch(
      `/api/user/${(data?.user as any).id}/reservations`
    );
    const reservations = await response.json();
    setReservations(reservations);
  };

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      router.push("/");
    }

    fetchReservations();
  }, [status]);

  console.log({ reservations });

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDark text-xl">Minhas Viagens</h1>
      {reservations.length > 0 ? (
        reservations?.map((reservation) => (
          <UserReservationItem
            fetchReservations={fetchReservations}
            reservation={reservation}
            key={reservation.id}
          />
        ))
      ) : (
        <div className="flex flex-col">
          <p className="mt-2 font-medium text-primaryDark">
            Você ainda não tem nenhuma reserva!
          </p>
          <Button
            onClick={() => router.push("/")}
            className="mt-5"
            variant="primary"
          >
            Fazer reserva
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
