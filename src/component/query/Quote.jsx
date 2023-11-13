import { useQuery } from "react-query";
import getQuote from "./getQuote";

const Quote = () => {
    const { data } = useQuery("quote", () => getQuote());

    return (
        <div>
            <h1>React-Query API Call</h1>
            <div>{data?.content}</div>
        </div>
    );
};

export default Quote;