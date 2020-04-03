// import React, {useState, useEffect} from 'react';
// import {Table} from 'react-bootstrap';
// import axios from 'axios';

// const MihaiTable = () => {


//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setPosts(res.data));
//     }, []);

// return(
//     <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>Id</th>
//       <th>User Id</th>
//       <th>Title</th>
//     </tr>
//   </thead>
//   <tbody>
//       {posts.map((post) => 
//       <tr>
//       <td>{post.id}</td>
//       <td>{post.userId}</td>
//       <td>{post.title}</td>
//     </tr>)}
    
//   </tbody>
// </Table>
// )
// };

// export default MihaiTable;