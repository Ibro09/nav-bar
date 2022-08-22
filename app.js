// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
  
const List=document.querySelector('.links');
const toggle=document.querySelector('.nav-toggle');

toggle.addEventListener('click',()=>{
List.classList.toggle('show-links');
})