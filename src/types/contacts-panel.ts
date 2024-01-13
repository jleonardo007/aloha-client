export enum ContactsPanelScreens {
  CONTACTS_LIST = 'CONTACTS_LIST',
  CREATE_CALL_LINK = 'CREATE_CALL_LINK',
  CREATE_NEW_GROUP = 'CREATE_NEW_GROUP',
  CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT',
}

export type CreateNewProps = {
  goToScreen: (action: ContactsPanelScreens) => void;
};

export type CreateContactProps = {
  goToScreen: () => void;
};
