import React from "react";
import "./InvestmentOverview.css";
import "./InvestmentHeader";
import InvestmentHeader from "./InvestmentHeader";
import NewInvestmentRow from "./NewInvestmentRow";

const InvestmentOverview = (props) => {
    if (props.data.length === 0) {
        return <h2>Found no investments.</h2>
    };
  return (
    <table className="result">
      <InvestmentHeader />
      <tbody>
        {props.data.map((dataPoint)=>(
        <NewInvestmentRow 
        key={dataPoint.year}
        year={dataPoint.year}
        savingsEndOfYear={dataPoint.savingsEndOfYear}
        yearlyInterest={dataPoint.yearlyInterest}
        totalInterest={dataPoint.totalInterest}
        investedCapital={dataPoint.investedCapital}
        />))}
      </tbody>
    </table>
  );
};

export default InvestmentOverview;
