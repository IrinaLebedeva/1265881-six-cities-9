import {AppRoute} from 'settings/app-route';
import {AuthData} from 'types/auth-data';
import {Navigate} from 'react-router-dom';
import {
  ChangeEvent,
  FormEvent,
  useState
} from 'react';
import {getIsUserAuthorized} from 'store/user/selector';
import {loginUser} from 'store/user/api-action';
import RandomCityLink from 'components/login-screen/random-city-link';
import {ValidationPattern} from 'settings/validation-pattern';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  if (isUserAuthorized) {
    return <Navigate to={AppRoute.Root} />;
  }

  const isValid = ValidationPattern.email.test(email) &&
    ValidationPattern.passwordCharacter.test(password) &&
    ValidationPattern.passwordDigit.test(password);

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value.trim());

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value.trim());

  const onSubmit = (authData: AuthData) => {
    dispatch(loginUser(authData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={handleEmailChange}/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={handlePasswordChange}/>
            </div>
            <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <RandomCityLink />
          </div>
        </section>
      </div>
    </main>
  );
}

export {LoginScreen};
