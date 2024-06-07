import React from 'react'
import NavBar from './NavBar'

const ViewTable = () => {
    return (
        <div>
            <NavBar/>
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
                                        <tr>
                                            <th scope="row">Harry Potter</th>
                                            <td>J K Rowling</td>
                                            <td>1998</td>
                                            <td>Rs.5965</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">The Catcher in The Rye</th>
                                            <td>Thomas Edison</td>
                                            <td>2002</td>
                                            <td>1200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Educator</th>
                                            <td>Tara Watsover</td>
                                            <td>2012</td>
                                            <td>2500</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Normal People</th>
                                            <td>Sally Rooney</td>
                                            <td>2018</td>
                                            <td>1685</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gone Girl</th>
                                            <td>Andy Wier</td>
                                            <td>2023</td>
                                            <td>2185</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Station Eleven</th>
                                            <td>Emily St. John Mande</td>
                                            <td>2014</td>
                                            <td>3500</td>
                                        </tr>

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