import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./githubstats.scss";

const GithubStats = () => {
  const [contributions, setContributions] = useState(true);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the year every year (after 365 days)
  useEffect(() => {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1); // January 1st of next year
    const msUntilNextYear = nextYear - now;

    const timer = setTimeout(() => {
      setCurrentYear((prevYear) => prevYear + 1);
    }, msUntilNextYear);

    return () => clearTimeout(timer);
  }, [currentYear]);

  const selectYearContributions = (contributions) => {
    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const year = date.getFullYear();
      return year === currentYear;
    });
  };

  return (  
    <div className="githubstats">
      <div className="container">
        <div className="top">
          <h1>GitHub Stats</h1>
          <h2>Unveiling My GitHub Stats! 🔥💻</h2>
        </div>

        <div className="bottom">
          {contributions ? (
            <GitHubCalendar
              fontSize={14}
              blockMargin={7}
              blockRadius={3}
              blockSize={20}
              colorScheme="light"
              username="MuhammadZohaib28"
              transformData={selectYearContributions}
              showWeekdayLabels={true}
              hideColorLegend
              labels={{
                totalCount: `{{count}} contributions in the year ${currentYear}`,
              }}
            />
          ) : (
            <span className="spanError">
              Sorry, there was an error loading the stats. Please try again
              later. 😔
            </span>
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
