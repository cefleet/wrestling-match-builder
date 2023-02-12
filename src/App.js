import Header from "./features/Header"
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { QueryClient, QueryClientProvider } from 'react-query';
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import League from "./pages/League/LeagueContainer";
import Matches from "./pages/Matches";
import Team from "./pages/Team/TeamContainer.jsx";
import Tournements from "./pages/Tournements";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="League" element={<League />} />
          <Route path="Matches" element={<Matches />} />
          <Route path="Team" element={<Team />} />
          <Route path="Tournements" element={<Tournements />} />
         <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

function Layout() {
  return (
    <div style={{padding:'1rem', margin:'1rem'}}>
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