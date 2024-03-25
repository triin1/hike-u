import { useState } from "react";
import "./EquipmentForm.css";

function EquipmentForm({ addEquipment }) {
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    quantity: 1,
  });
  const [category, setCategory] = useState({
    categories: [],
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
    setCategory ({
      categories: [],
    })
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
      });
    } else {
      setCategory({
        categories: categories.filter((event) => event !== value),
      });
    }
  }

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
          onChange={_handleNameChange}
          required
        />
        <div className="checkbox-format">
          Categories:
          <label className="checkbox-format">
            Clothing
            <input
              type="checkbox"
              name="categories"
              value="Clothing"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Footwear
            <input
              type="checkbox"
              name="categories"
              value="Footwear"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Rainy day
            <input
              type="checkbox"
              name="categories"
              value="Rainy day"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Hot day
            <input
              type="checkbox"
              name="categories"
              value="Hot day"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Snow
            <input
              type="checkbox"
              name="categories"
              value="Snow"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Overnight
            <input
              type="checkbox"
              name="categories"
              value="Overnight"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Gear
            <input
              type="checkbox"
              name="categories"
              value="Gear"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Navigation
            <input
              type="checkbox"
              name="categories"
              value="Navigation"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            First aid
            <input
              type="checkbox"
              name="categories"
              value="First aid"
              onChange={_handleCategoryChange}
            />
          </label>
          <label className="checkbox-format">
            Tools
            <input
              type="checkbox"
              name="categories"
              value="Tools"
              onChange={_handleCategoryChange}
            />
          </label>
        </div>
        <button type="submit">ADD EQUIPMENT</button>
      </form>
    </div>
  );
}

export default EquipmentForm;
