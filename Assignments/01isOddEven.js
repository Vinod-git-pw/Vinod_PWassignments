function isOddOrEven(number) {
    let reminder = number % 2;
    console.log ("Reminder is", reminder)

    if (reminder === 0) {
        console.log("Number is Even:", number)
    }
    else {
        console.log("Number is Odd:", number)
    }
}

isOddOrEven(35);