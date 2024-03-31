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
        <div className="container m-1"> 
            <div className="row">
                <div className="col-md-1 d-flex justify-content-center align-items-center" >
                    <button onClick={() => handleQuantityChange(equipment._id, equipment.quantity - 1)} className="equipment-button" role="button">
                        <span>&#8722;</span>
                    </button>
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    {equipment.quantity}
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <button onClick={() => handleQuantityChange(equipment._id, equipment.quantity + 1)} className="equipment-button" role="button">
                        <span>&#43;</span>
                    </button>
                </div>
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                    {equipment.name}
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center">
                        {equipment.categories.map((cat, index) => (
                            <span key={index} className="cat-item">{cat}</span>
                        ))}
                </div>
                <div className="col-md-1 d-flex justify-content-start align-items-center">
                    <button className="equipment-button-delete" onClick={ () => deleteEquipment(equipment._id)}><span>&#x2715;</span></button>
                </div>
            </div>
        </div>
    )
};

export default EquipmentItem

