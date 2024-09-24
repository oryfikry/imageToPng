// Function to get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

var shotit = function () {
  const value = getUrlParameter("text");
  const width = getUrlParameter("width") || 390;
  let pTag = document.getElementsByTagName("p")[0];
  pTag.textContent = value;
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
    height: 70,
  });
};
