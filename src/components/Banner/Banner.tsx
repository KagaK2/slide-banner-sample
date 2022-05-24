import { useEffect } from "react";
import BannerItem from "./BannerItem";
import styles from "./styles/Banner.module.scss";

const Banner = () => {
  let newArray: Array<string | undefined> = [
    "1",
    "2",
    "3",
    "1",
    "2",
    "3",
    "1",
    "2",
    "3",
  ];
  const moveBannerItem = (id: string | undefined, index: number) => {
    let currentPosition = (100 / (newArray.length / 3)) * (Number(index) - 4);
    let selectedBannerItem: HTMLElement | null = document.querySelector(
      `#i${index}`
    );
    let timer = requestAnimationFrame(function animateBanner(timeStamp) {
      currentPosition += 0.1;
      if (currentPosition >= 200) {
        currentPosition = -100;
      }
      selectedBannerItem!.style.left = currentPosition + "%";
      requestAnimationFrame(animateBanner);
    });
  };
  useEffect(() => {
    const movingInitialization = () => {
      newArray.forEach((item, index) => moveBannerItem(item, index));
    };
    movingInitialization();
  }, []);

  return (
    <div id="banner" className={styles["banner__wrapper"]}>
      <div id="moving-banner" className={styles["banner__moving"]}>
        {newArray.map((item: string | undefined, index: number) => (
          <div id={`i${index}`} style={{ position: "absolute" }}>
            <BannerItem content={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
