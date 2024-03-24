import { useState } from "react";
import NewEquipmentForm from "../../components/NewEquipmentForm/NewEquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([]);
    const [showEquipment, setShowEquipment] = useState(false);
    const [filtered, setFiltered] = useState(equipmentItems);

    function addEquipment (equipment) {
        setEquipmentItems([...equipmentItems, equipment ])
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

    return (
        <div className="equipment-container">
            <h1 className="item-a">Manage your equipment</h1>
            <div className="item-b">
                <NewEquipmentForm addEquipment={addEquipment}/>
            </div>
            <EquipmentFilter _handleFilter={_handleFilter} filtered={filtered}/>
            <div className="item-c">
                <button onClick={_toggleFullEquipmentList} >{showEquipment ? "Hide full equipment list" : "Show full equipment list"}</button> {showEquipment && <EquipmentList equipmentItems={equipmentItems} />}
            </div>
        </div>
    )
};


export default EquipmentPage