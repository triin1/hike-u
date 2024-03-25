import EquipmentItem from "../EquipmentItem/EquipmentItem";

function EquipmentList( {equipmentItems, deleteEquipment} ) {
    //TODO: index to be replaced with _id after front and back end are connected
    const equipmentListItems = equipmentItems.map((e, index) => (
        <EquipmentItem equipment={e} key={index} deleteEquipment={deleteEquipment}/>
    ))

    return (
        <div>
            <h4>List of your equipment</h4>
            <div>{equipmentListItems}</div>
        </div>
    )
};

export default EquipmentList