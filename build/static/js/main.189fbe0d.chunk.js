(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),i=t(2),l=t(3),m=t.n(l),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n)},p=function(e){var n=e.filter,t=e.onChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.onSubmit,t=e.newName,a=e.newNumber,u=e.onChangeNewName,o=e.onChangeNewNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.persons,t=e.setPersons,a=e.filter;return n.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>-1})).map((function(e){return r.a.createElement(w,{key:e.name,person:e,onClick:(a=e,function(){window.confirm("Delete ".concat(a.name,"?"))&&b(a.id).then((function(){return t(n.filter((function(e){return e.id!==a.id})))}))})});var a}))},w=function(e){var n=e.person,t=e.onClick;return r.a.createElement("p",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},g=function(e){var n=e.message;if(null===n)return null;var t="successful"===n.type?"green":"red",a={border:"1px solid ".concat(t),borderRadius:".5rem",color:t,marginBottom:".5rem",padding:".5rem"};return r.a.createElement("div",{style:a},n.content)},C=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),m=l[0],s=l[1],b=Object(a.useState)(""),w=Object(i.a)(b,2),C=w[0],O=w[1],j=Object(a.useState)(""),N=Object(i.a)(j,2),k=N[0],y=N[1],S=Object(a.useState)(null),T=Object(i.a)(S,2),x=T[0],P=T[1];return Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:x}),r.a.createElement(p,{filter:k,onChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(v,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return m===e.name}));if(n){var a="".concat(m," is already added to phonebook, replace the old number with a new one?");if(window.confirm(a)){var r=Object(c.a)(Object(c.a)({},n),{},{number:C});h(n.id,r).then((function(){u(t.map((function(e){return e.id!==n.id?e:r}))),P({type:"successful",content:"The number of ".concat(m," is changed")}),setTimeout((function(){return P(null)}),2500)})).catch((function(e){P({type:"unsuccessful",content:"Information of ".concat(m," has already been removed from server")}),setTimeout((function(){return P(null)}),2500)})),s(""),O("")}}else{d({name:m,number:C}).then((function(e){u(t.concat(e)),P({type:"successful",content:"Added ".concat(m)}),setTimeout((function(){return P(null)}),2500),s(""),O("")}))}},newName:m,newNumber:C,onChangeNewName:function(e){s(e.target.value)},onChangeNewNumber:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:t,setPersons:u,filter:k}))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.189fbe0d.chunk.js.map