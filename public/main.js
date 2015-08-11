correctAnswer = [{
  type:'text',
  name: '1-1',
  value: ['建模语言']
},{
  type:'text',
  name: '1-2',
  value: ['多态', '继承', '封装']
},{
  type:'radio',
  name: '2-1',
  value: ['A']
},{
  type:'radio',
  name: '2-2',
  value: ['A']
}, {
  type:'checkbox',
  name: '3-1',
  value: ['A','B','D']
}, {
  type:'checkbox',
  name: '3-2',
  value: ['B','D']
}, {
  type:'radio',
  name: '4-1',
  value: ['对']
}, {
  type:'radio',
  name: '4-2',
  value: ['对']
}];


var form = document.getElementsByTagName("form")[0];
var input = form.getElementsByTagName('input');

  document.getElementById('commit').addEventListener('click',function() {

  formSerilizer = new FormSerilizer();
  FormSerilizer.getCorrectAnswer(correctAnswer);
  formSerilizer.formScan(input);
  var score = formSerilizer.getScore();
  document.getElementById('score').value = score;
  });
