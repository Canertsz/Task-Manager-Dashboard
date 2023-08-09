import React from "react";
import * as S from "./styles.jsx"
import Logo from "../logo/index.jsx";
import {NavigationMenu} from "../navigation-menu/index.jsx";

function Sidebar() {
    return (
        <S.Sidebar>
            <Logo />
            <NavigationMenu />
        </S.Sidebar>
    )
}

export { Sidebar }