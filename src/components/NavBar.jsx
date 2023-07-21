import { mobileScreenSize } from "../constants";

function NavBar({navs, screenWidth}) {
    return (
        <ul className="navbar">
            {navs.map(item => {
                if(screenWidth > mobileScreenSize){
                    // we are in a desktop site version
                    return <li key={item.title} className="ref-wrap">
                        <a href={item.ref} className="ref">{item.title}</a>
                    </li>
                } else{
                    // we are in a mobile site version
                    if(item.mobileAppearance){
                        // if this ref can be displayed in mobile version, display it
                        return <li key={item.title} className="ref-wrap">
                            <a href={item.ref} className="ref">{item.title}</a>
                        </li>
                    }
                }
            }
                
            )}
            
        </ul>
    );
}

export default NavBar;