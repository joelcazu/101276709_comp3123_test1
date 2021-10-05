const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
      if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
        const filterArStr = mixedArray.filter((itemArray) => typeof itemArray === "string");
        const mapArLoCaseStr = filterArStr.map((itemFilterAr) =>
        itemFilterAr.toLowerCase());
        resolve(mapArLoCaseStr);} else {
        reject("Error");}});
  };
  
  const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
  lowerCaseWords(mixedArray)
    .then((value) =>
      console.log(value) )
    .catch((error) =>
      console.log(error));