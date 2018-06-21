function sqrt(n)
{
    let x = 0 ;
    for(x = 0 ; x * x < n ; x += 0.001){}
    return x ;
}
console.log('sqt(3) = ',sqrt(3)) ;