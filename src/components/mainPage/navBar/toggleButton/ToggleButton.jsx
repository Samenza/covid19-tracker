import styled from "styled-components";

const ToggleWrapper = styled.div`
  position: relative;
  margin-right: 2rem;
`;

const ToggleLable = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 22px;
  border-radius: 15px;
  background-color: #888888;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    margin: 1px 2px;
    transition: 0.2s;
  }
`;
const Toggle = styled.input`
  opacity: 0;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  &:checked + ${ToggleLable} {
    background-color: #0f4c5c;
    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      margin-left: 24px;
      transition: 0.2s;
    }
  }
`;
const ToggleButton = (theme) => {
  const changeTheme = ({ setTheme, theme }) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ToggleWrapper>
      <Toggle
        onChange={() => changeTheme(theme)}
        id="ToggleButton"
        type="checkbox"
      />
      <ToggleLable htmlFor="ToggleButton" />
    </ToggleWrapper>
  );
};

export default ToggleButton;
