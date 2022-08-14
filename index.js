 
//  // 1.Площадь треугольника.
 let num1 = Number(prompt('Введите 1 число'));
 let num2 = Number(prompt('Введите 2 число'));

let squareTriangle = function(arg1, arg2) {
    return ( arg1 * arg2 ) / 2;
}
alert("Площадь равна " + squareTriangle(num1, num2));



// // 2.Длина окружности.
let num3 = Number(prompt('Введите диаметр круга'));
let pi = 3.14;

let squareCircle = function(arg1, arg2) {
    return (arg1 * arg2);
}
alert('Длина окружности равна ' + squareCircle(num3, pi));




// //3.Обьем цилиндра.
let num4 = Number(prompt('Введите высоту цилиндра'));
let num5 = Number(prompt('Введите диаметр основы'));

let volume = function(arg1, arg2, arg3) {
    return ( arg1 * arg2 * arg3);
}
alert('Обьем цилиндра равен ' + volume(num4, num5, pi))




//4.Диапазон чисел кратных 5.
let num6 = Number(prompt('Введите 1 число'));
let num7 = Number(prompt('Введите 2 число'));

for(let i = 0; true; i++) {
    if(num6 > num7 + 1) {
        console.log('Вы ввели неверные данные.1 число должно быть больше второго!Попробуйте еще раз');
        break;
    } else {
        let range = function(arg1, arg2) {
            for( num6; num6 <= num7; num6++) {
                if( num6 % 5 === 0) {
                    console.log(num6);
                }
            }
        }
        range(num6, num7);
        break;
    }
}





// 5. Игра FizzBuzz.
for(let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else{
        console.log(i);
    }
}



//6. Квадратное уравнение.


let equation = function() {
    let num8 = Number(prompt('Введите число a' ));
    let num9 = Number(prompt('Введите число b'));
    let num10 = Number(prompt('Введите число c'));

    let discriminant = Math.pow(num9, 2) - 4 * num8 * num10;
    while(true) {
        if(discriminant < 0) {
            console.log('Корней нет (дискриминант меньше 0');
            break;
        } else{
            let x1 = ( -num9 + Math.sqrt( discriminant ) ) / (2 * num8) ;
            let x2 = ( -num9 - Math.sqrt( discriminant ) ) / (2 * num8);
            console.log('x1 равен ' + x1);
            console.log('x2 равен ' + x2);
            break;
        }
    }
}
equation();

