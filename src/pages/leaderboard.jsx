// import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import trophy from "../assets/trophy.svg";
// import ArrowIcon from "../components/ArrowIcon";
import BackArrow from "../assets/back-arrow.svg";

const Leaderboard = () => {
  // const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <div>
      <PageLayout>
        <div className="button-and-heading flex items-center gap-[15rem] my-[1.5rem]">
          <Link to="/">
            <img
              src={BackArrow}
              alt="back"
              className="border-2 border-black p-[0.5rem] rounded-full hover:bg-black hover:fill-current hover:text-white"
            />
          </Link>
          <p className="text-[5rem] font-extrabold">Leaderboard</p>
        </div>
        <div className="top-3 w-full flex flex-col items-center gap-10 mb-8">
          <div className="first w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
            <img src={trophy} alt="trophy" width="30%" />
            <p className="text-[1.8rem] font-bold">Aashish Kadel</p>
          </div>
          <div className="second-and-third flex gap-8">
            <div className="second  w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
              <img src={trophy} alt="trophy" width="30%" />
              <p className="text-[1.8rem] font-bold">Aashish Kadel</p>
            </div>
            <div className="third  w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
              <img src={trophy} alt="trophy" width="30%" />
              <p className="text-[1.8rem] font-bold">Aashish Kadel</p>
            </div>
          </div>
        </div>
        <div className="rank-table w-full border-2 bg-white h-[40rem] border-black mb-10 rounded-2xl rank-table-shadow"></div>
      </PageLayout>
    </div>
  );
};

export default Leaderboard;
