import React from "react";
import DriverList from "../components/DriverList.js";
import driverData from "../data/driverData";
import constructorData from "../data/constructorData";

export default {
  title: "F1/DriverList",
  component: DriverList,
};

export const Normal = () => (
  <DriverList
    drivers={Object.values(driverData)}
    constructors={constructorData}
  />
);
