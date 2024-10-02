function DC(a, start, end) {
    if (start == end) {
        return a[start];
    }

    if (end - start == 1) {
        return a[start] + a[end];
    } 

    var n = Math.floor((end - start + 1) / 3);
    var mid1 = start + n;
    var mid2 = start + (2 * n) + 1;

    if (mid2 > end) {
        mid2 = end;
    }
    
    var left = DC(a, start, mid1 - 1);
    var middle = DC(a, mid1, mid2 -1);
    var right = DC(a, mid2, end);

    return left + middle + right;
}
