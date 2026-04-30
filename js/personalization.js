// Basic personalization using localStorage
function saveUserPreference(key, value) {
  localStorage.setItem(key, value);
}
function getUserPreference(key) {
  return localStorage.getItem(key);
}
// Example usage: saveUserPreference('theme', 'dark');
// Example usage: getUserPreference('theme');
