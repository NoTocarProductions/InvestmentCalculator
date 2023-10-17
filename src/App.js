import Header from "./components/Header/Header";
import InputForm from "./components/Form/InputForm";
import InvestmentOverview from "./components/Table/InvestmentOverview";
import { useState } from "react";
import React from "react";
function App() {
  const [isValid, setValid] = useState(false);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlySavings"];
    const expectedReturn = +userInput["interest"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;
    let investedCapital = currentSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      investedCapital += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
      });
    }
    setYearlyData(yearlyData);
    setValid(true);

    return yearlyData;
  };

  const ResetHandler = () => {
    setValid(false);
    setYearlyData([]);
  };

  return (
    <div>
      <Header />

      <InputForm onAddInvestment={calculateHandler} onReset={ResetHandler} />

      {!isValid && (
        <p>There are no investments yet, please add a new calculation</p>
      )}
      {isValid && <InvestmentOverview data={yearlyData} />}
    </div>
  );
}

export default App;
