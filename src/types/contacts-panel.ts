export enum ContactsPanelActions {
  noAction = 'no-action',
  createCallLink = 'create-call-link',
  createNewGroup = 'create-new-group',
  createNewContact = 'create-new-contact',
}

export type CreateNewProps = {
  goToCreateScreen: (action: ContactsPanelActions) => void;
};

export type CreateContactProps = {
  setNoAction: () => void;
};
