function EquipmentFilter( { setFiltered, equipmentItems }) {   
    // Create an array of categories that the user has used
    let categoryItems = equipmentItems.map(e => e.categories);
    let categoryArray = categoryItems.flat();
    let listOfCategories = new Set(categoryArray);
    let listOfCategoriesArray = Array.from(listOfCategories);

    return (
        <label>Select your list view:
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