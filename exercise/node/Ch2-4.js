





function m357(a,b)
{
    if(a > b)
    {
        let c = a ;
        a =  b;
        b =  c;
    }
    d = a ;
    for(let i = 3 ; i < 8 ; i = i+2)
    {
        for(a = d ; a <= b ; a++)
        {
            if( a%i == 0) 
            {
                console.log(a+'為'+i+'的倍數') ;
            }
        }
    }
}
console.log(m357(18,15)) ;