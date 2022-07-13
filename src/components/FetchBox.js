import React, { useEffect, useState } from "react";

function FetchBox() {
    // const [valuues, setValues] = useState([])
    // const url = "https://jsonplaceholder.typicode.come/users"
    // const fetchData = async() =>{
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     console.log(data);
    // }
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.come/users")
//         .then(response => response.json())
//         .then(json => console.log(json))

//     }, [])

//     return (
// <>
// different
// </>
//    )

useEffect(() => {
	fetch(' http://localhost:3000/post')
	.then(response => response.json())
	.then(json => console.log(json))
	}, []);

return (
	<div>
		Different ways to fetch Data
	</div>
);
}
export default FetchBox