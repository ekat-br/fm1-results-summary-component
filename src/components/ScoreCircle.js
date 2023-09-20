import styled from "styled-components";

const ScoreCircle = () => {
  return (
    <Circle>
      <Score>76</Score>
      <TotalScore>of 100</TotalScore>
    </Circle>
  );
};

export default ScoreCircle;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 35px 84px 0px 84px;
  background:linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%);
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    width: 140px;
    height: 140px;
    margin: 24px 117px 0px 118px;
  }

  
`;

const Score = styled.div`
  text-align: center;
  color: var(--Light-Blue, #cac9ff);
  text-align: center;
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  line-height: 72px;

  @media (max-width: 375px) {
    font-size: 56px;
  }
`;

const TotalScore = styled.div`
  color: var(--Light-Blue, #cac9ff);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.5168;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
