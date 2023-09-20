import styled from "styled-components";
import ResultsSummary from "./ResultsSummary";
import ResultsRectangle from "./ResultsRectangle";

const Rectangle = () => {
  return (
    <Container>
      <StyledRectangle>
        <ResultsRectangle />
        <ResultsSummary />
      </StyledRectangle>
    </Container>
  );
};

export default Rectangle;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 375px) {
    background-color: #fff;
  }
`;

const StyledRectangle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(61, 108, 236, 0.15);
  width: 736px;
  max-width: 100%;
  height: 512px;

  @media (max-width: 375px) {
    padding: 0;
    margin: 0;
    height: auto;
    flex-wrap: wrap;
    border-radius: 0;
    gap: 0;
  }
`;
