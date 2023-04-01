import Container from '../components/Container';
import FormHeader from '../components/FormHeader';
import UsernameForm from '../components/UsernameForm';

function Username() {
  return (
    <Container style={{ display: 'grid', alignItems: 'center' }}>
      <FormHeader
        title="Hello Again!"
        subTitle="Explore More by connecting with us."
      />

      <UsernameForm />
    </Container>
  );
}

export default Username;
