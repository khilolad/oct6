const name = document.getElementById('name');
const num = document.getElementById('num');
const add = document.getElementById('add');
const info = document.createElement('p');

function submit(){
    info.textContent = 
        'Your name is: ' + name.value + '\n' + 
        'Your number is: ' + num.value + '\n' + 
        'Your address is: ' + add.value;
    info.style.whiteSpace = 'pre-line';
    document.body.append(info);
}