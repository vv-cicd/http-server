function filterByTerm(inputArr, searchTerm) {
  console.log("filterByTerm START!!!");
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  module.exports = filterByTerm;