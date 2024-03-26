import { DateRange } from "react-date-range";
import { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


function HikeDate({ updateHikeState}) {

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Select date</label>
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