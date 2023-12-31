import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AcidAscorbic } from './pages/acidAscorbic'
import { Alp } from './pages/alp'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to={'/acid-ascorbic'} />} />
        <Route path='acid-ascorbic' element={<AcidAscorbic />} />
        <Route path='alp' element={<Alp />} />
        <Route path='*' element={<h1>Not Found Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
