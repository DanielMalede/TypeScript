// let usernumber = document.createElement("input")
// usernumber.append()
// function getUserNum(usernumber: number):void {

//     if (usernumber > 10) {
//         console.log("greater then 10");
//     }
//     else {
//         console.log("less then 10");

//     }
// }

// function getNumberFromUser(usernumber: number):void {
//     if (usernumber > 10) {
//         console.log("greater then 10");
//     }
//     else if (usernumber < 10) {
//         console.log("less then 10");
//     }
//     else if (usernumber == 10) {
//         console.log("equal to 10");
//     }
// }

// function cample(first:number,second:number):void {
//     if (first > second) {
//         console.log(first);
//     }
//     else if (second > first) {
//         console.log(second);
//     }
//     else if (second == first) {
//         console.log("values are equal");
//     }
// }

// let usernumber = document.createElement("input")
// usernumber.append()
// function getUserNum(usernumber: number):void {

//     if (usernumber > 10) {
//         console.log("greater then 10");
//     }
//     else {
//         console.log("less then 10");

//     }
// }

// function getNumberFromUser(usernumber: number):void {
//     if (usernumber > 10) {
//         console.log("greater then 10");
//     }
//     else if (usernumber < 10) {
//         console.log("less then 10");
//     }
//     else if (usernumber == 10) {
//         console.log("equal to 10");
//     }
// }

// function cample(first:number,second:number):void {
//     if (first > second) {
//         console.log(first);
//     }
//     else if (second > first) {
//         console.log(second);
//     }
//     else if (second == first) {
//         console.log("values are equal");
//     }
// }

// function returnMinNum(num1:number,num2:number):number{
//    if(num1<num2){
//      return num1
//   }
//   else{
//     return num2
//   }
// }
// // console.log(returnMinNum(6,8)) 

// function chackTreeNumbers(num1:number,num2:number,num3:number):number{
//   return Math.min(num1,num2,num3)
// }
// console.log(chackTreeNumbers(10,5,7)) 

// function chackAvregeNum(num1:number,num2:number,num3:number):number{
//   return num1+num2+num3/3
// }
// // console.log(chackAvregeNum(5,1,8))

// function chackFourNum(num1:number,num2:number,num3:number,num4:number):number{
//   return num1+num2+num3+num4
// }
// // console.log(chackFourNum(4,2,4,2))

// function returnMinNumbersArray(numArray:number[]):number{
//     let minNum = numArray[0]
//     numArray.forEach(item => {
//       if(item<minNum)
//         minNum=item
//     }) 
//     return minNum
//   }
//   console.log(returnMinNumbersArray([4,4,3,8,1,7,15]))
  
// function printAinName(arrayNames: string[]): any {
//     for (let item of arrayNames) {
//         if (item[0]=="A"){
//             return item
//         }
//     }
//     return
// }
// console.log(printAinName(["daniel", "Abay", "Abraham"])) 

// function chackIfDividedByTwo(arrayNum:number[]):string{
//     for (let item of arrayNum){
//         if(item%2==0){
//             return "yes"
//         }
//     }
//     return "no"
// }
// console.log(chackIfDividedByTwo([5,7,1,9]))

// 

// function printTextAsNum(myText:string,myNum:number):void{
//     for(let i = 0;i<myNum;i++){
//         console.log(myText)
//     }
// }
// printTextAsNum("blabla",4)

// function chackIfAgeIsAbove18(myName:string,myAge:number):string{
//    let answer=  myAge>18? "Welcome"+myName : "No Entry"+myName
//    return answer
// }
// console.log(chackIfAgeIsAbove18("Dalia",23) )

// function chackIfName(firstName:string,lastName:string):any{
//     let answer = firstName[0]==lastName[0]? firstName[0]:0
//     return answer
// }
// console.log(chackIfName("Dalia","Zegaya"))

// function chackArrayLength(myArray: any[]):string {
//     switch (myArray.length) {
//         case 0:
//             return "No information"
//         case 1:
//             return "one information"
//         case 2:
//             return "two information"
//         default:
//             return "to much Information"
//     }
// }
// console.log(chackArrayLength([1,5,,5,5,5]))

// function chackText(numArray: number[], myText: string): any {
//     switch (myText) {
//         case "Upsite-Down":
//             return numArray.reverse()
//         case "ascending-order":
//             return numArray.sort((a,b) => a-b)
//         case "Descending-order":
//             return numArray.sort((a,b) => b-a)
//         case "text":
//             return numArray.toString()    }
// }
// console.log(chackText([5,2,8,29,1],"text  "))

