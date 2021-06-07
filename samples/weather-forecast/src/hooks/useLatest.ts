import { RefObject, useRef } from "react";

export default <T>(val: T): RefObject<T> => {
  const ref = useRef(val);
  ref.current = val;
  return ref;
};