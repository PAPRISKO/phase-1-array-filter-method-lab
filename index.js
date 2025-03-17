// Code your solution here

// 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // 3: matchName
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  