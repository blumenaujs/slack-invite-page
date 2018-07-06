const { NODE_ENV } = process.env
export const API_URL = NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://slack-invite-server.herokuapp.com/api'
export const INVITES_SUFIX = '/invites'
