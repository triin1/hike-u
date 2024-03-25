import EquipmentItem from "../EquipmentItem/EquipmentItem";

function EquipmentList( {equipmentItems, deleteEquipment, filtered, handleQuantityChange} ) {   
    let equipmentListItems = [];
    if (filtered === "All") {
        equipmentListItems = equipmentItems.map((e) => (
            <EquipmentItem equipment={ e } key={ e._id } deleteEquipment={ deleteEquipment }/>
        ));
    } else {
        equipmentListItems = equipmentItems.filter(equipment => equipment.categories.includes(filtered)).map((e) => (
        <EquipmentItem equipment={ e } key={ e._id } deleteEquipment={ deleteEquipment } handleQuantityChange={ handleQuantityChange } />
    ))
}

    return (
        <div>
            <div>{equipmentListItems}</div>
        </div>
    )
};

export default EquipmentList