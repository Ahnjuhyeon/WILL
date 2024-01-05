import Effect from "./effect/effect";
import RefPage from "./ref/ref";
import State from "./state/state";

const MainPage = () => {
  return (
    <>
      <State />

      <RefPage />
      <hr />
      <Effect />
    </>
  );
};
export default MainPage;
