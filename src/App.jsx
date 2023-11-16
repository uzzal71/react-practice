import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Quote from "./component/query/Quote";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true
      }
    }
  })
  
  return (
    <div>
      <h1>API Calling</h1>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Quote />
          <Quote />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;
