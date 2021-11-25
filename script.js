var age =  prompt('Введите свой возраст')

Number = (age)



if (age <=18 && age >= 0){
    alert('Вы еще молоды . Вам нада учиться')
}else if( age > 18 && age <= 50 ){
    alert(
        'Вам нужно работать'
    )
}else if (age <= 59 && age > 50){
    alert('Вам скоро на пенсию')
}else if ( age > 59 &&  age <= 150){
    alert('Вы пенсионер')
}else {
    alert('что то пошло не так')
}