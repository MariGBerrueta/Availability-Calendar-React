import Instructions from "../instructions";
import StepsLayout from "../layout/index";
import PrintButton from "../printButton/index";

interface PrintSectionProps {
  availableTimes:Array<string>;
  visualizeRef: React.MutableRefObject<null>
}

const PrintSection: React.FC<PrintSectionProps> = ({
  availableTimes,
  visualizeRef
}) => {
  const instructions:string = "Click the Print button to observe your available times in the browser console.";

  return (
    <StepsLayout prevStep={visualizeRef} stepName="Print" stepNumber="3">
      <Instructions text={instructions} isPrintSection={true}></Instructions>
      <PrintButton availableTimes={availableTimes}/>
    </StepsLayout>
  )
};
  
export default PrintSection;