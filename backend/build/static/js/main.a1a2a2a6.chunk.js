(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,n,t){e.exports=t(70)},36:function(e,n,t){},6:function(e,n,t){},67:function(e,n){},70:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(29),c=t.n(r),o=(t(36),t(6),function(){return l.a.createElement("center",null,l.a.createElement("h1",null,"UNO.io"))}),u=function(){return l.a.createElement("center",null,l.a.createElement("h3",null,"Bean Bwill"))},i=t(2),d=function(e){var n=e.card,t=e.validateCard;return l.a.createElement("button",{onClick:function(){return t(n)}},n.color,n.value)},m=function(e){var n=e.cards,t=e.validateCard;return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:n.length},"Cards in hand: ",n.length))),l.a.createElement("tbody",null,l.a.createElement("tr",null,n.map((function(e){return l.a.createElement("td",{key:"".concat(e.color).concat(e.value),className:"playerCard"},l.a.createElement(d,{card:e,validateCard:t}))})))))},s=function(e){var n=e.player,t=e.cardOnTop,a=e.currTurn;n.id;return l.a.createElement("div",null,l.a.createElement(m,{cards:n.hand,validateCard:function(n){n.color===t.color||n.value===t.value?e.playCard(n):alert("Play a valid card.")}}))},E=function(){return l.a.createElement("div",{id:"deck"},"Deck")},p=function(e){var n=e.opponent;return l.a.createElement("div",null,l.a.createElement("p",null,"Op: ",n.id),l.a.createElement("p",null,"Cards: ",n.hand.length))},f=t(30),v=t.n(f)()("http://localhost:3000"),b={play:function(e){console.log("sending ".concat(e.card.color).concat(e.card.value," as player id ").concat(e.id)),v.emit("play",e)},draw:function(e){console.log("drawing a card as id ".concat(e.id)),v.emit("draw",e)},uno:function(e){var n=e.id;console.log("sending uno signal to server from id ".concat(y.id)),v.emit("uno",{id:n})},sendName:function(e){console.log("sending name ".concat(e.name," to server")),v.emit("giveName",e)},socket:v},y=function(e){e.numPlayers;var n=Object(a.useState)(null),t=Object(i.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),d=u[0],m=u[1],f=Object(a.useState)([]),v=Object(i.a)(f,2),y=v[0],h=v[1],g=Object(a.useState)([]),O=Object(i.a)(g,2),C=O[0],j=O[1],k=Object(a.useState)(null),w=Object(i.a)(k,2),S=w[0],N=w[1],D=Object(a.useState)(null),T=Object(i.a)(D,2),B=T[0],P=T[1];return r&&b.socket.on("fetch",(function(e){console.log("receiving data as player id ".concat(r)),P(e.winner),h(e.topCard),N(e.currPlayer),m(e.playerData.find((function(e){return e.id===r})).hand),j(e.playerData.filter((function(e){return e.id!==r})))})),b.socket.on("giveID",(function(e){c(e.id)})),B?l.a.createElement("h1",null,"Game Over Boiz!"):l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,C.map((function(e){return l.a.createElement("td",{key:e.id,className:"opponent"},l.a.createElement(p,{opponent:e}))}))))),l.a.createElement(E,null),l.a.createElement("p",null,"Top Card: ","".concat(y.color).concat(y.value)),l.a.createElement("button",{onClick:function(){b.draw({id:r})}},"Draw"),l.a.createElement(s,{player:{hand:d,id:r},cardOnTop:y,currTurn:S,playCard:function(e){b.play({id:r,card:e})}})))};b.sendName({name:"benis is my name"});var h=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(y,null),l.a.createElement(u,null))};c.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a1a2a2a6.chunk.js.map