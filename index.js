"use strict";

// showPrimes(50);
// function showPrimes(num){
//     console.log(2);
//             console.log(3);
//     for(let i=2;i<=num;i++){
//         if (i%2!==0 && i%3!==0){
            
//             console.log(i);
//         }
//     }   
// }




// // --------------------------------------------------------------
// const movie={
//     title: 'a',
//     year:2019,
//     rating:5,
//     director:'Bill'

// };
// let a=showProperties(movie);
// console.log(a);
// function showProperties(obj){
//     let count=0;
   
//     for(let key in obj)
//         if(typeof obj[key] =="string")
//          count ++;
//     return count;
// } 

// // --------------------------------------------------------------

// const array=[0 ,true , undefined,'',NaN,2,3];
// console.log(countTruthy(array));
// function countTruthy(array){
//     let count=0;
//     for(let value of array){ 
//         if (value)
//              count++;
             
        
//     }
//     return count;
// }
// // --------------------------------------------------------------
// console.log(sum(10));

// function sum(limit){

//     let count3=0;
//     let count5=0; 

//     for(i=0;i<=limit;i++){
//         if ((i%3===0)){
//             count3+=i;
//         }
//         if ((i%5===0)){
//             count5+=i;
//         }
//     }
//     return count3 + count5;
   
// }  
// // --------------------------------------------------------------


// const marks=[0,100,100];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let sum=0;
//     for(let mark of marks){ 
//         sum=+mark;
//         let avarege=sum/marks.length;
//         if (avarege<60)
//             return 'F';
        
//         if (avarege<70) 
//             return 'D';
    
//         if (avarege<80)
//             return 'C';
        
//         if (avarege<90)
//             return 'B';

//             return 'A';
           
//     }
// }

// // --------------------------------------------------------------

// showStars(6);
// function showStars(rows){
//     for(i=0;i<=rows;i++){
//     let patern='';
//         for(k=0;k<=i;k++){ 
//             patern+='*';
           
//         }
//         console.log(k+ ' '+patern);
//     }  }

//производственные функции
// function createCircle(radius){
// // обьект 
// return{
//     radius,
//     //метод
//     draw(){
//         console.log('draw');
//     }
// }   
// }
// const circle2=createCircle(1); 


// //Конструкторы
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console/log('draw');
//     }
     
// }
// const circle=new Circle(1);

// function Person(name,age, spec, city){
//     this.name=name;
//     this.age=age;
//     this.spec=spec;
//     this.city=city;
// }
// const dima = new Person('Dima',23,'Technic','odesa');
// console.log(dima);
let incr=10, decr=10;
console.log(8===8);

