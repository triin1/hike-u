import "./EquipmentItem.css"

function EquipmentList( {equipment, deleteEquipment} ) {
    
    return (
        <div className="item-container"> 
            <p className="item-name">{equipment.quantity} {equipment.name}</p>
            <div className="cat-container">
                {equipment.categories.map((cat, index) => (
                    <p key={index} className="cat-item">{cat}</p>
                ))}
            </div>
        <button onClick={ () => deleteEquipment(equipment._id)}>Delete</button>
        </div>
    )
};


export default EquipmentList

