(self.webpackChunk=self.webpackChunk||[]).push([[4634],{7940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var n=a(4165),i=a(5861),o=a(7294),s=a(4042),r=a(5270),l=a(7425);function c(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,n.Z)().mark((function t(e,a,i){var o,l,c,u,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return c=new s.U(o),t.next=21,r.G.create({provider:c});case 21:u=t.sent,(p=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,n){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(t){var e=t.network,a=t.path,s=t.defaultValue,r=t.filter,l=void 0===r?void 0:r,u=(0,o.useState)(""),d=u[0],h=u[1];return e=e.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?p(s.toString(),l,e,h):h(s.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,i.Z)((0,n.Z)().mark((function t(){var i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e,a,h);case 2:if(void 0!==(i=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?p(i,l,e,h):h(i);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),d}},7425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,n){var i=void 0;if("polkadot"===a||"statemint"===a)i=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}t=parseFloat(t),n((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(i)+" "+e[a].symbol).toString())},BlocksToDays:function(t,e){e((t=6*t/86400).toString())}}},7765:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),s=a(7940),r=["components"],l={id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs"],slug:"../learn-account-multisig"},c=void 0,u={unversionedId:"learn/learn-account-multisig",id:"learn/learn-account-multisig",title:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",source:"@site/../docs/learn/learn-account-multisig.md",sourceDirName:"learn",slug:"/learn-account-multisig",permalink:"/docs/learn-account-multisig",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-account-multisig.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1664971763,formattedLastUpdatedAt:"Oct 5, 2022",frontMatter:{id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs"],slug:"../learn-account-multisig"},sidebar:"docs",previous:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"},next:{title:"Assets",permalink:"/docs/learn-assets"}},p={},d=[{value:"Introduction to Multisig Accounts",id:"introduction-to-multisig-accounts",level:2},{value:"Making Transactions with a Multisig Account",id:"making-transactions-with-a-multisig-account",level:3},{value:"Example using Multisig Accounts",id:"example-using-multisig-accounts",level:3},{value:"Decoding Multisig Call Data",id:"decoding-multisig-call-data",level:2}],h={toc:d};function m(t){var e=t.components,l=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-multisig-accounts"},"Introduction to Multisig Accounts"),(0,o.kt)("p",null,"It is possible to create multi-signature accounts (multisig) in Substrate-based chains. A multisig is composed of one or more addresses and a threshold. The threshold defines how many\nsignatories (participating addresses) need to agree on submitting an extrinsic for the call to be\nsuccessful."),(0,o.kt)("p",null,"For example, Alice, Bob, and Charlie set up a multisig with a threshold of 2. This means Alice and\nBob can execute any call even if Charlie disagrees with it. Likewise, Charlie and Bob can execute\nany call without Alice. A threshold is typically a number smaller than the total number of members\nbut can also be equal to it, which means they all have to agree."),(0,o.kt)("admonition",{title:"Explainer on multisig accounts",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about using multisig accounts with the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")," from our\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-cPiKMslZqI"},"technical explainer video"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Check the "How to create a multisig account" section on\n',(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181826-how-to-create-and-use-a-multisig-account"},"this support page"),".\nWe recommend trying out the tutorial on\n",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend network")," - Polkadot's testnet.")),(0,o.kt)("p",null,"Multi-signature accounts have several uses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"securing your stash: use additional signatories as a 2FA mechanism to secure your funds. One\nsigner can be on one computer, and another can be on another or in cold storage. This slows down\nyour interactions with the chain but is orders of magnitude more secure."),(0,o.kt)("li",{parentName:"ul"},"board decisions: legal entities such as businesses and foundations use multisigs to govern over\nthe entity's treasury collectively."),(0,o.kt)("li",{parentName:"ul"},"group participation in governance: a multisig account can do everything a regular account can. A\nmultisig account could be a council member in Kusama's governance, where a set of community\nmembers could vote as one entity.")),(0,o.kt)("p",null,"Multi-signature accounts ",(0,o.kt)("strong",{parentName:"p"},"cannot be modified after being created"),". Changing the set of members or\naltering the threshold is not possible and instead requires the dissolution of the current multisig\nand creation of a new one. As such, multisig account addresses are ",(0,o.kt)("strong",{parentName:"p"},"deterministic"),", i.e. you can\nalways calculate the address of a multisig by knowing the members and the threshold, without the\naccount existing yet. This means one can send tokens to an address that does not exist yet, and if\nthe entities designated as the recipients come together in a new multisig under a matching\nthreshold, they will immediately have access to these tokens."),(0,o.kt)("h3",{id:"making-transactions-with-a-multisig-account"},"Making Transactions with a Multisig Account"),(0,o.kt)("p",null,"There are three types of actions you can take with a multisig account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Executing a call ",(0,o.kt)("inlineCode",{parentName:"li"},"asMulti"),". This is used to begin or end a multisig transaction."),(0,o.kt)("li",{parentName:"ul"},"Approving a call ",(0,o.kt)("inlineCode",{parentName:"li"},"approveAsMulti"),". This is used to approve an extrinsic and pass-on to the next signatory (see ",(0,o.kt)("a",{parentName:"li",href:"#example-using-multi-signature-accounts"},"example below")," for more information)."),(0,o.kt)("li",{parentName:"ul"},"Cancelling a call ",(0,o.kt)("inlineCode",{parentName:"li"},"cancelAsMulti"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#multisig"},"this page")," for more information about the actions you can take with a multi-signature account.")),(0,o.kt)("p",null,"In scenarios where only a single approval is needed, a convenience method ",(0,o.kt)("inlineCode",{parentName:"p"},"as_multi_threshold_1"),"\nshould be used. This function takes only the other signatories and the raw call as arguments. Note that the Polkadot-JS UI does not have integration for this call because it is not possible to create multisig accounts with ",(0,o.kt)("inlineCode",{parentName:"p"},"threshold=1"),". If you want to create a multisig with threshold 1, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core"},"txwrapper-core"),", which is developed and supported by Parity Technologies. There is a detailed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/tree/main/packages/txwrapper-examples/multisig"},"multisig example")," that you can try out and change to see how it works."),(0,o.kt)("p",null,"However, in anything but the simple one approval case, you will likely need more than one of the\nsignatories to approve the call before finally executing it. When you create a new call or approve a\ncall as a multisig, you will need to place a small deposit. The deposit stays locked in the pallet\nuntil the call is executed. The deposit is to establish an economic cost on the storage space that\nthe multisig call takes up on the chain and discourage users from creating dangling multisig\noperations that never get executed. The deposit will be reserved in the caller's accounts, so\nparticipants in multisig wallets should have spare funds available."),(0,o.kt)("p",null,"The deposit is dependent on the ",(0,o.kt)("inlineCode",{parentName:"p"},"threshold")," parameter and is calculated as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deposit = depositBase + threshold * depositFactor\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"depositBase")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"depositFactor")," are chain constants (in DOT units) set in the runtime code. Currently, the deposit base equals ",(0,o.kt)(s.Z,{network:"polkadot",path:"query.multisig.depositBase",defaultValue:20088e7,filter:"humanReadable",mdxType:"RPC"})," DOT and the deposit factor equals ",(0,o.kt)(s.Z,{network:"polkadot",path:"query.multisig.depositFactor",defaultValue:32e7,filter:"humanReadable",mdxType:"RPC"})," DOT."),(0,o.kt)("h3",{id:"example-using-multisig-accounts"},"Example using Multisig Accounts"),(0,o.kt)("admonition",{title:"Walk-through video tutorial",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also see ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-cPiKMslZqI"},"this video tutorial")," for more information about transacting with multisigs using the Accounts Tab, or ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T0vIuJcTJeQ"},"this other video")," using the Extrinsic Tab in the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"multisig diagram",src:a(706).Z,width:"1920",height:"800"})),(0,o.kt)("p",null,"Let's consider an example of a multisig on Polkadot with a threshold of 2 and 3 signers: Charlie,\nDan, and Eleanor. First, Charlie will create the call on-chain by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic with the raw\ncall, in this case, a balance transfer (",(0,o.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic) from multisig CDE to Frank's account. When doing this, Charlie will have to deposit ",(0,o.kt)("inlineCode",{parentName:"p"},"DepositBase + (2 * DepositFactor) = 20.152 DOT"),"\nwhile he waits for either Dan or Eleanor also to approve the balance transfer call using the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.approveAsMulti")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsics."),(0,o.kt)("p",null,"If Dan submits the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.approveAsMulti")," extrinsic, he approves Charlie's call but he passes on the final approval to Eleanor. So, although the multisig has threshold 2, in this case all 3/3 signatories need to participate in the transaction approval. Eleanor will need to submit a ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.approveAsMulti")," extrinsic to transfer funds from CDE to Frank."),(0,o.kt)("p",null,"Alternatively, Dan or Eleanor can just submit a ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic after Charlie to transfer the funds. In this case, 2/3 signatories will participate in the transaction approval. The accounts approving Charlie's call will not need to place the deposit, and Charlie will receive his\ndeposit back once the transfer is successful or canceled. To cancel the transaction, Dan or Eleanor can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig.cancelAsMulti")," extrinsic."),(0,o.kt)("p",null,"Note that multisigs are ",(0,o.kt)("strong",{parentName:"p"},"deterministic"),", which means that multisig addresses are generated from the addresses of signers and the threshold of the multisig wallet. No matter the order of the signatories' accounts, the multisig will always have the same address because accounts' addresses are sorted in ascending order."),(0,o.kt)("admonition",{title:"Addresses that are provided to the multisig wallet are sorted",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Public keys of signers' wallets are compared byte-for-byte and sorted ascending before\nbeing used to generate the multisig address.")),(0,o.kt)("p",null,"This has some implications when using the Extrinsics tab on the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")," to perform multisig transactions. If the order of the ",(0,o.kt)("em",{parentName:"p"},"other signatories")," is wrong, the transaction will fail. This does not happen if the multisig is executed directly from the Accounts tab (recommended). The Polkadot-JS UI supports multisig accounts, as documented on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-account-generation#multi-signature-accounts"},"Account Generation page"),". You can see our video tutorials for more information about creating multisig accounts and transacting with them using both the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-cPiKMslZqI"},"Accounts Tab")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T0vIuJcTJeQ"},"Extrinsic Tab")," in the Polkadot-JS UI."),(0,o.kt)("h2",{id:"decoding-multisig-call-data"},"Decoding Multisig Call Data"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before signing a transaction, it is important to know the exact specifics of what is being signed. Check the ",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181826-how-to-create-and-use-a-multisig-account"},'"How to use a multisig account"')," in the support docs on how to\ndecode the multisig call data")))}m.isMDXComponent=!0},706:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/images/multisig-diagram-90327330a3e865703a0ab1a1cc1eee47.png"},3971:()=>{},6601:()=>{}}]);