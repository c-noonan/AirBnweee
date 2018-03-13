import { combineReducers } from "redux";
import bookingErrorsReducer from "./bookings_errors";
import reviewsErrorsReducer from "./reviews_errors";
import sessionErrorsReducer from "./session_errors";

export default combineReducers({
  session: sessionErrorsReducer,
  reviews: reviewsErrorsReducer,
  bookings: bookingErrorsReducer
});
