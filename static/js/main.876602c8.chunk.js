(this.webpackJsonppoll_results=this.webpackJsonppoll_results||[]).push([[0],[,function(e,t,s){e.exports={itemContainer:"Item_itemContainer__3fiF1",itemName:"Item_itemName__2mZrF",itemVotes:"Item_itemVotes__2iux-",less40itemVoteContainer:"Item_less40itemVoteContainer__PRzdf",less40ItemVotes:"Item_less40ItemVotes__oF2x-",less40ItemsShare:"Item_less40ItemsShare__2sRqn",less10itemVoteContainer:"Item_less10itemVoteContainer__YywiA",less10ItemVotes:"Item_less10ItemVotes__3_ev3",less10ItemsShare:"Item_less10ItemsShare__2_Llb"}},,,,function(e,t,s){e.exports={resultsContainer:"Results_resultsContainer__3tfro"}},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(4),o=s.n(c),r=(s(10),s(11),s(1)),l=s.n(r),i=s(0),m=function(e){var t=(e.votes/e.totalVotes*100).toFixed(1);return Object(i.jsxs)("div",{className:l.a.itemContainer,children:[Object(i.jsx)("span",{children:Object(i.jsx)("span",{className:l.a.itemName,children:e.itemName})}),Object(i.jsxs)("span",{children:[e.scale>40&&Object(i.jsxs)("span",{className:l.a.itemVotes,style:{backgroundImage:"linear-gradient(rgba(".concat(e.color,",0.5), rgba(").concat(e.color,")"),width:"".concat(e.scale,"%")},children:[Object(i.jsxs)("span",{children:[e.votes," votes"]}),Object(i.jsxs)("span",{children:[t,"%"]})]}),e.scale<=40&&e.scale>20&&Object(i.jsxs)("span",{className:l.a.less40itemVoteContainer,children:[Object(i.jsxs)("span",{className:l.a.less40ItemVotes,style:{backgroundImage:"linear-gradient(rgba(".concat(e.color,",0.5), rgba(").concat(e.color,")"),width:"".concat(e.scale,"%")},children:[e.votes," votes"]}),Object(i.jsxs)("span",{className:l.a.less40ItemsShare,children:[t,"%"]})]}),e.scale<=20&&Object(i.jsxs)("span",{className:l.a.less10itemVoteContainer,children:[Object(i.jsx)("span",{className:l.a.less10ItemVotes,style:{backgroundImage:"linear-gradient(rgba(".concat(e.color,",0.5), rgba(").concat(e.color,")"),width:"".concat(e.scale,"%")},children:" "}),Object(i.jsxs)("span",{className:l.a.less10ItemsShare,children:[e.votes," votes"]}),Object(i.jsxs)("span",{className:l.a.less10ItemsShare,children:[t,"%"]})]})]})]})},j=s(5),h=s.n(j),d=function(){var e={Vanilla:17,Chocolate:47,Caramel:32,Banana:28,Strawberry:2},t=[];for(var s in e)t.push([s,e[s]]);t.sort((function(e,t){return t[1]-e[1]}));for(var a=[100],n=1;n<t.length;n++)a.push(Math.round(t[n][1]/t[0][1]*100));var c=e.Vanilla+e.Banana+e.Caramel+e.Chocolate,o=["28,17,186","233,7,7","12,156,55","209,204,51","252,90,192"];return Object(i.jsx)("div",{className:h.a.resultsContainer,children:t.map((function(e,t){return Object(i.jsx)(m,{itemName:e[0],votes:e[1],color:o[t],totalVotes:c,scale:a[t]},t)}))})};var u=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(d,{})})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.876602c8.chunk.js.map