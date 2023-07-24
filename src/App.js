import { useState } from "react";
export default function App() {
  const [age, setAge] = useState();
  const [birthYear, setBirthYear] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [isVietNam, setViet] = useState("vie");

  const calculateAgeFromYear = (year) => {
    const currentYear = new Date().getFullYear();
    return parseInt(currentYear) - parseInt(year);
  };

  const handleSubmit = (e) => {
    const currentYear = new Date().getFullYear();

    if (!Number.isInteger(birthYear) || birthYear < 0) {
      setErrorMsg("Please enter a valid birth year or age.");
      setAge();
      e.preventDefault();
      return false;
    }

    if (birthYear > currentYear) {
      setErrorMsg("Birth year cannot be greater than the current year.");
      setAge();
      e.preventDefault();
      return false;
    }

    if (birthYear > 120 && birthYear < 1910) {
      setErrorMsg("No one can have an age or birth year like that.");
      setAge();
      e.preventDefault();
      return false;
    }

    setErrorMsg("");
    setAge(calculateAgeFromYear(birthYear));
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const inputValue = e?.target.value;
    if (/^\d*$/.test(inputValue)) {
      setBirthYear(parseInt(inputValue));
      setErrorMsg("");
    } else {
      setErrorMsg(getMessage("Please enter a positive integer."));
      setAge();
    }
  };

  const englishMessages = {
    "Please enter a valid birth year or age.": "Please enter a valid birth year or age.",
    "Birth year cannot be greater than the current year.": "Birth year cannot be greater than the current year.",
    "No one can have an age or birth year like that.": "No one can have an age or birth year like that.",
    "Please enter a positive integer.": "Please enter a positive integer.",
    "Your age is": "Your age is",
    "Your birth year is": "Your birth year is",
    "Enter your birthday or age":"Enter your birthday or age",
    "Calculate age":"Calculate age",
    "Calculate":"Calculate",
    "This website make just for fun, for more information please visit:":"This website make just for fun, for more information please visit:"
  };

  const vietnameseMessages = {
    "Please enter a valid birth year or age.": "Vui lòng nhập năm sinh hợp lệ hoặc tuổi.",
    "Birth year cannot be greater than the current year.": "Năm sinh không thể lớn hơn năm hiện tại.",
    "No one can have an age or birth year like that.": "Không ai có thể có tuổi thọ hoặc năm sinh như vậy.",
    "Please enter a positive integer.": "Vui lòng nhập số nguyên dương.",
    "Your age is": "Tuổi của bạn là",
    "Your birth year is": "Năm sinh của bạn",
    "Enter your birthday or age":"Nhập năm sinh hoặc tuổi",
    "Calculate age":"Tính tuổi",
    "Calculate":"Tính",
    "This website make just for fun, for more information please visit:":"Trang web này chỉ làm cho vui, để biết thêm thông tin vui lòng truy cập:"
  };

  const getMessage = (message) => {
    return isVietNam === "vie" ? vietnameseMessages[message] || message : englishMessages[message] || message;
  };

  const onChangeLang = (e) => {
    setViet(e.target.value);
  };

  return (
    <div style={{ marginTop: '100px' }}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div>
        <p style={{ textAlign: 'center' }}>{getMessage("Calculate age")}</p>
        <form onSubmit={handleSubmit}>
          <input
            style={{ padding: '8px', margin: '8px' }}
            type='text'
            onChange={handleInputChange}
            pattern="[0-9]*"
            placeholder={getMessage("Enter your birthday or age")}
            required
          />
          <button style={{ padding: '8px', margin: '8px', backgroundColor: 'green' }} type='submit'>
            {getMessage('Calculate')}
          </button>
        </form>
        </div>
        </div>

          <p style={{ color: "red", fontSize: '14px', textAlign: 'center' }}>{getMessage(errorMsg)}</p>
        <div>
          {age >= 0 && age < 150 ? (
            <p style={{ textAlign: 'center', fontSize: '14px' }}>
              {getMessage("Your age is")} {age?.toFixed(0)}
            </p>
          ) : age >= 1900 && age >= 0 ? (
            <p style={{ textAlign: 'center', fontSize: '14px' }}>
              {getMessage("Your birth year is")} {age?.toFixed(0)}
            </p>
          ) : null}
        </div>
        <div onChange={onChangeLang} style={{display:'flex',margin:'auto', justifyContent:'center'}}>
          <input type="radio" value="vie" name="lang" checked={isVietNam === "vie"} /> Vietnamese
          <input type="radio" value="eng" name="lang" checked={isVietNam === "eng"} /> English
        </div>
        <p style={{fontSize:'13px',textAlign:'center'}}>{getMessage(`This website make just for fun, for more information please visit:`)}</p>
        <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
           <div>
           <a target="_blank" href="https://github.com/devquen2023/tinhtuoipro.git" rel="noreferrer">Github</a> 
           </div>
        </div>
         <div className="copyright" style={{fontSize:'10px',textAlign:'center',display:'none'}}>
            <p>Copyright (c) 2023 Phuong My Chi Entertainment Co.,Ltd. Published by MIT  license </p>
          </div>   
      </div>
  );
}