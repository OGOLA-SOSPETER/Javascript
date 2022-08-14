var a = 100
var b = 300

function Add(a, b) {
    console.log('\nThis function prints the sum of the two numbers')
    return a + b
}
console.log(Add(a, b))

function Product(a, b) {
    this.a = 66;
    this.b = 99;
    console.log('\nThis function prints the product of a and b')
    return this.a * this.b
}
console.log(Product(a, b))

function Division(a, b) {

    console.log('\nFunction prints the division of the two numbers. ')
    if (a > b)
        return a / b;
    else
        return b / a


}
console.log(Division(a, b))

function Modulus(a, b) {

    console.log('\nFunction prints the modulus of the two numbers. ')

    if (a > b)
        return a % b;
    else
        return b % a;

}
console.log(Modulus(a, b))

function Square(x) {

    console.log('\nFunction prints the modulus of the two numbers. ')

    xx = x * x
    return xx;

}
console.log(Square(a))
console.log(Square(b))
console.log(Square(567686))