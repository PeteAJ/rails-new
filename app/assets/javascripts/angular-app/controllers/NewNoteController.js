
angular 
  .module('app') 
  .controller('NewNoteController', NewNoteController); 
function NewNoteController(Note, $location) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  ctrl.note = new Note();
  ctrl.addNote = function() {
    ctrl.note.$save(function() {
      $location.path('notes');
    });
  };
}