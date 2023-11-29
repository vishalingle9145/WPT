//action creators
const new_booking = (name, amount) => {
    return (
        {
            type: "newbooking",
            payload: { name, amount }
        }
    )
}

const cancel_booking = (name, amount) => {
    return (
        {
            type: "cancelbooking",
            payload: { name, amount }
        }
    )
}


//create reducers for manage bookings

const manageReservation = (oldReservation = [], action) => {

    switch (action.type) {
        case "newbooking":
            return [...oldReservation, { ...action.payload }];

        case "cancelbooking":
            return oldReservation.filter(ob => ob.name != action.payload.name);

        default:
            return oldReservation;
    }
}

const manageCancellation = (oldCancellation = [], action) => {
    switch (action.type) {
        case "cancelbooking":
            return [...oldCancellation, { ...action.payload }];

        default:
            return oldCancellation;
    }
}

const manageAmount = (oldAmount = 2000, action) => {
    switch (action.type) {
        case "newbooking":
            return oldAmount + action.payload.amount;

        case "cancelbooking":
            return oldAmount - action.payload.amount;

        default:
            return oldAmount;
    }
}


//generate stores to keep state

const { createStore, combineReducers } = Redux
const bookingStore = combineReducers(
    {
        accounting: manageAmount,
        reservationList: manageReservation,
        cancellationList: manageCancellation
    }
)

const store = createStore(bookingStore)



//actions

const action1 = new_booking("Vishal", 2000)
store.dispatch(action1);
console.log(store.getState());

const action2 = new_booking("Vaibhav", 3000)
store.dispatch(action2);
console.log(store.getState());


const action3 = cancel_booking("Vishal", 1000)
store.dispatch(action3);
console.log(store.getState());


