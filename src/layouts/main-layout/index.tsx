import { Main } from "../../components/main/index.jsx"
import { Sidebar } from "../../components/sidebar/index.jsx"
import { Topbar } from "../../components/topbar/index.jsx"
import * as S from "./styles.jsx"

function MainLayout(): JSX.Element {
  return (
    <S.MainLayout>
      <Sidebar />
      <Topbar />
      <Main />
    </S.MainLayout>
  )
}

export { MainLayout }
