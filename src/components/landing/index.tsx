import tw from "tailwind-styled-components";
import MoveDownButton from "../navigation/moveDown";

interface LandingProps {
  selectRef: React.MutableRefObject<null>
}

const LandingPageContainerStyled = tw.div`
  w-screen
  h-screen
  flex
  flex-col
  bg-gradient-to-r from-cyan-500 to-blue-500 
  text-center
`

const TitleStyled = tw.div`
  mt-32
  text-color-white
  text-7xl
  text-white
  font-bold
`

const IconContainerStyled = tw.div`
  mt-8
  flex
  justify-center
  text-white
`

const LandingPage: React.FC<LandingProps> = ({
  selectRef
}) => {
  return (
    <LandingPageContainerStyled>
      <TitleStyled>
        Manage your Availability
      </TitleStyled>
      <IconContainerStyled>
        <MoveDownButton isLanding={true} nextStep={selectRef}/>
      </IconContainerStyled>
    </LandingPageContainerStyled>
  )
};
  
export default LandingPage;