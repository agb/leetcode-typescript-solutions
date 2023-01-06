//a-b ==> ascending
//b-a ==> descending

(() => {
    const sorted = [3,6,9,4,6].sort(function(a, b) {
        return a - b;
    });
    console.log(sorted);
})();
