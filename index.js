// Code your solution here
function findMatching(drivers, string) {
  let match = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
  return match
}

function fuzzyMatch(drivers, string) {
  let match = drivers.filter(driver => {
    return driver.substring(0, string.length) === string
  })
  return match
}

function matchName(drivers, string) {
  let match = drivers.filter(driver => {
    return driver.name === string
  })
  return match 
}
