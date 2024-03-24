import "./EquipmentItem.css"

function EquipmentList( {equipment} ) {
    
    return (
        <div> 
            <p className="item-name">{equipment.newEquipment.quantity} {equipment.newEquipment.name}</p>
            <div className="cat-container">Categories:
                {equipment.categories.map((cat, index) => (
                    <p key={index} className="cat-item">{cat}</p>
                ))}
            </div>
            
            
            {/* <p className="equip-categories">{equipment.categories}</p> */}
        </div>
    )
};


export default EquipmentList