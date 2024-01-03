"use client";

import QuickSearch from "./components/QuickSearch";
import TripSearch from "./components/TripSearch";

export const HomePage = () => {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  );
};

export default HomePage;
