import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, DescriptionCoffee, NameCoffee, Tags } from "./styles";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeCardProps {
    coffee: Coffee;

}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map(tag => <span key={`${coffee.id}:${tag}`}>{tag}</span>)}
            </Tags>

            <NameCoffee>{coffee.name}</NameCoffee>
            <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    );
}