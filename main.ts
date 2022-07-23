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

/////////////////////////////////////////////////////////////////////////////////////
// שאלות חדשות עם קלאס
/////////////////////////////////////////////////////////////////////////////////////


// function calc(num1?:number):number{
//     return num1 ? num1 +5 :0
// }
// // console.log(calc(6)) //11
// function getdetails(fname:string, age:number=18):string{
//     return `${fname} ${age}`
// }
// // console.log(getdetails("jacob")) 

// function sum(...numbers:number[]):number {
//     let sumNum:number  = 0
//     numbers.forEach(item => 
//         sumNum+=item)
//         return sumNum
// }
// console.log(sum(5,89,33,-127,25))

// function printDetails(myNume:string , lastName?:string):string{
//     return `${myNume},${lastName}`
// }
// console.log(printDetails("daniel"))

// function printDetails (myNume:string,myAge:number,email?:string):any{
//     return email==undefined? `${myNume}${myAge}`:`${myNume}${myAge}${email}`
// }
// console.log(printDetails("daniel",24))

// function printDetails (catName:string,age:number,catType?:string):any{
//   return  !catType? `${catName},${age}`: `${catName},${age},${catType}`
// }
// console.log(printDetails("Kity",5,"White"))

// function printDetails(myText:string,mybol:boolean=true){
//    return mybol? `Hello ${myText}`: `welcome ${myText}`
// }
// console.log(printDetails("daniel",true))

// function printDetails(f_name:string,l_name:string,miss:string="miss"){
//     return `${f_name},${l_name},${miss}`
// }
// console.log(printDetails("daniel","malede"))

// function printDetails(myText:string,myOtherText?:string,defualt:number=1){
//     for(let i =0;i<defualt;i++){
//         console.log(`${myText},${myOtherText}`)
//     }
// }
// printDetails("daniel","malede")

// function orderLables(...myString:string[]){
//     console.log(myString.sort().join())
// }
// orderLables('x','g','b')

// function orderNumbers(...arrayNum:number[]):number[]{
//      return arrayNum.sort() 
// }
// console.log(orderNumbers(1,5,8,1,4)) 

// function orderNames(...arrayNames:string[]){
//     return arrayNames.sort().join()
// }
// console.log(orderNames("daniel","abey","lior"))
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// class Car {
//     company:string;
//     modle:string;
//     color:string;
//     constructor(company:string,modle:string,color:string){
//         this.company=company,
//         this.modle=modle,
//         this.color=color
//     }
// }

// class Elephent {
//     elephentHeigth:string=""
//     elephentType:string=""
//     elephentAge:number=0
//     elephentCountry:string=""

//     getelEphentInfo():string{
//         return `${this.elephentHeigth}${this.elephentType}${this.elephentAge}${this.elephentCountry}`
//     }
// }
// let newelphent = new Elephent()
// newelphent.getelEphentInfo

// class Pants {
//     size:number;
//     color:string;
//     theType:string;
//     fabric:string;
//     long:string;
//     doseInStock:boolean=true
//     constructor(size:number,color:string,theType:string,fabric:string,long:string,doseInStock:boolean){
//         this.size= size;
//         this.color=color;
//         this.theType=theType;
//         this.fabric=fabric;
//         this.long=long;
//         this.doseInStock=doseInStock;
//     }
//     get getPantsInfo(){
//         return `${this.size},${this.color},${this.theType},${this.fabric},${this.long},${this.doseInStock}`
//     }
// }
// let newPants = new Pants (35,"blue","a","short","cotton",false)
// console.log(newPants.getPantsInfo)

// class Player {
//     fullName: string;
//     birthDate: string;
//     ganer: string;
//     sex?: string;
//     constructor(fullName: string, birthDate: string, ganer: string, sex?: string) {
//         this.fullName = fullName;
//         this.birthDate = birthDate;
//         this.ganer = ganer;
//         this.sex= sex;
//     }
//     protected getPlayerInfo() {
        
