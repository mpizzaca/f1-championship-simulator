import React from "react";
import "./DriverListItem.scss";

export default function DriverListItem(props) {
  return (
    <li className="drivers__driver">
      <div className="driver__aside">
        <img
          className="driver__img"
          src={props.profile_image}
          alt={props.name}
          style={{ backgroundColor: props.constructor_color }}
          draggable={false}
        />
        <img className="driver__flag" src={props.flag}/>
      </div>
      <strong className="driver__name">{props.name}</strong>
      <div className="driver__points">
        <p className="points__number">{props.points}</p>
        <small className="points__label">POINTS</small>
      </div>
    </li>
  );
}
