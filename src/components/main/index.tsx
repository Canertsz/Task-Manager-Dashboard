import React from "react"
import * as S from "./styles.jsx"
import { Outlet } from "react-router-dom"

function Main(): JSX.Element {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  )
}

export { Main }
