function celToFah(cDeg){
    var fahr = ((9/5)*cDeg) + 32;
    return fahr;
}

function match(num){
    var check = celToFah(num);
    if(check==num)
    {
        return true;
    }
    else {
        return false;
    }
}

var success = 200;
while(match(success)==false)
{
    success--;
}
console.log(success);
