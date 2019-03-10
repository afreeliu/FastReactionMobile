// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import TodoApp from './TodoList'
import Clock from './Clock'
import Calculator from './TemControl'

import './main.css';//使用require导入css文件

// render(<Greeter to={"jack"}/>, document.getElementById('root'));

// render(<Clock />, document.getElementById('root'));

// function App() {
//     return (
//         <div style={{padding: '20px'}}>
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//             <Clock />
//
//         </div>
//     );
// }
// render(
//     <App />,
//     document.getElementById('root')
// );

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }
//
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// );

render(<Calculator/>, document.getElementById('root'));