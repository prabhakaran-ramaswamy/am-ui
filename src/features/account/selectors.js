export const getAccount = state => state.account ||  { id:'', firstName: '', lastName: '', email: '', mobile: ''}
export const getAccounts = state => state.accounts ||  [{id: 300,firstName: 'Peter',lastName: 'P',email: 'test@test.com', mobile: '0123456789'}, { id: 200, firstName: 'Saravanan', lastName: 'R', email: 'test@test.com', mobile: '0123456789'}, { id: 100,firstName: 'Prabhakaran',lastName: 'R', email: 'test@test.com', mobile: '0123456789'}, {id: 400,firstName: 'Ramaswamy',lastName: 'M',email: 'test@test.com', mobile: '0123456789'}]

