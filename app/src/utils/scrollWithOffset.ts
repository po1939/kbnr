
export const scrollWithOffset = (el: HTMLElement) => {
    const yOffset = -210; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };


export const scrollWithOffsetAboutPage = (el: HTMLElement) => {
    const yOffset = -110; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
