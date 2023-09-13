



function operation(btn){
    a = Number(document.querySelector('.inputOne').value);
    b = Number(document.querySelector('.inputTwo').value);
    document.querySelectorAll('.math-btn').forEach(element=> {
        element.classList.remove('active');
       
    });
    btn.classList.add('active');
    
}

let result = 0;
let a = 0;
let b = 0;
document.querySelector('.plus').addEventListener('click', function() {
    operation(this)
    result = a + b;
});

document.querySelector('.minus').addEventListener('click', function() {
    operation(this)
    result = a - b;
});

document.querySelector('.umnoj').addEventListener('click', function() {
    operation(this)
    result = a * b;
});

document.querySelector('.delenie').addEventListener('click', function() {
    operation(this)
    result = a / b;
});

document.querySelector('.result').addEventListener('click', function() {
    document.querySelector('.resultText').innerHTML = "Ответ: " + result.toFixed(2);
    if(result > 0) document.querySelector('.resultText').style.color = 'green';
    else document.querySelector('.resultText').style.color = 'red';
});

