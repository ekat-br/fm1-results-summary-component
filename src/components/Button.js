import styled from "styled-components";

const Button = () => {
  return <StyledButton>Continue</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 288px;
  height: 56px;
  border-radius: 128px;
  background: var(--Dark-Navy);
  color: #ffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
  border: none;
  &:hover {
    background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
  }

  @media (max-width: 375px) {
    margin: 0;
    margin-bottom: 30px;
  }
`;
