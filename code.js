function divideAndConquerSum(a) {
    if (a.length == 0) {
        return 0;
    }
    
    if (a.length == 1) {
        return a[0];
    }
    
    if (a.length == 2) {
        return a[0] + a[1];
    }

        var mid1 = Math.floor(a.length / 3);
        var mid2 = 2 * mid1;

        var leftSubArray = a.slice(0, mid1 + 1);
        var middleSubArray = a.slice(mid1 + 1, mid2 + 1);
        var rightSubArray = a.slice(mid2 + 1)
    
        var leftSum = divideAndConquerSum(leftSubArray);
        var middleSum = divideAndConquerSum(middleSubArray);
        var rightSum = divideAndConquerSum(rightSubArray);

        return leftSum + middleSum + rightSum;
}
