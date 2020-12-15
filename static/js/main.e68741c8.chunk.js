(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{340:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(82),i=a.n(s),c=(a(91),a(6)),l=a(8),u=(a(92),a(9)),o=a(10),d=a(25),m=a(15),p=a(14),h=a(83),v=a.n(h),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{id:"tsparticles",options:{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:100,duration:.4}}},particles:{color:{value:"#fff"},links:{color:"#fff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:1800},value:180},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}})}}]),a}(n.Component),E=a(256),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).deleteCourse=function(){var e=n.props.context,t=n.state.id,a=e.authenticatedUser,r=a.emailAddress,s=a.password;e.data.deleteCourse(t,r,s).then((function(e){e&&(console.log("destroyed"),n.props.history.push("/"))})).catch((function(e){console.log("Course not destroyed",e),n.setState({errors:e}),console.log(n.state.errors)}))},n.state={authenticatedUser:n.state,emailAddress:"",password:"",courses:[],errors:[],courseDetails:[],userId:[],id:"",firstName:null,lastName:null},n.deleteCourse=n.deleteCourse.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.context,a=this.props.match.params.id,n=parseInt(a);this.setState({id:n}),t.data.getCoursesById(n).then((function(t){t&&e.setState({courseDetails:t.course,userId:t.course.userId,firstName:t.course.user.firstName,lastName:t.course.user.lastName})})).catch((function(e){console.log("Course does not exist",e)}))}},{key:"render",value:function(){var e,t=this.state.courseDetails,a=t.userId,n=t.materialsNeeded,s=t.description,i=this.props.match.params.id;return null!==this.props.context.authenticatedUser&&this.props.context.authenticatedUser.id===a&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{to:"/courses/".concat(i,"/update"),className:"nav-button"}," ","Update"," "),r.a.createElement("button",{to:"/",onClick:this.deleteCourse,className:"nav-button"}," ","Delete"," "))),r.a.createElement("div",{className:"action-margin"},r.a.createElement("div",{className:"action-bar"},r.a.createElement(c.c,{to:"/",className:"nav-button"}," ","Return"," "),e),r.a.createElement("div",{className:"detail-div"},r.a.createElement("div",null,r.a.createElement("div",{className:"detail-div-left"},r.a.createElement("h3",null," Course "),r.a.createElement("h1",{className:"detailH1"}," ",t.title," "),r.a.createElement("h3",null," Owner "),r.a.createElement("h3",null," ",this.state.firstName," ",this.state.lastName," "),r.a.createElement("span",{className:"detailDesc"}," ",r.a.createElement(E,{source:s})," ")),r.a.createElement("div",{className:"detail-div-right"},r.a.createElement("h3",null," Estimated time "),r.a.createElement("p",null," ",t.estimatedTime," "),r.a.createElement("h3",null," Materials "),r.a.createElement("ul",{className:"list-detail-style-right"},r.a.createElement("li",null," ",r.a.createElement(E,{source:n})," ")),r.a.createElement("div",{id:"tsparticles",className:"tsparticles"}))),r.a.createElement(f,null)))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={authenticatedUser:e.state,courses:[],errors:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.context;this.setState({courses:e.actions.usersCourses()})}},{key:"render",value:function(){var e,t=this.props.context;return null===t.courses?r.a.createElement("div",null,r.a.createElement("p",null," Loading.... ")):(e=t.courses.courses.map((function(e){return r.a.createElement("div",{className:"table-cell",key:e.id},r.a.createElement("p",null,"Course"),r.a.createElement(c.c,{to:"/courses/".concat(e.id)}," ",e.title," "))})),r.a.createElement("div",{id:"tsparticles",className:"tsparticles"},r.a.createElement("div",{className:"course-list-div"},r.a.createElement("div",{className:"table"},e,r.a.createElement("div",{className:"table-cell"},r.a.createElement(c.c,{to:"/courses/create"}," + New Course ")))),r.a.createElement(f,null)))}}]),a}(r.a.Component),N=a(28),y=a(5),C=a.n(y),w=a(24),O="http://localhost:5000/api",x=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=O+e,i={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(i.body=JSON.stringify(a)),n){var c=btoa("".concat(r.emailAddress,":").concat(r.password));i.headers.Authorization="Basic ".concat(c)}return fetch(s,i)}},{key:"getUser",value:function(){var e=Object(w.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{emailAddress:t,password:a});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e})));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(w.a)(C.a.mark((function e(t,a,n,r){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"PUT",a,!0,{emailAddress:n,password:r});case 2:if(204!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",s);case 7:if(400!==s.status){e.next=9;break}return e.abrupt("return",s.json().then((function(e){return e.errors})));case 9:case"end":return e.stop()}}),e,this)})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==a.status){e.next=9;break}return e.abrupt("return",a.json().then((function(e){return e.errors})));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(w.a)(C.a.mark((function e(t,a,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,{emailAddress:a,password:n});case 2:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==r.status){e.next=11;break}return e.abrupt("return",r.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"getCourses",value:function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","GET",null,!1);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.json().then((function(e){return e})));case 7:if(401!==t.status){e.next=11;break}return e.abrupt("return",t.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCoursesById",value:function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"GET",null,!1);case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",a.json().then((function(e){return e})));case 7:if(401!==a.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(w.a)(C.a.mark((function e(t,a,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"DELETE",null,!0,{emailAddress:a,password:n});case 2:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r);case 7:if(401!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(N.a)({},r,a))},n.handleSubmit=function(e){var t=n.props.context,a=n.state,r={userId:a.userId,title:a.title,description:a.description,estimatedTime:a.estimatedTime,materialsNeeded:a.materialsNeeded},s=n.state,i=s.emailAddress,c=s.password;e.preventDefault(),t.data.createCourse(r,i,c).then((function(e){e.length?(n.setState({errors:e}),console.log(e)):n.props.history.push("/")}))},n.data=new x,n.state={authenticatedUser:n.state,emailAddress:"",password:"",userId:"",title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.context.authenticatedUser,t=e.emailAddress,a=e.password,n=e.id;this.setState({emailAddress:t,password:a,userId:n})}},{key:"render",value:function(){var e;return this.state.errors.length&&(e=this.state.errors.map((function(e,t){return r.a.createElement("p",{className:"create-div-validations",key:t},e)}))),r.a.createElement("div",{id:"tsparticles",className:"tsparticles"},r.a.createElement("h1",{className:"create-h1"}," Create course "),e,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"create-div"},r.a.createElement("div",{className:"create-div-left"},r.a.createElement("h4",null,"Title"),r.a.createElement("input",{id:"title",name:"title",type:"text",placeholder:"Course title",defaultValue:"",className:"create-div-input",onChange:this.handleChange}),r.a.createElement("h4",null,"Course description"),r.a.createElement("textarea",{id:"description",className:"text-area-left",name:"description",defaultValue:"",placeholder:"Course description",onChange:this.handleChange})),r.a.createElement("div",{className:"create-div-right"},r.a.createElement("ul",null,r.a.createElement("li",{className:"create-div-li"},r.a.createElement("h4",{className:"h4-create"},"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",placeholder:"Hours",className:"create-div-input-right",onChange:this.handleChange}))),r.a.createElement("li",{className:"create-div-li"},r.a.createElement("h4",{className:"h4-create"},"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{id:"materialsNeeded",className:"create-textarea-right",name:"materialsNeeded",placeholder:"List materials",onChange:this.handleChange})))))),r.a.createElement("div",{className:"create-div-buttons"},r.a.createElement("button",{className:"create-buttons",type:"submit"},"Create Course"),r.a.createElement(c.c,{className:"create-buttons",to:"/"},"Cancel"))),r.a.createElement(f,null))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(N.a)({},r,a))},n.handleSubmit=function(e){var t=n.props.context,a=n.state,r={userId:a.userId,title:a.title,description:a.description,estimatedTime:a.estimatedTime,materialsNeeded:a.materialsNeeded},s=n.state,i=s.emailAddress,c=s.password,l=n.state.id,u=n.props.match.params.id,o=parseInt(u);e.preventDefault(),t.data.updateCourse(l,r,i,c).then((function(e){e.length?(n.setState({errors:e}),console.log(e)):""===n.state.description&&""===n.state.title||n.props.history.push("/courses/".concat(o))})).catch((function(e){console.log(e)}))},n.data=new x,n.state={authenticatedUser:n.state,emailAddress:"",password:"",userId:"",title:"",description:"",estimatedTime:"",materialsNeeded:"",id:"",errors:[]},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=parseInt(t);this.setState({id:a});var n=this.props.context,r=n.authenticatedUser,s=r.emailAddress,i=r.password;this.setState({emailAddress:s,password:i}),n.data.getCoursesById(a).then((function(t){t&&(console.log("True"),e.setState({title:t.course.title,description:t.course.description,estimatedTime:t.course.estimatedTime,materialsNeeded:t.course.materialsNeeded,userId:t.course.userId}))})).catch((function(e){console.log("Course does not exists",e)}))}},{key:"render",value:function(){var e,t=this.props.context.authenticatedUser,a=this.props.match.params.id,n=parseInt(a);return this.state.errors.length&&(e=this.state.errors.map((function(e,t){return r.a.createElement("p",{className:"create-div-validations",key:t},e)}))),r.a.createElement("div",null,r.a.createElement("h1",{className:"update-h1"}," Update Course "),r.a.createElement("form",{onSubmit:this.handleSubmit},e,r.a.createElement("div",{className:"update-div"},r.a.createElement("div",{className:"update-div-left"},r.a.createElement("h3",null,"Course title"),r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",onChange:this.handleChange,className:"update-div-input",value:this.state.title})),r.a.createElement("p",null,"By ",t.firstName," ",t.lastName),r.a.createElement("textarea",{className:"text-area-left",id:"description",name:"description",onChange:this.handleChange,value:this.state.description})),r.a.createElement("div",{className:"update-div-right"},r.a.createElement("ul",{className:"list-style-right"},r.a.createElement("li",null,r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{className:"update-div-input-right",id:"estimatedTime",name:"estimatedTime",type:"text",onChange:this.handleChange,defaultValue:this.state.estimatedTime}))),r.a.createElement("li",null,r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{className:"text-area-right",id:"materialsNeeded",name:"materialsNeeded",onChange:this.handleChange,defaultValue:this.state.materialsNeeded})))))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"update-button",type:"submit"},"Update Course"),r.a.createElement(c.c,{className:"update-button",to:"/courses/".concat(n)},"Cancel")),r.a.createElement("div",{id:"tsparticles",className:"tsparticles"})),r.a.createElement(f,null))}}]),a}(n.Component),S=function(e){var t=e.errors,a=e.submit,n=e.elements;return r.a.createElement("div",null,r.a.createElement(A,{errors:t}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a()}},n(),r.a.createElement("div",null,r.a.createElement("button",{className:"signInBtn",type:"submit"},"Submit"),r.a.createElement(c.c,{className:"button-2",to:"/"},"Cancel"))))};function A(e){var t=e.errors,a=null;return t.length&&(a=r.a.createElement("div",null,r.a.createElement("h2",null,"Validation errors"),r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))),a}var U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={emailAddress:"",password:"",errors:[]},e.change=function(t){t.preventDefault();var a=t.target.name,n=t.target.value;e.setState((function(){return Object(N.a)({},a,n)}))},e.submit=function(){console.log("Fire");var t=e.props.context,a=e.state,n=a.emailAddress,r=a.password;t.actions.signIn(n,r).then((function(a){null===a?e.setState((function(){return{errors:["Sign-in was unsuccessful"]}})):(e.props.history.push("/"),t.actions.usersCourses())})).catch((function(t){e.props.history.push("/NotFound")}))},e.cancel=function(){e.props.history.push("/UserSignOut")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.errors;return r.a.createElement("div",{id:"tsparticles",className:"tsparticles"},r.a.createElement("div",{className:"sign-in-div"},r.a.createElement("h1",{className:"sign-in-h1"},"Sign In"),r.a.createElement(S,{cancel:this.cancel,errors:t,submit:this.submit,elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"sign-in-input",id:"emailAddress",name:"emailAddress",type:"text",onChange:e.change,placeholder:"emailAddress"}),r.a.createElement("input",{className:"sign-in-input",id:"password",name:"password",type:"password",onChange:e.change,placeholder:"Password"})))}}),r.a.createElement("p",null,"Don't have a user account?"," ",r.a.createElement(c.b,{className:"sign-up-link",to:"/signup"},"Click here")," ","to sign up!")),r.a.createElement(f,null))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.context.actions.signOut()}},{key:"render",value:function(){return r.a.createElement(l.a,{to:"/"})}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",emailAddress:"",password:"",errors:[]},e.change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(){return Object(N.a)({},a,n)}))},e.submit=function(){var t=e.props.context,a=e.state,n=a.firstName,r=a.lastName,s=a.emailAddress,i=a.password,c={firstName:n,lastName:r,emailAddress:s,password:i};t.data.createUser(c).then((function(a){a.length?(e.setState({errors:a}),console.log(a)):t.actions.signIn(s,i).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),console.log(e.state.errors),e.props.history.push("/error")}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,s=t.emailAddress,i=t.password,l=t.errors;return r.a.createElement("div",{className:"sign-up-div"},r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement(S,{errors:l,submit:this.submit,elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"sign-up-input",id:"firstName",name:"firstName",type:"text",value:a,onChange:e.change,placeholder:"First name"}),r.a.createElement("input",{className:"sign-up-input",id:"LastName",name:"lastName",type:"text",value:n,onChange:e.change,placeholder:"Last Name"}),r.a.createElement("input",{className:"sign-up-input",id:"emailAddress",name:"emailAddress",type:"text",value:s,onChange:e.change,placeholder:"emailAddress"}),r.a.createElement("input",{className:"sign-up-input",id:"password",name:"password",type:"password",value:i,onChange:e.change,placeholder:"Password"}))}})),r.a.createElement(f,null),r.a.createElement("p",null,"Already have a user account?"," ",r.a.createElement(c.b,{className:"sign-in-link",to:"/signin"}," ","Sign in!"," ")))}}]),a}(n.Component),D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Sorry! We couldn't find the page you're looking for."))},F=a(85),M=a(39),B=a.n(M),P=r.a.createContext(),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={authenticatedUser:B.a.getJSON("authenticatedUser")||null,courses:null},e.signIn=function(){var t=Object(w.a)(C.a.mark((function t(a,n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getUser(a,n);case 2:return(r=t.sent)&&(r.password=n),null!==r&&(e.setState((function(){return{authenticatedUser:r}})),B.a.set("authenticatedUser",JSON.stringify(r),{expires:1})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.signOut=function(){e.setState((function(){return{authenticatedUser:null}})),B.a.remove("authenticatedUser")},e.usersCourses=Object(w.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getCourses().then((function(t){var a=t;a&&e.setState((function(){return{courses:a}}))})).catch((function(e){console.log("API request failed",e)}));case 2:case"end":return t.stop()}}),t)}))),e.data=new x,e}return Object(o.a)(a,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,courses:this.state.courses,data:this.data,actions:{signIn:this.signIn,signOut:this.signOut,usersCourses:this.usersCourses}};return r.a.createElement(P.Provider,{value:e},this.props.children)}}]),a}(n.Component),J=P.Consumer;function V(e){return function(t){return r.a.createElement(P.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))}))}}var z=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return r.a.createElement(J,null,(function(e){return r.a.createElement(l.b,Object.assign({},a,{render:function(a){return e.authenticatedUser?r.a.createElement(t,a):r.a.createElement(l.a,{to:"/signin"})}}))}))},G=V(U),W=V(T),H=V(I),q=V((function(e){var t=e.context.authenticatedUser;return r.a.createElement("div",null,r.a.createElement("div",{className:"header-div"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",className:"header-div-left"}," ","Student Courses"," ")),r.a.createElement("nav",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-div-right"},r.a.createElement("span",{className:"header-div-right"}," ","Welcome ",t.firstName," ",t.lastName," "),r.a.createElement(c.b,{className:"header-div-right",to:"/signout"}," ","Sign Out"," "))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-div-right-up-in"},r.a.createElement(c.b,{className:"header-div-right",to:"/signup"},"Sign Up"),r.a.createElement(c.b,{className:"header-div-right",to:"/signin"},"Sign In"))))))})),R=V(g),$=V(b),_=V(k),K=V(j),Q=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:R}),r.a.createElement(z,{path:"/courses/create",component:K}),r.a.createElement(l.b,{exact:!0,path:"/courses/:id",component:$}),r.a.createElement(z,{path:"/courses/:id/update",component:_}),r.a.createElement(l.b,{path:"/signin",component:G}),r.a.createElement(l.b,{path:"/signup",component:W}),r.a.createElement(l.b,{path:"/signout",component:H}),r.a.createElement(l.b,{component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(340)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.e68741c8.chunk.js.map