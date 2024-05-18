import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  let filterData: string | any[] = [];
  const handleTextChange = (e: any) => {
    if (setText != null) {
      setIsModalOpen(false);
      filterData = text.split(" ");
      //console.log(filterData);
      filterStudent();
    }
  };

  const filterStudent = () => {
    let allStudent = JSON.parse(localStorage.getItem("fileData") || "[]");
    let filteredStudent = [];
    for (let i = 0; i < allStudent.length; i++) {
      for (let j = 0; j < filterData.length; j++) {
        if (allStudent[i].USERNAME === filterData[j]) {
          filteredStudent.push(allStudent[i]);
        }
      }
    }
    localStorage.setItem("fileData", JSON.stringify(filteredStudent));
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        style={{
          color: "white",
          backgroundColor: "green",
          borderRadius: "20%",
          width: "20px",
          height: "40px",
        }}
      >
        <FilterAltIcon />
      </Button>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Lab Students username</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Space separated usernames"
            type="text"
            fullWidth
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleTextChange} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Filter;
