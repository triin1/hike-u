import { useState } from "react";
import NewEquipmentForm from "../../components/NewEquipmentForm/NewEquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([])
    
    function addEquipment (equipment) {
        setEquipmentItems([...equipmentItems, equipment ])
    };

    return (
        <div>
            <h1>Manage your equipment</h1>
            <NewEquipmentForm addEquipment={addEquipment}/>
            <EquipmentList />
        </div>
    )
};


export default EquipmentPage