const btns = document.querySelectorAll('.btn');
const caas = document.querySelector('.caas')
const clucs = document.querySelectorAll('.cluc')
let count = 0
 btns[0].addEventListener('click', (e) => {
     if (count> 3) {
         count =0
     }
     else{
        count++
     }
     caas.style.transform = `translateX(${-1000*count}px)`;
     step()
 })
 
 btns[1].addEventListener('click', (e) => {
    if (count< 1) {
        count =4
    }
    else{
       count--
    }
    caas.style.transform = `translateX(${-1000*count}px)`;
    step()
    console.log(btns[0])
    

})

step()

 function step() {
     clucs.forEach((elemen,i) => {

         if (count == i) {

            elemen.classList.add('clucactive')
         }else{
            elemen.classList.remove('clucactive')
         }
         
     });
     console.log(count)
 }

 const knop = document.querySelector('.bbt')
let click=true;
let ter;
knop.addEventListener('click', (e) => {
    
    if (click) {
        ter = setInterval(() => {

            if (count> 3) {
                count =0
            }
            else{
               count++
            }
            caas.style.transform = `translateX(${-1000*count}px)`;
            step()
          
         }, 1000);  
         click=false;
         knop.textContent='стоп'
    }
    else{
        clearInterval(ter) ;
        click=true;
        knop.textContent='Старт'
           console.log( )
    }
   
     

})