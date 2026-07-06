import { useState } from "react";

const App = () => {
  const HandleClick = () => {
    console.log("Working...");
  };

  const Calc = (e) => {
    const value_array = []
    setNum(e.target.value);
    value_array.push(num)
    // setCal((prevData)=>{
    //   return {...prevData, } 
    // })
    setCal({'values' : value_array})
    console.log("cal:-", cal)
  };
  const [num, setNum] = useState(0);
  const [cal, setCal] = useState({ values: [], operation: "" });

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-[360px] mx-auto">
        {/* Calculator Container */}
        <div className="bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-800">
          {/* Display Screen */}
          <div className="bg-zinc-950 px-6 py-8 text-right">
            <div className="text-white text-5xl font-light tracking-tight break-all min-h-[60px] flex items-end justify-end">
              {num ? num : "0"}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-2 p-4 bg-zinc-900">
            {/* Row 1 */}
            <button
              onClick={Calc}
              value={7}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              7
            </button>
            <button
              onClick={Calc}
              value={8}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              8
            </button>
            <button
              onClick={Calc}
              value={9}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              9
            </button>
            <button
              onClick={Calc}
              value={"/"}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              ÷
            </button>

            {/* Row 2 */}
            <button
              onClick={Calc}
              value={4}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              4
            </button>
            <button
              onClick={Calc}
              value={5}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              5
            </button>
            <button
              onClick={Calc}
              value={6}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              6
            </button>
            <button
              onClick={Calc}
              value={"*"}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              ×
            </button>

            {/* Row 3 */}
            <button
              onClick={Calc}
              value={1}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              1
            </button>
            <button
              onClick={Calc}
              value={2}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              2
            </button>
            <button
              onClick={Calc}
              value={3}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              3
            </button>
            <button
              onClick={Calc}
              value={"-"}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              −
            </button>

            {/* Row 4 */}
            <button
              onClick={Calc}
              value={0}
              className="bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white text-2xl font-medium py-5 rounded-2xl col-span-2 transition-all active:scale-[0.95]"
            >
              0
            </button>
            <button
              onClick={Calc}
              value={"+"}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              +
            </button>
            <button
              onClick={Calc}
              value={"="}
              className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-2xl font-medium py-5 rounded-2xl transition-all active:scale-[0.95]"
            >
              =
            </button>
          </div>
        </div>

        {/* Optional small text */}
        <p className="uppercase text-center text-zinc-500 text-xs mt-4 tracking-wide">
          founder: abhinav chaudhary
        </p>
      </div>
    </div>
  );
};

export default App;
