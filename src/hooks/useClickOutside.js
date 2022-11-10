import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useClickOutside = (ref, func) => {
  // call action redux
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(func(false));
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [func, ref, dispatch]);
};

export default useClickOutside;
