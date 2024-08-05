"use client";
import React, { useContext } from "react";
import video from "../../assets/bogvid.mp4";
import styles from "./home.module.scss";
import Searchcard from "../SearchCard/page";
import ResultCard from "../ResultCard/page";
import { AppContext } from "@/app/context/AppContext";
import Navbar from "../Navbar/page";
const Homepage = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Navbar />
      <section className={styles.home}>
        <div className={styles.overlay}></div>
        <video src={video} muted autoPlay loop typeof="video/mp4"></video>
        <div className={`${styles.homeContent} container`}>
          <div className={styles.textDiv}>
            <span className={styles.smallText}>Our Packages</span>
            <h1 className={styles.homeTitle}>Search your holiday</h1>
          </div>
          <Searchcard />
          {state.selectedAction2 && (
            <ResultCard
              localidad={state.selectedAction.localidad}
              actividad={state.selectedAction.actividad}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Homepage;
