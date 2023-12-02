import { CreateContactProps } from 'src/types/contacts-panel';
import { CREATE_CONTACT } from 'src/constants/ui-constants';
import Header from 'src/components/header';
import BackButton from 'src/components/common/back-button';
import Input from 'src/components/common/input';
import Button from 'src/components/common/button';

export default function CreateContact({ setNoAction }: CreateContactProps) {
  return (
    <section className="h-screen">
      <Header title={CREATE_CONTACT.headerTitle} backButton={<BackButton back={setNoAction} />} />
      <form className="min-h-[calc(100vh-48px)] px-10 pt-10 relative">
        <Input
          type={CREATE_CONTACT.nameInput.type}
          label={CREATE_CONTACT.nameInput.label}
          inputName={CREATE_CONTACT.nameInput.inputName}
          placeholder={CREATE_CONTACT.nameInput.placeholder}
          required={CREATE_CONTACT.nameInput.required}
        />
        <div className="mb-4"></div>
        <Input
          type={CREATE_CONTACT.emailInput.type}
          label={CREATE_CONTACT.emailInput.label}
          inputName={CREATE_CONTACT.emailInput.inputName}
          placeholder={CREATE_CONTACT.emailInput.placeholder}
          required={CREATE_CONTACT.emailInput.required}
        />
        <div className="mb-10"></div>
        {data?.createContactData && (
          <span className="block text-center text-xl text-teal-700">{CREATE_CONTACT.success}</span>
        )}
        {error && (
          <span className="block text-center text-xl text-teal-700">{CREATE_CONTACT.failed}</span>
        )}
        <Button
          type="button"
          label={CREATE_CONTACT.saveButton.label}
          className="w-4/5 h-12 absolute top-[90%] rounded-3xl text-white bg-teal-700"
        />
      </form>
    </section>
  );
}
