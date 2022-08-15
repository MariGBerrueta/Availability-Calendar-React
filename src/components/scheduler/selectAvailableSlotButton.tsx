import tw from "tailwind-styled-components";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

interface SelectButtonProps {
  isSlotAvailable: boolean;
  setAvailableTimes: any;
  availableTimes: any[];
  cellName: string
}

const SelectAvailableSlotButtonStyled = tw.button`
  w-4
  h-4
`

const SelectAvailableSlotButton: React.FC<SelectButtonProps> = ({
  isSlotAvailable,
  setAvailableTimes,
  availableTimes,
  cellName
}) => {
  const handleClick = (e: Event) => {
    e.preventDefault();
    if (isSlotAvailable) {
      const newAvailableTimes = availableTimes.filter(time => time !== cellName)
      setAvailableTimes(newAvailableTimes)
    } else {
      let newAvailableTimes = availableTimes.concat([cellName])
      setAvailableTimes(newAvailableTimes);
    }
  };

  return (
    <SelectAvailableSlotButtonStyled onClick={handleClick}>
      {
        isSlotAvailable ? (
          <MinusIcon data-tip data-for="not-available" className="text-white"/>
        ) : (
          <PlusIcon className="text-blue-500/60"/>
        )
      }
    </SelectAvailableSlotButtonStyled>
  );
};
  
export default SelectAvailableSlotButton;