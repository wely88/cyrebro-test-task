(this["webpackJsonpcyrebro-test-task"]=this["webpackJsonpcyrebro-test-task"]||[]).push([[0],{166:function(e,t,n){},168:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),s=n.n(r),i=n(14),o=n.n(i),l=n(45),u=n(60),d=n(110),j=(n(148),n(26)),b=n(35),O=n(223),f=n(224),h=n(111),v=n.n(h),m="SYSTEM",x="".concat(m,"/SET_ERROR"),p="".concat(m,"/SET_LOADING"),g=Object(f.a)(x),S=Object(f.a)(p),C="USERS",y="".concat(C,"/SET_USERS"),N="".concat(C,"/SET_FILTERED_USERS"),E=Object(f.a)(y),M=Object(f.a)(N),w=Object(O.a)((c={},Object(j.a)(c,y,(function(e,t){var n=t.payload;return Object(b.a)(Object(b.a)({},e),{},{users:n})})),Object(j.a)(c,N,(function(e,t){var n=t.payload;return Object(b.a)(Object(b.a)({},e),{},{filteredUsers:n})})),c),{users:[],filteredUsers:[]}),_=Object(O.a)((a={},Object(j.a)(a,x,(function(e,t){var n=t.payload;return Object(b.a)(Object(b.a)({},e),{},{error:n})})),Object(j.a)(a,p,(function(e,t){var n=t.payload;return Object(b.a)(Object(b.a)({},e),{},{loading:n})})),a),{error:!1,loading:!0}),T=Object(u.b)({users:w,system:_});var R=n(6),U=n(117),k=n(89),D=n(222),F=(n(166),n(11)),I=function(){return Object(F.jsxs)("div",{className:"loader",children:[Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{})]})},L=n(116),P=n.n(L),A=n(8),B=function(e){return e.users},J=Object(A.a)(B,(function(e){return e.users})),z=Object(A.a)(B,(function(e){return e.filteredUsers})),G=function(e){return e.system},H=Object(A.a)(G,(function(e){return e.error})),W=Object(A.a)(G,(function(e){return e.loading})),Y=(n(168),[{field:"id",headerName:"ID",flex:.4,disableColumnMenu:!0},{field:"name",headerName:"Name",flex:.8,disableColumnMenu:!0},{field:"username",headerName:"Username",flex:1,disableColumnMenu:!0},{field:"email",headerName:"E-mail",flex:1,disableColumnMenu:!0},{field:"phone",headerName:"Phone",flex:1,disableColumnMenu:!0},{field:"website",headerName:"Website",flex:1,disableColumnMenu:!0}]),q=function(){var e=Object(l.b)(),t=Object(l.c)(J),n=Object(l.c)(z),c=Object(l.c)(H),a=Object(l.c)(W),s=Object(r.useState)(!1),i=Object(R.a)(s,2),o=i[0],u=i[1];Object(r.useEffect)((function(){e((function(e){v.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e(E(t.data)),e(S(!1))})).catch((function(t){e(g(!0)),console.error(t)}))}))}),[e]);var d=function(t){var n;e((n=t,function(e,t){var c,a,r=t().users.users,s=n.sortModel.length?null===(c=n.sortModel[0])||void 0===c?void 0:c.field:"id",i="desc"===(null===(a=n.sortModel[0])||void 0===a?void 0:a.sort)?r.slice().sort((function(e,t){return t[s]>e[s]?1:e[s]>t[s]?-1:0})):r.slice().sort((function(e,t){return e[s]>t[s]?1:t[s]>e[s]?-1:0}));e(E(i))}))},j=function(t){var n;t.target.value.length?(e((n=t.target.value,function(e,t){if(n.length){var c=t().users.users,a=["name","username","email","phone","website"],r=c.filter((function(e){return Object.keys(e).some((function(t){return a.includes(t)?e[t].toLowerCase().includes(n.toLowerCase()):null}))}));e(M(r))}else e(M([]))})),u(!0)):u(!1)};return Object(F.jsx)(F.Fragment,{children:a?Object(F.jsx)("div",{className:"loader-wrapper",children:Object(F.jsx)(I,{})}):c?Object(F.jsx)("div",{className:"error-wrapper",children:"Something went wrong..."}):Object(F.jsxs)("div",{className:"table",children:[Object(F.jsx)("h2",{className:"table__header",children:"Table Data"}),Object(F.jsx)("div",{className:"table__search",children:Object(F.jsx)(k.a,{variant:"outlined",id:"search",name:"search",label:"Search",placeholder:"Type here...",InputProps:{startAdornment:Object(F.jsx)(D.a,{position:"start",children:Object(F.jsx)(P.a,{})})},onChange:function(e){return j(e)}})}),Object(F.jsx)("div",{className:"table__data",children:Object(F.jsx)(U.a,{rows:o?n:t,columns:Y,autoHeight:!0,sortingMode:"server",pageSize:5,disableSelectionOnClick:!0,disableDensitySelector:!0,disableColumnSelector:!0,disableColumnMenu:!0,onSortModelChange:function(e){return d(e)}})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},Q=(n(174),function(e){var t=[d.a],n=[u.a.apply(void 0,t)],c=u.c.apply(void 0,n);return Object(u.d)(T,e,c)}());o.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(l.a,{store:Q,children:Object(F.jsx)(q,{})})}),document.getElementById("root")),K()}},[[175,1,2]]]);
//# sourceMappingURL=main.15930784.chunk.js.map