export default function Layout() {
  return (
    <div className="card-component-shadow w-[370px] h-[650px] relative bg-[var(--shadow1)] rounded-2xl z-[2] flex flex-col items-center justify-center">
      <div className="card-component-main  w-[80%] h-[80%] bg-[var(--card-bg)] z-[4] rounded-xl p-4 flex flex-col gap-y-4">
        <div className="card-component-image relative cursor-pointer h-[55%]">
          <img
            alt="Equilibrium"
            className="rounded-md h-full"
            src={require("../images/image-equilibrium.jpg")}
          ></img>
        </div>

        <div className="card-component-content">
          <div className="card-component-head">
            <h3 className="transition-all duration-300 hover:text-[var(--cyan)] cursor-pointer  text-[var(--white)] font-semibold">
              Equilibruim #3429
            </h3>
            <p className="text-[var(--dark-white)] text-[15px] my-3">
              Our Equilibruim collection promotes balance and calm.
            </p>
          </div>
          <div className="card-component-details flex flex-row items-start justify-between pb-5 border-bottom-dark-white">
            <div className="price flex flex-row gap-x-1 justify-between">
              <img
                alt="Ethereum"
                className="h-[18px]"
                src={require("../images/icon-ethereum.svg").default}
              ></img>
              <span className="text-[var(--cyan)] text-[15px]">0.041 ETH</span>
            </div>
            <div className="date-left flex flex-row gap-x-1 justify-center items-center">
              <img
                alt="Clock"
                className="h-[18px]"
                src={require("../images/icon-clock.svg").default}
              ></img>
              <span className="text-[var(--dark-white)] text-[15px]">
                3 days left
              </span>
            </div>
          </div>
          <div className="card-component-footer flex flex-row items-center gap-x-2 pt-3">
            <img
              alt="Avatar"
              className="w-[40px] rounded-full"
              src={require("../images/image-avatar.png")}
            ></img>
            <p className="text-[var(--dark-white)] text-[15px]">
              Creation of{" "}
              <span className="transition-all duration-300 hover:text-[var(--cyan)] cursor-pointer text-[var(--white)]">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
