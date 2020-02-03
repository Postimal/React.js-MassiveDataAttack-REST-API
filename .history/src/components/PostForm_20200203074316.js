import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    clearForm(){
        this.setState({
            title: '',
            body: ''
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        if(this.state.title && this.state.body){
            this.clearForm();
           return this.props.createPost(post);
        };

    }




    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                <h5>Add New Post</h5>
                    <div>
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value ={this.state.title}
                        />
                    </div>
                    <div>
                        <label>Body: </label>
                        <input
                            type="text"
                            name="body"
                            onChange={this.onChange}
                            value ={this.state.body}
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>

            </div>
        )
    }
}

export default connect(null, {createPost})(PostForm)
