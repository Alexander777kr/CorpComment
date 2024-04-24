import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      'FeedbackItemsContext is not defined in FeedbackItemsContextProvider component'
    );
  }
  return context;
}