import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { Defaultlayout } from './layouts/Defaultlayout'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/Home'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
