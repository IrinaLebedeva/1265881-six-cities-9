import {useAppSelector} from 'hooks/use-redux-hooks';

function ErrorMessage(): JSX.Element | null {
  const errorMessage = useAppSelector((state) => state.userReducer.errorMessage);

  if (!errorMessage) {
    return null;
  }
  return <div className="error-wrapper">{errorMessage}</div>;
}

export {ErrorMessage};
