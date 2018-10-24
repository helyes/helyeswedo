export default class Navigator {

  constructor(el) {
    this.el = el
    this.addNavigationToChildrenButtons();
  }

  /* 
  Scrolls page to buttons textcontent on clicking on a button
  Add data-module="navigator" to buttons parents up on the dom tree

  Example:
  The below snippet will scroll page to #location if button clicked 

  <nav class="navigation nav-block primary-navigation nav-right" data-module="navigator">
					<ul>
						<li>
							<button>Location</button>
  
  */
 addNavigationToChildrenButtons() {
    const buttons = this.el.querySelectorAll('button')
    for (let entry of buttons) {
      $(entry).click(function () {
        // console.log("CLICKED " + entry.textContent)
        $('html, body').animate({
          scrollTop: $('#' + entry.textContent.toLowerCase()).offset().top
        }, 1000);
      });
    }
  }
}
