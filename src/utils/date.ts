export function serializeFullDateInitialDay(date: Date) {
  const data = new Date(date)
  const month = data.getMonth() > 8 ? data.getMonth() + 1 : `0${data.getMonth() + 1}`
  return `${data.getFullYear()}-${month}-${data.getDate()}T00:00:00`
}

export function serializeFullDateNow(date: Date) {
  const data = new Date(date)
  const month = data.getMonth() > 8 ? data.getMonth() + 1 : `0${data.getMonth() + 1}`
  const day = data.getDate() > 9 ? data.getDate() : `0${data.getDate()}`
  const mins = data.getMinutes() > 9 ? data.getMinutes() : `0${data.getMinutes()}`
  const hours = data.getHours() > 9 ? data.getHours() : `0${data.getHours()}`
  const sec = data.getSeconds() > 9 ? data.getSeconds() : `0${data.getSeconds()}`
  return `${data.getFullYear()}-${month}-${day}T${hours}:${mins}:${sec}`
}