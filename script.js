class conversion {
  // Constructor
  constructor() {
    // Textareas
    this.inputTextarea = document.getElementById('input');
    this.outputTextarea = document.getElementById('output');
    // Buttons
    this.actionsButtons = document.querySelectorAll('div.buttons button');
    this.convertToUpperCasesButton = document.getElementById('convert-to-uppercases');
    this.convertToLowerCasesButton = document.getElementById('convert-to-lowercases');
    this.convertToCapitalizeButton = document.getElementById('convert-to-capitalize');
    this.clearTextareasButton = document.getElementById('clear');
    this.copyButton = document.getElementById('copy');
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

  // Show copy button
  showCopyButton(event) {
    if (event.target.id !== 'clear' && event.target.id !== '') {
      this.copyButton.style.display = 'block';
      // Manage the copy button position if there is the scrollbar and the appareil is not a mobile
      if (this.outputTextarea.scrollHeight > this.outputTextarea.clientHeight && window.innerWidth > 768) {
        this.copyButton.style.right = '1.5rem';
      } else {
        this.copyButton.style.right = '0.5rem';
      }
    } else {
      this.copyButton.style.display = 'none';
    }
  }

  // Copy to clipboard
  copyToClipboard() {
    this.outputTextarea.select();
    try {
      navigator.clipboard.writeText(this.outputTextarea.value);
      this.copyButton.innerHTML = 'Copied!';
      setTimeout(() => {
        this.copyButton.innerHTML = 'Copy';
      }, 2000);
    }
    catch (err) {
      console.log('Unable to copy');
    }
  }


  // Bind events
  bindEvents() {
    // Click on an action button
    this.actionsButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        switch (event.target.id) {
          case 'convert-to-uppercases':
            this.convertToUpperCases();
            break;
          case 'convert-to-lowercases':
            this.convertToLowerCases();
            break;
          case 'convert-to-capitalize':
            this.convertToCapitalize();
            break;
          case 'clear':
            this.clearTextareas();
            break;
        }
        // If the event is one of the action buttons except "clear", show the copy button
        this.showCopyButton(event);
      });
    });
    // Copy to clipboard
    this.copyButton.addEventListener('click', () => {
      this.copyToClipboard();
    });
  }
}

conversion = new conversion();
conversion.init();