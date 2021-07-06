export function String2Date(dateString: string) {
  return dateString.split("T")[0]
}

export function String2Time(dateString: string) {
  let res = dateString.split("+")[0]
  return res.replace("T", " ")
}
