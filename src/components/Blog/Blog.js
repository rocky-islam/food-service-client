import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
    return (
      <div className="my-12">
        <div className="my-8">
          <div
            className="hero h-52"
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Blog's</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className=" border-4 border-lime-600 rounded-lg w-3/4 p-4">
              <div className="my-4">
                <h1 className="text-xl bg-lime-400 p-3 rounded font-semibold">
                  Q1. Difference between SQL and NoSQL{" "}
                </h1>
                <p className="bg-orange-500 mt-4 rounded p-2">
                  <span className="text-lg font-semibold">Answer: </span>
                  SQL: Provide High-Performance Capabilities. SQL is a powerful
                  tool as it is highly compatible with all types of RDBMS like
                  MySQL, SQL Server, Oracle Database, MS Access, etc. Data
                  Consistency: SQL adheres to ACID properties with a strict
                  schema that ensures better data consistency. Ensures Vertical
                  Scalability. Handle Large Transactions with efficiency. Robust
                  Security Measures like rigid schema, data consistency, data
                  integrity, regular updates, etc. Suitable for every type of
                  organization – large or small. SQL is easy to learn and
                  manage. Open Source Programming Language. Supports Data
                  Definition Language and Data Manipulation Language to query
                  the databases. <br />
                  NoSQL: NoSQL has higher scalability than other database
                  management systems. Schema Free: You do not need to define the
                  schema of the database before storing the data onto the
                  system. NoSQL allows the distribution of data on more than
                  just one device. With NoSQL Database, you do not require
                  specialized or complex hardware or storage solutions. Does not
                  require data normalization. Simple API for easy user
                  interfaces. Can store unstructured, semi-structured, or
                  structured data.
                </p>
              </div>
              <div className="my-4">
                <h1 className="text-xl bg-lime-400 p-3 rounded font-semibold">
                  Q2. What is JWT, and how does it work?{" "}
                </h1>
                <p className="bg-orange-500 mt-4 rounded p-2">
                  <span className="text-lg font-semibold">Answer: </span>
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed <br />
                  Information Exchange: JWTs are a good way of securely
                  transmitting information between parties because they can be
                  signed, which means you can be sure that the senders are who
                  they say they are. Additionally, the structure of a JWT allows
                  you to verify that the content hasn't been tampered with.
                </p>
              </div>
              <div className="my-4">
                <h1 className="text-xl bg-lime-400 p-3 rounded font-semibold">
                  Q3.What is the difference between javascript and NodeJS?{" "}
                </h1>
                <p className="bg-orange-500 mt-4 rounded p-2">
                  <span className="text-lg font-semibold">Answer: </span>
                  1. JavaScript is a client-side scripting language that is
                  lightweight, cross-platform, and interpreted. Both Java and
                  HTML include it. Node.js, on the other hand, is a V8-based
                  server-side programming language. <br /> As a result, it is
                  used to create network-centric applications. It's a networked
                  system made for data-intensive real-time applications. If we
                  compare node js vs. python, it is clear that node js will
                  always be the preferred option. <br /> 2. JavaScript is a
                  simple programming language that can be used with any browser
                  that has the JavaScript Engine installed. Node.js, on the
                  other hand, is an interpreter or execution environment for the
                  JavaScript programming language. It requires libraries that
                  can be conveniently accessed from JavaScript programming to be
                  more helpful. <br /> 3. Any engine may run JavaScript. As a
                  result, writing JavaScript is incredibly easy, and any working
                  environment is similar to a complete browser. Node.js, on the
                  other hand, only enables the V8 engine. Written JavaScript
                  code, on the other hand, can run in any context, regardless of
                  whether the V8 engine is supported. <br /> 4. A specific
                  non-blocking operation is required to access any operating
                  system. There are a few essential objects in JavaScript, but
                  they are entirely OS-specific. <br /> Node.js, on the other
                  hand, can now operate non-blocking software tasks out of any
                  JavaScript programming. It contains no OS-specific constants.
                  Node.js establishes a strong relationship with the system
                  files, allowing companies to read and write to the hard drive.{" "}
                  <br /> 5. The critical benefits of JavaScript include a wide
                  choice of interfaces and interactions and just the proper
                  amount of server contact and direct visitor input. <br />{" "}
                  Node.js, on the other hand, offers node package management
                  with over 500 modules and the capacity to handle many requests
                  at the same time. It also offers the unique ability to enable
                  microservice architecture and the Internet of Things. Even
                  when comparing node js vs. react js, node js always wins.
                </p>
              </div>
              <div className="my-4">
                <h1 className="text-xl bg-lime-400 p-3 rounded font-semibold">
                  Q4. How does NodeJS handle multiple requests at the same time?{" "}
                </h1>
                <p className="bg-orange-500 mt-4 rounded p-2">
                  <span className="text-lg font-semibold">Answer: </span>
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;