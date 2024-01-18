"use client";

import { TripReservation } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyTrips = () => {
  const [reservations, setReservations] = useState<TripReservation[]>([]); // [1
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

  return <div className="My Trips"></div>;
};

export default MyTrips;
