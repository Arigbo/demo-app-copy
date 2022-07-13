import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateForm(props) {

    let navigate = useNavigate();

    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const updatePost = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/post/${props.id}`, data);
        } catch (error) {
            if (error.response.states === 404) {
                console.log("Resources could not be found");
            } else {
                console.log(error.message);
            }
        }
        navigate('/blogs')
    }

    return (
        <div className="editform_container">
            <h1>Edit Post</h1>
            <form onSubmit={updatePost}>
                <label>Title</label>
                <input type="text" name="title" required placeholder="blog title" className="form_box" defaultValue={props.title} onChange={handleChange} />
                <label>Post content</label>
                <textarea name="body" required placeholder="blog body" rows={10} className="form_box" defaultValue={props.body} onChange={handleChange} />
                {/* <label>Time Published</label>
q                <input type="datetime-local" name="publishedTIme" placeholder="TIme published" className="form-box" /> */}
                <label>Author</label>
                <input type="text" name="author" required placeholder="author" className="form_box" onChange={handleChange} defaultValue={props.author} />
                <button>Update post</button>
            </form>
        </div>
    )
}
export default UpdateForm