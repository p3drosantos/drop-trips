"use client";

import Button from "@/components/Button";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}

const UserReservationItem = ({
  reservation,
  fetchReservations,
}: UserReservationItemProps) => {
  const { trip } = reservation;

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.error("Erro ao cancelar a reserva. Tente novamente.");
    }

    toast.success("Reserva cancelada com sucesso!");

    fetchReservations();
  };

  return (
    <div>
      {" "}
      <div>
        {/* CARD */}
        <div className="flex flex-col p-5 mt-5 border-solid border-grayLighter border shadow-lg rounded-lg">
          <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
            <div className="relative h-[106px] w-[124px]">
              <Image
                src={trip.coverImage}
                fill
                style={{ objectFit: "cover" }}
                alt={trip?.description}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl text-primaryDark font-semibold">
                {trip.name}
              </h2>
              <div className="flex items-center gap-1">
                <ReactCountryFlag countryCode={trip.countryCode} svg />
                <p className="text-xs text-grayPrimary underline">
                  {trip.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 text-primaryDark">
            <h3 className="text-sm">Data</h3>
            <div className="flex items-center gap-1">
              <p className="text-sm">
                {format(reservation.startDate, "dd 'de' MMMM", {
                  locale: ptBR,
                })}
              </p>
              {" - "}
              <p className="text-sm">
                {format(reservation.endDate, "dd 'de' MMMM.", { locale: ptBR })}
              </p>
            </div>

            <h3 className="text-sm mt-5">Hóspedes</h3>
            <p className="text-sm pb-5">{reservation.guests} hóspedes</p>

            <h3 className="font-semibold text-primaryDark mt-3 pt-5 border-t border-solid border-grayLighter">
              Informações sobre o preço
            </h3>

            <div className="flex justify-between mt-1">
              <p className="text-primaryDark text-sm mt-2">Total:</p>
              <p className="font-medium text-sm mt-2">
                R${Number(reservation.totalPaid)}
              </p>
            </div>
            <Button
              variant="danger"
              className="mt-5"
              onClick={handleDeleteClick}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;
