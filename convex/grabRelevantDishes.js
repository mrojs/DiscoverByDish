import { query } from "./_generated/server";

export default query(async({db}, {clientSearch}) => {
    const relItems = [];
    const allItems = await db.query("Menu").collect();
    for (let i=0; i < allItems.length; i++){
        if ((allItems[i].Description).toLowerCase().includes(clientSearch.toLowerCase())){
            relItems.push(allItems[i]);
        }
    }
    return relItems;
});