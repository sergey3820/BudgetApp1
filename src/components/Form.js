import React, { useContext } from 'react'
import "./Form.css"
import FormItem from './FormItem'
import { context } from "../Context"

function Form({ state }) {

    const {input1, input2, addItem, input1Change, input2Change} = useContext(context)

    return (
        <form className="form_wrapper">
            <div className="form_inputs">
                <div className="inp1">
                <p className="nameInout1">Charge</p>
                <input type="text" placeholder="Name" className="nameInput" value={input1} onChange={input1Change} />
                </div>
                <div className="inp2">
                    <p className="nameInput2">Amount</p>
                    <input type="text" placeholder="Price" className="nameInput" value={input2} onChange={input2Change} />
                </div>
            </div>
            <button type="submit" className="submit_btn" onClick={addItem}>
               Submit
                <i class="fas fa-arrow-right"></i>
            </button>
            { state.map((el) => (
                <FormItem all={el} key={el.id} />
            )) }
        </form>
    )
}

export default Form
