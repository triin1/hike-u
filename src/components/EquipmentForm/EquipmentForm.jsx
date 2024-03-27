import { useState } from "react";
import "./EquipmentForm.css";

function EquipmentForm({ addEquipment }) {
    const [newEquipment, setNewEquipment] = useState({
        name: "",
        quantity: 1,
    });
    const [category, setCategory] = useState({
        categories: [],
        response: []
    });

    async function _handleAddNewEquipment(event) {
        event.preventDefault();
        const equipment = {
            ...newEquipment,
            ...category
        }
        await addEquipment(equipment);
        setNewEquipment({
            name: "",
            quantity: 1,
        });
    }

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
                categories: [...categories, value],
                response: [...categories, value]
            });
        } else {
            setCategory({
                categories: categories.filter((event) => event !== value),
                response: categories.filter((event) => event !== value)
            });
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h4 className="ps-5">Add new items</h4>
            </div>
            
            <form onSubmit={_handleAddNewEquipment} className="ps-5">
                
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">Item name</label>
                        <input className="form-control"
                            name="name"
                            value={newEquipment.name}
                            onChange={_handleNameChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input className="form-control"
                            name="quantity"
                            value={newEquipment.quantity}
                            onChange={_handleNameChange}
                            required
                        />
                    </div>
                </div>


                <div>
                    <div className="row">
                        <div className="form-check-label">Categories:</div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                Clothing
                                <input className="form-check-input"
                                    type="checkbox"
                                    name="categories"
                                    value="Clothing"
                                    onChange={_handleCategoryChange}
                                />
                                </label>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                Footwear
                                <input className="form-check-input"
                                    type="checkbox"
                                    name="categories"
                                    value="Footwear"
                                    onChange={_handleCategoryChange}
                                />
                                </label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                Rainy day
                                <input className="form-check-input"
                                    type="checkbox"
                                    name="categories"
                                    value="Rainy day"
                                    onChange={_handleCategoryChange}
                                />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                Hot day
                                <input className="form-check-input"
                                    type="checkbox"
                                    name="categories"
                                    value="Hot day"
                                    onChange={_handleCategoryChange}
                                />
                                </label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Snow
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="Snow"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Overnight
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="Overnight"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Gear
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="Gear"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>
                    
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Navigation
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="Navigation"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    First aid
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="First aid"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Tools
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="categories"
                                        value="Tools"
                                        onChange={_handleCategoryChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-3">    
                        <label className="form-label"></label>
                        <textarea className="form-control"
                            name="response"
                            value={category.response.join("   ")}
                            onChange={_handleCategoryChange}
                            placeholder="Your selected categories will appear here"
                        ></textarea>
                    </div>

                </div>

                <div className="button-center">
                    <button type="submit" className="equipment-submit-button mt-2">ADD EQUIPMENT</button>
                </div>
            </form>
        </div>
    );
}

export default EquipmentForm;
