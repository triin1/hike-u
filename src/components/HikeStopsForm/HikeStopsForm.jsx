import { useState } from "react";
import './HikeStopsForm.css';

export default function HikeStopsForm({ addNewStop, stops }) {

    const [newStop, setNewStop] = useState({
        name: ''
    });

    function _handleNewStop(event) {
        event.preventDefault();
        addNewStop(newStop);
        setNewStop('');
    };

    // function _handleChange(event) {
    //     const updatedSpot = {
    //         ...newStop,
    //         [event.target.name]: event.target.value,
    //     };
    //     setNewStop(updatedSpot);
    // }


    return (
        <form className="spots-form" onSubmit={_handleNewStop}>
            <label>A stop at some spots?</label>
            <input 
                name="stop"
                value={newStop.name}
                onChange={(event) => setNewStop({ ...newStop, name: event.target.value })}
                placeholder="e.g. lookout, lake, etc." />
                
            <button type='submit'>Save</button>
        </form>
    )
}