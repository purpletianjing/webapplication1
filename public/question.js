function Question(type,value,realValue) {

  this.type = type;
  this.value = value;
  this.realValue = realValue;
}

Question.prototype.getScore = function() {
  var typeStragy = new TypeStragy();
  var title =  typeStragy.typeGetScore(this.type);
  var score = title.getScore(this.value,this.realValue);
  return score;
};
