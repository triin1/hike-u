import "./EquipmentItem.css"

function EquipmentItem( {equipment, deleteEquipment, handleQuantityChange} ) {
    console.log(equipment._id)
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

