import React, { useEffect, useState } from 'react'
import "./App.css"
import Amount from './components/Amount'
import Form from './components/Form'
import { context } from "./Context"


function App() {

  const [alert, setAlert] = useState(false);
  const [state, setState] = useState([]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [count, setCount] = useState(state);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    console.log('changed');
    setCount(state);
  }, [state])

  function importItem(id) {
    setState(state.map((si) => {
      if (id === si.id) {
        si.imp = !si.imp;
      }
      console.log(si);
      setAlert(false);
      setDeleteAlert(false);
      return si;
    }))
  }

  function del(id) {
    setState(state.filter((s) => id !== s.id));
    setDeleteAlert(true)
    setAlert(false)
    return state;
  }

  const addItem = (Event) => {
    Event.preventDefault();
    console.log('prevented!');
    if (input1 === '' || input2 === '') {
      console.log('error');
      setAlert(true);
      setDeleteAlert(false);
    } else {
      setAlert(false);
      setDeleteAlert(false);
      setState([
        ...state,
        { id: Math.floor(Math.random() * 10000), name: input1, price: parseInt(input2), imp: false },
      ])
      console.log('has added!');
    setInput1('');
    setInput2('');
    }
  }

  const input1Change = (e) => {
    console.log(e.target.value)
    setInput1(e.target.value)
  }

  
  const input2Change = (e) => {
    console.log(e.target.value)
    setInput2(e.target.value)
  }



  return (
    <context.Provider value={{
      input1, input2, addItem, input1Change, input2Change, count, del, importItem,
    }}>
    <div className="app_wrapper">
      <div className={ alert ? "alert_wrapper" : "noneAlert" }>
        <p className="alert_title">Fill in all the inputs</p>
      </div>
      <div className={deleteAlert ? "alert_wrapper" : "noneAlert"}>
        <p className="alert_title">The item has been deleted</p>
      </div>
      <h1 className="app_title">Budget App</h1>
      <Form state={state} />
      <Amount />
    </div>
    </context.Provider>
  )
}

export default App
