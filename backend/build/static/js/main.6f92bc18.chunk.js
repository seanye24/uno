(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,n,t){e.exports=t(71)},37:function(e,n,t){},6:function(e,n,t){},68:function(e,n){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(29),c=t.n(l),o=(t(37),t(6),function(){return r.a.createElement("center",null,r.a.createElement("h1",null,"UNO.io"))}),u=function(){return r.a.createElement("center",null,r.a.createElement("h3",null,"Bean Bwill"))},i=t(3),d=t(31),m=t(30),s=t.n(m)()("http://localhost:3000"),p={play:function(e){console.log("sending ".concat(e.card.color).concat(e.card.value," as player id ").concat(e.id)),s.emit("play",e)},draw:function(e){console.log("drawing a card as id ".concat(e.id)),s.emit("draw",e)},uno:function(e){console.log("sending uno signal to server from id ".concat(e.id)),s.emit("uno",e)},sendName:function(e){console.log("sending name ".concat(e.name," to server")),s.emit("giveName",e)},socket:s},f=function(){return r.a.createElement("div",{style:{color:"black",borderStyle:"solid",borderRadius:1,height:100,width:80,margin:"auto",justifyContent:"center",alignItems:"center"},id:"deck"},"Deck")},E=function(e){var n=e.opponent;return r.a.createElement("div",null,r.a.createElement("p",null,"Op: ",n.id),r.a.createElement("p",null,"Cards: ",n.hand.length))},v=function(e){var n=e.card,t=(e.validateCard,{color:n.color});return r.a.createElement("td",{style:t,className:"playerCard"},n.value)},h=function(e){var n=e.cards,t=e.validateCard;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:n.length},"Cards in hand: ",n.length))),r.a.createElement("tbody",null,r.a.createElement("tr",null,n.map((function(e){return r.a.createElement(v,{key:n.indexOf(e),card:e,validateCard:t})})))))},y=function(e){var n=e.player,t=e.cardOnTop,a=e.currTurn,l=n.id===a;return r.a.createElement("div",null,r.a.createElement("p",null,l?"Your Turn":"Player ".concat(a,"'s turn")),r.a.createElement(h,{cards:n.hand,validateCard:function(n){l?n.color===t.color||n.value===t.value?e.playCard(n):alert("Play a valid card."):n.color===t.color&&n.value===t.value&&e.playCard(n)}}))},g=function(){var e=Object(a.useState)({id:null,hand:[],cardOnTop:[],opponents:[],currTurn:[],winner:null}),n=Object(d.a)(e,2),t=n[0],l=n[1],c=t.id,o=t.hand,u=t.cardOnTop,m=t.opponents,s=t.currTurn,v=t.winner;return Object(a.useEffect)((function(){p.socket.on("giveID",(function(e){l(Object(i.a)(Object(i.a)({},t),{},{id:e.id}))}))}),[]),Object(a.useEffect)((function(){c&&p.socket.on("fetch",(function(e){console.log("fetch run"),l(Object(i.a)(Object(i.a)({},t),{},{hand:e.playerData.find((function(e){return e.id===c})).hand,cardOnTop:e.topCard,opponents:e.playerData.filter((function(e){return e.id!==c})),currTurn:e.currPlayer,winner:e.winner}))}))}),[]),v?r.a.createElement("h1",null,"Game Over Boiz!"):r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,m.map((function(e){return r.a.createElement("td",{key:e.id,className:"opponent"},r.a.createElement(E,{opponent:e}))}))))),r.a.createElement(f,null),r.a.createElement("p",null,"Top Card: ","".concat(u.color).concat(u.value)),r.a.createElement("button",{onClick:function(){return console.log("calling draw"),void p.draw({id:c})}},"Draw"),r.a.createElement(y,{player:{hand:o,id:c},cardOnTop:u,currTurn:s,playCard:function(e){p.play({id:c,card:e})}})))};p.sendName({name:"benis"});var b=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(g,null),r.a.createElement(u,null))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.6f92bc18.chunk.js.map