import { toast } from 'react-hot-toast';

import FormFooter from '../components/FormFooter';
import FormHeader from '../components/FormHeader';
import Container from '../components/Container';

import { useAuthStore } from '../store';
import { generateOtp } from '../lib/apiRequest';

import RecoveryForm from '../components/RecoveryForm';

function Recovery() {
  const { username } = useAuthStore((state) => state.auth);

  const resendOtp = () => {
    const sentPromise = generateOtp(username);

    toast.promise(sentPromise, {
      loading: 'Sending...',
      success: <b>OTP has been send to your email!</b>,
      error: <b>Could not Send it!</b>,
    });
  };

  return (
    <Container style={{ display: 'grid', alignItems: 'center', height: '80%' }}>
      <FormHeader
        title="Recovery!"
        subTitle="Enter the OTP to recover your password."
      />

      <RecoveryForm />

      <FormFooter
        text="Can't get OTP?"
        btnText="Resend"
        onClick={() => resendOtp()}
      />
    </Container>
  );
}

export default Recovery;
