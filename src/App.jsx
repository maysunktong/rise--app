import { useState } from "react";
import Layout from './components/Layout';
import "./index.css";
import HealthTracker from './pages/HealthTracker';

function App() {
  const [currentPage, setCurrentPage] = useState(<HealthTracker />);
  return <Layout setCurrentPage={setCurrentPage}>{currentPage}</Layout>;
}
export default App;
