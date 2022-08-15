import Instructions from "../instructions";
import StepsLayout from "../layout/index";
import WeeklyScheduler from "../scheduler/weeklySchedule";

interface SelectSectionProps {
  availableTimes: Array<string>;
  setAvailableTimes: React.Dispatch<React.SetStateAction<any[]>>;
  landingRef: React.MutableRefObject<null>;
  visualizeRef: React.MutableRefObject<null>
}

const SelectSection: React.FC<SelectSectionProps> = ({
  availableTimes,
  setAvailableTimes,
  landingRef,
  visualizeRef
}) => {
  const instructions:string = "Click on the plus icon to signalize your available times. You can also click on the minus icon to remove available slots."
  return (
    <>
    <StepsLayout prevStep={landingRef} nextStep={visualizeRef} stepName="Select" stepNumber="1">
      <Instructions text={instructions}></Instructions>
      <WeeklyScheduler 
        isVisualizeSection={false} 
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </StepsLayout>
    </>
  )
};
  
export default SelectSection;