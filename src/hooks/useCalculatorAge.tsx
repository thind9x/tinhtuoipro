import { useState, useMemo, useCallback } from "react";
import useLanguage from "./useLanguage";



  const useCalculatorAge = () => {
    const [age, setAge] = useState<number>();
    const [birthYear, setBirthYear] = useState<number>();
    const [errorMsg, setErrorMsg] = useState("");
    const {memoizedGetMessage} = useLanguage()
    const [isRealAge,setisRealAge] = useState<boolean>(false)
    const calculateAgeFromYear = (year: number) => {
      const currentYear = new Date().getFullYear();
      return currentYear - year;
    };

    const memoizedCalculateAgeFromYear = useMemo(() => calculateAgeFromYear, []);

    const memoizedHandleSubmit = useCallback(
      (e: any) => {
        const currentYear = new Date().getFullYear();
          // if(birthYear===null){
          //   setErrorMsg("Please enter your  birth year or age");
          //   e.preventDefault();
          //   return false;

          // }
        
          if (!Number.isInteger(birthYear) )  {
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
    
          if (birthYear > 114 && birthYear <= 1908) {
            setErrorMsg("No one can have an age like that.");
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
  
    const handleInputChange2 = (e: any) => {
      const inputValue = e?.target.value;
      if (/^\d*$/.test(inputValue)) {
        setBirthYear(parseInt(inputValue));
        setErrorMsg("");
      } else {
        setErrorMsg(memoizedGetMessage("Please enter a positive integer."));
        setAge(null);
      }
    };
    
    const handleInputChange = useCallback((e:any)=>{
      const inputValue = e?.target.value;
      if (/^\d*$/.test(inputValue)) {
        setBirthYear(parseInt(inputValue));
        setErrorMsg("");
      } else {
        setErrorMsg(memoizedGetMessage("Please enter a positive integer."));
        setAge(null);
      }
    },[])
 
    const onChangeToRealAge = (e) =>{
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
