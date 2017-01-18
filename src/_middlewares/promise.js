export default function promiseMiddleware() {
  return next => action => {

    const { promise, callback, type, ...rest } = action;

    if (!promise) return next(action);

    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({type: REQUEST });

    return promise
      .then(res => {
        next({ ...rest, res, type: SUCCESS });
        if(!callback)return true;
        callback(res)
      }, res =>{
        console.log('PROMISE ERROR', type, res, FAILURE)
        next({type: FAILURE, res });
        console.log(error);

        return false;
      })
      .catch(error => {
        console.error('PROMISE ERROR', type)
        next({error, type: FAILURE });
        console.error(error);

        return false;
      });
  };
}
