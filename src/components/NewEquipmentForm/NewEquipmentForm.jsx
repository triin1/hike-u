import { useState } from "react";
import "./NewEquipmentForm.css"

function NewEquipmentForm({ addEquipment }) {
    const [newEquipment, setNewEquipment] = useState({
        name: "",
        quantity: 1
    });
    const [category, setCategory] = useState({
        categories: []
    });

    function _handleAddNewEquipment(event) {
        event.preventDefault();
        addEquipment({newEquipment, ...category});
        setNewEquipment({
            name: "",
            quantity: 1,
        });
    };

    function _handleNameChange(event) {
        const updatedName = {
            ...newEquipment,
            [event.target.name]: event.target.value,
        };
        setNewEquipment(updatedName);
    }

    function _handleCategoryChange(event) {
        const { value, checked } = event.target;
        const { categories } = category;
        if (checked) {
            setCategory({
                categories: [...categories, value]});
        }
    };

    return (
        <div className="form-container">
            <h4>Add new items</h4>
                <form onSubmit={_handleAddNewEquipment} className="form-container">
                    <label>Add equipment</label>
                    <input
                        name="name"
                        value={newEquipment.name}
                        onChange={_handleNameChange}
                        required
                    />
                    <label>Quantity</label>
                    <input
                        name="quantity"
                        value={newEquipment.quantity}
                        onChange={(_handleNameChange)}
                        required
                    />
                    <div>Categories:
                        <label>Clothing<input type="checkbox" name="categories" value="Clothing" onChange={_handleCategoryChange} /></label>
                        <label>Footwear<input type="checkbox" name="categories" value="Footwear" onChange={_handleCategoryChange} /></label>
                        <label>Rainy day<input type="checkbox" name="categories" value="Rainy day" onChange={_handleCategoryChange} /></label>
                        <label>Hot day<input type="checkbox" name="categories" value="Hot day" onChange={_handleCategoryChange} /></label>
                        <label>Snow<input type="checkbox" name="categories" value="Snow" onChange={_handleCategoryChange} /></label>
                        <label>Overnight<input type="checkbox" name="categories" value="Overnight" onChange={_handleCategoryChange} /></label>
                    </div>
                    <button type="submit">ADD EQUIPMENT</button>
                </form>
            </div>
    );
};

export default NewEquipmentForm;