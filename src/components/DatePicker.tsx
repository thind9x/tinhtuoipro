import { useState, useMemo, useCallback } from "react";
const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
interface DatePickerProps {
    handleInputChange:(e:any)=>void
}
const DatePicker = ({handleInputChange}:DatePickerProps) => {
    const [customDate, setCustomDate] = useState(() => {
        const currentDate = new Date();
        return formatDate(currentDate);
    });


    // const handleDateChange = (event:any) => {
    //     setCustomDate(event.target.value);
    // };

    return (
        <div>
            {/* <label htmlFor="customDate">Ngày:</label> */}
            <input
                style={{ padding: '8px', margin: '8px' }}
                

                type="text"
                id="customDate"
                defaultValue={customDate}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default DatePicker;