import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const TEST_QUERY = gql`
  {
    hello
  }
`;

function App() {
  const { data, loading, error } = useQuery(TEST_QUERY);
  console.log(`data:${data} loading:${loading} error:${error}`);
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
    </ApolloProvider>
  );
}

export default App;
