import { Hourglass } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["var(--dark-blue)", "var(--light-blue-3)"]}
      />
    </div>
  );
};

export const FragmentLoader = () => {
  return (
    <>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="var(--light-blue-3)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        zIndex="3"
      />
    </>
  );
};

export default Loader;
