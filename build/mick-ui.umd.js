(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["mick-ui"]={},e.Vue))})(this,function(e,t){"use strict";const s={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1}};var u=t.defineComponent({name:"SButton",props:s,setup(n,{slots:o}){const{type:d,size:f,disabled:r,block:c}=t.toRefs(n),p=c.value?"s-btn--block":"";return()=>t.createVNode("button",{disabled:r.value,class:`s-btn s-btn--${d.value} s-btn--${f.value} ${p}`},[o.default?o.default():"\u6309\u94AE"])}}),l={install(n){n.component(u.name,u)}};const a=[l];var i={install(n){a.forEach(o=>n.use(o))}};e.Button=u,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});