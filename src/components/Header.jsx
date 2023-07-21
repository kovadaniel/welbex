import { useContext } from "react";
import { contacts, navbarReferences } from "../constants";
import Contacts from "./Contacts";
import NavBar from "./NavBar";
import Logo from "./UI/Logo/Logo";
import { RootContext } from "../context";

function Header() {
    const width = useContext(RootContext);
    return (
        <header id="header">
            <div className="container">
                <Logo/>
                <NavBar navs={navbarReferences} screenWidth={width}/>
                <Contacts contacts={contacts}/>
            </div>
        </header>
    );
}

export default Header;