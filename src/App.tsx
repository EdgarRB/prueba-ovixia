import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Detail from './components/detail/Detail';
import List from './components/list/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
