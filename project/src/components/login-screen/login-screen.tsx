import {AppRoute} from 'settings/app-route';
import {AuthData} from 'types/auth-data';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  generatePath,
  Link,
  Navigate
} from 'react-router-dom';
import {
  FormEvent,
  useRef
} from 'react';
import {getAuthorizationStatus} from 'store/user/selector';
import {getRandomCity} from 'utils/get-random-city';
import {loginUser} from 'store/user/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginUser(authData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const randomCity = getRandomCity();

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef}/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={generatePath(AppRoute.City, {cityCode: randomCity.cityCode})}>
              <span>{randomCity.cityName}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export {LoginScreen};
