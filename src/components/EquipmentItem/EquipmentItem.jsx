import "./EquipmentItem.css"
import * as equipmentAPI from "../../utilities/equipment-api";

function EquipmentItem( {equipment, deleteEquipment, setEquipmentItems} ) {
    
    // Change the quantity of the equipment you have
    async function handleQuantityChange(itemId, newQuantity) {
        try {
            await equipmentAPI.setItemQuantity(itemId, newQuantity);
            if (newQuantity === 0) {
                await equipmentAPI.deleteEquipment(itemId);
            }
            const allEquipment = await equipmentAPI.getAll();
            setEquipmentItems(allEquipment)
        } catch(err) {
        } 
    }

    return (
        <div className="item-container"> 
            <p className="item-name"><button onClick={() => handleQuantityChange(equipment._id, equipment.quantity - 1)}>-</button>{equipment.quantity}<button onClick={() => handleQuantityChange(equipment._id, equipment.quantity + 1)}>+</button> {equipment.name}</p>
            <div className="cat-container">
                {equipment.categories.map((cat, index) => (
                    <p key={index} className="cat-item">{cat}</p>
                ))}
            </div>
        <button onClick={ () => deleteEquipment(equipment._id)}>Delete</button>
        </div>
    )
};


export default EquipmentItem

