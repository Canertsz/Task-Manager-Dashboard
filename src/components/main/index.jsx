import React from "react";
import * as S from "./styles.jsx"
import Logo from "../logo/index.jsx";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <S.Main>
            <Outlet />
        </S.Main>
    )
}

export { Main }