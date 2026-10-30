import Bg from './components/Bg';

const App = () => {
  return (
    <>
      <Bg />
      <div className="centerChild h-screen">
        <button className="relative cursor-pointer group overflow-hidden py-3 perspective-midrange">
          <div className="bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-400 bg-clip-padding rounded-lg hover:-rotate-y-[25deg] duration-500 transition-transform">
            <span className="text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transi duration-300 block group-hover:delay-75 delay-300">Book your flight</span>
            <span className="absolute h-0.5 w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200"></span>
            <img src="plane.png" alt="Plane" className="absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20 group-hover:translate-all group-hover:delay-500 group-hover:duration-500" />
          </div>
        </button>
      </div>
    </>
  );
};

export default App;
