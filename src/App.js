export default function App() {
  const [age, setAge] = useState();
  const [year, setYear] = useState();

  const getAge = (year) => {
    const currentYear = new Date().getFullYear();
    let age = parseInt(currentYear) - parseInt(year);
    setAge(parseInt(age));
  };

  const handleSubmit = (e) => {
    if (!Number.isInteger(year) || year < 0) {
      alert("Vui lòng nhập đúng năm sinh hoặc tuổi");
    } else {
      getAge(year);
    }
    e.preventDefault();
  };

  const onChangeNumber = (e) => {
    const inputValue = e?.target.value;
    // Use a regular expression to only allow numeric characters (0-9)
    if (/^\d*$/.test(inputValue)) {
      setYear(parseInt(inputValue));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <div>
        <p style={{ textAlign: 'center' }}>Tính tuổi</p>
        <form onSubmit={handleSubmit}>
          <input
            style={{ padding: '8px', margin: '8px' }}
            type='text'
            onChange={onChangeNumber}
            placeholder='Nhập năm sinh hoặc tuổi'
            required
          />
          <button style={{ padding: '8px', margin: '8px', backgroundColor: 'green' }} type='submit'>
            Tính
          </button>
        </form>
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
