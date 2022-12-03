const getDay = (function () {
  const magicDatesForMonth = {
    1: (leapYear) => (leapYear ? 4 : 3),
    2: (leapYear) => (leapYear ? 29 : 28),
    3: 14,
    4: 4,
    5: 9,
    6: 6,
    7: 11,
    8: 8,
    9: 5,
    10: 10,
    11: 7,
    12: 12,
  };
  const magicDayForMillennials = {
    2000: 2,
    1900: 3,
    1800: 0,
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getMagicDayForTheYear(year) {
    let millennial = parseInt(year / 100) * 100;
    let magicDayForMillennial = magicDayForMillennials[millennial];

    let yearDifferenceFromMillennium = year - millennial;
    let differenceQuotientWithTwelve = parseInt(
      yearDifferenceFromMillennium / 12
    );
    let differenceReminderWithTwelve = yearDifferenceFromMillennium % 12;
    let leapYearsInsideDifference = parseInt(differenceReminderWithTwelve / 4);

    let magicDayIndex =
      differenceQuotientWithTwelve +
      differenceReminderWithTwelve +
      leapYearsInsideDifference +
      magicDayForMillennial;
    return magicDayIndex > 6 ? magicDayIndex % 7 : magicDayIndex;
  }

  function getDayFromDateAndMagicDate(day, magicDayMonth, magicDayYear) {
    if (day > magicDayMonth) {
      let difference = day - magicDayMonth;
      let reminder = difference % 7;
      if (reminder + magicDayYear >= 7) {
        return days[(reminder + magicDayYear) % 7];
      } else {
        return days[reminder + magicDayYear];
      }
    } else {
      let difference = magicDayMonth - day;
      let reminder = 7 - (difference % 7);
      let dayIndex =
        reminder + magicDayYear > 6
          ? (reminder + magicDayYear) % 7
          : reminder + magicDayYear;
      return days[dayIndex];
    }
  }

  function getDay(date) {
    let splitted = date.split("/");
    const [day, month, year] = splitted.map((n) => parseInt(n));

    const magicDayForThatYear = getMagicDayForTheYear(year);

    let magicDayForThatMonth = 0;

    if (month == 1 || month == 2) {
      let isLeapYear = year % 4 == 0;
      magicDayForThatMonth = magicDatesForMonth[parseInt(month)](isLeapYear);
    } else {
      magicDayForThatMonth = magicDatesForMonth[parseInt(month)];
    }
    return getDayFromDateAndMagicDate(
      day,
      magicDayForThatMonth,
      magicDayForThatYear
    );
  }

  return getDay;
})();

console.log(getDay("24/12/1994"));
