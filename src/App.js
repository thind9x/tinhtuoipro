import { useState } from "react";

export default function App() {
  const [age, setAge] = useState();
  const [year, setYear] = useState();
  const [errorMsg, setError] = useState("")
  const getAge = (year) => {
    const currentYear = new Date().getFullYear();
    let age = parseInt(currentYear) - parseInt(year);
   
    setAge(parseInt(age));
  };

  const handleSubmit = (e) => {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(year) || year < 0) {
      setError("Vui lòng nhập đúng năm sinh hoặc tuổi")
      setAge()


    } 
    if(year > currentYear){
      setError("Năm sinh ko thể lớn hơn năm hiện tại")
      setAge()
      e.preventDefault();

      return false;

    }
    if(year > 120 && year < 1910  ){
      setAge()
      setError("Không ai có thể có tuổi thọ hoặc năm sinh như vậy")
      e.preventDefault();
      return false;

    }
    else {
      setError("")
      getAge(year);

    }
    e.preventDefault();
  };

  const onChangeNumber = (e) => {
    const inputValue = e?.target.value;
    // Use a regular expression to only allow numeric characters (0-9)
    
    if (/^\d*$/.test(inputValue)) {
      setYear(parseInt(inputValue));
      setError("")

    } else {
      setError("Vui lòng nhập số nguyên dương")
      setAge()
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <div >
        <p style={{ textAlign: 'center' }}>Tính tuổi</p>
        <form onSubmit={handleSubmit}>
          <input
            style={{ padding: '8px', margin: '8px' }}
            type='text'
            onChange={onChangeNumber}
            pattern="[0-9]*"
            placeholder='Nhập năm sinh hoặc tuổi'
            required
          />
          <button style={{ padding: '8px', margin: '8px', backgroundColor: 'green' }} type='submit'>
            Tính
          </button>
        </form>
        <div>
          <p style={{ color: "red",fontSize:'14px',textAlign:'center' }}>{errorMsg}</p>
        </div>
        <div>
          {age >= 0 && age < 150 ? (
            <p style={{ textAlign: 'center' }}>Tuổi của bạn là : {age?.toFixed(0)}</p>
          ) : age >= 1900 && age >= 0 ? (
            <p style={{ textAlign: 'center' }}>Năm sinh bạn là : {age?.toFixed(0)}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}