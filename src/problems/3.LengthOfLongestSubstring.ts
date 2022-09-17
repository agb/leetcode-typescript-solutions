// Resource : https://zenn.dev/oufumio/articles/60aebd4a3a29f5
function lengthOfLongestSubstring(s: string): number {
    let currentString: string[] = [];
    let longest = 0;
  
    for (let i = 0; i < s.length; i++) {

      const pos = currentString.indexOf(s[i]);
  
      if (pos !== -1) currentString = currentString.splice(0, pos + 1);
  
      currentString = [...currentString, s[i]];
  

      longest = Math.max(longest, currentString.length);
    }
  

    return longest;
  }
