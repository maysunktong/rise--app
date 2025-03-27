import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";
import Layout from "./layout";

function App() {
  const [currentPage, setCurrentPage] = useState(<Home />);
  return <Layout setCurrentPage={setCurrentPage}>{currentPage}</Layout>;
}
export default App;
