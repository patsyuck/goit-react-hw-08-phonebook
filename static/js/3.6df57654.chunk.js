(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n(9),o=n(18),c=n(7),u=n(2),s=n(22),d=n(23),l=n(25),f=n(24),h=new Uint8Array(16);function b(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(h)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"===typeof e&&p.test(e)},j=[],O=0;O<256;++O)j.push((O+256).toString(16).substr(1));var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(j[e[t+0]]+j[e[t+1]]+j[e[t+2]]+j[e[t+3]]+"-"+j[e[t+4]]+j[e[t+5]]+"-"+j[e[t+6]]+j[e[t+7]]+"-"+j[e[t+8]]+j[e[t+9]]+"-"+j[e[t+10]]+j[e[t+11]]+j[e[t+12]]+j[e[t+13]]+j[e[t+14]]+j[e[t+15]]).toLowerCase();if(!m(n))throw TypeError("Stringified UUID is invalid");return n};var v=function(e,t,n){var r=(e=e||{}).random||(e.rng||b)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return g(r)},C=(n(101),n(1)),y={name:"",number:""},x=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state=Object(u.a)(Object(u.a)({},y),{},{toggler:e.props.isFetching}),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(c.a)({},r,a))},e.reset=function(){e.setState(Object(u.a)({},y))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,r=n.name,a=n.number;if(""===r||""===a)alert("Name and Number are required fields!");else if(e.props.friends.some((function(e){return e.name.toLowerCase()===r.toLowerCase()}))){var i=e.props.friends.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})).id;if(confirm("".concat(r," is already in contacts! Do you want to update the exist contact?"))){var o={name:r,number:a};e.props.handlerUpdate(i,o)}else alert("The contact was left unchanged.")}else{var c={id:v(),name:r,number:a};e.props.handlerSubmit(c)}e.reset()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,r=e.toggler;return Object(C.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(C.jsxs)("label",{children:["Name",Object(C.jsx)("input",{name:"name",value:t,onChange:this.handleChange})]}),Object(C.jsxs)("label",{children:["Number",Object(C.jsx)("input",{name:"number",value:n,onChange:this.handleChange})]}),Object(C.jsx)("button",{type:"submit",disabled:r,children:"Add contact"})]})}}]),n}(a.Component),w=(n(102),function(e){var t=e.filter,n=e.onChange;return Object(C.jsx)("div",{className:"filter",children:Object(C.jsxs)("label",{children:["Find contacts by name",Object(C.jsx)("input",{value:t,onChange:n})]})})}),k=(n(103),function(e){var t=e.id,n=e.name,r=e.number,a=e.onClick;return Object(C.jsxs)("li",{className:"item",children:[n,": ",r,Object(C.jsx)("button",{onClick:function(){a(t)},children:"Delete"})]})}),S=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"render",value:function(){var e=this;return Object(C.jsx)("ul",{children:this.props.friends.filter((function(t){return t.name.toLowerCase().indexOf(e.props.filter.toLowerCase())>=0})).map((function(t){return Object(C.jsx)(k,{id:t.id,name:t.name,number:t.number,onClick:e.props.onClick},t.id)}))})}}]),n}(a.Component),D=function(e){return e.persistedReducer.contacts},R=function(e){return e.persistedReducer.filter},L=function(e){return e.persistedReducer.isFetching};t.default=Object(i.b)((function(e){return{friends:D(e),filter:R(e),isFetching:L(e)}}),(function(e){return{handleData:function(){return e(Object(o.h)())},handleInput:function(t){return e(Object(o.g)(t))},handleSubmit:function(t){return e(Object(o.k)(t))},handleUpdate:function(t,n){return e(Object(o.j)(t,n))},handleDelete:function(t){return e(Object(o.c)(t))}}}))((function(e){var t=e.friends,n=e.filter,r=e.isFetching,a=e.handleData,i=e.handleInput,o=e.handleSubmit,c=e.handleUpdate,u=e.handleDelete;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(x,{friends:t,handlerSubmit:o,isFetching:r,handlerUpdate:c}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(w,{filter:n,onChange:i}),Object(C.jsx)(S,{friends:t,filter:n,onClick:u,onMount:a})]})}))}}]);
//# sourceMappingURL=3.6df57654.chunk.js.map