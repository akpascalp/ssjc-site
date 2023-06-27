export default {
  toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },
  elementInView(el, percentageScroll = 100) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
  },
  handleScrollAnimation(element, offset = 75, animateFunc, resetFunc) {
    if (this.elementInView(element, offset)) {
      animateFunc();
    } else {
      resetFunc();
    }
  },
}
