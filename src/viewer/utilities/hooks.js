import * as React from 'react';

const useActionHandler = (action, onAction) => {
  const handler = React.useCallback((...args) => {
    action(...args);
    return onAction && onAction(...args);
  }, [action, onAction]);

  return handler;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  useActionHandler,
};
