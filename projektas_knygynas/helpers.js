export function choice(items){
    return items[Math.floor(Math.random() * items.length)];   
} 

export function remove(items, item){
if(items.includes(item)){
   let tempItem = item;
   let ind = items.indexOf(tempItem);
   items.splice(ind,1);
    return tempItem;
   
}
}