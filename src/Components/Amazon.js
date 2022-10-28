import React, { useState } from "react";
import list from "../Data";
import Cards from "./Cards";
import "../Styles/Amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards Key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
