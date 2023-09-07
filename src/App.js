import {Route, Routes} from "react-router";
import {Homepage} from "./pages/Homepage";
import {BranchList} from "./components/main/BranchList";
import {BranchDetail} from "./components/detail/BranchDetail";
import {PersonDetail} from "./components/detail/PersonDetail";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Homepage/>} >
            <Route path="" element={<BranchList/>}/>
            <Route path='/branch/:id' element={<BranchDetail/>}/>
            <Route path='/people/:id' element={<PersonDetail/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
