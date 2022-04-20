/* ------HW-3------ */


var a = +prompt ('Введите число', 100);
var b = +prompt ('Введите второе число', 100);
var c = prompt ('Ведите цифру 1 - если хотите прибавть числа, 2 - отнять, 3 - разделить и 4 - умножить');

var resalt;

switch(c){
  case '1': resalt = a + b;
  break;
  case '2': resalt = a - b;
  break;
  case '3': resalt = a / b;
  break;
  case '4': resalt = a * b;
  break;
  default: alert('Вы ввели не допустимое значение!')
  }
  alert(resalt);

/* ------HW-4------ */

var hash = "",
    resalt = ""
    for (var i = 0; i < 7; i++) {
        hash += "#"
        resalt += hash + "\n"
    }
    alert(resalt);