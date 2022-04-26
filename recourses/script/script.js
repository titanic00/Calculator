let expression = '';

const number = document.querySelectorAll('.element');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function handler() {
        try {
            if (number[i].innerHTML == '=') {
                document.getElementById('text').innerHTML = eval(expression);
                expression = '';
                return;
            }
        } catch {
            document.getElementById('text').innerHTML = 'Invalid expression';
            expression = '';
            return;
        }
        expression = expression.concat(number[i].innerHTML);
        document.getElementById('text').innerHTML = expression;
    });
};

document.getElementById('del').addEventListener('click', () => {
    expression = expression.replace(expression[expression.length - 1], '');
    document.getElementById('text').innerHTML = expression;
})