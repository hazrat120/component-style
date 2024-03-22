import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "../components/styles/Container.styles";
import { Tag, Heading1, Para, Image } from "../components/styles/Elements";
import { StyledTitle } from "./styles/Custom.styles";
import Button from "./Button";
import nerdImage from "../assets/images/illustration.png";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <Heading1>
          <StyledTitle text="React Styled Components" color="#fff" />
        </Heading1>
        <Para>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </Para>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
        <Image src={nerdImage} alt="Nerd" width="300px" />
      </ContentContainer>
    </CardContainer>
  );
}
