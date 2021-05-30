//ჯეირანი
var rendom = Math.floor(Math.random() * 3);
var user = prompt(`შეიყვანეთ სიტყვა: "ქვა" "მაკრატელი" "ქაღალდი"  `)
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
    alert("მოიგეთ")
}
console.log(rendom)