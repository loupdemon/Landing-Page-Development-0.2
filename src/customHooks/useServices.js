import { useEffect, useState } from "react";

const useServices = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return [data, setData];
}

export default useServices;
