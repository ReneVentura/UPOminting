(this.webpackJsonpupo_minting_dapp=this.webpackJsonpupo_minting_dapp||[]).push([[0],{246:function(t,n){},255:function(t,n){},273:function(t,n){},275:function(t,n){},294:function(t,n){},295:function(t,n){},358:function(t,n){},360:function(t,n){},393:function(t,n){},395:function(t,n){},396:function(t,n){},401:function(t,n){},403:function(t,n){},409:function(t,n){},411:function(t,n){},424:function(t,n){},436:function(t,n){},439:function(t,n){},444:function(t,n){},452:function(t,n){},461:function(t,n){},463:function(t,n){},533:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c,o,a,r,i,s,l,d,u,x,j,f,p,b,h,g,O=e(2),m=e(85),y=e.n(m),v=e(16),C=e.n(v),A=e(43),w=e(69),E=e(14),S=e(58),T=e(68),N=e.n(T),_=e(220),k=e.n(_),F=e(70),M=e(221),L=e(19),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},D),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},t),{},{account:n.payload.account});default:return t}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,whitelisted:n.payload.whitelisted,cost:n.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},P=Object(F.b)({blockchain:I,data:K}),U=[M.a],W=Object(F.c)(F.a.apply(void 0,U)),Y=Object(F.d)(P,W),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(A.a)(C.a.mark((function t(n){var e,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return e=t.sent,t.t0=Y.getState().blockchain.smartContract.methods,t.next=8,Y.getState().blockchain.account;case 8:return t.t1=t.sent,t.next=11,t.t0.whitelisted.call(t.t0,t.t1).call();case 11:return c=t.sent,t.t2=console,t.next=15,Y.getState().blockchain.account;case 15:return t.t3=t.sent,t.t4="esto es de data "+t.t3,t.t2.log.call(t.t2,t.t4),t.next=20,Y.getState().blockchain.smartContract.methods.cost().call();case 20:o=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e,whitelisted:c,cost:o}}),console.log(Boolean(c)),t.next=29;break;case 25:t.prev=25,t.t5=t.catch(1),console.log(t.t5),n(z("Could not load data from contract."));case 29:case"end":return t.stop()}}),t,null,[[1,25]])})));return function(n){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(A.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},X=e(15),Q=X.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),q=X.a.div(o||(o=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=X.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=X.a.div(r||(r=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=X.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=X.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=X.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(X.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),et=(X.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(1)),ct=X.a.button(j||(j=Object(E.a)(["\n \n  font-size: 1.5em;\n  font-family: var(--font);\n  width: 150px;\n  height: 50px;\n  background: var(--secondary);\n  border: 0px;\n  letter-spacing: 3px;\n  position: relative;\n  clip-path: polygon(3% 0, 100% 0, 100% 80%, 94% 100%, 50% 100%, 0 100%, 0 10%);\n  border-radius: 5px;\n  transition: background .5s,color .5s;\n  :hover{\n    background: #fff;\ncolor: #000;\n  }\n  :active{\n    background: #fff;\n    color: #000;\n  }\n  \n"]))),ot=X.a.button(f||(f=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=X.a.div(p||(p=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),rt=X.a.img(b||(b=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=X.a.img(h||(h=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px  var(--secondary);\n  background-color: var(--accent);\n  border-radius: 30%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),st=X.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var lt=function(){var t=Object(S.b)(),n=Object(S.c)((function(t){return t.blockchain})),e=Object(S.c)((function(t){return t.data})),c=Object(O.useState)(!1),o=Object(w.a)(c,2),a=o[0],r=o[1],i=Object(O.useState)("Click buy to mint your NFT."),s=Object(w.a)(i,2),l=s[0],d=s[1],u=Object(O.useState)(1),x=Object(w.a)(u,2),j=x[0],f=x[1],p=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),b=Object(w.a)(p,2),h=b[0],g=b[1],m=e.cost;m=e.whitelisted?0:e.cost;var y,v,E=function(){""!==n.account&&null!==n.smartContract&&(t(B(n.account)),console.log(e.whitelisted))},T=function(){var t=Object(A.a)(C.a.mark((function t(){var n,e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,g(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){T()}),[]),Object(O.useEffect)((function(){E()}),[n.account]),Object(et.jsx)(Q,{children:Object(et.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:h.SHOW_BACKGROUND?"/config/images/fondo.jpg":null,children:[Object(et.jsx)("a",{href:h.MARKETPLACE_LINK,children:Object(et.jsx)(rt,{alt:"logo",src:"/config/images/upologo2.png"})}),Object(et.jsx)(J,{}),Object(et.jsxs)(at,{flex:1,style:{padding:24},test:!0,children:[Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/upo.gif"})}),Object(et.jsx)(Z,{}),Object(et.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px  var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[""===n.account||null===n.smartContract?Object(et.jsx)(et.Fragment,{children:Object(et.jsxs)(tt,{style:{fontFamily:"var(--font)",textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:["Get one of ",h.MAX_SUPPLY," UPOs"]})}):Object(et.jsx)(et.Fragment,{children:Object(et.jsxs)(tt,{style:{fontFamily:"var(--font)",textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[e.totalSupply," / ",h.MAX_SUPPLY]})}),Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--primary-text)"},children:Object(et.jsx)(st,{target:"_blank",href:h.SCAN_LINK,children:(y=h.CONTRACT_ADDRESS,v=15,y.length>v?"".concat(y.substring(0,v),"..."):y)})}),Object(et.jsxs)("span",{style:{fontFamily:"var(--font)",textAlign:"center"},children:[Object(et.jsx)(ct,{onClick:function(t){window.open("https://www.nfcreed.com/")},style:{margin:"5px"},children:"Roadmap"}),Object(et.jsx)(ct,{style:{margin:"5px"},onClick:function(t){window.open(h.MARKETPLACE_LINK,"_blank")},children:h.MARKETPLACE})]}),Object(et.jsx)(J,{}),Number(e.totalSupply)>=h.MAX_SUPPLY?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",h.NFT_NAME," on"]}),Object(et.jsx)(J,{}),Object(et.jsx)(st,{target:"_blank",href:h.MARKETPLACE_LINK,children:h.MARKETPLACE})]}):Object(et.jsxs)(et.Fragment,{children:[""===n.account||null===n.smartContract?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"Welcome to UPO minting Page."}),Object(et.jsx)(q,{}),Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"Go on and mint your UPO."}),Object(et.jsx)(J,{})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsxs)(tt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:[1==e.whitelisted?Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"You are Whitelisted !!!"})}):Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"Become one of our Holders !!!"})}),"1 ",h.SYMBOL," costs ",(1e-18*m).toFixed(2)," ",h.NETWORK.SYMBOL,"."]}),Object(et.jsx)(q,{}),Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(et.jsx)(J,{})]}),""===n.account||null===n.smartContract?Object(et.jsxs)($,{ai:"center",jc:"center",children:[Object(et.jsxs)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",h.NETWORK.NAME," network"]}),Object(et.jsx)(J,{}),Object(et.jsx)(ct,{onClick:function(n){n.preventDefault(),t(function(){var t=Object(A.a)(C.a.mark((function t(n){var e,c,o,a,r,i,s,l,d;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:if(a=t.sent,r=window,!(i=r.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(H("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(H("Something went wrong."));case 31:t.next=34;break;case 33:n(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),E()},children:"CONNECT"}),""!==n.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:l}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(et.jsx)(ot,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(t){t.preventDefault(),function(){var t=j-1;t<1&&(t=1),f(t)}()},children:"-"}),Object(et.jsx)(V,{}),Object(et.jsx)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--accent-text)"},children:j}),Object(et.jsx)(V,{}),Object(et.jsx)(ot,{disabled:a?1:0,onClick:function(t){t.preventDefault(),function(){var t=j+1;t>5&&(t=5),f(t)}()},children:"+"})]}),Object(et.jsx)(J,{}),Object(et.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(et.jsx)(ct,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=h.GAS_LIMIT,c=String(m*j),o=String(e*j);console.log("Cost: ",c),console.log("Gas limit: ",o),d("Minting your ".concat(h.NFT_NAME,"...")),r(!0),n.smartContract.methods.mint(n.account,j).send({gasLimit:String(o),to:h.CONTRACT_ADDRESS,from:n.account,value:c}).once("error",(function(t){console.log(t),d("Sorry, something went wrong please try again later."),r(!1)})).then((function(e){console.log(e),d("WOW, the ".concat(h.NFT_NAME," is yours! go visit Opensea.io to view it.")),r(!1),t(B(n.account))}))}(),E()},children:a?"BUSY":"MINT"})})]})]}),Object(et.jsx)(V,{})]}),Object(et.jsx)(Z,{}),Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/upo.gif",style:{transform:"scaleX(-1)"}})})]}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsxs)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--secondary-text)"},children:["Please make sure you are connected to the right network (",h.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(et.jsx)(J,{}),Object(et.jsxs)(nt,{style:{fontFamily:"var(--font)",textAlign:"center",color:"var(--secondary-text)"},children:["We have set the gas limit to ",h.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},dt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),a(t),r(t)}))};e(533);y.a.render(Object(et.jsx)(S.a,{store:Y,children:Object(et.jsx)(lt,{})}),document.getElementById("root")),dt()}},[[534,1,2]]]);
//# sourceMappingURL=main.9cb2fd3b.chunk.js.map