// Resource : https://codybonney.com/leetcode-palindrome-number-solution-using-typescript/

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let digits = Math.floor(Math.log10(x) + 1);
    while (digits > 1) {
        // create a mask: 123 = 100, 1234 = 1000
        const mask = Math.pow(10, digits - 1);
        
        // get the first digit: 1234 = 1
        const first = Math.floor(x / mask);
        
        // get the last digit: 1234 = 4
        const last = Math.floor(x % 10);
        
        if (first !== last) {
            return false;
        }
        
        // trim first digit: 1234 = 234
        x = Math.floor(x % mask);
        
        // trim last digit: 234 = 23
        x = Math.floor(x / 10);
        
        // reduce because first and last were trimmed
        digits -= 2;
    }
    return true;
}
