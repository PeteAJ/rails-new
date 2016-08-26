angular 
  .module('app')
  .factory('Note', Note)
function Note($resource) {
  
  var Note = $resource('http://localhost:3000/api/v1/notes/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Note; 
}