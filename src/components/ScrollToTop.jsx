import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {

  const scrollTop = () => {
    scroll.scrollToTop();
  }

  return (
    <button className="scrollTop" onClick={scrollTop}>
      <a href="#">
        <BsChevronUp />
      </a>
    </button>
  );
}

