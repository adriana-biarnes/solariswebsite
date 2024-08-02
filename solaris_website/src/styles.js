const styles = {
  boxWidth: "w-full",
  wrapper: "xl:max-w-[1280px]",
  heading1:
    "text-white font-Lato xs:text-[40px] text-[26px] font-extrabold xs:leading-[46px] leading-8 xs:w-[460px] w-[300px]",
  heading2:
    "text-white font-opensans text-xl xs:text-[26px] text-[20px] leading-6 xs:leading-[29.9px] xs:w-full  w-[300px]",
  buttonText: "font-opensans font-bold text-[1rem]",
  paragraph: "font-opensans font-semibold text-primary text-[1.125rem] leading-8",
  heading3: "font-Lato font-black text-[1.375rem] leading-8 text-primary",
  bodyText: "font-opensans font-medium text-[1.125rem] leading-8 text-primary",
  listText: "font-opensans font-regular text-[1.125rem] text-primary",
  cardText: "font-opensans font-semibold text-[1rem] leading-7",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
