import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./routes/index";
import CollectionsPage from "./routes/collections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/collections/:category"
          element={<CollectionsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;