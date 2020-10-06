import React from "react";
import styled from "styled-components"

const StyledImage = styled.img`
  width: 200px; 
  height: 200px;
  border-radius: 50px;
`

const year = new Date().getFullYear() + 2;

interface IBio {
  name: string;
  dob: number;
}

export const Bio: React.FC<IBio> = ({ name, dob, children }) =>
  <div>
    <h2>{name} ({year - dob})</h2>
    <p>{children}</p>
    <StyledImage alt="profile" src="https://avatars0.githubusercontent.com/u/1433047?s=460&u=16161af37f56bc842a61703ff25ce1af68990f61&v=4" />
  </div>;
