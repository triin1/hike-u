import { useState } from "react";

function NewEquipmentForm({ addEquipment }) {
    const [newEquipment, setNewEquipment] = useState({
        name: "",
        quantity: 0,
        categories: []
    });

    function _handleAddNewEquipment(event) {
        event.preventDefault();
        addEquipment(newEquipment);
        setNewEquipment({
            name: "",
            quantity: 0,
            categories: []
        });
    };

    function _handleChange(event) {
        const updatedEquipment = {
            ...newEquipment,
            [event.target.name]: event.target.value,
        };
        setNewEquipment(updatedEquipment);
    }

    return (
        <div>
            <form onSubmit={_handleAddNewEquipment}>
                <label>Add equipment</label>
                    <input
                        name="name"
                        value={newEquipment.name}
                        onChange={_handleChange}
                        required
                    />
                <label>Quantity</label>
                    <input 
                        name="quantity"
                        value={newEquipment.quantity}
                        onChange={(_handleChange)} 
                        required
                    />
                <label>Categories</label>
                    <select multiple>
                        <option>Clothing</option>
                        <option>Rainy day</option>
                        <option>Hot day</option>
                    </select>
            <button type="submit">ADD TO-DO</button>
            </form>
        </div>
    );
};

export default NewEquipmentForm;