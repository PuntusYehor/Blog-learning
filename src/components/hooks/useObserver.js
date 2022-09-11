import { useEffect, useRef } from "react";

export const useObserver = (isLoading, ref, limit, callback) => {
	const observer = useRef()

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect()
	
		var cb = function (entries, observer) {
			if (entries[0].isIntersecting && limit) {
				callback()
			}
		};
		observer.current = new IntersectionObserver(cb)
		observer.current.observe(ref.current)
	}, [isLoading])
}