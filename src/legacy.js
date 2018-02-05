'use strict';

function legacyCode() {
  //Función para selector Year en formulario

  function addValues(selector, initValue, currentValue) {
    var selectValues = document.querySelector(selector);
    var acumulador = '';
    for (var i = initValue; i <= currentValue; i++) {
      acumulador = acumulador + '<option>' + i + '</option>';
    }
    selectValues.innerHTML = selectValues.innerHTML + acumulador;
  }

  addValues('#selectorYear', 1950, 2018);
  addValues('#selectorYearSecond', 1950, 2018);

  //MENÚ DE NAVEGACIÓN POR PESTAÑAS
  var currentStep = 0;
  var currentStepMenu = 0;
  var fieldsetInformation = document.querySelectorAll ('.fieldset-information');
  var buttonsMenu = document.querySelectorAll ('.button-menu');
  var allButtonsNavigation = document.querySelectorAll('.main-nav-button');

  function showFieldsets(event) {
    var id = event.currentTarget.getAttribute('data-id');
    var idMenu = event.currentTarget.getAttribute('data-id');

    for(var i = 0; i < fieldsetInformation.length; i++){
      fieldsetInformation[i].classList.add('display-none');
    }
    fieldsetInformation[id].classList.remove('display-none');
    currentStep = id;
    currentStepMenu = idMenu;
    //console.log("click en ",currentStep);
  }

  for (var i = 0; i < buttonsMenu.length; i++) {
    buttonsMenu[i].addEventListener('click', showFieldsets);
  };

  var buttonContinue = document.querySelector(".buttonContinue");
  buttonContinue.addEventListener('click',nextStep);
  function nextStep(){
    //console.log("current en continue",currentStep);
    for(var i= 0; i< fieldsetInformation.length;i++){
      fieldsetInformation[i].classList.add('display-none');
    }
    currentStep++;
    fieldsetInformation[currentStep].classList.remove('display-none');

    currentStepMenu++;   //Aquí hago que se cambie el color del botón seleccionado
    for(var p = 0; p < allButtonsNavigation.length; p++) {
      allButtonsNavigation[p].classList.remove('active');
      allButtonsNavigation[currentStepMenu].classList.add('active');
    }

  }


  //FIN MENÚ NAVEGACIÓN POR PESTAÑAS


  /* ===============================
  IMPRIMIR DATOS PERSONALES EN CV
  ================================= */
  //VARIABLES

  function displaySelect () {
    var allSelects = document.querySelectorAll('.select-date');
    var writeDate = document.querySelectorAll('.write-date');
    for(var i = 0; i < allSelects.length; i++) { //Leerlos
      var select = allSelects[i];
      var dateDisplay = writeDate[i];
      var value = select.options[select.selectedIndex].value; //de las opciones del select quiero que me des el valor de aquellas que esta seleccionada
      writeDate[i].textContent = value;
    }
  }


  function dateStartDisplay(className){
    var dayStart = document.querySelector('input.' + className);
    document.querySelector('.cv-' + className).textContent= dayStart.value;
  }

  function dateEndDisplay(className){
    var dayEnd = document.querySelector('input.' + className);
    document.querySelector('.cv-' + className).textContent= dayEnd.value;

  }

  function userAnswer(className) {
    var inputAnswer = document.querySelector('input.'+ className);
    document.querySelector('.cv-' + className).textContent = inputAnswer.value;
  }

  function textAreaAnswer (className) {
    var textAnswer = document.querySelector('textarea.'+ className);
    document.querySelector('.cv-' + className).textContent = textAnswer.value;
  }

  var buttonContinue = document.querySelector('.buttonContinue');
  buttonContinue.addEventListener('click', function(){
    //DATOS GENERALES
    userAnswer('firstname');
    userAnswer('profession');
    userAnswer('residence');
    userAnswer('email');
    userAnswer('telephone');
    userAnswer('social');
    userAnswer('personal-website');
    textAreaAnswer('personal-description');

    //EDUCACIÓN 1
    userAnswer('title-education');
    userAnswer('center-education');
    dateStartDisplay('date-start-education');
    dateEndDisplay('date-end-education');
    //EDUCACIÓN 2
    userAnswer('title-education1');
    userAnswer('center-education1');
    dateStartDisplay('date-start-education1');
    dateEndDisplay('date-end-education1');


    //PROYECTO 1
    userAnswer('name-project');
    userAnswer('company-project');
    textAreaAnswer('description-project');
    displaySelect();

    //PROYECTO 2
    userAnswer('name-project1');
    userAnswer('company-project1');
    textAreaAnswer('description-project1');
    displaySelect();


    //EXPERIENCIA 1
    userAnswer('name-company');
    userAnswer('name-position');
    dateStartDisplay('date-start-experience');
    dateEndDisplay('date-end-experience');
    textAreaAnswer('description-experience');

    //EXPERIENCIA 2
    userAnswer('name-company1');
    userAnswer('name-position1');
    dateStartDisplay('date-start-experience1');
    dateEndDisplay('date-end-experience1');
    textAreaAnswer('description-experience1');
  });

  /* ===============================
  ACORDEON
  ================================= */

  var newField = document.querySelectorAll ('.addfield');
  var openInput = document.querySelectorAll ('.drop-down');
  var saveButton = document.querySelectorAll ('.buttonSave');
  var mainValue = document.querySelectorAll ('.main-value');
  var textAdd = document.querySelectorAll ('.textadd');

  function acordeon (event){
    var newFieldId = event.currentTarget.getAttribute('data-id');
    openInput[newFieldId].classList.toggle('hidden');
    saveButton[newFieldId].classList.toggle ('hidden');
  }

  for (var i = 0; i < newField.length; i++) {
    newField[i].addEventListener('click', acordeon);
    saveButton[i].addEventListener('click', acordeon);
  }

  function saveMain (event) {
    var iDen = event.currentTarget.getAttribute('data-id');
    textAdd[iDen].innerHTML =  mainValue[iDen].value;
  }

  for (var i = 0; i <saveButton.length; i++) {
    saveButton[i].addEventListener('click', saveMain);
  }

  /* ===============================
  FIN ACORDEON
  ================================= */


  /* ===============================
  Botón previsualizar
  ================================= */

  var sectionForm = document.querySelector('#section-form');
  var sectionCV = document.querySelector('.cv-content');
  var buttonPreview = document.querySelector('.button-CV');

  buttonPreview.addEventListener('click', toogleClass);

  function toogleClass() {
    sectionForm.classList.toggle('display-none');
    if (sectionCV.style.display !== 'block') {
      sectionCV.style.display = 'block'
    } else {
      sectionCV.style.display = 'none'
    }
  };


  /* ===============================
  Fin Botón previsualizar
  ================================= */

  /* ===============================
  Eliminar Elementos
  ================================= */

  var listamarginbottom = document.querySelectorAll(".esconder");
  var educacionNodes = document.querySelectorAll(".caja-educacion");
  var projectsNodes = document.querySelectorAll(".caja-proyectos");
  var experienceNodes = document.querySelectorAll(".caja-experiencia");
  var educacionNodes = document.querySelectorAll(".caja-educacion");
  var eliminarElemento = document.querySelectorAll(".papelera");
  var removeProject = document.querySelectorAll(".papelerauno");
  var removeExperience = document.querySelectorAll(".papelerados");
  var arrowDownFirstElement = document.querySelector("#arrowDownFirstElement");
  var arrowDownSecondElement = document.querySelector("#arrowDownSecondElement");
  var arrowUpFirstElement = document.querySelector("#arrowUpFirstElement");
  var arrowUpSecondElement = document.querySelector("#arrowUpSecondElement");
  var firstEducationBox= document.querySelector("#firstEducationBox");
  var secondEducationBox= document.querySelector("#secondEducationBox");

  function borrarEducacion(event) {
    event.currentTarget.closest('.caja-educacion').remove();
    var removeId = event.currentTarget.getAttribute('data-id');
    listamarginbottom[removeId].classList.add('hidden');
  };

  function borrarProyecto(event) {
    event.currentTarget.closest('.caja-proyectos').remove();
  };

  function borrarExperiencia(event) {
    event.currentTarget.closest('.caja-experiencia').remove();
  };

  for (var i = 0; i < educacionNodes.length; i++) {
    eliminarElemento[i].addEventListener ('click',borrarEducacion);
  }

  for (var i = 0; i < projectsNodes.length; i++) {
    removeProject[i].addEventListener ('click',borrarProyecto);
  }

  for (var i = 0; i < experienceNodes.length; i++) {
    removeExperience[i].addEventListener ('click',borrarExperiencia);
  }

  /* ===============================
  Eliminar Elementos
  ================================= */

  //Mover flechas en Formación
  var a = document.querySelector('.formacionuno');
  var b = document.querySelector('.formaciondos')
  var contenedorEducacion = document.querySelector ('.education')
  var firstEducation = a.innerHTML
  var secondEducation = b.innerHTML

  arrowDownFirstElement.addEventListener('click',function () {
    firstEducation = a.innerHTML
    secondEducation = b.innerHTML
    contenedorEducacion.innerHTML = secondEducation + firstEducation;
    if(firstEducationBox.nextElementSibling)
    firstEducationBox.parentNode.insertBefore(firstEducationBox.nextElementSibling, firstEducationBox);
  });

  arrowDownSecondElement.addEventListener('click',function () {
    firstEducation = a.innerHTML
    secondEducation = b.innerHTML
    contenedorEducacion.innerHTML = firstEducation + secondEducation;
    if(secondEducationBox.nextElementSibling)
    secondEducationBox.parentNode.insertBefore(secondEducationBox.nextElementSibling,secondEducationBox);
  });

  arrowUpFirstElement.addEventListener('click',function () {
    firstEducation = a.innerHTML
    secondEducation = b.innerHTML
    contenedorEducacion.innerHTML = firstEducation + secondEducation;
    if(firstEducationBox.previousElementSibling)
    firstEducationBox.parentNode.insertBefore( firstEducationBox,firstEducationBox.previousElementSibling);
  });

  arrowUpSecondElement.addEventListener('click',function () {
    firstEducation = a.innerHTML
    secondEducation = b.innerHTML
    contenedorEducacion.innerHTML = secondEducation + firstEducation;
    if(secondEducationBox.previousElementSibling)
    secondEducationBox.parentNode.insertBefore(secondEducationBox,secondEducationBox.previousElementSibling);
  });

  //Mover flechas en Proyectos

  var arrowUpFirstProject = document.querySelector(".arrowUpFirstProject");
  var arrowDownFirstProject = document.querySelector(".arrowDownFirstProject");
  var arrowUpSecondProject = document.querySelector(".arrowUpSecondProject");
  var arrowDownSecondProject = document.querySelector(".arrowDownSecondProject");
  var firstProyectBox= document.querySelector("#firstProyectBox");
  var secondProyectBox= document.querySelector("#secondProyectBox");

  arrowDownFirstProject.addEventListener('click',function () {
    if(firstProyectBox.nextElementSibling)
    firstProyectBox.parentNode.insertBefore(firstProyectBox.nextElementSibling, firstProyectBox);
  });

  arrowDownSecondProject.addEventListener('click',function () {
    if(secondProyectBox.nextElementSibling)
    secondProyectBox.parentNode.insertBefore(secondProyectBox.nextElementSibling,secondProyectBox);
  });

  arrowUpFirstProject.addEventListener('click',function () {
    if(firstProyectBox.previousElementSibling)
    firstProyectBox.parentNode.insertBefore( firstProyectBox,firstProyectBox.previousElementSibling);
  });

  arrowUpSecondProject.addEventListener('click',function () {
    if(secondEducationBox.previousElementSibling)
    secondProyectBox.parentNode.insertBefore(secondProyectBox,secondProyectBox.previousElementSibling);
  });

  //Mover flechas en Experiencia Laboral

  var arrowUpFirstExperience = document.querySelector(".arrowUpFirstExperience");
  var arrowDownFirstExperience = document.querySelector(".arrowDownFirstExperience");
  var arrowUpSecondExperience = document.querySelector(".arrowUpSecondExperience");
  var arrowDownSecondExperience = document.querySelector(".arrowDownSecondExperience");
  var firstExperienceBox= document.querySelector("#firstExperienceBox");
  var secondExperienceBox= document.querySelector("#secondExperienceBox");

  arrowDownFirstExperience.addEventListener('click',function () {
    if(firstExperienceBox.nextElementSibling)
    firstExperienceBox.parentNode.insertBefore(firstExperienceBox.nextElementSibling, firstExperienceBox);
  });

  arrowDownSecondExperience.addEventListener('click',function () {
    if(secondExperienceBox.nextElementSibling)
    secondExperienceBox.parentNode.insertBefore(secondExperienceBox.nextElementSibling,secondExperienceBox);
  });

  arrowUpFirstExperience.addEventListener('click',function () {
    if(firstExperienceBox.previousElementSibling)
    firstExperienceBox.parentNode.insertBefore( firstExperienceBox,firstExperienceBox.previousElementSibling);
  });

  arrowUpSecondExperience.addEventListener('click',function () {
    if(secondExperienceBox.previousElementSibling)
    secondExperienceBox.parentNode.insertBefore(secondExperienceBox,secondExperienceBox.previousElementSibling);
  });

  /* ===============================
  Fin flechas
  ================================= */


  /* ===============================
  Imprimir
  ================================= */
  // var buttonprint = document.querySelector('.buttonPrint');
  // function printlistener() {
  //   var printpdf = document.querySelector('.print-cv')
  //   printpdf.style.display = "block";
  //   var transform = printpdf.innerHTML;
  //   var transformPdf = document.body.innerHTML;
  //   document.body.innerHTML= transform;
  //   window.print();
  //   document.body.innerHTML=transformPdf;
  // }
  //
  // window.onafterprint = function(){
  //   window.location.reload(true);
  // };
  //
  // buttonprint.addEventListener('click',printlistener);

  /* ===============================
  Fin imprimir
  ================================= */

  /* ===============================
  Pestañas de navegación, elemento seleccionado
  ================================= */

  var allButtonsNavigation = document.querySelectorAll('.main-nav-button');

  function showSelectedButton(event) {
    for(var i= 0; i< allButtonsNavigation.length;i++){
      allButtonsNavigation[i].classList.remove('active');
      if (allButtonsNavigation[i] != allButtonsNavigation.currentTarget) {
        event.currentTarget.classList.add('active')
      }
    }
  }

  /* ===============================
  Fin Pestañas de navegación, elemento seleccionado
  ================================= */
  // cambia el color del fondo en el nav.
  for (var j= 0; j < allButtonsNavigation.length; j++) {
    allButtonsNavigation[j].addEventListener('click', showSelectedButton);
  }
}

export default legacyCode;
