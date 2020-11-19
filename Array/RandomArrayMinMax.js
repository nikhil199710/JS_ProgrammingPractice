let numbers = [];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
let temp = 0;
for(let j = 0; j<10; j++)
{
    for(let i =0;i<10-j;i++)
    {
        if(numbers[i]<numbers[i+1])
        {
            temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }
    }
}
console.log("second maximum number is : "+numbers[1]);
console.log(" second min number is "+numbers[numbers.length-2]);

