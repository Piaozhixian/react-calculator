(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),u=n(4),r=n.n(u),a=(n(13),n(5)),l=n(6),c=n(2),o=n(8),h=n(7),d=(n(14),n(0));var j={num1:null,num2:null,notation:null,result:null},m=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(a.a)(this,n),(s=e.call(this,t)).state=j,s.handleClick=s.handleClick.bind(Object(c.a)(s)),s}return Object(l.a)(n,[{key:"handleClick",value:function(t){if(console.log(this.state),isNaN(Number(t))){var e=0;null!=this.state.result&&this.setState({num1:this.state.result}),"="===t?("+"===this.state.notation?e=Number(this.state.num1)+Number(this.state.num2):"-"===this.state.notation?e=Number(this.state.num1)-Number(this.state.num2):"*"===this.state.notation?e=Number(this.state.num1)*Number(this.state.num2):"/"===this.state.notation&&(e=Number(this.state.num1)/Number(this.state.num2)),this.setState({result:e,num1:null,num2:null,notation:null})):null==this.state.notation?this.setState({notation:t}):this.setState({result:e})}else if(null!=this.state.result&&this.setState({result:null}),null==this.state.notation){var n=null==this.state.num1?"":this.state.num1;n+=String(t),this.setState({num1:n})}else{n=null==this.state.num2?"":this.state.num2;n+=String(t),this.setState({num2:n})}}},{key:"renderButton",value:function(t){var e=this;return Object(d.jsx)(v,{value:t,onClick:function(){return e.handleClick(t)}})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"display-panel",children:[Object(d.jsx)(b,{num1:this.state.num1,notation:this.state.notation,num2:this.state.num2}),Object(d.jsx)(O,{result:this.state.result})]}),Object(d.jsxs)("div",{className:"button-panel",children:[Object(d.jsxs)("div",{className:"button-row",children:[this.renderButton(1),this.renderButton(2),this.renderButton(3),this.renderButton("+")]}),Object(d.jsxs)("div",{className:"button-row",children:[this.renderButton(4),this.renderButton(5),this.renderButton(6),this.renderButton("-")]}),Object(d.jsxs)("div",{className:"button-row",children:[this.renderButton(7),this.renderButton(8),this.renderButton(9),this.renderButton("*")]}),Object(d.jsxs)("div",{className:"button-row",children:[this.renderButton(0),this.renderButton("\u2190"),this.renderButton("="),this.renderButton("/")]})]})]})}}]),n}(i.a.Component);function b(t){var e="";return null!=t.num1&&(e+=t.num1),null!=t.notation&&(e+=t.notation),null!=t.num2&&(e+=t.num2),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:e})})}function O(t){return Object(d.jsx)("div",{children:Object(d.jsx)("h5",{children:t.result})})}function v(t){return Object(d.jsx)("button",{className:"button",onClick:t.onClick,children:t.value})}var x=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("p",{children:"Calculator"})}),Object(d.jsx)("div",{className:"calculator",children:Object(d.jsx)(m,{})})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,u=e.getLCP,r=e.getTTFB;n(t),s(t),i(t),u(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.4e7eec58.chunk.js.map