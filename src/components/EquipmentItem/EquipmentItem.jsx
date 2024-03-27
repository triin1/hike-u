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
        <div className="container"> 
            <div className="row">
                <div className="col-md-1">
                    <button onClick={() => handleQuantityChange(equipment._id, equipment.quantity - 1)} className="equipment-button" role="button">
                        <span>&#8722;</span>
                    </button>
                </div>
                <div className="col-md-1">
                    <div className="equip-q">
                        {equipment.quantity}
                    </div>
                </div>
                <div className="col-md-1">
                    <button onClick={() => handleQuantityChange(equipment._id, equipment.quantity + 1)} className="equipment-button" role="button">
                        <span>&#43;</span>
                    </button>
                </div>
                <div className="col-md-2">
                    {equipment.name}
                </div>
                <div className="col-md-6">
                    <div className="cat-container">
                        {equipment.categories.map((cat, index) => (
                            <p key={index} className="cat-item">{cat}</p>
                        ))}
                    </div>
                </div>
                <div className="col-md-1">
                    <button className="equipment-button-delete" onClick={ () => deleteEquipment(equipment._id)}><span role="img">{String.fromCodePoint(10060)}</span></button>
                    <p className="hide">Delete</p>
                </div>
            </div>
        </div>
    )
};

export default EquipmentItem

