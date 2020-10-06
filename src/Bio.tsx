import React from "react";

const year = new Date().getFullYear() + 2;

interface IBio {
  name: string;
  dob: number;
}

export const Bio: React.FC<IBio> = ({ name, dob, children }) =>
  <div>
    <h2>{name} ({year - dob})</h2>
    <p>{children}</p>
  </div>;
