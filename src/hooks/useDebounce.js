import { useRef, useCallback } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef(0);
    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}