import { useState } from "react";
import NewEquipmentForm from "../../components/NewEquipmentForm/NewEquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([])
    const [showEquipment, setShowEquipment] = useState(false)

    function addEquipment (equipment) {
        setEquipmentItems([...equipmentItems, equipment ])
    };

    const _toggleFullEquipmentList = () => {
        setShowEquipment(!showEquipment)
    }

    return (
        <div className="equipment-container">
            <h1 className="item-a">Manage your equipment</h1>
            <div className="item-b">
                <NewEquipmentForm addEquipment={addEquipment}/>
            </div>
            <div className="item-c">
                <button onClick={_toggleFullEquipmentList} >{showEquipment ? "Hide full equipment list" : "Show full equipment list"}</button> {showEquipment && <EquipmentList equipmentItems={equipmentItems} />}
            </div>
        </div>
    )
};


export default EquipmentPage