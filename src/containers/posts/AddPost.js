import React, {Component} from 'react';

class AddPost extends Component {
    render () {
        return (
            <div className="container" style={{marginTop : "20px"}}>
                <div className="row">
                    <div className="col-sm-6" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-body">
                                <form action="">
                                    <h4>Add a post</h4>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" id="title" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="picture">Upload the pic</label>
                                        <input type="file" name="picture" id="picture" className="btn btn-outline-secondary" style={{width:"100%"}} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Upload" className="btn btn-primary" style={{width:"100%"}} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost;