(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(9),n=c.n(r),s=(c(14),c(15),c(3)),i=c(7),l=c(8),o=c(2),d=c.n(o),u=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],m=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=j.find((function(t){return t.id===e.categoryId})),c=u.find((function(e){return e.id===t.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{category:t,user:c})})),h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),l=Object(s.a)(n,2),o=l[0],h=l[1],f=Object(a.useState)([]),x=Object(s.a)(f,2),O=x[0],p=x[1],g=Object(a.useState)(""),y=Object(s.a)(g,2),N=y[0],w=y[1],I=Object(a.useState)(""),C=Object(s.a)(I,2),k=C[0],v=C[1],S=function(e,t){var c=t.userFilter,a=t.nameFilter,r=t.categorieFilters,n=t.columnSorter,s=t.sortDirection,l=Object(i.a)(e);return c&&(l=l.filter((function(e){return e.user.id===c}))),a.trim()&&(l=l.filter((function(e){return e.name.trim().toLowerCase().includes(a.trim().toLowerCase())}))),r.length&&(l=l.filter((function(e){return r.includes(e.categoryId)}))),n&&l.sort((function(e,t){switch(n){case"ID":return e.id-t.id;case"Product":return e.name.localeCompare(t.name);case"Category":return e.category.title.localeCompare(t.category.title);case"Owner":return e.user.name.localeCompare(t.user.name);default:return 0}})),"desc"===s&&l.reverse(),l}(b,{userFilter:c,nameFilter:o,categorieFilters:O,columnSorter:N,sortDirection:k});return Object(m.jsx)("div",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"Product Categories"}),Object(m.jsx)("div",{className:"block",children:Object(m.jsxs)("nav",{className:"panel",children:[Object(m.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(m.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(m.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return r("")},className:d()({"is-active":""===c}),children:"All"}),u.map((function(e){return Object(m.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:d()({"is-active":c===e.id}),onClick:function(){return r(e.id)},children:e.name},e.id)}))]}),Object(m.jsx)("div",{className:"panel-block",children:Object(m.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:o,onChange:function(e){return h(e.target.value)}}),Object(m.jsx)("span",{className:"icon is-left",children:Object(m.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),o&&Object(m.jsx)("span",{className:"icon is-right",children:Object(m.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return h("")}})})]})}),Object(m.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(m.jsx)("a",{href:"#/","data-cy":"AllCategories",className:d()("button mr-2 my-1 is-success",{"is-outlined":O.length}),onClick:function(){return p([])},children:"All"}),j.map((function(e){return Object(m.jsx)("a",{"data-cy":"Category",href:"#/",className:d()("button mr-2 my-1",{"is-info":O.includes(e.id)}),onClick:function(){p((function(t){return t.includes(e.id)?t.filter((function(t){return t!==e.id})):[].concat(Object(i.a)(t),[e.id])}))},children:e.title},e.id)}))]}),Object(m.jsx)("div",{className:"panel-block",children:Object(m.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){r(""),h(""),p([])},children:"Reset all filters"})})]})}),Object(m.jsx)("div",{className:"box table-container",children:S.length?Object(m.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:["ID","Product","Category","Owner"].map((function(e){return Object(m.jsx)("th",{children:Object(m.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(m.jsx)("a",{href:"#/",onClick:function(){var t=e!==N?"":k;w(e),""===t?v("asc"):"asc"===t?v("desc"):(w(""),v(""))},children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{"data-cy":"SortIcon",className:d()("fas",{"fa-sort-up":N===e&&"asc"===k,"fa-sort-down":N===e&&"desc"===k,"fa-sort":N!==e})})})})]})},e)}))})}),Object(m.jsx)("tbody",{children:S.map((function(e){return Object(m.jsxs)("tr",{"data-cy":"Product",children:[Object(m.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(m.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(m.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(m.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]}):Object(m.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8ec44974.chunk.js.map