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

  return (
    <div>
      <h1>HomePage</h1>
      <div className="card-group">
        
      </div>
    </div>
  );
}
