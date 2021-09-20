var ele= document.body.querySelector(".box")
var qOne=Number(prompt("Please enter a number"))
var qTwo=prompt("Please enter an operator")
var qThree=Number(prompt("Please enter another number"))



function daCalculator(x,y,z) {


    if ((isNaN(x))&&(isNaN(y))) {
      return ele.innerHTML = "Both of these are not digits, please use digits! For example, use 5 instead of five! Also please do not try to add funny things together, like cat and, uhh, ****! Whatever the **** **** is.";
    } else
        if ((isNaN(x)||(isNaN(y)))) {
            return ele.innerHTML = "One of these is not like the other, one of these is a word instead of a digit! Why would you do that?"
        } else
            if (z == "+") {
            ele.innerHTML = x + y
        } else if (z == "-") {
            ele.innerHTML = x - y
        } else if (z == "*" || z == "x") {
            ele.innerHTML = x * y
        } else if (z == "/") {
            ele.innerHTML = x / y
        } else
    if (z != "+" || z != "-" || z != "*" || z != "x" || z != "/") {
        return ele.innerHTML = "Please use '+', '-', 'x', '*', or '/'. Anything else you try will fail. Miserably."
    }

}
daCalculator(qOne, qThree, qTwo)

