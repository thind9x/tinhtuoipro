/*
  Copyright 2023  Phuong My Chi Entertainment Co.,Ltd

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



import React, { useState } from "react";
import "./App.css";
import { useCalculatorAge, useLanguage } from "./hooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function App() {

  const { memoizedGetMessage, isVietNam, onChangeLang, } = useLanguage()
  const { age, errorMsg, handleInputChange, memoizedHandleSubmit, isRealAge, onChangeToRealAge, onChangeDate, startDate } = useCalculatorAge();



  return (
    <div style={{ marginTop: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <p style={{ textAlign: 'center' }}>{memoizedGetMessage("Calculate age")}</p>
          <form onSubmit={memoizedHandleSubmit}>
            {isRealAge ? <React.Fragment>
              <p style={{fontSize:"13px"}}>{memoizedGetMessage(`Enter your birthday with format: dd/mm/yyyy`)}</p>
              <DatePicker
              dateFormat="dd/MM/yyyy"
            
              selected={startDate}
              onChange={(date) => { onChangeDate(date) }}
            /> 
            </React.Fragment>: <input
              style={{ padding: '8px', margin: '8px' }}
              type={"number"}
              onChange={handleInputChange}
              pattern="[0-9]*"
              placeholder={memoizedGetMessage("Enter your birthday or age")}
            />}
            <button style={{ padding: '8px', margin: '8px', backgroundColor: 'green' }} type='submit'>
              {memoizedGetMessage('Calculate')}
            </button>
          </form>
        </div>
      </div>

      <p style={{ color: "red", fontSize: '14px', textAlign: 'center' }}>{memoizedGetMessage(errorMsg)}</p>
      <div>
        {age >= 0 && age < 115 && age !== null ? (
          <p style={{ textAlign: 'center', fontSize: '14px' }}>
            {memoizedGetMessage("Your age is")} {age?.toFixed(0)}
          </p>
        ) : age >= 1900 && age >= 0 ? (
          <p style={{ textAlign: 'center', fontSize: '14px' }}>
            {memoizedGetMessage("Your birth year is")} {age?.toFixed(0)}
          </p>
        ) : null}
      </div>
      <div style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
        <input type="checkbox" onChange={onChangeToRealAge} name="lang" defaultChecked={isRealAge} /> <span style={{fontSize:"14px"}}>{isRealAge === false ? `${memoizedGetMessage(`Accurate age calculation is off`)}` : `${memoizedGetMessage(`Accurate age calculation is on`)}`}</span>
      </div>
      <div onChange={onChangeLang} style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
        <input type="radio" value="vie" name="lang" checked={isVietNam === "vie"} /> {memoizedGetMessage("Vietnamese")}
        <input type="radio" value="eng" name="lang" checked={isVietNam === "eng"} /> {memoizedGetMessage("English")}
      </div>
      <p style={{ fontSize: '13px', textAlign: 'center' }}>{memoizedGetMessage(`This page only supports human age calculation, does not support natural or antique age calculation`)}</p>

      <p style={{ fontSize: '13px', textAlign: 'center' }}>{memoizedGetMessage(`This website make just for fun, for more information please visit:`)}</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div>
          <a target="_blank" href="https://github.com/devquen2023/tinhtuoipro" rel="noreferrer">Github</a>
        </div>
      </div>
      <div className="copyright" style={{ fontSize: '10px', textAlign: 'center', display: 'none' }}>
        <p>Copyright (c) 2023 Phuong My Chi Entertainment Co.,Ltd. Published by MIT  license </p>
      </div>
    </div>
  );
}
