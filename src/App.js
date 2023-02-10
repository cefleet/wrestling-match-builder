import Header from "./features/Header"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Account from "./pages/Account";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import League from "./pages/League";
import Matches from "./pages/Matches";
import Team from "./pages/Team";
import Tournements from "./pages/Tournements"
function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="Generate" element={<Generate />} />
          <Route path="League" element={<League />} />
          <Route path="Matches" element={<Matches />} />
          <Route path="Team" element={<Team />} />
          <Route path="Tournements" element={<Tournements />} />
         <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  )
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
function NoMatch() {
return (
  <div>
    <h2>4 oh 4!</h2>
    <p>
      <Link to="/">There is nothing to see here.</Link>
    </p>
  </div>
);
}

export default App;