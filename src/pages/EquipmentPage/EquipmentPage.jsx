import { useState } from "react";
import EquipmentForm from "../../components/EquipmentForm/EquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import * as equipmentAPI from "../../utilities/equipment-api";

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([]);
    const [showEquipment, setShowEquipment] = useState(false);
    const [filtered, setFiltered] = useState(equipmentItems);

    async function addEquipment (equipment) {
        try {
            const addEquipment = await equipmentAPI.createEquipment(equipment);
            setEquipmentItems([...equipmentItems, addEquipment ])
        } catch (err) {
            console.log("equipment not added", err)
        }
    };

    const _toggleFullEquipmentList = () => {
        setShowEquipment(!showEquipment)
    }

    function _handleFilter(event) {
        if (event.target.value === "All") {
            return setFiltered(equipmentItems)
        }
        const filteredEquipment = equipmentItems.filter((item, index) => item.categories[index] === event.target.value);
        setFiltered(filteredEquipment);
      }

    // TODO: add useEffect to load the equipment previously entered

    return (
        <div className="equipment-container">
            <h1 className="item-a">Manage your equipment</h1>
            <div className="item-b">
                <EquipmentForm addEquipment={addEquipment}/>
            </div>
            <EquipmentFilter _handleFilter={_handleFilter} filtered={filtered}/>
            <div className="item-c">
                <button onClick={_toggleFullEquipmentList} >{showEquipment ? "Hide full equipment list" : "Show full equipment list"}</button> {showEquipment && <EquipmentList equipmentItems={equipmentItems} />}
            </div>
        </div>
    )
};


export default EquipmentPage