
/** Execution context.
 * 
 * @see https://firebase.google.com/docs/reference/functions/functions.EventContext 
 *  - For all possible build-in functionalities.
 */
export interface Context { 

  isAuthenticated: boolean;
  userId: string;

}
