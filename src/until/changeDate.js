const changeDate = function(d) {
  let date = new Date(d)
  let YYYY = date.getFullYear()
  let MM = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  let DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  return YYYY + '-' + MM + '-' + DD
}

export default { 
  changeDate
}