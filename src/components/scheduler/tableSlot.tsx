import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import SelectAvailableSlotButton from "./selectAvailableSlotButton";
import {CheckIcon} from "@heroicons/react/solid";

interface TableSlotProps {
  isVisualizeSection: boolean;
  cellName: string;
  setAvailableTimes: any;
  availableTimes: any[];
}

interface ElementProps {
  available: string
};

const ShowAvailabilitySlotStyled = tw.div<ElementProps>`
  flex 
  justify-center
  w-full
  p-2 
  border 
  border-blue-500/30 
  ${(p:ElementProps) => (p.available === "true") ? "bg-blue-500/90": "bg-blue-500/10"}
`

const checkIconStyled = `
  text-white
  w-4
  h-4
`

const TableSlot: React.FC<TableSlotProps> = ({
  isVisualizeSection,
  cellName,
  setAvailableTimes,
  availableTimes
}) => {
  const [isSlotAvailable, setIsSlotAvailable] = useState<boolean>(false);

  useEffect(() => {
    const isAvailable = availableTimes.filter(time => time === cellName).length
    setIsSlotAvailable(!!isAvailable)
  }, [availableTimes, cellName])

  return (
    <>
      {
        isVisualizeSection ? (
          <ShowAvailabilitySlotStyled available={isSlotAvailable.toString()}>
            {isSlotAvailable ? (
              <CheckIcon className={checkIconStyled}></CheckIcon>
            ) : (
              <div className={checkIconStyled}></div>
            )}
          </ShowAvailabilitySlotStyled>
        ) : (
          <ShowAvailabilitySlotStyled available={isSlotAvailable.toString()}>
            <SelectAvailableSlotButton 
              isSlotAvailable={isSlotAvailable}
              setAvailableTimes={setAvailableTimes}
              availableTimes={availableTimes}
              cellName={cellName}
            />
          </ShowAvailabilitySlotStyled>
        )
      }
    </>
  );
};
  
export default TableSlot