import { Context } from "./context.interface";

/**
 * Converts Firebase Context to a system Context
 * 
 * @param context Firebase EventContext - https://firebase.google.com/docs/reference/functions/functions.EventContext#.auth
 */
export function createContext(context): Context
{
  return {
    isAuthenticated: context.uid !== null,
    userId: context.uid
  }  
}