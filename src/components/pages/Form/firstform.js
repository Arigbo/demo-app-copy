import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function FirstForm() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    // const [likes, setLikes] = useState("")
    let navigate = useNavigate();
    let url = "http://localhost:3000/post";
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            title: title,
            body: body,
            author: author,
            // like: like,
            // publishedTime: new Date().toISOString().substring(0, 16),
        }
        await fetch(url, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
        navigate('/blogs');
    };

    return (
        <div>
            <h1>
                Create a new blog
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" required placeholder="blog title" onChange={(e) => setTitle(e.target.value)} />
                <textarea name="body" required placeholder="blog body" onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" name="author" required placeholder="author" onChange={(e) => setBody(e.target.value)} />
                <button>Publish</button>
                <Link to="/blogs"><button>Back</button></Link>
            </form>
        </div>
    )
}
export default FirstForm