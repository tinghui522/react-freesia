import { Link } from "react-router-dom"

export default function Category() {
   return (
      <header className="header"> 
         <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/bigimg.png?raw=true" className="bigpic" /> 
         <div className="home-detail">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/detail.png?raw=true" className="detail-img"/>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/detailpic.png?raw=true" className="detailpic"/>
         </div>
         <div className="categories">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/categories-word.png?raw=true" className="categories-word"/>
            <div>
                <Link to="/perfume">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/perfume.png?raw=true" className="categories-img1"/>
                <img src="https://github.com/tinghui522/react-freesia/blob/master/src/img/perfume_hover.png?raw=true" className="hover_1"/>
                <hr className="hr-line1" />
                <p
                    className="text-1">
                    PERFUME
                </p>
                </Link>
            </div>
            <div>
                <Link to="/bath">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/bathe.png?raw=true" className="categories-img2"/>
                <img src="https://github.com/tinghui522/react-freesia/blob/master/src/img/bath_hover.png?raw=true" className="hover_2"/>
                <hr className="hr-line2" />
                <p
                    className="text-2">
                    BATH/BODY
                </p>
                </Link>
            </div>
            <div>
                <Link to="/candle">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/fragrance.png?raw=true" className="categories-img3"/>
                <img src="https://github.com/tinghui522/react-freesia/blob/master/src/img/candle_hover.png?raw=true" className="hover_3"/>
                <hr className="hr-line3" />
                <p
                    className="text-3">
                    CANDLE
                </p>
                </Link>
            </div>
            <div>
                <Link to="/diffuser">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/home.png?raw=true" className="categories-img4"/>
                <img src="https://github.com/tinghui522/react-freesia/blob/master/src/img/diffuser_hover.png?raw=true" className="hover_4"/>
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