import { useState } from "react";
import './HikeStopsForm.css';

export default function HikeStopsForm({ addNewStop }) {

    const [newStop, setNewStop] = useState({
        name: ''
    });

    function _handleNewStop(event) {
        event.preventDefault();
        addNewStop(newStop);
        console.log(newStop);
        setNewStop({
            name: ''
        });
    };

    function _handleChange(event) {
        setNewStop({...newStop,
            [event.target.name]: event.target.value});
    }


    return (
        <form className="spots-form" onSubmit={_handleNewStop}>
            <label>A stop at some spots?</label>
            <input 
                name="name"
                value={newStop.name}
                onChange={_handleChange}
                placeholder="e.g. lookout, lake, etc." />
                
            <button type='submit'>Save</button>
        </form>
    )
}