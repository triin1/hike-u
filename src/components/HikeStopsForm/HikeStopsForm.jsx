import { useState } from "react";
import './HikeStopsForm.css';

export default function HikeStopsForm({ addNewStop, stops, setStops }) {

    const [newStop, setNewStop] = useState('');

    function _handleNewStop(event) {
        event.preventDefault();
        // addNewStop(newStop);
        setStops([...stops, newStop])
        console.log(newStop);
        setNewStop('');
    };

    function _handleChange(event) {
        // setNewStop({...newStop,
        //     [event.target.name]: event.target.value});
        setNewStop(event.target.value);
    }


    return (
        <form className="spots-form" onSubmit={_handleNewStop}>
            <label>A stop at some spots?</label>
            <input 
                name="name"
                value={newStop}
                onChange={_handleChange}
                placeholder="e.g. lookout, lake, etc." />
                
            <button type='submit'>Save</button>
        </form>
    )
}