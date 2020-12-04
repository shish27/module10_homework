var valume = +prompt ('Введите значение');
console.log('Ваше значение: '+ valume);
 

if (isNaN(valume) || valume === null) {
   console.log('Упс, вы ошиблись')
}  // console.log('Тип данных: ' + typeof (valumeNumber))
  else if (valume % 2 == 0) {
   console.log('Значение четное')
} else if (valume % 2 != 0) {
   console.log('Значение нечетное')
}