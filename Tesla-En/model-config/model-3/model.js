const config1 = document.querySelector('.config-1');
const config2 = document.querySelector('.config-2');
const config3 = document.querySelector('.config-3')


config1.addEventListener('click', function() {
    console.log('1');
    document.querySelector('.config-2').style.color = 'black';
    document.querySelector('.config-1').style.color = 'red';
    document.querySelector('.config-3').style.color = 'black';
    document.querySelector('.price-uzb').textContent = '$54,990'
   
});

config2.addEventListener('click', function() {
    document.querySelector('.config-1').style.color = 'black';
    document.querySelector('.config-2').style.color = 'red'; 
    document.querySelector('.config-3').style.color = 'black';
    document.querySelector('.price-uzb').textContent = '$64,990'
});

config3.addEventListener('click', function() {
    document.querySelector('.config-1').style.color = 'black';
    document.querySelector('.config-2').style.color = 'black';
    document.querySelector('.config-3').style.color = 'red';  
    document.querySelector('.price-uzb').textContent = '$73,990'
});


// const test = 57990;
// const final = Math.trunc((test * 0.2) + (test * 0.002) + 4000 + test); 
// console.log(final)