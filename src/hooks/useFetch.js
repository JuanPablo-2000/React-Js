import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {

            try {
                let r = await fetch(url);

                if(!r.ok){
                    throw {
                        error:true,
                        status:status,
                        statusText: !r.statusText ? "Ocurrió un error": r.statusText
                    };
                }

                let data = await r.json();
                setisPending(false);
                setData(data);
                setError({error:false})

            } catch(error) {
                setisPending(true);
                setError(error);
            }          
        };

        getData(url);
    }, [url]);

    return {data, isPending, error}

};

