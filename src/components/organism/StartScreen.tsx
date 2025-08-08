import Slider from "./Slider";

const StartScreen = () => {
  return (
    <div className="border-[3px] shadow-[5px_6px_0px] bg-amber-50 rounded-3xl p-4">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-[#382b22]">
        ERA TYCOON
      </h1>

      <div className="flex justify-center py-5">
        <Slider />
      </div>

      <p className="text-base text-justify md:text-lg text-[#382b22]/80">
        Build your business empire across different historical eras and
        locations. Make strategic decisions, adapt to global events, and grow
        your enterprise from a small factory to an industrial giant.
      </p>
    </div>
  );
};

export default StartScreen;
