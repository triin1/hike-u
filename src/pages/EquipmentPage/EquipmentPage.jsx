import { useState, useEffect } from "react";
import EquipmentForm from "../../components/EquipmentForm/EquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import * as equipmentAPI from "../../utilities/equipment-api";

function EquipmentPage() {
    const [equipmentItems, setEquipmentItems] = useState([]);
    const [filtered, setFiltered] = useState('');

    async function addEquipment (equipment) {
        try {
            const addEquipment = await equipmentAPI.createEquipment(equipment);
            setEquipmentItems([...equipmentItems, addEquipment ])
        } catch (err) {
            console.log("equipment not added", err)
        }
    };

    async function deleteEquipment(id) {
        await equipmentAPI.deleteEquipment(id);
        const updatedEquipment = equipmentItems.filter((item) => item._id !== id);
        setEquipmentItems(updatedEquipment);
    }

    // Change the quantity of the equipment you have
    async function handleQuantityChange(itemId, newQuantity) {
        try {
            const updatedEquipment = await equipmentAPI.setItemQuantity(itemId, newQuantity);
            setEquipmentItems(updatedEquipment)
        } catch(err) {
            console.log("equipment not updated", err)
        }
    }

    useEffect(() => {
        async function fetchData() {
            const allEquipment = await equipmentAPI.getAll();
            setEquipmentItems(allEquipment)
        }
        fetchData();
    }, []);

    return (
        <div className="equipment-container">
            <h1 className="item-a">Manage your equipment</h1>
            <div className="item-b">
                <EquipmentForm addEquipment={addEquipment}/>
            </div>
            <div className="item-c">
                <h4>List of your equipment</h4>
                <EquipmentFilter setFiltered={setFiltered} equipmentItems={ equipmentItems } />
                <EquipmentList equipmentItems={ equipmentItems } deleteEquipment={ deleteEquipment } filtered={filtered} handleQuantityChange={handleQuantityChange}/>
            </div>
        </div>
    )
};


export default EquipmentPage