import React from "react";
import DriverListItem from "../components/DriverListItem.js";

export default {
  title: "F1/DriverListItem",
  component: DriverListItem,
};

const driver = {
  name: "Max Verstappen",
  profile_image: "/images/drivers/verstappen_profile.png",
  constructor: "Red Bull Racing",
  constructor_color: "#0600ef",
  points: 18,
  flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg",
};

export const Normal = () => <DriverListItem key={driver.name} {...driver} />;
