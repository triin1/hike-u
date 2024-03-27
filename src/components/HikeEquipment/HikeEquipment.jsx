import * as equipmentAPI from "../../utilities/equipment-api";
import { useEffect, useState } from "react";

function HikeEquipment({ updateHikeState }) {
    const [equipments, setEquipments] = useState([]);
    const [equipmentOptions, setEquipmentOptions] = useState([]);
    const [selectedEquipment, setSelectedEquipment] = useState(""); // 新增用于跟踪用户选择的装备

    useEffect(() => {
        async function getEquipments() {
            const equipmentList = await equipmentAPI.getAll();
            setEquipmentOptions(equipmentList);
        }
        getEquipments();
    }, []);

    useEffect(() => {
        updateHikeState({equipments})
    }, [equipments])

    const _addEquipment = () => {
        if (selectedEquipment) {
            setEquipments(prevEquipments => [...prevEquipments, selectedEquipment]); 
            setSelectedEquipment("");
        }
    };

    return (
        <div>
            <label>Select your equipment:</label>
            {equipmentOptions.length ?
                <div>
                    <select value={selectedEquipment} onChange={e => setSelectedEquipment(e.target.value)}>
                        <option value="">Select Equipment</option>
                        {equipmentOptions.map((equipment, index) =>
                            <option key={index} value={equipment.name}>{equipment.name}</option>
                        )}
                    </select>
                    <button onClick={_addEquipment}>Add equipment</button>
                </div>
                :
                <span>No equipment yet</span>
            }
            <div>
                <label>Selected Equipments:</label>
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HikeEquipment;
