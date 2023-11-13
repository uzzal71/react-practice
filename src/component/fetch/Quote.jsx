import { useEffect, useState } from 'react';

const Quote = () => {
    let [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await fetch('https://api.quotable.io/random');
            const data = await res.json();
            setQuote(data);
        }
        fetchQuote();
    }, [])

    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            <div>{quote.content}</div>
        </div>
    );
};

export default Quote;