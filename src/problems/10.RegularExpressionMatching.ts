// Resource : https://leetcode.com/problems/regular-expression-matching/discuss/2585755/DP-or-Typescriopt-O(m*n)-solution

function isMatch(str: string, pattern: string): boolean {
    
    const dp = new Array(pattern.length + 1);
    for (let i = 0; i <= pattern.length; i++) {
        dp[i] = new Array(str.length + 1).fill(false);
    }
    
    /**
    The idea here is simple. 
    You create a DP Table. Pattern would be on the i side of the DP. String would be on the j side of DP.
    If (the pattern's char is a direct match with str's char then we look up diagonally up left wards)
    If the pattern's char is . then same as above.
    If the pattern's char is * then -
        if previous_pattern_char matches the current char or previous_pattern_char is . 
            Then we have look adjacen in j - 1.
        We also need to look two chars back in the string since a* could also mean empty string.
        So if two chars up in the pattern it was a match the current char would also be a match.
    */
    
    
    // Now to start the seed values.
    // empty pattern '' would match empty string ''. 
    // So the first cell in dp table would be true.
    dp[0][0] = true;
    
    /*
     Also a* should match '' empty string.
     for that while checking for pattern char we need to check if 2 chars back it was true which we will do in the 
     following loop.
     the loop will start with i = 2 - obviously because you need a char and a * which makes it two 
    */
    
    for (let i = 2; i <= pattern.length; i++) {
        dp[i][0] = pattern[i - 1] === '*' ? dp[i - 2][0] : false;
    }
    
    // Starting to code the rest.
    for (let i = 1; i <= pattern.length; i++) {
        for (let j = 1; j <= str.length; j++) {
            const patternChar = pattern[i - 1];
            const strChar = str[j - 1];
            if (patternChar === '*') {
                const previousPatternChar = pattern[i - 2];
                
                // need to check two chars back since a* could also mean empty string ''
                const twoRowsUp = dp[i - 2][j];
                dp[i][j] = twoRowsUp;    
                if (previousPatternChar === strChar || previousPatternChar === '.') {
                   const leftAdjacent = dp[i][j - 1];
                    //const diagonal = dp[i - 1][j - 1];
                    //dp[i][j] = twoRowsUp || leftAdjacent || diagonal;
                    dp[i][j] = twoRowsUp || leftAdjacent;
                }
            } else if (patternChar === strChar || patternChar === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } 
        }
    }
	//Uncomment below line if you want to see the dp table in 0 and 1 form.
    //printTable(dp);
    return dp[pattern.length][str.length];
};


function printTable(table: boolean[][]): void {
    const zeroesTable = table.map(row => row.map(field => field ? 1 : 0));
    console.log(zeroesTable);
}
