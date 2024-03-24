function EquipmentFilter( { _handleFilter }, { filtered }) {
    // TODO: need to build a way to display the filtered results
    
    // const categoryItems = [...new Set(equipmentItems.map((cat) => equipment.categories))]
    
    return (
        <label>Filter:
            <select onChange={_handleFilter}>
                <option value="All">All</option>
                <option value="Clothing">Clothing</option>
                <option value="Footwear">Footwear</option>
                <option value="Rainy day">Rainy day</option>
                <option value="Hot day">Hot day</option>
                <option value="Snow">Snow</option>
                <option value="Overnight">Overnight</option>
                <option value="Gear">Gear</option>
                <option value="Navigation">Navigation</option>
                <option value="First aid">First aid</option>
                <option value="Tools">Tools</option>
            </select>
        </label>
    )

};

export default EquipmentFilter;