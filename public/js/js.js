addEventListener('load', function() {
	console.log('LOADED');
  startUp();



});

var startUp = function(){
  //adding the "add" button and giving it a function
  var buttonOne = document.createElement('BUTTON');
  buttonOne.textContent = 'Add';
  buttonOne.id = 'addButton';
  var addDiv = document.getElementById('addForm');
  addDiv.appendChild(buttonOne);
  document.body.appendChild(addDiv);

  buttonOne.addEventListener('click', addingJob);

	var editButton = document.getElementsByClassName('editButton');
	for (var i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', function(){});
	}

};

var addingJob = function(e) {

  console.log('clicked');
  //erase original add button
  var addDiv = document.getElementById('addForm');
  while (addDiv.hasChildNodes()) {
				addDiv.removeChild(addDiv.lastChild);
			}
  //create form
  var divAddForm = document.getElementById('addForm');
  var form = document.createElement('form');
  form.id = 'record';
  form.action = '/add';
  form.method = 'POST';
  var element1 = document.createElement('INPUT');
  element1.name = 'name';
  element1.value = 'Name of job';
  var element2 = document.createElement('INPUT');
  element2.name = 'date' ;
  element2.type = 'date' ;
  element2.value = '2016-05-30'
  element2.min = '2016-04-01'
  var element3 = document.createElement('textarea');
  element3.name = 'comments';
  element3.value = 'comments';
  var button = document.createElement('button');
  button.textContent = 'Add Job';
  var breaks = document.createElement('br');
  var breaks1 = document.createElement('br');
  var breaks2 = document.createElement('br');
  var breaks3 = document.createElement('br');
  form.appendChild(breaks3);
  form.appendChild(element1);
  form.appendChild(breaks);
  form.appendChild(element2);
  form.appendChild(breaks1);
  form.appendChild(element3);
  form.appendChild(breaks2);
  form.appendChild(button);
  divAddForm.appendChild(form);
}

var editJob = function(e){

	console.log('clicked edit! number: ' + number);
	//erase original add button
	var addDiv = document.getElementById('addForm');
	while (addDiv.hasChildNodes()) {
				addDiv.removeChild(addDiv.lastChild);
			}
	var divAddForm = document.getElementById('addForm');
  var form = document.createElement('form');
  form.id = 'editForm';
  form.action = '/edit/form';
  form.method = 'POST';
  var element1 = document.createElement('INPUT');
  element1.name = 'name';
  element1.value = 'Name of job';
  var element2 = document.createElement('INPUT');
  element2.name = 'date' ;
  element2.type = 'date' ;
  element2.value = '2016-05-30'
  element2.min = '2016-04-01'
  var element3 = document.createElement('textarea');
  element3.name = 'comments';
  element3.value = 'comments';
  var button = document.createElement('button');
  button.textContent = 'Add Job';
  var breaks = document.createElement('br');
  var breaks1 = document.createElement('br');
  var breaks2 = document.createElement('br');
  var breaks3 = document.createElement('br');
  form.appendChild(breaks3);
  form.appendChild(element1);
  form.appendChild(breaks);
  form.appendChild(element2);
  form.appendChild(breaks1);
  form.appendChild(element3);
  form.appendChild(breaks2);
  form.appendChild(button);
  divAddForm.appendChild(form);


}
