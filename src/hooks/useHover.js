import {useEffect, useState} from 'react'
export default function useHover(ref) {
    const [hovering, setHovering] = useState(false)
    const onMouseOver = () => setHovering(true);

    const onMouseOut = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const node = ref.current;
        node.addEventListener('mouseover', onMouseOver);
        node.addEventListener('mouseout', onMouseOut);

        return () => {
            node.removeEventListener('mouseover', onMouseOver);
            node.removeEventListener('mouseout', onMouseOut);
        }
    }, [])

    return hovering;
}