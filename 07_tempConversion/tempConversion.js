const ftoc = function(TempF) {
  let ctemp = (TempF - 32) * (5/9);
  ctemp = Math.round(ctemp*10)/10;
  return ctemp;
};

const ctof = function(tempC) {
  let tempF = (tempC * (9/5)) + 32;
  tempF = Math.round(tempF*10)/10;
  return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
