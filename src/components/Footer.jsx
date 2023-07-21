import { useContext } from "react";
import { aboutReferences, contacts, mobileScreenSize, servicesReferences } from "../constants";
import Contacts from "./Contacts";
import Copyright from "./UI/Copyright/Copyright";
import { RootContext } from "../context";

function Footer() {
    const width = useContext(RootContext);
    return (
        <footer id="footer">
            <div className="container">
                <div className="upper-footer">
                    <div className="about">
                        <h3 className="title">О Компании</h3>
                        <ul className="refs">
                            {aboutReferences.map(item => 
                                <li key={item.title} className="ref">
                                    <a href={item.ref}>{item.title}</a>
                                </li>)}
                        </ul>
                    </div>
                    <div className="services">
                        <h3 className="title">Меню</h3>
                        <ul className="refs">
                            {servicesReferences.map(item => 
                                <li key={item.title} className="ref">
                                    <a href={item.ref}>
                                        {(width <= mobileScreenSize) && item.alt ? item.alt : item.title}
                                        </a>
                                </li>)}
                        </ul>
                    </div>
                    <div className="contacts">
                        <h3 className="title">Контакты</h3>
                        <Contacts contacts={contacts}/>
                    </div>
                </div>
                <Copyright className="copyright"/>
                
            </div>
        </footer>
    );
}

export default Footer;