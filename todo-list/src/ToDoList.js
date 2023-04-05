import React from 'react';
import ToDo from './ToDo';
 
 


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} key={todo.id}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};



// const ToDoList = ({toDoList}) => {
//   const TodoComp = toDoList.map( todo => {
//         return (
//             <ToDo todo={todo} />
//         )
//     }
    
//     );
//    return (
//        <div>
//            {toDoList.map(todo => {
//                <TodoComp/>
//            })} 
//        </div>
//    );
// };



// const ToDoList = (toDoList) => {
//     return(
//         <div>
//             {toDoList.map(todo => 
//             {
//                 return (
//                    <ToDo todo={todo} />
//                 )
//            })} 
//         </div>
//     );
// }
 
export default ToDoList;