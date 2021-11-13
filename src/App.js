import {Route, Routes} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import RestaurantDetails from './components/RestaurantDetails'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/login" element={<LoginForm />} />
    <Route exact path="/" element={<ProtectedRoute />}>
      <Route exact path="/" element={<Home />}>
        <Route exact path="/restaurant/:id" element={<RestaurantDetails />} />
      </Route>
      <Route exact path="/cart" element={<Cart />} />
    </Route>
    <Route element={<NotFound />} />
  </Routes>
)

export default App
