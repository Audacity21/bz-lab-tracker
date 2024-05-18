import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button } from '@mui/material';

const Filter = () => {
  return (
    <div>
      <Button
        variant="contained"
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
    </div>
  );
};

export default Filter;
