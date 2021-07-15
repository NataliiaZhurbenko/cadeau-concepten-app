export default function normalizeCatsData(catsData){
    catsData = catsData.filter(cat => cat !== null && Object.keys(cat).length !== 0).reduce((uniqueCats, cat) => {
        if(!uniqueCats.some(obj => obj.name === cat.name)) {
            uniqueCats.push(cat);
        }
        return uniqueCats;
    },[]);
    console.log(catsData)
    return catsData
}