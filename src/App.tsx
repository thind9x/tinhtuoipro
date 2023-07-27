import "./App.css"
import { useLanguage, useCalculatorAge } from "./hooks"
import { DatePicker } from "./components"
export default function App() {

  const { memoizedGetMessage, isVietNam, onChangeLang, } = useLanguage()
  const { age, errorMsg, handleInputChange, memoizedHandleSubmit, onChangeToRealAge, isRealAge } = useCalculatorAge();

  return (
    <div style={{ marginTop: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <p style={{ textAlign: 'center' }}>{memoizedGetMessage("Calculate age")}</p>
          <form onSubmit={memoizedHandleSubmit}>
            {isRealAge?<input
              style={{ padding: '8px', margin: '8px' }}
              type={ "date"}
              defaultValue={age}
              onChange={handleInputChange}
              pattern="[0-9]*"
              placeholder={memoizedGetMessage("Enter your birthday or age")}
            />:<input
            style={{ padding: '8px', margin: '8px' }}
            type={ "number"}
            defaultValue={age}
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
        <input type="checkbox" disabled onChange={onChangeToRealAge} name="lang" defaultChecked={isRealAge} /> {isRealAge === false ? "Tính tuổi chính xác đang tắt" : "Tính tuổi chính xác đang bật"}
      </div>
      <div onChange={onChangeLang} style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
        <input type="radio" value="vie" name="lang" checked={isVietNam === "vie"} /> {memoizedGetMessage("Vietnamese")}
        <input type="radio" value="eng" name="lang" checked={isVietNam === "eng"} /> {memoizedGetMessage("English")}
      </div>

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
