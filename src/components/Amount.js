import React, { useContext } from 'react'
import "./Amount.css"
import { context } from "../Context";

function Amount() {

    const {count} = useContext(context)

    return (
        <>
          <p className="amount_title">Total Spending : <span className="num">${ count.reduce((acc, curr) => {
              return (acc += parseInt(curr.price));
          }, 0) }</span></p>  
        </>
    )
}

export default Amount
