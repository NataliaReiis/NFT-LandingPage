import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setVisible(scrollTop > 300 );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(scroll, handleScroll)
    }
  }, []); 

  
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={backTop} className={`scrollTop ${visible ? "visible" : "" }`} >
        <BsChevronUp />
    </button>
  );
}

