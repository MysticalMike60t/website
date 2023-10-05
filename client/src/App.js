import React from "react";
import { FullScreenLoader } from "./components/global/modules";

function App() {
  return (
    <React.Suspense fallback={<FullScreenLoader />}>

    </React.Suspense>
  );
}

export default App;
