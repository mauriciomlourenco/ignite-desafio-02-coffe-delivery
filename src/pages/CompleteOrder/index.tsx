import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './SelectedCoffees'
import { CompleteOrderContainer } from './styles'

export function CompleteOrderPage() {
  return (
    <div>
      <CompleteOrderContainer className="container">
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </div>
  )
}
