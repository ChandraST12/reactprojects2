import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styles/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);
  // Function to roll the dice and update score accordingly.
  const GenerateNum = (min, max) => {
    const numb = Math.floor(Math.random() * (max - min) + min);
    console.log(numb);
    return numb;
  };

  const roleDice = () => {
    if (!selectedNum) {
      setError("you have not selected any number");
      return;
    }
    setError("");
    const randomNumber = GenerateNum(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNum == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <GameContainer>
      <div className="top">
        <TotalScore score={score} />
        <NumberSelector
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          error={error}
          setError={setError}
        />
      </div>
      <div>
        <RollDice currentDice={currentDice} roleDice={roleDice} />
      </div>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </GameContainer>
  );
};

export default GamePlay;

const GameContainer = styled.main`
  height: 100vh;
  width: 1140px;
  margin: 0 auto;
  padding: 64px 80px 144px 80px;
  .top {
    display: flex;
    justify-content: space-between;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;
