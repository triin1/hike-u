import * as equipmentAPI from "../../utilities/equipment-api";
import "./HikeEquipment.css"
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
            <h3>Equipment:</h3>
            {equipmentOptions.length ?
                <div className="equipment-select-add" >
                    <select className="selections" value={selectedEquipment} onChange={e => setSelectedEquipment(e.target.value)}>
                        <option value="">Select Equipment</option>
                        {equipmentOptions.map((equipment, index) =>
                            <option key={index} value={equipment.name}>{equipment.name}</option>
                        )}
                    </select>
                    <button className="add-btn" onClick={_addEquipment}>Add</button>
                </div>
                :
                <span>No equipment yet</span>
            }
            <div>
                <ul className="list-group equipments" >
                    {equipments.map((equipment, index) => (
                        <li className="list-unstyled" key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HikeEquipment;
