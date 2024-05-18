import { Button } from "@material-ui/core";
import { getExcelFromJSON } from "../services/excelServices";

const ExportExcel = () => {

  const handleExport = () => {
    const data = JSON.parse(localStorage.getItem('fileData') || "[]");
    const absent = JSON.parse(localStorage.getItem('absent') || "[]");
    const processedData = data.map((item: any) => ({
      RANK: item.RANK,
      USERNAME: item.USERNAME,
      SOLVED: item.SOLVED,
      SCORE: item.SCORE,
      ATTENDANCE: 'present'
    }));

    for(let i = 0; i < absent.length; i++) {
      processedData.push({
        RANK: '0',
        USERNAME: absent[i],
        SOLVED: '0',
        SCORE: '0',
        ATTENDANCE: 'absent'
      });
    }
    getExcelFromJSON(processedData, 'lab-tracker-data.xlsx');
  };

  return (
    <div>
      <Button variant="contained" color="primary" style={{marginTop: 10}} onClick={handleExport}>
        Export Excel
      </Button>
    </div>
  );
};

export default ExportExcel;
