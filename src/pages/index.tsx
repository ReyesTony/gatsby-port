// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};
// Step 3: Export your component
export default IndexPage;
