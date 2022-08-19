// step 1 select dome element
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
//setp 2 select initial state
const initialState = {
    value:0,
};
//setp 3 create reducer function
function counterReducer(state = initialState, action){
    if(action.type === 'increment'){
        return{
            ...state,
            value: state.value + 1,
        }
    }else if(action.type === 'decrement'){
        return{
            ...state,
            value: state.value - 1,
        }
    }else{
        return state; // here , mistake one time then not working
    }
};

// step 4 create store
const store = Redux.createStore(counterReducer);

// step 5 render

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

//step 6 UI Update
render();

//step 7 store subscribe

store.subscribe(render);

// step 8 button click listener

incrementEl.addEventListener('click', () => {
    store.dispatch({
        type:"increment",
    });
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type:"decrement",
    })
});
//================end practice ==============

// // main things

// // step 1 select dom elements

// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

// //step 2 initial state

// const initialState = {
//     value: 0,
// };

// //step 3 create reducer function

// function counterReducer(state = initialState, action) {
//     if (action.type === "increment") {
//         return {
//             ...state,
//             value: state.value + 1,
//         };
//     } else if (action.type === "decrement") {
//         return {
//             ...state,
//             value: state.value - 1,
//         };
//     } else {
//         return state;
//     }
// }

// //step 4 create store

// const store = Redux.createStore(counterReducer);

// // step 5 render

// const render = () => {
//     const state = store.getState();
//     counterEl.innerText = state.value.toString();
// };

// // step 6 update UI initially
// render();

//// step 7 store.subscribe

// store.subscribe(render);

// //step 8 button click listeners

// incrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "increment",
//     });
// });

// decrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "decrement",
//     });
// });
