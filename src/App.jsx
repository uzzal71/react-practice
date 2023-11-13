import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Quote from "./component/query/Quote";

const App = () => {
  const [quote, setQuote] = useState(null);
  const client = new QueryClient()

  useEffect(()=>{
      const fetchQuote = async() => {
          const res = await fetch('https://api.quotable.io/random');
          const data = await res.json();
          setQuote(data)
      };
      fetchQuote();
  }, []);
  
  return (
    <div>
      <h1>API Call</h1>
      <QueryClientProvider client={client}>
        <Quote />
        <Quote />
      </QueryClientProvider>
    </div>
  );
};

export default App;
