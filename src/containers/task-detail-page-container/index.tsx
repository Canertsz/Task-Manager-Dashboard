import React from "react"
import * as S from "./styles"
import { useLoaderData } from "react-router-dom"

function TaskDetailPageContainer(): JSX.Element {
  const task = useLoaderData()

  return <S.TaskDetailPageContainer>task detail page</S.TaskDetailPageContainer>
}

export { TaskDetailPageContainer }
