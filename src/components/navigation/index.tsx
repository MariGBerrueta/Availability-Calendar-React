import tw from "tailwind-styled-components";
import MoveDownButton from "./moveDown";
import MoveUpButton from "./moveUp";

interface NavigationProps {
  prevStep: React.MutableRefObject<null>;
  nextStep?: React.MutableRefObject<null>
}

const NavContainerStyled = tw.div`
  pr-8
  text-white
  flex
  align-items-center

`

const NavigationBar: React.FC<NavigationProps> = ({
  prevStep,
  nextStep
}) => {
  return (
    <NavContainerStyled>
      <MoveUpButton prevStep={prevStep}/>
      {nextStep && <MoveDownButton nextStep={nextStep}/>}
    </NavContainerStyled>
  )
};
  
export default NavigationBar;