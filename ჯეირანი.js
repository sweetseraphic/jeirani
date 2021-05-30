// 1 შექმენით ცვლადი სახელწოდებით myVariable და მიანიჭეთ მას მნიშვნელობა 5. 
var myVariable = 5;
console.log(myVariable);
//2.	შექმენით მეორე ცვლადი სახელწოდებით testVariable და მიანიჭეთ მას ცვლადი myVariable როგორც მნიშვნელობა. 
var testVariable = myVariable;
console.log(testVariable);
//3.	შემოიტანეთ ორი ცვლადი x და y და მიანიჭეთ მას მნიშვნელობები 4 და 5. 
var x = 4;
var y = 5;
//4.	შემოიტანეთ ცვლადი სახელწოდებით sum და მიანიჭეთ მას x და y-ის ჯამი მნიშვნელობად. 
var sum = x + y;
console.log(sum);
//5.	შემოიტანეთ ცვლადი სახელწოდებით product და მიანიჭეთ მას x და y-ის ნამრავლი მნიშვნელობად. 
var product = x * y;
console.log(product);
//6.	შემოიტანეთ ცვლადი სახელწოდებით quotient და მიანიჭეთ მას x და y-ის განაყოფი მნიშვნელობად. 
var quotient = x / y;
console.log(quotient);
//7.	შემოიტანეთ ცვლადი სახელწოდებით difference და მიანიჭეთ მას x და y-ის სხვაობა მნიშვნელობად. 
var difference = x - y;
console.log(difference);
//8 .	გარდაქმენით მოცემულობა += გამოყენებით x = x + 12.
x += 12;
console.log(x);
//9.	შექმენით ახალი ცვლადი სახელწოდებით num და შეინახეთ მასში let str = “66”; მნიშვნელობა, გადაკონვერტირებული number ტიპად. 
var num = "66";
console.log(parseInt(num));
//10.	\n \t \\ გამოყენებით ქვევით მოცემული output-ის მისაღებად შემოიტანეთ ცვლადი სახელწოდებით myStr და მნიშვნელობაში გაუწერეთ შესაბამისი კოდი, არ გამოიყენოთ სფეისი. 
let myStr = "firsrstLine\nSecondLine \n \t ThirdLine";
console.log(myStr);
//ჯეირანი
let rendom = Math.floor(Math.random() * 3);
let user = prompt(`შეიყვანეთ სიტყვა: "ქვა" "მაკრატელი" "ქაღალდი"  `)
switch (rendom) {
    case 0:
        rendom = "ქვა"
        break;
    case 1:
        rendom = "მაკრატელი"
        break;
    case 2:
        rendom = "ქაღალდი"
        break;
}
if (user == "ქვა" && rendom == "ქვა") {
    alert("ფრე")
} else if (user == "ქვა" && rendom == "მაკრატელი") {
    alert("მოიგეთ")
} else if (user == "ქვა" && rendom == "ქაღალდი") {
    alert("წააგეთ")
} else if (user == "მაკრატელი" && rendom == "ქვა") {
    alert("წააგეთ")
} else if (user == "მაკრატელი" && rendom == "მაკრატელი") {
    alert("ფრე")
} else if (user == "მაკრატელი" && rendom == "ქაღალდი") {
    alert("მოიგეთ")
} else if (user == "ქაღალდი" && rendom == "ქვა") {
    alert("მოიგეთ")
} else if (user == "ქაღალდი" && rendom == "მაკრატელი") {
    alert("წააგეთ")
} else if (user == "ქაღალდი" && rendom == "ქაღალდი") {
    alert("ფრე")
} else {
    alert("გთხოვთ სწორად შეიყვანოთ სიტყვა")
}
console.log(rendom)
