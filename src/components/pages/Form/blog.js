import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([])
    // ===to stall the page we use this
    const [isLoading, setLoading] = useState(false)
    const url = "http://localhost:3000/post"
    // const url= " http://localhost:3000/commennts"
    // const url =" http://localhost:3000/profile"
    let navigate = useNavigate();
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deletePost = async (e) => {
        const response = await fetch(url, {
            method: "DELETE",
        });
        navigate('/blogs');
    }

    return (
        <div>
            <Link to="/new"><button>Create post</button></Link>

            <div className="Blog">
                <h1>All Blog Post</h1>
                {
                    posts.map((item) => {
                        return (
                            <div key={item.id}>
                                <hi>{item.title}</hi>
                                <p>{item.body}</p>
                                <p>{item.like}</p>
                                <p>{item.author}</p>
                                <button onClick={deletePost}>DELETE</button>
                                <Link to={`/blogs/${item.id}`}>Read more</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog