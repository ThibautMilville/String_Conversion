class conversion {
  // Constructor
  constructor() {
    // Textareas
    this.inputTextarea = document.getElementById('input');
    this.outputTextarea = document.getElementById('output');
    // Buttons
    this.convertToUpperCasesButton = document.getElementById('convert-to-uppercases');
    this.convertToLowerCasesButton = document.getElementById('convert-to-lowercases');
    this.convertToCapitalizeButton = document.getElementById('convert-to-capitalize');
    this.clearTextareasButton = document.getElementById('clear');
  }

  // Initialisation
  init() {
    this.bindEvents();
  }


  // Convert to uppercases
  convertToUpperCases() {
    this.outputTextarea.value = this.inputTextarea.value.toUpperCase();
  }

  // Convert to lowercases
  convertToLowerCases() {
    this.outputTextarea.value = this.inputTextarea.value.toLowerCase();
  }

  // Convert to capitalize
  convertToCapitalize() {
    this.outputTextarea.value = this.inputTextarea.value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  // Clear textareas
  clearTextareas() {
    this.inputTextarea.value = '';
    this.outputTextarea.value = '';
  }


  // Bind events
  bindEvents() {
    // Convert to uppercases
    this.convertToUpperCasesButton.addEventListener('click', () => {
      this.convertToUpperCases();
    });
    // Convert to lowercases
    this.convertToLowerCasesButton.addEventListener('click', () => {
      this.convertToLowerCases();
    });
    // Convert to capitalize
    this.convertToCapitalizeButton.addEventListener('click', () => {
      this.convertToCapitalize();
    });
    // Clear textareas
    this.clearTextareasButton.addEventListener('click', () => {
      this.clearTextareas();
    });
  }
}

conversion = new conversion();
conversion.init();