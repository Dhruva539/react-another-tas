/** ACTION CREATOR FACTORIES */

export const fetchRequestFactory = (type) => (params) => ({
  type,
  payload: {
    params
  }
});

export const fetchSuccessFactory = (type) => (params, time = new Date()) => ({
  type,
  payload: {
    params,
    time
  }
});

export const fetchFailFactory = (type) => (error) => ({
  type,
  payload: {
    error
  }
});
/**
 *  creates the standard api actionCreators
 */

export const createApiActions = (requestType, successType, failType) => {
  return {
    fetchRequest: fetchRequestFactory(requestType),
    fetchSuccess: fetchSuccessFactory(successType),
    fetchFail: fetchFailFactory(failType)
  };
};

/**
 * when a fetch is requested, the previous error is cleared and is loading set to true
 */

export const handleFetchRequest = () => ({
  isLoading: true,
  errorFlag: false,
  error: null
});

/**
 *  when fetch is successded , the results are updated ,loading ends, the API error is cleared,
 * and an update timestamp set
 * @param {} state
 * @param {*} param1
 */
export const handleFetchSuccess = (state, { results, time = new Date() }) => ({
  results,
  isLoading: false,
  errorFlag: false,
  fetched: true,
  error: null,
  time
});

export const handleFetchFail = (state, { error }) => ({
  isLoading: false,
  errorFlag: true,
  fetched: false,
  error
});

/**
 *  Creates an action map that maps actions types to handlers
 */
export const createApiActionMap = (requestType, successType, failType) => ({
  [requestType]: handleFetchRequest,
  [successType]: handleFetchSuccess,
  [failType]: handleFetchFail
});
