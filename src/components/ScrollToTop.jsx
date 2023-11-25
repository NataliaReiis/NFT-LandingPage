import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {
  
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={backTop} className="scrollTop" >
        <BsChevronUp />
    </button>
  );
}

