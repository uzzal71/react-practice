import { Suspense } from "react";
import Quote from "./component/swr/Quote";

const App = () => {

  
  return (
    <div>
      <h1>API Call</h1>
      <Suspense fallback={<h1>Loading data...</h1>}>
        <Quote/>
      </Suspense>
    </div>
  );
};

export default App;
