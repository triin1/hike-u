import { DateRange } from "react-date-range";
import { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "./HikeDate.css"


function HikeDate({ updateHikeState}) {

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    useEffect(() => {
        updateHikeState({startDate: date[0].startDate, endDate: date[0].endDate})
    }, [date[0].startDate, date[0].endDate])

    return (
        <div>
            <div className="mb-3">
                <label className="form-label form-label-date">Select date</label>
                <div>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                    />
                </div>
            </div>
        </div>


    )
}

export default HikeDate