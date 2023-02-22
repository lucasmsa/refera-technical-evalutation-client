export function getUserToken() {
  if (!localStorage.getItem('token')) return null;

  return localStorage.getItem('token');
}
