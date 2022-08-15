interface AvailableTime {
  day: string;
  start: number;
  end: number
}

interface availableTimesToPrint {
  availablePeriods: Array<AvailableTime>
}

//GET ARRANGED DATA FOR EACH DAY OF THE WEEK WITH DATA
export const getAvailableTimesToPrint = (
  availableTimes:Array<string>
): availableTimesToPrint => {
  //filters weekdays, so only the ones with data remain
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].filter( day => {
    const DayOnAvailableTimesCount:number = availableTimes.filter(time => time.includes(day)).length

    return DayOnAvailableTimesCount > 0 && day
  });
  const availableTimesToPrint = weekdays.map(dayOfTheWeek => {
      return getArrangedDayTimes(availableTimes, dayOfTheWeek)
  });
  return {"availablePeriods" : availableTimesToPrint.flat()}
}

//THE METHODS BELOW ARRANGE THE DATA FOR A SINGLE WEEKDAY
//arrange a day data in an array of objects
const getArrangedDayTimes = (
  availableTimes:Array<string>, dayOfTheWeek:string
): Array<AvailableTime> => {
  const dayAvailableTimes = getDayAvailableTimesWithRanges(availableTimes, dayOfTheWeek);

  const dayAvailableTimesArranged = dayAvailableTimes.map((range:Array<number>) => {
    return {
      day: dayOfTheWeek,
      start: range[0],
      end: range[range.length - 1] + 1
    }
  });

  return dayAvailableTimesArranged
};

//returns an array with ranges of available time
const getDayAvailableTimesWithRanges = (
  availableTimes:Array<string>, dayOfTheWeek:string
): Array<number[]> => {
  const dayTimes = availableTimes.filter((time:string) => time.includes(dayOfTheWeek));
  const hours = dayTimes.map((time: string) => parseInt(time.substring(time.length - 2, time.length)));
  const sortedHours = hours.sort((a,b) => a - b)
  const hourRanges = getRanges(sortedHours);

  return hourRanges
}

//create subarrays with consecutive times, ex [[10, 11], [14, 15]]
const getRanges = (
  hours: Array<number>
): Array<number[]> => {
  let result = [];
  let range = [];

  for (var i = 0; i < hours.length; ++i) {
    if (i === 0) {
      range.push(hours[i]);
      continue;
    };

    if (hours[i - 1] !== (hours[i] - 1)) {
      result.push(range);
      range = [];
    };
    range.push(hours[i]);
  };
  result.push(range);

  return result
}



