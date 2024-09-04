import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./events.module.css";
import NavBar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import Footer from "../../components/footer/Footer";
import Newsletter from "../../components/Newsletter/newsletter";

const Events = () => {
  const { ref: myref, inView: boxisvisible, entry } = useInView();
  const { ref: myref2, inView: boxisvisible2, entry2 } = useInView();
  const { ref: myref3, inView: boxisvisible3, entry3 } = useInView();
  const { ref: myref4, inView: boxisvisible4, entry4 } = useInView();
  const { ref: myref5, inView: boxisvisible5, entry5 } = useInView();
  const [redl, setredl] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.upper}>
        <div className={styles.mainhead}>
          {/* <div className={styles.head1}>TEDxIITGuwahati</div>
                <div className={styles.head1_min}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil, illo vel laboriosam earum omnis eos doloremque! Quae, odio asperiores?</div> */}
        </div>
        <div className={styles.homeimage}>
          <img
            src="/Images/eventsHome/coverImage.jpg"
            alt="TeamImage"
          />
        </div>
      </div>
      <div className={styles.strap}>
        <p>Some of our Events</p>
      </div>
      <div className={styles.container_2}>
        <section className={styles.timeline}>
          <div className={styles.line}>
            <div className="redline" style={{ height: redl }}></div>
          </div>
          <section className={styles.space}>
            <div className={styles.tagg}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles.iconv}
              />
            </div>
            <div
              ref={myref}
              className={`${styles.box} ${
                boxisvisible ? styles.inView : styles.ishidden
              }`}
            >
              <Link to="/Events/2023" className={styles.link_box}>
                <img
                  src="/Images/eventsHome/theme_23.png"
                  alt=""
                  className={styles.image}
                  id={styles["im1"]}
                />
                <div className={styles.part2}>
                  <h3 className={styles.heading}>TEDxIITGuwahati 2023</h3>
                  <div className={styles.dis}>
                    The Theme of TEDxIITGuwahati is ‘The Silent Letter’,
                    Everything has value, whether good or bad, large or small.
                    Nothing in this world is useless, although we often mistake
                    that for the case.
                  </div>
                </div>
                <div className={styles.triangle}></div>
              </Link>
            </div>

            <div className={styles.dateWrapper}>
              <div id={styles["date1"]}>February 12, 2023</div>
            </div>
          </section>
          <section className={styles.space}>
            <div className={styles.tagg}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles.iconv}
              />
            </div>
            <div
              ref={myref2}
              className={`${styles.box} ${boxisvisible2 ? styles.inView : ""}`}
            >
              <Link to="/Events/2022" className={styles.link_box}>
                <img
                  src="/Images/eventsHome/theme22.jpeg"
                  alt=""
                  className={styles.image}
                  id={styles["im1"]}
                />
                <div className={styles.part2}>
                  <h3 className={styles.heading}>TEDxIITGuwahati 2022</h3>
                  <div className={styles.dis}>
                    As the tale goes, if you put a frog in a pan of boiling
                    water, it will jump out at once. However, if you place it in
                    a pot of gently lukewarm water and slowly heat it, the frog
                    will stay in the water until it boils to death.
                  </div>
                </div>
                <div className={styles.triangle1}></div>
              </Link>
            </div>
            <div className={styles.dateWrapper}>
              <div id={styles["date1"]}>February 19, 2022</div>
            </div>
          </section>
          <section className={styles.space}>
            <div className={styles.tagg}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles.iconv}
              />
            </div>
            <div
              ref={myref3}
              className={`${styles.box} ${boxisvisible3 ? styles.inView : ""}`}
            >
              <Link to="/Events/2021" className={styles.link_box}>
                <img
                  src="/Images/eventsHome/theme21.png"
                  alt=""
                  className={styles.image}
                  id={styles["im1"]}
                />
                <div className={styles.part2}>
                  <h3 className={styles.heading}>TEDxIITGuwahati 2021</h3>
                  <div className={styles.dis}>
                    Humans have always had an unexplainable drive to excel in
                    every aspect of life. As we leap across these barriers, do
                    we take into consideration, a backup to cover the
                    consequences of the mess we have regretfully created?
                  </div>
                </div>
                <div className={styles.triangle}></div>
              </Link>
            </div>
            <div className={styles.dateWrapper}>
              <div id={styles["date1"]}>March 6, 2021</div>
            </div>
          </section>
          <section className={styles.space}>
            <div className={styles.tagg}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles.iconv}
              />
            </div>
            <div
              ref={myref4}
              className={`${styles.box} ${boxisvisible4 ? styles.inView : ""}`}
            >
              <Link to="/Events/2019" className={styles.link_box}>
                <img
                  src="/Images/eventsHome/theme19.png"
                  alt=""
                  className={styles.image}
                  id={styles["im1"]}
                />
                <div className={styles.part2}>
                  <h3 className={styles.heading}>TEDxIITGuwahati 2019</h3>
                  <div className={styles.dis}>
                    The words ‘rigid rules of yesterday that have become obscure
                    and obsolete today’ describes precisely what the global
                    society is incessantly countering with innumerable questions
                    and logic.
                  </div>
                </div>
                <div className={styles.triangle1}></div>
              </Link>
            </div>
            <div className={styles.dateWrapper}>
              <div id={styles["date1"]}>February 9, 2019</div>
            </div>
          </section>
          <section className={styles.space}>
            <div className={styles.tagg}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles.iconv}
              />
            </div>
            <div
              ref={myref5}
              className={`${styles.box} ${boxisvisible5 ? styles.inView : ""}`}
            >
              <Link to="/Events/2016" className={styles.link_box}>
                <img
                  src="/Images/eventsHome/theme16.png"
                  alt=""
                  className={styles.image}
                  id={styles["im1"]}
                />
                <div className={styles.part2}>
                  <h3 className={styles.heading}>TEDxIITGuwahati 2016</h3>
                  <div className={styles.dis}>
                    It is about the people who are doing the job for the
                    betterment of society with little resources in the beginning
                    and our aim is to give them a platform to share and spread
                    their work to the world community.
                  </div>
                </div>
                <div className={styles.triangle}></div>
              </Link>
            </div>
            <div className={styles.dateWrapper}>
              <div id={styles["date1"]}>Januray 15, 2016</div>
            </div>
          </section>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;
