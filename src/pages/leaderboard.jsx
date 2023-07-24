import PageLayout from "../layouts/PageLayout";
import trophy from "../assets/trophy.svg";
import BackArrow from "../assets/back-arrow.svg";

const Leaderboard = () => {
  return (
    <div>
      <PageLayout>
        <div className="button-and-heading flex items-center gap-[15rem]">
          <img
            src={BackArrow}
            alt="back"
            className="border-2 border-black p-[0.5rem] rounded-full hover:bg-black hover:fill-current hover:text-white"
          />
          <p className="text-[5rem] font-extrabold">Leaderboard</p>
        </div>
        <div className="top-3">
          <div className="first w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
            <img src={trophy} alt="trophy" width="30%" />
            <p className="text-[1.8rem] font-bold border-2 border-red">
              Aashish Kadel{" "}
            </p>
          </div>
          <div className="second-and-third">
            <div className="second"></div>
            <div className="third"></div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Leaderboard;
