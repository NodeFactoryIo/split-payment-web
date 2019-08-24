import { useEffect } from 'react';

export function useOutsideClickHandler(ref, shouldAlert, onClose) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && shouldAlert) {
      onClose();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
