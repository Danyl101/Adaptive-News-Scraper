function siteEditor({ keywords, setKeywords }) {
  const updatesite = (index, newValue) => {
    const updated = [...keywords];
    updated[index] = newValue;
    setKeywords(updated);
  };

  const addKeyword = () => setKeywords([...keywords, ""]);
  const removeKeyword = (index) => setKeywords(keywords.filter((_, i) => i !== index));

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">🧠 Keywords Filter (goodlist)</h2>
      {keywords.map((kw, i) => (
        <div key={i} className="flex mb-2">
          <input
            type="text"
            value={kw}
            onChange={(e) => updateKeyword(i, e.target.value)}
            className="border p-1 flex-1"
          />
          <button onClick={() => removeKeyword(i)} className="ml-2 text-red-500">X</button>
        </div>
      ))}
      <button onClick={addKeyword} className="mt-2 p-1 bg-green-500 text-white">Add Keyword</button>
    </div>
  );
}

export default siteEditor;
