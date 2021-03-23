import { useCallback, useEffect } from "react";

/**
 * Hook to execute an effect (function) anytime the value of the provided
 * dependencies changes
 * @param {Function} effect function (effect) to execute
 * @param {Array<Any>} dependencies values that should trigger the effect to re-run
 * @param {Number} delay minimum wait in milliseconds before the effect can be invoked again
 */
export const useDebounceEffect = (effect, dependencies, delay = 250) => {
  //make sure that we only ever re-run the effect when the dependencies change.
  const callback = useCallback(effect, dependencies);
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
