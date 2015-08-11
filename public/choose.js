function Choose() {

}

Choose.prototype.getScore = function(value,realValue) {
  if(value[0] === realValue[0]) {
    return 2;
  }
  return 0;
};
