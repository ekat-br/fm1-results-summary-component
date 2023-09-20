import styled from "styled-components";
import Button from "./Button";
import { ReactComponent as IconReaction } from "../assets/images/icon-reaction.svg";
import { ReactComponent as IconMemory } from "../assets/images/icon-memory.svg";
import { ReactComponent as IconVerbal } from "../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../assets/images/icon-visual.svg";

const ResultsSummary = () => {
  return (
    <Container>
      <SummaryHeading>Summary</SummaryHeading>
      <Disciplines>
        <Discipline color="#f55">
          <DisciplineTitle>
            <IconReaction />
            Reaction
          </DisciplineTitle>
          <Score>
            <AchievedScore>80</AchievedScore>
            <TotalScore> / 100</TotalScore>
          </Score>
        </Discipline>
        <Discipline color="#ffb21e">
          <DisciplineTitle>
            <IconMemory />
            Memory
          </DisciplineTitle>
          <Score>
            <AchievedScore>92</AchievedScore>
            <TotalScore> / 100</TotalScore>
          </Score>
        </Discipline>
        <Discipline color="#00bb8f">
          <DisciplineTitle>
            <IconVerbal />
            Verbal
          </DisciplineTitle>
          <Score>
            <AchievedScore>61</AchievedScore>
            <TotalScore> / 100</TotalScore>
          </Score>
        </Discipline>
        <Discipline color="#1125D6">
          <DisciplineTitle>
            <IconVisual />
            Visual
          </DisciplineTitle>
          <Score>
            <AchievedScore>73</AchievedScore>
            <TotalScore> / 100</TotalScore>
          </Score>
        </Discipline>
      </Disciplines>
      <Button />
    </Container>
  );
};

export default ResultsSummary;

const Container = styled.div`
  text-align: left;
  margin: 38px auto auto 40px;

  @media (max-width: 375px) {
    margin: 0px auto auto 40px;
  }
`;
const SummaryHeading = styled.div`
  color: var(--Dark-Navy, #303b59);
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px 28px;
  display: inline-block;
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const Score = styled.div`
  text-align: right;
`;

const AchievedScore = styled.span`
  color: var(--Dark-Navy);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const TotalScore = styled.span`
  color: var(--Dark-Navy);
  opacity: 0.5;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Disciplines = styled.div``;

const DisciplineTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  span {
    margin-left: 12px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const Discipline = styled.div`
  width: 288px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.95) 100%
  ),
  ${(props) => props.color};
  color: ${(props) => props.color};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px; 
  box-sizing: border-box; 


  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
};`;
