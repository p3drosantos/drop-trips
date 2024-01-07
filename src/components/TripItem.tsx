"use client";
import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px]">
          <Image
            src={trip.coverImage}
            fill
            style={{ objectFit: "cover" }}
            alt={trip.name}
            className="rounded-lg shadow-sm"
          />
        </div>

        <h3 className="text-primaryDark font-medium text-sm mt-2">
          {trip.name}
        </h3>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <span className="text-xs text-grayPrimary">{trip.location}</span>
        </div>
        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}{" "}
          </span>
          por dia
        </p>
      </div>
    </Link>
  );
};

export default TripItem;
