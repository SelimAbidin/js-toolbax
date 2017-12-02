

/**
 * if first parameter is undefined, it will return second parameter.
 * @param {*} value 
 * @param {*} def 
 * @return {*}
 */
function setDef(value, def) {
      return value !== undefined ? value : def;
}


/**
 * select DOM elements. 
 * If param starts with "#" it will select by ID and return DOM, if not found, it will return null
 * If param starts with "." it will select by Class name and return Array
 * @param {String} param 
 * @return {Array | DOM}
 */
function selector (param) {
      
      if(param !== undefined) {

            var d = document;
            if(param[0] === "#") {
                  return d.getElementById(param.substr(1, param.length - 1));
            } else if (param[0] === "."){
                  return d.getElementsByClassName(param.substr(1, param.length - 1));
            }

      } 
}


/**
 * React component's prop check and set default if prop property is undefined 
 * @param {Object} props React component props object
 * @param {String} propName prop name
 * @param {*} defValue
 * @return {*} 
 */
function propSetDef (props, propName, defValue) {
      
      if(props !== undefined && props.hasOwnProperty(propName)){
            return  props[propName] !== undefined ? props[propName] : defValue;  
      }
      return defValue;
}
      


/**
 * Document window / size
 * @return {Object} {x, y} 
 */
function getDocSize() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      return {x:w, y:h};
}

// /**
//  * URL param merging.
//  * example 
//  *  
//  * @param {String} url 
//  * @param {String} path 
//  */
// function mergeToURL(url, path) {
//       var ar = url.split('/').concat(path.split('/'));
//       console.log('ar', ar);
// }

/**
 * if value is undefined or null, second param will be defined
 * @param {*} param 
 * @param {*} defValue
 * @returns {*} returns param or default value
 */
function setDefault(param, defValue) {
      
      if(param === undefined || param === null) {
          return defValue  
      }

      return param
}

/**
 * checks if param is defined or not
 * @param {*} param 
 * @returns {boolean} returns false if undefined or null
 */
function isDefined (param) {
      if(param === undefined || param === null) {
          return false  
      }
      return true
}

/**
 * checks if param is defined or not and throw error if not defined
 * @param {*} param 
 */
function isDefinedError (param) {
      if(param === undefined || param === null) {
            definedError() 
      }
}

/**
 * throws error for undefined parameter or function
 */
function definedError(){
      throw new Error("Parameter or function is not defined")
}

/**
 * not implemented error
 */
function notImplemented(){
      throw new Error("Method is not implemented")
}

if(typeof exports === 'object' && typeof module === 'object')
{     
      module.exports.setDef = setDef;
      module.exports.selector = selector;
      module.exports.propSetDef = propSetDef;
      module.exports.getDocSize = getDocSize;
      module.exports.setDefault = setDefault;
      module.exports.isDefinedError = isDefinedError;
      module.exports.isDefined = isDefined;
      module.exports.notImplemented = notImplemented;

}





//export {setDef, selector, propSetDef, getDocSize}