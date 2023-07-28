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



import { useState } from "react";

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
        "Year of birth should not be less than 1909":"Year of birth should not be less than 1909",
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
        "Year of birth should not be less than 1909":"Năm sinh không được nhỏ hơn 1909",
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
