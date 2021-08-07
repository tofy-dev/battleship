(()=>{"use strict";const e=document.getElementById("humanBoard"),t=document.getElementById("robotBoard"),r=document.querySelectorAll(".numberRow"),n=document.querySelectorAll(".letterRow"),o=function(){for(let e=0;e<10;e++)n.forEach((t=>{const r=document.createElement("div");r.classList.add("letterTile");const n=String.fromCharCode(e+65);r.appendChild(document.createTextNode(n)),t.appendChild(r)}))},i=function(){for(let e=0;e<10;e++)r.forEach((t=>{const r=document.createElement("div");r.classList.add("numberTile"),r.appendChild(document.createTextNode(e+1)),t.appendChild(r)}))},s=function(){for(let r=0;r<10;r++){const r=document.createElement("div");r.classList.add("boardRow");for(let e=0;e<10;e++){const e=document.createElement("div");e.classList.add("boardTile"),r.appendChild(e)}e.appendChild(r),t.appendChild(r.cloneNode(!0))}},a=function(t){for(const r in t){const n=Array.from(e.children)[parseInt(t[r].slice(1)-1)],o=t[r].charCodeAt(0)-65;Array.from(n.children)[o].classList.add("shipTile")}},c=function(r,n){for(const o in r){const i=r[o];let s;s="robot"===n?Array.from(t.children)[parseInt(i.slice(1)-1)]:Array.from(e.children)[parseInt(i.slice(1)-1)];const a=i.charCodeAt(0)-65;Array.from(s.children)[a].classList.add("sunkTile")}},l=function(r,n){let o;o="robot"===n?Array.from(t.children)[parseInt(r.slice(1)-1)]:Array.from(e.children)[parseInt(r.slice(1)-1)];const i=r.charCodeAt(0)-65,s=Array.from(o.children)[i];s.classList.add("hitTile"),s.textContent="✖"},d=function(r,n){let o;o="robot"===n?Array.from(t.children)[parseInt(r.slice(1)-1)]:Array.from(e.children)[parseInt(r.slice(1)-1)];const i=r.charCodeAt(0)-65,s=Array.from(o.children)[i];s.classList.add("missTile"),s.textContent="⬤"},u=document.getElementById("infoText"),m=(()=>{let e=!0;return document.addEventListener("click",(t=>{e||(t.stopPropagation(),t.preventDefault())}),!0),{makeHumanTurn:function(t,r){const n=t.parentElement,o=String.fromCharCode(Array.from(n.children).indexOf(t)+65),i=Array.from(n.parentElement.children).indexOf(n)+1,s=r.receiveAttack(o+i);s.split(" ").includes("miss")?d(o+i,"robot"):(l(o+i,"robot"),s.split(" ").includes("sunk")&&(c(r[s.split(" ")[0]].coordinates,"robot"),r.gameOver()&&alert("GAME OVER"))),u.textContent=s,e=!1},makeRobotTurn:function(t){const r=t.findRandomCoordinate(),n=t.receiveAttack(r);n.split(" ").includes("miss")?d(r,"human"):(l(r,"human"),n.split(" ").includes("sunk")&&(c(t[n.split(" ")[0]].coordinates,"human"),t.gameOver()&&alert("GAME OVER"))),u.textContent=n,setTimeout((()=>{e=!0}),0)}}})();function h(e,t){let r;return r="carrier"===e?5:"battleship"===e?4:"destroyer"===e||"submarine"===e?3:2,{boatName:e,coordinates:t,boatLength:r,hitTracker:{},hit:function(e){this.hitTracker[e]="hit"},isSunk:function(){return Object.keys(this.hitTracker).length===this.boatLength}}}const f=["A1","B1","C1","D1","E1","F1","G1","H1","I1","J1","A2","B2","C2","D2","E2","F2","G2","H2","I2","J2","A3","B3","C3","D3","E3","F3","G3","H3","I3","J3","A4","B4","C4","D4","E4","F4","G4","H4","I4","J4","A5","B5","C5","D5","E5","F5","G5","H5","I5","J5","A6","B6","C6","D6","E6","F6","G6","H6","I6","J6","A7","B7","C7","D7","E7","F7","G7","H7","I7","J7","A8","B8","C8","D8","E8","F8","G8","H8","I8","J8","A9","B9","C9","D9","E9","F9","G9","H9","I9","J9","A10","B10","C10","D10","E10","F10","G10","H10","I10","J10"];function p(e){const t=h("carrier",e.carrier),r=h("battleship",e.battleship),n=h("destroyer",e.destroyer),o=h("submarine",e.submarine),i=h("patrolBoat",e.patrolBoat),s=[];return{gameOver:function(){return!!(t.isSunk()&&r.isSunk()&&n.isSunk()&&o.isSunk()&&i.isSunk())},receiveAttack:function(a){return e.carrier.includes(a)?(t.hit(a),t.isSunk()?"carrier sunk":"carrier hit"):e.battleship.includes(a)?(r.hit(a),r.isSunk()?"battleship sunk":"battleship hit"):e.destroyer.includes(a)?(n.hit(a),n.isSunk()?"destroyer sunk":"destroyer hit"):e.submarine.includes(a)?(o.hit(a),o.isSunk()?"submarine sunk":"submarine hit"):e.patrolBoat.includes(a)?(i.hit(a),i.isSunk()?"patrolBoat sunk":"patrolBoat hit"):(s.push(a),"miss")},findRandomCoordinate:function(){const e=f[Math.floor(Math.random()*f.length)];return f.splice(f.indexOf(e),1),e},carrier:t,battleship:r,destroyer:n,submarine:o,patrolBoat:i}}const A=document.getElementById("humanBoard"),b=function(){const e=document.querySelectorAll(".boardTile"),t={carrier:[],battleship:[],destroyer:[],submarine:[],patrolBoat:[]},r=[5,4,3,3,2];let n=0;return new Promise((o=>{e.forEach((e=>{const i=e.parentElement,s=Array.from(e.parentElement.children).indexOf(e);e.parentElement.parentElement===A&&(e.addEventListener("mouseover",(()=>{for(let e=0;e<r[n];e++)Array.from(i.childNodes)[s+e].classList.add("shipTempTile")})),e.addEventListener("mouseout",(()=>{for(let e=0;e<r[n];e++)Array.from(i.childNodes)[s+e].classList.remove("shipTempTile")})),e.addEventListener("click",(()=>{for(let e=0;e<r[n];e++){Array.from(i.childNodes)[s+e].classList.add("shipTile");const r=String.fromCharCode(s+e+65),o=Array.from(A.childNodes).indexOf(i)+1;Object.values(t)[n].push(r+o)}console.log(t),++n>4&&o(t)})))}))}))};s(),o(),i(),(async()=>{b().then((e=>{console.log(e),alert("resolved (in index.js)!");for(const t in Object.values(e))a(Object.values(e)[t]);const t=p(e),r=p(e);document.querySelectorAll(".boardTile").forEach((e=>{e.addEventListener("click",(async()=>{m.makeHumanTurn(e,r),setTimeout((()=>{m.makeRobotTurn(t)}),500)}))}))}))})()})();