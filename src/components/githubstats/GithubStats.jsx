import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "./githubstats.scss";

const GithubStats = () => {
  const [contributions, setContributions] = useState(true);
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="githubstats">
      <div className="container">
        <div className="top">
          <h1>GitHub Stats</h1>
          <h2>
            {/* GitHub Stats: Where I flex my coding prowess, Gen Z style 💻📊 */}
            Unveiling My GitHub Stats! 🔥💻
          </h2>
        </div>

        <div className="bottom">
          {!contributions ? (
            <GitHubCalendar
              fontSize={14}
              blockMargin={7}
              blockRadius={3}
              blockSize={20}
              colorScheme="light"
              username="MuhammadZohaib28"
              transformData={selectLastHalfYear}
              showWeekdayLabels={true}
              hideColorLegend
              labels={{
                totalCount: "{{count}} contributions in the last half year",
              }}
            />
          ) : (
            <span className="spanError">Sorry, there was an error loading the stats. Please try again later. 😔</span>
          )}
        </div>
      </div>
      <div className="lessmore">
        <span className="less">Less</span>
        <div className="boxes">
          <span className="box1" />
          <span className="box2" />
          <span className="box3" />
          <span className="box4" />
        </div>

        <span className="more">More</span>
      </div>
    </div>
  );
};

export default GithubStats;
