interface LargeGondolaProps {
  children?: React.ReactNode;
}

const LargeGondola = ({ children }: LargeGondolaProps) => {
  return (
    <div className={"gondola h-full max-w-screen min-w-[400px] w-1/2 grid grid-rows-[2fr_6fr_2fr] "}>
      <div className="w-full rounded-t-[80px] bg-white"></div>
      <div className="w-full border-b-0 mx-auto bg-white opacity-50">
        {children}
      </div>
      <div className="w-full rounded-b-[80px] bg-white"></div>
    </div>
  );
};

export { LargeGondola };