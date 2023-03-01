import { Route, Routes } from 'react-router-dom'
import { Company } from '../pages/Company/Company'
import { Home } from '../pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:companyId" element={<Company />} />
    </Routes>
  )
}
