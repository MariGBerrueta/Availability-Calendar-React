import tw from "tailwind-styled-components";
import { ArrowCircleDownIcon } from "@heroicons/react/solid";

interface MoveDownProps {
  nextStep: React.MutableRefObject<any>;
  isLanding?: boolean
}

const MoveDownButtonStyled = tw.button`
pl-1
`

const animation = `
  transition ease-in-out 
  delay-100 
  hover:-translate-y-1 
  hover:scale-110 
  hover:text-blue-900 
  duration-200
`

const MoveDownButton: React.FC<MoveDownProps> = ({
  nextStep,
  isLanding = false
}) => {
  const handleClick = () => {
    if(!nextStep){return}
    nextStep.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <MoveDownButtonStyled  onClick={handleClick}>
      <ArrowCircleDownIcon className={isLanding ? `w-20 h-20 ${animation}` : `w-10 h-10 ${animation}`}/>
    </MoveDownButtonStyled>
  )
};
  
export default MoveDownButton;