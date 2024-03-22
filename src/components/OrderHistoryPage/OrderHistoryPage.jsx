import {checkToken} from "../../utilities/users-service"

function OrderHistroryPage() {
     const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>OrderHistroryPage</h1>
            <button onClick={handleCheckToken} >Check When My Login Expires</button>

        </>
        
        
    )
}

export default OrderHistroryPage