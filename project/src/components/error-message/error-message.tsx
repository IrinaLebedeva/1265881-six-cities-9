import {getErrorMessage} from 'store/user/selector';
import {useAppSelector} from 'hooks/use-redux-hooks';

import './css/error-wrapper.css';

function ErrorMessage(): JSX.Element | null {
  const errorMessage = useAppSelector(getErrorMessage);

  if (errorMessage !== '') {
    return <div className="error-wrapper">{errorMessage}</div>;
  }

  return null;
}

export {ErrorMessage};
