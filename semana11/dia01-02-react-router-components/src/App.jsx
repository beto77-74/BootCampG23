import { BrowserRouter, Route, Routes } from 'react-router'

import LayoutBase from './layouts/LayoutBase'
import LayoutAuth from './layouts/LayoutAuth'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<LayoutAuth />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App