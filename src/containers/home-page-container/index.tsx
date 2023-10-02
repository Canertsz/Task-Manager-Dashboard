import React from "react"
import * as S from "./styles"

function HomePageContainer(): JSX.Element {
  return (
    <S.HomePageContainer>
      <S.Title>
        Welcome, <span>Caner</span>
      </S.Title>
      <S.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        perspiciatis! Eveniet amet doloribus architecto illum aliquid. Sint,
        animi quis consequatur explicabo reprehenderit est facilis, quos
        recusandae possimus unde cupiditate aspernatur.
      </S.Text>
    </S.HomePageContainer>
  )
}

export { HomePageContainer }
