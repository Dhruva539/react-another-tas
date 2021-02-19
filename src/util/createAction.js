/**
 *  This method return another method which is responsible
 *  to trigger action in the redux
 */

export const makeActionCreator = (type, ...argnames) => (...args) => {
  const payload = {};
  if (!argnames.length) return { type, payload: { ...args[0] } };

  argnames.forEach((arg, index) => {
    payload[arg] = args[index];
  });

  const action = { type, payload };
  return action;
};

export default makeActionCreator;
