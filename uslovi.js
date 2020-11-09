

var num=1;
var numTwo=2;

if(num>numTwo){
    console.log('Uslovot e ispolnet');
}

/// ne e ispolnet islovot bidejki 1 e pomal od 2, console.log nema da javi nisto oti ne e ispolnet uslovot


if ( (3>1) || (4>5) ) {
    console.log ('uslovot e ispolnet');
}
console.log ('ouside if');



if  (((2>1) && (4>5)) || (4>3)){
    console.log ('uslovot e ispolnet 2');
}

console.log ('ouside if 2');


if (2>1){ //ako e true iskazot izvrsi go ovoj block code
    console.log('Uslovot e ispolnet 3');
}
else{
///ako e if false izvrsi go ovoj block code
}
console.log('outside if 3');



var num=1;
var num2=3;
 console.log('Before if');

 if (1>3){
     console.log('Uslovot e ispolnet');
 }
 else{
     console.log('Uslovot ne e ispolnet');
 }

 console.log('after if');




var age =prompt('Enter your age...');
age=parseInt(age);

console.log(typeof age); //string bidejki e od prompt 

if (age>=18){
    alert('Korisnikot e polnoleten')
}
else{
    alert('korisnikot ne e polnoleten');
}1





var numEven=prompt('Enter your number here...')
numEven=parseInt(numEven);

if (numEven%2==0){
    alert('the number entered is even');
}
else{
    alert('The number entered is odd');
}







var number=prompt('Enter you number');
number=parseInt(number);
//pozitiven broj, negativen broj, 0

if (number>0){
    console.log('Number is bigger than 0');
}
else if (number<0){
console.log('Number is smaller than 0');
}
else{
    console.log('Number is equal to 0');
}





var day=prompt('Enter your day');
day= parseInt(day);
var userDay='';

if(day==1){
    userDay='Ponedelnik';
}
else if (day==2){
    userDay='Vtornik';
}
else if (day==2){
    userDay='Sreda'
}

else if(day==4){
    userDay='Cetvrtok';
}
else if(day==5){
    userDay='petok';
}
else if(day==6){
    userDay='sabota';
}
else if(day==7){
    userDay='nedela';
}
else{
    userDay='Nema takov den vo nedelata';
}

alert(userDay);





var day=prompt('Enter your day');
day= parseInt(day);
var userDay='';

switch (day) { // break; - ako mi e dovolno primer barem samo 1 uslov da e ispolnet stavame break;
    case 1:
    userDay='Ponedelnik';
    case 2:
    userDay='Vtornik'
    case 3:
    userDay='Sreda';
    case 4:
    userDay='Cetvrtok'
    case 5:
    userDay='Petok';
    case 6:
    userDay='Sabota'
    case 7:
    userDay='nedela'
}





var age=prompt('Dali userot e polnoleten i godinite mu se parni?')
age=parseInt(age);

if ((age>=18)&&(age%2==0)){
    alert('Userot e polnoleten i godnite mu se parni')
}
else if  ((age>=18)&&(age%2)){
    alert('Userot e polnoleten no  godnite ne mu se parni')
}
 else if ((age <= 18) && (age % 2)) {
    alert('Nepolnoleten so neparni godini!');
} else if ((age < 18) && (age % 2 == 0)) {
    alert('Nepolnoleten so parni godini!');
} else {
    alert('Ne ispolnet uslov');
}




switch(number){
    case 0:
    console.log('0');
    case 1:
    console.log('1');
    default:
    console.log('default');
}





