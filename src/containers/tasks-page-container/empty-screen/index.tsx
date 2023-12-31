import React from "react"
import { VscEmptyWindow } from "react-icons/vsc"
import * as S from "./styles"

function EmptyScreen(): JSX.Element {
  return (
    <S.EmptyTasks>
      <VscEmptyWindow />
      <S.Title>There is no task created yet.</S.Title>
      <S.Subtitle>Click on the button below to create the first one</S.Subtitle>
      <S.Button to="/tasks/create">Create Task</S.Button>
    </S.EmptyTasks>
  )
}

export { EmptyScreen }
