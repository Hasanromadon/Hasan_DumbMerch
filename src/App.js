import { Route, Routes } from 'react-router-dom';
import Category from './pages/Admin/Category';
import Complain from './pages/Admin/Complain';
import ComplainAdmin from './pages/Admin/ComplainAdmin';
import EditCategory from './pages/Admin/EditCategory';
import EditProduct from './pages/Admin/EditProduct';
import ListProduct from './pages/Admin/ListProduct';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home/index';
import Profile from './pages/Home/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/complain" element={<Complain />} />
      <Route path="/admin/category/edit" element={<EditCategory />} />
      <Route path="/admin/category" element={<Category />} />
      <Route path="/admin/product/edit" element={<EditProduct />} />
      <Route path="/admin/product" element={<ListProduct />} />
      <Route path="/admin/complain" element={<ComplainAdmin />} />
    </Routes>
  );
}

export default App;
