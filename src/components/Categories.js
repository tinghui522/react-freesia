import { Link } from "react-router-dom"
import { BackTop } from "antd";

export default function Category() {
   return (
      <header className="header"> 
         <img src="/img/bigimg.png" className="bigpic" /> 
         <div className="home-detail">
            <img src="/img/detail.png" className="detail-img"/>
            <img src="/img/detailpic.png" className="detailpic"/>
         </div>
         <div className="categories">
            <img src="/img/categories-word.png" className="categories-word"/>
            <div>
                <Link to="/perfume">
                <img src="/img/perfume.png" className="categories-img1"/>
                <img src="/img/perfume_hover.png" className="hover_1"/>
                <hr className="hr-line1" />
                <p
                    className="text-1">
                    PERFUME
                </p>
                </Link>
            </div>
            <div>
                <Link to="/bath">
                <img src="/img/bathe.png" className="categories-img2"/>
                <img src="/img/bath_hover.png" className="hover_2"/>
                <hr className="hr-line2" />
                <p
                    className="text-2">
                    BATH/BODY
                </p>
                </Link>
            </div>
            <div>
                <Link to="/candle">
                <img src="/img/fragrance.png" className="categories-img3"/>
                <img src="/img/candle_hover.png" className="hover_3"/>
                <hr className="hr-line3" />
                <p
                    className="text-3">
                    CANDLE
                </p>
                </Link>
            </div>
            <div>
                <Link to="/diffuser">
                <img src="/img/home.png" className="categories-img4"/>
                <img src="/img/diffuser_hover.png" className="hover_4"/>
                <hr className="hr-line4" />
                <p
                    className="text-4">
                    DIFFUSER
                </p>
                </Link>
            </div>
         </div>
      </header>
   );
}