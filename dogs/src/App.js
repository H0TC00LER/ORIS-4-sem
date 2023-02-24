import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { DogInformationPage } from "./pages/dogInformationPage";
import { DogsListPage } from "./pages/dogsListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<DogsListPage/>}/>
        <Route path='/list/:id' element={<DogInformationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


