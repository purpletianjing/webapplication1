function FormSerilizer() {
  this.result = [];
}

FormSerilizer.checkResult = function(val, result) {
  var objResult = {};
  for (var i = 0; i < result.length; i++) {
    if (result[i].name === val.name) {
      result[i].value.push(val.value);
      return;
    }
  }
  objResult = {
    name: val.name,
    type: val.type,
    value: [val.value]
  };
  result.push(objResult);
};

FormSerilizer.getCorrectAnswer = function(correctAnswer) {
  realAnswer = correctAnswer;
};

FormSerilizer.findCorrectAnswer = function(val) {
  realAnswer.forEach(function(realAnsw) {
    if(realAnsw.name === val.name) {
      val.realValue = realAnsw.value;
    }
  });
  return val;
};

FormSerilizer.matchRealResult = function(result) {
  result = result.map(function(val) {
    return FormSerilizer.findCorrectAnswer(val);
  });
};

FormSerilizer.prototype.getScore = function() {
  var score = 0;
  this.result.forEach(function(val) {
    var question = new Question(val.type,val.value,val.realValue);
    score += question.getScore();
  });
  return score;
};

FormSerilizer.prototype.formScan = function(form) {
  var result = [];
  var that = this;
  [].forEach.call(form, function(val) {
    if ((val.type === 'text' || val.checked) && (val.name !== '')) {
      FormSerilizer.checkResult(val, that.result);
    }
  });
  FormSerilizer.matchRealResult(that.result);
  this.result = that.result;
};
