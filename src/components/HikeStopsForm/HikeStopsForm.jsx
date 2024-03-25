import { useState } from "react";
import './HikeStopsForm.css';

export default function HikeStopsForm({ addNewStop }) {

    const [newStop, setNewStop] = useState('');

    function _handleNewStop(event) {
        event.preventDefault();
        addNewStop(newStop);
        setNewStop('');
    };


    return (
        <form className="spots-form" onSubmit={_handleNewStop}>
            <label>A stop at some spots?
            <input 
                name="name"
                type="text"
                value={newStop}
                onChange={(event) => setNewStop(event.target.value)}
                placeholder="e.g. lookout, lake, etc." />
                </label>
            <button type='submit'>Save</button>
        </form>
    )
}