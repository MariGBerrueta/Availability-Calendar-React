import { ReactNode } from "react";
import tw from "tailwind-styled-components";
import Header from "./header";

interface StepsLayoutProps {
  children: ReactNode;
  stepName: "Select" | "Visualize" | "Print";
  stepNumber: "1" | "2" | "3";
  prevStep: React.MutableRefObject<null>;
  nextStep?: React.MutableRefObject<null>
}

const LayoutStyled = tw.div`
  w-screen
  h-screen
  flex
  justify-center
  items-center
  bg-gradient-to-r from-cyan-500 to-blue-500 
`

const LayoutMainStyled = tw.div`
  w-5/6
  h-5/6
`

const LayoutBodyStyled = tw.div`
  bg-white 
  rounded-xl
  h-5/6
  p-8
`

const StepsLayout: React.FC<StepsLayoutProps> = ({
  children, 
  stepName, 
  stepNumber,
  prevStep,
  nextStep
}) => {
  return (
    <LayoutStyled>
      <LayoutMainStyled>
        <Header prevStep={prevStep} nextStep={nextStep} stepName={stepName} stepNumber={stepNumber}></Header>
        <LayoutBodyStyled>
        {children}
        </LayoutBodyStyled>
      </LayoutMainStyled>
    </LayoutStyled>
  )
};
  
export default StepsLayout;