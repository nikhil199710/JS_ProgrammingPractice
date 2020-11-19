// 3. Store all the prime factors of a given number
// function to get all the factors
function primeFactorize(number)
{
    let factors=[];
    for(let k=2;k<=number/2;k++)
    {
        if(number%k===0 && isPrime(k) == true)
        {
            factors.push(k);
        }
    }
    console.log("Factors are : ");
    for(let j=0;j<factors.length;j++)
    {
        console.log(factors[j]+" ");
    }
}

// function to check for prime
let isPrime = function (number)
{ 
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
primeFactorize(54);