interface Config {
    goodlist: string[];
    websites: string[];
}

export const fetchConfig = async() :Promise<Config> =>{
    const [goodlistRes,websitesRes]=await Promise.all([
        fetch("http://localhost:5000/api/fetch-goodlist"),
        fetch("http://localhost:5000/api/fetch-websites")
    ])
    const goodlist=await goodlistRes.json()
    const websites=await websitesRes.json()
    return {goodlist,websites}
}
export const saveConfig = async(config : {goodlist:any ,websites:any}) =>{
    const savegoodlist =fetch("http://localhost:5000/api/save-goodlist",
    {
        method: "POST",
        headers: {"Content-type":"Application/json"},
        body:JSON.stringify(config.goodlist),
    });
    const savewebsites =fetch("http://localhost:5000/api/save-websites",
    {
            method: "POST",
            headers: {"Content-type":"Application/json"},
            body:JSON.stringify(config.websites),
    });
    const[goodlistRes,websitesRes]=await Promise.all([savegoodlist,savewebsites])
    return {goodlistStatus:await goodlistRes.json(),goodwebsitesStatus:await websitesRes.json()}
};



