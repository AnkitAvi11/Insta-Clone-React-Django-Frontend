import React, {Component} from 'react';

import { connect } from "react-redux";
import { addPost } from "../../actions/post";

import { withAlert } from "react-alert";

class AddPost extends Component {

    constructor() {
        super();

        this.state = {
            title : null,
            image : null
        }

        this.imageref = React.createRef();
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.image === null || this.state.image === null)
        {
            window.alert('Enter a valid title or file')
        }
        this.props.addPost();
    }

    onpicchange = (e) => {
        console.log(this.imageref.current.files[0])
        const file = this.imageref.current.files[0];

        if (file) {
            this.setState({
                image : file
            })
        }
    }

    render () {
        return (
            <div className="container" style={{marginTop : "20px"}}>
                <div className="row">
                    <div className="col-sm-6" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-body">
                                <form action="" onSubmit={this.onSubmitForm}>
                                    <h4>Add a post</h4>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" id="title" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="picture">Upload the pic</label>
                                        <input type="file" name="picture" id="picture" className="btn btn-outline-secondary" style={{width:"100%"}} 
                                        ref = {this.imageref}
                                        onChange={this.onpicchange}
                                        />
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

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

export default withAlert()(connect(mapStateToProps, {addPost})(AddPost));