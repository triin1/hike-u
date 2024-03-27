import { useState, useEffect } from "react";
import HikeStopsList from "../../components/HikeStopsList/HikeStopsList";
import HikeMap from "../../components/HikeMap/HikeMap";
import HikeDescription from "../../components/HikeDescription/HikeDescription";
import HikeDate from "../../components/HikeDate/HikeDate";
import HikeEquipment from "../../components/HikeEquipment/HikeEquipment";
import HikeWeatherForecast from "../../components/HikeWeatherForecast/HikeWeatherForecast";
import { getWeather } from "../../utilities/weather-api";
import HikeSavePlan from "../../components/HikeSavePlan/HikeSavePlan";
import * as hikesAPI from "../../utilities/hikes-api";

function HikePage() {
  // state probably needs to be passed as props to HikeMap page
  // then to other children from there
  const [hike, setHike] = useState({
    distance: 0,
    startLocation: null,
    endLocation: null,
    title: "",
    description: "",
    startDate: null,
    endDate: null,
    equipments: [],
    spots: [],
  });

  const [forecast, setForecast] = useState(null);

  // Used to update the hike state, the newValue must be an object
  const updateHikeState = (newValue) => {
    setHike((previousState) => {
      const newHike = { ...previousState, ...newValue };
      return newHike;
    });
  };

  // used to fetch the weather forecast
  useEffect(() => {
    async function getWeatherForecast() {
      if (hike.startLocation && hike.endLocation) {
        const weatherForecast = await getWeather(
          hike.startLocation,
          hike.endLocation
        );
        setForecast(weatherForecast);
      }
    }
    getWeatherForecast();
  }, [hike.startLocation, hike.endLocation]);

  // used to save plan
  const getHikeState = () => {
    return hike;
  };

  return (
    // <div>
    //     <div className="d-flex flex-row" >
    //         <HikeMap updateHikeState={updateHikeState} />
    //         <HikeWeatherForecast forecast={forecast} />
    //     </div>
    //     <HikeDescription updateHikeState={updateHikeState} />
    //     <HikeDate updateHikeState={updateHikeState} />
    //     <HikeStopsList hike={hike} setHike={setHike} />
    //     <HikeEquipment updateHikeState={updateHikeState} />
    //     <HikeSavePlan getHikeState={getHikeState} />
    // </div>
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <div>
            <div className="row d-flex">
              {/* heading */}
              <div className="col-xl-8 py-5 px-md-5">
                <div className="row">
                  <h1 className="display-5 fw-bold">Start Adventure</h1>
                </div>

                {/* mapbox area */}
                <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-2 g-4 justify-content-center">
                  <HikeMap updateHikeState={updateHikeState} />
                  <HikeWeatherForecast forecast={forecast} />
                  <HikeDescription updateHikeState={updateHikeState} />
                  <HikeDate updateHikeState={updateHikeState} />
                </div>
              </div>

              {/* right side */}
              <div className="col-xl-3 ftco-animate bg-light pt-5 fadeInUp ftco-animated journalSideBar">
                {/* stops */}
                <HikeStopsList hike={hike} setHike={setHike} />
                <HikeEquipment updateHikeState={updateHikeState} />
                <HikeSavePlan getHikeState={getHikeState} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HikePage;
