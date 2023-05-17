import AddContact from "components/Contact/AddContact";
import Contact from "components/Contact/Contact";
import ContactItems from "components/Contact/ContactItems";
import Filter from "components/Filter/Filter";
import { useGetContactsQuery } from "redux/contactsApi";

const Contacts = () => {
  const { data: contacts = [], isError } = useGetContactsQuery();
  return (
    <>
      {!isError && (
        <>
          <Filter />
          <div className="inline-flex">
            <AddContact />
            <Contact>{contacts.length > 0 && <ContactItems />}</Contact>
          </div>
          {!contacts.length && (
            <h2 className="text-center font-mono text-2xl mt-4">
              No contacts in phonebook
            </h2>
          )}
        </>
      )}
    </>
  );
};
export default Contacts;
