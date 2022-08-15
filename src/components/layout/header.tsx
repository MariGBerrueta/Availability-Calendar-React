import tw from "tailwind-styled-components";
import NavigationBar from "../navigation";

interface HeaderProps {
  stepName: "Select" | "Visualize" | "Print";
  stepNumber: "1" | "2" | "3";
  prevStep: React.MutableRefObject<null>;
  nextStep?: React.MutableRefObject<null>
}

const HeaderContainerStyled = tw.div`
  mb-8
`
const HeaderStyled = tw.div`
  rounded-xl 
  bg-blue-700/50
  p-2
  flex
  justify-between
`;

const StepNameStyled = tw.div`
  text-xl
  w-2/6 
  rounded-lg 
  py-3
  pl-3 
  leading-5 
  text-blue-500/90
  bg-white
  flex
`

const Header: React.FC<HeaderProps> = ({
  stepName, 
  stepNumber,
  prevStep,
  nextStep
}) => {
    return (
      <HeaderContainerStyled>
      <HeaderStyled>
        <StepNameStyled>
          <p className="font-bold pr-2">{`step ${stepNumber}:`}</p>
          {stepName}
        </StepNameStyled>
        <NavigationBar prevStep={prevStep} nextStep={nextStep} />
      </HeaderStyled>
      </HeaderContainerStyled>

    )
};
  
export default Header;