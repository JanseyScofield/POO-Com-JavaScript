class Button {
    constructor(label, color) {
      this.label = label;
      this.color = color;
    }
    click() {
      console.log(`Tipo: ${this.label}. Clicaram no botão!`);
    }
  }
const saveButton = new Button('Save', 'blue');
saveButton.click();