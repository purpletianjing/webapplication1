function Blank() {

}

Blank.reduceRepeat = function(result,value) {
  var resultObject = {};
  value.forEach(function(val) {
    if(resultObject[val] !== 1) {
      resultObject[val] = 1;
      result.push(val);
    }
  });
};
Blank.everyBlank = function(value,realValue,score) {
    if(realValue.indexOf(value) !== -1) {
      score++;
      return score;
    }
    return score;
};

Blank.prototype.getScore = function(value,realValue) {
  var score = 0;
  var result = [];
  Blank.reduceRepeat(result,value);
  if(result.length === 0) {
    return 0;
  }
  for(var i = 0;i < result.length; i++) {
      score = Blank.everyBlank(result[i],realValue,score);
  }
  return score;
};
