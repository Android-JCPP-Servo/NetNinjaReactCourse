import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(endpoint, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok) {
                throw Error('Failed to connect to the server');
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log("Fetch aborted!");
            } else {
                setError(err.message);
                setIsPending(false);
                setData(null);
            }
        });

        return () => abortCont.abort();
    }, []);

    return {data, isPending, error};
}

export default useFetch;