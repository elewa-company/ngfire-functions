import { RepositoryFactory } from './data/repository.factory';

import { Logger } from './util/logger/logger.interface';
import { getLogger } from './util/logger.util';

import { Context } from './context/context.interface';
import { FunctionTools } from './function-tools.interface';

/**
 * The handler which contains the logic of a Firebase Function of type T (input) -> R (result).
 * 
 * @param T: The data expected by the function 
 * @param R: The result returned from the function
 */
export abstract class FunctionHandler<T, R>
{
  constructor() { }

  /** Contains the actual logic */ 
  public abstract execute(data: T, context: Context, tools: FunctionTools): Promise<R>;

}