var test = [3,0,-6,4,-2];
function double(arr){
    var newArray = [];
    for(var i = 0;i<arr.length;i++)
    {
        if(arr[i]<=0)
        {
            newArray.push(arr[i]);
        }
        else{
            newArray.push((-1)*arr[i]);
        }
    }
    return newArray;
}

console.log(double(test));
