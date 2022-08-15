import Instructions from "../instructions";
import StepsLayout from "../layout/index";
import WeeklyScheduler from "../scheduler/weeklySchedule";

interface VisualizeSectionProps {
  availableTimes: Array<string>;
  setAvailableTimes: React.Dispatch<React.SetStateAction<any[]>>;
  selectRef: React.MutableRefObject<null>;
  printRef: React.MutableRefObject<null>
}

const VisualizeSection: React.FC<VisualizeSectionProps> = ({
  availableTimes,
  setAvailableTimes,
  selectRef,
  printRef
}) => {
  const instructions:string = "Confirm your schedule of availability is correct."
  return (
    <StepsLayout prevStep={selectRef} nextStep={printRef} stepName="Visualize" stepNumber="2">
      <Instructions text={instructions}></Instructions>
      <WeeklyScheduler 
        isVisualizeSection={true} 
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </StepsLayout>
  )
};
  
export default VisualizeSection;