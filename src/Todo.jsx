// export default function Todo({task}){
//     task = " ghum pacche";
//     return (
//         <li>Task: {task}</li>  
//     )
// }


//CONDITIONAL RENDARING OPTION-1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>  
//     }
// }


//CONDITIONAL RENDARING OPTION-2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>  
//     }
// }


//conditional rendaring -3 ternary
// export default function Todo({task, isDone}){
//     return (
//     <li>{isDone? "Finish" : "Work on"}: {task}</li>
//)

// }

//conditional rendaring option -4
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && ": Done"}</li>  
//     )
// }

//conditional rendaring option -5
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone || ": Do it"}</li>  
//     )
// }

//conditional rendaring option -6
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>  
    }
    return listItem;
}
