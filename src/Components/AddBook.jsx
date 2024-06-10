import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBook = () => {
    const [data,setData]=useState(
        {
            "title" :"",
            "category":"",
            "pubyr":"",
            "author":"",
            "dist":"",
            "pubname":"",
            "price":"",
            "edition":""
        }
    )
    const inputHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="category" id="" className="form-control" value={data.category} onChange={inputHandler}>
                                <option value="Science">Science</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Classic">Classic</option>
                                <option value="Horror">Horror</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Published Year</label>
                            <input type="text" className="form-control" name="pubyr" value={data.pubyr} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">AuthorName</label>
                            <textarea name="author" id="" className="form-control" value={data.author} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Distributer Name</label>
                            <input type="text" className="form-control" name="dist" value={data.dist} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Publisher Name</label>
                            <input type="text" className="form-control"  name="pubname" value={data.pubname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control"  name="price" value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Edition</label>
                            <input type="text" className="form-control" name="edition" value={data.edition} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook