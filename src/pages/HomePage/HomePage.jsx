import * as hikeAPI from "../../utilities/hikes-api";
import { useEffect, useState } from "react";
import HomePageCard from "../../components/HomePageCard/HomePageCard";

export default function HomePage() {

  const [hikePlans, setHikePlans] = useState([])

  useEffect(() => {
    async function getPlans() {
      const plans = await hikeAPI.getAllHikePlan()
      setHikePlans(plans)
    }
    getPlans()
  }, [])

  //{hikePlans.map((plan, index) => <HomePageCard title = {plan.title} description = {plan.description} startDate = {plan.startDate.toString().slice(0, 10)} index = {index} key={index} /> )}

  return (
    <div>
      <h1>HomePage</h1>
      <div className="row row-cols-1 row-cols-md-3 g-0">
        {hikePlans.map((plan, index) => <HomePageCard title={plan.title} description={plan.description} startDate={plan.startDate.toString().slice(0, 10)} index={index} id={plan._id} key={index} />)}
      </div>
    </div>
  );
}
