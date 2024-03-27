import * as hikeAPI from "../../utilities/hikes-api";

function HikeSavePlan({getHikeState}) {

    const _handleSaveHikePlan = () => {
        hikeAPI.saveHikePlan()
    }

    return (
        <button><a href="/">Save Hike Plan</a></button>
    )
}

export default HikeSavePlan