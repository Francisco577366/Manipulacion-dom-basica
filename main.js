const h1 = document.getElementById('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btncalcular');
const presult = document.getElementById('result');
const form = document.getElementById('form');

btn.addEventListener('click', sumarinputsvalues);

function sumarinputsvalues(event){
//event.preventDefault();
const sumainputs = input1.value + input2.value;
presult.innerText = "Resultado:" + sumainputs;

}






/*console.log({h1,p,parrafito,pid,input});

h1.innerText = 'patito';

console.log(h1.getAttribute('class'));
/*h1.setAttribute('class','verde');*/

/*h1.classList.add('verde');
h1.classList.remove('platzilite');
//h1.classList.toggle('verde'); se usa normalmente en los eventos //
//h1.classList.contains('verde'); nos devuelvo un true o false si tiene esa clase

input.value = "456"


const img = document.createElement('img');
img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fjosefacchin.com%2Fcomo-quitar-el-fondo-de-una-imagen%2F&psig=AOvVaw3csWNtL_hqnwyKXdr1-Vk-&ust=1667655031559000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPj13KDRlPsCFQAAAAAdAAAAABAE');
console.log(img);

pid.append(img);*/