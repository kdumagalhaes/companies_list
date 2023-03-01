import { Route, Routes } from 'react-router-dom'
import { Company } from '../pages/Company/Company'
import { Home } from '../pages/Home/Home'
import { Phone } from '../pages/Phone/Phone'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/:companyId" element={<Company />} />
      <Route path="/number/:numberId" element={<Phone />} />
    </Routes>
  )
}
