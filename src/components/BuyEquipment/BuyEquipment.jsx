import "./BuyEquipment.css"
// import image from "./EquipmentPage - Unsplash.jpg"

export default function BuyEquipment() {
    return (
        <div className="ps-5">
            <div className="equipment-background">
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
        </div>
    )
}