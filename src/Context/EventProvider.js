// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useReducer,

//   } from "react";

// import { eventReducer, initialState } from "../redux/reducer/eventReducer";
// import { actionTypes } from "../redux/state/actionTypes";
 
//   const Event_CONTEXT = createContext();
  
//   const EventProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(eventReducer, initialState);
  
//     console.log(state);
  
//     useEffect(() => {
//       dispatch({ type: actionTypes.FETCHING_START });
//       fetch('event.json')
//         .then((res) => res.json())
//         .then((data) => console.log(data.data)
//           // dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data })
//         )
//         .catch(() => {
//           dispatch({ type: actionTypes.FETCHING_ERROR });
//         });
//     }, []);
  
//     const value = {
//       state,
//       dispatch
//     };
  
//     return (
//       <Event_CONTEXT.Provider value={value}>
//         {children}
//       </Event_CONTEXT.Provider>
//     );
//   };
  
//   export const useEvents = () => {
//     const context = useContext(Event_CONTEXT);
//     return context;
//   };
  
//   export default EventProvider;