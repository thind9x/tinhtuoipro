import { useState, useMemo, useCallback } from "react";
import useLanguage from "./useLanguage";

function formatNumber(num) {
  return num.toString().padStart(2, '0');
}

const useCalculatorAge = () => {
  const [age, setAge] = useState<number>();
  const [birthYear, setBirthYear] = useState<string>();
  const [errorMsg, setErrorMsg] = useState("");
  const [isRealAge, setisRealAge] = useState<boolean>(false)
  const calculateAgeFromYear = (year: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
  };

  // const memoizedCalculateAgeFromYear = useMemo(() => calculateAgeFromYear, []);

  const memoizedHandleSubmit = useCallback(
    (e: any) => {
      const currentYear = new Date().getFullYear();
      setAge(null)

     if(isRealAge){
      const birthYearInput = new Date(birthYear);

      const currentDateInput = new Date();
      const birthYearFormat = birthYearInput.getFullYear();
      const birthMonth = birthYearInput.getMonth() + 1; 
      const birthDay = birthYearInput.getDate();
      
      const currentYear = currentDateInput.getFullYear();
      const currentMonth = currentDateInput.getMonth() + 1;
      const currentDay = currentDateInput.getDate();


      let ageReal = currentYear - birthYearFormat;
      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        ageReal--; 
      }
      if (!Number.isInteger(parseInt(birthYear)) )  {
        setErrorMsg("Please enter a valid birth year or age.");
        setAge(null);
        e.preventDefault();
        return false;
      }

      if (birthYearFormat > currentYear) {
        setErrorMsg("Birth year cannot be greater than the current year.");
        setAge(null);
        e.preventDefault();
        return false
      }
      if (birthYearFormat < 1909) {
        setErrorMsg("Year of birth should not be less than 1909")
        setAge(null);
        e.preventDefault();
        return false
      }

      else {
    
        setAge(ageReal)
        setErrorMsg("");
        e.preventDefault();
        return true
      }
     }
     else{
      if (!Number.isInteger(parseInt(birthYear)) )  {
        setErrorMsg("Please enter a valid birth year or age.");
        setAge(null);
        e.preventDefault();
        return false;
      }

      if (parseInt(birthYear) > currentYear) {
        setErrorMsg("Birth year cannot be greater than the current year.");
        setAge(null);
        e.preventDefault();
        return false;
      }

      if (parseInt(birthYear) > 114 && parseInt(birthYear) <= 1908) {
        setErrorMsg("No one can have an age like that.");
        setAge(null);
        e.preventDefault();
        return false;
      }
      setAge(calculateAgeFromYear(parseInt(birthYear)))

      // setAge(memoizedCalculateAgeFromYear(parseInt(birthYear) ));
      setErrorMsg("");
      e.preventDefault();
     }

    
    },

    [birthYear, isRealAge, ],
  );


  const handleInputChange = useCallback((e: any) => {
    const inputValue = e?.target.value;
    
    if (/^\d*$/.test(inputValue)&& inputValue > 0) {
     setBirthYear(parseInt(inputValue));
    setErrorMsg("");
    }else{
    setErrorMsg("Vui lòg nhập số nguyên dương");
    } 
  }, [])

  const onChangeToRealAge = (e) => {
    setAge(null)
    setBirthYear(null)
    setisRealAge(!isRealAge);
    
  }

  return {
    handleInputChange,
    memoizedHandleSubmit,
    errorMsg,
    age,
    onChangeToRealAge,
    isRealAge
  };
};

export default useCalculatorAge;
