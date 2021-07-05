(this["webpackJsonpmy-appets-wepapp"]=this["webpackJsonpmy-appets-wepapp"]||[]).push([[0],{110:function(e,t,o){"use strict";o.r(t);var i=o(0),r=o.n(i),n=o(24),a=o.n(n),s=o(42),c=o(8),l=(o(82),o(83),o(1));var d=function(){return Object(l.jsx)("div",{id:"wrapper",children:Object(l.jsxs)("section",{className:"intro",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"My Appets"}),Object(l.jsx)("p",{children:"Adopt a pet easily with our android app"}),Object(l.jsx)("ul",{className:"actions",children:Object(l.jsx)("li",{children:Object(l.jsxs)("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.myappets.apps",className:"arrow scrolly",rel:"noreferrer",children:["Download ",Object(l.jsx)("span",{className:"label",children:"Next"})]})})}),Object(l.jsx)("a",{target:"_blank",href:"/#/credits",children:"Images/icons credits"})]}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("span",{className:"image fill","data-position":"center",children:Object(l.jsx)("img",{src:"https://source.unsplash.com/XxWg2mKD3I0/1080x1200",alt:""})})})]})})},h=o(43),p=o.n(h),j=o(61),u=o(37),b=o(33),m=o(34),y=o(133),f=o(127),O=o(136),w=o(137),x=o(128),v=o(129),g=o(130),A=o(46),P=o.n(A),k=o(47),C=o.n(k),I=o(134),W=o(131),D=o(62),S=o.n(D),E={resetPasswordAPI:"https://api.myappets.ga/auth/reset-password"};var N=function(){var e=new URLSearchParams(Object(c.f)().search),t=Object(i.useState)({code:e.get("code"),password:"",passwordConfirmation:"",showPassword:!1}),o=Object(m.a)(t,2),r=o[0],n=o[1],a=Object(i.useState)(!1),s=Object(m.a)(a,2),d=s[0],h=s[1],A=Object(i.useState)(!1),k=Object(m.a)(A,2),D=k[0],N=k[1],T=Object(i.useState)({showError:!1,errorMessage:""}),Y=Object(m.a)(T,2),M=Y[0],q=Y[1],R=function(e){var t=e.target;n(Object(b.a)(Object(b.a)({},r),{},Object(u.a)({},t.id,t.value)))},U=function(){n(Object(b.a)(Object(b.a)({},r),{},{showPassword:!r.showPassword}))},_=function(e){e.preventDefault()},F=function(){var e=Object(j.a)(p.a.mark((function e(){var t,o,i,n,a,s,c,l,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post(E.resetPasswordAPI,r);case 3:200===e.sent.status?N(!0):q({showError:!0,errorMessage:"An error ocurred"}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),d="Auth.form.error.code.provide"===(null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t||null===(o=t.data)||void 0===o||null===(i=o.data[0])||void 0===i||null===(n=i.messages[0])||void 0===n?void 0:n.id)?"Code EXPIRED or it's INCORRECT.":null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(s=a.data)||void 0===s||null===(c=s.data[0])||void 0===c||null===(l=c.messages[0])||void 0===l?void 0:l.message,q({showError:!0,errorMessage:d||"An error ocurred"}),h(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"myappets__reset-pass reset-pass",children:[Object(l.jsx)("h2",{children:"My Appets, Reset Password"}),Object(l.jsxs)("div",{className:"reset-pass__cont",children:[!D&&Object(l.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),void(r.code?(h(!0),q({showError:!1}),F()):q({showError:!0,errorMessage:"There is not code provided."}))},noValidate:!0,autoComplete:"off",children:[Object(l.jsx)(y.a,{py:1,children:Object(l.jsxs)(f.a,{fullWidth:!0,children:[Object(l.jsx)(O.a,{htmlFor:"password",children:"Password: (min-length: 6 characters)"}),Object(l.jsx)(w.a,{id:"password",type:r.showPassword?"text":"password",onChange:function(e){return R(e)},endAdornment:Object(l.jsx)(x.a,{position:"end",children:Object(l.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:_,children:r.showPassword?Object(l.jsx)(P.a,{}):Object(l.jsx)(C.a,{})})})})]})}),Object(l.jsx)(y.a,{py:1,children:Object(l.jsxs)(f.a,{fullWidth:!0,children:[Object(l.jsx)(O.a,{htmlFor:"passwordConfirmation",children:"Confirm Password:"}),Object(l.jsx)(w.a,{id:"passwordConfirmation",type:r.showPassword?"text":"password",onChange:function(e){return R(e)},endAdornment:Object(l.jsx)(x.a,{position:"end",children:Object(l.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:_,children:r.showPassword?Object(l.jsx)(P.a,{}):Object(l.jsx)(C.a,{})})})})]})}),Object(l.jsx)(y.a,{py:1,children:Object(l.jsx)(g.a,{type:"submit",variant:"contained",color:"secondary",disabled:d||!r.password||!r.passwordConfirmation||r.password!==r.passwordConfirmation||r.password.length<6||r.passwordConfirmation.length<6,children:d?"Loading":"Reset Password"})}),M.showError&&Object(l.jsx)(I.a,{severity:"error",children:M.errorMessage})]}),D&&Object(l.jsxs)(I.a,{severity:"success",children:[Object(l.jsxs)(W.a,{children:["Your password was changed ",Object(l.jsx)("strong",{children:"correctly"})]}),"Now you can log in in the app with your new password"]})]})]})};function T(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"PRIVACY POLICY FOR MOBILE APPLICATIONS BUILD BY APPETS"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"This privacy policy governs your use of software like any kind of apps for mobile devices that were created by\xa0appets"}),Object(l.jsx)("h4",{children:"\xa0"}),Object(l.jsx)("h4",{children:"What information does the Application obtain and how is it used?"}),Object(l.jsx)("p",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"User Provided Information"}),"\xa0"]}),Object(l.jsx)("p",{children:"The Application obtains the information you provide when you download and register the Application.\xa0Registration with us is optional."}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("p",{children:"When you register with us and use the Application, you generally provide\xa0(a) your email, name, (b) information you provide us when you contact us for help; (c) information you enter into our system when using the Application, such as contact information and project management information."}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions. Also some user would be able to see the contact information provided for you on the apps."}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Automatically Collected Information"}),"\xa0"]}),Object(l.jsx)("p",{children:"In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.\xa0"}),Object(l.jsx)("p",{}),Object(l.jsx)("h4",{children:"\xa0"}),Object(l.jsx)("h4",{children:"Does the Application collect precise real time location information of the device?"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"The Applications do not collect precise information about the location of your mobile device. You only provide the name of your city if you wish only.\xa0"}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:"Do third parties see and/or have access to information obtained by the Application?"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"Yes. We will share your information with third parties only in the ways that are described in this privacy statement."}),Object(l.jsx)("p",{children:"We may disclose User Provided and Automatically Collected Information:"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("p",{children:"as required by law, such as to comply with a subpoena, or similar legal process;"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("p",{children:"when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a\xa0government request;"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("p",{children:"with our trusted services providers who work on our behalf, do not have an\xa0independent use of the information we disclose to them, and have agreed to adhere\xa0to the rules set forth in this privacy statement."})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)("p",{children:"if\xa0appets, adopt a pet\xa0is involved in a merger, acquisition, or sale of all or a\xa0portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information."})," "]}),Object(l.jsx)("li",{children:"to advertisers and third party advertising networks and analytics companies as described in the section below"})]}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:"Automatic Data Collection and Advertising"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"We may work with analytics companies to help us understand how the Application is being used, such as the frequency and duration of usage. We work with advertisers and third party advertising networks, who need to know how you interact with advertising provided in the Application which helps us keep the cost of the Application low. Advertisers and advertising networks use some of the information collected by the Application, including, but not limited to,\xa0the unique identification ID of your mobile device.\xa0To protect the anonymity of this information, we use\xa0an encryption technology to help ensure that these third parties can\u2019t identify you personally. These third parties may also obtain anonymous information about other applications you\u2019ve downloaded to your mobile device, the mobile websites you visit, your non-precise location information (e.g., your zip code), and other non- precise location information in order to help analyze and serve anonymous targeted advertising on the Application and elsewhere.\xa0We may also share encrypted versions of information you have provided in order to enable our partners to append other available information about you for analysis or advertising related use.\xa0"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"If you\u2019d like to opt-out from third party use of this type of information to help serve targeted advertising, please visit the section entitled \u201cOpt-out\u201d below.\xa0"}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:"What are my opt-out rights?"}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"There are multiple opt-out options for users of this Application: \xa0 \xa0"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("u",{children:"Opt-out of all information collection by uninstalling the Application:\xa0"}),"You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at contact@gl0bal.ga."]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("u",{children:"Opt-out from the use of information to serve targeted advertising by advertisers and/or third party network advertisers:"})," ","you may at any time opt-out from further allowing us to have access to your location data by describe\xa0how user can manage their location preferences either from the app or device level.\xa0"]}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:Object(l.jsx)("strong",{children:"Data Retention Policy, Managing Your Information"})}),Object(l.jsx)("p",{children:"We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months\xa0and thereafter may store it in aggregate. If you\u2019d like us to delete User Provided Data that you have provided via the Application, please contact us at\xa0contact@gl0bal.ga\xa0and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly."}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:Object(l.jsx)("strong",{children:"Children"})}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at\xa0contact@gl0bal.ga. We will delete such information from our files within a reasonable time."}),Object(l.jsx)("h4",{children:"\xa0"}),Object(l.jsx)("h4",{children:Object(l.jsx)("strong",{children:"Security"})}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches."}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:Object(l.jsx)("strong",{children:"Changes"})}),Object(l.jsx)("p",{children:"This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy\xa0here\xa0and\xa0informing you via email or text message. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. You can check the history of this policy by clicking here."}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:Object(l.jsx)("strong",{children:"Your Consent"})}),Object(l.jsx)("p",{children:'By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,\u201d means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States\xa0your information will be transferred, processed and stored there under United States\xa0privacy standards.\xa0'}),Object(l.jsx)("p",{children:"\xa0"}),Object(l.jsx)("h4",{children:"Contact us"}),Object(l.jsx)("p",{children:"If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at\xa0contact@gl0bal.ga."})]})}function Y(){return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Pets Heart -"," ",Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:"https://www.freepik.com/free-photos-vectors/heart",children:"Heart vector created by catalyststuff - www.freepik.com"})]}),Object(l.jsxs)("li",{children:["Pets Smiling -"," ",Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:"https://www.freepik.com/free-photos-vectors/education",children:"Education vector created by pch.vector - www.freepik.com"})]}),Object(l.jsxs)("li",{children:["Pets Vectors -"," ",Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer nofollow",href:"https://vecteezy.com/",children:"vecteezy.com"})]})]})})}var M=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(s.a,{basename:"",children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{path:"/reset-password",children:Object(l.jsx)(N,{})}),Object(l.jsx)(c.a,{path:"/privacy-policy",children:Object(l.jsx)(T,{})}),Object(l.jsx)(c.a,{path:"/credits",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(c.a,{path:"/",children:Object(l.jsx)(d,{})})]})})})},q=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,139)).then((function(t){var o=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;o(e),i(e),r(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),q()},82:function(e,t,o){},83:function(e,t,o){}},[[110,1,2]]]);
//# sourceMappingURL=main.1b189e91.chunk.js.map