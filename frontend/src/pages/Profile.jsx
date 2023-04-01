import Container from '../components/Container';
import ProfileForm from '../components/ProfileForm';
import FormHeader from '../components/FormHeader';

function Profile() {
  return (
    <Container
      style={{
        width: '50%',
        paddingTop: '1.5rem',
      }}
    >
      <FormHeader
        title="Profile"
        subTitle="You can update your profile details."
      />
      <ProfileForm />
    </Container>
  );
}

export default Profile;
