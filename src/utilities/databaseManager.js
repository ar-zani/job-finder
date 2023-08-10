const getDatabaseData = ()=>{
    const data = localStorage.getItem('data') || '{}';
    return JSON.parse(data);
}

const addToDb = id =>{
    const storedJob = getDatabaseData();
    storedJob[id]= true;
    localStorage.setItem('data', JSON.stringify(storedJob));

}

export {
    addToDb,
    getDatabaseData
};