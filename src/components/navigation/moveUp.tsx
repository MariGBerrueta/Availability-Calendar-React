import tw from "tailwind-styled-components";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

interface MoveUpProps {
  prevStep: React.MutableRefObject<any>;
}

const MoveUpButtonStyled = tw.button`
  px-1
`
const IconStyle = `
  w-10 
  h-10
  transition ease-in-out 
  delay-100 
  hover:-translate-y-1 
  hover:scale-110 
  hover:text-blue-900 
  duration-200
`

const MoveUpButton: React.FC<MoveUpProps> = ({
  prevStep
}) => {

  const handleClick = () => {
    prevStep.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <MoveUpButtonStyled onClick={handleClick}>
      <ArrowCircleUpIcon className={IconStyle}/>
    </MoveUpButtonStyled>
  )
};
  
export default MoveUpButton;