import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const StyledImage = styled.img`
  width: 400px; 
  height: 400px;
  /* box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.6); */
  border: 6px solid red;
  border-radius: 50px 50px 0px 50px;
`;

const StyledContainer = styled.div`
  background: red;
  color:black;
  padding-bottom:20px;
  box-shadow: 10px 10px 59px 0px rgba(0,0,0,0.75);
  border-radius: 50px;
  /* padding: 40px; */
  h2{
    line-height: 0;
  }
`;

const year = new Date().getFullYear() + 2;

interface IBio {
  name: string;
  dob: number;
}

export const Bio: React.FC<IBio> = ({ name, dob, children }) => {
  // This ...
  const [loaded, setLoaded] = React.useState(0);

  const props = useSpring({ opacity: loaded });
  React.useEffect(() => setLoaded(1), []);


  return <animated.div style={{ opacity: props.opacity }}>
    <StyledContainer>
      <StyledImage
        alt="profile"
        src="https://avatars0.githubusercontent.com/u/1433047?s=460&u=16161af37f56bc842a61703ff25ce1af68990f61&v=4"
      />
      <h2>{name} ({year - dob})</h2>
      <p>{children}</p>
    </StyledContainer>
  </animated.div>;
};
