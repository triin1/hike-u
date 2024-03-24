import HikeStops from "../HikeStops/HikeStops";

export default function HikeDetails() {

    // TODO: map through each submit for HikeStops to display in div below
    
    return (
        <>
        <h1>Hike Details</h1>
        <div>
            <form>
                <label>Date</label>
                <input type="text" />
                {/* the following two buttons will be pop-up cards */}
                <button>Plan Equipment</button>
                {/* <HikeStops /> */}
                <button>Journal Details</button>
                <button>Save Hike</button>
            </form>
        </div>
        </>
    )
}