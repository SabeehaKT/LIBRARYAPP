import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewTable = () => {
    const [data, setData] = useState([
        {
            "title": "Station Eleven",
            "author": "Emily St. John Mande",
            "pubyr": "2014",
            "price": "Rs.3500"
        },
        {
            "title": "The Catcher in The Rye",
            "author": "Thomas Edison",
            "pubyr": "2002",
            "price": "Rs.1200"
        }

    ])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Book Title</th>
                                            <th scope="col">Author Name</th>
                                            <th scope="col">Publication Year</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td scope="row">{value.title}</td>
                                                    <td>{value.author}</td>
                                                    <td>{value.pubyr}</td>
                                                    <td>{value.price}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTable