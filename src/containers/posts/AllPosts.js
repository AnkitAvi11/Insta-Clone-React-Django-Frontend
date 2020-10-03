import React, { Component } from 'react';

import Loader from '../../components/Loader';
import { baseUrl } from "../../App";

class AllPosts extends Component {

    constructor () {
        super();
        this.state = {
            posts : []
        }
    }

    componentDidMount = () => {
        fetch(baseUrl+"post/all/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts : data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render () {

        if(this.state.posts.length === 0) {
            return <Loader/>
        }

        let posts = this.state.posts.map(post => {
            return (
                <div className="card" key={post.id} style={{marginBottom : "20px"}} >
                    <div className="card-body">
                        <h5>{post.title}</h5>
                        <img src={`http://127.0.0.1:8000${post.image}`} alt="" style={{width:"100%", marginBottom:"10px"}} />
                        <p>By : {post.user.username}</p>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Posted : {new Date(post.date_posted).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container" style={{marginTop : "20px"}}>
                <div className="row">
                    <div className="col-sm-7" style={{margin:"auto"}}>
                        {posts}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllPosts;