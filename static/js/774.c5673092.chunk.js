"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{197:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return m},Mc:function(){return g},_k:function(){return s},uV:function(){return f}});var r=t(861),a=t(757),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org";var c="7f364168711f1cf5c7d114ad640a94cd";function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/trending/movie/day?api_key=".concat(c,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},620:function(n,e,t){t.d(e,{Z:function(){return k}});var r,a,i,o,c,s=t(689),u=t(168),p=t(444),l=t(87),g=p.ZP.div(r||(r=(0,u.Z)(["\n  max-width: 1200px;\n  padding: 20px 16px;\n  margin: 0 auto;\n"]))),d=p.ZP.ol(a||(a=(0,u.Z)(["\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  list-style: inside;\n"]))),f=p.ZP.li(i||(i=(0,u.Z)(["\n  max-width: 1100px;\n"]))),x=(0,p.ZP)(l.OL)(o||(o=(0,u.Z)(["\n  font-size: 16px;\n  padding-left: 8px;\n  color: black;\n  border-radius: 5px;\n  &:hover {\n    color: tomato;\n  }\n        \n"]))),m=t(48),h=t.n(m),b=(0,p.ZP)(h())(c||(c=(0,u.Z)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & .page-link {\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background-color: transparent;\n    outline: 0;\n    border: 0;\n    vertical-align: middle;\n    font-family: "Roboto","Helvetica","Arial",sans-serif;\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.43;\n    letter-spacing: 0.01071em;\n    border-radius: 4px;\n    text-align: center;\n    min-width: 32px;\n    height: 32px;\n    padding: 0 6px;\n    \n    color: rgba(0, 0, 0, 0.87);\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  }\n\n  & .page-item {\n    box-sizing: border-box;\n    min-width: 32px;\n    height: 32px;\n    margin: 0 3px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center; \n  }\n\n  & .page-item.active {\n    background-color: rgba(0, 0, 0, 0.08);\n    border-radius: 4px;\n  }\n& .page-item:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n\n& .page-item.disabled {\n  opacity: 0.38;\n  pointer-events: none;\n  cursor: default;\n\n}\n']))),v=t(184);function y(n){var e=n.onPageChange,t=n.pageCount;return(0,v.jsx)(b,{nextLabel:"next >",onPageChange:function(n){e(n.selected+1)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:t,previousLabel:"< previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})}var k=function(n){var e=n.movies,t=n.header,r=n.totalPages,a=n.changePage,i=(0,s.TH)();return(0,v.jsxs)(g,{children:[t&&(0,v.jsx)("h1",{children:t}),(0,v.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.title;return(0,v.jsx)(f,{children:(0,v.jsx)(x,{to:"/movies/".concat(e),state:{from:i},children:t})},e)}))}),r>1&&(0,v.jsx)(g,{children:(0,v.jsx)(y,{onPageChange:a,pageCount:r})})]})}},774:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,o,c=t(861),s=t(439),u=t(757),p=t.n(u),l=t(87),g=t(791),d=t(197),f=t(620),x=t(168),m=t(444),h=m.ZP.div(r||(r=(0,x.Z)(["\n  max-width: 1200px;\n  padding: 20px 16px 0;\n  margin: 0 auto;\n"]))),b=m.ZP.form(a||(a=(0,x.Z)(["\nposition: relative;\nwidth: 400px;\n"]))),v=m.ZP.input(i||(i=(0,x.Z)(["\n  box-sizing: border-box;\n  width: 280px;\n  height: 30px;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 16px;\n  outline-color: gray;\n\n  &:focus,\n  &:active {\n    outline-color: tomato;\n  }\n"]))),y=m.ZP.button(o||(o=(0,x.Z)(["\nposition: absolute;\nright: 8px;\n  box-sizing: border-box;\n  width: 100px;\n  height: 30px;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 2px solid tomato;\n\n  &:focus,\n  &:hover {\n    background-color: tomato;\n    color: white;\n  }\n"]))),k=t(184),Z=function(n){var e=n.onSubmit;return(0,k.jsx)(h,{children:(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;if(!t)return alert("Please, enter something");e(t),n.target.reset()},children:[(0,k.jsx)(v,{name:"query",type:"text"}),(0,k.jsx)(y,{type:"submit",children:"Search"})]})})},w=function(){var n=(0,l.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,g.useState)([]),i=(0,s.Z)(a,2),o=i[0],u=i[1],x=(0,g.useState)(1),m=(0,s.Z)(x,2),h=m[0],b=m[1],v=(0,g.useState)(0),y=(0,s.Z)(v,2),w=y[0],C=y[1];(0,g.useEffect)((function(){var n=t.get("query");function e(){return(e=(0,c.Z)(p().mark((function e(t){var r,a,i,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.E3)(n,t);case 3:if(r=e.sent,a=r.results,i=r.total_pages,0!==a.length){e.next=8;break}return e.abrupt("return",alert("No movie with such name"));case 8:o=a.map((function(n){return{id:n.id,title:n.title}})),u(o),C(i),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",alert("Something went wrong!"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}n&&function(n){e.apply(this,arguments)}(h)}),[t,h]);return(0,k.jsxs)("main",{children:[(0,k.jsx)(Z,{onSubmit:function(n){r({query:n})}}),0!==o.length&&(0,k.jsx)(f.Z,{movies:o,header:'Movies containing the query "'.concat(t.get("query"),'"'),changePage:function(n){b(n)},totalPages:w})]})}}}]);
//# sourceMappingURL=774.c5673092.chunk.js.map