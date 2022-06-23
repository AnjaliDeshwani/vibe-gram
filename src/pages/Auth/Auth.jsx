export const Auth = ({ signUp }) => {
  return (
    <div className={`${signUp && "md:mt-32"}`}>
      <p className="text-3xl md:text-5xl text-gray-600 font-semibold">
        The New Social
      </p>
      <p className="text-xl md:text-3xl text-gray-500">
        Communities on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400  italic font-semibold">
          Vibegram
        </span>{" "}
        bring people together
      </p>
    </div>
  );
};
