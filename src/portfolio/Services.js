import React from "react";
import "./Services.css";

function Services(){
    return(
        <div className="service-container">
            <div className="service-top">
                <h1>Services</h1>
                <p>Providing tailored services to meet your needs. With expertise and dedication, we deliver exceptional results. Your satisfaction is our priority. Let's work together to achieve success.</p>
            </div>

            <div class="box-container">
                <div class="box">
                    <h3>Web Development</h3>
                    <p>Designing and developing websites for clients using HTML, CSS, JavaScript, and various web development frameworks like React.</p>
                </div>
                <div class="box">
                    <h3>Backend Development</h3>
                    <p>Building APIs and web services using server-side technologies such as Node.js, Python (Django, Flask).</p>
                </div>
                <div class="box">
                    <h3>Database</h3>
                    <p>Database design and implementation (SQL and NoSQL databases).</p>
                </div>
                </div>
        </div>

    );
}

export default Services;