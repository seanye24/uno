(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,n,a){e.exports=a(71)},37:function(e,n,a){},6:function(e,n,a){},68:function(e,n){},71:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(29),c=a.n(l),o=(a(37),a(6),function(){return r.a.createElement("center",null,r.a.createElement("h1",null,"UNO.io"))}),u=function(){return r.a.createElement("center",null,r.a.createElement("h3",null,"Bean Bwill"))},i=a(3),d=a(31),m=a(30),p=a.n(m)()("http://localhost:3000"),s={play:function(e){console.log("sending ".concat(e.card.color).concat(e.card.value," as player id ").concat(e.id)),p.emit("play",e)},draw:function(e){console.log("drawing a card as id ".concat(e.id)),p.emit("draw",e)},uno:function(e){console.log("sending uno signal to server from id ".concat(e.id)),p.emit("uno",e)},sendName:function(e){console.log("sending name ".concat(e.name," to server")),p.emit("giveName",e),p.on("giveID",(function(e){return e.id}))},socket:p},f=function(){return r.a.createElement("div",{id:"deck"},"Deck")},E=function(e){var n=e.opponent;return r.a.createElement("div",null,r.a.createElement("p",null,"Op: ",n.id),r.a.createElement("p",null,"Cards: ",n.hand.length))},v=function(e){var n=e.card,a=e.validateCard;return r.a.createElement("button",{onClick:function(){return a(n)}},n.color,n.value)},h=function(e){var n=e.cards,a=e.validateCard;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:n.length},"Cards in hand: ",n.length))),r.a.createElement("tbody",null,r.a.createElement("tr",null,n.map((function(e){return r.a.createElement("td",{key:"".concat(e.color).concat(e.value),className:"playerCard"},r.a.createElement(v,{card:e,validateCard:a}))})))))},y=function(e){var n=e.player,a=e.cardOnTop,t=e.currTurn,l=n.id===t;return r.a.createElement("div",null,r.a.createElement(h,{cards:n.hand,validateCard:function(n){l?n.color===a.color||n.value===a.value?e.playCard(n):alert("Play a valid card."):n.color===a.color&&n.value===a.value&&e.playCard(n)}}))},g=function(){var e=Object(t.useState)({id:null,hand:[],cardOnTop:[],opponents:[],currTurn:[],winner:[]}),n=Object(d.a)(e,2),a=n[0],l=n[1],c=a.id,o=a.hand,u=a.cardOnTop,m=a.opponents,p=a.currTurn,v=a.winner,h=function(e){s.play({id:c,card:e})};return c&&s.socket.on("fetch",(function(e){return console.log("receiving data as player id ".concat(c)),console.log("player data: ".concat(e.playerData.join())),console.log("hand: "+e.playerData.find((function(e){return e.id===c})).hand),l(Object(i.a)(Object(i.a)({},a),{},{hand:e.playerData.find((function(e){return e.id===c})).hand,cardOnTop:e.topCard,opponents:e.playerData.filter((function(e){return e.id!==c})),currTurn:e.currPlayer,winner:e.winner})),v?r.a.createElement("h1",null,"Game Over Boiz!"):r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,m.map((function(e){return r.a.createElement("td",{key:e.id,className:"opponent"},r.a.createElement(E,{opponent:e}))}))))),r.a.createElement(f,null),r.a.createElement("p",null,"Top Card: ","".concat(u.color).concat(u.value)),r.a.createElement("button",{onClick:function(){return console.log("calling draw"),void s.draw({id:c})}},"Draw"),r.a.createElement(y,{player:{hand:o,id:c},cardOnTop:u,currTurn:p,playCard:h})))})),s.socket.on("giveID",(function(e){l(Object(i.a)(Object(i.a)({},a),{},{id:e.id}))})),null},b=s.sendName({name:"benis"});var C=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(g,{name:"benis",id:b}),r.a.createElement(u,null))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.588c0e31.chunk.js.map