webpackJsonp([0],{105:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),d=n(1),f=r(d),p=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),u(n,[{key:"render",value:function(){var t=this.context.socket;return c.default.createElement(e,i({},this.props,{socket:t}))}}]),n}(s.Component),t.contextTypes={socket:f.default.oneOfType([f.default.object,f.default.bool])},n};t.default=p},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: ",";\n  font-size: 18px;\n  text-align: left;\n"],["\n  color: ",";\n  font-size: 18px;\n  text-align: left;\n"]),a=n(0),l=r(a),i=n(8),u=n(18),s=r(u),c=function(e){var t=e.className,n=e.promptText;return l.default.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:n}})};t.default=(0,s.default)(c)(o,i.textColor)},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),l=n(10),i=r(l),u=(0,i.default)({loader:function(){return n.e(4).then(n.bind(null,99))},modules:["./Editor"],webpack:function(){return[99]},loading:function(){return a.default.createElement("div",null,"Loading...")}});t.default=u},116:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 2% 0;\n  padding: 10px 5%;\n  color: ",";\n  font-size: 18px;\n  text-align: left;\n  border: 1px solid ",";\n  border-radius: 5px;\n  \n  h2 {\n    margin-bottom: 0;\n    margin-top: 10px;\n  }\n  \n  h3 {\n    font-weight: 100;\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n  \n  p {\n    margin: 5px 0 0 10px;\n  }\n"],["\n  margin: 2% 0;\n  padding: 10px 5%;\n  color: ",";\n  font-size: 18px;\n  text-align: left;\n  border: 1px solid ",";\n  border-radius: 5px;\n  \n  h2 {\n    margin-bottom: 0;\n    margin-top: 10px;\n  }\n  \n  h3 {\n    font-weight: 100;\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n  \n  p {\n    margin: 5px 0 0 10px;\n  }\n"]),a=n(0),l=r(a),i=n(8),u=n(18),s=r(u),c=function(e){var t=e.className,n=e.testCaseName,r=e.isPassed,o=e.givenInput,a=e.expectedOutput,i=e.givenOutput;return l.default.createElement("div",{className:t},l.default.createElement("div",{style:{display:"inline-block"}},l.default.createElement("div",null,l.default.createElement("h2",null,r?"Passed":"Failed")),l.default.createElement("div",null,l.default.createElement("h3",null,n))),l.default.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},l.default.createElement("p",null,"Input: ",o)),l.default.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},"=>"),l.default.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},l.default.createElement("p",null,"Expected Output: ",a),l.default.createElement("p",null,"Your Output: ",i)))};t.default=(0,s.default)(c)(o,function(e){return e.isPassed?i.successColor:i.errorColor},function(e){return e.isPassed?i.successColor:i.errorColor})},117:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: ",";\n"],["\n  color: ",";\n"]),a=n(0),l=r(a),i=n(18),u=r(i),s=n(8),c=n(118),d=r(c),f=function(e){var t=e.testErrorInfo,n=e.testsPassed,r=e.testsFailed,o=e.className;return l.default.createElement("div",{className:o},t&&t.map(function(e,t){return l.default.createElement(d.default,{key:t,reason:e.reason})}),(n>0||r>0)&&l.default.createElement("div",null,n,"/",r+n," Test Cases Passed"))};t.default=(0,u.default)(f)(o,s.textColor)},118:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: ",";\n  border: 1px solid ",";\n  padding: 10px;\n  border-radius: 15px;\n  display: flex;\n  \n  .errorIcon {\n    font-size: x-large;\n    padding-right: 15px;\n  }\n  \n  .errorText {\n  }\n  \n  p {\n    margin: 0\n  }\n"],["\n  color: ",";\n  border: 1px solid ",";\n  padding: 10px;\n  border-radius: 15px;\n  display: flex;\n  \n  .errorIcon {\n    font-size: x-large;\n    padding-right: 15px;\n  }\n  \n  .errorText {\n  }\n  \n  p {\n    margin: 0\n  }\n"]),a=n(0),l=r(a),i=n(18),u=r(i),s=n(8),c=function(e){var t=e.reason,n=e.className;return l.default.createElement("div",{className:n},l.default.createElement("div",{className:"errorIcon"},"⚠️"),l.default.createElement("div",{className:"errorText"},l.default.createElement("p",null,t)))};t.default=(0,u.default)(c)(o,s.errorColor,s.errorColor)},119:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 10px;\n  background-color: ",";\n  color: ",";\n  font-size: 24px;\n  text-align: center;\n  font-weight: 100;\n"],["\n  padding: 10px;\n  background-color: ",";\n  color: ",";\n  font-size: 24px;\n  text-align: center;\n  font-weight: 100;\n"]),a=n(0),l=r(a),i=n(8),u=n(18),s=r(u),c=function(e){var t=e.textColor,n=(void 0===t&&i.backgroundColor,e.color),r=(void 0===n&&i.secondaryColor,e.className),o=e.title,a=e.elementLeft,u=void 0===a?null:a;return l.default.createElement("div",{className:r},u&&l.default.createElement("span",{style:{float:"left"}},u),o)};t.default=(0,s.default)(c)(o,function(e){return e.color},function(e){return e.textColor})},120:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background-color: ",";\n  color: ",";\n  font-size: 12px;\n  width: 100%;\n  \n   h2 {\n    font-weight: 100;\n    padding: 5px 10px;\n    margin: 0;\n  }\n"],["\n  background-color: ",";\n  color: ",";\n  font-size: 12px;\n  width: 100%;\n  \n   h2 {\n    font-weight: 100;\n    padding: 5px 10px;\n    margin: 0;\n  }\n"]),a=n(0),l=r(a),i=n(8),u=n(18),s=r(u),c=function(e){var t=e.className;return l.default.createElement("div",{className:t},l.default.createElement("h2",null,"Adam Towers"))};t.default=(0,s.default)(c)(o,i.primaryColor,i.backgroundColor)},37:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background-color: ",";\n  min-height: 100%;\n  height: 100%;\n  \n  table {\n    width: 100%;\n    text-align: left;\n    \n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px;\n  }\n  \n  thead {\n    color: ",";\n  }\n  \n  tbody {\n    color: ",";\n  }\n  \n  code {\n    background-color: grey;\n    border-radius: 5px;\n    padding: 3px;\n  }\n"],["\n  background-color: ",";\n  min-height: 100%;\n  height: 100%;\n  \n  table {\n    width: 100%;\n    text-align: left;\n    \n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 5px;\n  }\n  \n  thead {\n    color: ",";\n  }\n  \n  tbody {\n    color: ",";\n  }\n  \n  code {\n    background-color: grey;\n    border-radius: 5px;\n    padding: 3px;\n  }\n"]),s=n(0),c=r(s),d=n(1),f=r(d),p=n(9),m=n(18),b=r(m),g=n(105),h=r(g),x=n(106),v=r(x),y=n(107),O=r(y),_=n(116),E=r(_),j=n(117),P=r(j),w=n(8),C=n(119),k=r(C),T=n(34),z=r(T),I=n(120),M=r(I),N=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.receivedTestInfo=function(e){var t=e.questionID,r=e.testInfo;t===n.state.qId?n.setState({tests:r,solutionProcessing:!1}):console.log("[ERROR] received test info for a different question than is open")},n.submit=function(){n.setState({tests:null}),n.props.socket.send(JSON.stringify({type:"TestCode",questionID:n.state.qId,code:n.state.solutionText}))},n.state={qId:e.match.params.id,done:!0,loaded:!1,problemPrompt:"",solutionText:"public class HelloWorld {\n\tpublic static int add1(int a) { return a + 1; }\n}",solutionProcessing:!1,tests:null},n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/r/"+this.state.qId).then(function(t){if(200===t.status)return t.text().then(function(t){return e.setState({problemPrompt:t})});e.props.history.push("/404")}),this.props.socket.registerType("TestInfo",this.receivedTestInfo),this.props.socket.registerType("CodeReceived",function(){return e.setState({solutionProcessing:!0})})}},{key:"render",value:function(){var e=this,t="undefined"!=typeof window;return c.default.createElement("div",{className:this.props.className},c.default.createElement(k.default,{color:w.backgroundColor,textColor:w.textColor,elementLeft:c.default.createElement(p.Link,{to:"/q"},"🔥")}),c.default.createElement("div",{style:{padding:"1% 7%",marginBottom:"5%"}},c.default.createElement(v.default,{promptText:this.state.problemPrompt}),c.default.createElement("div",null,t&&c.default.createElement(O.default,{editorContents:this.state.solutionText,onChange:function(t){return e.setState({solutionText:t})}})),c.default.createElement("div",{style:{margin:"2% 0",display:"flex",justifyContent:"center"}},c.default.createElement(z.default,{text:this.state.solutionProcessing?"Processing...":"Submit Code",color:w.primaryColor,backgroundColor:w.backgroundColor,onClick:this.submit,disabled:this.state.solutionProcessing,big:!0})),this.state.tests?c.default.createElement("div",null,c.default.createElement(P.default,{testErrorInfo:this.state.tests.testErrorInfo,testsPassed:this.state.tests.testCasesPassed,testsFailed:this.state.tests.testCasesFailed}),c.default.createElement("div",null,this.state.tests.testCaseInfo.map(function(e){return c.default.createElement(E.default,{key:e.name,testCaseName:e.name,isPassed:e.isPassed,givenInput:e.givenInput,expectedOutput:e.expectedOutput,givenOutput:e.givenOutput})}))):null),c.default.createElement(M.default,null))}}]),t}(s.Component);N.propTypes={history:f.default.shape({push:f.default.func.isRequired}).isRequired},t.default=(0,b.default)((0,h.default)((0,p.withRouter)(N)))(u,w.backgroundColor,w.primaryColor,w.textColor)}});