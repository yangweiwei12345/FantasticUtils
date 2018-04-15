(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.GmUtils = {})));
}(this, (function (exports) { 'use strict';

  /**
   * 获取mix的类型
   * @param {*} mix
   */
  function getTypes(mix) {
    var typeStr = Object.prototype.toString.apply(mix);
    var nativeType = typeStr.slice(8, typeStr.length - 1);
    return nativeType;
  }

  var baseType = ['String', 'Number'];

  function empty(mix) {
    var type = getTypes(mix);
    if (baseType.indexOf(type) !== -1) {
      return !!mix;
    }
    if (mix instanceof Array) {
      return !!mix.length;
    }
    if (mix instanceof Object) {
      return !!Object.keys(mix).length;
    }
    return false;
  }

  /**
   * todo:
   * 1. 支持普通调用
   * 2. 支持vue插件
   * 3. 支持react
   * 4. 支持浏览器环境
   */

  exports.empty = empty;

  Object.defineProperty(exports, '__esModule', { value: true });

})));