import { useState } from "react";
import { getJSONFromExcel } from "../services/excelServices";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const FileUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleUpload = async () => {
    if (selectedFile) {
      await getJSONFromExcel(selectedFile).then((data: any) => {
        localStorage.setItem("allData", JSON.stringify(data));
        setIsModalOpen(false);
        //console.log(data);
      });
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        style={{
          color: "white",
          backgroundColor: "transparent",
          borderRadius: "20%",
          width: "20px",
          height: "40px",
        }}
      >
        <FileUploadIcon />
      </Button>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Upload Excel File</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept=".xls, .xlsx"
            onChange={(e) => {
              setSelectedFile(e.target.files![0]);
            }}
            style={{ display: "none" }}
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Select File
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="body1" gutterBottom>
              Selected File: {selectedFile.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            color="primary"
            disabled={!selectedFile}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FileUpload;
