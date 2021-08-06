(()=>{"use strict";const e=["A1","B1","C1","D1","E1","F1","G1","H1","I1","J1","A2","B2","C2","D2","E2","F2","G2","H2","I2","J2","A3","B3","C3","D3","E3","F3","G3","H3","I3","J3","A4","B4","C4","D4","E4","F4","G4","H4","I4","J4","A5","B5","C5","D5","E5","F5","G5","H5","I5","J5","A6","B6","C6","D6","E6","F6","G6","H6","I6","J6","A7","B7","C7","D7","E7","F7","G7","H7","I7","J7","A8","B8","C8","D8","E8","F8","G8","H8","I8","J8","A9","B9","C9","D9","E9","F9","G9","H9","I9","J9","A10","B10","C10","D10","E10","F10","G10","H10","I10","J10"],t=document.getElementById("infoText"),r=async function(e){t.textContent=`${e.toUpperCase()}!`},n=document.getElementById("humanBoard"),i=document.getElementById("robotBoard"),a=document.querySelectorAll(".numberRow"),o=document.querySelectorAll(".letterRow"),s=(()=>{let t=!0;return document.addEventListener("click",(e=>{t||(e.stopPropagation(),e.preventDefault())}),!0),{makeHumanTurn:function(e,n){const i=e.parentElement,a=String.fromCharCode(Array.from(i.children).indexOf(e)+65),o=Array.from(i.parentElement.children).indexOf(i)+1,s=n.receiveAttack(a+o);s.split(" ").includes("miss")?c.drawMissTile(a+o,"robot"):(c.drawHitTile(a+o,"robot"),s.split(" ").includes("sunk")&&c.drawSunkenShip(n[s.split(" ")[0]].coordinates,"robot")),r(s),t=!1},makeRobotTurn:function(n){const i=function(){const t=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(t),1),t}(),a=n.receiveAttack(i);a.split(" ").includes("hit")||a.split(" ").includes("sunk")?c.drawHitTile(i,"human"):c.drawMissTile(i,"human"),r(a),setTimeout((()=>{t=!0}),0)}}})(),c={makeLetterTiles:function(){for(let e=0;e<10;e++)o.forEach((t=>{const r=document.createElement("div");r.classList.add("letterTile");const n=String.fromCharCode(e+65);r.appendChild(document.createTextNode(n)),t.appendChild(r)}))},makeNumberTiles:function(){for(let e=0;e<10;e++)a.forEach((t=>{const r=document.createElement("div");r.classList.add("numberTile"),r.appendChild(document.createTextNode(e+1)),t.appendChild(r)}))},makeGameTiles:function(){for(let e=0;e<10;e++){const e=document.createElement("div");e.classList.add("boardRow");for(let t=0;t<10;t++){const t=document.createElement("div");t.classList.add("boardTile"),e.appendChild(t)}n.appendChild(e),i.appendChild(e.cloneNode(!0))}},drawHumanShips:function(e){for(const t in e){const r=Array.from(n.children)[parseInt(e[t].slice(1)-1)],i=e[t].charCodeAt(0)-65;Array.from(r.children)[i].classList.add("shipTile")}},drawSunkenShip:function(e,t){for(const r in e){const a=e[r];let o;o="robot"===t?Array.from(i.children)[parseInt(a.slice(1)-1)]:Array.from(n.children)[parseInt(a.slice(1)-1)];const s=a.charCodeAt(0)-65;Array.from(o.children)[s].classList.add("sunkTile")}},drawHitTile:function(e,t){let r;r="robot"===t?Array.from(i.children)[parseInt(e.slice(1)-1)]:Array.from(n.children)[parseInt(e.slice(1)-1)];const a=e.charCodeAt(0)-65,o=Array.from(r.children)[a];o.classList.add("hitTile"),o.textContent="✖"},drawMissTile:function(e,t){let r;r="robot"===t?Array.from(i.children)[parseInt(e.slice(1)-1)]:Array.from(n.children)[parseInt(e.slice(1)-1)];const a=e.charCodeAt(0)-65,o=Array.from(r.children)[a];o.classList.add("missTile"),o.textContent="⬤"}};function l(e,t){let r;return r="carrier"===e?5:"battleship"===e?4:"destroyer"===e||"submarine"===e?3:2,{boatName:e,coordinates:t,boatLength:r,hitTracker:{},hit:function(e){this.hitTracker[e]="hit"},isSunk:function(){return Object.keys(this.hitTracker).length===this.boatLength}}}function d(e){const t=l("carrier",e.carrier),r=l("battleship",e.battleship),n=l("destroyer",e.destroyer),i=l("submarine",e.submarine),a=l("patrolBoat",e.patrolBoat),o=[];return{gameOver:function(){return!!(t.isSunk()&&r.isSunk()&&n.isSunk()&&i.isSunk()&&a.isSunk())},receiveAttack:function(s){return e.carrier.includes(s)?(t.hit(s),t.isSunk()?"carrier sunk":"carrier hit"):e.battleship.includes(s)?(r.hit(s),r.isSunk()?"battleship sunk":"battleship hit"):e.destroyer.includes(s)?(n.hit(s),n.isSunk()?"destroyer sunk":"destroyer hit"):e.submarine.includes(s)?(i.hit(s),i.isSunk()?"submarine sunk":"submarine hit"):e.patrolBoat.includes(s)?(a.hit(s),a.isSunk()?"patrolBoat sunk":"patrolBoat hit"):(o.push(s),"miss")},carrier:t,battleship:r,destroyer:n,submarine:i,patrolBoat:a}}c.makeGameTiles(),c.makeLetterTiles(),c.makeNumberTiles();const u={carrier:["A1","B1","C1","D1","E1"],battleship:["A2","B2","C2","D2"],destroyer:["A3","B3","C3"],submarine:["A4","B4","C4"],patrolBoat:["A5","B5"]};for(const e in Object.values(u))c.drawHumanShips(Object.values(u)[e]);const m=d(u),h=d(u);document.querySelectorAll(".boardTile").forEach((e=>{e.addEventListener("click",(async()=>{s.makeHumanTurn(e,h),setTimeout((()=>{s.makeRobotTurn(m)}),500)}))}))})();