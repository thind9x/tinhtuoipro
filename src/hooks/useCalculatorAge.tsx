import { useState, useMemo, useCallback } from "react";
import useLanguage from "./useLanguage";

const calculateAgeFromYear = (year: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
  };

  const useCalculatorAge = () => {
    const [age, setAge] = useState<number>();
    const [birthYear, setBirthYear] = useState<number>();
    const [errorMsg, setErrorMsg] = useState("");
    const {memoizedGetMessage} = useLanguage()


    const memoizedCalculateAgeFromYear = useMemo(() => calculateAgeFromYear, []);

    const memoizedHandleSubmit = useCallback(
      (e: any) => {
        const currentYear = new Date().getFullYear();
  
        if (!Number.isInteger(birthYear) || birthYear < 0) {
          setErrorMsg("Please enter a valid birth year or age.");
          setAge(null);
          e.preventDefault();
          return false;
        }
  
        if (birthYear > currentYear) {
          setErrorMsg("Birth year cannot be greater than the current year.");
          setAge(null);
          e.preventDefault();
          return false;
        }
  
        if (birthYear > 115 && birthYear <= 1908) {
          setErrorMsg("No one can have an age or birth year like that.");
          setAge(null);
          e.preventDefault();
          return false;
        }
  
        setErrorMsg("");
        setAge(memoizedCalculateAgeFromYear(birthYear));
        e.preventDefault();
      },
      [birthYear, memoizedCalculateAgeFromYear],
    );
  
    const handleInputChange = (e: any) => {
      const inputValue = e?.target.value;
      if (/^\d*$/.test(inputValue)) {
        setBirthYear(parseInt(inputValue));
        setErrorMsg("");
      } else {
        setErrorMsg(memoizedGetMessage("Please enter a positive integer."));
        setAge(null);
      }
    };
  
    return {
      handleInputChange,
      memoizedHandleSubmit,
      errorMsg,
      age,
    };
  };
  
  export default useCalculatorAge;
