(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,n,a){e.exports=a(70)},36:function(e,n,a){},6:function(e,n,a){},67:function(e,n){},70:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(29),c=a.n(r),o=(a(36),a(6),function(){return l.a.createElement("center",null,l.a.createElement("h1",null,"UNO.io"))}),u=function(){return l.a.createElement("center",null,l.a.createElement("h3",null,"Bean Bwill"))},i=a(2),d=a(30),m=a.n(d)()("http://localhost:3000"),s={play:function(e){console.log("sending ".concat(e.card.color).concat(e.card.value," as player id ").concat(e.id)),m.emit("play",e)},draw:function(e){console.log("drawing a card as id ".concat(e.id)),m.emit("draw",e)},uno:function(e){console.log("sending uno signal to server from id ".concat(e.id)),m.emit("uno",e)},sendName:function(e){console.log("sending name ".concat(e.name," to server")),m.emit("giveName",e)},socket:m},p=function(){return l.a.createElement("div",{id:"deck"},"Deck")},f=function(e){var n=e.opponent;return l.a.createElement("div",null,l.a.createElement("p",null,"Op: ",n.id),l.a.createElement("p",null,"Cards: ",n.hand.length))},E=function(e){var n=e.card,a=e.validateCard;return console.log("color: ".concat(n.color)),l.a.createElement("button",{onClick:function(){return a(n)}},n.color,n.value)},g=function(e){var n=e.cards,a=e.validateCard;return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:n.length},"Cards in hand: ",n.length))),l.a.createElement("tbody",null,l.a.createElement("tr",null,n.map((function(e){return l.a.createElement("td",{key:"".concat(e.color).concat(e.value),className:"playerCard"},l.a.createElement(E,{card:e,validateCard:a}))})))))},v=function(e){var n=e.player,a=e.cardOnTop,t=e.currTurn;n.id;return l.a.createElement("div",null,l.a.createElement(g,{cards:n.hand,validateCard:function(n){n.color===a.color||n.value===a.value?e.playCard(n):alert("Play a valid card.")}}))},h=function(){var e=Object(t.useState)(null),n=Object(i.a)(e,2),a=n[0],r=n[1],c=Object(t.useState)([]),o=Object(i.a)(c,2),u=o[0],d=o[1],m=Object(t.useState)([]),E=Object(i.a)(m,2),g=E[0],h=E[1],y=Object(t.useState)([]),b=Object(i.a)(y,2),O=b[0],j=b[1],C=Object(t.useState)(null),k=Object(i.a)(C,2),w=k[0],D=k[1],S=Object(t.useState)(null),N=Object(i.a)(S,2),T=N[0],B=N[1];return a&&s.socket.on("fetch",(function(e){console.log("receiving data as player id ".concat(a)),console.log("player data: ".concat(e.playerData.join())),console.log("hand: "+e.playerData.find((function(e){return e.id===a})).hand),B(e.winner),console.log("rendering hand"),h(e.topCard),console.log("rendering hand"),D(e.currPlayer),console.log("rendering hand"),d(e.playerData.find((function(e){return e.id===a})).hand),console.log("rendering hand"),j(e.playerData.filter((function(e){return e.id!==a}))),console.log("rendering hand")})),s.socket.on("giveID",(function(e){console.log("receiving id ".concat(e.id," from server")),r(e.id)})),T?l.a.createElement("h1",null,"Game Over Boiz!"):l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,O.map((function(e){return l.a.createElement("td",{key:e.id,className:"opponent"},l.a.createElement(f,{opponent:e}))}))))),l.a.createElement(p,null),l.a.createElement("p",null,"Top Card: ","".concat(g.color).concat(g.value)),l.a.createElement("button",{onClick:function(){return console.log("calling draw"),void s.draw({id:a})}},"Draw"),l.a.createElement(v,{player:{hand:u,id:a},cardOnTop:g,currTurn:w,playCard:function(e){s.play({id:a,card:e})}})))};s.sendName({name:"benis is my name"});var y=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(h,null),l.a.createElement(u,null))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1419956d.chunk.js.map