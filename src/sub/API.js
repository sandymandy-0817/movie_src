import React from 'react';
import '../css/sub.css';

function Sub1(props) {
    return (
        <section className='sub api'>
            <h2>API Documentation</h2>
            <p>This is a lightweight web service, (REST interface), which provides an easy way to access the YTS website.<br />An API (Application programming interface) is a protocol intended to be used as an interface by software components to communicate with each other.<br />Our API supports many methods, so there should not be a problem coding some nice applications.</p>
            <p>If you find any bug, or have any questions, or any suggestions please get in touch with us</p>
            <hr />
            
            <h3>API Endpoints</h3>
            <ul>
                <li>List Movies</li>
                <li>Movie Details</li>
                <li>Movie Suggestions</li>
                <li>Movie Parental Guides</li>
            </ul>
            <p>All the API endpoints return the same data structure as below</p>
            <hr />

            <h3>List Movies</h3>
            <p>HTTP GET</p>
            <table>
                <caption></caption>
                <thead>
                    <tr>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>https://yts.mx/api/v2/list_movies.json<br/>https://yts.mx/api/v2/list_movies.jsonp<br/>https://yts.mx/api/v2/list_movies.xml</td>
                        <td>Used to list and search through out all the available movies. Can sort, filter, search and order the results
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Sub1;