import { useState, useEffect } from "react";
import EquipmentForm from "../../components/EquipmentForm/EquipmentForm";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import "./EquipmentPage.css"
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import BuyEquipment from "../../components/BuyEquipment/BuyEquipment";
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

    useEffect(() => {
        async function fetchData() {
            const allEquipment = await equipmentAPI.getAll();
            setEquipmentItems(allEquipment)
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="equipment-title mt-4 ps-5 pt-5 pb-3">Manage your equipment</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <EquipmentForm addEquipment={addEquipment}/>
                </div>
                <div className="col-md-7">
                    <h4 className="ps-5">List of your equipment</h4>
                    <div className="ps-5">
                        <EquipmentFilter setFiltered={setFiltered} equipmentItems={ equipmentItems } />
                        <EquipmentList equipmentItems={ equipmentItems } deleteEquipment={ deleteEquipment } filtered={ filtered } setEquipmentItems={ setEquipmentItems }/>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-5">
                        <BuyEquipment />
                </div>
                <div className="col-md-7"></div>
            </div>
        </div>
    )
};


export default EquipmentPage