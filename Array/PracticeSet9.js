//For a given array with price of 5 items ->[250,645,300,900,50]
//All items have an offer of 10% OFF o them. Change the array to store final price after applying offer.

let items = [250,645,300,900,50];
let i = 0;
let offer = 0;
for(let val of items)
{
    offer = val/10;
    items[i] = items[i] - offer;
    console.log(items[i])
    i++;
}
// ----------------------

let item = [250,645,300,900,50];
let offer1 = 0;
for(let j = 0; j < item.length ;j++ )
{
    offer1 = item[j]/10;
    item[j] = item[j] - offer1;
    console.log(item[j]);
}