import EquipmentItem from "../EquipmentItem/EquipmentItem";

function EquipmentList( {equipmentItems, deleteEquipment, filtered, setEquipmentItems} ) {   
    let equipmentListItems = [];
    
    if (filtered === "All") {
        equipmentListItems = equipmentItems.map((e) => (
            <EquipmentItem equipment={ e } key={ e._id } deleteEquipment={ deleteEquipment } setEquipmentItems={setEquipmentItems}/>
        ));
    } else {
        equipmentListItems = equipmentItems.filter(equipment => equipment.categories.includes(filtered)).map((e) => (
        <EquipmentItem equipment={ e } key={ e._id } deleteEquipment={ deleteEquipment } setEquipmentItems={setEquipmentItems} />
        ))
    }

    return (
        <div>
            <div>{equipmentListItems}</div>
        </div>
    )
};

export default EquipmentList