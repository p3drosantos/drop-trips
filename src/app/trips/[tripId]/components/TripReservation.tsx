"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { differenceInDays } from "date-fns";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  tripId: string;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  pricePerDay: number;
}

interface TripReservationForm {
  guests: number;
  startDate: Date;
  endDate: Date;
}

const TripReservation = ({
  tripId,
  tripStartDate,
  maxGuests,
  pricePerDay,
}: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>();

  const onSubmit = async (data: any) => {
    const response = await fetch("http://localhost:3000/api/trips/check", {
      method: "POST",
      body: JSON.stringify({
        startDate: data.startDate,
        endDate: data.endDate,
        tripId,
      }),
    });
    const res = await response.json();

    if (res.error.code === "TRIP_ALREADY_RESERVED") {
      setError("startDate", {
        type: "manual",
        message: "Data já reservada",
      });

      return setError("endDate", {
        type: "manual",
        message: "Data já reservada",
      });
    }

    if (res.error.code === "INVALID_START_DATE") {
      return setError("startDate", {
        type: "manual",
        message: "Data inicial inválida",
      });
    }

    if (res.error.code === "INVALID_END_DATE") {
      return setError("endDate", {
        type: "manual",
        message: "Data final inválida",
      });
    }
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              placeholderText="Data de Início"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              minDate={new Date(Date.now())}
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              placeholderText="Data Final"
              onChange={field.onChange}
              selected={field.value}
              className="w-full"
              // maxDate={tripEndDate}
              minDate={startDate || tripStartDate}
            />
          )}
        />
      </div>
      <Input
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        className="mt-4"
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório",
          },
        })}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDark">Total: </p>
        <p className="font-medium text-sm text-primaryDark">
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}`
            : "R$0"}
        </p>
      </div>
      <div className="pb-10 border-b border-grayLighter w-full">
        <Button
          className="mt-3 w-full"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
