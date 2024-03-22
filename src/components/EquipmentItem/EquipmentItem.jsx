function EquipmentList( {equipment} ) {
    
    return (
        <div>
            <p>{equipment.name}</p>
            <p>{equipment.quantity}</p>
            <p>{equipment.categrories}</p>
        </div>
    )
};


export default EquipmentList