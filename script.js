//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
//Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//Користувач ввів 2 і 2:
//2+2=4
//2-2=0
//2*2=4
//2/2=1

x = parseInt(prompt('Number 1'));
y = parseInt(prompt('Number 2'));
c = x + y;
d = x - y;
e = x * y;
f = x / y;
alert(`Results:
	    1) ${x} + ${y} = ${c}
	    2) ${x} - ${y} = ${d}
	    3) ${x} * ${y} = ${e}
	    4) ${x} / ${y} = ${f} 
        `);