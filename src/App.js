import "./App.css";
import Stepper from "./components/Stepper";
import { Box } from "@mui/system";
import AddNewCourse from "./addNewCourse/AddNewCourse";
function App() {
  return (
   
      <Box sx={{ m: 7 }}>
        <Stepper />
        <AddNewCourse/>
      </Box>
     
  );
}

export default App;
