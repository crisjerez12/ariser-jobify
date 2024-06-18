import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmmitting = navigation.state === 'submitting';
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmmitting}
    >
      {isSubmmitting ? 'Submitting' : 'Submit'}
    </button>
  );
};
export default SubmitBtn;
