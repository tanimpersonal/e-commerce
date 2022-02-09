let headerTwo= document.getElementsByTagName('h2');
console.log(headerTwo);
for(let i=0; i<headerTwo.length; i++){
    headerTwo[i].style.color='lightblue';
}
let backPack= document.getElementById('backpack');
backPack.style.backgroundColor='tomato';
let myClass=document.getElementsByClassName('card');
for(let i=0; i<myClass.length; i++){
    myClass[i].style.borderRadius='30px';
}
let buttonOne= document.getElementById('button-one');
buttonOne.addEventListener('click', function(){
    console.log('hello');
})
let allButton=document.getElementsByClassName('my-button');
for(let i=0; i<allButton.length; i++){
    allButton[i].addEventListener('click',function(){
        allButton[i].style.display='none';
    })
}
let myInput= document.getElementById('touch-input');
let myButton= document.getElementById('touch-button');
myInput.addEventListener('keyup',function(){
    if(myInput.value=='email'){
        myButton.removeAttribute('disabled');
    } else{
        myButton.setAttribute('disabled',true);
    }
})
let watch= document.getElementById('watch');
watch.addEventListener('mouseover',function(){
        watch.src='images/categories/shoes.png'
})
watch.addEventListener('mouseout',function(){
    watch.src='images/categories/watch.png';
})