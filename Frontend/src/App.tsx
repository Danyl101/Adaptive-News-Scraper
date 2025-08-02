import React, { useEffect, useState } from "react";
import KeywordEditor from "./components/Key_editor";
import SiteEditor from "./components/site_editor";
import { fetchConfig, saveConfig } from "../api/scraperAPI";
function App() {
  const [keywords, setKeywords] = useState([]);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetchConfig().then((data) => {
      setKeywords(data.goodlist);
      setSites(data.websites);
    });
  }, []);

  const handleSave = () => {
    saveConfig({ goodlist: keywords, websites: sites });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔧 Scraper Config Editor</h1>
      <KeywordEditor keywords={keywords} setKeywords={setKeywords} />
      <SiteEditor sites={sites} setSites={setSites} />
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
