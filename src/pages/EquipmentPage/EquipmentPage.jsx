import { useState } from "react";
import NewEquipmentForm from "../../components/NewEquipmentForm/NewEquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([])
    // const [showEquipment, setShowequipment] = useState(false)

    function addEquipment (equipment) {
        setEquipmentItems([...equipmentItems, equipment ])
    };

    return (
        <div>
            <h1>Manage your equipment</h1>
            <div className="equipment-container">
                <div></div>
                <NewEquipmentForm addEquipment={addEquipment}/>
                <EquipmentList equipmentItems={equipmentItems} />
            </div>
        </div>
    )
};


export default EquipmentPage