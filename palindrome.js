//Attaching an event listener to the button with id 'checkPalindrom'
document.getElementById('checkPalindrom').addEventListener('click', () => {
    //Getting the value from the input field with id 'input-value'
    let inputValue = document.getElementById('input-value').value;

    //convert the input string to lowercase for case-insensitive comparison
    inputValue = inputValue.toLowerCase();

    //Initializing variables for palindrome check

    let isPalindrome = true;
    let start = 0;
    let end = inputValue.length - 1;

    //Loop through the string from both ends until they meet
    while (start < end) {
        //If characters at start and end don't match, it's not a palindrome
        if (inputValue[start] !== inputValue[end]) {
            isPalindrome = false;
            //Break out of the loop early as soon as a mismatch is found
            break;
        }
        //Move to the next characters from both ends
        start++;
        end--;
    }

    //Getting the element to display the result
    const displayResult = document.getElementById('result');

    //Display result based on the isPalindrome flag
    if (isPalindrome) {
        displayResult.textContent = `${inputValue} is a palindrome`;
    } else {
        displayResult.textContent = `${inputValue} is not a palindrome`;
    }

})