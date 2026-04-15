import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {

    //const [inputValue, setInputValue] = useState("");
    //Liflited up this state to the parent component, for all the chidren can use this state value
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue} </p>;
};