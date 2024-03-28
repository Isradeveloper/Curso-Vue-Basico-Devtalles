const getDayMonthYear = ( dateString ) => {

  const date = new Date(dateString)
  const month = new Intl.DateTimeFormat("es-ES", {month: "long"}).format(date)
  const day = new Intl.DateTimeFormat("es-ES", {weekday: "long"}).format(date)

  return {
    day: date.getDate(),
    month: month[0].toUpperCase() + month.substring(1),
    year: date.getFullYear(),
    weekday: day[0].toUpperCase() + day.substring(1)
  }

}

export default getDayMonthYear