// import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import trophy from "../assets/trophy.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
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
            <p className="text-[1.8rem] font-bold">Liam Thompson</p>
          </div>
          <div className="second-and-third flex gap-8">
            <div className="second  w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
              <img src={second} alt="trophy" width="20%" />
              <p className="text-[1.8rem] font-bold">Alexander Davis</p>
            </div>
            <div className="third  w-[25rem] py-[1.55rem] px-[3rem] flex items-center border-2 border-black rounded-xl leaderboard-shadow gap-5">
              <img src={third} alt="trophy" width="20%" />
              <p className="text-[1.8rem] font-bold">Isabella Martinez</p>
            </div>
          </div>
        </div>
        <div className="rank-table w-full border-2 bg-white p-[3rem] border-black mb-10 rounded-2xl rank-table-shadow">
          <table className="w-full border-separate border-spacing-4">
            <tr className="text-[1.5rem] text-left font-semibold">
              <th className="">Rank</th>
              <th>Username</th>
              <th>Category</th>
              <th>Score</th>
            </tr>
            <tr className="text-[1.2rem] font-medium">
              <td className="">4</td>
              <td>John Doe</td>
              <td>General Knowledge</td>
              <td>30</td>
            </tr>
            <tr className="text-[1.2rem] font-medium">
              <td className="">5</td>
              <td>Emily Johnson</td>
              <td>Science</td>
              <td>10</td>
            </tr>
            <tr className="text-[1.2rem] font-medium">
              <td className="">6</td>
              <td>Michael Williams</td>
              <td>History</td>
              <td>70</td>
            </tr>
            <tr className="text-[1.2rem] font-medium">
              <td className="">7</td>
              <td>Olivia Brown</td>
              <td>Music</td>
              <td>100</td>
            </tr>
          </table>
        </div>
      </PageLayout>
    </div>
  );
};

export default Leaderboard;
