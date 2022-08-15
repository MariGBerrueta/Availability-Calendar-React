import tw from "tailwind-styled-components";
import { Column } from "react-table"
import TableSlot from "./tableSlot";
import { useCallback, useMemo } from "react";
import Table from "./table";

interface WeeklySchedulerProps {
  isVisualizeSection: boolean;
  availableTimes: any[];
  setAvailableTimes: React.Dispatch<React.SetStateAction<any[]>>
}

interface TableData {
  col1: string;
  col2: string;
  col3:string;
  col4:string;
  col5:string;
  col6: string
}

const TableHeaderCellStyled = tw.div`
  text-blue-900
    w-full 
  p-1 
  border-l
  border-l-blue-500/30
`

const HoursStyled = tw.div`
  flex 
  justify-center 
  w-full 
  p-1 
  border 
  border-blue-500/30
  text-blue-900
  font-bold
`

const WeeklyScheduler: React.FC<WeeklySchedulerProps> = ({
  isVisualizeSection,
  availableTimes,
  setAvailableTimes
}) => {
  const data:Array<TableData> = useMemo(
  () => {
    let data = [9, 10, 11, 12, 13, 14, 15, 16, 17].map(hour => {
      let displayedHour = hour === 9 ? "09" : hour
        return {
          col1: `${displayedHour}:00`,
          col2: `Monday-${displayedHour}`,
          col3: `Tuesday-${displayedHour}`,
          col4: `Wednesday-${displayedHour}`,
          col5: `Thursday-${displayedHour}`,
          col6: `Friday-${displayedHour}`,
        }
     })
     return data
  },[]);

  const generateCell = useCallback((
    value: string, 
    index: number
  ) => {
    if (index === 0) {
      return (
        <HoursStyled>{`${value}`}</HoursStyled>
      )
    };

    return (
      < TableSlot
        cellName={value}
        isVisualizeSection={isVisualizeSection}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    )
  }, [availableTimes, isVisualizeSection, setAvailableTimes]) 

  const columns:Array<Column> = useMemo(
    () => {
      let columnsData = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((dayOfTheWeek:string, index:number) => {
        return {
          Header: () => <TableHeaderCellStyled>{dayOfTheWeek}</TableHeaderCellStyled>,
          accessor: `col${index + 1}`,
          Cell: ( props: {value:string} ) => {
 	          return generateCell(props.value, index)
          }
        }
      })
      return columnsData
  },[generateCell]);

  return (
    <Table data={data} columns={columns} />
  );
};
  
export default WeeklyScheduler;
