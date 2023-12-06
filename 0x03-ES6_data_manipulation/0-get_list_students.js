/**
 * file: 0-get_list_students.js
 * @returns {{id: Number, firstName: String, location: String}[]}
 * Auth: bright
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
