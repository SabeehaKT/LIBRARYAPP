import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewTable from './Components/ViewTable';

function App() {
  return (
    <div>
      <AddBook/>
      <br/>
      <SearchBook/>
      <br/>
      <DeleteBook/>
      <br/>
      <ViewTable/>
    </div>
  );
}

export default App;
