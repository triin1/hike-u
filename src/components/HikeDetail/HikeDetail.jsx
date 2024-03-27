import { useParams } from "react-router-dom"
import * as hikeAPI from "../../utilities/hikes-api"
import { useEffect, useState } from "react"

function HikeDetail() {
    const {id} = useParams()

    useEffect(() => {
        async function getDetail() {

        }
        getDetail()
    }, [])

    return 
}

export default HikeDetail