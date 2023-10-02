import React from "react"
import { ProfileButton } from "../profile-button/index.jsx"
import * as S from "./styles.jsx"

function Topbar(): JSX.Element {
  return (
    <S.Topbar>
      <ProfileButton />
    </S.Topbar>
  )
}

export { Topbar }
