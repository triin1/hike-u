import EquipmentList from "../EquipmentItem/EquipmentItem";

function EquipmentFilter( { _handleFilter, setFiltered, equipmentItems }) {
    // TODO: need to build a way to display the filtered results
    
    // Create an array of categories that the user has used
    let categoryItems = equipmentItems.map(e => e.categories);
    let categoryArray = categoryItems.flat();
    let listOfCategories = new Set(categoryArray);
    let listOfCategoriesArray = Array.from(listOfCategories);

    //setFiltered(listOfCategoriesArray);
    
    return (
        <label>Filter:
            <select onChange={(e) => setFiltered(e.target.value)}>
                <option></option>
                <option>All</option>
                {listOfCategoriesArray.map((cat, index) =>
                <option key={index}>{cat}</option>
            )}
            </select>
        </label>
    )

};

export default EquipmentFilter;