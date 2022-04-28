import { useEffect, useState } from "react";

const useBlog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return [data, setData];
}

export default useBlog;
