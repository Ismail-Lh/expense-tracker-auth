/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import useRefreshToken from '../hooks/useRefreshToken';
import { useAuthStore, usePersistStore } from '../store';

function PersistLogin({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { accessToken } = useAuthStore((state) => state.auth);
  const { persistLogin } = usePersistStore((state) => state);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !accessToken && persistLogin ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  if (!persistLogin) return children;

  if (isLoading) return <p>Loading...</p>;

  return children;
}

export default PersistLogin;
