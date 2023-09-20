import styled from "styled-components";
import ScoreCircle from "./ScoreCircle";

const ResultsRectangle = () => {
  return (
    <>
      <StyledResultsRectangle>
        <ResultTitle>Your Result</ResultTitle>
        <ScoreCircle />

        <ResultComment>
          <ResultHeading>Great</ResultHeading>
          <ResultText>
            Your performance exceed 65% of the people conducting the test here!
          </ResultText>
        </ResultComment>
      </StyledResultsRectangle>
    </>
  );
};

export default ResultsRectangle;

const StyledResultsRectangle = styled.div`
  width: 368px;
  height: 512px;
  border-radius: 32px;
  background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
  text-align: center;

  @media (max-width: 375px) {
    width: 100%;
    height: 356px;
    margin: 0;
    padding: 0;
    border-radius: 0px 0px 32px 32px;
  }
`;

const ResultComment = styled.div`
margin: 0px 54px 0px; 54px;
`;

const ResultTitle = styled.div`
  color: var(--Light-Blue, #cac9ff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 38px;

  @media (max-width: 375px) {
    font-size: 18px;
    margin-top: 24px;
  }
`;

const ResultHeading = styled.div`
  color: var(--White);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 28px;

  @media (max-width: 375px) {
    font-size: 24px;
    margin-top: 24px;
  }
`;

const ResultText = styled.div`
  color: var(--Light-Blue, #cac9ff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 8px 0px 40px;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
