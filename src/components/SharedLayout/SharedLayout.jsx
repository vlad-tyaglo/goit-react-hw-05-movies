
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sceleton from "components/Sceleton/Sceleton";
import { Container, Link, Header } from "./SharedLayout.styled";

const SharedLayout = () => {

  return (<>
    <Header>
      <Container>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Container>  
    </Header>
    <Suspense fallback={<Sceleton/>}>
      <Outlet/>
    </Suspense>
    </>)
}

export default SharedLayout;