// Resource : https://leetcode.com/problems/longest-palindromic-substring/discuss/1574467/typescript-sliding-window

const isPalindrome = (s: string): boolean => {
    for (let i = 0, j = s.length-1; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
}

function longestPalindrome(s: string): string {
    const { length } = s;
    if (length === 1) return s;
    
    let start = 0;
    let windowSize = length;
    
    // Creating a sliding window that searches from longest to shortest possible palindromes
    // therefore return as soon as we find a palindrome since it must be the longest
    while (windowSize > 1) {
        const test = s.substr(start, windowSize);
        const isPali = isPalindrome(test);
        if (isPali) return test;
        
        // once window has slid to the end, decrease it size and shift it back the start
        if (start + windowSize === length) {
            start = 0;
            windowSize--;
        }
        else {
            start++;
        }
    }
    
    // if no palindrome found, return first character
    return s[0];
};
