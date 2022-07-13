"use strict";
// 创建组件核心文件模板
exports.__esModule = true;
var utils_1 = require("./utils");
function genCoreTemplete(name) {
    var className = "s-".concat(name);
    var compName = "S".concat((0, utils_1.upperFirst)(name));
    var propsTypeName = "".concat((0, utils_1.upperFirst)(name), "Props");
    var propsName = "".concat(name, "Props");
    var propsFileName = "".concat(name, "-type");
    return "\nimport { defineComponent, toRefs } from 'vue'\nimport { ".concat(propsTypeName, ", ").concat(propsName, " } from './").concat(propsFileName, "'\n\nexport default defineComponent({\n  name: '").concat(compName, "',\n  props: ").concat(propsName, " ,\n  setup(props: ").concat(propsTypeName, ") {\n    return () => {\n      return (\n        <div class=\"").concat(className, "\"></div>\n      )\n    }\n  }\n})\n");
}
exports["default"] = genCoreTemplete;
