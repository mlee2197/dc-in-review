interface LargeGondolaProps {
  children?: React.ReactNode;
  title: string;
}

const LargeGondola = ({ children, title }: LargeGondolaProps) => {
  return (
    <div
      className={
        "gondola h-full max-w-screen min-w-[400px] w-1/2 grid grid-rows-[2fr_6fr_2fr] md:max-w-[60vw]"
      }
    >
      <div
        className="flex items-center justify-center w-full rounded-t-[80px] bg-white"
        style={{ boxShadow: "inset -4px -4px 5px 0px rgba(0,0,0,0.25)" }}
      >
        <div className="title w-[85%] h-[75%] p-1 rounded-[100px] bg-black opacity-0">
          <div className="flex items-center justify-center w-full h-full p-2 border-4 border-white border-dotted rounded-[inherit]">
            <h2 className="text-2xl font-bold text-center text-white md:text-3xl">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full border-b-0 mx-auto bg-white opacity-75">
        {children}
      </div>
      <div
        className="flex items-center justify-center w-full p-2 rounded-b-[80px] bg-white"
        style={{ boxShadow: "inset -4px -4px 5px 0px rgba(0,0,0,0.25)" }}
      >
        <div className="relative w-1/2 h-full border-x-4 border-gray-300 rounded-lg">
          <div className="absolute w-3 h-6 rounded-md right-10 top-1/2 border-b-4 border-r-4 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export { LargeGondola };
