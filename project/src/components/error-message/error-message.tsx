import {getErrorMessage} from 'store/user/selector';
import {useAppSelector} from 'hooks/use-redux-hooks';

function ErrorMessage(): JSX.Element | null {
  const errorMessage = useAppSelector(getErrorMessage);

  if (!errorMessage) {
    return null;
  }
  return <div className="error-wrapper">{errorMessage}</div>;
}

export {ErrorMessage};
