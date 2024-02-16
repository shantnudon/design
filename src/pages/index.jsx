import React, { useEffect } from "react";
import Card from "../../components/card";
import Clock from "../../components/clock";
import data from "../../public/data.json";
// import axios from "axios";

const index = () => {
  // Get today's date
  const today = new Date();
  // Subtract one day
  today.setDate(today.getDate());
  // Format the date in 'YYYY-MM-DD' format
  const formattedDate = today.toISOString().split("T")[0];
  // console.log(formattedDate);
  // console.log(data[0]);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITC.BSE&outputsize=compact&apikey=XGYU4GZHI9T4H2Z2`
  //   );
  //   // setDatadon(response.data);
  //   console.log(response.data['Time Series (Daily)'])
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      {/* https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITC.BSE&outputsize=compact&apikey=BZH9EES3Z2WLIXM7 */}
      {/* BZH9EES3Z2WLIXM7
    XGYU4GZHI9T4H2Z2
    Y9UPKFX344QQ4XAY
    ZPMLW2AC95AIXXE8
    9PQVJOMLJOMHSWO2
    OMORBD77ZIPVR3AO
    RKC8GV
    J0HY1N3`5ZA */}

      <div className="container mx-auto text-white h-[10vh]">
        <p className="text-center text-4xl m-4">{formattedDate}</p>
      </div>
      {/* <Clock/> */}
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex items-center justify-center flex-wrap h-[78vh]">
            {data.map((cardData, index) => (
              <Card
                name={cardData.name}
                url={cardData.url}
                img={cardData.image}
                color={cardData.color}
                key={index}
              />
            ))}
          </div>
        </div>
        {/* <div>2</div> */}
        <div>Airdrops
          <div className="container">
            List of ongong airdrops
          </div>
        </div>
      </div>
      <footer>
        <div className="flex">Github</div>
        <div className="container mx-auto text-white ">
          <p className="text-center">Made by ShantnuDON.</p>
        </div>
        {/* BZH9EES3Z2WLIXM7 */}
      </footer>
    </>
  );
};

export default index;
