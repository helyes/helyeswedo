export default class Portfolio {

  constructor(el) {
    this.el = el
    console.log('Portfolio - From the example module')
    this.addImageToTmSlides();
  }

  // Adds image to tm slides, path depends on body class
  // <img data-src="/images/portfolio/ebgames/feature-fs.jpg" data-retina src="/images/blank.png" alt=""/>
  addImageToTmSlides() {
    const sliderListElements = document.getElementsByClassName("tms-slide");
    if (sliderListElements.length !== 1) { 
      console.log('Only one tms-slide allowed in a portfolio site');
      return    
    }

    var el = sliderListElements[0];
    var imgNode = document.createElement("img");
    imgNode.setAttribute("data-src", "/images/portfolio/" + document.body.classList.item(0) + "/feature-fs.jpg");
    imgNode.setAttribute("src", "/images/blank.png");
    imgNode.setAttribute("data-retina", "");    
    el.appendChild(imgNode);
  }
}
