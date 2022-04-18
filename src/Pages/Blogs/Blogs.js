import React from 'react';
import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';
import './Blog.css'
const Blogs = () => {
    return (
        <div>
            <Header color="black" />
            <h1 className='text-center my-5'>Question and Answer</h1>
            <div className="question container">
                <h2 className='text-center mb-4'>What is the difference between authorization and authentication</h2>
                <strong>What is Authentication</strong>
                <p>Authentication is the of validating that user are whom they  claim to be.This is the first step in any security process</p>
                <strong>What is Authorization</strong>
                <p>Authorization in a system security is the process of giving the user permission to access a specific resource of function.</p>
                <h2>Difference</h2>
                <p>Authorization determines the access of the resource that users can use. On the other hand, Authentication determine who the users is. Furthermore, Authorization parameter set, implement and maintain by the organization, however Authentication can be worked through password, one time pins,and biometrics information which provided by the users. Hence, Authentication is the first and foremost steps for identity. But Authorization always take place after Authentication. In addition, Authorization isn't visible or changeable by the users, but Authentication is visible or partially changeable by user. Authentication checks credential besides Authorization checks permission. Moreover, both are means of access control of user.</p>
            </div>
            <div className="question container">
                <h2 className='text-center mb-4'>Why are you using firebase? What other options do you have to implement authentication</h2>
                <p>Firebase is vastly using to develop high quality applications. Futher, it has also on easy integration process with both android and ios . Firebase as well unity setups make which apps can be built for all leading mobile and web platform. To implement Authentication we can use password based, mutlifactor, certificate based, biometrics such as- fingerprint, scanner, and facial recognition, eye scanner speaker recognition as well as token based Authentication. In recent years Authentication technology is evolving rapidly.</p>
            </div>
            <div className="question container">
                <h2 className='text-center mb-4'>What other services does firebase provide other than authentication</h2>
                <p>Other than Authentication those belows area we can use firebase. That's Realtime Database, Google analytics, and clodr storage which are powerful tools needed for mobile and web platform. It also allow us to do cloud messaging for cross platform apps, higher website traffic with apps indexing, swift and secured web hosting, higher accessibility to machine learning apis, crash reporting for swift bugs fixing, optimized app performance, and push notification for target messing.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;