import React from 'react';

const Blog = () => {
    return (

        <div className='w-[80%] mx-auto mt-10 mb-[385px]'>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>The databases in SQL are table-based, while the databases in NoSQL are document, key-value, graph, or wide-column stores. SQL databases suit multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS
                </div>
                <div className="collapse-content">
                    <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time
                </div>
                <div className="collapse-content">
                    <p>Multithreaded network apps handle the above workload like this:

                    </p>
                    <img src="https://user-images.githubusercontent.com/91980956/200889788-dff2b702-afd9-4b17-9dc8-e0eb6ca7cecd.png" alt="" />
                </div>
            </div>


        </div>


    );
};

export default Blog;