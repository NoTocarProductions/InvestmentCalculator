import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {


  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlySavings, setYearlySavings] = useState("");
  const [enteredInterest, setInterest] = useState("");
  const [enteredDuration, setDuration] = useState("");


    const CurrentSavingsChangeHandler = (event) => {
        setCurrentSavings(event.target.value);
    }
    const YearlySavingsChangeHandler = (event) => {
        setYearlySavings(event.target.value);
    }
    const InterestChangeHandler = (event) => {
        setInterest(event.target.value);
    }
    const DurationChangeHandler = (event) => {
        setDuration(event.target.value);
    }

  const SubmitHandler = (event) => {
    console.log("whatup");
    event.preventDefault();

    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlySavings: enteredYearlySavings,
      interest: enteredInterest,
      duration: enteredDuration,
    };

    props.onAddInvestment(investmentData);

    setCurrentSavings("");
    setYearlySavings("");
    setInterest("");
    setDuration("");
  };

  const ResetHandler = () => {
  props.onReset();
    setCurrentSavings("");
    setYearlySavings("");
    setInterest("");
    setDuration("");
  }


  return (
    <form className="form" onSubmit={SubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onChange={CurrentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlySavings}
            onChange={YearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input 
          type="number" 
          id="expected-return" 
          value={enteredInterest}
          onChange={InterestChangeHandler}
           />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input 
          type="number" 
          id="duration" 
          value={enteredDuration}
          onChange={DurationChangeHandler}
           />
        </p>
      </div>

      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={ResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
