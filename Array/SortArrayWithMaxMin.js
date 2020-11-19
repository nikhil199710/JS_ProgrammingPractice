let numbers=[];
for(let i =0 ;i<10; i++)
{
    numbers[i] = Math.floor(Math.random()*1000);
}
numbers.sort();
console.log("second maximum number is : "+numbers[numbers.length-2]+" second min number is "+numbers[1]);
