import { useState } from "react";
import Layout from './components/layout';
import "./index.css";
import Home from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState(<Home />);
  return <Layout setCurrentPage={setCurrentPage}>{currentPage}</Layout>;
}
export default App;
