import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import ExportExcel from "./components/ExportExcel";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{padding: 10, display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
        <DataTable />
      <ExportExcel />
      </div>
    </div>
  )
}

export default App;