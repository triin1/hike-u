import * as hikeAPI from "../../utilities/hikes-api";

function HikeSavePlan({getHikeState}) {

    const _handleSaveHikePlan = () => {
        hikeAPI.saveHikePlan(getHikeState())
        ///api/hikes/hike start with
    }

    return (
        <button onClick={_handleSaveHikePlan} ><a href="/">Save Hike Plan</a></button>
    )
}

export default HikeSavePlan