import { Route, Routes } from 'react-router-dom';
import Category from './pages/Admin/Category';
import Complain from './pages/Admin/Complain';
import ComplainAdmin from './pages/Admin/ComplainAdmin';
import EditCategory from './pages/Admin/EditCategory';
import AddProduct from './pages/Admin/AddProduct';
import ListProduct from './pages/Admin/ListProduct';
import DetailProduct from './pages/DetailProduct';
import Home from './pages/Home/index';
import Order from './pages/user/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import WishList from './pages/user/WishList';
import UserSetting from './pages/user/UserSetting';
import Report from './pages/Admin/Report';
import AdminOrder from './pages/Admin/Order';
import Cart from './pages/user/Cart';
import PaymentSucess from './pages/user/PaymentSuccess';
import PrivateRoute from './hoc/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment-success" element={<PaymentSucess />} />
          <Route path="/profile/order" element={<Order />} />
          <Route path="/profile/wishlist" element={<WishList />} />
          <Route path="/profile/setting" element={<UserSetting />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/admin/report" element={<Report />} />
          <Route path="/admin/orders" element={<AdminOrder />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/product/add" element={<AddProduct />} />
          <Route path="/admin/product" element={<ListProduct />} />
          <Route path="/admin/complain" element={<ComplainAdmin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
