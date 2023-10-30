import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Container from "../../components/hooks/container/Container";
import { Title } from "../../components/hooks/container/Title/Title";

const Blogs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <div className="blogs-font py-24 md:m-0 ">
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <Title title={"Question and Ans"} />
        <div className="space-y-10 flex flex-col items-center">
          <div
            data-aos="fade-up"
            className="border shadow-xl w-full md:w-2/3 rounded-lg space-y-5 p-4 md:p-4"
          >
            <h2 className="text-xl">
              <span className="font-bold mr-1 text-rose-500">Ques: </span> What
              is an access token and refresh token? How do they work and where
              should we store them on the client-side?
            </h2>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span> An
              access token is a credential that represents the authorization
              granted to a client application to access protected resources on
              behalf of a user.Access tokens are used to authenticate and
              authorize API requests to access protected resources or perform
              specific actions on behalf of the user.They are issued by an
              authentication server (such as OAuth server) after successful user
              authentication and authorization.
            </p>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span>A
              refresh token is a credential used to obtain a new access token
              after the previous one has expired.Refresh tokens are securely
              stored and should not be exposed to client-side code or accessible
              by malicious actors.When the access token expires, the client
              application can send the refresh token to the authentication
              server to obtain a new access token without requiring the user to
              reauthenticate.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border shadow-xl w-full md:w-2/3 rounded-lg space-y-5 p-4 md:p-4"
          >
            <h2 className="text-xl">
              <span className="font-bold mr-1 text-rose-500">Ques: </span>{" "}
              Compare SQL and NoSQL databases?
            </h2>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span> SQL
              databases are based on a structured data model, where data is
              organized into tables with predefined schemas and relationships
              between tables.SQL databases enforce a fixed schema, meaning that
              the structure and data types of the tables must be defined
              upfront.SQL databases use the Structured Query Language (SQL) for
              defining and manipulating the data. SQL provides a powerful and
              standardized way to query and manipulate relational data.
            </p>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span> NoSQL
              databases are designed to handle unstructured, semi-structured, or
              rapidly changing data. They use a variety of data models,
              including key-value, document, columnar, and graph. NoSQL
              databases excel in scenarios that involve large volumes of data,
              high scalability requirements, dynamic data structures, and
              flexible schemas. They are commonly used in social networks,
              real-time analytics, IoT, and content management systems.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border shadow-xl w-full md:w-2/3 rounded-lg space-y-5 p-4 md:p-4"
          >
            <h2 className="text-xl">
              <span className="font-bold mr-1 text-rose-500">Ques: </span> What
              is express js? What is Nest JS ?
            </h2>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span>
              Express.js is a minimalistic and flexible web application
              framework for Node.js. It provides a lightweight set of features
              and utilities for building web applications and APIs. Express.js
              is known for its simplicity and unopinionated nature, allowing
              developers to have fine-grained control over the application
              structure and routing.Express.js allows defining routes to handle
              incoming HTTP requests and specifying the corresponding response
              logic.
            </p>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span>Nest.js
              is a progressive, TypeScript-based framework for building scalable
              and efficient server-side applications. It takes inspiration from
              Angular and shares some design principles and concepts with it.
              Nest.js focuses on developer productivity, maintainability, and
              robustness by leveraging TypeScript is static typing and
              object-oriented programming principles.Support for different
              transport layers: While commonly used with HTTP/REST APIs, Nest.js
              also supports other transport layers like WebSockets and gRPC.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border shadow-xl w-full md:w-2/3 rounded-lg space-y-5 p-4 md:p-4"
          >
            <h2 className="text-xl">
              <span className="font-bold mr-1 text-rose-500">Ques: </span> What
              is MongoDB aggregate and how does it work ?
            </h2>
            <p className=" p-3">
              <span className="font-bold mr-1 text-green-500">Ans:</span> The
              MongoDB aggregate function works by taking an array of stages as
              input. Each stage represents a specific operation or
              transformation applied to the documents in the collection. The
              documents pass through these stages in a pipeline, where the
              output of one stage becomes the input for the next stage.The
              projection stage allows you to shape the output documents by
              specifying which fields to include or exclude. It helps in
              reducing the size of the returned documents and improving query
              performance.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
