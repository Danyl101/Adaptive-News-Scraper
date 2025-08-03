import React, { useEffect, useState } from "react";
import ListEditor from "./components/list_editor";
import SiteEditor from "./components/site_editor";
import {fetchConfig, saveConfig } from "./api/scraper_api.ts";

interface Config{
  goodlist: string[];
  websites:string[];
}

function App() {
  const [list, setList] = useState<string[]>([]);
  const [site, setsites] = useState<string[]>([]);

  useEffect(() => {
    fetchConfig().then((data :Config) => {
      console.log("Fetched Config:",data);
      console.log("goodlist:",data["goodlist"]);
      console.log("websites:",data["websites"]);
      setList(data["goodlist"]);
      setsites(data["websites"]);
    }).
    catch((err) =>console.error("Fetch Failed",err))
  }, []);

  const handleSave = () => {
    saveConfig({ goodlist: list, websites: site });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔧 Scraper Config Editor</h1>
      <ListEditor list={list} setList={setList} />
      <SiteEditor site={site} setsites={setsites} />
      <button
        onClick={handleSave}
        className="mt-4 p-2 bg-blue-600 text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
}

export default App;
