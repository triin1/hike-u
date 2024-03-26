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
        <div>
            <button className="hover-bin" onClick={ () => deleteEquipment(equipment._id)}><span role="img">{String.fromCodePoint(10060)}</span></button>
            <p className="hide">Delete item</p>
        </div>
        </div>
    )
};


export default EquipmentItem

