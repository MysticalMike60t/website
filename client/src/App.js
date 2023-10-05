import { Route, Router, Routes } from "react-router-dom";
import { Layout, NoPage } from "./components/global";
import { Home } from "./components/pages";

import "./styles/global/Global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
