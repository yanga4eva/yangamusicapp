(this["webpackJsonp@yanga4eva/yangamusicapp"]=this["webpackJsonp@yanga4eva/yangamusicapp"]||[]).push([[0],{360:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(16),s=a.n(i),o=(a(309),a(53)),l=a.n(o),j=a(67),b=a(31),d=a(374),p=a(402),u=a(399),h=a(400),x=a(375),O=a(289),m=(a(311),O.a.initializeApp({apiKey:"AIzaSyAoPzwKJ-s2hBsLnXrAkTtUwdrgLhiz5oY",authDomain:"yanga-auth-dev.firebaseapp.com",projectId:"yanga-auth-dev",storageBucket:"yanga-auth-dev.appspot.com",messagingSenderId:"327077311329",appId:"1:327077311329:web:31f6a81b49500e83578b20"})),g=m.auth(),f=r.a.createContext();function v(){return Object(c.useContext)(f)}function w(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(!0),l=Object(b.a)(o,2),j=l[0],d=l[1];Object(c.useEffect)((function(){return g.onAuthStateChanged((function(e){s(e),d(!1)}))}));var p={currentUser:i,signup:function(e,t){return g.createUserWithEmailAndPassword(e,t)},login:function(e,t){return g.signInWithEmailAndPassword(e,t)},logout:function(){return g.signOut()},resetpassword:function(e){return g.sendPasswordResetEmail(e)}};return Object(n.jsx)(f.Provider,{value:p,children:!j&&t})}var y=a(27),S=a(44);function C(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=v().signup,i=Object(c.useState)(""),s=Object(b.a)(i,2),o=s[0],O=s[1],m=Object(c.useState)(!1),g=Object(b.a)(m,2),f=g[0],w=g[1],C=Object(y.g)();function k(){return(k=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",O("Passwords do not match"));case 3:return n.prev=3,O(""),w(!0),n.next=8,r(e.current.value,t.current.value);case 8:C.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),O("Failed to create account");case 14:w(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:[Object(n.jsx)(p.a,{children:Object(n.jsxs)(p.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign up"}),o&&Object(n.jsx)(u.a,{variant:"danger",children:o}),Object(n.jsxs)(h.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"passwordconfirmation",children:[Object(n.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(n.jsx)(h.a.Control,{type:"password",ref:a,required:!0})]}),Object(n.jsx)(x.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(n.jsx)(S.b,{to:"/login",children:"Log In"})]})]})})}a(321);function k(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=v().login,r=Object(c.useState)(""),i=Object(b.a)(r,2),s=i[0],o=i[1],O=Object(c.useState)(!1),m=Object(b.a)(O,2),g=m[0],f=m[1],w=Object(y.g)();function C(){return(C=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,o(""),f(!0),n.next=6,a(e.current.value,t.current.value);case 6:w.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o("Failed to sign in");case 12:f(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsx)(p.a,{children:Object(n.jsxs)(p.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(n.jsx)(u.a,{variant:"danger",children:s}),Object(n.jsxs)(h.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(h.a.Group,{id:"password",children:[Object(n.jsx)(h.a.Label,{children:"Password"}),Object(n.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsx)(x.a,{disabled:g,className:"w-100",type:"submit",children:"Log In"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(S.b,{to:"/forgotpassword",children:"Forgot password?"})})]})})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(n.jsx)(S.b,{to:"/signup",children:"Sign up"})]})]})}var I=a(22),N=a(3),R=a(393),z=a(77),L=a(383),D=a(288),F=a(9),B=a(381),A=a(114),T=a.n(A),G=a(403),P=a(380),W=a(382),E=a(32),M=a(199),H=Object(D.a)((function(){return{text:{fontFamily:"Barlow, san-serif",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},name:{fontWeight:600,fontSize:"1rem",color:"#122740"},caption:{fontSize:"0.875rem",color:"#758392",marginTop:-4},btn:{borderRadius:20,padding:"0.125rem 0.75rem",borderColor:"#becddc",fontSize:"0.75rem"}}})),U=function(e){var t=e.src,a=e.name,c=e.friendCount,r=Object(M.useDynamicAvatarStyles)({size:56}),i=H();return Object(n.jsxs)(E.Row,{gap:2,p:2.5,children:[Object(n.jsx)(E.Item,{children:Object(n.jsx)(G.a,{classes:r,src:t})}),Object(n.jsxs)(E.Row,{wrap:!0,grow:!0,gap:.5,minWidth:0,children:[Object(n.jsxs)(E.Item,{grow:!0,minWidth:0,children:[Object(n.jsx)("div",{className:Object(N.default)(i.name,i.text),children:a}),Object(n.jsxs)("div",{className:Object(N.default)(i.caption,i.text),children:[c," mutual friends"]})]}),Object(n.jsx)(E.Item,{position:"middle",children:Object(n.jsx)(P.a,{className:i.btn,variant:"outlined",children:"Follow"})})]})]})},q=Object(D.a)((function(){return{card:{width:"auto",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"}}})),J=r.a.memo((function(){var e=q();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{children:Object(n.jsx)(T.a,{fonts:[{font:"Barlow",weights:[400,600]}]})}),Object(n.jsxs)(E.Column,{p:0,gap:4,className:e.card,children:[Object(n.jsxs)(E.Row,{wrap:!0,p:2,alignItems:"baseline",className:e.header,children:[Object(n.jsx)(E.Item,{stretched:!0,className:e.headline,children:"Who to follow"}),Object(n.jsxs)(E.Item,{className:e.actions,children:[Object(n.jsx)(W.a,{className:e.link,children:"Refresh"})," \u2022"," ",Object(n.jsx)(W.a,{className:e.link,children:"See all"})]})]}),Object(n.jsx)(U,{name:"Amber Matthews",friendCount:6,src:"https://i.pravatar.cc/300?img=10"}),Object(n.jsx)(L.a,{variant:"middle",className:e.divider}),Object(n.jsx)(U,{name:"Russel Robertson",friendCount:2,src:"https://i.pravatar.cc/300?img=20"}),Object(n.jsx)(L.a,{variant:"middle",className:e.divider}),Object(n.jsx)(U,{name:"Kathleen Ellis",friendCount:2,src:"https://i.pravatar.cc/300?img=30"})]})]})})),K=a(34),Y=a(384),V=a(206),X=a.n(V),Q=a(205),Z=a.n(Q),_=a(65),$=a(203),ee=a(204),te=Object(D.a)((function(){return{text:{display:"flex",alignItems:"center","& > svg":{fontSize:18,color:"#888",marginRight:4}}}})),ae=r.a.memo((function(){var e={blur:"12px",radius:16,size:48,opacity:.6},t="https://cdn1.vectorstock.com/i/1000x1000/85/40/music-abstract-poster-cover-1980s-style-background-vector-11958540.jpg",a=Object($.useGrowAvatarStyles)(Object(K.a)({src:t},e)),c="https://www.designformusic.com/wp-content/uploads/2016/04/orion-trailer-music-album-cover-design.jpg",r=Object($.useGrowAvatarStyles)(Object(K.a)({src:c},e)),i=te();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{children:Object(n.jsx)(T.a,{fonts:[{font:"Questrial"}]})}),Object(n.jsxs)(E.Column,{gap:2,width:"100%",children:[Object(n.jsxs)(E.Row,{children:[Object(n.jsx)(E.Item,{children:Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(G.a,{src:t})})}),Object(n.jsxs)(_.Info,{useStyles:ee.useMusicInfoStyles,minWidth:0,children:[Object(n.jsx)(_.InfoTitle,{children:"Hitz Playlist"}),Object(n.jsx)(_.InfoSubtitle,{children:"by Fortunatus Inyang"}),Object(n.jsxs)(_.InfoCaption,{className:i.text,children:[Object(n.jsx)(Z.a,{})," 124 Songs..."]})]}),Object(n.jsx)(E.Item,{position:"right",children:Object(n.jsx)(Y.a,{size:"small",children:Object(n.jsx)(X.a,{style:{color:"#2596be"}})})})]}),Object(n.jsxs)(E.Row,{mt:2,children:[Object(n.jsx)(E.Item,{children:Object(n.jsx)("div",{className:r.root,children:Object(n.jsx)(G.a,{src:c})})}),Object(n.jsxs)(_.Info,{useStyles:ee.useMusicInfoStyles,minWidth:0,children:[Object(n.jsx)(_.InfoTitle,{children:"Cools Playlist"}),Object(n.jsx)(_.InfoSubtitle,{children:"by Jake Miller"}),Object(n.jsxs)(_.InfoCaption,{className:i.text,children:[Object(n.jsx)(Z.a,{})," 100 Songs..."]})]}),Object(n.jsx)(E.Item,{position:"right",children:Object(n.jsx)(Y.a,{size:"small",children:Object(n.jsx)(X.a,{style:{color:"#2596be"}})})})]})]})]})})),ne=a(149),ce=a(150),re=a(153),ie=a(151),se=a(5),oe=a(385),le=a(386),je=a(389),be=a(388),de=a(387),pe=function(e){Object(re.a)(a,e);var t=Object(ie.a)(a);function a(e){var n;return Object(ne.a)(this,a),(n=t.call(this,e)).state={data:[],snippets:[],title:[],imgArt:[]},n}return Object(ce.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCrKZcyOJVWnJ60zM1XWllNw&maxResults=6&fields=items%2Fid%2C%20items%2Fsnippet(title%2C%20description%2C%20thumbnails%2C%20channelTitle)&key=AIzaSyA10qc7mm9BuLSzRH0j0x8_YLDl5hESMP4").then((function(e){return e.json()})).then((function(t){return e.setState({snippets:t.items})}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state.snippets;return console.log(this.state.snippets[0]),Object(n.jsx)(B.a,{children:Object(n.jsx)(R.a,{container:!0,className:e.header2,spacing:3,style:{justify:"center"},children:t.map((function(t){return Object(n.jsx)(R.a,{children:Object(n.jsx)(z.a,{className:e.typography,children:Object(n.jsxs)(oe.a,{className:e.root,children:[Object(n.jsxs)(le.a,{children:[Object(n.jsx)(je.a,{className:e.media,image:t.snippet.thumbnails.high.url,title:t.snippet.title}),Object(n.jsxs)(be.a,{children:[Object(n.jsx)(z.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.snippet.title}),Object(n.jsx)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:t.snippet.description})]})]}),Object(n.jsxs)(de.a,{children:[Object(n.jsx)(P.a,{size:"small",color:"primary",children:"Play On YT Music"}),Object(n.jsx)(P.a,{size:"small",color:"primary",children:"View Playlist"})]})]})})})}))})})}}]),a}(r.a.Component),ue=Object(se.a)((function(e){return{root:{maxWidth:320,minWidth:"auto",position:"relative"},media:{height:140},header2:{maxWidth:"auto",margin:"auto",color:"white"},typography:{padding:e.spacing(2),display:"block"}}}),{withTheme:!0})(pe),he=a(141),xe=a.n(he),Oe=a(392),me=Object(D.a)((function(e){var t;return{root:{flexGrow:1,margin:10},paper:{padding:e.spacing(5),textAlign:"center",color:e.palette.text.secondary},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",border:"2px"},header1:{paddingTop:"3px",margin:"auto",backgroundColor:"#2596be",color:"white",paddingLeft:"5px"},header2:{display:"flex",margin:"auto",paddingLeft:"5px"},inputRoot:{color:"inherit"},inputInput:Object(I.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"50ch"}),gridgenre:{margin:"auto",alignContent:"center"},search:(t={position:"relative",boxShadow:"0 8px 16px 0 #BDC9D7",borderRadius:3},Object(I.a)(t,"borderRadius",e.shape.borderRadius),Object(I.a)(t,"backgroundColor","fade(theme.palette.common.white, 0.15)"),Object(I.a)(t,"&:hover",{backgroundColor:Object(F.d)(e.palette.common.white,.25)}),Object(I.a)(t,"marginRight",e.spacing(2)),Object(I.a)(t,"marginLeft",0),Object(I.a)(t,"width","100%"),Object(I.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),t),card:{borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},logoHead:{margin:"auto"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"},typography:{padding:e.spacing(1),display:"block"},searchGrid:{textAlign:"center",marginTop:"50px"},followGrid:{marginTop:"100px",marginRight:"15px",marginLeft:"15px"}}}));function ge(){var e=me();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(R.a,{container:!0,spacing:3,children:[Object(n.jsx)(R.a,{item:!0,xs:2}),Object(n.jsx)(R.a,{item:!0,xs:8,className:e.searchGrid,children:Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)(xe.a,{}),Object(n.jsx)(Oe.a,{placeholder:"Search friends, people, playlist...",multiline:!0,classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(n.jsx)(R.a,{item:!0,xs:2})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(R.a,{container:!0,spacing:3,style:{},children:[Object(n.jsx)(R.a,{xs:!0}),Object(n.jsx)(R.a,{xs:9}),Object(n.jsx)(R.a,{xs:!0})]})]})}var fe=Object(D.a)((function(e){var t;return{header1:{paddingTop:"3px",margin:"auto",backgroundColor:"#2596be",color:"white",paddingLeft:"5px"},header2:{display:"flex",margin:"auto",color:"white"},inputRoot:{color:"inherit"},inputInput:Object(I.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"50ch"}),gridgenre:{margin:"auto",alignContent:"center"},search:(t={position:"relative",boxShadow:"0 8px 16px 0 #BDC9D7",borderRadius:3},Object(I.a)(t,"borderRadius",e.shape.borderRadius),Object(I.a)(t,"backgroundColor","fade(theme.palette.common.white, 0.15)"),Object(I.a)(t,"&:hover",{backgroundColor:Object(F.d)(e.palette.common.white,.25)}),Object(I.a)(t,"marginRight",e.spacing(2)),Object(I.a)(t,"marginLeft",0),Object(I.a)(t,"width","100%"),Object(I.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),t),card:{borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},logoHead:{margin:"auto"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"},typography:{padding:e.spacing(1),display:"block"},searchGrid:{textAlign:"center",marginTop:"50px"},followGrid:{marginTop:"100px",marginRight:"15px",marginLeft:"15px"}}}));function ve(){var e=fe();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ge,{}),Object(n.jsx)("div",{className:e.followGrid,children:Object(n.jsxs)(R.a,{container:!0,spacing:3,children:[Object(n.jsxs)(R.a,{item:!0,xs:12,lg:2,children:[Object(n.jsxs)(R.a,{container:!0,className:e.header1,children:[Object(n.jsx)("h3",{children:"Trending"}),Object(n.jsx)("br",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(ae,{})]}),Object(n.jsxs)(R.a,{item:!0,xs:12,lg:7,children:[Object(n.jsxs)(R.a,{container:!0,className:e.header1,children:[Object(n.jsx)("h3",{children:"Top Genre"}),Object(n.jsx)("br",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(ue,{})]}),Object(n.jsxs)(R.a,{item:!0,xs:12,lg:3,children:[Object(n.jsxs)(R.a,{container:!0,className:e.header1,children:[Object(n.jsx)("h3",{children:"Who to follow"}),Object(n.jsx)("br",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(J,{})]})]})})]})}var we=a(154),ye=a(189),Se=a(401),Ce=a(397);function ke(e){var t=e.children,a=e.value,c=e.index,r=Object(we.a)(e,["children","value","index"]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(z.a,Object(K.a)(Object(K.a)({component:"div",role:"tabpanel",hidden:a!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},r),{},{children:a===c&&Object(n.jsx)(ye.a,{p:3,children:t})}))})}function Ie(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ne=Object(D.a)((function(e){return{root:{flexGrow:1,justifyContent:"center",width:"auto"}}}));function Re(){var e=Ne(),t=r.a.useState(0),a=Object(b.a)(t,2),c=a[0],i=a[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)(R.a,{container:!0,children:[Object(n.jsx)(R.a,{xs:4}),Object(n.jsx)(R.a,{children:Object(n.jsxs)(Se.a,{value:c,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",children:[Object(n.jsx)(Ce.a,Object(K.a)(Object(K.a)({label:"Home"},Ie(0)),{},{style:{outline:"none"}})),Object(n.jsx)(Ce.a,Object(K.a)(Object(K.a)({label:"Playlists"},Ie(1)),{},{style:{outline:"none"}})),Object(n.jsx)(Ce.a,Object(K.a)(Object(K.a)({label:"Followers"},Ie(2)),{},{style:{outline:"none"}}))]})}),Object(n.jsx)(R.a,{xs:4})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(ke,{value:c,index:0,children:Object(n.jsx)(ve,{})}),Object(n.jsx)(ke,{value:c,index:1,children:"Item Two"}),Object(n.jsx)(ke,{value:c,index:2,children:"Item Three"})]})})}var ze=a(293),Le=a(396),De=a(295),Fe=a.n(De),Be=a(394),Ae=a(395),Te=a(296),Ge=a.n(Te),Pe=a(297),We=a.n(Pe),Ee=a(298),Me=a.n(Ee),He=Object(se.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(n.jsx)(ze.a,Object(K.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Ue=Object(se.a)((function(e){return{root:{"&:focus":{backgroundColor:"#2596be","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Le.a);function qe(){var e=r.a.useState(null),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)(R.a,{children:[Object(n.jsx)(Fe.a,{fontSize:"large","aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"yellow",style:{color:"#2596be"},onClick:function(e){c(e.currentTarget)}}),Object(n.jsxs)(He,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){c(null)},children:[Object(n.jsxs)(Ue,{children:[Object(n.jsx)(Be.a,{children:Object(n.jsx)(Ge.a,{fontSize:"small"})}),Object(n.jsx)(Ae.a,{primary:"My profile"})]}),Object(n.jsxs)(Ue,{children:[Object(n.jsx)(Be.a,{children:Object(n.jsx)(We.a,{fontSize:"small"})}),Object(n.jsx)(Ae.a,{primary:"Settings"})]}),Object(n.jsxs)(Ue,{children:[Object(n.jsx)(Be.a,{children:Object(n.jsx)(Me.a,{fontSize:"small"})}),Object(n.jsx)(Ae.a,{primary:"Logout"})]})]})]})}var Je=Object(D.a)((function(e){var t;return{root:{flexGrow:1,margin:10},paper:{padding:e.spacing(5),textAlign:"center",color:e.palette.text.secondary},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",border:"2px"},header1:{paddingTop:"3px",margin:"auto",backgroundColor:"#2596be",color:"white",paddingLeft:"5px"},header2:{display:"flex",margin:"auto",paddingLeft:"5px"},inputRoot:{color:"inherit"},inputInput:Object(I.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"50ch"}),gridgenre:{margin:"auto",alignContent:"center"},search:(t={position:"relative",boxShadow:"0 8px 16px 0 #BDC9D7",borderRadius:3},Object(I.a)(t,"borderRadius",e.shape.borderRadius),Object(I.a)(t,"backgroundColor","fade(theme.palette.common.white, 0.15)"),Object(I.a)(t,"&:hover",{backgroundColor:Object(F.d)(e.palette.common.white,.25)}),Object(I.a)(t,"marginRight",e.spacing(2)),Object(I.a)(t,"marginLeft",0),Object(I.a)(t,"width","100%"),Object(I.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),t),card:{borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",overflow:"hidden"},logoHead:{margin:"auto"},header:{fontFamily:"Barlow, san-serif",backgroundColor:"#fff"},headline:{color:"#122740",fontSize:"1.25rem",fontWeight:600},link:{color:"#2281bb",padding:"0 0.25rem",fontSize:"0.875rem"},actions:{color:"#BDC9D7"},divider:{backgroundColor:"#d9e2ee",margin:"0 20px"},typography:{padding:e.spacing(1),display:"block"},searchGrid:{textAlign:"center",marginTop:"50px"},followGrid:{marginTop:"100px",marginRight:"15px",marginLeft:"15px"}}}));function Ke(){var e=Object(c.useState)(),t=Object(b.a)(e,2),a=(t[0],t[1],v()),r=a.currentUser;a.logout,Object(y.g)();console.log(r);var i=Je();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:i.root,children:Object(n.jsxs)(R.a,{container:!0,spacing:3,children:[Object(n.jsx)(R.a,{item:!0,xs:3,children:Object(n.jsx)(z.a,{className:i.typography,children:"YMUSICS"})}),Object(n.jsx)(R.a,{item:!0,xs:6}),Object(n.jsxs)(R.a,{container:!0,item:!0,xs:3,className:i.logoHead,children:[Object(n.jsx)(qe,{}),Object(n.jsx)(R.a,{children:"Welcome"})]})]})}),Object(n.jsx)(L.a,{}),Object(n.jsxs)(R.a,{container:!0,spacing:3,children:[Object(n.jsx)(R.a,{item:!0,xs:2}),Object(n.jsx)(R.a,{item:!0,xs:8,className:i.searchGrid}),Object(n.jsx)(R.a,{item:!0,xs:2})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(R.a,{container:!0,spacing:3,style:{},children:[Object(n.jsx)(R.a,{xs:!0}),Object(n.jsx)(R.a,{xs:9}),Object(n.jsx)(R.a,{xs:!0})]}),Object(n.jsx)(Re,{})]})}function Ye(){var e=Object(c.useRef)(),t=v().resetPassword,a=Object(c.useState)(),r=Object(b.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(""),d=Object(b.a)(o,2),O=d[0],m=d[1],g=Object(c.useState)(!1),f=Object(b.a)(g,2),w=f[0],y=f[1];function C(){return(C=Object(j.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,s(""),m(""),y(!0),a.next=7,t(e.current.value);case 7:s("Check your inbox for further instruction"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),m("Failed reset password");case 13:y(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{children:Object(n.jsxs)(p.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),O&&Object(n.jsx)(u.a,{variant:"danger",children:O}),i&&Object(n.jsx)(u.a,{variant:"success",children:i}),Object(n.jsxs)(h.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(n.jsxs)(h.a.Group,{id:"email",children:[Object(n.jsx)(h.a.Label,{children:"Email"}),Object(n.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsx)(x.a,{disabled:w,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(S.b,{to:"/login",children:"Log in?"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(n.jsx)(S.b,{to:"/signup",children:"Sign up"})]})]})}var Ve=function(e){Object(re.a)(a,e);var t=Object(ie.a)(a);function a(){var e;Object(ne.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(ce.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("nav",{class:"bp3-navbar .modifier",children:[Object(n.jsxs)("div",{class:"bp3-navbar-group bp3-align-left",children:[Object(n.jsx)("div",{class:"bp3-navbar-heading",children:"Fored | Finance "}),Object(n.jsx)("input",{class:"bp3-input",placeholder:"Search Stock...",type:"text"})]}),Object(n.jsxs)("div",{class:"bp3-navbar-group bp3-align-right",children:[Object(n.jsx)("button",{class:"bp3-button bp3-minimal bp3-icon-home",children:"Home"}),Object(n.jsx)("button",{class:"bp3-button bp3-minimal bp3-icon-document",children:"My Stock"}),Object(n.jsx)("span",{class:"bp3-navbar-divider"}),Object(n.jsx)("button",{class:"bp3-button bp3-minimal bp3-icon-user"}),Object(n.jsx)("button",{class:"bp3-button bp3-minimal bp3-icon-notifications"}),Object(n.jsx)("button",{class:"bp3-button bp3-minimal bp3-icon-cog"})]})]})})}}]),a}(c.Component);function Xe(e){var t=e.component,a=Object(we.a)(e,["component"]),c=v().currentUser;return Object(n.jsx)(y.b,Object(K.a)(Object(K.a)({},a),{},{render:function(e){return c?Object(n.jsx)(t,Object(K.a)({},e)):Object(n.jsx)(y.a,{to:"/login"})}}))}a(358),a(359);var Qe=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(S.a,{children:Object(n.jsx)(w,{children:Object(n.jsxs)(y.d,{children:[Object(n.jsx)(Xe,{exact:!0,path:"/",component:Ke}),Object(n.jsx)(y.b,{path:"/signup",component:C}),Object(n.jsx)(y.b,{path:"/login",component:k}),Object(n.jsx)(y.b,{path:"/forgotpassword",component:Ye}),Object(n.jsx)(y.b,{path:"/chartpage",component:Ve})]})})})})};s.a.render(Object(n.jsx)(Qe,{}),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.cde28798.chunk.js.map