import { useState } from "react";
import "./NewEquipmentForm.css"

function NewEquipmentForm({ addEquipment }) {
    const [newEquipment, setNewEquipment] = useState({
        name: "",
        quantity: 1,
        categories: []
    });

    function _handleAddNewEquipment(event) {
        event.preventDefault();
        addEquipment(newEquipment);
        setNewEquipment({
            name: "",
            quantity: 1,
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
        <div className="form-container">
            <h4>Add new items</h4>
                <form onSubmit={_handleAddNewEquipment} className="form-container">
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
                    <div>Categories:
                        <label>Clothing<input type="checkbox" value="Clothing" name="Clothing" /></label>
                        <label>Footwear<input type="checkbox" value="Footwear" name="Footwear" /></label>
                        <label>Rainy day<input type="checkbox" value="Rainy day" name="Rainy day" /></label>
                        <label>Hot day<input type="checkbox" value="Hot day" name="Hot day" /></label>
                        <label>Snow<input type="checkbox" value="Snow" name="Snow"/></label>
                        <label>Overnight<input type="checkbox" value="Overnight" name="Overnight" /></label>
                    </div>
                    <button type="submit">ADD EQUIPMENT</button>
                </form>
            </div>
    );
};

export default NewEquipmentForm;