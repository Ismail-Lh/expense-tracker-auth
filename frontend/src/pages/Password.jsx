import { useQuery } from '@tanstack/react-query';

import PasswordForm from '../components/PasswordForm';

import { useAuthStore } from '../store';
import { getUser } from '../lib/apiRequest';
import FormHeader from '../components/FormHeader';
import Container from '../components/Container';

function Password() {
  const { username } = useAuthStore((state) => state.auth);

  const { data: user } = useQuery({
    queryKey: ['users', username],
    queryFn: () => getUser(username),
  });

  return (
    <Container style={{ display: 'grid', alignItems: 'center' }}>
      <FormHeader
        title={`Hello ${user?.firstName || user?.username}!`}
        subTitle="Explore More by connecting with us."
      />

      <PasswordForm user={user} />
    </Container>
  );
}

export default Password;
