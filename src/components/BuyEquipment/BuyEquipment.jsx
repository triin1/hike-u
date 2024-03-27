import "./BuyEquipment.css"

export default function BuyEquipment() {
    return (
        <div style={{ 
            backgroundImage: "url(/images/EquipmentPage%20-%20Unsplash.jpg)", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "300px",
            width: "100%",
            borderRadius: "25px",
            zIndex: "-1"
        }} className="mt-5">
            <div className="buy-equipment">
                <h4>Need to buy some equipment?</h4>
                <h6>Check out these links:</h6>
                <div className="equip-a">
                    <a href="https://www.patagonia.com.au/" className="equip-a">Patagonia</a>
                </div>
                <div className="equip-a">
                    <a href="https://www.kathmandu.com.au/" className="equip-a">Kathmandu</a>
                </div>
                <div className="collab-container">
                    <p>If you want to collaborate with us, contact us at 
                        <a href="advertising@hikeu.com"> advertising@hikeu.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}