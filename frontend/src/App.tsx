import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import GetStats from "./components/GetStats";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Routes>
            <Route path="/" element={<DataTable />} />
            <Route path="/getstats" element={<GetStats />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
