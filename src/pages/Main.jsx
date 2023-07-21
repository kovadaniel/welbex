import Promotion from "../components/Promotion";
import { promotionGifts } from "../constants";


function Main() {
    return (
        <main id="main">
            <div className="container">
                <Promotion promotions={promotionGifts}/>
            </div>
        </main>
    );
}

export default Main;