import React from "react";
import { FullScreenLoader, Layout } from "./components/global/modules";
import { NoPage } from "./components/global/pages";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages";

function App() {
  return (
    <React.Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
