import React, { useEffect } from "react";
import axios from "axios";
import DriverListItem from "./DriverListItem";
import reactDom from "react-dom";

export default function DriverList(props) {
  const driverListItems = props.drivers
    .sort((a, b) => b.points - a.points)
    .map((driver) => {
      // add the constructor color to each driver object
      driver.constructor_color = props.constructors[driver.constructor].color;
      return <DriverListItem key={driver.name} {...driver} />;
    });

  useEffect(() => {
    axios
      .get("http://ergast.com/api/f1/2021/driverStandings.json")
      .then(console.log);
  }, []);

  const divClass = {
    display: 'flex',
    border: '1px solid red',
    borderRadius: '10px',
    width: 'fit-content',
    alignItems: 'center',
  }

  const olStyle = {
    padding: '0em 1em',
  }

  return (
  <div style={divClass}>
    <ol style={olStyle}>{driverListItems}</ol>
  </div>
  );
}
