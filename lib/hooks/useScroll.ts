import { useCallback, useEffect, useState } from "react";

// 'threshold' parameter represents pixels on screen
export default function useScroll(threshold: number) {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        // if scrolled more than 'threshold', sets 'scrolled' true
        // pageYOffset is basically a "scrollY" alternative
        setScrolled(window.pageYOffset > threshold);
        // onScroll function will only be recreated if 'threshold' parameter changes
    }, [threshold]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        // returns a cleanup function for component unmounting
        return () => window.removeEventListener("scroll", onScroll);
        // eventlistener gets recreated whenever 'threshold' changes
    }, [onScroll]);

    return scrolled;
}
