import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CLIENT_URLS } from '~/routes/names';
import { RootState } from '~/store';

interface ProtectedProps {
  children: JSX.Element;
}

export function Protected({ children }: ProtectedProps) {
  const isSignedIn = useSelector((state: RootState) => Boolean(state.auth.token));

  if (!isSignedIn) return <Navigate to={{ pathname: CLIENT_URLS.login }} />;

  return children;
}
