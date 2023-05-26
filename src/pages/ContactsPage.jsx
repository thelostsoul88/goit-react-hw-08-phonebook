import { useAuth } from 'hooks';
import { Contacts } from 'components/Contacts';

const ContactsPage = () => {
  const { isLoggedIn } = useAuth();
  return <main>{isLoggedIn && <Contacts />}</main>;
};

export default ContactsPage;
