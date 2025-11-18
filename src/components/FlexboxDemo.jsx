import React, { useState } from "react";

const FlexboxDemo = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [gap, setGap] = useState("10");

  return (
    <div className="bg-black p-6 border-[#0a1929] border-2 rounded-lg h-full flex flex-col">
      <h3 className="text-white text-2xl lg:text-3xl mb-4">
        Interactive Flexbox Playground
      </h3>
      <p className="text-gray-300 mb-6 text-sm lg:text-base">
        Adjust the controls below to see how Flexbox properties work in
        real-time
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
        <div>
          <label className="text-white block mb-2 text-sm">
            flex-direction
          </label>
          <select
            value={flexDirection}
            onChange={(e) => setFlexDirection(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 text-sm"
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">
            justify-content
          </label>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 text-sm"
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">align-items</label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 text-sm"
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">gap: {gap}px</label>
          <input
            type="range"
            min="0"
            max="50"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Demo Container */}
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4 flex-grow overflow-hidden">
        <div
          style={{
            display: "flex",
            flexDirection: flexDirection,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: `${gap}px`,
            minHeight: "200px",
            height: "100%",
            padding: "20px",
            backgroundColor: "#1a1a2e",
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          <div className="bg-blue-500 text-white p-3 rounded font-bold min-w-[60px] text-center text-sm flex-shrink-0">
            Item 1
          </div>
          <div className="bg-green-500 text-white p-3 rounded font-bold min-w-[60px] text-center text-sm flex-shrink-0">
            Item 2
          </div>
          <div className="bg-purple-500 text-white p-3 rounded font-bold min-w-[60px] text-center text-sm flex-shrink-0">
            Item 3
          </div>
        </div>
      </div>

      {/* Code Display */}
      <div className="mt-auto bg-gray-900 p-3 rounded border border-gray-700">
        <p className="text-gray-400 text-xs mb-2">Current CSS:</p>
        <pre className="text-green-400 text-xs overflow-x-auto">
          {`.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  gap: ${gap}px;
}`}
        </pre>
      </div>
    </div>
  );
};

const GridDemo = () => {
  const [columns, setColumns] = useState("3");
  const [rows, setRows] = useState("2");
  const [gap, setGap] = useState("15");
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");

  const itemCount = parseInt(columns) * parseInt(rows);

  return (
    <div className="bg-black p-6 border-[#0a1929] border-2 rounded-lg h-full flex flex-col">
      <h3 className="text-white text-2xl lg:text-3xl mb-4">
        Interactive Grid Playground
      </h3>
      <p className="text-gray-300 mb-6 text-sm lg:text-base">
        Adjust the controls below to see how Grid properties work in real-time
      </p>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
        <div>
          <label className="text-white block mb-2 text-sm">
            Columns: {columns}
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">Rows: {rows}</label>
          <input
            type="range"
            min="1"
            max="4"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">gap: {gap}px</label>
          <input
            type="range"
            min="0"
            max="40"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-white block mb-2 text-sm">justify-items</label>
          <select
            value={justifyItems}
            onChange={(e) => setJustifyItems(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 text-sm"
          >
            <option value="stretch">stretch</option>
            <option value="start">start</option>
            <option value="end">end</option>
            <option value="center">center</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="text-white block mb-2 text-sm">align-items</label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 text-sm"
          >
            <option value="stretch">stretch</option>
            <option value="start">start</option>
            <option value="end">end</option>
            <option value="center">center</option>
          </select>
        </div>
      </div>

      {/* Demo Container */}
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4 flex-grow">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 80px)`,
            gap: `${gap}px`,
            justifyItems: justifyItems,
            alignItems: alignItems,
            padding: "20px",
            backgroundColor: "#1a1a2e",
            borderRadius: "8px",
            height: "100%",
          }}
        >
          {Array.from({ length: itemCount }, (_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-2 rounded font-bold flex items-center justify-center text-sm"
              style={{ minWidth: "50px", minHeight: "50px" }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <div className="mt-auto bg-gray-900 p-3 rounded border border-gray-700">
        <p className="text-gray-400 text-xs mb-2">Current CSS:</p>
        <pre className="text-green-400 text-xs overflow-x-auto">
          {`.container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 80px);
  gap: ${gap}px;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`}
        </pre>
      </div>
    </div>
  );
};

const FlexboxGridDemos = () => {
  return (
    <section className="mx-3 mt-15 xl:mx-20 mb-15">
      <div className="text-white mb-8">
        <div className="bg-[#0a3931] p-3 flex flex-row justify-center items-center gap-1.5 mb-5">
          <h2 className="text-3xl text-center lg:text-5xl">
            Try It Yourself: Interactive Demos
          </h2>
        </div>
        <p className="text-center text-gray-300 lg:text-xl mb-2">
          The best way to learn Flexbox and Grid is by experimenting.
        </p>
        <p className="text-center text-gray-300 text-sm lg:text-base">
          Use these interactive playgrounds to see how each property affects the
          layout in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <FlexboxDemo />
        <GridDemo />
      </div>

      <div className="bg-black p-6 border-[#0a1929] border-2 rounded-lg">
        <div className="flex flex-row justify-start items-center gap-1.5 mb-3">
          <i className="fa-solid fa-lightbulb text-yellow-400 text-2xl"></i>
          <p className="text-white text-2xl lg:text-3xl">Pro Tip</p>
        </div>
        <p className="text-base text-white lg:text-2xl">
          Don't just read about these properties — actually play with them!
          Change the values, break things, see what happens. That's how you
          build muscle memory and truly understand how layouts work. Open your
          browser's DevTools (F12) on any website and try changing these
          properties on real elements.
        </p>
      </div>
    </section>
  );
};

export default FlexboxGridDemos;
