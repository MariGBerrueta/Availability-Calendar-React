import tw from "tailwind-styled-components";
import { getAvailableTimesToPrint } from "./helperFunctions";

interface PrintButtonProps {
  availableTimes: Array<string>
}

const PrintButtonContainerStyled = tw.div`
  h-full
  flex
  justify-center
`

const PrintButtonStyled = tw.button`
  mt-8
  rounded-full
  bg-gradient-to-r from-cyan-500 to-blue-500 
  w-2/5
  h-1/5
  p-4
  text-2xl
  text-white
  font-bold
  hover:text-blue-900
`

const PrintButton: React.FC<PrintButtonProps> = ({availableTimes}) => {
  const handleClick = () => {
    if(availableTimes.length === 1) {
      const jsonMessage = JSON.stringify(availableTimes)
      console.log(jsonMessage)
    } else {
      const availableTimesInfo = getAvailableTimesToPrint(availableTimes)
      const availableTimesJSON = JSON.stringify(availableTimesInfo)
      console.log(availableTimesJSON)
    }  
  }
    
    return (
      <PrintButtonContainerStyled>
        <PrintButtonStyled onClick={handleClick}>
          Print
        </PrintButtonStyled>
      </PrintButtonContainerStyled>
    )
};
  
export default PrintButton;