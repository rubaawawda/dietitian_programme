import Form from './components/form/form.components';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ManageFoodTable from './pages/manage-food-table/manage-food-table.pages';
import NewDietProgram from './pages/new-diet-program/new-diet-program.pages';
import ViewExistingPrograms from './pages/view-existing-programs/view-existing-programs.pages';
import Header from './components/header/header.components';
import Home from './pages/home/home.pages';
//import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/ManageFoodTable" element={<ManageFoodTable/>}/>
    <Route path="/NewDietProgram" element={<NewDietProgram/>}/>
    <Route path="/ViewExistingPrograms" element={<ViewExistingPrograms/>}/>
    <Route path="/Form" element={<Form/>}/>
    <Route path="/" element={<Home/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
