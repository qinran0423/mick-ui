"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
// 创建组件类型声明文件模板
function genTypesTemplete(name) {
    var propsTypeName = "".concat((0, utils_1.upperFirst)(name), "Props");
    var propsName = "".concat(name, "Props");
    return "\nimport { PropType, ExtractPropTypes } from 'vue'\n\nexport const ".concat(propsName, " = {} as const\nexport type ").concat(propsTypeName, " = ExtractPropTypes<typeof  ").concat(propsName, ">\n");
}
exports["default"] = genTypesTemplete;
