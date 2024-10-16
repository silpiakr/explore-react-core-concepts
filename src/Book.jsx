
// export default function BookStore({books}){
//     return (
//         <div>
//             <h3>Books:{books.length}</h3>
//         </div>
//     )
// }

import './Book.css' 
export default function BookStore({books}){
    // const {name, price} = book;
    return (
        <div className="book">
            <h3>Book name:{name}</h3>
            <h3>Book price:{price}</h3>
            
        </div>
    )
}