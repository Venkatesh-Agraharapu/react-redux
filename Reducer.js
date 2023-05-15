// let count=5;

// export default function reducer(state,action){
//     const {type,payload}=action;
//     switch(type){
//         case "increment":
//             return count++
//         case "decrement":
//             return count--
//             default:
//                 return count;

//     }
// }

let count =0;
function reducer (state,action){
    const {type,payload}=action;
    switch(type){
        case "INCREMENT":
            return count++
        case "DECREMENT":
            count--
        default:
            return count
    }

}
