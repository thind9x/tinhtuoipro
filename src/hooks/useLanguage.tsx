import { useState, useMemo, useCallback } from "react";

const useLanguage = () => {
  const [isVietNam, setVietNam] = useState("vie");
    const englishMessages = {
       "English":"English",
       "Vietnamese":"Vietnamese",
        "Please enter a valid birth year or age.": "Please enter a valid birth year or age.",
        "Birth year cannot be greater than the current year.": "Birth year cannot be greater than the current year.",
        "No one can have an age like that.": "No one can have an age like that.",
        "Please enter a positive integer.": "Please enter a positive integer.",
        "Your age is": "Your age is",
        "Your birth year is": "Your birth year is",
        "Enter your birthday or age":"Enter your birthday or age",
        "Calculate age":"Calculate age",
        "Calculate":"Calculate",
        "This website make just for fun, for more information please visit:":"This website make just for fun, for more information please visit:"
      };
    
      const vietnameseMessages = {
        "English":"Tiếng anh",
       "Vietnamese":"Tiếng việt",
        "Please enter a valid birth year or age.": "Vui lòng nhập năm sinh hoặc tuổi hợp lệ .",
        "Birth year cannot be greater than the current year.": "Năm sinh không thể lớn hơn năm hiện tại.",
        "No one can have an age like that.": "Không ai có thể có tuổi thọ như vậy.",
        "Please enter a positive integer.": "Vui lòng nhập số nguyên dương.",
        "Your age is": "Tuổi của bạn là",
        "Your birth year is": "Năm sinh của bạn là",
        "Enter your birthday or age":"Nhập năm sinh hoặc tuổi",
        "Calculate age":"Tính tuổi",
        "Calculate":"Tính",
        "This website make just for fun, for more information please visit:":"Trang web này chỉ làm cho vui, để biết thêm thông tin vui lòng truy cập:",
        "Please enter your  birth year or age":"Vui lòng nhập năm sinh hoặc tuổi của bạn"
      };
    





  const memoizedGetMessage = (message: string): string => {
    return  isVietNam === "vie" ? vietnameseMessages[message] || message : englishMessages[message] || message;
  };
  const onChangeLang = (e: any) => {
    setVietNam(e.target.value);
  };
  
  return {
    memoizedGetMessage,
    onChangeLang,
    isVietNam,
  };
};

export default useLanguage;
