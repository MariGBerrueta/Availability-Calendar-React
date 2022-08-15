import tw from "tailwind-styled-components";

interface InstructionsProps {
  text: string
  isPrintSection?: boolean
}

interface InstructionsStyledProps {
  center: string
}

const InstructionsStyled = tw.div`
  pb-2
  lg:pb-3
  text-blue-900
  ${(p: InstructionsStyledProps) => (p.center  === "true") && "text-center"}
`

const Instructions: React.FC<InstructionsProps> = ({text, isPrintSection = false}) => {
    return (
      <InstructionsStyled center={isPrintSection.toString()}>
        {text}
      </InstructionsStyled>
    )
};
  
export default Instructions;