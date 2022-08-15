import { useState, useRef } from "react";
import tw from "tailwind-styled-components";
import LandingPage from "./components/landing";
import PrintSection from "./components/steps/printSection";
import SelectSection from "./components/steps/selectSection";
import VisualizeSection from "./components/steps/visualizeSection";

const SectionContainer = tw.div`
  w-screen
  h-screen
`

const App: React.FC = () => {
  const [availableTimes, setAvailableTimes] = useState<Array<string>>(["No Available Times"]);
  const landingRef = useRef(null);
  const selectRef = useRef(null);
  const visualizeRef = useRef(null);
  const printRef = useRef(null)

  return (
    <>
      <SectionContainer ref={landingRef}>
        <LandingPage selectRef={selectRef}/>
      </SectionContainer>
      <SectionContainer ref={selectRef}>
        <SelectSection 
          landingRef={landingRef} 
          visualizeRef={visualizeRef} 
          availableTimes={availableTimes} 
          setAvailableTimes={setAvailableTimes} 
        />
      </SectionContainer>
      <SectionContainer ref={visualizeRef}>
        <VisualizeSection 
          selectRef={selectRef} 
          printRef={printRef} 
          availableTimes={availableTimes} 
          setAvailableTimes={setAvailableTimes}
        />
      </SectionContainer>
      <SectionContainer ref={printRef}>
        <PrintSection 
          visualizeRef={visualizeRef} 
          availableTimes={availableTimes}
        />
      </SectionContainer>
    </>
  );
}

export default App;
