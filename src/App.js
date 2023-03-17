import logo from './logo.svg';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import Table from './Components/Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from '../../../Day 13/layouting/src/pages/Products';
import Categories from '../../../Day 13/layouting/src/pages/Categories';
import Settings from '../../../Day 13/layouting/src/pages/Settings';

function App() {
  return (
    <PublicLayout>
                <Routes>
        <Route path="/" element={<Table />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
      </Routes>
        </PublicLayout>
  );
}

export default App;
