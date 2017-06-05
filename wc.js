(function() {
  let template = ` <div class="container"><p>Initial value</p></div> `;
  class DateWidget extends HTMLElement {
    constructor() { super() } ;
    render(){
	const template2 = ` <div class="container"><p>${this.$theme}</p></div> `;
	return template2;		
    }    
    createdCallback() {
	 // Fires when an instance of the element is created.
      	console.log('wc created');
	this.$theme = 'no-theme';
	this.$shadowRoot = this.attachShadow({mode: "open"});
	this.$shadowRoot.innerHTML = this.render();
    };

    attachedCallback() {
    // Fires when an instance was inserted into the document.
	console.log('wc insert');
	 };

    attributeChangedCallback(attrName, oldVal, newVal) {
    // Fires when an attribute was added, removed, or updated.
      console.log('wc changed for attribute : ' + attrName);
	this.$theme = newVal;
	this.shadowRoot.innerHTML = this.render();

    };  
  }
  document.registerElement('date-widget', DateWidget);
})();
