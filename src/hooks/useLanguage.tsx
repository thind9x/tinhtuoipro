import { useState, useMemo, useCallback } from "react";

const useLanguage = () => {
  const [isVietNam, setVietNam] = useState("vie");
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
        "Your birth year is": "Năm sinh của bạn là",
        "Enter your birthday or age":"Nhập năm sinh hoặc tuổi",
        "Calculate age":"Tính tuổi",
        "Calculate":"Tính",
        "This website make just for fun, for more information please visit:":"Trang web này chỉ làm cho vui, để biết thêm thông tin vui lòng truy cập:"
      };
    


  const memoizedVietnameseMessages = useMemo(() => vietnameseMessages, []);
  const memoizedEnglishMessages = useMemo(() => englishMessages, []);



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
