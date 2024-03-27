import * as hikeAPI from "../../utilities/hikes-api";
import { useEffect, useState } from "react";

export default function HomePage() {

  const [hikePlans, setHikePlans] = useState([])

  useEffect(() => {
    async function getPlans() {
      const plans = await hikeAPI.getAllHikePlan()
      console.log(plans)
    }
    getPlans()
  }, [])

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
}
