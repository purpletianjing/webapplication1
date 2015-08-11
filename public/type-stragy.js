function TypeStragy() {

}

TypeStragy.prototype.typeGetScore = function(type) {
  var title;
  switch (type) {
    case 'text':
      title = new Blank();
      break;
    case 'radio':
      title = new Choose();
      break;
    case 'checkbox':
      title = new MutilChoose();
  }
  return title;
};
