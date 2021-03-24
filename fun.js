// Exercise for functions

// Question 1 :- Declare a function fullName and it print out your fullname 

function PrintFullName(){

    return " Abdirahman Saed"
}

console.log( PrintFullName())


// Question 2 :- Declare a function fullName taking two parameters and it print out your fullname 

function printN(fName,Lname){

    return fName + Lname
}

console.log(printN('ahmed',' abdinasir'))


// Question 2 :- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.


BMIcalculator = (weight,height,name)=>{
  

     console.log( weight / height**2 + ' Kg/M2')


    if(weight / height**2 !== weight / height**2 ){

     return `Please Add Numbers  ${name} !`
    }
 
    else if(weight / height**2 >= 18.5  && weight / height**2 <= 24.9){

        return `Congrats ${name}!, You are Fit `
    }

    else if(weight / height**2 <= 18.5) {

        return `Sorry ${name}!, You are Malnutrated `
    }

    else {

        return `Sorry  ${name} !, You need more Exercise`
    }
}
console.log( BMIcalculator(65,1.8,'abdirahman'))
// meters and kg is must



// Question 3 :- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

seosonCheck = (Month)=>{

    if(!Month){

        return `Please add a month`
    }

    else if (Month >= 3 && Month < 7 ){

        return `Don't forget . We are in spring`
    }

    else if (Month >=7 && Month < 10 ){

        return `Don't forget . We are oin Summer`
    }

    else if (Month >=10 && Month < 12 ){

        return `Don't forget . We are in Automn`
    }

    else{
        return `Don't forget . We are in Winter`
    }
}

console.log(seosonCheck(10))


// Question 4 :- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.


function printArray(Array){

   return Array
}

console.log(['cisman, ali, farah , warfaa'])

// Question 4 :- Write date like this 2021-3-22

isoString = (date)=>{

    return date

}

console.log(isoString(('2021-3-22 , 11:56')))


// Question 5 :- Declare a function name swapValues. This function swaps value of x to y.

function swap1(x,y){

    if(x != y){

        return `${y} ${x}`
    }
}

console.log(swap1(1,2))



//Question 6 :- ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


LinearSolver = (a,b,c,x,y)=>{

     if(a*x + b*y + c >= 0){
        
        return a*x + b*y + c 
     }

     else{
         return `Maa Caleesh Bro`
     }

}

console.log(LinearSolver(4,5,7,12,7))


// Question 7 :- ax2 + bx + c = 0.Write a function which calculates value or values of a quadratic equation,

QuadraticSolver = (a,b,c,x=4,y=1)=>{

    if(a*(x**2) + b*y + c >= 0){

        return a*(x**2) + b*y + c 
    } 
    
    else{
        return `Maa Caleesh Bro`
    }
}

console.log(QuadraticSolver(12,4,4))



// Questions End





// Simple reusable function passing data in the parameter


Multiplier = (num, num2, howMany , Times)=>{
 
    return (num ** num2) +  howMany + Times
}

console.log(Multiplier(5 , 2 , ", I squared by ", 2) )



//Another Example

let greet = 'Hi'
let name = [' Abdirahman ' +'!']

function NameGenerator(){
    
    return greet + name  ;
}

NameGenerator()


// Arrow function form

NameGen = ()=> {
    console.log(greet + name)
}

NameGen()

// this function takes array as a parameter and sum up the numbers in the array


function para(array){
    
    let sum = 0
     
    for(i=0; i<array.length; i++){
        
         sum += array[i]

        // return  sum
    }
     
    return sum;

}

let array = [1,2,3,4,5]

console.log(para(array))

// console.log(para([1,2,3,4,5]))

// Using many arguments use spread out dots

function heyA(...arguments){

   console.log(arguments)
}

heyA(1,2,3,4,5)



//Anonymous Function (No Name)

const anonymousFun = function() {
    return (
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

console.log(anonymousFun())


// Function have default value 

NameGene=(name='abdirahman')=>{

    let myName = `${name}, Loves Javascript`

    return myName;
}

console.log(NameGene())

// Calculating weight mass and gravity in moon and earth

WeightCal = ( weight,gravity=10) => {
     
    
    let mass = weight/gravity + 'N'

    return mass;
}

let inMoon = [...WeightCal(650,1.65)]
// In Moon

let joinIt = inMoon.join(' ')

// let roundIt = Math.floor(joinIt)

let stringfy = parseFloat(joinIt) + "N"
 
console.log(stringfy)

console.log(WeightCal(650))
// in Earth

// Capitalize This array 

let countries = ['somaliland, somalia, kenya, tanzania, uganda']

capitalizerCon = (array)=>{
 
    let join = countries.join()

    let split = join.toLocaleUpperCase()

    return split
    
}

console.log(capitalizerCon(countries))



// Call-Back Functions

ImH = (No,Cb)=>{
    
    return Cb(No)
}

console.log(ImH(10, (No)=>{

    return No*2 + ' Simple Callback Fun'
}))

// Set time out Callback Function

function Delay(array){
    
    setTimeout(() =>{
        
     for(i=0; i<array.length ; i++){

           console.log((array[i]*4)/2)
     }        
      
    }, 2000); 
}

let myArrray = [2,3,4,5,6]

Delay(myArrray)


Counter =()=>{

    let count = 1
   
    return ()=>{
        // count += 1
        count ++
     
        return count;

    }
}

let newCounter = Counter()

console.log(newCounter())
console.log(newCounter())


// Another Example

checker=()=>{
    let checkGrade = [10,20,30]

   return ()=>{
       for(i=0 ; i < checkGrade.length ; i++){

        checkGrade[i] *= 2

       }
       return checkGrade
   }
}

let doubleChecker = checker()

console.log(doubleChecker())
console.log(doubleChecker())
console.log(doubleChecker())



// great with my name


function Great(Cb){

    let name = prompt('what is your name ?')

    console.log(name)

    Cb(name)
}

 callback = (name) =>{

    setTimeout(() => {
        
            alert(name + " How are you doing today !" )
            
    }, 2000); 
}
// Great(callback)

// Calculator 

Cal = (no1,no2, callbacky)=>{
   
    callbacky(no1,no2)
}

callb = (no1,no2)=>{
   
    console.log( no1**no2)
  
} 

Cal(5,3,callb)

// Configuration

 Mature = (nick,age, hasBigVoice = true)=>{
  

    if( hasBigVoice == true && age > 18){

        return `Congrats ${nick}, You're big enough` ;

    } else{

        return `we are sorry${nick}, still young` ;
    }
}

console.log(Mature('abdirahman',18))



// // another Example

function higher(N1,N2,CB){

    CB(N1,N2)
}

callback = (n1,n2)=>{
    
    console.log( n1/n2 + 2 ) 
}

higher(100,5,callback)


    higher( 5,-25,  substruct=(n1, n2)=> {
        let cal = n1 - n2;
    
        console.log(cal);
      })
  

// Another example

let age = 18

function Ages (ae,cb){
 
  return cb(ae)
}

function Cback(ae){

    return ae*2
}

let chker = Ages (age,Cback)

console.log(chker)




