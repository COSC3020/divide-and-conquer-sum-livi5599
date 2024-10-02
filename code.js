function divideAndConquerSum(a, start, end) {
    if (a.length == 0) {
        return 0;
    }

    if (a.length == 1) {
        return a[start];
    }

    if (a.length == 2) {
        return a[start] + a[end];
    } 

    var n = Math.floor((end - start + 1) / 3);
    var mid1 = start + n;
    var mid2 = start + (2 * n) + 1;

    if (mid2 > end) {
        mid2 = end;
    }
    
    var left = divideAndConquerSum(a, start, mid1 - 1);
    var middle = divideAndConquerSum(a, mid1, mid2 -1);
    var right = divideAndConquerSum(a, mid2, end);

    return left + middle + right;
}
