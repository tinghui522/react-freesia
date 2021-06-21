import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <img src="/img/footer-word.png" className="footerword"/>
            <div>
                <p className="footer-topic1">MY ACCOUNT</p>
                <p className="footer-detail1">
                    <Link to="/Profile" style={{color:"#707070"}}>My Account</Link><br/>
                    <Link to="/Profile" style={{color:"#707070"}}>Order History</Link><br/>
                    <Link to="/" style={{color:"#707070"}}>Wish List</Link>
                </p>
            </div>
            <div>
                <p className="footer-topic2">INFORMATION</p>
                <p className="footer-detail2">
                    <Link to="/" style={{color:"#707070"}}>About Us</Link><br/>
                    <Link to="/" style={{color:"#707070"}}>Store Locatory</Link><br/>
                    <Link to="/" style={{color:"#707070"}}>Help</Link><br/>
                    <Link to="/" style={{color:"#707070"}}>Terms/Conditions</Link>
                </p>
            </div>
            <div>
                <p className="footer-topic3">CONTACT US</p>
                <p className="footer-detail3">
                    Freesia Store<br/>
                    02-0707060<br/>
                    <Link to="/" style={{color:"#707070"}}>freesia2021@gmail.com</Link>
                </p>
                <a href="https://www.facebook.com/JoMaloneLondon/">
                <img src="/img/facebook.png" className="facebook-icon"/>
                </a>
                <a href="https://www.instagram.com/jomalonelondon/?hl=zh-tw">
                <img src="/img/instagram.png" className="instagram-icon"/>
                </a>
                <a href="https://ezstore.line.me/search?query=jomalone">
                <img src="/img/line.png" className="line-icon"/>
                </a>
            </div>
            <hr className="hr-footer-line" />
            <div className="footer-text">
                <p className="text-gray2">
                    <Link to="/" style={{color:"#707070"}}>Privacy</Link>
                </p>
                <p className="text-gray3">
                    <Link to="/" style={{color:"#707070"}}>Cookie Policy</Link>
                </p>
                <p className="text-gray4">
                    <Link to="/" style={{color:"#707070"}}>Language</Link>
                </p>
                <p className="text-gray5">
                    <Link to="/" style={{color:"#707070"}}>Ship to</Link>
                </p>
                <p className="text-gray6">
                    © 2021 Freesia All Right Reserved
                </p>
            </div>
            
        </footer>           
    );
}