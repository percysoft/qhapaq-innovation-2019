const parse5 = require('parse5');

module.exports = function(currentFile) {
  function setSvgArr(arr, item) {
    let obj = {};
    for (let attr of item.attrs) {
      obj[attr.name] = attr.value;
    }
    arr.push({ name: item.nodeName, value: obj });
  }

  function getAttrData(objData, toSearch) {
    let obj = {};
    for (let element of objData) {
      if (toSearch.includes(element.name)) {
        obj[element.name] = element.value;
      }
    }
    return obj;
  }

  function getSvgData(objData, toSearch) {
    const arrSvgData = [];
    const getValues = (obj) => {
      if (obj.childNodes.length > 0) {
        for (let item of obj.childNodes) {
          if (toSearch.includes(item.nodeName)) {
            setSvgArr(arrSvgData, item);
          } else if (item.nodeName === 'g') {
            getValues(item);
          }
        }
      }
    };

    for (let item of objData) {
      if (toSearch.includes(item.nodeName)) {
        setSvgArr(arrSvgData, item);
      } else {
        getValues(item);
      }
    }
    return arrSvgData;
  }

  function generateMetadata(currentFile) {
    if (currentFile) {
      const svgParse = parse5.parseFragment(currentFile.svg);
      const svg = svgParse.childNodes[0];
      const attrData = getAttrData(svg.attrs, ['viewBox', 'width', 'height']);
      const arrPaths = getSvgData(svg.childNodes, ['path', 'circle']);

      return {
        viewBox: attrData.viewBox,
        width: '20',
        height: '20',
        svgData: arrPaths,
      };
    }
  }
  return generateMetadata(currentFile);
};
