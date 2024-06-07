import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewTable from './Components/ViewTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<AddBook/>}/>
  <Route path="/search" element={<SearchBook/>}/>
  <Route path="/delete" element={<DeleteBook/>}/>
  <Route path="/view" element={<ViewTable/>}/>
</Routes>
</BrowserRouter>  );
}

export default App;
