import React from "react";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";
import TripSearch from "./components/TripSearch";

export default function HomePage() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
