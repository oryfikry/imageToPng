// Function to get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

var shotit = function () {
  const value = getUrlParameter("text");
  const width = getUrlParameter("width") || 390;
  const height = getUrlParameter("height") || 30;
  let pTag = document.getElementsByTagName("p")[0];
  pTag.style.color = 'white'
  pTag.textContent = value;
  pTag.style.fontSize = "24px";
  html2canvas(document.body, {
    onrendered: function (canvas) {
      document.body.appendChild(canvas);
      leCanvas = document.getElementsByTagName("canvas")[0];
      var imgData = leCanvas.toDataURL("image/png");

      var resultHtml = `
        <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="${imgData}"/>
    `;
      document.write(resultHtml);
    },
    width: width,
    height: height,
  });
};
