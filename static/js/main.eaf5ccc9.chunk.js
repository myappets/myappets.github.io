(this["webpackJsonpmy-appets-wepapp"]=this["webpackJsonpmy-appets-wepapp"]||[]).push([[0],{110:function(e,s,t){"use strict";t.r(s);var r=t(0),a=t.n(r),o=t(24),n=t.n(o),c=(t(82),t(42)),i=t(8),d=(t(83),t(3));var j=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"My Appets app"})})},l=t(43),p=t.n(l),h=t(61),u=t(37),b=t(33),w=t(34),O=t(133),x=t(127),v=t(136),f=t(137),m=t(128),g=t(129),y=t(130),P=t(46),C=t.n(P),A=t(47),E=t.n(A),M=t(134),S=t(131),k=t(62),D=t.n(k),F={resetPasswordAPI:"https://api.myappets.ga/auth/reset-password"};var I=function(){var e=new URLSearchParams(Object(i.f)().search),s=Object(r.useState)({code:e.get("code"),password:"",passwordConfirmation:"",showPassword:!1}),t=Object(w.a)(s,2),a=t[0],o=t[1],n=Object(r.useState)(!1),c=Object(w.a)(n,2),j=c[0],l=c[1],P=Object(r.useState)(!1),A=Object(w.a)(P,2),k=A[0],I=A[1],R=Object(r.useState)({showError:!1,errorMessage:""}),N=Object(w.a)(R,2),L=N[0],T=N[1],_=function(e){var s=e.target;o(Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},s.id,s.value)))},B=function(){o(Object(b.a)(Object(b.a)({},a),{},{showPassword:!a.showPassword}))},J=function(e){e.preventDefault()},W=function(){var e=Object(h.a)(p.a.mark((function e(){var s,t,r,o,n,c,i,d,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post(F.resetPasswordAPI,a);case 3:200===e.sent.status?I(!0):T({showError:!0,errorMessage:"An error ocurred"}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),j="Auth.form.error.code.provide"===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s||null===(t=s.data)||void 0===t||null===(r=t.data[0])||void 0===r||null===(o=r.messages[0])||void 0===o?void 0:o.id)?"Code EXPIRED or it's INCORRECT.":null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(c=n.data)||void 0===c||null===(i=c.data[0])||void 0===i||null===(d=i.messages[0])||void 0===d?void 0:d.message,T({showError:!0,errorMessage:j||"An error ocurred"}),l(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"myappets__reset-pass reset-pass",children:[Object(d.jsx)("h2",{children:"My Appets, Reset Password"}),Object(d.jsxs)("div",{className:"reset-pass__cont",children:[!k&&Object(d.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),void(a.code?(l(!0),T({showError:!1}),W()):T({showError:!0,errorMessage:"There is not code provided."}))},noValidate:!0,autoComplete:"off",children:[Object(d.jsx)(O.a,{py:1,children:Object(d.jsxs)(x.a,{fullWidth:!0,children:[Object(d.jsx)(v.a,{htmlFor:"password",children:"Password: (min-length: 6 characters)"}),Object(d.jsx)(f.a,{id:"password",type:a.showPassword?"text":"password",onChange:function(e){return _(e)},endAdornment:Object(d.jsx)(m.a,{position:"end",children:Object(d.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:B,onMouseDown:J,children:a.showPassword?Object(d.jsx)(C.a,{}):Object(d.jsx)(E.a,{})})})})]})}),Object(d.jsx)(O.a,{py:1,children:Object(d.jsxs)(x.a,{fullWidth:!0,children:[Object(d.jsx)(v.a,{htmlFor:"passwordConfirmation",children:"Confirm Password:"}),Object(d.jsx)(f.a,{id:"passwordConfirmation",type:a.showPassword?"text":"password",onChange:function(e){return _(e)},endAdornment:Object(d.jsx)(m.a,{position:"end",children:Object(d.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:B,onMouseDown:J,children:a.showPassword?Object(d.jsx)(C.a,{}):Object(d.jsx)(E.a,{})})})})]})}),Object(d.jsx)(O.a,{py:1,children:Object(d.jsx)(y.a,{type:"submit",variant:"contained",color:"secondary",disabled:j||!a.password||!a.passwordConfirmation||a.password!==a.passwordConfirmation||a.password.length<6||a.passwordConfirmation.length<6,children:j?"Loading":"Reset Password"})}),L.showError&&Object(d.jsx)(M.a,{severity:"error",children:L.errorMessage})]}),k&&Object(d.jsxs)(M.a,{severity:"success",children:[Object(d.jsxs)(S.a,{children:["Your password was changed ",Object(d.jsx)("strong",{children:"correctly"})]}),"Now you can log in in the app with your new password"]})]})]})};var R=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(c.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/reset-password",children:Object(d.jsx)(I,{})}),Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(j,{})})]})})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,139)).then((function(s){var t=s.getCLS,r=s.getFID,a=s.getFCP,o=s.getLCP,n=s.getTTFB;t(e),r(e),a(e),o(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),N()},82:function(e,s,t){},83:function(e,s,t){}},[[110,1,2]]]);
//# sourceMappingURL=main.eaf5ccc9.chunk.js.map