// Creating a 'person' object
const person = {
    Id: "1222",
    customerName: "Billy Boyd",
    phoneNumber: "570-389-8900",
    address: "209 Sycamore Street",
    loanAmount: 3000,
    interest: 0.05,
    loanTermYears: 10,
    loanType: "Automobile",
    description: "Billy used this loan to afford his first car.",
    calculatedLoanAmount: function(){
        var first = 1/(1+this.interest)**this.loanTermYears
        var second = ((1-first)/(this.interest))
        var total = (this.loanAmount*second)
        return total.toFixed(2); 
    }
};


// Creating an array of 'person' objects
var persons = [
    person2 = {
        Id: "1223",
        customerName: "Anna Kendrick",
        phoneNumber: "572-301-7712",
        address: "212 Maple Street",
        loanAmount: 6000,
        interest: 0.01,
        loanTermYears: 10,
        loanType: "Automobile",
        description: "Anna used this loan to afford her first car.",
        calculatedLoanAmount: function(){
            var first = 1/(1+this.interest)**this.loanTermYears
            var second = ((1-first)/(this.interest))
            var total = (this.loanAmount*second)
            return total.toFixed(2); 
        }
    },
    person3 = {
        Id: "1224",
        customerName: "Franklin Delgatto",
        phoneNumber: "618-213-3116",
        address: "33 Kinsley Boulevard",
        loanAmount: 50000,
        interest: 0.002,
        loanTermYears: 15,
        loanType: "House",
        description: "Frank used this loan to afford his first house.",
        calculatedLoanAmount: function(){
            var first = 1/(1+this.interest)**this.loanTermYears
            var second = ((1-first)/(this.interest))
            var total = (this.loanAmount*second)
            return total.toFixed(2); 
        }
    },
    person4 = {
        Id: "1225",
        customerName: "Zoey Gretsky",
        phoneNumber: "573-299-0011",
        address: "45 Carson Road",
        loanAmount: 8000,
        interest: 0.01,
        loanTermYears: 25,
        loanType: "Automobile",
        description: "Zoey used this loan to afford her first car.",
        calculatedLoanAmount: function(){
            var first = 1/(1+this.interest)**this.loanTermYears
            var second = ((1-first)/(this.interest))
            var total = (this.loanAmount*second)
            return total.toFixed(2); 
        }
    },
    person5 = {
        Id: "1226",
        customerName: "Samantha Nelson",
        phoneNumber: "885-076-1290",
        address: "880 Main Street",
        loanAmount: 250000,
        interest: 0.05,
        loanTermYears: 15,
        loanType: "Home",
        description: "Sam used this loan to afford her first house.",
        calculatedLoanAmount: function(){
            var first = 1/(1+this.interest)**this.loanTermYears
            var second = ((1-first)/(this.interest))
            var total = (this.loanAmount*second)
            return total.toFixed(2); 
        }
    },
];


// Add our original 'person' object to the beginning of the 'persons' array
persons.unshift(person);


// Loop through array and display each customer and their calculated loan total
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].customerName + ": " + persons[i].calculatedLoanAmount());
}


// Display the sum total of all five loans
console.log("\n");
var sumTotal = 0;
for (let i = 0; i < persons.length; i++) {
    sumTotal += Number(persons[i].calculatedLoanAmount());
}
console.log("The sum of all five loans is " + sumTotal);