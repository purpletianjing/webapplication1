function MutilChoose() {

}

MutilChoose.judgeAnswer = function(val, realValue) {
  var score = 3;
  if (realValue.indexOf(val) === -1) {
    score = 0;
  }
  if (value.length < val.value.length && (score !== 0)) {
    score = 2;
  }
  return score;
};

MutilChoose.prototype.getScore = function(value, realValue) {
  var score = 3;
  value.forEach(function(val) {
    if (realValue.indexOf(val) === -1) {
      score = 0;
    } else if (value.length < realValue.length && (score !== 0)) {
      score = 2;
    }
  });
  return score;
};
