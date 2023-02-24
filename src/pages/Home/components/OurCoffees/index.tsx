import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffes";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffes() {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => {
                    return <CoffeeCard key={coffee.id} coffee={coffee}/>;
                })}
                
            </CoffeeList>
            
        </OurCoffeesContainer>
    );
}