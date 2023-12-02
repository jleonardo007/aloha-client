const APP_TITLE = 'Aloha Chat';

const TITLES_MESSAGING_TABS = {
  chats: 'Chats',
  calls: 'Calls',
};

const TITLES_CREATE_NEW = {
  callLink: 'New call link',
  newContact: 'New contact',
  newGroup: 'New group',
};

const TEXT_NODATA_VIEW = {
  messages: 'no messages',
  calls: 'no calls',
  contacts: 'no contacts',
};

const CONTACTS_PANEL_HEADER = {
  title: 'Contacts',
  contactsAmount: (amount: number) => `${amount} contacts`,
};

const CREATE_CONTACT = {
  headerTitle: 'Create Contact',
  nameInput: {
    type: 'text',
    label: 'Name',
    inputName: 'name',
    placeholder: 'John Doe',
    required: true,
  },
  emailInput: {
    type: 'email',
    label: 'Email',
    inputName: 'email',
    placeholder: 'johndoe@gmail.com',
    required: true,
  },
  saveButton: {
    label: 'Save',
  },
};

export {
  APP_TITLE,
  TITLES_MESSAGING_TABS,
  TITLES_CREATE_NEW,
  TEXT_NODATA_VIEW,
  CONTACTS_PANEL_HEADER,
  CREATE_CONTACT,
};
