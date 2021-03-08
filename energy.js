function energy_drinks(){
var order = prompt("what the energy drink you want sir, we have : boomboom,redbull,codered ?");
while (order !='boomboom' && order != 'codered' && order !='redbull')
{
order=prompt("please sir choose item just from the menu");
} 
var itemOrder=' ';
if (order=='boomboom'){itemOrder = '<img src="/images/boomboom.jpg"/>' ;}
else if (order=='codered'){itemOrder = '<img src="/images/codered.jpg"/>' ;}
else if (order=='redbull'){itemOrder = '<img src="/images/redbull.jpg"/>' ;}
console.log(itemOrder);
var numberOfBottle = prompt("how many bottle you want sair ?");
for (var i=0;i<numberOfBottle;i++)
{
    document.write(itemOrder);
}
}

function tempFun()
{
 for (var i=0;i<3;i++)
{
    document.write('<br>'+"test function"+'<br>');
}   
}
var temp2Fun=function ()
{
    document.write("Welcom To The Energy Drink Store!");
}

tempFun(); 
temp2Fun();