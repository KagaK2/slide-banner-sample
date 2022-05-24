import { useEffect } from "react";
import BannerItem from "./BannerItem";
import styles from "./styles/Banner.module.scss";

const Banner = () => {
  const newArray = ["1", "2", "3", "4", "5", "6", "7"];
  const moveBanner = () => {
    let startTime = Date.now();
    let selectedBanner: HTMLElement | null = document.querySelector("#moving-banner");
    let leftBanner: HTMLElement | null = document.querySelector('#moving-banner-left')
    let timer = requestAnimationFrame(function animateBanner(timeStamp) {
      let interval = Date.now() - startTime;
      if (interval / 4 >= window.innerWidth){
        let tempBanner = selectedBanner;
        selectedBanner = leftBanner;
        leftBanner = tempBanner;
        startTime = Date.now();
        interval = Date.now() - startTime;
      }
      leftBanner!.style.right = (window.innerWidth- interval / 4) + "px"
      selectedBanner!.style.left = interval / 4 + "px";
      requestAnimationFrame(animateBanner);
    });
  };
  useEffect(() => {
    moveBanner();
  }, []);

  return (
    <div id="banner" className={styles["banner__wrapper"]}>
        <div id="moving-banner-left" className={styles["banner__moving"]}>
        {newArray.map((item: string) => (
          <BannerItem content={item} />
        ))}
      </div>
      <div id="moving-banner" className={styles["banner__moving"]}>
        {newArray.map((item: string) => (
          <BannerItem content={item} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
