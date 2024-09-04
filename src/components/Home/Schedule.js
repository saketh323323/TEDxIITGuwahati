import styles from "./schedule.module.css";

import timelineElements from "./timelineElement";

import { ReactComponent as SchoolIcon } from "../../assets/school.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Schedule() {
  return (
    <div className={styles.conatiner}>
      <h1 className={styles.title}>Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid",
              }}
              iconStyle={{ background: "red", color: "#fff" }}
              icon={<SchoolIcon />}
              key={element.key}
              date={element.date}
              dateClassName={styles.date}
            >
              <h3 className="verticalTimelineElementTitle">{element.title}</h3>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Schedule;
