import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AllWines from './Pages/AllWines/AllWines';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Welcome from './Pages/Dashboard/Welcome/Welcome';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddNewWine from './Pages/Dashboard/AddNewWine/AddNewWine';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageWines from './Pages/Dashboard/ManageWines/ManageWines';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import GiveReview from './Pages/Dashboard/GiveReview/GiveReview';
import Payments from './Pages/Dashboard/Payments/Payments';


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/allwines" element={<AllWines />} />

            {/* Private Routes */}
            <Route path="/placeorder/:wineID" element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            } />

            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } >
              {/* Dashboard Nesting Admin Routes starts*/}

              <Route path="/dashboard" element={<Welcome />} />
              <Route path="/dashboard/manageallorders" element={
                <AdminRoute>
                  <ManageAllOrders />
                </AdminRoute>
              } />
              <Route path="/dashboard/addnewwine" element={
                <AdminRoute>
                  <AddNewWine />
                </AdminRoute>
              } />
              <Route path="/dashboard/makeadmin" element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              } />
              <Route path="/dashboard/managewines" element={
                <AdminRoute>
                  <ManageWines />
                </AdminRoute>
              } />
              <Route path="/dashboard" element={<Welcome />} />
              <Route path="/dashboard/myorders" element={<MyOrders />} />
              <Route path="/dashboard/givereview" element={<GiveReview />} />
              <Route path="/dashboard/payments" element={<Payments />} />

              {/* Dashboard Nesting Admin Routes ends*/}
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
