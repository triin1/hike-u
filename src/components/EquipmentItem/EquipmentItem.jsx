import "./EquipmentItem.css"

function EquipmentList( {equipment} ) {
    
    return (
        <div> 
            <p className="item-name">{equipment.quantity} {equipment.name}</p>
            <div className="cat-container">Categories:
                {equipment.categories.map((cat, index) => (
                    <p key={index} className="cat-item">{cat}</p>
                ))}
            </div>
        </div>
    )
};


export default EquipmentList