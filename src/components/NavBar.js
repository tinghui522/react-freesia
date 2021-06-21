import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
    const [isOnTouch,setIsOnTouch]= useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={350}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#fff" }}
                /*headerStyle={{ backgroundColor: "#ECE4AC", color: "#4D4D4D" }}*/
            >
                <NavItem onClose={handleCloseDrawer} to="/" className="nav-item" activeClassName="nav-item--active">
                    HOME
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Perfume" className="nav-item" activeClassName="nav-item--active">
                    PERFUME
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Bath" className="nav-item" activeClassName="nav-item--active">
                    BATH/BODY
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Candle" className="nav-item" activeClassName="nav-item--active">
                    CANDLES
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/Diffuser" className="nav-item" activeClassName="nav-item--active">
                    DIFFUSER
                </NavItem>
            </Drawer>
        </div>
    );
}