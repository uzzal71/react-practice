import axios from 'axios';
import { useEffect, useState } from 'react';

const QuoteAxios = () => {
    const [quote, setQuote] = useState(null);
    useEffect(() => {
        const fetchQuote = async() => {
            const res = await axios.get('https://api.quotable.io/random');
            setQuote(res.data);
        }
        fetchQuote();
    }, [])
    return (
        <div>
            <h1>Axios api call</h1>
            <div>{quote?.content}</div>
        </div>
    );
};

export default QuoteAxios;