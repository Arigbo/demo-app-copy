import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateForm from "./Updateform";


function Singleblog() {
    const [posts, setPosts] = useState([]);
    
    const [toogle, setToogle] = useState(false);
    const handleToogle = () => {
        setToogle(!toogle);
    };

    let { blogId } = useParams();
    let navigate = useNavigate();


    const url = `http://localhost:3000/post/${blogId}`;

    const fetchData = async (e) => {
        const response = await fetch(url)
        const data = await response.json();
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
            <h1>Blog{blogId}</h1>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            <p>{posts.author}</p>
            {/* <p>{posts.likes}</p> */}
            <button onClick={deletePost}>DELETE</button>
            {toogle &&
                (
                    <UpdateForm
                        id={posts.id}
                        title={posts.title}
                        body={posts.body}
                        author={posts.author}
                    />
                )
            }
            <button onClick={handleToogle}>Edit</button>
        </div>
    )
}

export default Singleblog