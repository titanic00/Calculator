let expression = '';
let nextExpression = '';

const number = document.querySelectorAll('.element');
const textField = document.getElementById('text');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function handler() {
        try {
            if (number[i].innerHTML === '=') {
                nextExpression = nextExpression ? eval(nextExpression) + '' : eval(expression) + '';
                if (nextExpression === 'undefined') {
                    console.log(nextExpression);
                    throw new Error();
                }
                textField.innerHTML = nextExpression;
                expression = '';
            } else if (nextExpression !== '') {
                nextExpression = nextExpression + number[i].innerHTML;
                textField.innerHTML = nextExpression;
            } else {
                expression = expression + number[i].innerHTML;
                textField.innerHTML = expression;
            }
        } catch {
            textField.innerHTML = 'Invalid expression';
            expression = '';
            nextExpression = '';
        }
    });
};

document.getElementById('del').addEventListener('click', () => {
    if (nextExpression) {
        nextExpression = nextExpression.split('');
        nextExpression.pop();
        nextExpression = nextExpression.join('');
    } else if (expression) {
        expression = expression.split('');
        expression.pop();
        expression = expression.join('');
    }
    textField.innerHTML = nextExpression ? nextExpression : expression;
});

document.getElementById('clear').addEventListener('click', () => {
    expression = '';
    nextExpression = '';
    textField.innerHTML = expression;
});