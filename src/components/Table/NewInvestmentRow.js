import React from "react";

const NewInvestmentRow = (props) => {
    return (
        
          <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.totalInterest}</td>
            <td>{props.investedCapital}</td>
          </tr>
        
    )
}

export default NewInvestmentRow;