//         return this.sex?`${this.fullName},${this.birthDate},${this.ganer},${this.sex}`:`${this.fullName},${this.birthDate},${this.ganer}`
//     }
//     get getPlayerResualt(){
//         return this.getPlayerInfo()
//     }
// }
// let newPlayer = new Player ("daniel","02-08-1997","basketBall","male")
// console.log(newPlayer.getPlayerResualt)

// class SoccerPlayer extends Player{
//     team:string;
//     dosePlayInTeam:boolean;
//     constructor(fullName: string, birthDate: string, ganer: string,team:string,dosePlayInTeam:boolean, sex?: string){
//     super(fullName, birthDate, ganer, sex)
//     this.team= team
//     this.dosePlayInTeam= dosePlayInTeam
//     }
//     get getSoccerPlayerInfo(){
//         return `${this.getPlayerResualt},${this.team},${this.dosePlayInTeam}`
//     }
// }
// let newSoccerPlayer = new SoccerPlayer ("gavriel","02-08-2000","football","A",true,"men")
// console.log(newSoccerPlayer.getSoccerPlayerInfo)

// class User {
//     fullName:string;
//     age:number;
//     password:number;
//     private isOnline:boolean;
//     constructor(fullName:string,age:number,password:number,isOnline:boolean){
//         this.fullName = fullName
//         this.age=age
//         this.password =password
//         this.isOnline = isOnline
//     }
//     get useronline():boolean{
//         return this.getFromGet
//     }
//     set getFromGet(getFun:boolean){
//        this.isOnline= getFun
//     }
//     static getUserYoungesOrAdult(isYoung:boolean,...userOBJ: User[]){
//         isYoung? userOBJ.sort((a,b)=>a.age-b.age)[0]:userOBJ.sort((a,b)=>b.age-a.age)[0]
//     }
// }
// // const netanel = new User ("netanel",22,35981,true)
// // const daniel = new User ("daniel",25,35981,true)
// // User.getUserYoungesOrAdult(true,daniel,netanel)

// class Student extends User{
//     birthDay:string;
//     email:string;
//     constructor(fullName:string,age:number,password:number,isOnline:boolean,f_name:string,l_name:string,birthDay:string,email:string){
//         super(fullName,age,password,isOnline)
//         this.fullName=`${f_name} ${l_name}`;
//         this.email=email;
//         this.birthDay=birthDay;
//     }
//     get getStudent(){
//         return `${this.fullName}${this.birthDay}${this.email}${this.password}`
//     }
//     getUserStatus(){
//         this.useronline ?"green": "red"
//     }
// }
// const lior = new Student ("lior",26,3595557884581,false,"lior","david","1995-04-18","lior@gmail.com",)
// const abaynech = new Student ("abaynech",28,51548555,true,"abaynech","asaye","1995-12-29","abay@gmail.com")
// console.log( abaynech.useronline)


// class Room {
//     width:number;
//     length:number;
//     squerSize:number;
//     private isHaveAWindow:Boolean=false
//     constructor(width:number,length:number){
//         this.width=width
//         this.length=length
//         this.squerSize=width*length
//     }
//     printDetails():string{
//         return `${this.width}${this.length}${this.squerSize}${this.isHaveAWindow}`
//     }
//     get getARoom(){
//         return this.isHaveAWindow
//     }
//     set creatARoom(simLiOdroom:Boolean){
//         this.isHaveAWindow= simLiOdroom
//     }
//     static roomStaticFun(isRoomSmall:Boolean,...rommOBG:Room[]){
//         return rommOBG && isRoomSmall? rommOBG.sort((a,b)=> a.squerSize - b.squerSize)[0]: rommOBG.sort((a,b)=>b.squerSize - a.squerSize)[0]
//     }
// }
// const left_room = new Room (25,30)
// const right_room = new Room (50,60)
// console.log(Room.roomStaticFun(false,left_room,right_room))

