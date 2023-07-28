/*
 Copyright 2023 Phuong My Chi Entertainment Co.,Ltd

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

import { useState, useCallback, useMemo } from 'react';
import useLanguage from "./useLanguage";

const useCalculatorAge = () => {
  const [age, setAge] = useState<number>();
  const [birthYear, setBirthYear] = useState<number>();
  const [errorMsg, setErrorMsg] = useState("");
  const { memoizedGetMessage } = useLanguage();
  const [isRealAge, setisRealAge] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());

  const calculateAgeFromYear = (year: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
  };

  const memoizedCalculateAgeFromYear = useMemo(() => calculateAgeFromYear, []);

  const handleInputChange = useCallback((e: any) => {
    const inputValue = e?.target.value;
    if (/^\d*$/.test(inputValue)) {
      const year = parseInt(inputValue);
      setBirthYear(year);
      setErrorMsg("");
    } else {
      setErrorMsg(memoizedGetMessage("Please enter a positive integer."));
      setAge(undefined);
    }
  }, [memoizedGetMessage]);

  const memoizedHandleSubmit = useCallback( async (e: any) => {
    e.preventDefault();
    if(isRealAge === false){
      const currentYear = new Date().getFullYear();

      if (!Number.isInteger(birthYear)) {
        setErrorMsg("Please enter a valid birth year or age.");
        return;
      }
  
      if (birthYear > currentYear) {
        setErrorMsg("Birth year cannot be greater than the current year.");
        return;
      }
  
      if (birthYear > 114 && birthYear <= 1908) {
        setErrorMsg("No one can have an age like that.");
        return;
      }
  
      setErrorMsg("");
      setAge(memoizedCalculateAgeFromYear(birthYear));
    }else{
      const currentDate = new Date();

      const birthYearFormat = startDate.getFullYear();
      const birthMonth = startDate.getMonth() + 1; 
      const birthDay = startDate.getDate();

      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();
      let ageReal = currentYear - birthYearFormat;
      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        ageReal--; 
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
  }, [birthYear, isRealAge, memoizedCalculateAgeFromYear, startDate]);

  const onChangeToRealAge = (e) => {
    setisRealAge(!isRealAge);
    setAge(null)
  };
 
  const onChangeDate = (date:any) =>{

    setStartDate(date)

  }
  return {
    handleInputChange,
    memoizedHandleSubmit,
    errorMsg,
    age,
    onChangeToRealAge,
    isRealAge,
    onChangeDate,
    startDate
  };
};

export default useCalculatorAge;
