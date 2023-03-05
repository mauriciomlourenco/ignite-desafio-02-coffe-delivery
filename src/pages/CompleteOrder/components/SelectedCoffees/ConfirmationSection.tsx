import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  const { coffeesCartTotal, cartQuantity } = useCart()

  const totalWithDeliveryFormatted = formatMoney(
    coffeesCartTotal > 0 ? coffeesCartTotal + 3.5 : 0,
  )

  const coffeesTotalFormatted = formatMoney(coffeesCartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {coffeesTotalFormatted}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>
          R$ {coffeesCartTotal > 0 ? formatMoney(3.5) : formatMoney(0)}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {totalWithDeliveryFormatted}
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