// class Kitchen extends Room{
//     numOfCloset:number;
//     constructor(width:number,length:number,squerSize:number,numOfCloset:number){
//         super(width,length)
//         this.numOfCloset=numOfCloset
//     }
//     printKitchenInfo(){
//         return `${this.width}${this.length}${this.numOfCloset}`
//     }
//     chackIfHasAWindows(){
//         return super.getARoom? "have window" : "close room"
//     }
// }
// const germanKitchen = new Kitchen (30,40,45,40)
// const israelKitchen = new Kitchen (10,60,40,60)
// console.log(Room.roomStaticFun(false,germanKitchen,israelKitchen))

// class LivingRoom extends Room{
//     num_Seats:number;
//     air_Direction:string;
//     constructor(width:number,length:number,num_Seats:number,air_Direction:string,squerSize:number){
//         super(width,length)
//         this.num_Seats=num_Seats
//         this.air_Direction=air_Direction
//     }
//     printLivingRoomInfo(){
//         return `${super.printDetails}${this.num_Seats}${this.air_Direction}`
//     }
//     chackIfHaveAirDirection(){
//         return this.getARoom? `"have window" ${this.air_Direction}`: "close room"
//     }
// }
// const firstLivingRoom = new LivingRoom (20,30,4,"North",5)
// const secondLivingRoom = new LivingRoom (10,80,10,"West",6)
// console.log(LivingRoom.roomStaticFun(false,firstLivingRoom,secondLivingRoom))

// class Product {
//     width:number;
//     lenght:number;
//     weight:number;
//     price:number;
//     private isOrderd:boolean=false
//     constructor(width:number,lenght:number,weight:number,price:number){
//         this.width=width
//         this.lenght=lenght
//         this.weight=weight
//         this.price=price
//     }
//     getDetails():string{
//         return `width:${this.width} lenght:${this.lenght} weight:${this.weight} price:${this.price}`
//     }
//     get getIsOrderd():boolean{
//         return this.isOrderd
//     }
//     set setIsOrderd(bool:boolean){
//         this.isOrderd=bool
//     }
//     static chackThePrice(priceExpensive:boolean=true,...productOBJ:Product[]){
//         return priceExpensive? productOBJ.sort((a,b)=> b.price-a.price)[0] : productOBJ.sort((a,b)=> a.price-b.price)[0]
//     }
// }
// const apple = new Product (3,8,4,1000)
// const samsung = new Product (2,6,5,900)
// // console.log(Product.chackThePrice(true,apple,samsung))

// class Computer extends Product{
//     powerSupply:number
//     constructor(width:number,lenght:number,weight:number,price:number,powerSuplly:number){
//         super(width,lenght,weight,price)
//         this.powerSupply=powerSuplly
//     }
//     printComputerInfo():string{
//         return `${this.getDetails()} Power Supply${this.powerSupply}`
//     }
//     chackIfNeededToOrder():string{
//         return this.getIsOrderd? "Has been already Ordered" : "Needed To Order"
//     }
// }
// const dell = new Computer (2,30,4,3000,250)
// const lenovo = new Computer (1.9,28,2,2500,250)
// // console.log(Computer.chackThePrice(false,dell,lenovo))

// class ComputerScreen extends Product{
//     numberOfOrder:number;
//     screenResulotion:number;
//     constructor(widht:number,lenght:number,weight:number,price:number,numOfOrder:number,screenResulotion:number){
//         super(widht,lenght,weight,price)
//         this.numberOfOrder=numOfOrder;
//         this.screenResulotion=screenResulotion;  
//     }
//     printComputerScreenInfo():string{
//         return   `${this.getDetails} number Of Orders${this.numberOfOrder} Screen Resulotion${this.screenResulotion}`
//     }
//     chackIfComputerScreenHasBeenOrder(){
//         return this.getIsOrderd?`"Has Been Order,numbers of orders" ${this.numberOfOrder}` : "nedeed To Order"
//     }
// }
// const hdScreen = new ComputerScreen (2,30,4,400,2,1080)
// const fuulHdScreen = new ComputerScreen (4,40,4,500,2,2160)
// // console.log(ComputerScreen.chackThePrice(true,hdScreen,fuulHdScreen))

