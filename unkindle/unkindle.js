/* Unkindle - compilado para ES5. Não edite: veja src/ e rode tools/build.js */
(function(){var Jk=Object.create;var wy=Object.defineProperty;var Xk=Object.getOwnPropertyDescriptor;var Qk=Object.getOwnPropertyNames;var Zk=Object.getPrototypeOf,rG=Object.prototype.hasOwnProperty;var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var eG=function(r,e,t,a){if(e&&typeof e=="object"||typeof e=="function")for(var i=Qk(e),n=0,u=i.length,s;n<u;n++)s=i[n],!rG.call(r,s)&&s!==t&&wy(r,s,{get:function(v){return e[v]}.bind(null,s),enumerable:!(a=Xk(e,s))||a.enumerable});return r};var xy=function(r,e,t){return t=r!=null?Jk(Zk(r)):{},eG(e||!r||!r.__esModule?wy(t,"default",{value:r,enumerable:!0}):t,r)};var T=o(function(rc,Py){"use strict";var gi=function(r){return r&&r.Math===Math&&r};Py.exports=gi(typeof globalThis=="object"&&globalThis)||gi(typeof window=="object"&&window)||gi(typeof self=="object"&&self)||gi(typeof global=="object"&&global)||gi(typeof rc=="object"&&rc)||function(){return this}()||Function("return this")()});var E=o(function(n_r,Cy){"use strict";Cy.exports=function(r){try{return!!r()}catch(e){return!0}}});var P=o(function(u_r,_y){"use strict";var tG=E();_y.exports=!tG(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7})});var ua=o(function(o_r,Ny){"use strict";var aG=E();Ny.exports=!aG(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var R=o(function(s_r,Fy){"use strict";var iG=ua(),Ou=Function.prototype.call;Fy.exports=iG?Ou.bind(Ou):function(){return Ou.apply(Ou,arguments)}});var oa=o(function(Ly){"use strict";var Dy={}.propertyIsEnumerable,My=Object.getOwnPropertyDescriptor,nG=My&&!Dy.call({1:2},1);Ly.f=nG?function(e){var t=My(this,e);return!!t&&t.enumerable}:Dy});var xr=o(function(c_r,$y){"use strict";$y.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var S=o(function(f_r,jy){"use strict";var Uy=ua(),By=Function.prototype,ec=By.call,uG=Uy&&By.bind.bind(ec,ec);jy.exports=Uy?uG:function(r){return function(){return ec.apply(r,arguments)}}});var sr=o(function(l_r,Gy){"use strict";var ky=S(),oG=ky({}.toString),sG=ky("".slice);Gy.exports=function(r){return sG(oG(r),8,-1)}});var mt=o(function(h_r,Hy){"use strict";var vG=S(),cG=E(),fG=sr(),tc=Object,lG=vG("".split);Hy.exports=cG(function(){return!tc("z").propertyIsEnumerable(0)})?function(r){return fG(r)==="String"?lG(r,""):tc(r)}:tc});var ee=o(function(q_r,Wy){"use strict";Wy.exports=function(r){return r==null}});var J=o(function(p_r,Vy){"use strict";var hG=ee(),qG=TypeError;Vy.exports=function(r){if(hG(r))throw new qG("Can't call method on "+r);return r}});var ur=o(function(d_r,Ky){"use strict";var pG=mt(),dG=J();Ky.exports=function(r){return pG(dG(r))}});var j=o(function(g_r,zy){"use strict";var ac=typeof document=="object"&&document.all;zy.exports=typeof ac=="undefined"&&ac!==void 0?function(r){return typeof r=="function"||r===ac}:function(r){return typeof r=="function"}});var _=o(function(y_r,Yy){"use strict";var gG=j();Yy.exports=function(r){return typeof r=="object"?r!==null:gG(r)}});var M=o(function(E_r,Jy){"use strict";var ic=T(),yG=j(),EG=function(r){return yG(r)?r:void 0};Jy.exports=function(r,e){return arguments.length<2?EG(ic[r]):ic[r]&&ic[r][e]}});var gr=o(function(S_r,Xy){"use strict";var SG=S();Xy.exports=SG({}.isPrototypeOf)});var te=o(function(I_r,rE){"use strict";var IG=T(),Qy=IG.navigator,Zy=Qy&&Qy.userAgent;rE.exports=Zy?String(Zy):""});var ie=o(function(O_r,uE){"use strict";var nE=T(),nc=te(),eE=nE.process,tE=nE.Deno,aE=eE&&eE.versions||tE&&tE.version,iE=aE&&aE.v8,ae,mu;iE&&(ae=iE.split("."),mu=ae[0]>0&&ae[0]<4?1:+(ae[0]+ae[1]));!mu&&nc&&(ae=nc.match(/Edge\/(\d+)/),(!ae||ae[1]>=74)&&(ae=nc.match(/Chrome\/(\d+)/),ae&&(mu=+ae[1])));uE.exports=mu});var We=o(function(m_r,sE){"use strict";var oE=ie(),OG=E(),mG=T(),TG=mG.String;sE.exports=!!Object.getOwnPropertySymbols&&!OG(function(){var r=Symbol("symbol detection");return!TG(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&oE&&oE<41})});var uc=o(function(T_r,vE){"use strict";var bG=We();vE.exports=bG&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var Ve=o(function(b_r,cE){"use strict";var RG=M(),AG=j(),wG=gr(),xG=uc(),PG=Object;cE.exports=xG?function(r){return typeof r=="symbol"}:function(r){var e=RG("Symbol");return AG(e)&&wG(e.prototype,PG(r))}});var Ke=o(function(R_r,fE){"use strict";var CG=String;fE.exports=function(r){try{return CG(r)}catch(e){return"Object"}}});var L=o(function(A_r,lE){"use strict";var _G=j(),NG=Ke(),FG=TypeError;lE.exports=function(r){if(_G(r))return r;throw new FG(NG(r)+" is not a function")}});var vr=o(function(w_r,hE){"use strict";var DG=L(),MG=ee();hE.exports=function(r,e){var t=r[e];return MG(t)?void 0:DG(t)}});var cc=o(function(x_r,qE){"use strict";var oc=R(),sc=j(),vc=_(),LG=TypeError;qE.exports=function(r,e){var t,a;if(e==="string"&&sc(t=r.toString)&&!vc(a=oc(t,r))||sc(t=r.valueOf)&&!vc(a=oc(t,r))||e!=="string"&&sc(t=r.toString)&&!vc(a=oc(t,r)))return a;throw new LG("Can't convert object to primitive value")}});var D=o(function(P_r,pE){"use strict";pE.exports=!1});var Tu=o(function(C_r,gE){"use strict";var dE=T(),$G=Object.defineProperty;gE.exports=function(r,e){try{$G(dE,r,{value:e,configurable:!0,writable:!0})}catch(t){dE[r]=e}return e}});var yi=o(function(__r,SE){"use strict";var UG=D(),BG=T(),jG=Tu(),yE="__core-js_shared__",EE=SE.exports=BG[yE]||jG(yE,{});(EE.versions||(EE.versions=[])).push({version:"3.51.0",mode:UG?"pure":"global",copyright:"\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Tt=o(function(N_r,OE){"use strict";var IE=yi(),kG=Object.create||Object;OE.exports=function(r,e){return IE[r]||(IE[r]=e||kG(null))}});var G=o(function(F_r,mE){"use strict";var GG=J(),HG=Object;mE.exports=function(r){return HG(GG(r))}});var $=o(function(D_r,TE){"use strict";var WG=S(),VG=G(),KG=WG({}.hasOwnProperty);TE.exports=Object.hasOwn||function(e,t){return KG(VG(e),t)}});var ze=o(function(M_r,bE){"use strict";var zG=S(),YG=0,JG=Math.random(),XG=zG(1.1.toString);bE.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+XG(++YG+JG,36)}});var N=o(function(L_r,AE){"use strict";var QG=T(),ZG=Tt(),RE=$(),r6=ze(),e6=We(),t6=uc(),sa=QG.Symbol,fc=ZG("wks"),a6=t6?sa.for||sa:sa&&sa.withoutSetter||r6;AE.exports=function(r){return RE(fc,r)||(fc[r]=e6&&RE(sa,r)?sa[r]:a6("Symbol."+r)),fc[r]}});var Ei=o(function($_r,PE){"use strict";var i6=R(),wE=_(),xE=Ve(),n6=vr(),u6=cc(),o6=N(),s6=TypeError,v6=o6("toPrimitive");PE.exports=function(r,e){if(!wE(r)||xE(r))return r;var t=n6(r,v6),a;if(t){if(e===void 0&&(e="default"),a=i6(t,r,e),!wE(a)||xE(a))return a;throw new s6("Can't convert object to primitive value")}return e===void 0&&(e="number"),u6(r,e)}});var Wr=o(function(U_r,CE){"use strict";var c6=Ei(),f6=Ve();CE.exports=function(r){var e=c6(r,"string");return f6(e)?e:e+""}});var Si=o(function(B_r,NE){"use strict";var l6=T(),_E=_(),lc=l6.document,h6=_E(lc)&&_E(lc.createElement);NE.exports=function(r){return h6?lc.createElement(r):{}}});var hc=o(function(j_r,FE){"use strict";var q6=P(),p6=E(),d6=Si();FE.exports=!q6&&!p6(function(){return Object.defineProperty(d6("div"),"a",{get:function(){return 7}}).a!==7})});var cr=o(function(ME){"use strict";var g6=P(),y6=R(),E6=oa(),S6=xr(),I6=ur(),O6=Wr(),m6=$(),T6=hc(),DE=Object.getOwnPropertyDescriptor;ME.f=g6?DE:function(e,t){if(e=I6(e),t=O6(t),T6)try{return DE(e,t)}catch(a){}if(m6(e,t))return S6(!y6(E6.f,e,t),e[t])}});var qc=o(function(G_r,LE){"use strict";var b6=P(),R6=E();LE.exports=b6&&R6(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42})});var w=o(function(H_r,$E){"use strict";var A6=_(),w6=String,x6=TypeError;$E.exports=function(r){if(A6(r))return r;throw new x6(w6(r)+" is not an object")}});var z=o(function(BE){"use strict";var P6=P(),C6=hc(),_6=qc(),bu=w(),UE=Wr(),N6=TypeError,pc=Object.defineProperty,F6=Object.getOwnPropertyDescriptor,dc="enumerable",gc="configurable",yc="writable";BE.f=P6?_6?function(e,t,a){if(bu(e),t=UE(t),bu(a),typeof e=="function"&&t==="prototype"&&"value"in a&&yc in a&&!a[yc]){var i=F6(e,t);i&&i[yc]&&(e[t]=a.value,a={configurable:gc in a?a[gc]:i[gc],enumerable:dc in a?a[dc]:i[dc],writable:!1})}return pc(e,t,a)}:pc:function(e,t,a){if(bu(e),t=UE(t),bu(a),C6)try{return pc(e,t,a)}catch(i){}if("get"in a||"set"in a)throw new N6("Accessors not supported");return"value"in a&&(e[t]=a.value),e}});var fr=o(function(V_r,jE){"use strict";var D6=P(),M6=z(),L6=xr();jE.exports=D6?function(r,e,t){return M6.f(r,e,L6(1,t))}:function(r,e,t){return r[e]=t,r}});var bt=o(function(K_r,GE){"use strict";var Ec=P(),$6=$(),kE=Function.prototype,U6=Ec&&Object.getOwnPropertyDescriptor,Sc=$6(kE,"name"),B6=Sc&&function(){}.name==="something",j6=Sc&&(!Ec||Ec&&U6(kE,"name").configurable);GE.exports={EXISTS:Sc,PROPER:B6,CONFIGURABLE:j6}});var Ru=o(function(z_r,HE){"use strict";var k6=S(),G6=j(),Ic=yi(),H6=k6(Function.toString);G6(Ic.inspectSource)||(Ic.inspectSource=function(r){return H6(r)});HE.exports=Ic.inspectSource});var Oc=o(function(Y_r,VE){"use strict";var W6=T(),V6=j(),WE=W6.WeakMap;VE.exports=V6(WE)&&/native code/.test(String(WE))});var Ii=o(function(J_r,zE){"use strict";var K6=Tt(),z6=ze(),KE=K6("keys");zE.exports=function(r){return KE[r]||(KE[r]=z6(r))}});var va=o(function(X_r,YE){"use strict";YE.exports={}});var Y=o(function(Q_r,QE){"use strict";var Y6=Oc(),XE=T(),J6=_(),X6=fr(),mc=$(),Tc=yi(),Q6=Ii(),Z6=va(),JE="Object already initialized",bc=XE.TypeError,r8=XE.WeakMap,Au,Oi,wu,e8=function(r){return wu(r)?Oi(r):Au(r,{})},t8=function(r){return function(e){var t;if(!J6(e)||(t=Oi(e)).type!==r)throw new bc("Incompatible receiver, "+r+" required");return t}};Y6||Tc.state?(ne=Tc.state||(Tc.state=new r8),ne.get=ne.get,ne.has=ne.has,ne.set=ne.set,Au=function(r,e){if(ne.has(r))throw new bc(JE);return e.facade=r,ne.set(r,e),e},Oi=function(r){return ne.get(r)||{}},wu=function(r){return ne.has(r)}):(Rt=Q6("state"),Z6[Rt]=!0,Au=function(r,e){if(mc(r,Rt))throw new bc(JE);return e.facade=r,X6(r,Rt,e),e},Oi=function(r){return mc(r,Rt)?r[Rt]:{}},wu=function(r){return mc(r,Rt)});var ne,Rt;QE.exports={set:Au,get:Oi,has:wu,enforce:e8,getterFor:t8}});var Cu=o(function(Z_r,eS){"use strict";var Ac=S(),a8=E(),i8=j(),xu=$(),Rc=P(),n8=bt().CONFIGURABLE,u8=Ru(),rS=Y(),o8=rS.enforce,s8=rS.get,ZE=String,Pu=Object.defineProperty,v8=Ac("".slice),c8=Ac("".replace),f8=Ac([].join),l8=Rc&&!a8(function(){return Pu(function(){},"length",{value:8}).length!==8}),h8=String(String).split("String"),q8=eS.exports=function(r,e,t){v8(ZE(e),0,7)==="Symbol("&&(e="["+c8(ZE(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!xu(r,"name")||n8&&r.name!==e)&&(Rc?Pu(r,"name",{value:e,configurable:!0}):r.name=e),l8&&t&&xu(t,"arity")&&r.length!==t.arity&&Pu(r,"length",{value:t.arity});try{t&&xu(t,"constructor")&&t.constructor?Rc&&Pu(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch(i){}var a=o8(r);return xu(a,"source")||(a.source=f8(h8,typeof e=="string"?e:"")),r};Function.prototype.toString=q8(function(){return i8(this)&&s8(this).source||u8(this)},"toString")});var W=o(function(rNr,tS){"use strict";var p8=j(),d8=z(),g8=Cu(),y8=Tu();tS.exports=function(r,e,t,a){a||(a={});var i=a.enumerable,n=a.name!==void 0?a.name:e;if(p8(t)&&g8(t,n,a),a.global)i?r[e]=t:y8(e,t);else{try{a.unsafe?r[e]&&(i=!0):delete r[e]}catch(u){}i?r[e]=t:d8.f(r,e,{value:t,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return r}});var wc=o(function(eNr,aS){"use strict";var E8=Math.ceil,S8=Math.floor;aS.exports=Math.trunc||function(e){var t=+e;return(t>0?S8:E8)(t)}});var rr=o(function(tNr,iS){"use strict";var I8=wc();iS.exports=function(r){var e=+r;return e!==e||e===0?0:I8(e)}});var qe=o(function(aNr,nS){"use strict";var O8=rr(),m8=Math.max,T8=Math.min;nS.exports=function(r,e){var t=O8(r);return t<0?m8(t+e,0):T8(t,e)}});var Vr=o(function(iNr,uS){"use strict";var b8=rr(),R8=Math.min;uS.exports=function(r){var e=b8(r);return e>0?R8(e,9007199254740991):0}});var H=o(function(nNr,oS){"use strict";var A8=Vr();oS.exports=function(r){return A8(r.length)}});var At=o(function(uNr,vS){"use strict";var w8=ur(),x8=qe(),P8=H(),sS=function(r){return function(e,t,a){var i=w8(e),n=P8(i);if(n===0)return!r&&-1;var u=x8(a,n),s;if(r&&t!==t){for(;n>u;)if(s=i[u++],s!==s)return!0}else for(;n>u;u++)if((r||u in i)&&i[u]===t)return r||u||0;return!r&&-1}};vS.exports={includes:sS(!0),indexOf:sS(!1)}});var Pc=o(function(oNr,fS){"use strict";var C8=S(),xc=$(),_8=ur(),N8=At().indexOf,F8=va(),cS=C8([].push);fS.exports=function(r,e){var t=_8(r),a=0,i=[],n;for(n in t)!xc(F8,n)&&xc(t,n)&&cS(i,n);for(;e.length>a;)xc(t,n=e[a++])&&(~N8(i,n)||cS(i,n));return i}});var _u=o(function(sNr,lS){"use strict";lS.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var Ye=o(function(hS){"use strict";var D8=Pc(),M8=_u(),L8=M8.concat("length","prototype");hS.f=Object.getOwnPropertyNames||function(e){return D8(e,L8)}});var mi=o(function(qS){"use strict";qS.f=Object.getOwnPropertySymbols});var Nu=o(function(fNr,pS){"use strict";var $8=M(),U8=S(),B8=Ye(),j8=mi(),k8=w(),G8=U8([].concat);pS.exports=$8("Reflect","ownKeys")||function(e){var t=B8.f(k8(e)),a=j8.f;return a?G8(t,a(e)):t}});var wt=o(function(lNr,gS){"use strict";var dS=$(),H8=Nu(),W8=cr(),V8=z();gS.exports=function(r,e,t){for(var a=H8(e),i=V8.f,n=W8.f,u=0;u<a.length;u++){var s=a[u];!dS(r,s)&&!(t&&dS(t,s))&&i(r,s,n(e,s))}}});var ca=o(function(hNr,yS){"use strict";var K8=E(),z8=j(),Y8=/#|\.prototype\./,Ti=function(r,e){var t=X8[J8(r)];return t===Z8?!0:t===Q8?!1:z8(e)?K8(e):!!e},J8=Ti.normalize=function(r){return String(r).replace(Y8,".").toLowerCase()},X8=Ti.data={},Q8=Ti.NATIVE="N",Z8=Ti.POLYFILL="P";yS.exports=Ti});var h=o(function(qNr,ES){"use strict";var Fu=T(),rH=cr().f,eH=fr(),tH=W(),aH=Tu(),iH=wt(),nH=ca();ES.exports=function(r,e){var t=r.target,a=r.global,i=r.stat,n,u,s,v,f,c;if(a?u=Fu:i?u=Fu[t]||aH(t,{}):u=Fu[t]&&Fu[t].prototype,u)for(s in e){if(f=e[s],r.dontCallGetSet?(c=rH(u,s),v=c&&c.value):v=u[s],n=nH(a?s:t+(i?".":"#")+s,r.forced),!n&&v!==void 0){if(typeof f==typeof v)continue;iH(f,v)}(r.sham||v&&v.sham)&&eH(f,"sham",!0),tH(u,s,f,r)}}});var Du=o(function(pNr,IS){"use strict";var uH=N(),oH=uH("toStringTag"),SS={};SS[oH]="z";IS.exports=String(SS)==="[object z]"});var Mr=o(function(dNr,OS){"use strict";var sH=Du(),vH=j(),Mu=sr(),cH=N(),fH=cH("toStringTag"),lH=Object,hH=Mu(function(){return arguments}())==="Arguments",qH=function(r,e){try{return r[e]}catch(t){}};OS.exports=sH?Mu:function(r){var e,t,a;return r===void 0?"Undefined":r===null?"Null":typeof(t=qH(e=lH(r),fH))=="string"?t:hH?Mu(e):(a=Mu(e))==="Object"&&vH(e.callee)?"Arguments":a}});var F=o(function(gNr,mS){"use strict";var pH=Mr(),dH=String;mS.exports=function(r){if(pH(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return dH(r)}});var fa=o(function(yNr,TS){"use strict";var gH=Pc(),yH=_u();TS.exports=Object.keys||function(e){return gH(e,yH)}});var Lu=o(function(bS){"use strict";var EH=P(),SH=qc(),IH=z(),OH=w(),mH=ur(),TH=fa();bS.f=EH&&!SH?Object.defineProperties:function(e,t){OH(e);for(var a=mH(t),i=TH(t),n=i.length,u=0,s;n>u;)IH.f(e,s=i[u++],a[s]);return e}});var Cc=o(function(SNr,RS){"use strict";var bH=M();RS.exports=bH("document","documentElement")});var or=o(function(INr,NS){"use strict";var RH=w(),AH=Lu(),AS=_u(),wH=va(),xH=Cc(),PH=Si(),CH=Ii(),wS=">",xS="<",Nc="prototype",Fc="script",CS=CH("IE_PROTO"),_c=function(){},_S=function(r){return xS+Fc+wS+r+xS+"/"+Fc+wS},PS=function(r){r.write(_S("")),r.close();var e=r.parentWindow.Object;return r=null,e},_H=function(){var r=PH("iframe"),e="java"+Fc+":",t;return r.style.display="none",xH.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(_S("document.F=Object")),t.close(),t.F},$u,Uu=function(){try{$u=new ActiveXObject("htmlfile")}catch(e){}Uu=typeof document!="undefined"?document.domain&&$u?PS($u):_H():PS($u);for(var r=AS.length;r--;)delete Uu[Nc][AS[r]];return Uu()};wH[CS]=!0;NS.exports=Object.create||function(e,t){var a;return e!==null?(_c[Nc]=RH(e),a=new _c,_c[Nc]=null,a[CS]=e):a=Uu(),t===void 0?a:AH.f(a,t)}});var Kr=o(function(ONr,FS){"use strict";var NH=S();FS.exports=NH([].slice)});var Bu=o(function(mNr,LS){"use strict";var FH=sr(),DH=ur(),DS=Ye().f,MH=Kr(),MS=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],LH=function(r){try{return DS(r)}catch(e){return MH(MS)}};LS.exports.f=function(e){return MS&&FH(e)==="Window"?LH(e):DS(DH(e))}});var er=o(function(TNr,US){"use strict";var $S=Cu(),$H=z();US.exports=function(r,e,t){return t.get&&$S(t.get,e,{getter:!0}),t.set&&$S(t.set,e,{setter:!0}),$H.f(r,e,t)}});var Dc=o(function(BS){"use strict";var UH=N();BS.f=UH});var bi=o(function(RNr,jS){"use strict";var BH=T();jS.exports=BH});var hr=o(function(ANr,GS){"use strict";var kS=bi(),jH=$(),kH=Dc(),GH=z().f;GS.exports=function(r){var e=kS.Symbol||(kS.Symbol={});jH(e,r)||GH(e,r,{value:kH.f(r)})}});var Mc=o(function(wNr,HS){"use strict";var HH=R(),WH=M(),VH=N(),KH=W();HS.exports=function(){var r=WH("Symbol"),e=r&&r.prototype,t=e&&e.valueOf,a=VH("toPrimitive");e&&!e[a]&&KH(e,a,function(i){return HH(t,this)},{arity:1})}});var Sr=o(function(xNr,VS){"use strict";var zH=z().f,YH=$(),JH=N(),WS=JH("toStringTag");VS.exports=function(r,e,t){r&&!t&&(r=r.prototype),r&&!YH(r,WS)&&zH(r,WS,{configurable:!0,value:e})}});var Je=o(function(PNr,KS){"use strict";var XH=sr(),QH=S();KS.exports=function(r){if(XH(r)==="Function")return QH(r)}});var Pr=o(function(CNr,YS){"use strict";var zS=Je(),ZH=L(),rW=ua(),eW=zS(zS.bind);YS.exports=function(r,e){return ZH(r),e===void 0?r:rW?eW(r,e):function(){return r.apply(e,arguments)}}});var pe=o(function(_Nr,JS){"use strict";var tW=sr();JS.exports=Array.isArray||function(e){return tW(e)==="Array"}});var Xe=o(function(NNr,eI){"use strict";var aW=S(),iW=E(),XS=j(),nW=Mr(),uW=M(),oW=Ru(),QS=function(){},ZS=uW("Reflect","construct"),Lc=/^\s*(?:class|function)\b/,sW=aW(Lc.exec),vW=!Lc.test(QS),Ri=function(e){if(!XS(e))return!1;try{return ZS(QS,[],e),!0}catch(t){return!1}},rI=function(e){if(!XS(e))return!1;switch(nW(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return vW||!!sW(Lc,oW(e))}catch(t){return!0}};rI.sham=!0;eI.exports=!ZS||iW(function(){var r;return Ri(Ri.call)||!Ri(Object)||!Ri(function(){r=!0})||r})?rI:Ri});var nI=o(function(FNr,iI){"use strict";var tI=pe(),cW=Xe(),fW=_(),lW=N(),hW=lW("species"),aI=Array;iI.exports=function(r){var e;return tI(r)&&(e=r.constructor,cW(e)&&(e===aI||tI(e.prototype))?e=void 0:fW(e)&&(e=e[hW],e===null&&(e=void 0))),e===void 0?aI:e}});var la=o(function(DNr,uI){"use strict";var qW=nI();uI.exports=function(r,e){return new(qW(r))(e===0?0:e)}});var ar=o(function(MNr,oI){"use strict";var pW=P(),dW=z(),gW=xr();oI.exports=function(r,e,t){pW?dW.f(r,e,gW(0,t)):r[e]=t}});var lr=o(function(LNr,vI){"use strict";var yW=Pr(),EW=mt(),SW=G(),IW=H(),sI=la(),$c=ar(),Qe=function(r){var e=r===1,t=r===2,a=r===3,i=r===4,n=r===6,u=r===7,s=r===5||n;return function(v,f,c){for(var l=SW(v),q=EW(l),p=IW(q),g=yW(f,c),y=0,d=0,O=e?sI(v,p):t||u?sI(v,0):void 0,x,A;p>y;y++)if((s||y in q)&&(x=q[y],A=g(x,y,l),r))if(e)$c(O,y,A);else if(A)switch(r){case 3:return!0;case 5:return x;case 6:return y;case 2:$c(O,d++,x)}else switch(r){case 4:return!1;case 7:$c(O,d++,x)}return n?-1:a||i?i:O}};vI.exports={forEach:Qe(0),map:Qe(1),filter:Qe(2),some:Qe(3),every:Qe(4),find:Qe(5),findIndex:Qe(6),filterReject:Qe(7)}});var RI=o(function(){"use strict";var ju=h(),xi=T(),Kc=R(),OW=S(),mW=D(),ha=P(),qa=We(),TW=E(),ir=$(),bW=gr(),kc=w(),ku=ur(),zc=Wr(),RW=F(),Gc=xr(),pa=or(),lI=fa(),AW=Ye(),hI=Bu(),wW=mi(),qI=cr(),pI=z(),xW=Lu(),dI=oa(),Uc=W(),PW=er(),Yc=Tt(),CW=Ii(),gI=va(),cI=ze(),_W=N(),NW=Dc(),FW=hr(),DW=Mc(),MW=Sr(),yI=Y(),Gu=lr().forEach,yr=CW("hidden"),Hu="Symbol",wi="prototype",LW=yI.set,fI=yI.getterFor(Hu),zr=Object[wi],xt=xi.Symbol,Ai=xt&&xt[wi],$W=xi.RangeError,UW=xi.TypeError,Bc=xi.QObject,EI=qI.f,Pt=pI.f,SI=hI.f,BW=dI.f,II=OW([].push),we=Yc("symbols"),Pi=Yc("op-symbols"),jW=Yc("wks"),Hc=!Bc||!Bc[wi]||!Bc[wi].findChild,OI=function(r,e,t){var a=EI(zr,e);return a&&delete zr[e],Pt(r,e,t),a&&r!==zr&&Pt(zr,e,a),r},Wc=ha&&TW(function(){return pa(Pt({},"a",{get:function(){return Pt(this,"a",{value:7}).a}})).a!==7})?OI:Pt,jc=function(r,e){var t=we[r]=pa(Ai);return LW(t,{type:Hu,tag:r,description:e}),ha||(t.description=e),t},Wu=function(e,t,a){e===zr&&Wu(Pi,t,a),kc(e);var i=zc(t);return kc(a),ir(we,i)?(("enumerable"in a?!a.enumerable:!ir(e,i)||ir(e,yr)&&e[yr][i])?(ir(e,yr)||Pt(e,yr,Gc(1,pa(null))),e[yr][i]=!0):(ir(e,yr)&&e[yr][i]&&(e[yr][i]=!1),a=pa(a,{enumerable:Gc(0,!1)})),Wc(e,i,a)):Pt(e,i,a)},Jc=function(e,t){kc(e);var a=ku(t),i=lI(a).concat(bI(a));return Gu(i,function(n){(!ha||Kc(Vc,a,n))&&Wu(e,n,a[n])}),e},kW=function(e,t){return t===void 0?pa(e):Jc(pa(e),t)},Vc=function(e){var t=zc(e),a=Kc(BW,this,t);return this===zr&&ir(we,t)&&!ir(Pi,t)?!1:a||!ir(this,t)||!ir(we,t)||ir(this,yr)&&this[yr][t]?a:!0},mI=function(e,t){var a=ku(e),i=zc(t);if(!(a===zr&&ir(we,i)&&!ir(Pi,i))){var n=EI(a,i);return n&&ir(we,i)&&!(ir(a,yr)&&a[yr][i])&&(n.enumerable=!0),n}},TI=function(e){var t=SI(ku(e)),a=[];return Gu(t,function(i){!ir(we,i)&&!ir(gI,i)&&II(a,i)}),a},bI=function(r){var e=r===zr,t=SI(e?Pi:ku(r)),a=[];return Gu(t,function(i){ir(we,i)&&(!e||ir(zr,i))&&II(a,we[i])}),a};qa||(xt=function(){if(bW(Ai,this))throw new UW("Symbol is not a constructor");var e=!arguments.length||arguments[0]===void 0?void 0:RW(arguments[0]),t=cI(e),a=function(i){var n=this===void 0?xi:this;n===zr&&Kc(a,Pi,i),ir(n,yr)&&ir(n[yr],t)&&(n[yr][t]=!1);var u=Gc(1,i);try{Wc(n,t,u)}catch(s){if(!(s instanceof $W))throw s;OI(n,t,u)}};return ha&&Hc&&Wc(zr,t,{configurable:!0,set:a}),jc(t,e)},Ai=xt[wi],Uc(Ai,"toString",function(){return fI(this).tag}),Uc(xt,"withoutSetter",function(r){return jc(cI(r),r)}),dI.f=Vc,pI.f=Wu,xW.f=Jc,qI.f=mI,AW.f=hI.f=TI,wW.f=bI,NW.f=function(r){return jc(_W(r),r)},ha&&(PW(Ai,"description",{configurable:!0,get:function(){return fI(this).description}}),mW||Uc(zr,"propertyIsEnumerable",Vc,{unsafe:!0})));ju({global:!0,constructor:!0,wrap:!0,forced:!qa,sham:!qa},{Symbol:xt});Gu(lI(jW),function(r){FW(r)});ju({target:Hu,stat:!0,forced:!qa},{useSetter:function(){Hc=!0},useSimple:function(){Hc=!1}});ju({target:"Object",stat:!0,forced:!qa,sham:!ha},{create:kW,defineProperty:Wu,defineProperties:Jc,getOwnPropertyDescriptor:mI});ju({target:"Object",stat:!0,forced:!qa},{getOwnPropertyNames:TI});DW();MW(xt,Hu);gI[yr]=!0});var Xc=o(function(BNr,AI){"use strict";var GW=We();AI.exports=GW&&!!Symbol.for&&!!Symbol.keyFor});var xI=o(function(){"use strict";var HW=h(),WW=M(),VW=$(),KW=F(),wI=Tt(),zW=Xc(),Qc=wI("string-to-symbol-registry"),YW=wI("symbol-to-string-registry");HW({target:"Symbol",stat:!0,forced:!zW},{for:function(r){var e=KW(r);if(VW(Qc,e))return Qc[e];var t=WW("Symbol")(e);return Qc[e]=t,YW[t]=e,t}})});var CI=o(function(){"use strict";var JW=h(),XW=$(),QW=Ve(),ZW=Ke(),rV=Tt(),eV=Xc(),PI=rV("symbol-to-string-registry");JW({target:"Symbol",stat:!0,forced:!eV},{keyFor:function(e){if(!QW(e))throw new TypeError(ZW(e)+" is not a symbol");if(XW(PI,e))return PI[e]}})});var Zc=o(function(WNr,_I){"use strict";var tV=_(),aV=Y().get;_I.exports=function(e){if(!tV(e))return!1;var t=aV(e);return!!t&&t.type==="RawJSON"}});var da=o(function(VNr,NI){"use strict";var iV=S();NI.exports=iV(1.1.valueOf)});var ef=o(function(KNr,LI){"use strict";var rf=S(),nV=$(),Vu=SyntaxError,uV=parseInt,oV=String.fromCharCode,sV=rf("".charAt),FI=rf("".slice),DI=rf(/./.exec),MI={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"	"},vV=/^[\da-f]{4}$/i,cV=/^[\u0000-\u001F]$/;LI.exports=function(r,e){for(var t=!0,a="";e<r.length;){var i=sV(r,e);if(i==="\\"){var n=FI(r,e,e+2);if(nV(MI,n))a+=MI[n],e+=2;else if(n==="\\u"){e+=2;var u=FI(r,e,e+4);if(!DI(vV,u))throw new Vu("Bad Unicode escape at: "+e);a+=oV(uV(u,16)),e+=4}else throw new Vu('Unknown escape sequence: "'+n+'"')}else if(i==='"'){t=!1,e++;break}else{if(DI(cV,i))throw new Vu("Bad control character in string literal at: "+e);a+=i,e++}}if(t)throw new Vu("Unterminated string at: "+e);return{value:a,end:e}}});var Ku=o(function(zNr,$I){"use strict";var fV=E();$I.exports=!fV(function(){var r="9007199254740993",e=JSON.rawJSON(r);return!JSON.isRawJSON(e)||JSON.stringify(e)!==r})});var lf=o(function(){"use strict";var lV=h(),Ju=M(),of=R(),ue=S(),zI=E(),sf=pe(),vf=j(),YI=_(),JI=or(),hV=Zc(),qV=Ve(),tf=sr(),pV=da(),UI=At().includes,dV=$(),gV=F(),yV=ef(),cf=ze(),EV=We(),af=Ku(),SV=String,IV=TypeError,Ze=Ju("JSON","stringify"),BI=Ju("BigInt"),OV=ue("".valueOf),mV=ue((!0).valueOf),jI=BI&&ue(BI.prototype.valueOf),_i=ue(/./.exec),nf=ue("".charAt),TV=ue("".charCodeAt),bV=ue("".replace),Ci=ue("".slice),Yu=ue([].push),kI=ue([].pop),RV=ue(1.1.toString),AV=/[\uD800-\uDFFF]/g,GI=/^[\uD800-\uDBFF]$/,HI=/^[\uDC00-\uDFFF]$/,wV=/^\d+$/,uf=cf(),ff=cf(),XI=cf(),WI=uf.length,VI=ff.length,QI=!EV||zI(function(){var r=Ju("Symbol")("stringify detection");return Ze([r])!=="[null]"||Ze({a:r})!=="{}"||Ze(Object(r))!=="{}"}),KI=zI(function(){return Ze("\uDF06\uD834")!=='"\\udf06\\ud834"'||Ze("\uDEAD")!=='"\\udead"'}),xV=af?Ju("JSON","isRawJSON"):hV,PV=QI?function(r,e,t){return Ze(r,function(a,i){var n=of(e,this,a,i);if(!qV(n))return n},t)}:Ze,CV=function(r,e,t){var a=nf(t,e-1),i=nf(t,e+1);return _i(GI,r)&&!_i(HI,i)||_i(HI,r)&&!_i(GI,a)?"\\u"+RV(TV(r,0),16):r},_V=function(r){if(sf(r)){for(var e=r.length,t=[],a=JI(null),i=0;i<e;i++){var n=r[i],u;if(typeof n=="string")u=n;else if(typeof n=="number"||tf(n)==="Number"||tf(n)==="String")u=gV(n);else continue;dV(a,u)||(a[u]=!0,Yu(t,u))}return t}},zu=function(r,e){try{return r(e),!0}catch(t){return!1}},NV=function(r){var e=tf(r);return e==="Number"&&zu(pV,r)||e==="String"&&zu(OV,r)||e==="Boolean"&&zu(mV,r)||!!jI&&e==="BigInt"&&zu(jI,r)},FV=function(r){if(!YI(r)||vf(r)||sf(r))return!1;try{return!NV(r)}catch(e){return!0}},DV=function(r,e){return{toJSON:function(){var t=r[e];if(YI(t)||typeof t=="bigint"){var a=t.toJSON;vf(a)&&(t=of(a,t,e))}return t}}},MV=function(r){for(var e=0,t=r.length;e<t;e++)if(_i(wV,r[e]))return ff;return""},LV=function(r,e,t){for(var a=JI(null),i=0,n=e.length;i<n;i++){var u=e[i];a[t+u]=DV(r,u)}return a[XI]=null,a};Ze&&lV({target:"JSON",stat:!0,arity:3,forced:QI||KI||!af},{stringify:function(e,t,a){var i=vf(t)?t:void 0,n=i?void 0:_V(t),u=n&&MV(n),s=[],v=[],f=[],c,l=!1,q=!0,p=PV(e,function(U,V){if(U=SV(U),n){if(U===XI){kI(v),c=kI(f);return}if(q)q=!1;else if(this!==c&&!sf(this)&&!UI(n,U))return}else i&&(V=of(i,this,U,V));if(xV(V))return af?V:(l=!0,uf+(Yu(s,V.rawJSON)-1));if(n&&FV(V)){if(UI(v,V))throw new IV("Converting circular structure to JSON");var Z=LV(V,n,u);return Yu(v,V),Yu(f,c),c=Z,u&&(l=!0),Z}return V},a);if(typeof p!="string"||(KI&&(p=bV(p,AV,CV)),!l))return p;for(var g="",y=p.length,d=0;d<y;d++){var O=nf(p,d);if(O==='"'){var x=yV(p,++d).end-1,A=Ci(p,d,x);Ci(A,0,WI)===uf?g+=s[Ci(A,WI)]:Ci(A,0,VI)===ff?g+='"'+Ci(A,VI)+'"':g+='"'+A+'"',d=x}else g+=O}return g}})});var rO=o(function(){"use strict";var $V=h(),UV=We(),BV=E(),ZI=mi(),jV=G(),kV=!UV||BV(function(){ZI.f(1)});$V({target:"Object",stat:!0,forced:kV},{getOwnPropertySymbols:function(e){var t=ZI.f;return t?t(jV(e)):[]}})});var eO=o(function(){"use strict";RI();xI();CI();lf();rO()});var cO=o(function(){"use strict";var GV=h(),HV=P(),WV=T(),VV=R(),Xu=S(),KV=$(),zV=j(),YV=gr(),tO=F(),JV=er(),XV=wt(),xe=WV.Symbol,Ct=xe&&xe.prototype;HV&&zV(xe)&&(!("description"in Ct)||xe().description!==void 0)&&(Qu={},_t=function(){var e=arguments.length<1||arguments[0]===void 0?void 0:tO(arguments[0]),t=YV(Ct,this)?new xe(e):e===void 0?xe():xe(e);return e===""&&(Qu[t]=!0),t},XV(_t,xe),aO=_t.for,_t.for=function(r){var e=tO(r),t=VV(aO,this,e);return e===""&&(Qu[t]=!0),t},_t.prototype=Ct,Ct.constructor=_t,iO=String(xe("description detection"))==="Symbol(description detection)",nO=Xu(Ct.valueOf),uO=Xu(Ct.toString),oO=/^Symbol\((.*)\)[^)]+$/,sO=Xu("".replace),vO=Xu("".slice),JV(Ct,"description",{configurable:!0,get:function(){var e=nO(this);if(KV(Qu,e))return"";var t=uO(e),a=iO?vO(t,7,-1):sO(t,oO,"$1");return a===""?void 0:a}}),GV({global:!0,constructor:!0,forced:!0},{Symbol:_t}));var Qu,_t,aO,iO,nO,uO,oO,sO,vO});var fO=o(function(){"use strict";var QV=T(),ZV=hr(),r4=z().f,e4=cr().f,hf=QV.Symbol;ZV("asyncDispose");hf&&(Ni=e4(hf,"asyncDispose"),Ni.enumerable&&Ni.configurable&&Ni.writable&&r4(hf,"asyncDispose",{value:Ni.value,enumerable:!1,configurable:!1,writable:!1}));var Ni});var lO=o(function(){"use strict";var t4=hr();t4("asyncIterator")});var hO=o(function(){"use strict";var a4=T(),i4=hr(),n4=z().f,u4=cr().f,qf=a4.Symbol;i4("dispose");qf&&(Fi=u4(qf,"dispose"),Fi.enumerable&&Fi.configurable&&Fi.writable&&n4(qf,"dispose",{value:Fi.value,enumerable:!1,configurable:!1,writable:!1}));var Fi});var qO=o(function(){"use strict";var o4=hr();o4("hasInstance")});var pO=o(function(){"use strict";var s4=hr();s4("isConcatSpreadable")});var dO=o(function(){"use strict";var v4=hr();v4("iterator")});var gO=o(function(){"use strict";var c4=hr();c4("match")});var yO=o(function(){"use strict";var f4=hr();f4("matchAll")});var EO=o(function(){"use strict";var l4=hr();l4("replace")});var SO=o(function(){"use strict";var h4=hr();h4("search")});var IO=o(function(){"use strict";var q4=hr();q4("species")});var OO=o(function(){"use strict";var p4=hr();p4("split")});var mO=o(function(){"use strict";var d4=hr(),g4=Mc();d4("toPrimitive");g4()});var TO=o(function(){"use strict";var y4=M(),E4=hr(),S4=Sr();E4("toStringTag");S4(y4("Symbol"),"Symbol")});var bO=o(function(){"use strict";var I4=hr();I4("unscopables")});var Lr=o(function(NFr,xO){"use strict";var O4=ua(),wO=Function.prototype,RO=wO.apply,AO=wO.call;xO.exports=typeof Reflect=="object"&&Reflect.apply||(O4?AO.bind(RO):function(){return AO.apply(RO,arguments)})});var Di=o(function(FFr,PO){"use strict";var m4=S(),T4=L();PO.exports=function(r,e,t){try{return m4(T4(Object.getOwnPropertyDescriptor(r,e)[t]))}catch(a){}}});var pf=o(function(DFr,CO){"use strict";var b4=_();CO.exports=function(r){return b4(r)||r===null}});var df=o(function(MFr,_O){"use strict";var R4=pf(),A4=String,w4=TypeError;_O.exports=function(r){if(R4(r))return r;throw new w4("Can't set "+A4(r)+" as a prototype")}});var $r=o(function(LFr,NO){"use strict";var x4=Di(),P4=_(),C4=J(),_4=df();NO.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=x4(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch(a){}return function(i,n){return C4(i),_4(n),P4(i)&&(r?t(i,n):i.__proto__=n),i}}():void 0)});var gf=o(function($Fr,FO){"use strict";var N4=z().f;FO.exports=function(r,e,t){t in r||N4(r,t,{configurable:!0,get:function(){return e[t]},set:function(a){e[t]=a}})}});var rt=o(function(UFr,MO){"use strict";var F4=j(),D4=_(),DO=$r();MO.exports=function(r,e,t){var a,i;return DO&&F4(a=e.constructor)&&a!==t&&D4(i=a.prototype)&&i!==t.prototype&&DO(r,i),r}});var Nt=o(function(BFr,LO){"use strict";var M4=F();LO.exports=function(r,e){return r===void 0?arguments.length<2?"":e:M4(r)}});var yf=o(function(jFr,$O){"use strict";var L4=_(),$4=fr();$O.exports=function(r,e){L4(e)&&"cause"in e&&$4(r,"cause",e.cause)}});var Zu=o(function(kFr,jO){"use strict";var U4=S(),UO=Error,B4=U4("".replace),j4=function(r){return String(new UO(r).stack)}("zxcasd"),BO=/\n\s*at [^:]*:[^\n]*/,k4=BO.test(j4);jO.exports=function(r,e){if(k4&&typeof r=="string"&&!UO.prepareStackTrace)for(;e--;)r=B4(r,BO,"");return r}});var Ef=o(function(GFr,kO){"use strict";var G4=E(),H4=xr();kO.exports=!G4(function(){var r=new Error("a");return"stack"in r?(Object.defineProperty(r,"stack",H4(1,7)),r.stack!==7):!0})});var ro=o(function(HFr,HO){"use strict";var W4=fr(),V4=Zu(),K4=Ef(),GO=Error.captureStackTrace;HO.exports=function(r,e,t,a){K4&&(GO?GO(r,e):W4(r,"stack",V4(t,a)))}});var Sf=o(function(WFr,XO){"use strict";var WO=M(),z4=$(),VO=fr(),Y4=gr(),KO=$r(),zO=wt(),YO=gf(),J4=rt(),X4=Nt(),Q4=yf(),Z4=ro(),r3=P(),JO=D();XO.exports=function(r,e,t,a){var i="stackTraceLimit",n=a?2:1,u=r.split("."),s=u[u.length-1],v=WO.apply(null,u);if(v){var f=v.prototype;if(!JO&&z4(f,"cause")&&delete f.cause,!t)return v;var c=WO("Error"),l=e(function(q,p){var g=X4(a?p:q,void 0),y=a?new v(q):new v;return g!==void 0&&VO(y,"message",g),Z4(y,l,y.stack,2),this&&Y4(f,this)&&J4(y,this,l),arguments.length>n&&Q4(y,arguments[n]),y});if(l.prototype=f,s!=="Error"?KO?KO(l,c):zO(l,c,{name:!0}):r3&&i in v&&(YO(l,v,i),YO(l,v,"prepareStackTrace")),zO(l,v),!JO)try{f.name!==s&&VO(f,"name",s),f.constructor=l}catch(q){}return l}}});var em=o(function(){"use strict";var ZO=h(),e3=T(),de=Lr(),rm=Sf(),If="WebAssembly",QO=e3[If],eo=new Error("e",{cause:7}).cause!==7,Ft=function(r,e){var t={};t[r]=rm(r,e,eo),ZO({global:!0,constructor:!0,arity:1,forced:eo},t)},Of=function(r,e){if(QO&&QO[r]){var t={};t[r]=rm(If+"."+r,e,eo),ZO({target:If,stat:!0,constructor:!0,arity:1,forced:eo},t)}};Ft("Error",function(r){return function(t){return de(r,this,arguments)}});Ft("EvalError",function(r){return function(t){return de(r,this,arguments)}});Ft("RangeError",function(r){return function(t){return de(r,this,arguments)}});Ft("ReferenceError",function(r){return function(t){return de(r,this,arguments)}});Ft("SyntaxError",function(r){return function(t){return de(r,this,arguments)}});Ft("TypeError",function(r){return function(t){return de(r,this,arguments)}});Ft("URIError",function(r){return function(t){return de(r,this,arguments)}});Of("CompileError",function(r){return function(t){return de(r,this,arguments)}});Of("LinkError",function(r){return function(t){return de(r,this,arguments)}});Of("RuntimeError",function(r){return function(t){return de(r,this,arguments)}})});var nm=o(function(){"use strict";var t3=h(),am=M(),a3=_(),i3=Mr(),n3=E(),im="Error",Tf="DOMException",u3=Object.setPrototypeOf||{}.__proto__,tm=am(Tf),mf=Error,to=mf.isError,o3=!to||!u3||n3(function(){return tm&&!to(new tm(Tf))||!to(new mf(im,{cause:function(){}}))||to(am("Object","create")(mf.prototype))});t3({target:"Error",stat:!0,sham:!0,forced:o3},{isError:function(e){if(!a3(e))return!1;var t=i3(e);return t===im||t===Tf}})});var bf=o(function(JFr,om){"use strict";var s3=P(),v3=E(),c3=w(),um=Nt(),ao=Error.prototype.toString,f3=v3(function(){if(s3){var r=Object.create(Object.defineProperty({},"name",{get:function(){return this===r}}));if(ao.call(r)!=="true")return!0}return ao.call({message:1,name:2})!=="2: 1"||ao.call({})!=="Error"});om.exports=f3?function(){var e=c3(this),t=um(e.name,"Error"),a=um(e.message);return t?a?t+": "+a:t:a}:ao});var cm=o(function(){"use strict";var l3=W(),sm=bf(),vm=Error.prototype;vm.toString!==sm&&l3(vm,"toString",sm)});var io=o(function(ZFr,fm){"use strict";var h3=E();fm.exports=!h3(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype})});var Er=o(function(rDr,hm){"use strict";var q3=$(),p3=j(),d3=G(),g3=Ii(),y3=io(),lm=g3("IE_PROTO"),Rf=Object,E3=Rf.prototype;hm.exports=y3?Rf.getPrototypeOf:function(r){var e=d3(r);if(q3(e,lm))return e[lm];var t=e.constructor;return p3(t)&&e instanceof t?t.prototype:e instanceof Rf?E3:null}});var Mi=o(function(eDr,qm){"use strict";qm.exports=Object.create?Object.create(null):{}});var no=o(function(tDr,pm){"use strict";var S3=N(),I3=Mi(),O3=S3("iterator"),m3=Array.prototype;pm.exports=function(r){return r!==void 0&&(I3.Array===r||m3[O3]===r)}});var Pe=o(function(aDr,ym){"use strict";var T3=sr(),b3=ee(),dm=vr(),R3=N(),gm=R3("iterator"),A3=Array.prototype;ym.exports=function(r){if(!b3(r))return dm(r,gm)||dm(r,"@@iterator")||(T3(r)==="Arguments"?A3[gm]:void 0)}});var Ce=o(function(iDr,Em){"use strict";var w3=R(),x3=j(),P3=w(),C3=Ke(),_3=Pe(),N3=TypeError;Em.exports=function(r,e){var t=arguments.length<2?_3(r):e;if(x3(t))return P3(w3(t,r));throw new N3(C3(r)+" is not iterable")}});var Q=o(function(nDr,Im){"use strict";var F3=R(),Sm=w(),D3=vr();Im.exports=function(r,e,t){var a,i;Sm(r);try{if(a=D3(r,"return"),!a){if(e==="throw")throw t;return t}a=F3(a,r)}catch(n){i=!0,a=n}if(e==="throw")throw t;if(i)throw a;return Sm(a),t}});var tr=o(function(uDr,bm){"use strict";var M3=Pr(),L3=R(),$3=w(),U3=Ke(),B3=no(),j3=H(),Om=gr(),k3=Ce(),G3=Pe(),mm=Q(),H3=TypeError,uo=function(r,e){this.stopped=r,this.result=e},Tm=uo.prototype;bm.exports=function(r,e,t){var a=t&&t.that,i=!!(t&&t.AS_ENTRIES),n=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),s=!!(t&&t.INTERRUPTED),v=M3(e,a),f,c,l,q,p,g,y,d=function(A){var U=f;return f=void 0,U&&mm(U,"normal"),new uo(!0,A)},O=function(A){return i?($3(A),s?v(A[0],A[1],d):v(A[0],A[1])):s?v(A,d):v(A)};if(n)f=r.iterator;else if(u)f=r;else{if(c=G3(r),!c)throw new H3(U3(r)+" is not iterable");if(B3(c)){for(l=0,q=j3(r);q>l;l++)if(p=O(r[l]),p&&Om(Tm,p))return p;return new uo(!1)}f=k3(r,c)}for(g=n?r.next:f.next;!(y=L3(g,f)).done;){var x=y.value;try{p=O(x)}catch(A){if(f)mm(f,"throw",A);else throw A}if(typeof p=="object"&&p&&Om(Tm,p))return p}return new uo(!1)}});var Am=o(function(){"use strict";var W3=h(),V3=gr(),K3=Er(),oo=$r(),z3=wt(),Rm=or(),Af=fr(),wf=xr(),Y3=yf(),J3=ro(),X3=tr(),Q3=Nt(),Z3=N(),r5=Z3("toStringTag"),so=Error,e5=[].push,ga=function(e,t){var a=V3(xf,this),i;oo?i=oo(new so,a?K3(this):xf):(i=a?this:Rm(xf),Af(i,r5,"Error")),t!==void 0&&Af(i,"message",Q3(t)),J3(i,ga,i.stack,1),arguments.length>2&&Y3(i,arguments[2]);var n=[];return X3(e,e5,{that:n}),Af(i,"errors",n),i};oo?oo(ga,so):z3(ga,so,{name:!0});var xf=ga.prototype=Rm(so.prototype,{constructor:wf(1,ga),message:wf(1,""),name:wf(1,"AggregateError")});W3({global:!0,constructor:!0,arity:2},{AggregateError:ga})});var wm=o(function(){"use strict";Am()});var _m=o(function(){"use strict";var t5=h(),a5=M(),i5=Lr(),xm=E(),n5=Sf(),Pf="AggregateError",Pm=a5(Pf),Cm=!xm(function(){return Pm([1]).errors[0]!==1})&&xm(function(){return Pm([1],Pf,{cause:7}).cause!==7});t5({global:!0,constructor:!0,arity:2,forced:Cm},{AggregateError:n5(Pf,function(r){return function(t,a){return i5(r,this,arguments)}},Cm,!0)})});var Dm=o(function(){"use strict";var u5=h(),o5=T(),s5=gr(),Nm=Er(),co=$r(),v5=wt(),Fm=or(),vo=fr(),Cf=xr(),c5=ro(),f5=Nt(),l5=N(),h5=E(),q5=D(),ya=o5.SuppressedError,p5=l5("toStringTag"),fo=Error,d5=!!ya&&ya.length!==3,g5=!!ya&&h5(function(){return new ya(1,2,3,{cause:4}).cause===4}),lo=d5||g5,Dt=function(e,t,a){var i=s5(Li,this),n;return co?n=lo&&(!i||Nm(this)===Li)?new ya:co(new fo,i?Nm(this):Li):(n=i?this:Fm(Li),vo(n,p5,"Error")),a!==void 0&&vo(n,"message",f5(a)),c5(n,Dt,n.stack,1),vo(n,"error",e),vo(n,"suppressed",t),n};co?co(Dt,fo):v5(Dt,fo,{name:!0});var Li=Dt.prototype=lo?ya.prototype:Fm(fo.prototype,{constructor:Cf(1,Dt),message:Cf(1,""),name:Cf(1,"SuppressedError")});lo&&!q5&&(Li.constructor=Dt);u5({global:!0,constructor:!0,arity:3,forced:lo},{SuppressedError:Dt})});var Ir=o(function(pDr,Mm){"use strict";var y5=N(),E5=or(),S5=z().f,_f=y5("unscopables"),Nf=Array.prototype;Nf[_f]===void 0&&S5(Nf,_f,{configurable:!0,value:E5(null)});Mm.exports=function(r){Nf[_f][r]=!0}});var Lm=o(function(){"use strict";var I5=h(),O5=G(),m5=H(),T5=rr(),b5=Ir();I5({target:"Array",proto:!0},{at:function(e){var t=O5(this),a=m5(t),i=T5(e),n=i>=0?i:a+i;return n<0||n>=a?void 0:t[n]}});b5("at")});var oe=o(function(yDr,$m){"use strict";var R5=TypeError,A5=9007199254740991;$m.exports=function(r){if(r>A5)throw new R5("Maximum allowed index exceeded");return r}});var _e=o(function(EDr,Um){"use strict";var w5=P(),x5=pe(),P5=TypeError,C5=Object.getOwnPropertyDescriptor,_5=w5&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(r){return r instanceof TypeError}}();Um.exports=_5?function(r,e){if(x5(r)&&!C5(r,"length").writable)throw new P5("Cannot set read only .length");return r.length=e}:function(r,e){return r.length=e}});var Ea=o(function(SDr,Bm){"use strict";var N5=E(),F5=N(),D5=ie(),M5=F5("species");Bm.exports=function(r){return D5>=51||!N5(function(){var e=[],t=e.constructor={};return t[M5]=function(){return{foo:1}},e[r](Boolean).foo!==1})}});var Hm=o(function(){"use strict";var L5=h(),$5=E(),U5=pe(),B5=_(),j5=G(),k5=H(),jm=oe(),km=ar(),G5=_e(),H5=la(),W5=Ea(),V5=N(),K5=ie(),Gm=V5("isConcatSpreadable"),z5=K5>=51||!$5(function(){var r=[];return r[Gm]=!1,r.concat()[0]!==r}),Y5=function(r){if(!B5(r))return!1;var e=r[Gm];return e!==void 0?!!e:U5(r)},J5=!z5||!W5("concat");L5({target:"Array",proto:!0,arity:1,forced:J5},{concat:function(e){var t=j5(this),a=H5(t,0),i=0,n,u,s,v,f;for(n=-1,s=arguments.length;n<s;n++)if(f=n===-1?t:arguments[n],Y5(f))for(v=k5(f),jm(i+v),u=0;u<v;u++,i++)u in f&&km(a,i,f[u]);else jm(i+1),km(a,i++,f);return G5(a,i),a}})});var $i=o(function(mDr,Vm){"use strict";var Wm=Ke(),X5=TypeError;Vm.exports=function(r,e){if(!delete r[e])throw new X5("Cannot delete property "+Wm(e)+" of "+Wm(r))}});var Df=o(function(TDr,Km){"use strict";var Q5=G(),Ff=qe(),Z5=H(),rK=$i(),eK=Math.min;Km.exports=[].copyWithin||function(e,t){var a=Q5(this),i=Z5(a),n=Ff(e,i),u=Ff(t,i),s=arguments.length>2?arguments[2]:void 0,v=eK((s===void 0?i:Ff(s,i))-u,i-n),f=1;for(u<n&&n<u+v&&(f=-1,u+=v-1,n+=v-1);v-- >0;)u in a?a[n]=a[u]:rK(a,n),n+=f,u+=f;return a}});var zm=o(function(){"use strict";var tK=h(),aK=Df(),iK=Ir();tK({target:"Array",proto:!0},{copyWithin:aK});iK("copyWithin")});var ge=o(function(ADr,Ym){"use strict";var nK=E();Ym.exports=function(r,e){var t=[][r];return!!t&&nK(function(){t.call(null,e||function(){return 1},1)})}});var Jm=o(function(){"use strict";var uK=h(),oK=lr().every,sK=ge(),vK=sK("every");uK({target:"Array",proto:!0,forced:!vK},{every:function(e){return oK(this,e,arguments.length>1?arguments[1]:void 0)}})});var ho=o(function(PDr,Qm){"use strict";var cK=G(),Xm=qe(),fK=H();Qm.exports=[].fill||function(e){for(var t=cK(this),a=fK(t),i=arguments.length,n=Xm(i>1?arguments[1]:void 0,a),u=i>2?arguments[2]:void 0,s=u===void 0?a:Xm(u,a);s>n;)t[n++]=e;return t}});var Zm=o(function(){"use strict";var lK=h(),hK=ho(),qK=Ir();lK({target:"Array",proto:!0},{fill:hK});qK("fill")});var rT=o(function(){"use strict";var pK=h(),dK=lr().filter,gK=Ea(),yK=gK("filter");pK({target:"Array",proto:!0,forced:!yK},{filter:function(e){return dK(this,e,arguments.length>1?arguments[1]:void 0)}})});var tT=o(function(){"use strict";var EK=h(),SK=lr().find,IK=Ir(),Mf="find",eT=!0;Mf in[]&&Array(1)[Mf](function(){eT=!1});EK({target:"Array",proto:!0,forced:eT},{find:function(e){return SK(this,e,arguments.length>1?arguments[1]:void 0)}});IK(Mf)});var iT=o(function(){"use strict";var OK=h(),mK=lr().findIndex,TK=Ir(),Lf="findIndex",aT=!0;Lf in[]&&Array(1)[Lf](function(){aT=!1});OK({target:"Array",proto:!0,forced:aT},{findIndex:function(e){return mK(this,e,arguments.length>1?arguments[1]:void 0)}});TK(Lf)});var Ui=o(function(UDr,uT){"use strict";var bK=Pr(),RK=mt(),AK=G(),wK=H(),nT=function(r){var e=r===1;return function(t,a,i){for(var n=AK(t),u=RK(n),s=wK(u),v=bK(a,i),f,c;s-- >0;)if(f=u[s],c=v(f,s,n),c)switch(r){case 0:return f;case 1:return s}return e?-1:void 0}};uT.exports={findLast:nT(0),findLastIndex:nT(1)}});var oT=o(function(){"use strict";var xK=h(),PK=Ui().findLast,CK=Ir();xK({target:"Array",proto:!0},{findLast:function(e){return PK(this,e,arguments.length>1?arguments[1]:void 0)}});CK("findLast")});var sT=o(function(){"use strict";var _K=h(),NK=Ui().findLastIndex,FK=Ir();_K({target:"Array",proto:!0},{findLastIndex:function(e){return NK(this,e,arguments.length>1?arguments[1]:void 0)}});FK("findLastIndex")});var $f=o(function(HDr,cT){"use strict";var DK=pe(),MK=H(),LK=oe(),$K=Pr(),UK=ar(),vT=function(r,e,t,a,i,n,u,s){for(var v=i,f=0,c=u?$K(u,s):!1,l,q;f<a;)f in t&&(l=c?c(t[f],f,e):t[f],n>0&&DK(l)?(q=MK(l),v=vT(r,e,l,q,v,n-1)-1):(LK(v+1),UK(r,v,l)),v++),f++;return v};cT.exports=vT});var fT=o(function(){"use strict";var BK=h(),jK=$f(),kK=G(),GK=H(),HK=rr(),WK=la();BK({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=kK(this),a=GK(t),i=e===void 0?1:HK(e),n=WK(t,0);return jK(n,t,t,a,0,i),n}})});var lT=o(function(){"use strict";var VK=h(),KK=$f(),zK=L(),YK=G(),JK=H(),XK=la();VK({target:"Array",proto:!0},{flatMap:function(e){var t=YK(this),a=JK(t),i;return zK(e),i=XK(t,0),KK(i,t,t,a,0,1,e,arguments.length>1?arguments[1]:void 0),i}})});var Uf=o(function(YDr,hT){"use strict";var QK=lr().forEach,ZK=ge(),rz=ZK("forEach");hT.exports=rz?[].forEach:function(e){return QK(this,e,arguments.length>1?arguments[1]:void 0)}});var pT=o(function(){"use strict";var ez=h(),qT=Uf();ez({target:"Array",proto:!0,forced:[].forEach!==qT},{forEach:qT})});var qo=o(function(QDr,dT){"use strict";var tz=w(),az=Q();dT.exports=function(r,e,t,a){try{return a?e(tz(t)[0],t[1]):e(t)}catch(i){az(r,"throw",i)}}});var Bf=o(function(ZDr,ST){"use strict";var iz=Pr(),nz=R(),uz=G(),oz=qo(),sz=no(),vz=Xe(),cz=H(),gT=ar(),fz=_e(),lz=Ce(),hz=Pe(),yT=Q(),qz=oe(),ET=Array;ST.exports=function(e){var t=vz(this),a=arguments.length,i=a>1?arguments[1]:void 0,n=i!==void 0;n&&(i=iz(i,a>2?arguments[2]:void 0));var u=uz(e),s=hz(u),v=0,f,c,l,q,p,g;if(s&&!(this===ET&&sz(s)))for(c=t?new this:[],q=lz(u,s),p=q.next;!(l=nz(p,q)).done;v++){try{qz(v)}catch(y){yT(q,"throw",y)}g=n?oz(q,i,[l.value,v],!0):l.value;try{gT(c,v,g)}catch(y){yT(q,"throw",y)}}else for(f=cz(u),c=t?new this(f):ET(f);f>v;v++)g=n?i(u[v],v):u[v],gT(c,v,g);return fz(c,v),c}});var Bi=o(function(rMr,TT){"use strict";var pz=N(),OT=pz("iterator"),mT=!1;try{IT=0,jf={next:function(){return{done:!!IT++}},return:function(){mT=!0}},jf[OT]=function(){return this},Array.from(jf,function(){throw 2})}catch(r){}var IT,jf;TT.exports=function(r,e){try{if(!e&&!mT)return!1}catch(i){return!1}var t=!1;try{var a={};a[OT]=function(){return{next:function(){return{done:t=!0}}}},r(a)}catch(i){}return t}});var bT=o(function(){"use strict";var dz=h(),gz=Bf(),yz=Bi(),Ez=!yz(function(r){Array.from(r)});dz({target:"Array",stat:!0,forced:Ez},{from:gz})});var AT=o(function(){"use strict";var Sz=h(),Iz=At().includes,RT=E(),Oz=Ir(),mz=RT(function(){return!Array(1).includes()}),Tz=RT(function(){return[,1].includes(void 0,1)});Sz({target:"Array",proto:!0,forced:mz||Tz},{includes:function(e){return Iz(this,e,arguments.length>1?arguments[1]:void 0)}});Oz("includes")});var xT=o(function(){"use strict";var bz=h(),Rz=Je(),Az=At().indexOf,wz=ge(),kf=Rz([].indexOf),wT=!!kf&&1/kf([1],1,-0)<0,xz=wT||!wz("indexOf");bz({target:"Array",proto:!0,forced:xz},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return wT?kf(this,e,t)||0:Az(this,e,t)}})});var PT=o(function(){"use strict";var Pz=h(),Cz=pe();Pz({target:"Array",stat:!0},{isArray:Cz})});var Mt=o(function(vMr,NT){"use strict";var _z=E(),Nz=j(),Fz=_(),Dz=or(),CT=Er(),Mz=W(),Lz=N(),$z=D(),Wf=Lz("iterator"),_T=!1,Ne,Gf,Hf;[].keys&&(Hf=[].keys(),"next"in Hf?(Gf=CT(CT(Hf)),Gf!==Object.prototype&&(Ne=Gf)):_T=!0);var Uz=!Fz(Ne)||_z(function(){var r={};return Ne[Wf].call(r)!==r});Uz?Ne={}:$z&&(Ne=Dz(Ne));Nz(Ne[Wf])||Mz(Ne,Wf,function(){return this});NT.exports={IteratorPrototype:Ne,BUGGY_SAFARI_ITERATORS:_T}});var po=o(function(cMr,FT){"use strict";var Bz=Mt().IteratorPrototype,jz=or(),kz=xr(),Gz=Sr(),Hz=Mi(),Wz=function(){return this};FT.exports=function(r,e,t,a){var i=e+" Iterator";return r.prototype=jz(Bz,{next:kz(+!a,t)}),Gz(r,i,!1,!0),Hz[i]=Wz,r}});var Eo=o(function(fMr,HT){"use strict";var Vz=h(),Kz=R(),go=D(),kT=bt(),zz=j(),Yz=po(),DT=Er(),MT=$r(),Jz=Sr(),Xz=fr(),Vf=W(),Qz=N(),LT=Mi(),GT=Mt(),Zz=kT.PROPER,r7=kT.CONFIGURABLE,$T=GT.IteratorPrototype,yo=GT.BUGGY_SAFARI_ITERATORS,ji=Qz("iterator"),UT="keys",ki="values",BT="entries",jT=function(){return this};HT.exports=function(r,e,t,a,i,n,u){Yz(t,e,a);var s=function(O){if(O===i&&q)return q;if(!yo&&O&&O in c)return c[O];switch(O){case UT:return function(){return new t(this,O)};case ki:return function(){return new t(this,O)};case BT:return function(){return new t(this,O)}}return function(){return new t(this)}},v=e+" Iterator",f=!1,c=r.prototype,l=c[ji]||c["@@iterator"]||i&&c[i],q=!yo&&l||s(i),p=e==="Array"&&c.entries||l,g,y,d;if(p&&(g=DT(p.call(new r)),g!==Object.prototype&&g.next&&(!go&&DT(g)!==$T&&(MT?MT(g,$T):zz(g[ji])||Vf(g,ji,jT)),Jz(g,v,!0,!0),go&&(LT[v]=jT))),Zz&&i===ki&&l&&l.name!==ki&&(!go&&r7?Xz(c,"name",ki):(f=!0,q=function(){return Kz(l,this)})),i)if(y={values:s(ki),keys:n?q:s(UT),entries:s(BT)},u)for(d in y)(yo||f||!(d in c))&&Vf(c,d,y[d]);else Vz({target:e,proto:!0,forced:yo||f},y);return(!go||u)&&c[ji]!==q&&Vf(c,ji,q,{name:i}),LT[e]=q,y}});var Fe=o(function(lMr,WT){"use strict";WT.exports=function(r,e){return{value:r,done:e}}});var Gi=o(function(hMr,JT){"use strict";var e7=ur(),Kf=Ir(),VT=Mi(),zT=Y(),t7=z().f,a7=Eo(),So=Fe(),i7=D(),n7=P(),YT="Array Iterator",u7=zT.set,o7=zT.getterFor(YT);JT.exports=a7(Array,"Array",function(r,e){u7(this,{type:YT,target:e7(r),index:0,kind:e})},function(){var r=o7(this),e=r.target,t=r.index++;if(!e||t>=e.length)return r.target=null,So(void 0,!0);switch(r.kind){case"keys":return So(t,!1);case"values":return So(e[t],!1)}return So([t,e[t]],!1)},"values");var KT=VT.Arguments=VT.Array;Kf("keys");Kf("values");Kf("entries");if(!i7&&n7&&KT.name!=="values")try{t7(KT,"name",{value:"values"})}catch(r){}});var XT=o(function(){"use strict";var s7=h(),v7=S(),c7=mt(),f7=ur(),l7=ge(),h7=v7([].join),q7=c7!==Object,p7=q7||!l7("join",",");s7({target:"Array",proto:!0,forced:p7},{join:function(e){return h7(f7(this),e===void 0?",":e)}})});var Yf=o(function(dMr,ZT){"use strict";var d7=Lr(),g7=ur(),y7=rr(),E7=H(),S7=ge(),I7=Math.min,zf=[].lastIndexOf,QT=!!zf&&1/[1].lastIndexOf(1,-0)<0,O7=S7("lastIndexOf"),m7=QT||!O7;ZT.exports=m7?function(e){if(QT)return d7(zf,this,arguments)||0;var t=g7(this),a=E7(t);if(a===0)return-1;var i=a-1;for(arguments.length>1&&(i=I7(i,y7(arguments[1]))),i<0&&(i=a+i);i>=0;i--)if(i in t&&t[i]===e)return i||0;return-1}:zf});var eb=o(function(){"use strict";var T7=h(),rb=Yf();T7({target:"Array",proto:!0,forced:rb!==[].lastIndexOf},{lastIndexOf:rb})});var tb=o(function(){"use strict";var b7=h(),R7=lr().map,A7=Ea(),w7=A7("map");b7({target:"Array",proto:!0,forced:!w7},{map:function(e){return R7(this,e,arguments.length>1?arguments[1]:void 0)}})});var ib=o(function(){"use strict";var x7=h(),P7=E(),C7=Xe(),_7=ar(),N7=_e(),ab=Array,F7=P7(function(){function r(){}return!(ab.of.call(r)instanceof r)});x7({target:"Array",stat:!0,forced:F7},{of:function(){for(var e=0,t=arguments.length,a=new(C7(this)?this:ab)(t);t>e;)_7(a,e,arguments[e++]);return N7(a,t),a}})});var nb=o(function(){"use strict";var D7=h(),M7=G(),L7=H(),$7=_e(),U7=oe(),B7=E(),j7=B7(function(){return[].push.call({length:4294967296},1)!==4294967297}),k7=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}},G7=j7||!k7();D7({target:"Array",proto:!0,arity:1,forced:G7},{push:function(e){var t=M7(this),a=L7(t),i=arguments.length;U7(a+i);for(var n=0;n<i;n++)t[a]=arguments[n],a++;return $7(t,a),a}})});var Hi=o(function(bMr,vb){"use strict";var H7=L(),W7=G(),V7=mt(),K7=H(),ub=TypeError,ob="Reduce of empty array with no initial value",sb=function(r){return function(e,t,a,i){var n=W7(e),u=V7(n),s=K7(n);if(H7(t),s===0&&a<2)throw new ub(ob);var v=r?s-1:0,f=r?-1:1;if(a<2)for(;;){if(v in u){i=u[v],v+=f;break}if(v+=f,r?v<0:s<=v)throw new ub(ob)}for(;r?v>=0:s>v;v+=f)v in u&&(i=t(i,u[v],v,n));return i}};vb.exports={left:sb(!1),right:sb(!0)}});var Vi=o(function(RMr,cb){"use strict";var Wi=T(),z7=te(),Y7=sr(),Io=function(r){return z7.slice(0,r.length)===r};cb.exports=function(){return Io("Bun/")?"BUN":Io("Cloudflare-Workers")?"CLOUDFLARE":Io("Deno/")?"DENO":Io("Node.js/")?"NODE":Wi.Bun&&typeof Bun.version=="string"?"BUN":Wi.Deno&&typeof Deno.version=="object"?"DENO":Y7(Wi.process)==="process"?"NODE":Wi.window&&Wi.document?"BROWSER":"REST"}()});var Lt=o(function(AMr,fb){"use strict";var J7=Vi();fb.exports=J7==="NODE"});var hb=o(function(){"use strict";var X7=h(),Q7=Hi().left,Z7=ge(),lb=ie(),rY=Lt(),eY=!rY&&lb>79&&lb<83,tY=eY||!Z7("reduce");X7({target:"Array",proto:!0,forced:tY},{reduce:function(e){var t=arguments.length;return Q7(this,e,t,t>1?arguments[1]:void 0)}})});var pb=o(function(){"use strict";var aY=h(),iY=Hi().right,nY=ge(),qb=ie(),uY=Lt(),oY=!uY&&qb>79&&qb<83,sY=oY||!nY("reduceRight");aY({target:"Array",proto:!0,forced:sY},{reduceRight:function(e){return iY(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})});var gb=o(function(){"use strict";var vY=h(),cY=S(),fY=pe(),lY=cY([].reverse),db=[1,2];vY({target:"Array",proto:!0,forced:String(db)===String(db.reverse())},{reverse:function(){return fY(this)&&(this.length=this.length),lY(this)}})});var Sb=o(function(){"use strict";var hY=h(),yb=pe(),qY=Xe(),pY=_(),Eb=qe(),dY=H(),gY=ur(),yY=ar(),EY=_e(),SY=N(),IY=Ea(),OY=Kr(),mY=IY("slice"),TY=SY("species"),Jf=Array,bY=Math.max;hY({target:"Array",proto:!0,forced:!mY},{slice:function(e,t){var a=gY(this),i=dY(a),n=Eb(e,i),u=Eb(t===void 0?i:t,i),s,v,f;if(yb(a)&&(s=a.constructor,qY(s)&&(s===Jf||yb(s.prototype))?s=void 0:pY(s)&&(s=s[TY],s===null&&(s=void 0)),s===Jf||s===void 0))return OY(a,n,u);for(v=new(s===void 0?Jf:s)(bY(u-n,0)),f=0;n<u;n++,f++)n in a&&yY(v,f,a[n]);return EY(v,f),v}})});var Ib=o(function(){"use strict";var RY=h(),AY=lr().some,wY=ge(),xY=wY("some");RY({target:"Array",proto:!0,forced:!xY},{some:function(e){return AY(this,e,arguments.length>1?arguments[1]:void 0)}})});var Oo=o(function($Mr,mb){"use strict";var Ob=Kr(),PY=Math.floor,Xf=function(r,e){var t=r.length;if(t<8)for(var a=1,i,n;a<t;){for(n=a,i=r[a];n&&e(r[n-1],i)>0;)r[n]=r[--n];n!==a++&&(r[n]=i)}else for(var u=PY(t/2),s=Xf(Ob(r,0,u),e),v=Xf(Ob(r,u),e),f=s.length,c=v.length,l=0,q=0;l<f||q<c;)r[l+q]=l<f&&q<c?e(s[l],v[q])<=0?s[l++]:v[q++]:l<f?s[l++]:v[q++];return r};mb.exports=Xf});var Qf=o(function(UMr,bb){"use strict";var CY=te(),Tb=CY.match(/firefox\/(\d+)/i);bb.exports=!!Tb&&+Tb[1]});var Zf=o(function(BMr,Rb){"use strict";var _Y=te();Rb.exports=/MSIE|Trident/.test(_Y)});var mo=o(function(jMr,wb){"use strict";var NY=te(),Ab=NY.match(/AppleWebKit\/(\d+)\./);wb.exports=!!Ab&&+Ab[1]});var Lb=o(function(){"use strict";var FY=h(),Db=S(),DY=L(),MY=G(),xb=H(),LY=$i(),Pb=F(),rl=E(),$Y=Oo(),UY=ge(),Cb=Qf(),BY=Zf(),_b=ie(),Nb=mo(),et=[],Fb=Db(et.sort),jY=Db(et.push),kY=rl(function(){et.sort(void 0)}),GY=rl(function(){et.sort(null)}),HY=UY("sort"),Mb=!rl(function(){if(_b)return _b<70;if(!(Cb&&Cb>3)){if(BY)return!0;if(Nb)return Nb<603;var r="",e,t,a,i;for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)et.push({k:t+i,v:a})}for(et.sort(function(n,u){return u.v-n.v}),i=0;i<et.length;i++)t=et[i].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return r!=="DGBEFHACIJK"}}),WY=kY||!GY||!HY||!Mb,VY=function(r){return function(e,t){if(t===void 0)return-1;if(e===void 0)return 1;if(r!==void 0)return+r(e,t)||0;var a=Pb(e),i=Pb(t);return a===i?0:a>i?1:-1}};FY({target:"Array",proto:!0,forced:WY},{sort:function(e){e!==void 0&&DY(e);var t=MY(this);if(Mb)return e===void 0?Fb(t):Fb(t,e);var a=[],i=xb(t),n,u;for(u=0;u<i;u++)u in t&&jY(a,t[u]);for($Y(a,VY(e)),n=xb(a),u=0;u<n;)t[u]=a[u++];for(;u<i;)LY(t,u++);return t}})});var $t=o(function(HMr,Ub){"use strict";var KY=M(),zY=er(),YY=N(),JY=P(),$b=YY("species");Ub.exports=function(r){var e=KY(r);JY&&e&&!e[$b]&&zY(e,$b,{configurable:!0,get:function(){return this}})}});var Bb=o(function(){"use strict";var XY=$t();XY("Array")});var kb=o(function(){"use strict";var QY=h(),ZY=G(),r9=qe(),e9=rr(),t9=H(),jb=_e(),a9=oe(),i9=la(),n9=ar(),el=$i(),u9=Ea(),o9=u9("splice"),s9=Math.max,v9=Math.min;QY({target:"Array",proto:!0,forced:!o9},{splice:function(e,t){var a=ZY(this),i=t9(a),n=r9(e,i),u=arguments.length,s,v,f,c,l,q;for(u===0?s=v=0:u===1?(s=0,v=i-n):(s=u-2,v=v9(s9(e9(t),0),i-n)),a9(i+s-v),f=i9(a,v),c=0;c<v;c++)l=n+c,l in a&&n9(f,c,a[l]);if(jb(f,v),s<v){for(c=n;c<i-v;c++)l=c+v,q=c+s,l in a?a[q]=a[l]:el(a,q);for(c=i;c>i-v+s;c--)el(a,c-1)}else if(s>v)for(c=i-v;c>n;c--)l=c+v-1,q=c+s-1,l in a?a[q]=a[l]:el(a,q);for(c=0;c<s;c++)a[c+n]=arguments[c+2];return jb(a,i-v+s),f}})});var Gb=o(function(){"use strict";var c9=h(),f9=H(),l9=ur(),h9=ar(),q9=Ir(),p9=Array;c9({target:"Array",proto:!0},{toReversed:function(){for(var e=l9(this),t=f9(e),a=new p9(t),i=0;i<t;i++)h9(a,i,e[t-i-1]);return a}});q9("toReversed")});var Sa=o(function(XMr,Hb){"use strict";var d9=H();Hb.exports=function(r,e,t){for(var a=0,i=arguments.length>2?t:d9(e),n=new r(i);i>a;)n[a]=e[a++];return n}});var To=o(function(QMr,Wb){"use strict";var g9=T();Wb.exports=function(r,e){var t=g9[r],a=t&&t.prototype;return a&&a[e]}});var Vb=o(function(){"use strict";var y9=h(),E9=S(),S9=L(),I9=ur(),O9=Sa(),m9=To(),T9=Ir(),b9=Array,R9=E9(m9("Array","sort"));y9({target:"Array",proto:!0},{toSorted:function(e){e!==void 0&&S9(e);var t=I9(this),a=O9(b9,t);return R9(a,e)}});T9("toSorted")});var Kb=o(function(){"use strict";var A9=h(),w9=Ir(),x9=oe(),P9=H(),C9=qe(),_9=ur(),N9=rr(),tl=ar(),F9=Array,D9=Math.max,M9=Math.min;A9({target:"Array",proto:!0},{toSpliced:function(e,t){var a=_9(this),i=P9(a),n=C9(e,i),u=arguments.length,s=0,v,f,c,l;for(u===0?v=f=0:u===1?(v=0,f=i-n):(v=u-2,f=M9(D9(N9(t),0),i-n)),c=x9(i+v-f),l=F9(c);s<n;s++)tl(l,s,a[s]);for(;s<n+v;s++)tl(l,s,arguments[s-n+2]);for(;s<c;s++)tl(l,s,a[s+f-v]);return l}});w9("toSpliced")});var zb=o(function(){"use strict";var L9=Ir();L9("flat")});var Yb=o(function(){"use strict";var $9=Ir();$9("flatMap")});var Jb=o(function(){"use strict";var U9=h(),B9=G(),j9=H(),k9=_e(),G9=$i(),H9=oe(),W9=[].unshift(0)!==1,V9=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}},K9=W9||!V9();U9({target:"Array",proto:!0,arity:1,forced:K9},{unshift:function(e){var t=B9(this),a=j9(t),i=arguments.length;if(i){H9(a+i);for(var n=a;n--;){var u=n+i;n in t?t[u]=t[n]:G9(t,u)}for(var s=0;s<i;s++)t[s]=arguments[s]}return k9(t,a+i)}})});var Xb=o(function(){"use strict";var z9=h(),Y9=H(),J9=rr(),X9=ur(),Q9=ar(),Z9=Array,rJ=RangeError,eJ=function(){try{[].with({valueOf:function(){throw 4}},null)}catch(r){return r!==4}}();z9({target:"Array",proto:!0,forced:eJ},{with:function(r,e){var t=X9(this),a=Y9(t),i=J9(r),n=i<0?a+i:i;if(n>=a||n<0)throw new rJ("Incorrect index");for(var u=new Z9(a),s=0;s<a;s++)Q9(u,s,s===n?e:t[s]);return u}})});var Ki=o(function(f2r,Qb){"use strict";Qb.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"});var ye=o(function(l2r,Zb){"use strict";var tJ=W();Zb.exports=function(r,e,t){for(var a in e)tJ(r,a,e[a],t);return r}});var Cr=o(function(h2r,rR){"use strict";var aJ=gr(),iJ=TypeError;rR.exports=function(r,e){if(aJ(e,r))return r;throw new iJ("Incorrect invocation")}});var zi=o(function(q2r,eR){"use strict";var nJ=rr(),uJ=Vr(),oJ=RangeError;eR.exports=function(r){if(r===void 0)return 0;var e=nJ(r),t=uJ(e);if(e!==t)throw new oJ("Wrong length or index");return t}});var bo=o(function(p2r,tR){"use strict";tR.exports=Math.sign||function(e){var t=+e;return t===0||t!==t?t:t<0?-1:1}});var al=o(function(d2r,iR){"use strict";var sJ=2220446049250313e-31,aR=1/sJ;iR.exports=function(r){return r+aR-aR}});var il=o(function(g2r,nR){"use strict";var vJ=bo(),cJ=al(),fJ=Math.abs,lJ=2220446049250313e-31;nR.exports=function(r,e,t,a){var i=+r,n=fJ(i),u=vJ(i);if(n<a)return u*cJ(n/a/e)*a*e;var s=(1+e/lJ)*n,v=s-(s-n);return v>t||v!==v?u*(1/0):u*v}});var nl=o(function(y2r,uR){"use strict";var hJ=il(),qJ=11920928955078125e-23,pJ=34028234663852886e22,dJ=11754943508222875e-54;uR.exports=Math.fround||function(e){return hJ(e,qJ,pJ,dJ)}});var sR=o(function(E2r,oR){"use strict";var gJ=Array,yJ=Math.abs,De=Math.pow,EJ=Math.floor,SJ=Math.log,IJ=Math.LN2,OJ=function(r,e,t){var a=gJ(t),i=t*8-e-1,n=(1<<i)-1,u=n>>1,s=e===23?De(2,-24)-De(2,-77):0,v=r<0||r===0&&1/r<0?1:0,f=0,c,l,q;for(r=yJ(r),r!==r||r===1/0?(l=r!==r?1:0,c=n):(c=EJ(SJ(r)/IJ),q=De(2,-c),r*q<1&&(c--,q*=2),c+u>=1?r+=s/q:r+=s*De(2,1-u),r*q>=2&&(c++,q/=2),c+u>=n?(l=0,c=n):c+u>=1?(l=(r*q-1)*De(2,e),c+=u):(l=r*De(2,u-1)*De(2,e),c=0));e>=8;)a[f++]=l&255,l/=256,e-=8;for(c=c<<e|l,i+=e;i>0;)a[f++]=c&255,c/=256,i-=8;return a[f-1]|=v*128,a},mJ=function(r,e){var t=r.length,a=t*8-e-1,i=(1<<a)-1,n=i>>1,u=a-7,s=t-1,v=r[s--],f=v&127,c;for(v>>=7;u>0;)f=f*256+r[s--],u-=8;for(c=f&(1<<-u)-1,f>>=-u,u+=e;u>0;)c=c*256+r[s--],u-=8;if(f===0)f=1-n;else{if(f===i)return c?NaN:v?-1/0:1/0;c+=De(2,e),f-=n}return(v?-1:1)*c*De(2,f-e)};oR.exports={pack:OJ,unpack:mJ}});var Qi=o(function(S2r,bR){"use strict";var xo=T(),cl=S(),ul=P(),TJ=Ki(),SR=bt(),bJ=fr(),RJ=er(),vR=ye(),ol=E(),Ro=Cr(),AJ=rr(),Ji=zi(),wJ=nl(),IR=sR(),xJ=Er(),cR=$r(),PJ=ho(),CJ=Kr(),_J=rt(),NJ=wt(),OR=Sr(),fl=Y(),FJ=SR.PROPER,fR=SR.CONFIGURABLE,Oa="ArrayBuffer",Po="DataView",ma="prototype",DJ="Wrong length",mR="Wrong index",lR=fl.getterFor(Oa),Xi=fl.getterFor(Po),hR=fl.set,se=xo[Oa],Ur=se,Ia=Ur&&Ur[ma],Ee=xo[Po],Ut=Ee&&Ee[ma],qR=Object.prototype,MJ=xo.Array,wo=xo.RangeError,LJ=cl(PJ),$J=cl([].reverse),TR=IR.pack,pR=IR.unpack,dR=function(r){return[r&255]},gR=function(r){return[r&255,r>>8&255]},yR=function(r){return[r&255,r>>8&255,r>>16&255,r>>24&255]},ER=function(r){return r[3]<<24|r[2]<<16|r[1]<<8|r[0]},UJ=function(r){return TR(wJ(r),23,4)},BJ=function(r){return TR(r,52,8)},Ao=function(r,e,t){RJ(r[ma],e,{configurable:!0,get:function(){return t(this)[e]}})},tt=function(r,e,t,a){var i=Xi(r),n=Ji(t),u=!!a;if(n+e>i.byteLength)throw new wo(mR);var s=i.bytes,v=n+i.byteOffset,f=CJ(s,v,v+e);return u?f:$J(f)},at=function(r,e,t,a,i,n){var u=Xi(r),s=Ji(t),v=a(+i),f=!!n;if(s+e>u.byteLength)throw new wo(mR);for(var c=u.bytes,l=s+u.byteOffset,q=0;q<e;q++)c[l+q]=v[f?q:e-q-1]};TJ?(sl=FJ&&se.name!==Oa,!ol(function(){se(1)})||!ol(function(){new se(-1)})||ol(function(){return new se,new se(1.5),new se(NaN),se.length!==1||sl&&!fR})?(Ur=function(e){return Ro(this,Ia),_J(new se(Ji(e)),this,Ur)},Ur[ma]=Ia,Ia.constructor=Ur,NJ(Ur,se)):sl&&fR&&bJ(se,"name",Oa),cR&&xJ(Ut)!==qR&&cR(Ut,qR),Yi=new Ee(new Ur(2)),vl=cl(Ut.setInt8),Yi.setInt8(0,2147483648),Yi.setInt8(1,2147483649),(Yi.getInt8(0)||!Yi.getInt8(1))&&vR(Ut,{setInt8:function(e,t){vl(this,e,t<<24>>24)},setUint8:function(e,t){vl(this,e,t<<24>>24)}},{unsafe:!0})):(Ur=function(e){Ro(this,Ia);var t=Ji(e);hR(this,{type:Oa,bytes:LJ(MJ(t),0),byteLength:t}),ul||(this.byteLength=t,this.detached=!1)},Ia=Ur[ma],Ee=function(e,t,a){Ro(this,Ut),Ro(e,Ia);var i=lR(e),n=i.byteLength,u=AJ(t);if(u<0||u>n)throw new wo("Wrong offset");if(a=a===void 0?n-u:Ji(a),u+a>n)throw new wo(DJ);hR(this,{type:Po,buffer:e,byteLength:a,byteOffset:u,bytes:i.bytes}),ul||(this.buffer=e,this.byteLength=a,this.byteOffset=u)},Ut=Ee[ma],ul&&(Ao(Ur,"byteLength",lR),Ao(Ee,"buffer",Xi),Ao(Ee,"byteLength",Xi),Ao(Ee,"byteOffset",Xi)),vR(Ut,{getInt8:function(e){return tt(this,1,e)[0]<<24>>24},getUint8:function(e){return tt(this,1,e)[0]},getInt16:function(e){var t=tt(this,2,e,arguments.length>1?arguments[1]:!1);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=tt(this,2,e,arguments.length>1?arguments[1]:!1);return t[1]<<8|t[0]},getInt32:function(e){return ER(tt(this,4,e,arguments.length>1?arguments[1]:!1))},getUint32:function(e){return ER(tt(this,4,e,arguments.length>1?arguments[1]:!1))>>>0},getFloat32:function(e){return pR(tt(this,4,e,arguments.length>1?arguments[1]:!1),23)},getFloat64:function(e){return pR(tt(this,8,e,arguments.length>1?arguments[1]:!1),52)},setInt8:function(e,t){at(this,1,e,dR,t)},setUint8:function(e,t){at(this,1,e,dR,t)},setInt16:function(e,t){at(this,2,e,gR,t,arguments.length>2?arguments[2]:!1)},setUint16:function(e,t){at(this,2,e,gR,t,arguments.length>2?arguments[2]:!1)},setInt32:function(e,t){at(this,4,e,yR,t,arguments.length>2?arguments[2]:!1)},setUint32:function(e,t){at(this,4,e,yR,t,arguments.length>2?arguments[2]:!1)},setFloat32:function(e,t){at(this,4,e,UJ,t,arguments.length>2?arguments[2]:!1)},setFloat64:function(e,t){at(this,8,e,BJ,t,arguments.length>2?arguments[2]:!1)}}));var sl,Yi,vl;OR(Ur,Oa);OR(Ee,Po);bR.exports={ArrayBuffer:Ur,DataView:Ee}});var AR=o(function(){"use strict";var jJ=h(),kJ=T(),GJ=Qi(),HJ=$t(),ll="ArrayBuffer",RR=GJ[ll],WJ=kJ[ll];jJ({global:!0,constructor:!0,forced:WJ!==RR},{ArrayBuffer:RR});HJ(ll)});var k=o(function(m2r,LR){"use strict";var VJ=Ki(),dl=P(),Or=T(),CR=j(),No=_(),nt=$(),gl=Mr(),KJ=Ke(),zJ=fr(),hl=W(),YJ=er(),JJ=gr(),Fo=Er(),ba=$r(),XJ=N(),QJ=ze(),_R=Y(),NR=_R.enforce,ZJ=_R.get,Co=Or.Int8Array,ql=Co&&Co.prototype,wR=Or.Uint8ClampedArray,xR=wR&&wR.prototype,Se=Co&&Fo(Co),ve=ql&&Fo(ql),rX=Object.prototype,yl=Or.TypeError,PR=XJ("toStringTag"),pl=QJ("TYPED_ARRAY_TAG"),_o="TypedArrayConstructor",Me=VJ&&!!ba&&gl(Or.opera)!=="Opera",FR=!1,_r,it,Ta,Le={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},El={BigInt64Array:8,BigUint64Array:8},eX=function(e){if(!No(e))return!1;var t=gl(e);return t==="DataView"||nt(Le,t)||nt(El,t)},DR=function(r){var e=Fo(r);if(No(e)){var t=ZJ(e);return t&&nt(t,_o)?t[_o]:DR(e)}},MR=function(r){if(!No(r))return!1;var e=gl(r);return nt(Le,e)||nt(El,e)},tX=function(r){if(MR(r))return r;throw new yl("Target is not a typed array")},aX=function(r){if(CR(r)&&(!ba||JJ(Se,r)))return r;throw new yl(KJ(r)+" is not a typed array constructor")},iX=function(r,e,t,a){if(dl){if(t)for(var i in Le){var n=Or[i];if(n&&nt(n.prototype,r))try{delete n.prototype[r]}catch(u){try{n.prototype[r]=e}catch(s){}}}(!ve[r]||t)&&hl(ve,r,t?e:Me&&ql[r]||e,a)}},nX=function(r,e,t){var a,i;if(dl){if(ba){if(t){for(a in Le)if(i=Or[a],i&&nt(i,r))try{delete i[r]}catch(n){}}if(!Se[r]||t)try{return hl(Se,r,t?e:Me&&Se[r]||e)}catch(n){}else return}for(a in Le)i=Or[a],i&&(!i[r]||t)&&hl(i,r,e)}};for(_r in Le)it=Or[_r],Ta=it&&it.prototype,Ta?NR(Ta)[_o]=it:Me=!1;for(_r in El)it=Or[_r],Ta=it&&it.prototype,Ta&&(NR(Ta)[_o]=it);if((!Me||!CR(Se)||Se===Function.prototype)&&(Se=function(){throw new yl("Incorrect invocation")},Me))for(_r in Le)Or[_r]&&ba(Or[_r],Se);if((!Me||!ve||ve===rX)&&(ve=Se.prototype,Me))for(_r in Le)Or[_r]&&ba(Or[_r].prototype,ve);Me&&Fo(xR)!==ve&&ba(xR,ve);if(dl&&!nt(ve,PR)){FR=!0,YJ(ve,PR,{configurable:!0,get:function(){return No(this)?this[pl]:void 0}});for(_r in Le)Or[_r]&&zJ(Or[_r].prototype,pl,_r)}LR.exports={NATIVE_ARRAY_BUFFER_VIEWS:Me,TYPED_ARRAY_TAG:FR&&pl,aTypedArray:tX,aTypedArrayConstructor:aX,exportTypedArrayMethod:iX,exportTypedArrayStaticMethod:nX,getTypedArrayConstructor:DR,isView:eX,isTypedArray:MR,TypedArray:Se,TypedArrayPrototype:ve}});var UR=o(function(){"use strict";var uX=h(),$R=k(),oX=$R.NATIVE_ARRAY_BUFFER_VIEWS;uX({target:"ArrayBuffer",stat:!0,forced:!oX},{isView:$R.isView})});var WR=o(function(){"use strict";var sX=h(),Il=Je(),vX=E(),GR=Qi(),BR=w(),jR=qe(),cX=Vr(),Ol=GR.ArrayBuffer,Sl=GR.DataView,HR=Sl.prototype,kR=Il(Ol.prototype.slice),fX=Il(HR.getUint8),lX=Il(HR.setUint8),hX=vX(function(){return!new Ol(2).slice(1,void 0).byteLength});sX({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:hX},{slice:function(e,t){if(kR&&t===void 0)return kR(BR(this),e);for(var a=BR(this).byteLength,i=jR(e,a),n=jR(t===void 0?a:t,a),u=new Ol(cX(n-i)),s=new Sl(this),v=new Sl(u),f=0;i<n;)lX(v,f++,fX(s,i++));return u}})});var VR=o(function(){"use strict";var qX=h(),pX=Qi(),dX=Ki();qX({global:!0,constructor:!0,forced:!dX},{DataView:pX.DataView})});var KR=o(function(){"use strict";VR()});var QR=o(function(){"use strict";var gX=h(),yX=S(),XR=Math.pow,zR=31,EX=1023,YR=XR(2,-24),JR=.0009765625,SX=function(r){var e=r>>>15,t=r>>>10&zR,a=r&EX;return t===zR?a===0?e===0?1/0:-1/0:NaN:t===0?a*(e===0?YR:-YR):XR(2,t-15)*(e===0?1+a*JR:-1-a*JR)},IX=yX(DataView.prototype.getUint16);gX({target:"DataView",proto:!0},{getFloat16:function(e){return SX(IX(this,e,arguments.length>1?arguments[1]:!1))}})});var rA=o(function(F2r,ZR){"use strict";var OX=Mr(),mX=TypeError;ZR.exports=function(r){if(OX(r)==="DataView")return r;throw new mX("Argument is not a DataView")}});var ml=o(function(D2r,eA){"use strict";var TX=Math.log,bX=Math.LN2;eA.exports=Math.log2||function(e){return TX(e)/bX}});var aA=o(function(){"use strict";var RX=h(),AX=S(),wX=rA(),xX=zi(),PX=ml(),tA=al(),CX=Math.floor,_X=Math.pow,NX=65520,FX=61005353927612305e-21,DX=16777216,Tl=1024,MX=function(r){if(r!==r)return 32256;if(r===0)return(1/r===-1/0)<<15;var e=r<0;if(e&&(r=-r),r>=NX)return e<<15|31744;if(r<FX)return e<<15|tA(r*DX);var t=CX(PX(r));if(t===-15)return e<<15|Tl;var a=tA((r*_X(2,-t)-1)*Tl);return a===Tl?e<<15|t+16<<10:e<<15|t+15<<10|a},LX=AX(DataView.prototype.setUint16);RX({target:"DataView",proto:!0},{setFloat16:function(e,t){LX(wX(this),xX(e),MX(+t),arguments.length>2?arguments[2]:!1)}})});var bl=o(function($2r,uA){"use strict";var nA=T(),$X=Di(),UX=sr(),iA=nA.ArrayBuffer,BX=nA.TypeError;uA.exports=iA&&$X(iA.prototype,"byteLength","get")||function(r){if(UX(r)!=="ArrayBuffer")throw new BX("ArrayBuffer expected");return r.byteLength}});var Rl=o(function(U2r,oA){"use strict";var jX=T(),kX=Ki(),GX=bl(),HX=jX.DataView;oA.exports=function(r){if(!kX||GX(r)!==0)return!1;try{return new HX(r),!1}catch(e){return!0}}});var vA=o(function(){"use strict";var WX=P(),VX=er(),KX=Rl(),sA=ArrayBuffer.prototype;WX&&!("detached"in sA)&&VX(sA,"detached",{configurable:!0,get:function(){return KX(this)}})});var Ra=o(function(k2r,cA){"use strict";var zX=Rl(),YX=TypeError;cA.exports=function(r){if(zX(r))throw new YX("ArrayBuffer is detached");return r}});var Al=o(function(G2r,fA){"use strict";var JX=T(),XX=Lt();fA.exports=function(r){if(XX){try{return JX.process.getBuiltinModule(r)}catch(e){}try{return Function('return require("'+r+'")')()}catch(e){}}}});var Do=o(function(H2r,hA){"use strict";var QX=T(),ZX=E(),wl=ie(),xl=Vi(),lA=QX.structuredClone;hA.exports=!!lA&&!ZX(function(){if(xl==="DENO"&&wl>92||xl==="NODE"&&wl>94||xl==="BROWSER"&&wl>97)return!1;var r=new ArrayBuffer(8),e=lA(r,{transfer:[r]});return r.byteLength!==0||e.byteLength!==8})});var Fl=o(function(W2r,dA){"use strict";var Nl=T(),rQ=Al(),eQ=Do(),tQ=Nl.structuredClone,qA=Nl.ArrayBuffer,Mo=Nl.MessageChannel,_l=!1,Pl,pA,Lo,Cl;if(eQ)_l=function(r){tQ(r,{transfer:[r]})};else if(qA)try{Mo||(Pl=rQ("worker_threads"),Pl&&(Mo=Pl.MessageChannel)),Mo&&(pA=new Mo,Lo=new qA(2),Cl=function(r){pA.port1.postMessage(null,[r])},Lo.byteLength===2&&(Cl(Lo),Lo.byteLength===0&&(_l=Cl)))}catch(r){}dA.exports=_l});var Bl=o(function(V2r,mA){"use strict";var Ll=T(),$l=S(),SA=Di(),aQ=zi(),iQ=Ra(),nQ=bl(),gA=Fl(),Dl=Do(),uQ=Ll.structuredClone,IA=Ll.ArrayBuffer,Ml=Ll.DataView,oQ=Math.max,sQ=Math.min,Ul=IA.prototype,OA=Ml.prototype,vQ=$l(Ul.slice),yA=SA(Ul,"resizable","get"),EA=SA(Ul,"maxByteLength","get"),cQ=$l(OA.getInt8),fQ=$l(OA.setInt8);mA.exports=(Dl||gA)&&function(r,e,t){var a=nQ(r),i=e===void 0?a:aQ(e),n=!yA||!yA(r),u;if(iQ(r),Dl&&(r=uQ(r,{transfer:[r]}),a===i&&(t||n)))return r;if(a>=i&&(!t||n))u=vQ(r,0,i);else{var s=t&&!n&&EA?{maxByteLength:oQ(i,EA(r))}:void 0;u=new IA(i,s);for(var v=new Ml(r),f=new Ml(u),c=sQ(i,a),l=0;l<c;l++)fQ(f,l,cQ(v,l))}return Dl||gA(r),u}});var bA=o(function(){"use strict";var lQ=h(),TA=Bl();TA&&lQ({target:"ArrayBuffer",proto:!0},{transfer:function(){return TA(this,arguments.length?arguments[0]:void 0,!0)}})});var AA=o(function(){"use strict";var hQ=h(),RA=Bl();RA&&hQ({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return RA(this,arguments.length?arguments[0]:void 0,!1)}})});var wA=o(function(){"use strict";var qQ=h(),pQ=S(),dQ=E(),gQ=dQ(function(){return new Date(16e11).getYear()!==120}),yQ=pQ(Date.prototype.getFullYear);qQ({target:"Date",proto:!0,forced:gQ},{getYear:function(){return yQ(this)-1900}})});var PA=o(function(){"use strict";var EQ=h(),SQ=S(),xA=Date,IQ=SQ(xA.prototype.getTime);EQ({target:"Date",stat:!0},{now:function(){return IQ(new xA)}})});var FA=o(function(){"use strict";var OQ=h(),_A=S(),mQ=rr(),NA=Date.prototype,TQ=_A(NA.getTime),CA=_A(NA.setFullYear);OQ({target:"Date",proto:!0},{setYear:function(e){TQ(this);var t=+e;if(t!==t)return CA(this,t);var a=mQ(t),i=a>=0&&a<=99?a+1900:a;return CA(this,i)}})});var DA=o(function(){"use strict";var bQ=h();bQ({target:"Date",proto:!0},{toGMTString:Date.prototype.toUTCString})});var Zi=o(function(nLr,MA){"use strict";var RQ=rr(),AQ=F(),wQ=J(),xQ=RangeError,PQ=Math.floor;MA.exports=function(e){var t=AQ(wQ(this)),a="",i=RQ(e);if(i<0||i===1/0)throw new xQ("Wrong number of repetitions");for(;i>0;(i=PQ(i/2))&&(t+=t))i%2&&(a+=t);return a}});var rn=o(function(uLr,BA){"use strict";var UA=S(),CQ=Vr(),LA=F(),_Q=Zi(),NQ=J(),FQ=UA(_Q),DQ=UA("".slice),MQ=Math.ceil,$A=function(r){return function(e,t,a){var i=LA(NQ(e)),n=CQ(t),u=i.length;if(n<=u)return i;var s=a===void 0?" ":LA(a),v,f;return s===""?i:(v=n-u,f=FQ(s,MQ(v/s.length)),f.length>v&&(f=DQ(f,0,v)),r?i+f:f+i)}};BA.exports={start:$A(!1),end:$A(!0)}});var GA=o(function(oLr,kA){"use strict";var ut=S(),jA=E(),Bt=rn().start,LQ=RangeError,$Q=isFinite,UQ=Math.abs,$e=Date.prototype,jl=$e.toISOString,BQ=ut($e.getTime),jQ=ut($e.getUTCDate),kQ=ut($e.getUTCFullYear),GQ=ut($e.getUTCHours),HQ=ut($e.getUTCMilliseconds),WQ=ut($e.getUTCMinutes),VQ=ut($e.getUTCMonth),KQ=ut($e.getUTCSeconds);kA.exports=jA(function(){return jl.call(new Date(-5e13-1))!=="0385-07-25T07:06:39.999Z"})||!jA(function(){jl.call(new Date(NaN))})?function(){if(!$Q(BQ(this)))throw new LQ("Invalid time value");var e=this,t=kQ(e),a=HQ(e),i=t<0?"-":t>9999?"+":"";return i+Bt(UQ(t),i?6:4,0)+"-"+Bt(VQ(e)+1,2,0)+"-"+Bt(jQ(e),2,0)+"T"+Bt(GQ(e),2,0)+":"+Bt(WQ(e),2,0)+":"+Bt(KQ(e),2,0)+"."+Bt(a,3,0)+"Z"}:jl});var WA=o(function(){"use strict";var zQ=h(),HA=GA();zQ({target:"Date",proto:!0,forced:Date.prototype.toISOString!==HA},{toISOString:HA})});var VA=o(function(){"use strict";var YQ=h(),JQ=E(),XQ=G(),QQ=Ei(),ZQ=JQ(function(){return new Date(NaN).toJSON()!==null||Date.prototype.toJSON.call({toISOString:function(){return 1}})!==1});YQ({target:"Date",proto:!0,forced:ZQ},{toJSON:function(e){var t=XQ(this),a=QQ(t,"number");return typeof a=="number"&&!isFinite(a)?null:t.toISOString()}})});var zA=o(function(lLr,KA){"use strict";var rZ=w(),eZ=cc(),tZ=TypeError;KA.exports=function(r){if(rZ(this),r==="string"||r==="default")r="string";else if(r!=="number")throw new tZ("Incorrect hint");return eZ(this,r)}});var XA=o(function(){"use strict";var aZ=$(),iZ=W(),nZ=zA(),uZ=N(),YA=uZ("toPrimitive"),JA=Date.prototype;aZ(JA,YA)||iZ(JA,YA,nZ)});var e0=o(function(){"use strict";var ZA=S(),oZ=W(),kl=Date.prototype,QA="Invalid Date",r0="toString",sZ=ZA(kl[r0]),vZ=ZA(kl.getTime);String(new Date(NaN))!==QA&&oZ(kl,r0,function(){var e=vZ(this);return e===e?sZ(this):QA})});var Hl=o(function(gLr,u0){"use strict";var cZ=M(),fZ=R(),lZ=S(),hZ=Pr(),qZ=w(),pZ=L(),i0=ee(),Gl=vr(),n0=N(),dZ=n0("asyncDispose"),t0=n0("dispose"),gZ=lZ([].push),yZ=function(r,e){if(e==="async-dispose"){var t=Gl(r,dZ);return t!==void 0||(t=Gl(r,t0),t===void 0)?t:function(){var a=this,i=cZ("Promise");return new i(function(n){fZ(t,a),n(void 0)})}}return Gl(r,t0)},a0=function(r,e,t){return arguments.length<3&&!i0(r)&&(t=pZ(yZ(qZ(r),e))),t===void 0?function(){}:hZ(t,r)};u0.exports=function(r,e,t,a){var i;if(arguments.length<4){if(i0(e)&&t==="sync-dispose")return;i=a0(e,t)}else i=a0(void 0,t,a);gZ(r.stack,i)}});var f0=o(function(){"use strict";var EZ=h(),Uo=P(),SZ=M(),o0=L(),IZ=Cr(),s0=W(),OZ=ye(),mZ=er(),v0=N(),c0=Y(),Wl=Hl(),TZ=SZ("SuppressedError"),bZ=ReferenceError,RZ=v0("dispose"),AZ=v0("toStringTag"),jo="DisposableStack",wZ=c0.set,Bo=c0.getterFor(jo),Vl="sync-dispose",en="disposed",xZ="pending",$o=function(r){var e=Bo(r);if(e.state===en)throw new bZ(jo+" already disposed");return e},Kl=function(){wZ(IZ(this,Aa),{type:jo,state:xZ,stack:[]}),Uo||(this.disposed=!1)},Aa=Kl.prototype;OZ(Aa,{dispose:function(){var e=Bo(this);if(e.state!==en){e.state=en,Uo||(this.disposed=!0);for(var t=e.stack,a=t.length,i=!1,n;a;){var u=t[--a];t[a]=null;try{u()}catch(s){i?n=new TZ(s,n):(i=!0,n=s)}}if(e.stack=null,i)throw n}},use:function(e){return Wl($o(this),e,Vl),e},adopt:function(e,t){var a=$o(this);return o0(t),Wl(a,void 0,Vl,function(){t(e)}),e},defer:function(e){var t=$o(this);o0(e),Wl(t,void 0,Vl,e)},move:function(){var e=$o(this),t=new Kl;return Bo(t).stack=e.stack,e.stack=[],e.state=en,Uo||(this.disposed=!0),t}});Uo&&mZ(Aa,"disposed",{configurable:!0,get:function(){return Bo(this).state===en}});s0(Aa,RZ,Aa.dispose,{name:"dispose"});s0(Aa,AZ,jo,{nonWritable:!0});EZ({global:!0,constructor:!0},{DisposableStack:Kl})});var q0=o(function(){"use strict";var PZ=h(),wa=S(),CZ=F(),_Z=wa("".charAt),NZ=wa("".charCodeAt),FZ=wa(/./.exec),DZ=wa(1.1.toString),l0=wa("".toUpperCase),MZ=wa([].join),LZ=Array,$Z=/[\w*+\-./@]/,h0=function(r,e){for(var t=DZ(r,16);t.length<e;)t="0"+t;return t};PZ({global:!0},{escape:function(e){var t=CZ(e),a=t.length,i=LZ(a),n,u,s;for(n=0;n<a;n++)u=_Z(t,n),FZ($Z,u)?i[n]=u:(s=NZ(u,0),s<256?i[n]="%"+l0(h0(s,2)):i[n]="%u"+l0(h0(s,4)));return MZ(i,"")}})});var Yl=o(function(OLr,y0){"use strict";var d0=S(),UZ=L(),BZ=_(),jZ=$(),p0=Kr(),kZ=ua(),g0=Function,GZ=d0([].concat),HZ=d0([].join),zl={},WZ=function(r,e,t){if(!jZ(zl,e)){for(var a=[],i=0;i<e;i++)a[i]="a["+i+"]";zl[e]=g0("C,a","return new C("+HZ(a,",")+")")}return zl[e](r,t)};y0.exports=kZ?g0.bind:function(e){var t=UZ(this),a=t.prototype,i=p0(arguments,1),n=function(){var s=GZ(i,p0(arguments));return this instanceof n?WZ(t,s.length,s):t.apply(e,s)};return BZ(a)&&(n.prototype=a),n}});var S0=o(function(){"use strict";var VZ=h(),E0=Yl();VZ({target:"Function",proto:!0,forced:Function.bind!==E0},{bind:E0})});var m0=o(function(){"use strict";var KZ=j(),I0=_(),zZ=z(),YZ=gr(),JZ=N(),XZ=Cu(),Jl=JZ("hasInstance"),O0=Function.prototype;Jl in O0||zZ.f(O0,Jl,{value:XZ(function(r){if(!KZ(this)||!I0(r))return!1;var e=this.prototype;return I0(e)?YZ(e,r):r instanceof this},Jl)})});var A0=o(function(){"use strict";var QZ=P(),ZZ=bt().EXISTS,T0=S(),rrr=er(),b0=Function.prototype,err=T0(b0.toString),R0=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,trr=T0(R0.exec),arr="name";QZ&&!ZZ&&rrr(b0,arr,{configurable:!0,get:function(){try{return trr(R0,err(this))[1]}catch(r){return""}}})});var w0=o(function(){"use strict";var irr=h(),Xl=T();irr({global:!0,forced:Xl.globalThis!==Xl},{globalThis:Xl})});var F0=o(function(){"use strict";var nrr=h(),urr=T(),orr=Cr(),srr=w(),vrr=j(),crr=Er(),frr=er(),lrr=ar(),hrr=E(),rh=$(),qrr=N(),Ie=Mt().IteratorPrototype,prr=P(),drr=D(),Ql="constructor",P0="Iterator",x0=qrr("toStringTag"),C0=TypeError,Zl=urr[P0],_0=drr||!vrr(Zl)||Zl.prototype!==Ie||!hrr(function(){Zl({})}),eh=function(){if(orr(this,Ie),crr(this)===Ie)throw new C0("Abstract class Iterator not directly constructable")},N0=function(r,e){prr?frr(Ie,r,{configurable:!0,get:function(){return e},set:function(t){if(srr(this),this===Ie)throw new C0("You can't redefine this property");rh(this,r)?this[r]=t:lrr(this,r,t)}}):Ie[r]=e};rh(Ie,x0)||N0(x0,P0);(_0||!rh(Ie,Ql)||Ie[Ql]===Object)&&N0(Ql,eh);eh.prototype=Ie;nrr({global:!0,constructor:!0,forced:_0},{Iterator:eh})});var tn=o(function(NLr,D0){"use strict";var grr=Q();D0.exports=function(r,e,t){for(var a=r.length-1;a>=0;a--)if(r[a]!==void 0)try{t=grr(r[a].iterator,e,t)}catch(i){e="throw",t=i}if(e==="throw")throw t;return t}});var L0=o(function(FLr,M0){"use strict";M0.exports=function(r){r.iterator=r.next=r.nextHandler=r.mapper=r.predicate=r.inner=r.iterables=r.iters=r.openIters=r.padding=r.finishResults=r.buffer=null}});var ce=o(function(DLr,H0){"use strict";var yrr=R(),Err=or(),Srr=fr(),Irr=ye(),Orr=N(),U0=Y(),mrr=vr(),Trr=Mt().IteratorPrototype,an=Fe(),ko=Q(),brr=tn(),th=L0(),Rrr=Orr("toStringTag"),B0="IteratorHelper",j0="WrapForValidIterator",ah="normal",$0="throw",Arr=U0.set,k0=function(r){var e=U0.getterFor(r?j0:B0);return Irr(Err(Trr),{next:function(){var a=e(this);if(r)return a.nextHandler();if(a.done)return an(void 0,!0);try{var i=a.nextHandler();return a.done&&th(a),a.returnHandlerResult?i:an(i,a.done)}catch(n){throw a.done=!0,th(a),n}},return:function(){var t=e(this),a=t.iterator,i=t.inner,n=t.openIters,u=t.done;if(t.done=!0,r){var s=mrr(a,"return");return s?yrr(s,a):an(void 0,!0)}if(th(t),u)return an(void 0,!0);if(i)try{ko(i.iterator,ah)}catch(v){return ko(a,$0,v)}if(n)try{brr(n,ah)}catch(v){if(a)return ko(a,$0,v);throw v}return a&&ko(a,ah),an(void 0,!0)}})},wrr=k0(!0),G0=k0(!1);Srr(G0,Rrr,"Iterator Helper");H0.exports=function(r,e,t){var a=function(n,u){u?(u.iterator=n.iterator,u.next=n.next):u=n,u.type=e?j0:B0,u.returnHandlerResult=!!t,u.nextHandler=r,u.counter=0,u.done=!1,Arr(this,u)};return a.prototype=e?wrr:G0,a}});var nr=o(function(MLr,W0){"use strict";W0.exports=function(r){return{iterator:r,next:r.next,done:!1}}});var xa=o(function(LLr,V0){"use strict";var xrr=_(),Prr=Math.floor;V0.exports=Number.isInteger||function(e){return!xrr(e)&&isFinite(e)&&Prr(e)===e}});var ih=o(function($Lr,Y0){"use strict";var Crr=xa(),K0=Q(),_rr=RangeError,Nrr=TypeError,z0="Chunk size must be an integer in [1, 2^32-1]";Y0.exports=function(r,e){if(typeof r!="number"||!Crr(r))return K0(e,"throw",new Nrr(z0));if(r===0||r>>>0!==r)return K0(e,"throw",new _rr(z0))}});var X0=o(function(){"use strict";var Frr=h(),J0=w(),Drr=R(),Mrr=ce(),Lrr=nr(),$rr=ih(),Urr=S(),Brr=D(),jrr=Urr([].push),krr=Mrr(function(){for(var r=this.iterator,e=this.next,t=this.chunkSize,a=[],i,n;;){if(i=J0(Drr(e,r)),n=!!i.done,n){if(a.length)return a;this.done=!0;return}if(jrr(a,i.value),a.length===t)return a}});Frr({target:"Iterator",proto:!0,real:!0,forced:Brr},{chunks:function(e){return J0(this),$rr(e,this),new krr(Lrr(this),{chunkSize:e})}})});var Z0=o(function(){"use strict";var Grr=h(),Q0=R(),Hrr=L(),nh=w(),Wrr=Pe(),Vrr=ce(),Krr=D(),zrr=Array,Yrr=Vrr(function(){for(;;){var r=this.iterator;if(!r){var e=this.nextIterableIndex++,t=this.iterables;if(e>=t.length){this.done=!0;return}var a=t[e];this.iterables[e]=null,r=this.iterator=nh(Q0(a.method,a.iterable)),this.next=r.next}var i=nh(Q0(this.next,r));if(i.done){this.iterator=null,this.next=null;continue}return i.value}});Grr({target:"Iterator",stat:!0,forced:Krr},{concat:function(){for(var e=arguments.length,t=zrr(e),a=0;a<e;a++){var i=nh(arguments[a]);t[a]={iterable:i,method:Hrr(Wrr(i))}}return new Yrr({iterables:t,nextIterableIndex:0,iterator:null,next:null})}})});var tw=o(function(){"use strict";var Jrr=R(),Xrr=W(),Qrr=vr(),Zrr=$(),rer=N(),rw=Mt().IteratorPrototype,ew=rer("dispose");Zrr(rw,ew)||Xrr(rw,ew,function(){var r=Qrr(this,"return");r&&Jrr(r,this)})});var uh=o(function(WLr,aw){"use strict";var eer=RangeError;aw.exports=function(r){if(r===r)return r;throw new eer("NaN is not allowed")}});var Go=o(function(VLr,iw){"use strict";var ter=rr(),aer=RangeError;iw.exports=function(r){var e=ter(r);if(e<0)throw new aer("The argument can't be less than 0");return e}});var Pa=o(function(KLr,nw){"use strict";nw.exports=function(r,e){var t=typeof Iterator=="function"&&Iterator.prototype[r];if(t)try{t.call({next:null},e).next()}catch(a){return!0}}});var fe=o(function(zLr,uw){"use strict";var ier=T();uw.exports=function(r,e){var t=ier.Iterator,a=t&&t.prototype,i=a&&a[r],n=!1;if(i)try{i.call({next:function(){return{done:!0}},return:function(){n=!0}},-1)}catch(u){u instanceof e||(n=!1)}if(!n)return i}});var vw=o(function(){"use strict";var ner=h(),oh=R(),sh=w(),uer=nr(),oer=uh(),ser=Go(),ver=Q(),cer=ce(),fer=Pa(),ler=fe(),ch=D(),ow=RangeError,her=1/0,sw=!ch&&!fer("drop",0),vh=!ch&&!sw&&ler("drop",RangeError),qer=ch||sw||vh||!function(){try{Iterator.prototype.drop.call({next:function(){return{done:!0}}},9007199254740992)}catch(r){return r instanceof ow}}(),per=cer(function(){for(var r=this.iterator,e=this.next,t,a;this.remaining;)if(this.remaining--,t=sh(oh(e,r)),a=this.done=!!t.done,a)return;if(t=sh(oh(e,r)),a=this.done=!!t.done,!a)return t.value});ner({target:"Iterator",proto:!0,real:!0,forced:qer},{drop:function(e){sh(this);var t;try{if(t=ser(oer(+e)),t>9007199254740991&&t!==her)throw new ow("The argument should be a safe integer")}catch(a){ver(this,"throw",a)}return vh?oh(vh,this,t):new per(uer(this),{remaining:t})}})});var cw=o(function(){"use strict";var der=h(),ger=R(),yer=tr(),Eer=L(),Ser=w(),Ier=nr(),Oer=Q(),mer=fe(),fh=mer("every",TypeError);der({target:"Iterator",proto:!0,real:!0,forced:fh},{every:function(e){Ser(this);try{Eer(e)}catch(i){Oer(this,"throw",i)}if(fh)return ger(fh,this,e);var t=Ier(this),a=0;return!yer(t,function(i,n){if(!e(i,a++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})});var qw=o(function(){"use strict";var Ter=h(),fw=R(),ber=L(),lw=w(),Rer=nr(),Aer=ce(),wer=qo(),hh=D(),xer=Q(),Per=Pa(),Cer=fe(),hw=!hh&&!Per("filter",function(){}),lh=!hh&&!hw&&Cer("filter",TypeError),_er=hh||hw||lh,Ner=Aer(function(){for(var r=this.iterator,e=this.predicate,t=this.next,a,i,n;;){if(a=lw(fw(t,r)),i=this.done=!!a.done,i)return;if(n=a.value,wer(r,e,[n,this.counter++],!0))return n}});Ter({target:"Iterator",proto:!0,real:!0,forced:_er},{filter:function(e){lw(this);try{ber(e)}catch(t){xer(this,"throw",t)}return lh?fw(lh,this,e):new Ner(Rer(this),{predicate:e})}})});var pw=o(function(){"use strict";var Fer=h(),Der=R(),Mer=tr(),Ler=L(),$er=w(),Uer=nr(),Ber=Q(),jer=fe(),qh=jer("find",TypeError);Fer({target:"Iterator",proto:!0,real:!0,forced:qh},{find:function(e){$er(this);try{Ler(e)}catch(i){Ber(this,"throw",i)}if(qh)return Der(qh,this,e);var t=Uer(this),a=0;return Mer(t,function(i,n){if(e(i,a++))return n(i)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})});var nn=o(function(a$r,gw){"use strict";var ker=R(),dw=w(),Ger=nr(),Her=Pe();gw.exports=function(r,e){(!e||typeof r!="string")&&dw(r);var t=Her(r);return Ger(dw(t!==void 0?ker(t,r):r))}});var Ew=o(function(){"use strict";var Wer=h(),ph=R(),Ver=L(),dh=w(),Ker=nr(),zer=nn(),Yer=ce(),gh=Q(),Jer=E(),Ho=D(),Xer=Pa(),Qer=fe(),Eh=!Ho&&Jer(function(){return[1].values().flatMap(function(){return[1]}).find(function(){return!0})!==1}),yw=!Ho&&!Eh&&!Xer("flatMap",function(){}),yh=!Ho&&!Eh&&!yw&&Qer("flatMap",TypeError),Zer=Ho||Eh||yw||yh,rtr=Yer(function(){for(var r=this.iterator,e=this.mapper,t,a;;){if(a=this.inner)try{if(t=dh(ph(a.next,a.iterator)),!t.done)return t.value;this.inner=null}catch(i){gh(r,"throw",i)}if(t=dh(ph(this.next,r)),this.done=!!t.done)return;try{this.inner=zer(e(t.value,this.counter++),!1)}catch(i){gh(r,"throw",i)}}});Wer({target:"Iterator",proto:!0,real:!0,forced:Zer},{flatMap:function(e){dh(this);try{Ver(e)}catch(t){gh(this,"throw",t)}return yh?ph(yh,this,e):new rtr(Ker(this),{mapper:e,inner:null})}})});var Sw=o(function(){"use strict";var etr=h(),ttr=R(),atr=tr(),itr=L(),ntr=w(),utr=nr(),otr=Q(),str=fe(),Sh=str("forEach",TypeError);etr({target:"Iterator",proto:!0,real:!0,forced:Sh},{forEach:function(e){ntr(this);try{itr(e)}catch(i){otr(this,"throw",i)}if(Sh)return ttr(Sh,this,e);var t=utr(this),a=0;atr(t,function(i){e(i,a++)},{IS_RECORD:!0})}})});var Iw=o(function(){"use strict";var vtr=h(),ctr=R(),ftr=G(),ltr=gr(),htr=Mt().IteratorPrototype,qtr=ce(),ptr=nn(),dtr=D(),gtr=dtr||function(){try{Iterator.from({return:null}).return()}catch(r){return!0}}(),ytr=qtr(function(){return ctr(this.next,this.iterator)},!0);vtr({target:"Iterator",stat:!0,forced:gtr},{from:function(e){var t=ptr(typeof e=="string"?ftr(e):e,!0);return ltr(htr,t.iterator)?t.iterator:new ytr(t)}})});var mw=o(function(c$r,Ow){"use strict";Ow.exports=function(r,e){return r===e||r!==r&&e!==e}});var bw=o(function(){"use strict";var Etr=h(),Str=w(),Itr=xa(),Otr=tr(),mtr=Q(),Ttr=mw(),btr=D(),Rtr=RangeError,Atr=TypeError,Ih=1/0,Tw="skippedElements should be a positive safe integer";Etr({target:"Iterator",proto:!0,real:!0,forced:btr},{includes:function(e){Str(this);var t=arguments.length>1?arguments[1]:void 0,a=0,i;try{if(t===void 0)i=0;else if(t===Ih||t===-Ih||Itr(t))i=t;else throw new Atr(Tw);if(i<0||i!==Ih&&i>9007199254740991)throw new Rtr(Tw)}catch(n){mtr(this,"throw",n)}return Otr(this,function(n,u){if(a<i)a++;else if(Ttr(n,e))return u()},{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})});var ww=o(function(){"use strict";var wtr=h(),Rw=F(),xtr=w(),Ptr=ee(),Ctr=tr(),_tr=Q(),Aw=S(),Ntr=D(),Ftr=Aw([].join),Dtr=Aw([].push);wtr({target:"Iterator",proto:!0,real:!0,forced:Ntr},{join:function(e){xtr(this);var t;try{t=e===void 0?",":Rw(e)}catch(i){_tr(this,"throw",i)}var a=[];return Ctr(this,function(i){Dtr(a,Ptr(i)?"":Rw(i))},{IS_ITERATOR:!0}),Ftr(a,t)}})});var _w=o(function(){"use strict";var Mtr=h(),xw=R(),Ltr=L(),Pw=w(),$tr=nr(),Utr=ce(),Btr=qo(),jtr=Q(),ktr=Pa(),Gtr=fe(),mh=D(),Cw=!mh&&!ktr("map",function(){}),Oh=!mh&&!Cw&&Gtr("map",TypeError),Htr=mh||Cw||Oh,Wtr=Utr(function(){var r=this.iterator,e=Pw(xw(this.next,r)),t=this.done=!!e.done;if(!t)return Btr(r,this.mapper,[e.value,this.counter++],!0)});Mtr({target:"Iterator",proto:!0,real:!0,forced:Htr},{map:function(e){Pw(this);try{Ltr(e)}catch(t){jtr(this,"throw",t)}return Oh?xw(Oh,this,e):new Wtr($tr(this),{mapper:e})}})});var Dw=o(function(){"use strict";var Vtr=h(),Ktr=tr(),ztr=L(),Ytr=w(),Jtr=nr(),Xtr=Q(),Qtr=fe(),Ztr=Lr(),rar=E(),Nw=TypeError,Fw=rar(function(){[].keys().reduce(function(){},void 0)}),Th=!Fw&&Qtr("reduce",Nw);Vtr({target:"Iterator",proto:!0,real:!0,forced:Fw||Th},{reduce:function(e){Ytr(this);try{ztr(e)}catch(u){Xtr(this,"throw",u)}var t=arguments.length<2,a=t?void 0:arguments[1];if(Th)return Ztr(Th,this,t?[e]:[e,a]);var i=Jtr(this),n=0;if(Ktr(i,function(u){t?(t=!1,a=u):a=e(a,u,n),n++},{IS_RECORD:!0}),t)throw new Nw("Reduce of empty iterator with no initial value");return a}})});var Mw=o(function(){"use strict";var ear=h(),tar=R(),aar=tr(),iar=L(),nar=w(),uar=nr(),oar=Q(),sar=fe(),bh=sar("some",TypeError);ear({target:"Iterator",proto:!0,real:!0,forced:bh},{some:function(e){nar(this);try{iar(e)}catch(i){oar(this,"throw",i)}if(bh)return tar(bh,this,e);var t=uar(this),a=0;return aar(t,function(i,n){if(e(i,a++))return n()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})});var kw=o(function(){"use strict";var car=h(),Lw=R(),$w=w(),far=nr(),lar=uh(),har=Go(),qar=ce(),Uw=Q(),par=Pa(),dar=fe(),Ah=D(),Bw=RangeError,gar=1/0,jw=!Ah&&!par("take",1),Rh=!Ah&&!jw&&dar("take",RangeError),yar=Ah||jw||Rh||!function(){try{Iterator.prototype.take.call({next:function(){return{done:!0}}},9007199254740992)}catch(r){return r instanceof Bw}}(),Ear=qar(function(){var r=this.iterator;if(!this.remaining--)return this.done=!0,Uw(r,"normal",void 0);var e=$w(Lw(this.next,r)),t=this.done=!!e.done;if(!t)return e.value});car({target:"Iterator",proto:!0,real:!0,forced:yar},{take:function(e){$w(this);var t;try{if(t=har(lar(+e)),t>9007199254740991&&t!==gar)throw new Bw("The argument should be a safe integer")}catch(a){Uw(this,"throw",a)}return Rh?Lw(Rh,this,t):new Ear(far(this),{remaining:t})}})});var Gw=o(function(){"use strict";var Sar=h(),Iar=w(),Oar=ar(),mar=tr(),Tar=nr();Sar({target:"Iterator",proto:!0,real:!0},{toArray:function(){var e=[],t=0;return mar(Tar(Iar(this)),function(a){Oar(e,t++,a)},{IS_RECORD:!0}),e}})});var zw=o(function(b$r,Kw){"use strict";var Ww=w(),bar=R(),Rar=ce(),wh=Fe(),Aar=nr(),war=Q(),xar=ih(),Vw=S(),Par=TypeError,Car=Vw([].push),xh=Vw([].slice),Hw="allow-partial",_ar=Rar(function(){for(var r=this.iterator,e=this.next,t=this.buffer,a=this.windowSize,i=this.allowPartial,n,u;;){if(n=Ww(bar(e,r)),u=this.done=!!n.done,i&&u&&t.length&&t.length<a)return wh(xh(t,0),!1);if(u)return wh(void 0,!0);if(t.length===a&&(this.buffer=t=xh(t,1)),Car(t,n.value),t.length===a)return wh(xh(t,0),!1)}},!1,!0);Kw.exports=function(r,e,t){return Ww(r),xar(e,r),t!==void 0&&t!=="only-full"&&t!==Hw?war(r,"throw",new Par("Incorrect `undersized` argument")):new _ar(Aar(r),{windowSize:e,buffer:[],allowPartial:t===Hw})}});var Yw=o(function(){"use strict";var Nar=h(),Far=zw(),Dar=D();Nar({target:"Iterator",proto:!0,real:!0,forced:Dar},{windows:function(e){return Far(this,e,arguments.length<2?void 0:arguments[1])}})});var un=o(function(w$r,Jw){"use strict";var Mar=_(),Lar=String,$ar=TypeError;Jw.exports=function(r){if(r===void 0||Mar(r))return r;throw new $ar(Lar(r)+" is not an object or undefined")}});var Qw=o(function(x$r,Xw){"use strict";var Uar=Ce(),Bar=nr();Xw.exports=function(r){return Bar(Uar(r))}});var Ph=o(function(P$r,Zw){"use strict";var jar=TypeError;Zw.exports=function(r){var e=r&&r.mode;if(e===void 0||e==="shortest"||e==="longest"||e==="strict")return e||"shortest";throw new jar("Incorrect `mode` option")}});var Ch=o(function(C$r,nx){"use strict";var rx=R(),ix=S(),ex=w(),kar=ce(),on=tn(),tx=TypeError,Gar=ix([].slice),Har=ix([].push),ax="Iterator is exhausted",Wo="throw",War=kar(function(){var r=this.iterCount;if(!r){this.done=!0;return}for(var e=this.openIters,t=this.iters,a=this.padding,i=this.mode,n=this.finishResults,u=[],s,v,f=0;f<r;f++){var c=t[f];if(c===null)s=a[f];else{try{s=ex(rx(c.next,c.iterator)),v=s.done,s=s.value}catch(g){return e[f]=void 0,on(e,Wo,g)}if(v){if(e[f]=void 0,this.openItersCount--,i==="shortest")return this.done=!0,on(e,"normal",void 0);if(i==="strict"){if(f)return on(e,Wo,new tx(ax));for(var l,q,p=1;p<r;p++){try{l=ex(rx(t[p].next,t[p].iterator)),q=l.done,l=l.value}catch(g){return e[p]=void 0,on(e,Wo,g)}if(q)e[p]=void 0,this.openItersCount--;else return on(e,Wo,new tx(ax))}this.done=!0;return}if(!this.openItersCount){this.done=!0;return}t[f]=null,s=a[f]}}Har(u,s)}return n?n(u):u});nx.exports=function(r,e,t,a){var i=r.length;return new War({iters:r,iterCount:i,openIters:Gar(r,0),openItersCount:i,mode:e,padding:t,finishResults:a})}});var cx=o(function(){"use strict";var Var=h(),_h=w(),ux=un(),ox=R(),vx=S(),sx=Qw(),Kar=nn(),zar=Ph(),Yar=Q(),sn=tn(),Jar=Ch(),Xar=D(),Qar=vx([].concat),Vo=vx([].push),vn="throw";Var({target:"Iterator",stat:!0,forced:Xar},{zip:function(e){_h(e);for(var t=arguments.length>1?ux(arguments[1]):void 0,a=zar(t),i=a==="longest"?ux(t&&t.padding):void 0,n=[],u=[],s=sx(e),v,f,c;!f;){try{c=_h(ox(s.next,s.iterator)),f=c.done}catch(d){return sn(n,vn,d)}if(!f){try{v=Kar(c.value,!1)}catch(d){return sn(Qar([s],n),vn,d)}Vo(n,v)}}var l=n.length,q,p,g;if(a==="longest")if(i===void 0)for(q=0;q<l;q++)Vo(u,void 0);else{try{g=sx(i)}catch(d){return sn(n,vn,d)}var y=!0;for(q=0;q<l;q++)if(y){try{c=_h(ox(g.next,g.iterator)),p=c.done,c=c.value}catch(d){return sn(n,vn,d)}p?y=!1:Vo(u,c)}else Vo(u,void 0);if(y)try{Yar(g.iterator,"normal")}catch(d){return sn(n,vn,d)}}return Jar(n,a,u)}})});var px=o(function(){"use strict";var Zar=h(),rir=w(),fx=un(),eir=ar(),tir=R(),air=S(),lx=M(),iir=oa(),nir=nn(),uir=Ph(),hx=tn(),oir=Ch(),sir=D(),Ko=air([].push),qx="throw";Zar({target:"Iterator",stat:!0,forced:sir},{zipKeyed:function(e){rir(e);var t=arguments.length>1?fx(arguments[1]):void 0,a=uir(t),i=a==="longest"?fx(t&&t.padding):void 0,n=[],u=[],s=lx("Reflect","ownKeys")(e),v=[],f=iir.f,c,l,q;for(c=0;c<s.length;c++)try{if(l=s[c],!tir(f,e,l))continue;q=e[l],q!==void 0&&(Ko(v,l),Ko(n,nir(q,!1)))}catch(g){return hx(n,qx,g)}var p=n.length;if(a==="longest")if(i===void 0)for(c=0;c<p;c++)Ko(u,void 0);else for(c=0;c<v.length;c++){try{q=i[v[c]]}catch(g){return hx(n,qx,g)}Ko(u,q)}return oir(n,a,u,function(g){for(var y=lx("Object","create")(null),d=0;d<p;d++)eir(y,v[d],g[d]);return y})}})});var dx=o(function(){"use strict";var vir=h(),cir=Ku(),fir=Zc();vir({target:"JSON",stat:!0,forced:!cir},{isRawJSON:fir})});var Tx=o(function(){"use strict";var lir=h(),hir=P(),Bh=T(),qir=M(),zo=S(),pir=R(),Ox=j(),dir=_(),gir=pe(),yir=$(),Eir=F(),gx=H(),Lh=ar(),mx=E(),Sir=ef(),Iir=We(),yx=Bh.JSON,Oir=Bh.Number,Ue=Bh.SyntaxError,jh=yx&&yx.parse,mir=qir("Object","keys"),Tir=Object.getOwnPropertyDescriptor,qr=zo("".charAt),Nh=zo("".slice),Fh=zo(/./.exec),Ex=zo([].push),Dh=/^\d$/,bir=/^[1-9]$/,Rir=/^[\d-]$/,cn=/^[\t\n\r ]$/,Mh=0,Sx=1,Air=function(r,e){r=Eir(r);var t=new Uh(r,0),a=t.parse(),i=a.value,n=t.skip(cn,a.end);if(n<r.length)throw new Ue('Unexpected extra character: "'+qr(r,n)+'" after the parsed data at: '+n);return Ox(e)?$h({"":i},"",e,a):i},$h=function(r,e,t,a){var i=r[e],n=a&&i===a.value,u=n&&typeof a.source=="string"?{source:a.source}:{},s,v,f,c,l;if(dir(i)){var q=gir(i),p=n?a.nodes:q?[]:{};if(q)for(s=p.length,f=gx(i),c=0;c<f;c++)Ix(i,c,$h(i,""+c,t,c<s?p[c]:void 0));else for(v=mir(i),f=gx(v),c=0;c<f;c++)l=v[c],Ix(i,l,$h(i,l,t,yir(p,l)?p[l]:void 0))}return pir(t,r,e,i,u)},Ix=function(r,e,t){if(hir){var a=Tir(r,e);if(a&&!a.configurable)return}t===void 0?delete r[e]:Lh(r,e,t)},wir=function(r,e,t,a){this.value=r,this.end=e,this.source=t,this.nodes=a},Uh=function(r,e){this.source=r,this.index=e};Uh.prototype={fork:function(r){return new Uh(this.source,r)},parse:function(){var r=this.source,e=this.skip(cn,this.index),t=this.fork(e),a=qr(r,e);if(Fh(Rir,a))return t.number();switch(a){case"{":return t.object();case"[":return t.array();case'"':return t.string();case"t":return t.keyword(!0);case"f":return t.keyword(!1);case"n":return t.keyword(null)}throw new Ue('Unexpected character: "'+a+'" at: '+e)},node:function(r,e,t,a,i){return new wir(e,a,r?null:Nh(this.source,t,a),i)},object:function(){for(var r=this.source,e=this.index+1,t=!1,a={},i={},n=!1;e<r.length;){if(e=this.until(['"',"}"],e),qr(r,e)==="}"&&!t){e++,n=!0;break}var u=this.fork(e).string(),s=u.value;e=u.end,e=this.until([":"],e)+1,e=this.skip(cn,e),u=this.fork(e).parse(),Lh(i,s,u),Lh(a,s,u.value),e=this.until([",","}"],u.end);var v=qr(r,e);if(v===",")t=!0,e++;else if(v==="}"){e++,n=!0;break}}if(!n)throw new Ue("Unterminated object at: "+e);return this.node(Sx,a,this.index,e,i)},array:function(){for(var r=this.source,e=this.index+1,t=!1,a=[],i=[],n=!1;e<r.length;){if(e=this.skip(cn,e),qr(r,e)==="]"&&!t){e++,n=!0;break}var u=this.fork(e).parse();if(Ex(i,u),Ex(a,u.value),e=this.until([",","]"],u.end),qr(r,e)===",")t=!0,e++;else if(qr(r,e)==="]"){e++,n=!0;break}}if(!n)throw new Ue("Unterminated array at: "+e);return this.node(Sx,a,this.index,e,i)},string:function(){var r=this.index,e=Sir(this.source,this.index+1);return this.node(Mh,e.value,r,e.end)},number:function(){var r=this.source,e=this.index,t=e;if(qr(r,t)==="-"&&t++,qr(r,t)==="0")t++;else if(Fh(bir,qr(r,t)))t=this.skip(Dh,t+1);else throw new Ue("Failed to parse number at: "+t);if(qr(r,t)==="."){var a=t+1;if(t=this.skip(Dh,a),a===t)throw new Ue("Failed to parse number's fraction at: "+t)}if(qr(r,t)==="e"||qr(r,t)==="E"){t++,(qr(r,t)==="+"||qr(r,t)==="-")&&t++;var i=t;if(t=this.skip(Dh,t),i===t)throw new Ue("Failed to parse number's exponent value at: "+t)}return this.node(Mh,Oir(Nh(r,e,t)),e,t)},keyword:function(r){var e=""+r,t=this.index,a=t+e.length;if(Nh(this.source,t,a)!==e)throw new Ue("Failed to parse value at: "+t);return this.node(Mh,r,t,a)},skip:function(r,e){for(var t=this.source;e<t.length&&Fh(r,qr(t,e));e++);return e},until:function(r,e){e=this.skip(cn,e);for(var t=qr(this.source,e),a=0;a<r.length;a++)if(r[a]===t)return e;throw new Ue('Unexpected character: "'+t+'" at: '+e)}};var xir=mx(function(){var r="9007199254740993",e;return jh(r,function(t,a,i){e=i.source}),e!==r}),Pir=Iir&&!mx(function(){return 1/jh("-0 	")!==-1/0});lir({target:"JSON",stat:!0,forced:xir},{parse:function(e,t){return Pir&&!Ox(t)?jh(e):Air(e,t)}})});var ot=o(function(B$r,bx){"use strict";var Cir=E();bx.exports=!Cir(function(){return Object.isExtensible(Object.preventExtensions({}))})});var Px=o(function(){"use strict";var _ir=h(),Nir=ot(),Fir=Ku(),kh=M(),Dir=S(),Mir=F(),Lir=ar(),$ir=Y().set,Rx=SyntaxError,Uir=kh("JSON","parse"),Bir=kh("Object","create"),jir=kh("Object","freeze"),Ax=Dir("".charAt),wx="Unacceptable as raw JSON",xx=function(r){return r===" "||r==="	"||r==="\n"||r==="\r"};_ir({target:"JSON",stat:!0,forced:!Fir},{rawJSON:function(e){var t=Mir(e);if(t===""||xx(Ax(t,0))||xx(Ax(t,t.length-1)))throw new Rx(wx);var a=Uir(t);if(typeof a=="object"&&a!==null)throw new Rx(wx);var i=Bir(null);return $ir(i,{type:"RawJSON"}),Lir(i,"rawJSON",t),Nir?jir(i):i}})});var Cx=o(function(){"use strict";var kir=T(),Gir=Sr();Gir(kir.JSON,"JSON",!0)});var Yo=o(function(W$r,_x){"use strict";var Hir=E();_x.exports=Hir(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}})});var Xo=o(function(V$r,Fx){"use strict";var Wir=E(),Vir=_(),Kir=sr(),Nx=Yo(),Jo=Object.isExtensible,zir=Wir(function(){Jo(1)});Fx.exports=zir||Nx?function(e){return!Vir(e)||Nx&&Kir(e)==="ArrayBuffer"?!1:Jo?Jo(e):!0}:Jo});var st=o(function(K$r,Lx){"use strict";var Yir=h(),Jir=S(),Xir=va(),Qir=_(),Gh=$(),Zir=z().f,Dx=Ye(),rnr=Bu(),Hh=Xo(),enr=ze(),tnr=ot(),Mx=!1,Be=enr("meta"),anr=0,Wh=function(r){Zir(r,Be,{value:{objectID:"O"+anr++,weakData:{}}})},inr=function(r,e){if(!Qir(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!Gh(r,Be)){if(!Hh(r))return"F";if(!e)return"E";Wh(r)}return r[Be].objectID},nnr=function(r,e){if(!Gh(r,Be)){if(!Hh(r))return!0;if(!e)return!1;Wh(r)}return r[Be].weakData},unr=function(r){return tnr&&Mx&&Hh(r)&&!Gh(r,Be)&&Wh(r),r},onr=function(){snr.enable=function(){},Mx=!0;var r=Dx.f,e=Jir([].splice),t={};t[Be]=1,r(t).length&&(Dx.f=function(a){for(var i=r(a),n=0,u=i.length;n<u;n++)if(i[n]===Be){e(i,n,1);break}return i},Yir({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:rnr.f}))},snr=Lx.exports={enable:onr,fastKey:inr,getWeakData:nnr,onFreeze:unr};Xir[Be]=!0});var fn=o(function(z$r,Ux){"use strict";var vnr=h(),cnr=T(),fnr=S(),$x=ca(),lnr=W(),hnr=st(),qnr=tr(),pnr=Cr(),dnr=j(),gnr=ee(),Vh=_(),Kh=E(),ynr=Bi(),Enr=Sr(),Snr=rt();Ux.exports=function(r,e,t){var a=r.indexOf("Map")!==-1,i=r.indexOf("Weak")!==-1,n=a?"set":"add",u=cnr[r],s=u&&u.prototype,v=u,f={},c=function(O){var x=fnr(s[O]);lnr(s,O,O==="add"?function(U){return x(this,U===0?0:U),this}:O==="delete"?function(A){return i&&!Vh(A)?!1:x(this,A===0?0:A)}:O==="get"?function(U){return i&&!Vh(U)?void 0:x(this,U===0?0:U)}:O==="has"?function(U){return i&&!Vh(U)?!1:x(this,U===0?0:U)}:function(U,V){return x(this,U===0?0:U,V),this})},l=$x(r,!dnr(u)||!(i||s.forEach&&!Kh(function(){new u().entries().next()})));if(l)v=t.getConstructor(e,r,a,n),hnr.enable();else if($x(r,!0)){var q=new v,p=q[n](i?{}:-0,1)!==q,g=Kh(function(){q.has(1)}),y=ynr(function(O){new u(O)}),d=!i&&Kh(function(){for(var O=new u,x=5;x--;)O[n](x,x);return!O.has(-0)});y||(v=e(function(O,x){pnr(O,s);var A=Snr(new u,O,v);return gnr(x)||qnr(x,A[n],{that:A,AS_ENTRIES:a}),A}),v.prototype=s,s.constructor=v),(g||d)&&(c("delete"),c("has"),a&&c("get")),(d||p)&&c(n),i&&s.clear&&delete s.clear}return f[r]=v,vnr({global:!0,constructor:!0,forced:v!==u},f),Enr(v,r),i||t.setStrong(v,r,a),v}});var Yh=o(function(Y$r,Wx){"use strict";var Bx=or(),Inr=er(),jx=ye(),Onr=Pr(),mnr=Cr(),Tnr=ee(),bnr=tr(),Rnr=Eo(),Qo=Fe(),Anr=$t(),ln=P(),kx=st().fastKey,Hx=Y(),Gx=Hx.set,zh=Hx.getterFor;Wx.exports={getConstructor:function(r,e,t,a){var i=r(function(f,c){mnr(f,n),Gx(f,{type:e,index:Bx(null),first:null,last:null,size:0}),ln||(f.size=0),Tnr(c)||bnr(c,f[a],{that:f,AS_ENTRIES:t})}),n=i.prototype,u=zh(e),s=function(f,c,l){var q=u(f),p=v(f,c),g,y;return p?p.value=l:(q.last=p={index:y=kx(c,!0),key:c,value:l,previous:g=q.last,next:null,removed:!1},q.first||(q.first=p),g&&(g.next=p),ln?q.size++:f.size++,y!=="F"&&(q.index[y]=p)),f},v=function(f,c){var l=u(f),q=kx(c),p;if(q!=="F")return l.index[q];for(p=l.first;p;p=p.next)if(p.key===c)return p};return jx(n,{clear:function(){for(var c=this,l=u(c),q=l.first;q;)q.removed=!0,q.previous&&(q.previous=q.previous.next=null),q=q.next;l.first=l.last=null,l.index=Bx(null),ln?l.size=0:c.size=0},delete:function(f){var c=this,l=u(c),q=v(c,f);if(q){var p=q.next,g=q.previous;delete l.index[q.index],q.removed=!0,g&&(g.next=p),p&&(p.previous=g),l.first===q&&(l.first=p),l.last===q&&(l.last=g),ln?l.size--:c.size--}return!!q},forEach:function(c){for(var l=u(this),q=Onr(c,arguments.length>1?arguments[1]:void 0),p;p=p?p.next:l.first;)for(q(p.value,p.key,this);p&&p.removed;)p=p.previous},has:function(c){return!!v(this,c)}}),jx(n,t?{get:function(c){var l=v(this,c);return l&&l.value},set:function(c,l){return s(this,c===0?0:c,l)}}:{add:function(c){return s(this,c=c===0?0:c,c)}}),ln&&Inr(n,"size",{configurable:!0,get:function(){return u(this).size}}),i},setStrong:function(r,e,t){var a=e+" Iterator",i=zh(e),n=zh(a);Rnr(r,e,function(u,s){Gx(this,{type:a,target:u,state:i(u),kind:s,last:null})},function(){for(var u=n(this),s=u.kind,v=u.last;v&&v.removed;)v=v.previous;return!u.target||!(u.last=v=v?v.next:u.state.first)?(u.target=null,Qo(void 0,!0)):Qo(s==="keys"?v.key:s==="values"?v.value:[v.key,v.value],!1)},t?"entries":"values",!t,!0),Anr(e)}}});var Vx=o(function(){"use strict";var wnr=fn(),xnr=Yh();wnr("Map",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},xnr)});var Kx=o(function(){"use strict";Vx()});var qn=o(function(rUr,zx){"use strict";var Zo=S(),hn=Map.prototype;zx.exports={Map:Map,set:Zo(hn.set),get:Zo(hn.get),has:Zo(hn.has),remove:Zo(hn.delete),proto:hn}});var Xx=o(function(){"use strict";var Pnr=h(),Cnr=S(),_nr=L(),Nnr=J(),Fnr=tr(),Dnr=oe(),rs=qn(),Yx=D(),Mnr=E(),Jx=rs.Map,Lnr=rs.has,$nr=rs.get,Unr=rs.set,Bnr=Cnr([].push),jnr=Yx||Mnr(function(){return Jx.groupBy("ab",function(r){return r}).get("a").length!==1});Pnr({target:"Map",stat:!0,forced:Yx||jnr},{groupBy:function(e,t){Nnr(e),_nr(t);var a=new Jx,i=0;return Fnr(e,function(n){Dnr(i);var u=t(n,i++);Lnr(a,u)?Bnr($nr(a,u),n):Unr(a,u,[n])}),a}})});var Qx=o(function(){"use strict";var knr=h(),Jh=qn(),Gnr=D(),Hnr=Jh.get,Wnr=Jh.has,Vnr=Jh.set;knr({target:"Map",proto:!0,real:!0,forced:Gnr},{getOrInsert:function(e,t){return Wnr(this,e)?Hnr(this,e):(Vnr(this,e,t),t)}})});var Zx=o(function(){"use strict";var Knr=h(),znr=L(),Xh=qn(),Ynr=D(),Jnr=Xh.get,Xnr=Xh.has,Qnr=Xh.set;Knr({target:"Map",proto:!0,real:!0,forced:Ynr},{getOrInsertComputed:function(e,t){var a=Xnr(this,e);if(znr(t),a)return Jnr(this,e);e===0&&1/e===-1/0&&(e=0);var i=t(e);return Qnr(this,e,i),i}})});var pn=o(function(oUr,eP){"use strict";var rP=Math.log;eP.exports=Math.log1p||function(e){var t=+e;if(t>-1e-8&&t<1e-8)return t-t*t/2;var a=1+t;return a===1?t:t===a-1?rP(a):t*rP(a)/(a-1)}});var aP=o(function(){"use strict";var Znr=h(),rur=pn(),Qh=Math.acosh,eur=Math.log,tP=Math.sqrt,tur=Math.LN2,aur=!Qh||Math.floor(Qh(Number.MAX_VALUE))!==710||Qh(1/0)!==1/0;Znr({target:"Math",stat:!0,forced:aur},{acosh:function(e){var t=+e;return t<1?NaN:t>9490626562425156e-8?eur(t)+tur:rur(t-1+tP(t-1)*tP(t+1))}})});var nP=o(function(){"use strict";var iur=h(),nur=pn(),Zh=Math.asinh,uur=Math.abs,our=Math.log,sur=Math.sqrt,vur=Math.LN2,cur=9490626562425156e-8;function iP(r){var e=+r;return!isFinite(e)||e===0?e:e<0?-iP(-e):e>cur?our(e)+vur:e<1e-8?e:nur(e+e*e/(1+sur(e*e+1)))}var fur=!(Zh&&1/Zh(0)>0&&uur(Zh(1e-8)-1e-8)<1e-16);iur({target:"Math",stat:!0,forced:fur},{asinh:iP})});var oP=o(function(){"use strict";var lur=h(),hur=pn(),uP=Math.atanh,qur=!(uP&&1/uP(-0)<0);lur({target:"Math",stat:!0,forced:qur},{atanh:function(e){var t=+e;return t===0?t:hur(2*t/(1-t))/2}})});var sP=o(function(){"use strict";var pur=h(),dur=bo(),rq=Math.cbrt,gur=Math.abs,yur=Math.pow,Eur=!rq||rq(27)!==3||rq(64)!==4;pur({target:"Math",stat:!0,forced:Eur},{cbrt:function(e){var t=+e,a=dur(t)*yur(gur(t),1/3);return t!==0&&isFinite(t)?(2*a+t/(a*a))/3:a}})});var vP=o(function(){"use strict";var Sur=h(),Iur=Math.floor,Our=Math.log,mur=Math.LOG2E;Sur({target:"Math",stat:!0},{clz32:function(e){var t=e>>>0;return t?31-Iur(Our(t+.5)*mur):32}})});var gn=o(function(yUr,cP){"use strict";var dn=Math.expm1,Tur=Math.exp;cP.exports=!dn||dn(10)>22025.465794806718||dn(10)<22025.465794806718||dn(-2e-17)!==-2e-17?function(e){var t=+e;return t===0?t:t>-1e-6&&t<1e-6?t+t*t/2:Tur(t)-1}:dn});var lP=o(function(){"use strict";var bur=h(),Rur=gn(),fP=Math.cosh,Aur=Math.abs,eq=Math.E,wur=!fP||fP(710)===1/0;bur({target:"Math",stat:!0,forced:wur},{cosh:function(e){var t=Rur(Aur(e)-1)+1;return(t+1/(t*eq*eq))*(eq/2)}})});var qP=o(function(){"use strict";var xur=h(),hP=gn();xur({target:"Math",stat:!0,forced:hP!==Math.expm1},{expm1:hP})});var pP=o(function(){"use strict";var Pur=h(),Cur=nl();Pur({target:"Math",stat:!0},{fround:Cur})});var dP=o(function(){"use strict";var _ur=h(),Nur=il(),Fur=.0009765625,Dur=65504,Mur=6103515625e-14;_ur({target:"Math",stat:!0},{f16round:function(e){return Nur(e,Fur,Dur,Mur)}})});var yP=o(function(){"use strict";var Lur=h(),gP=Math.hypot,$ur=Math.abs,Uur=Math.sqrt,Bur=!!gP&&gP(1/0,NaN)!==1/0;Lur({target:"Math",stat:!0,arity:2,forced:Bur},{hypot:function(e,t){for(var a=0,i=0,n=arguments.length,u=0,s,v;i<n;)s=$ur(arguments[i++]),u<s?(v=u/s,a=a*v*v+1,u=s):s>0?(v=s/u,a+=v*v):a+=s;return u===1/0?1/0:u*Uur(a)}})});var SP=o(function(){"use strict";var jur=h(),kur=E(),EP=Math.imul,Gur=kur(function(){return EP(4294967295,5)!==-5||EP.length!==2});jur({target:"Math",stat:!0,forced:Gur},{imul:function(e,t){var a=65535,i=+e,n=+t,u=a&i,s=a&n;return 0|u*s+((a&i>>>16)*s+u*(a&n>>>16)<<16>>>0)}})});var tq=o(function(CUr,IP){"use strict";var Hur=Math.log,Wur=Math.LOG10E;IP.exports=Math.log10||function(e){return Hur(e)*Wur}});var OP=o(function(){"use strict";var Vur=h(),Kur=tq();Vur({target:"Math",stat:!0},{log10:Kur})});var mP=o(function(){"use strict";var zur=h(),Yur=pn();zur({target:"Math",stat:!0},{log1p:Yur})});var TP=o(function(){"use strict";var Jur=h(),Xur=ml();Jur({target:"Math",stat:!0},{log2:Xur})});var bP=o(function(){"use strict";var Qur=h(),Zur=bo();Qur({target:"Math",stat:!0},{sign:Zur})});var wP=o(function(){"use strict";var ror=h(),eor=E(),RP=gn(),tor=Math.abs,AP=Math.exp,aor=Math.E,ior=eor(function(){return Math.sinh(-2e-17)!==-2e-17});ror({target:"Math",stat:!0,forced:ior},{sinh:function(e){var t=+e;return tor(t)<1?(RP(t)-RP(-t))/2:(AP(t-1)-AP(-t-1))*(aor/2)}})});var _P=o(function(){"use strict";var nor=h(),uor=S(),oor=tr(),sor=E(),vor=Ce(),aq=$r(),cor=N(),lor=RangeError,hor=TypeError,Yr=1/0,qor=NaN,es=Math.sumPrecise,jt=Math.abs,oq=Math.pow,xP=uor([].push),por=cor("iterator"),yn=oq(2,1023),dor=oq(2,53)-1,as=Number.MAX_VALUE,PP=oq(2,971),En={},iq={},nq={},uq={},CP={},gor=sor(function(){if(es([-1])!==-1||es([-as])!==-as)return!0;if(!aq)return!1;try{return es(aq([1],{})),!0}catch(e){}try{var r={};return r[por]=function(){return this},es(aq(vor([1]),r)),!0}catch(e){}}),ts=function(r,e){var t=r+e,a=e-(t-r);return{hi:t,lo:a}};nor({target:"Math",stat:!0,forced:gor},{sumPrecise:function(e){var t=[],a=0,i=uq;switch(oor(e,function(A){if(++a>dor)throw new lor("Maximum allowed index exceeded");if(typeof A!="number")throw new hor("Value is not a number");i!==En&&(A!==A?i=En:A===Yr?i=i===iq?En:nq:A===-Yr?i=i===nq?En:iq:(A!==0||1/A===Yr)&&(i===uq||i===CP)&&(i=CP,xP(t,A)))}),i){case En:return qor;case iq:return-Yr;case nq:return Yr;case uq:return-0}for(var n=[],u=0,s,v,f,c,l,q,p=0;p<t.length;p++){s=t[p];for(var g=0,y=0;y<n.length;y++){if(v=n[y],jt(s)<jt(v)&&(q=s,s=v,v=q),f=ts(s,v),c=f.hi,l=f.lo,jt(c)===Yr){var d=c===Yr?1:-1;u+=d,s=s-d*yn-d*yn,jt(s)<jt(v)&&(q=s,s=v,v=q),f=ts(s,v),c=f.hi,l=f.lo}l!==0&&(n[g++]=l),s=c}n.length=g,s!==0&&xP(n,s)}var O=n.length-1;if(c=0,l=0,u!==0){var x=O>=0?n[O]:0;if(O--,jt(u)>1||u>0&&x>0||u<0&&x<0)return u>0?Yr:-Yr;if(f=ts(u*yn,x/2),c=f.hi,l=f.lo,l*=2,jt(2*c)===Yr)return c>0?c===yn&&l===-(PP/2)&&O>=0&&n[O]<0?as:Yr:c===-yn&&l===PP/2&&O>=0&&n[O]>0?-as:-Yr;l!==0&&(n[++O]=l,l=0),c*=2}for(;O>=0&&(f=ts(c,n[O--]),c=f.hi,l=f.lo,l===0););return O>=0&&(l<0&&n[O]<0||l>0&&n[O]>0)&&(v=l*2,s=c+v,v===s-c&&(c=s)),c}})});var DP=o(function(){"use strict";var yor=h(),NP=gn(),FP=Math.exp;yor({target:"Math",stat:!0},{tanh:function(e){var t=+e,a=NP(t),i=NP(-t);return a===1/0?1:i===1/0?-1:(a-i)/(FP(t)+FP(-t))}})});var MP=o(function(){"use strict";var Eor=Sr();Eor(Math,"Math",!0)});var LP=o(function(){"use strict";var Sor=h(),Ior=wc();Sor({target:"Math",stat:!0},{trunc:Ior})});var Ca=o(function(JUr,$P){"use strict";$P.exports="	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"});var kt=o(function(XUr,BP){"use strict";var Oor=S(),mor=J(),Tor=F(),vq=Ca(),UP=Oor("".replace),bor=RegExp("^["+vq+"]+"),Ror=RegExp("(^|[^"+vq+"])["+vq+"]+$"),sq=function(r){return function(e){var t=Tor(mor(e));return r&1&&(t=UP(t,bor,"")),r&2&&(t=UP(t,Ror,"$1")),t}};BP.exports={start:sq(1),end:sq(2),trim:sq(3)}});var KP=o(function(){"use strict";var Aor=h(),cq=D(),wor=P(),GP=T(),fq=bi(),HP=S(),xor=ca(),jP=$(),Por=rt(),Cor=gr(),_or=Ve(),WP=Ei(),Nor=E(),For=Ye().f,Dor=cr().f,Mor=z().f,Lor=da(),$or=kt().trim,Sn="Number",_a=GP[Sn],kP=fq[Sn],lq=_a.prototype,Uor=GP.TypeError,Bor=HP("".slice),is=HP("".charCodeAt),jor=function(r){var e=WP(r,"number");return typeof e=="bigint"?e:kor(e)},kor=function(r){var e=WP(r,"number"),t,a,i,n,u,s,v,f;if(_or(e))throw new Uor("Cannot convert a Symbol value to a number");if(typeof e=="string"&&e.length>2){if(e=$or(e),t=is(e,0),t===43||t===45){if(a=is(e,2),a===88||a===120)return NaN}else if(t===48){switch(is(e,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(u=Bor(e,2),s=u.length,v=0;v<s;v++)if(f=is(u,v),f<48||f>n)return NaN;return parseInt(u,i)}}return+e},hq=xor(Sn,!_a(" 0o1")||!_a("0b1")||_a("+0x1")),Gor=function(r){return Cor(lq,r)&&Nor(function(){Lor(r)})},ns=function(e){var t=arguments.length<1?0:_a(jor(e));return Gor(this)?Por(Object(t),this,ns):t};ns.prototype=lq;hq&&!cq&&(lq.constructor=ns);Aor({global:!0,constructor:!0,wrap:!0,forced:hq},{Number:ns});var VP=function(r,e){for(var t=wor?For(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),a=0,i;t.length>a;a++)jP(e,i=t[a])&&!jP(r,i)&&Mor(r,i,Dor(e,i))};cq&&kP&&VP(fq[Sn],kP);(hq||cq)&&VP(fq[Sn],_a)});var zP=o(function(){"use strict";var Hor=h();Hor({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:Math.pow(2,-52)})});var JP=o(function(tBr,YP){"use strict";var Wor=T(),Vor=Wor.isFinite;YP.exports=Number.isFinite||function(e){return typeof e=="number"&&Vor(e)}});var XP=o(function(){"use strict";var Kor=h(),zor=JP();Kor({target:"Number",stat:!0},{isFinite:zor})});var QP=o(function(){"use strict";var Yor=h(),Jor=xa();Yor({target:"Number",stat:!0},{isInteger:Jor})});var ZP=o(function(){"use strict";var Xor=h();Xor({target:"Number",stat:!0},{isNaN:function(e){return e!==e}})});var r1=o(function(){"use strict";var Qor=h(),Zor=xa(),rsr=Math.abs;Qor({target:"Number",stat:!0},{isSafeInteger:function(e){return Zor(e)&&rsr(e)<=9007199254740991}})});var e1=o(function(){"use strict";var esr=h();esr({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})});var t1=o(function(){"use strict";var tsr=h();tsr({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991})});var qq=o(function(pBr,u1){"use strict";var n1=T(),asr=E(),isr=S(),nsr=F(),usr=kt().trim,osr=Ca(),ssr=isr("".charAt),us=n1.parseFloat,a1=n1.Symbol,i1=a1&&a1.iterator,vsr=1/us(osr+"-0")!==-1/0||i1&&!asr(function(){us(Object(i1))});u1.exports=vsr?function(e){var t=usr(nsr(e)),a=us(t);return a===0&&ssr(t,0)==="-"?-0:a}:us});var s1=o(function(){"use strict";var csr=h(),o1=qq();csr({target:"Number",stat:!0,forced:Number.parseFloat!==o1},{parseFloat:o1})});var pq=o(function(yBr,q1){"use strict";var l1=T(),fsr=E(),lsr=S(),hsr=F(),qsr=kt().trim,v1=Ca(),In=l1.parseInt,c1=l1.Symbol,f1=c1&&c1.iterator,h1=/^[+-]?0x/i,psr=lsr(h1.exec),dsr=In(v1+"08")!==8||In(v1+"0x16")!==22||f1&&!fsr(function(){In(Object(f1))});q1.exports=dsr?function(e,t){var a=qsr(hsr(e));return In(a,t>>>0||(psr(h1,a)?16:10))}:In});var d1=o(function(){"use strict";var gsr=h(),p1=pq();gsr({target:"Number",stat:!0,forced:Number.parseInt!==p1},{parseInt:p1})});var S1=o(function(){"use strict";var ysr=h(),gq=S(),Esr=rr(),Ssr=da(),Isr=Zi(),Osr=tq(),dq=E(),msr=RangeError,g1=String,Tsr=isFinite,bsr=Math.abs,Rsr=Math.floor,os=Math.pow,Asr=Math.round,Oe=gq(1.1.toExponential),wsr=gq(Isr),y1=gq("".slice),xsr=os(10,308),E1=Oe(-69e-12,4)==="-6.9000e-11"&&Oe(1.255,2)==="1.25e+0"&&Oe(12345,3)==="1.235e+4"&&Oe(25,0)==="3e+1",Psr=function(){return dq(function(){Oe(1,1/0)})&&dq(function(){Oe(1,-1/0)})},Csr=function(){return!dq(function(){Oe(1/0,1/0),Oe(NaN,1/0)})},_sr=!E1||!Psr()||!Csr();ysr({target:"Number",proto:!0,forced:_sr},{toExponential:function(e){var t=Ssr(this);if(e===void 0)return Oe(t);var a=Esr(e);if(!Tsr(t))return String(t);if(a<0||a>20)throw new msr("Incorrect fraction digits");if(E1)return Oe(t,a);var i="",n,u,s,v,f,c,l;return t<0&&(i="-",t=-t),t===0?(u=0,n=wsr("0",a+1)):(f=Osr(t),u=Rsr(f),a-u>=308?l=t*xsr*os(10,a-u-308):l=t/os(10,u-a),c=Asr(l),l-c>=.5&&(c+=1),c>=os(10,a+1)&&(c/=10,u+=1),n=g1(c)),a!==0&&(n=y1(n,0,1)+"."+y1(n,1)),u===0?(s="+",v="0"):(s=u>0?"+":"-",v=g1(bsr(u))),n+="e"+s+v,i+n}})});var R1=o(function(){"use strict";var Nsr=h(),Sq=S(),Fsr=rr(),Dsr=da(),Msr=Zi(),I1=E(),Lsr=RangeError,T1=String,b1=Math.floor,Eq=Sq(Msr),O1=Sq("".slice),On=Sq(1.1.toFixed),Fa=function(r,e,t){return e===0?t:e%2===1?Fa(r,e-1,t*r):Fa(r*r,e/2,t)},$sr=function(r){for(var e=0,t=r;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e},Na=function(r,e,t){for(var a=-1,i=t;++a<6;)i+=e*r[a],r[a]=i%1e7,i=b1(i/1e7)},yq=function(r,e){for(var t=6,a=0;--t>=0;)a+=r[t],r[t]=b1(a/e),a=a%e*1e7},m1=function(r){for(var e=6,t="";--e>=0;)if(t!==""||e===0||r[e]!==0){var a=T1(r[e]);t=t===""?a:t+Eq("0",7-a.length)+a}return t},Usr=I1(function(){return On(8e-5,3)!=="0.000"||On(.9,0)!=="1"||On(1.255,2)!=="1.25"||On(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!I1(function(){On({})});Nsr({target:"Number",proto:!0,forced:Usr},{toFixed:function(e){var t=Dsr(this),a=Fsr(e),i=[0,0,0,0,0,0],n="",u="0",s,v,f,c;if(a<0||a>20)throw new Lsr("Incorrect fraction digits");if(t!==t)return"NaN";if(t<=-1e21||t>=1e21)return T1(t);if(t<0&&(n="-",t=-t),t>1e-21)if(s=$sr(t*Fa(2,69,1))-69,v=s<0?t*Fa(2,-s,1):t/Fa(2,s,1),v*=4503599627370496,s=52-s,s>0){for(Na(i,0,v),f=a;f>=7;)Na(i,1e7,0),f-=7;for(Na(i,Fa(10,f,1),0),f=s-1;f>=23;)yq(i,1<<23),f-=23;yq(i,1<<f),Na(i,1,1),yq(i,2),u=m1(i)}else Na(i,0,v),Na(i,1<<-s,0),u=m1(i)+Eq("0",a);return a>0?(c=u.length,u=n+(c<=a?"0."+Eq("0",a-c)+u:O1(u,0,c-a)+"."+O1(u,c-a))):u=n+u,u}})});var x1=o(function(){"use strict";var Bsr=h(),jsr=S(),A1=E(),w1=da(),ss=jsr(1.1.toPrecision),ksr=A1(function(){return ss(1,void 0)!=="1"})||!A1(function(){ss({})});Bsr({target:"Number",proto:!0,forced:ksr},{toPrecision:function(e){return e===void 0?ss(w1(this)):ss(w1(this),e)}})});var Oq=o(function(ABr,_1){"use strict";var P1=P(),Gsr=S(),Hsr=R(),Wsr=E(),Iq=fa(),Vsr=mi(),Ksr=oa(),zsr=G(),Ysr=mt(),Da=Object.assign,C1=Object.defineProperty,Jsr=Gsr([].concat);_1.exports=!Da||Wsr(function(){if(P1&&Da({b:1},Da(C1({},"a",{enumerable:!0,get:function(){C1(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var r={},e={},t=Symbol("assign detection"),a="abcdefghijklmnopqrst";return r[t]=7,a.split("").forEach(function(i){e[i]=i}),Da({},r)[t]!==7||Iq(Da({},e)).join("")!==a})?function(e,t){for(var a=zsr(e),i=arguments.length,n=1,u=Vsr.f,s=Ksr.f;i>n;)for(var v=Ysr(arguments[n++]),f=u?Jsr(Iq(v),u(v)):Iq(v),c=f.length,l=0,q;c>l;)q=f[l++],(!P1||Hsr(s,v,q))&&(a[q]=v[q]);return a}:Da});var F1=o(function(){"use strict";var Xsr=h(),N1=Oq();Xsr({target:"Object",stat:!0,arity:2,forced:Object.assign!==N1},{assign:N1})});var D1=o(function(){"use strict";var Qsr=h(),Zsr=P(),rvr=or();Qsr({target:"Object",stat:!0,sham:!Zsr},{create:rvr})});var mn=o(function(_Br,L1){"use strict";var evr=D(),tvr=T(),avr=E(),M1=mo();L1.exports=evr||!avr(function(){if(!(M1&&M1<535)){var r=Math.random();__defineSetter__.call(null,r,function(){}),delete tvr[r]}})});var $1=o(function(){"use strict";var ivr=h(),nvr=P(),uvr=mn(),ovr=L(),svr=G(),vvr=z();nvr&&ivr({target:"Object",proto:!0,forced:uvr},{__defineGetter__:function(e,t){vvr.f(svr(this),e,{get:ovr(t),enumerable:!0,configurable:!0})}})});var B1=o(function(){"use strict";var cvr=h(),fvr=P(),U1=Lu().f;cvr({target:"Object",stat:!0,forced:Object.defineProperties!==U1,sham:!fvr},{defineProperties:U1})});var k1=o(function(){"use strict";var lvr=h(),hvr=P(),j1=z().f;lvr({target:"Object",stat:!0,forced:Object.defineProperty!==j1,sham:!hvr},{defineProperty:j1})});var G1=o(function(){"use strict";var qvr=h(),pvr=P(),dvr=mn(),gvr=L(),yvr=G(),Evr=z();pvr&&qvr({target:"Object",proto:!0,forced:dvr},{__defineSetter__:function(e,t){Evr.f(yvr(this),e,{set:gvr(t),enumerable:!0,configurable:!0})}})});var mq=o(function(jBr,z1){"use strict";var W1=P(),Svr=E(),V1=S(),Ivr=Er(),Ovr=fa(),mvr=ur(),Tvr=oa().f,K1=V1(Tvr),bvr=V1([].push),Rvr=W1&&Svr(function(){var r=Object.create(null);return r[2]=2,!K1(r,2)}),H1=function(r){return function(e){for(var t=mvr(e),a=Ovr(t),i=Rvr&&Ivr(t)===null,n=a.length,u=0,s=[],v;n>u;)v=a[u++],(!W1||(i?v in t:K1(t,v)))&&bvr(s,r?[v,t[v]]:t[v]);return s}};z1.exports={entries:H1(!0),values:H1(!1)}});var Y1=o(function(){"use strict";var Avr=h(),wvr=mq().entries;Avr({target:"Object",stat:!0},{entries:function(e){return wvr(e)}})});var J1=o(function(){"use strict";var xvr=h(),Pvr=ot(),Cvr=E(),_vr=_(),Nvr=st().onFreeze,Tq=Object.freeze,Fvr=Cvr(function(){Tq(1)});xvr({target:"Object",stat:!0,forced:Fvr,sham:!Pvr},{freeze:function(e){return Tq&&_vr(e)?Tq(Nvr(e)):e}})});var X1=o(function(){"use strict";var Dvr=h(),Mvr=tr(),Lvr=ar();Dvr({target:"Object",stat:!0},{fromEntries:function(e){var t={};return Mvr(e,function(a,i){Lvr(t,a,i)},{AS_ENTRIES:!0}),t}})});var rC=o(function(){"use strict";var $vr=h(),Uvr=E(),Bvr=ur(),Q1=cr().f,Z1=P(),jvr=!Z1||Uvr(function(){Q1(1)});$vr({target:"Object",stat:!0,forced:jvr,sham:!Z1},{getOwnPropertyDescriptor:function(e,t){return Q1(Bvr(e),t)}})});var eC=o(function(){"use strict";var kvr=h(),Gvr=P(),Hvr=Nu(),Wvr=ur(),Vvr=cr(),Kvr=ar();kvr({target:"Object",stat:!0,sham:!Gvr},{getOwnPropertyDescriptors:function(e){for(var t=Wvr(e),a=Vvr.f,i=Hvr(t),n={},u=0,s,v;i.length>u;)v=a(t,s=i[u++]),v!==void 0&&Kvr(n,s,v);return n}})});var tC=o(function(){"use strict";var zvr=h(),Yvr=E(),Jvr=Bu().f,Xvr=Yvr(function(){return!Object.getOwnPropertyNames(1)});zvr({target:"Object",stat:!0,forced:Xvr},{getOwnPropertyNames:Jvr})});var iC=o(function(){"use strict";var Qvr=h(),Zvr=E(),rcr=G(),aC=Er(),ecr=io(),tcr=Zvr(function(){aC(1)});Qvr({target:"Object",stat:!0,forced:tcr,sham:!ecr},{getPrototypeOf:function(e){return aC(rcr(e))}})});var uC=o(function(){"use strict";var acr=h(),icr=ar(),ncr=M(),ucr=S(),ocr=L(),scr=J(),vcr=Wr(),ccr=tr(),fcr=oe(),lcr=E(),nC=Object.groupBy,hcr=ncr("Object","create"),qcr=ucr([].push),pcr=!nC||lcr(function(){return nC("ab",function(r){return r}).a.length!==1});acr({target:"Object",stat:!0,forced:pcr},{groupBy:function(e,t){scr(e),ocr(t);var a=hcr(null),i=0;return ccr(e,function(n){fcr(i);var u=vcr(t(n,i++));u in a?qcr(a[u],n):icr(a,u,[n])}),a}})});var oC=o(function(){"use strict";var dcr=h(),gcr=$();dcr({target:"Object",stat:!0},{hasOwn:gcr})});var bq=o(function(ujr,sC){"use strict";sC.exports=Object.is||function(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}});var vC=o(function(){"use strict";var ycr=h(),Ecr=bq();ycr({target:"Object",stat:!0},{is:Ecr})});var fC=o(function(){"use strict";var Scr=h(),cC=Xo();Scr({target:"Object",stat:!0,forced:Object.isExtensible!==cC},{isExtensible:cC})});var hC=o(function(){"use strict";var Icr=h(),Ocr=E(),mcr=_(),Tcr=sr(),lC=Yo(),Rq=Object.isFrozen,bcr=lC||Ocr(function(){Rq(1)});Icr({target:"Object",stat:!0,forced:bcr},{isFrozen:function(e){return!mcr(e)||lC&&Tcr(e)==="ArrayBuffer"?!0:Rq?Rq(e):!1}})});var pC=o(function(){"use strict";var Rcr=h(),Acr=E(),wcr=_(),xcr=sr(),qC=Yo(),Aq=Object.isSealed,Pcr=qC||Acr(function(){Aq(1)});Rcr({target:"Object",stat:!0,forced:Pcr},{isSealed:function(e){return!wcr(e)||qC&&xcr(e)==="ArrayBuffer"?!0:Aq?Aq(e):!1}})});var gC=o(function(){"use strict";var Ccr=h(),_cr=G(),dC=fa(),Ncr=E(),Fcr=Ncr(function(){dC(1)});Ccr({target:"Object",stat:!0,forced:Fcr},{keys:function(e){return dC(_cr(e))}})});var yC=o(function(){"use strict";var Dcr=h(),Mcr=P(),Lcr=mn(),$cr=G(),Ucr=Wr(),Bcr=Er(),jcr=cr().f;Mcr&&Dcr({target:"Object",proto:!0,forced:Lcr},{__lookupGetter__:function(e){var t=$cr(this),a=Ucr(e),i;do if(i=jcr(t,a))return i.get;while(t=Bcr(t))}})});var EC=o(function(){"use strict";var kcr=h(),Gcr=P(),Hcr=mn(),Wcr=G(),Vcr=Wr(),Kcr=Er(),zcr=cr().f;Gcr&&kcr({target:"Object",proto:!0,forced:Hcr},{__lookupSetter__:function(e){var t=Wcr(this),a=Vcr(e),i;do if(i=zcr(t,a))return i.set;while(t=Kcr(t))}})});var SC=o(function(){"use strict";var Ycr=h(),Jcr=_(),Xcr=st().onFreeze,Qcr=ot(),Zcr=E(),wq=Object.preventExtensions,rfr=Zcr(function(){wq(1)});Ycr({target:"Object",stat:!0,forced:rfr,sham:!Qcr},{preventExtensions:function(e){return wq&&Jcr(e)?wq(Xcr(e)):e}})});var bC=o(function(){"use strict";var efr=P(),tfr=er(),afr=_(),ifr=pf(),nfr=G(),ufr=J(),IC=Object.getPrototypeOf,OC=Object.setPrototypeOf,mC=Object.prototype,TC="__proto__";if(efr&&IC&&OC&&{}[TC]!==mC)try{tfr(mC,TC,{configurable:!0,get:function(){return IC(nfr(this))},set:function(e){var t=ufr(this);ifr(e)&&afr(t)&&OC(t,e)}})}catch(r){}});var RC=o(function(){"use strict";var ofr=h(),sfr=_(),vfr=st().onFreeze,cfr=ot(),ffr=E(),xq=Object.seal,lfr=ffr(function(){xq(1)});ofr({target:"Object",stat:!0,forced:lfr,sham:!cfr},{seal:function(e){return xq&&sfr(e)?xq(vfr(e)):e}})});var AC=o(function(){"use strict";var hfr=h(),qfr=$r();hfr({target:"Object",stat:!0},{setPrototypeOf:qfr})});var xC=o(function(xjr,wC){"use strict";var pfr=Du(),dfr=Mr();wC.exports=pfr?{}.toString:function(){return"[object "+dfr(this)+"]"}});var PC=o(function(){"use strict";var gfr=Du(),yfr=W(),Efr=xC();gfr||yfr(Object.prototype,"toString",Efr,{unsafe:!0})});var CC=o(function(){"use strict";var Sfr=h(),Ifr=mq().values;Sfr({target:"Object",stat:!0},{values:function(e){return Ifr(e)}})});var NC=o(function(){"use strict";var Ofr=h(),_C=qq();Ofr({global:!0,forced:parseFloat!==_C},{parseFloat:_C})});var DC=o(function(){"use strict";var mfr=h(),FC=pq();mfr({global:!0,forced:parseInt!==FC},{parseInt:FC})});var vs=o(function($jr,MC){"use strict";var Tfr=Xe(),bfr=Ke(),Rfr=TypeError;MC.exports=function(r){if(Tfr(r))return r;throw new Rfr(bfr(r)+" is not a constructor")}});var Tn=o(function(Ujr,$C){"use strict";var LC=w(),Afr=vs(),wfr=ee(),xfr=N(),Pfr=xfr("species");$C.exports=function(r,e){var t=LC(r).constructor,a;return t===void 0||wfr(a=LC(t)[Pfr])?e:Afr(a)}});var Br=o(function(Bjr,UC){"use strict";var Cfr=TypeError;UC.exports=function(r,e){if(r<e)throw new Cfr("Not enough arguments");return r}});var Pq=o(function(jjr,jC){"use strict";var BC=te();jC.exports=/ipad|iphone|ipod/i.test(BC)&&/applewebkit/i.test(BC)});var An=o(function(kjr,JC){"use strict";var jr=T(),_fr=Lr(),Nfr=Pr(),kC=j(),Ffr=$(),YC=E(),GC=Cc(),Dfr=Kr(),HC=Si(),Mfr=Br(),Lfr=Pq(),$fr=Lt(),Mq=jr.setImmediate,Lq=jr.clearImmediate,Ufr=jr.process,Cq=jr.Dispatch,Bfr=jr.Function,WC=jr.MessageChannel,jfr=jr.String,_q=0,bn={},VC="onreadystatechange",Rn,Gt,Nq,Fq;YC(function(){Rn=jr.location});var $q=function(r){if(Ffr(bn,r)){var e=bn[r];delete bn[r],e()}},Dq=function(r){return function(){$q(r)}},KC=function(r){$q(r.data)},zC=function(r){jr.postMessage(jfr(r),Rn.protocol+"//"+Rn.host)};(!Mq||!Lq)&&(Mq=function(e){Mfr(arguments.length,1);var t=kC(e)?e:Bfr(e),a=Dfr(arguments,1);return bn[++_q]=function(){_fr(t,void 0,a)},Gt(_q),_q},Lq=function(e){delete bn[e]},$fr?Gt=function(r){Ufr.nextTick(Dq(r))}:Cq&&Cq.now?Gt=function(r){Cq.now(Dq(r))}:WC&&!Lfr?(Nq=new WC,Fq=Nq.port2,Nq.port1.onmessage=KC,Gt=Nfr(Fq.postMessage,Fq)):jr.addEventListener&&kC(jr.postMessage)&&!jr.importScripts&&Rn&&Rn.protocol!=="file:"&&!YC(zC)?(Gt=zC,jr.addEventListener("message",KC,!1)):VC in HC("script")?Gt=function(r){GC.appendChild(HC("script"))[VC]=function(){GC.removeChild(this),$q(r)}}:Gt=function(r){setTimeout(Dq(r),0)});JC.exports={set:Mq,clear:Lq}});var Uq=o(function(Gjr,QC){"use strict";var XC=T(),kfr=P(),Gfr=Object.getOwnPropertyDescriptor;QC.exports=function(r){if(!kfr)return XC[r];var e=Gfr(XC,r);return e&&e.value}});var Bq=o(function(Hjr,r_){"use strict";var ZC=function(){this.head=null,this.tail=null};ZC.prototype={add:function(r){var e={item:r,next:null},t=this.tail;t?t.next=e:this.head=e,this.tail=e},get:function(){var r=this.head;if(r){var e=this.head=r.next;return e===null&&(this.tail=null),r.item}}};r_.exports=ZC});var t_=o(function(Wjr,e_){"use strict";var Hfr=te();e_.exports=/ipad|iphone|ipod/i.test(Hfr)&&typeof Pebble!="undefined"});var i_=o(function(Vjr,a_){"use strict";var Wfr=te();a_.exports=/web0s(?!.*chrome)/i.test(Wfr)});var Vq=o(function(Kjr,c_){"use strict";var La=T(),Vfr=Uq(),n_=Pr(),jq=An().set,Kfr=Bq(),zfr=Pq(),Yfr=t_(),Jfr=i_(),kq=Lt(),u_=La.MutationObserver||La.WebKitMutationObserver,o_=La.document,s_=La.process,cs=La.Promise,Wq=Vfr("queueMicrotask"),Ma,Gq,Hq,fs,v_;Wq||(wn=new Kfr,xn=function(){var r,e;for(kq&&(r=s_.domain)&&r.exit();e=wn.get();)try{e()}catch(t){throw wn.head&&Ma(),t}r&&r.enter()},!zfr&&!kq&&!Jfr&&u_&&o_?(Gq=!0,Hq=o_.createTextNode(""),new u_(xn).observe(Hq,{characterData:!0}),Ma=function(){Hq.data=Gq=!Gq}):!Yfr&&cs&&cs.resolve?(fs=cs.resolve(void 0),fs.constructor=cs,v_=n_(fs.then,fs),Ma=function(){v_(xn)}):kq?Ma=function(){s_.nextTick(xn)}:(jq=n_(jq,La),Ma=function(){jq(xn)}),Wq=function(r){wn.head||Ma(),wn.add(r)});var wn,xn;c_.exports=Wq});var l_=o(function(zjr,f_){"use strict";f_.exports=function(r,e){try{arguments.length===1?console.error(r):console.error(r,e)}catch(t){}}});var Ht=o(function(Yjr,h_){"use strict";h_.exports=function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}}});var Wt=o(function(Jjr,q_){"use strict";var Xfr=T();q_.exports=Xfr.Promise});var $a=o(function(Xjr,y_){"use strict";var Qfr=T(),Pn=Wt(),Zfr=j(),rlr=ca(),elr=Ru(),tlr=N(),p_=Vi(),alr=D(),Kq=ie(),d_=Pn&&Pn.prototype,ilr=tlr("species"),zq=!1,g_=Zfr(Qfr.PromiseRejectionEvent),nlr=rlr("Promise",function(){var r=elr(Pn),e=r!==String(Pn);if(!e&&Kq===66||alr&&!(d_.catch&&d_.finally))return!0;if(!Kq||Kq<51||!/native code/.test(r)){var t=new Pn(function(n){n(1)}),a=function(n){n(function(){},function(){})},i=t.constructor={};if(i[ilr]=a,zq=t.then(function(){})instanceof a,!zq)return!0}return!e&&(p_==="BROWSER"||p_==="DENO")&&!g_});y_.exports={CONSTRUCTOR:nlr,REJECTION_EVENT:g_,SUBCLASSING:zq}});var me=o(function(Qjr,S_){"use strict";var E_=L(),ulr=TypeError,olr=function(r){var e,t;this.promise=new r(function(a,i){if(e!==void 0||t!==void 0)throw new ulr("Bad Promise constructor");e=a,t=i}),this.resolve=E_(e),this.reject=E_(t)};S_.exports.f=function(r){return new olr(r)}});var B_=o(function(){"use strict";var slr=h(),vlr=D(),ps=Lt(),vt=T(),clr=bi(),ka=R(),I_=W(),O_=$r(),flr=Sr(),llr=$t(),hlr=L(),qs=j(),qlr=_(),plr=Cr(),dlr=Tn(),A_=An().set,Zq=Vq(),glr=l_(),ylr=Ht(),Elr=Bq(),w_=Y(),ds=Wt(),rp=$a(),x_=me(),gs="Promise",P_=rp.CONSTRUCTOR,Slr=rp.REJECTION_EVENT,Ilr=rp.SUBCLASSING,Yq=w_.getterFor(gs),Olr=w_.set,Ua=ds&&ds.prototype,Vt=ds,ls=Ua,C_=vt.TypeError,Jq=vt.document,ep=vt.process,Xq=x_.f,mlr=Xq,Tlr=!!(Jq&&Jq.createEvent&&vt.dispatchEvent),__="unhandledrejection",blr="rejectionhandled",m_=0,N_=1,Rlr=2,tp=1,F_=2,hs,T_,D_,b_,M_=function(r){var e;return qlr(r)&&qs(e=r.then)?e:!1},L_=function(r,e){var t=e.value,a=e.state===N_,i=a?r.ok:r.fail,n=r.resolve,u=r.reject,s=r.domain,v,f,c;try{i?(a||(e.rejection===F_&&wlr(e),e.rejection=tp),i===!0?v=t:(s&&s.enter(),v=i(t),s&&(s.exit(),c=!0)),v===r.promise?u(new C_("Promise-chain cycle")):(f=M_(v))?ka(f,v,n,u):n(v)):u(t)}catch(l){s&&!c&&s.exit(),u(l)}},$_=function(r,e){r.notified||(r.notified=!0,Zq(function(){for(var t=r.reactions,a;a=t.get();)L_(a,r);r.notified=!1,e&&!r.rejection&&Alr(r)}))},U_=function(r,e,t){var a,i;Tlr?(a=Jq.createEvent("Event"),a.promise=e,a.reason=t,a.initEvent(r,!1,!0),vt.dispatchEvent(a)):a={promise:e,reason:t},!Slr&&(i=vt["on"+r])?i(a):r===__&&glr("Unhandled promise rejection",t)},Alr=function(r){ka(A_,vt,function(){var e=r.facade,t=r.value,a=R_(r),i;if(a&&(i=ylr(function(){ps?ep.emit("unhandledRejection",t,e):U_(__,e,t)}),r.rejection=ps||R_(r)?F_:tp,i.error))throw i.value})},R_=function(r){return r.rejection!==tp&&!r.parent},wlr=function(r){ka(A_,vt,function(){var e=r.facade;ps?ep.emit("rejectionHandled",e):U_(blr,e,r.value)})},Ba=function(r,e,t){return function(a){r(e,a,t)}},ja=function(r,e,t){r.done||(r.done=!0,t&&(r=t),r.value=e,r.state=Rlr,$_(r,!0))},Qq=function(r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(r.facade===e)throw new C_("Promise can't be resolved itself");var a=M_(e);a?Zq(function(){var i={done:!1};try{ka(a,e,Ba(Qq,i,r),Ba(ja,i,r))}catch(n){ja(i,n,r)}}):(r.value=e,r.state=N_,$_(r,!1))}catch(i){ja({done:!1},i,r)}}};if(P_&&(Vt=function(e){plr(this,ls),hlr(e),ka(hs,this);var t=Yq(this);try{e(Ba(Qq,t),Ba(ja,t))}catch(a){ja(t,a)}},ls=Vt.prototype,hs=function(e){Olr(this,{type:gs,done:!1,notified:!1,parent:!1,reactions:new Elr,rejection:!1,state:m_,value:null})},hs.prototype=I_(ls,"then",function(e,t){var a=Yq(this),i=Xq(dlr(this,Vt));return a.parent=!0,i.ok=qs(e)?e:!0,i.fail=qs(t)&&t,i.domain=ps?ep.domain:void 0,a.state===m_?a.reactions.add(i):Zq(function(){L_(i,a)}),i.promise}),T_=function(){var r=new hs,e=Yq(r);this.promise=r,this.resolve=Ba(Qq,e),this.reject=Ba(ja,e)},x_.f=Xq=function(r){return r===Vt||r===D_?new T_(r):mlr(r)},!vlr&&qs(ds)&&Ua!==Object.prototype)){b_=Ua.then,Ilr||I_(Ua,"then",function(e,t){var a=this;return new Vt(function(i,n){ka(b_,a,i,n)}).then(e,t)},{unsafe:!0});try{delete Ua.constructor}catch(r){}O_&&O_(Ua,ls)}slr({global:!0,constructor:!0,wrap:!0,forced:P_},{Promise:Vt});D_=clr.Promise;flr(Vt,gs,!1,!0);llr(gs)});var Cn=o(function(ekr,j_){"use strict";var xlr=Wt(),Plr=Bi(),Clr=$a().CONSTRUCTOR;j_.exports=Clr||!Plr(function(r){xlr.all(r).then(void 0,function(){})})});var k_=o(function(){"use strict";var _lr=h(),Nlr=R(),Flr=L(),Dlr=me(),Mlr=Ht(),Llr=tr(),$lr=Cn();_lr({target:"Promise",stat:!0,forced:$lr},{all:function(e){var t=this,a=Dlr.f(t),i=a.resolve,n=a.reject,u=Mlr(function(){var s=Flr(t.resolve),v=[],f=0,c=1;Llr(e,function(l){var q=f++,p=!1;c++,Nlr(s,t,l).then(function(g){p||(p=!0,v[q]=g,--c||i(v))},n)}),--c||i(v)});return u.error&&n(u.value),a.promise}})});var H_=o(function(){"use strict";var Ulr=h(),Blr=D(),jlr=$a().CONSTRUCTOR,ip=Wt(),klr=M(),Glr=j(),Hlr=W(),G_=ip&&ip.prototype;Ulr({target:"Promise",proto:!0,forced:jlr,real:!0},{catch:function(r){return this.then(void 0,r)}});!Blr&&Glr(ip)&&(ap=klr("Promise").prototype.catch,G_.catch!==ap&&Hlr(G_,"catch",ap,{unsafe:!0}));var ap});var W_=o(function(){"use strict";var Wlr=h(),Vlr=R(),Klr=L(),zlr=me(),Ylr=Ht(),Jlr=tr(),Xlr=Cn();Wlr({target:"Promise",stat:!0,forced:Xlr},{race:function(e){var t=this,a=zlr.f(t),i=a.reject,n=Ylr(function(){var u=Klr(t.resolve);Jlr(e,function(s){Vlr(u,t,s).then(a.resolve,i)})});return n.error&&i(n.value),a.promise}})});var V_=o(function(){"use strict";var Qlr=h(),Zlr=me(),rhr=$a().CONSTRUCTOR;Qlr({target:"Promise",stat:!0,forced:rhr},{reject:function(e){var t=Zlr.f(this),a=t.reject;return a(e),t.promise}})});var ys=o(function(ckr,K_){"use strict";var ehr=w(),thr=_(),ahr=me();K_.exports=function(r,e){if(ehr(r),thr(e)&&e.constructor===r)return e;var t=ahr.f(r),a=t.resolve;return a(e),t.promise}});var J_=o(function(){"use strict";var ihr=h(),nhr=M(),z_=D(),uhr=Wt(),Y_=$a().CONSTRUCTOR,ohr=ys(),shr=nhr("Promise"),vhr=z_&&!Y_;ihr({target:"Promise",stat:!0,forced:z_||Y_},{resolve:function(e){return ohr(vhr&&this===shr?uhr:this,e)}})});var X_=o(function(){"use strict";B_();k_();H_();W_();V_();J_()});var Q_=o(function(){"use strict";var chr=h(),fhr=R(),lhr=L(),hhr=me(),qhr=Ht(),phr=tr(),dhr=Cn();chr({target:"Promise",stat:!0,forced:dhr},{allSettled:function(e){var t=this,a=hhr.f(t),i=a.resolve,n=a.reject,u=qhr(function(){var s=lhr(t.resolve),v=[],f=0,c=1;phr(e,function(l){var q=f++,p=!1;c++,fhr(s,t,l).then(function(g){p||(p=!0,v[q]={status:"fulfilled",value:g},--c||i(v))},function(g){p||(p=!0,v[q]={status:"rejected",reason:g},--c||i(v))})}),--c||i(v)});return u.error&&n(u.value),a.promise}})});var rN=o(function(){"use strict";var ghr=h(),yhr=R(),Ehr=L(),Shr=M(),Ihr=me(),Ohr=Ht(),mhr=tr(),Thr=Cn(),Z_="No one promise resolved";ghr({target:"Promise",stat:!0,forced:Thr},{any:function(e){var t=this,a=Shr("AggregateError"),i=Ihr.f(t),n=i.resolve,u=i.reject,s=Ohr(function(){var v=Ehr(t.resolve),f=[],c=0,l=1,q=!1;mhr(e,function(p){var g=c++,y=!1;l++,yhr(v,t,p).then(function(d){y||q||(q=!0,n(d))},function(d){y||q||(y=!0,f[g]=d,--l||u(new a(f,Z_)))})}),--l||u(new a(f,Z_))});return s.error&&u(s.value),i.promise}})});var iN=o(function(){"use strict";var bhr=h(),Rhr=D(),Es=Wt(),Ahr=E(),tN=M(),aN=j(),whr=Tn(),eN=ys(),xhr=W(),up=Es&&Es.prototype,Phr=!!Es&&Ahr(function(){up.finally.call({then:function(){}},function(){})});bhr({target:"Promise",proto:!0,real:!0,forced:Phr},{finally:function(r){var e=whr(this,tN("Promise")),t=aN(r);return this.then(t?function(a){return eN(e,r()).then(function(){return a})}:r,t?function(a){return eN(e,r()).then(function(){throw a})}:r)}});!Rhr&&aN(Es)&&(np=tN("Promise").prototype.finally,up.finally!==np&&xhr(up,"finally",np,{unsafe:!0}));var np});var uN=o(function(){"use strict";var Chr=h(),_hr=T(),Nhr=Lr(),Fhr=Kr(),Dhr=ys(),Mhr=me(),Lhr=L(),$hr=Ht(),Uhr=E(),Ss=_hr.Promise,nN=!1,Bhr=!Ss||!Ss.try||Uhr(function(){var r=Ss.resolve();return Ss.try(function(e){return nN=e===8,r},8)!==r})||!nN;Chr({target:"Promise",stat:!0,forced:Bhr},{try:function(r){var e=arguments.length>1?Fhr(arguments,1):[],t=$hr(function(){return Nhr(Lhr(r),void 0,e)});if(!t.error)return Dhr(this,t.value);var a=Mhr.f(this),i=a.reject;return i(t.value),a.promise}})});var oN=o(function(){"use strict";var jhr=h(),khr=me();jhr({target:"Promise",stat:!0},{withResolvers:function(){var e=khr.f(this);return{promise:e.promise,resolve:e.resolve,reject:e.reject}}})});var sp=o(function(bkr,pN){"use strict";var lN=T(),hN=yi(),qN=j(),Ghr=or(),Is=Er(),Hhr=W(),Whr=N(),Vhr=D(),sN="USE_FUNCTION_CONSTRUCTOR",vN=Whr("asyncIterator"),cN=lN.AsyncIterator,fN=hN.AsyncIteratorPrototype,Te,op;if(fN)Te=fN;else if(qN(cN))Te=cN.prototype;else if(hN[sN]||lN[sN])try{op=Is(Is(Is(Function("return async function*(){}()")()))),Is(op)===Object.prototype&&(Te=op)}catch(r){}Te?Vhr&&(Te=Ghr(Te)):Te={};qN(Te[vN])||Hhr(Te,vN,function(){return this});pN.exports=Te});var lp=o(function(Rkr,ON){"use strict";var Ga=R(),vp=w(),Khr=or(),dN=vr(),zhr=ye(),gN=Y(),yN=Q(),Yhr=M(),Jhr=sp(),EN=Fe(),Os=Yhr("Promise"),SN="AsyncFromSyncIterator",Xhr=gN.set,cp=gN.getterFor(SN),fp=function(r,e,t,a,i){var n=r.done;Os.resolve(r.value).then(function(u){e(EN(u,n))},function(u){if(!n&&i)try{yN(a,"throw",u)}catch(s){u=s}t(u)})},IN=function(e){e.type=SN,Xhr(this,e)};IN.prototype=zhr(Khr(Jhr),{next:function(){var e=cp(this),t=arguments.length>0,a=t?arguments[0]:void 0;return new Os(function(i,n){var u=vp(t?Ga(e.next,e.iterator,a):Ga(e.next,e.iterator));fp(u,i,n,e.iterator,!0)})},return:function(){var r=cp(this),e=r.iterator,t=arguments.length>0,a=t?arguments[0]:void 0;return new Os(function(i,n){var u=dN(e,"return");if(u===void 0)return i(EN(a,!0));var s=vp(t?Ga(u,e,a):Ga(u,e));fp(s,i,n,e)})},throw:function(){var r=cp(this),e=r.iterator,t=arguments.length>0,a=t?arguments[0]:void 0;return new Os(function(i,n){var u=dN(e,"throw");if(u===void 0){try{yN(e,"normal")}catch(v){return n(v)}return n(new TypeError("The iterator does not provide a throw method"))}var s=vp(t?Ga(u,e,a):Ga(u,e));fp(s,i,n,e,!0)})}});ON.exports=IN});var TN=o(function(Akr,mN){"use strict";var Qhr=R(),Zhr=lp(),rqr=w(),eqr=Ce(),tqr=nr(),aqr=vr(),iqr=N(),nqr=iqr("asyncIterator");mN.exports=function(r,e){var t=arguments.length<2?aqr(r,nqr):e;return t?rqr(Qhr(t,r)):new Zhr(tqr(eqr(r)))}});var RN=o(function(wkr,bN){"use strict";var uqr=R(),oqr=w(),sqr=M(),vqr=vr();bN.exports=function(r,e,t,a){try{var i=vqr(r,"return");if(i)return sqr("Promise").resolve(uqr(i,r)).then(function(n){try{e!==a&&oqr(n)}catch(u){a(u);return}e(t)},function(n){e===a?e(t):a(n)})}catch(n){return a(e===a?t:n)}e(t)}});var xN=o(function(xkr,wN){"use strict";var cqr=R(),fqr=L(),hp=w(),lqr=_(),hqr=oe(),qqr=M(),AN=ar(),pqr=_e(),dqr=nr(),qp=RN(),_n=function(r){var e=r===0,t=r===1,a=r===2,i=r===3;return function(n,u,s){hp(n);var v=u!==void 0;(v||!e)&&fqr(u);var f=dqr(n),c=qqr("Promise"),l=f.iterator,q=f.next,p=0;return new c(function(g,y){var d=function(x){qp(l,y,x,y)},O=function(){try{try{hqr(p)}catch(x){return d(x)}c.resolve(hp(cqr(q,l))).then(function(x){try{if(hp(x).done)e?(pqr(s,p),g(s)):g(i?!1:a||void 0);else{var A=x.value;try{if(v){var U=p++,V=u(A,U),Z=function(X){if(t)O();else if(a)X?O():qp(l,g,!1,y);else if(e)try{AN(s,U,X),O()}catch(Gr){d(Gr)}else X?qp(l,g,i||A,y):O()};lqr(V)?c.resolve(V).then(Z,d):Z(V)}else AN(s,p++,A),O()}catch(X){d(X)}}}catch(X){y(X)}},y)}catch(x){y(x)}};O()})}};wN.exports={toArray:_n(0),forEach:_n(1),every:_n(2),some:_n(3),find:_n(4)}});var FN=o(function(Pkr,NN){"use strict";var gqr=Pr(),PN=S(),yqr=Xe(),Eqr=TN(),Sqr=Ce(),Iqr=nr(),Oqr=Pe(),mqr=vr(),Tqr=M(),bqr=To(),Rqr=N(),Aqr=lp(),wqr=xN().toArray,xqr=Rqr("asyncIterator"),CN=PN(bqr("Array","values")),Pqr=PN(CN([]).next),Cqr=function(){return new _N(this)},_N=function(r){this.iterator=CN(r)};_N.prototype.next=function(){return Pqr(this.iterator)};NN.exports=function(e){var t=this,a=arguments.length,i=a>1?arguments[1]:void 0,n=a>2?arguments[2]:void 0;return new(Tqr("Promise"))(function(u){i!==void 0&&(i=gqr(i,n));var s=mqr(e,xqr),v=s?void 0:Oqr(e)||Cqr,f=yqr(t)?new t:[],c=s?Eqr(e,s):new Aqr(Iqr(Sqr(e,v)));u(wqr(c,i,f))})}});var MN=o(function(){"use strict";var _qr=h(),Nqr=FN(),Fqr=E(),DN=Array.fromAsync,Dqr=!DN||Fqr(function(){var r=0;return DN.call(function(){return r++,[]},{length:0}),r!==1});_qr({target:"Array",stat:!0,forced:Dqr},{fromAsync:Nqr})});var HN=o(function(){"use strict";var Mqr=h(),Ts=P(),BN=M(),LN=L(),Lqr=Cr(),jN=W(),$qr=ye(),Uqr=er(),kN=N(),GN=Y(),pp=Hl(),$N=ie(),UN=BN("Promise"),Bqr=BN("SuppressedError"),jqr=ReferenceError,kqr=kN("asyncDispose"),Gqr=kN("toStringTag"),Rs="AsyncDisposableStack",Hqr=GN.set,bs=GN.getterFor(Rs),dp="async-dispose",Nn="disposed",Wqr="pending",ms=function(r){var e=bs(r);if(e.state===Nn)throw new jqr(Rs+" already disposed");return e},gp=function(){Hqr(Lqr(this,Ha),{type:Rs,state:Wqr,stack:[]}),Ts||(this.disposed=!1)},Ha=gp.prototype;$qr(Ha,{disposeAsync:function(){var e=this;return new UN(function(t,a){var i=bs(e);if(i.state===Nn)return t(void 0);i.state=Nn,Ts||(e.disposed=!0);var n=i.stack,u=n.length,s=!1,v,f=function(l){s?v=new Bqr(l,v):(s=!0,v=l),c()},c=function(){if(u){var l=n[--u];n[u]=null;try{UN.resolve(l()).then(c,f)}catch(q){f(q)}}else i.stack=null,s?a(v):t(void 0)};c()})},use:function(e){return pp(ms(this),e,dp),e},adopt:function(e,t){var a=ms(this);return LN(t),pp(a,void 0,dp,function(){return t(e)}),e},defer:function(e){var t=ms(this);LN(e),pp(t,void 0,dp,e)},move:function(){var e=ms(this),t=new gp;return bs(t).stack=e.stack,e.stack=[],e.state=Nn,Ts||(this.disposed=!0),t}});Ts&&Uqr(Ha,"disposed",{configurable:!0,get:function(){return bs(this).state===Nn}});jN(Ha,kqr,Ha.disposeAsync,{name:"disposeAsync"});jN(Ha,Gqr,Rs,{nonWritable:!0});var Vqr=$N&&$N<136;Mqr({global:!0,constructor:!0,forced:Vqr},{AsyncDisposableStack:gp})});var zN=o(function(){"use strict";var Kqr=R(),zqr=W(),Yqr=M(),Jqr=vr(),Xqr=$(),Qqr=N(),WN=sp(),VN=Qqr("asyncDispose"),KN=Yqr("Promise");Xqr(WN,VN)||zqr(WN,VN,function(){var r=this;return new KN(function(e,t){var a=Jqr(r,"return");a?KN.resolve(Kqr(a,r)).then(function(){e(void 0)},t):e(void 0)})})});var YN=o(function(){"use strict";var Zqr=h(),rpr=Lr(),epr=L(),tpr=w(),apr=E(),ipr=!apr(function(){Reflect.apply(function(){})});Zqr({target:"Reflect",stat:!0,forced:ipr},{apply:function(e,t,a){return rpr(epr(e),t,tpr(a))}})});var tF=o(function(){"use strict";var npr=h(),upr=M(),yp=Lr(),opr=Yl(),JN=vs(),spr=w(),XN=_(),vpr=or(),ZN=E(),Ep=upr("Reflect","construct"),cpr=Object.prototype,fpr=[].push,rF=ZN(function(){function r(){}return!(Ep(function(){},[],r)instanceof r)}),eF=!ZN(function(){Ep(function(){})}),QN=rF||eF;npr({target:"Reflect",stat:!0,forced:QN,sham:QN},{construct:function(e,t){JN(e);var a=arguments.length<3?e:JN(arguments[2]);if(spr(t),eF&&!rF)return Ep(e,t,a);if(e===a){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var i=[null];return yp(fpr,i,t),new(yp(opr,e,i))}var n=a.prototype,u=vpr(XN(n)?n:cpr),s=yp(e,u,t);return XN(s)?s:u}})});var uF=o(function(){"use strict";var lpr=h(),hpr=P(),aF=w(),qpr=Wr(),nF=z(),iF=j(),ppr=E(),dpr=TypeError,gpr=ppr(function(){Reflect.defineProperty(nF.f({},1,{value:1}),1,{value:2})});lpr({target:"Reflect",stat:!0,forced:gpr,sham:!hpr},{defineProperty:function(e,t,a){aF(e);var i=qpr(t),n,u;if(aF(a),("get"in a||"set"in a)&&("get"in a&&!iF(n=a.get)&&n!==void 0||"set"in a&&!iF(u=a.set)&&u!==void 0||"value"in a||"writable"in a))throw new dpr("Invalid property descriptor");try{return nF.f(e,i,a),!0}catch(s){return!1}}})});var oF=o(function(){"use strict";var ypr=h(),Epr=w(),Spr=cr().f,Ipr=Wr();ypr({target:"Reflect",stat:!0},{deleteProperty:function(e,t){Epr(e);var a=Ipr(t),i=Spr(e,a);return i&&!i.configurable?!1:delete e[a]}})});var Sp=o(function(Wkr,vF){"use strict";var sF=$();vF.exports=function(r){return r!==void 0&&(sF(r,"value")||sF(r,"writable"))}});var lF=o(function(){"use strict";var Opr=h(),mpr=R(),Tpr=_(),cF=w(),bpr=Sp(),Rpr=cr(),Apr=Er(),wpr=Wr(),fF=function(r,e,t){if(cF(r)===t)return r[e];var a=Rpr.f(r,e);if(a)return bpr(a)?a.value:a.get===void 0?void 0:mpr(a.get,t);var i=Apr(r);if(Tpr(i))return fF(i,e,t)};Opr({target:"Reflect",stat:!0},{get:function(e,t){return fF(cF(e),wpr(t),arguments.length<3?e:arguments[2])}})});var hF=o(function(){"use strict";var xpr=h(),Ppr=P(),Cpr=w(),_pr=cr();xpr({target:"Reflect",stat:!0,sham:!Ppr},{getOwnPropertyDescriptor:function(e,t){return _pr.f(Cpr(e),t)}})});var qF=o(function(){"use strict";var Npr=h(),Fpr=w(),Dpr=Er(),Mpr=io();Npr({target:"Reflect",stat:!0,sham:!Mpr},{getPrototypeOf:function(e){return Dpr(Fpr(e))}})});var pF=o(function(){"use strict";var Lpr=h();Lpr({target:"Reflect",stat:!0},{has:function(e,t){return t in e}})});var dF=o(function(){"use strict";var $pr=h(),Upr=w(),Bpr=Xo();$pr({target:"Reflect",stat:!0},{isExtensible:function(e){return Upr(e),Bpr(e)}})});var gF=o(function(){"use strict";var jpr=h(),kpr=Nu();jpr({target:"Reflect",stat:!0},{ownKeys:kpr})});var yF=o(function(){"use strict";var Gpr=h(),Hpr=M(),Wpr=w(),Vpr=ot();Gpr({target:"Reflect",stat:!0,sham:!Vpr},{preventExtensions:function(e){Wpr(e);try{var t=Hpr("Object","preventExtensions");return t&&t(e),!0}catch(a){return!1}}})});var bF=o(function(){"use strict";var Kpr=h(),zpr=R(),mF=w(),EF=_(),SF=Sp(),Ypr=E(),Ip=z(),IF=cr(),Jpr=Er(),OF=xr(),Xpr=Wr(),TF=function(r,e,t,a){var i=IF.f(mF(r),e),n,u,s;if(!i){if(EF(u=Jpr(r)))return TF(u,e,t,a);i=OF(0)}if(SF(i)){if(i.writable===!1||!EF(a))return!1;if(n=IF.f(a,e)){if(!SF(n)||n.writable===!1)return!1;Ip.f(a,e,{value:t})}else try{Ip.f(a,e,OF(0,t))}catch(v){return!1}}else{if(s=i.set,s===void 0)return!1;zpr(s,a,t)}return!0},Qpr=Ypr(function(){var r=function(){},e=Ip.f(new r,"a",{configurable:!0});return Reflect.set(r.prototype,"a",1,e)!==!1});Kpr({target:"Reflect",stat:!0,forced:Qpr},{set:function(e,t,a){return TF(mF(e),Xpr(t),a,arguments.length<4?e:arguments[3])}})});var AF=o(function(){"use strict";var Zpr=h(),rdr=w(),edr=df(),RF=$r();RF&&Zpr({target:"Reflect",stat:!0},{setPrototypeOf:function(e,t){rdr(e),edr(t);try{return RF(e,t),!0}catch(a){return!1}}})});var wF=o(function(){"use strict";var tdr=h(),adr=T(),idr=Sr();tdr({global:!0},{Reflect:{}});idr(adr.Reflect,"Reflect",!0)});var Fn=o(function(lGr,xF){"use strict";var ndr=_(),udr=sr(),odr=N(),sdr=odr("match");xF.exports=function(r){var e;return ndr(r)&&((e=r[sdr])!==void 0?!!e:udr(r)==="RegExp")}});var Op=o(function(hGr,CF){"use strict";var vdr=T(),cdr=E(),PF=vdr.RegExp,fdr=!cdr(function(){var r=!0;try{PF(".","d")}catch(v){r=!1}var e={},t="",a=r?"dgimsy":"gimsy",i=function(v,f){Object.defineProperty(e,v,{get:function(){return t+=f,!0}})},n={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(n.hasIndices="d");for(var u in n)i(u,n[u]);var s=Object.getOwnPropertyDescriptor(PF.prototype,"flags").get.call(e);return s!==a||t!==a});CF.exports={correct:fdr}});var As=o(function(qGr,_F){"use strict";var ldr=w();_F.exports=function(){var r=ldr(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e}});var je=o(function(pGr,FF){"use strict";var hdr=R(),qdr=$(),pdr=gr(),NF=Op(),ddr=As(),gdr=RegExp.prototype;FF.exports=NF.correct?function(r){return r.flags}:function(r){return!NF.correct&&pdr(gdr,r)&&!qdr(r,"flags")?hdr(ddr,r):r.flags}});var Dn=o(function(dGr,DF){"use strict";var mp=E(),ydr=T(),Tp=ydr.RegExp,bp=mp(function(){var r=Tp("a","y");return r.lastIndex=2,r.exec("abcd")!==null}),Edr=bp||mp(function(){return!Tp("a","y").sticky}),Sdr=bp||mp(function(){var r=Tp("^r","gy");return r.lastIndex=2,r.exec("str")!==null});DF.exports={BROKEN_CARET:Sdr,MISSED_STICKY:Edr,UNSUPPORTED_Y:bp}});var ws=o(function(gGr,MF){"use strict";var Idr=E(),Odr=T(),mdr=Odr.RegExp;MF.exports=Idr(function(){var r=mdr(".","s");return!(r.dotAll&&r.test("\n")&&r.flags==="s")})});var Rp=o(function(yGr,LF){"use strict";var Tdr=E(),bdr=T(),Rdr=bdr.RegExp;LF.exports=Tdr(function(){var r=Rdr("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"})});var HF=o(function(){"use strict";var Adr=P(),_p=T(),Mn=S(),wdr=ca(),xdr=rt(),Pdr=fr(),Cdr=or(),_dr=Ye().f,$F=gr(),Ndr=Fn(),UF=F(),Fdr=je(),BF=Dn(),Ddr=gf(),Mdr=W(),Ldr=E(),$dr=$(),Udr=Y().enforce,Bdr=$t(),jdr=N(),jF=ws(),kF=Rp(),kdr=jdr("match"),ft=_p.RegExp,Wa=ft.prototype,Gdr=_p.SyntaxError,Hdr=Mn(Wa.exec),Va=Mn("".charAt),Pp=Mn("".replace),Cp=Mn("".indexOf),Wdr=Mn("".slice),Vdr=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,Kt=/a/g,Ap=/a/g,Kdr=new ft(Kt)!==Kt,GF=BF.MISSED_STICKY,zdr=BF.UNSUPPORTED_Y,Ydr=Adr&&(!Kdr||GF||jF||kF||Ldr(function(){return Ap[kdr]=!1,ft(Kt)!==Kt||ft(Ap)===Ap||String(ft(Kt,"i"))!=="/a/i"})),Jdr=function(r){for(var e=r.length,t=0,a="",i=!1,n;t<e;t++){if(n=Va(r,t),n==="\\"){a+=n+Va(r,++t);continue}!i&&n==="."?a+="[\\s\\S]":(n==="["?i=!0:n==="]"&&(i=!1),a+=n)}return a},Xdr=function(r){for(var e=r.length,t=0,a="",i=[],n=Cdr(null),u=!1,s=!1,v=0,f="",c;t<e;t++){if(c=Va(r,t),c==="\\"){if(c+=Va(r,++t),!s&&Va(c,1)==="\\"){a+="\\x5c";continue}}else if(c==="]")u=!1;else if(!u)switch(!0){case c==="[":u=!0;break;case c==="(":a+=c,Hdr(Vdr,Wdr(r,t+1))?(t+=2,s=!0,v++):Va(r,t+1)!=="?"&&v++;continue;case(c===">"&&s):if(f===""||$dr(n,f))throw new Gdr("Invalid capture group name");n[f]=!0,i[i.length]=[f,v],s=!1,f="";continue}s?f+=c:a+=c}for(var l=0;l<i.length;l++)for(var q="\\k<"+i[l][0]+">",p="\\"+i[l][1];Cp(a,q)>-1;)a=Pp(a,q,p);return[a,i]};if(wdr("RegExp",Ydr)){for(ct=function(e,t){var a=$F(Wa,this),i=Ndr(e),n=t===void 0,u=[],s=e,v,f,c,l,q,p;if(!a&&i&&n&&e.constructor===ct)return e;if((i||$F(Wa,e))&&(e=e.source,n&&(t=Fdr(s))),e=e===void 0?"":UF(e),t=t===void 0?"":UF(t),s=e,jF&&"dotAll"in Kt&&(f=!!t&&Cp(t,"s")>-1,f&&(t=Pp(t,/s/g,""))),v=t,GF&&"sticky"in Kt&&(c=!!t&&Cp(t,"y")>-1,c&&zdr&&(t=Pp(t,/y/g,""))),kF&&(l=Xdr(e),e=l[0],u=l[1]),q=xdr(ft(e,t),a?this:Wa,ct),(f||c||u.length)&&(p=Udr(q),f&&(p.dotAll=!0,p.raw=ct(Jdr(e),v)),c&&(p.sticky=!0),u.length&&(p.groups=u)),e!==s)try{Pdr(q,"source",s===""?"(?:)":s)}catch(g){}return q},wp=_dr(ft),xp=0;wp.length>xp;)Ddr(ct,ft,wp[xp++]);Wa.constructor=ct,ct.prototype=Wa,Mdr(_p,"RegExp",ct,{constructor:!0})}var ct,wp,xp;Bdr("RegExp")});var Ln=o(function(IGr,WF){"use strict";var Qdr=TypeError;WF.exports=function(r){if(typeof r=="string")return r;throw new Qdr("Argument is not a string")}});var XF=o(function(){"use strict";var Zdr=h(),$n=S(),rgr=Ln(),egr=$(),VF=rn().start,tgr=Ca(),agr=Array,KF=RegExp.escape,zF=$n("".charAt),Dp=$n("".charCodeAt),igr=$n(1.1.toString),ngr=$n([].join),JF=/^[0-9a-z]/i,ugr=/^[$()*+./?[\\\]^{|}]/,ogr=RegExp("^[!\"#%&',\\-:;<=>@`~"+tgr+"]"),Np=$n(JF.exec),YF={"	":"t","\n":"n","\v":"v","\f":"f","\r":"r"},Fp=function(r){var e=igr(Dp(r,0),16);return e.length<3?"\\x"+VF(e,2,"0"):"\\u"+VF(e,4,"0")},sgr=!KF||KF("ab\uD840\uDC2A")!=="\\x61b\uD840\uDC2A";Zdr({target:"RegExp",stat:!0,forced:sgr},{escape:function(e){rgr(e);for(var t=e.length,a=agr(t),i=0;i<t;i++){var n=zF(e,i);if(i===0&&Np(JF,n))a[i]=Fp(n);else if(egr(YF,n))a[i]="\\"+YF[n];else if(Np(ugr,n))a[i]="\\"+n;else if(Np(ogr,n))a[i]=Fp(n);else{var u=Dp(n,0);(u&63488)!==55296?a[i]=n:u>=56320||i+1>=t||(Dp(e,i+1)&64512)!==56320?a[i]=Fp(n):(a[i]=n,a[++i]=zF(e,i))}}return ngr(a,"")}})});var ZF=o(function(){"use strict";var vgr=P(),cgr=ws(),fgr=sr(),lgr=er(),hgr=Y().get,QF=RegExp.prototype,qgr=TypeError;vgr&&cgr&&lgr(QF,"dotAll",{configurable:!0,get:function(){if(this!==QF){if(fgr(this)==="RegExp")return!!hgr(this).dotAll;throw new qgr("Incompatible receiver, RegExp required")}}})});var Cs=o(function(RGr,aD){"use strict";var Ka=R(),Ps=S(),pgr=F(),dgr=As(),ggr=Dn(),ygr=Tt(),Egr=or(),Sgr=Y().get,Igr=ws(),Ogr=Rp(),mgr=ygr("native-string-replace",String.prototype.replace),xs=RegExp.prototype.exec,Mp=xs,Tgr=Ps("".charAt),bgr=Ps("".indexOf),Rgr=Ps("".replace),rD=Ps("".slice),Lp=function(){var r=/a/,e=/b*/g;return Ka(xs,r,"a"),Ka(xs,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),tD=ggr.BROKEN_CARET,$p=/()??/.exec("")[1]!==void 0,Agr=Lp||$p||tD||Igr||Ogr,eD=function(r,e){for(var t=r.groups=Egr(null),a=0;a<e.length;a++){var i=e[a];t[i[0]]=r[i[1]]}};Agr&&(Mp=function(e){var t=this,a=Sgr(t),i=pgr(e),n=a.raw,u,s,v;if(n)return n.lastIndex=t.lastIndex,u=Ka(Mp,n,i),t.lastIndex=n.lastIndex,u&&a.groups&&eD(u,a.groups),u;var f=a.groups,c=tD&&t.sticky,l=Ka(dgr,t),q=t.source,p=0,g=i;if(c){l=Rgr(l,"y",""),bgr(l,"g")===-1&&(l+="g"),g=rD(i,t.lastIndex);var y=t.lastIndex>0&&Tgr(i,t.lastIndex-1);t.lastIndex>0&&(!t.multiline||t.multiline&&y!=="\n"&&y!=="\r"&&y!=="\u2028"&&y!=="\u2029")&&(q="(?: (?:"+q+"))",g=" "+g,p++),s=new RegExp("^(?:"+q+")",l)}$p&&(s=new RegExp("^"+q+"$(?!\\s)",l)),Lp&&(v=t.lastIndex);var d=Ka(xs,c?s:t,g);return c?d?(d.input=i,d[0]=rD(d[0],p),d.index=t.lastIndex,t.lastIndex+=d[0].length):t.lastIndex=0:Lp&&d&&(t.lastIndex=t.global?d.index+d[0].length:v),$p&&d&&d.length>1&&Ka(mgr,d[0],s,function(){for(var O=1;O<arguments.length-2;O++)arguments[O]===void 0&&(d[O]=void 0)}),d&&f&&eD(d,f),d});aD.exports=Mp});var _s=o(function(){"use strict";var wgr=h(),iD=Cs();wgr({target:"RegExp",proto:!0,forced:/./.exec!==iD},{exec:iD})});var uD=o(function(){"use strict";var xgr=P(),Pgr=er(),nD=Op(),Cgr=As();xgr&&!nD.correct&&(Pgr(RegExp.prototype,"flags",{configurable:!0,get:Cgr}),nD.correct=!0)});var sD=o(function(){"use strict";var _gr=P(),Ngr=Dn().MISSED_STICKY,Fgr=sr(),Dgr=er(),Mgr=Y().get,oD=RegExp.prototype,Lgr=TypeError;_gr&&Ngr&&Dgr(oD,"sticky",{configurable:!0,get:function(){if(this!==oD){if(Fgr(this)==="RegExp")return!!Mgr(this).sticky;throw new Lgr("Incompatible receiver, RegExp required")}}})});var fD=o(function(){"use strict";_s();var $gr=h(),vD=R(),Ugr=j(),cD=w(),Bgr=F(),jgr=function(){var r=!1,e=/[ac]/;return e.exec=function(){return r=!0,/./.exec.apply(this,arguments)},e.test("abc")===!0&&r}(),kgr=/./.test;$gr({target:"RegExp",proto:!0,forced:!jgr},{test:function(r){var e=cD(this),t=Bgr(r),a=e.exec;if(!Ugr(a))return vD(kgr,e,t);var i=vD(a,e,t);return i===null?!1:(cD(i),!0)}})});var pD=o(function(){"use strict";var Ggr=bt().PROPER,Hgr=W(),Wgr=w(),lD=F(),Vgr=E(),Kgr=je(),Up="toString",hD=RegExp.prototype,qD=hD[Up],zgr=Vgr(function(){return qD.call({source:"a",flags:"b"})!=="/a/b"}),Ygr=Ggr&&qD.name!==Up;(zgr||Ygr)&&Hgr(hD,Up,function(){var e=Wgr(this),t=lD(e.source),a=lD(Kgr(e));return"/"+t+"/"+a},{unsafe:!0})});var dD=o(function(){"use strict";var Jgr=fn(),Xgr=Yh();Jgr("Set",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},Xgr)});var gD=o(function(){"use strict";dD()});var Jr=o(function(jGr,yD){"use strict";var Bp=S(),Ns=Set.prototype;yD.exports={Set:Set,add:Bp(Ns.add),has:Bp(Ns.has),remove:Bp(Ns.delete),proto:Ns}});var lt=o(function(kGr,ED){"use strict";var Qgr=Jr().has;ED.exports=function(r){return Qgr(r),r}});var ht=o(function(GGr,SD){"use strict";var Zgr=R();SD.exports=function(r,e,t){for(var a=t?r:r.iterator,i=r.next,n,u;!(n=Zgr(i,a)).done;)if(u=e(n.value),u!==void 0)return u}});var zt=o(function(HGr,bD){"use strict";var ID=S(),ryr=ht(),OD=Jr(),eyr=OD.Set,mD=OD.proto,tyr=ID(mD.forEach),TD=ID(mD.keys),ayr=TD(new eyr).next;bD.exports=function(r,e,t){return t?ryr({iterator:TD(r),next:ayr},e):tyr(r,e)}});var Fs=o(function(WGr,AD){"use strict";var RD=Jr(),iyr=zt(),nyr=RD.Set,uyr=RD.add;AD.exports=function(r){var e=new nyr;return iyr(r,function(t){uyr(e,t)}),e}});var za=o(function(VGr,wD){"use strict";var oyr=Di(),syr=Jr();wD.exports=oyr(syr.proto,"size","get")||function(r){return r.size}});var qt=o(function(KGr,FD){"use strict";var xD=L(),_D=w(),PD=R(),vyr=rr(),cyr=nr(),CD="Invalid size",fyr=RangeError,lyr=TypeError,hyr=Math.max,ND=function(r,e){this.set=r,this.size=hyr(e,0),this.has=xD(r.has),this.keys=xD(r.keys)};ND.prototype={getIterator:function(){return cyr(_D(PD(this.keys,this.set)))},includes:function(r){return PD(this.has,this.set,r)}};FD.exports=function(r){_D(r);var e=+r.size;if(e!==e)throw new lyr(CD);var t=vyr(e);if(t<0)throw new fyr(CD);return new ND(r,t)}});var $D=o(function(zGr,LD){"use strict";var qyr=lt(),MD=Jr(),pyr=Fs(),dyr=za(),gyr=qt(),yyr=zt(),Eyr=ht(),Syr=MD.has,DD=MD.remove;LD.exports=function(e){var t=qyr(this),a=gyr(e),i=pyr(t);return dyr(i)<=a.size?yyr(i,function(n){a.includes(n)&&DD(i,n)}):Eyr(a.getIterator(),function(n){Syr(i,n)&&DD(i,n)}),i}});var pt=o(function(YGr,jD){"use strict";var Iyr=M(),UD=function(r){return{size:r,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},BD=function(r){return{size:r,has:function(){return!0},keys:function(){throw new Error("e")}}};jD.exports=function(r,e){var t=Iyr("Set");try{new t()[r](UD(0));try{return new t()[r](UD(-1)),!1}catch(i){if(!e)return!0;try{return new t()[r](BD(-1/0)),!1}catch(n){var a=new t([1,2]);return e(a[r](BD(1/0)))}}}catch(i){return!1}}});var kD=o(function(){"use strict";var Oyr=h(),myr=$D(),Tyr=E(),byr=pt(),Ryr=!byr("difference",function(r){return r.size===0}),Ayr=Ryr||Tyr(function(){var r={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var a=t++>1;return e.has(1)&&e.clear(),{done:a,value:2}}}}},e=new Set([1,2,3,4]);return e.difference(r).size!==3});Oyr({target:"Set",proto:!0,real:!0,forced:Ayr},{difference:myr})});var WD=o(function(QGr,HD){"use strict";var wyr=lt(),jp=Jr(),xyr=za(),Pyr=qt(),Cyr=zt(),_yr=ht(),Nyr=jp.Set,GD=jp.add,Fyr=jp.has;HD.exports=function(e){var t=wyr(this),a=Pyr(e),i=new Nyr;return xyr(t)>a.size?_yr(a.getIterator(),function(n){Fyr(t,n)&&GD(i,n)}):Cyr(t,function(n){a.includes(n)&&GD(i,n)}),i}});var VD=o(function(){"use strict";var Dyr=h(),Myr=E(),Lyr=WD(),$yr=pt(),Uyr=!$yr("intersection",function(r){return r.size===2&&r.has(1)&&r.has(2)})||Myr(function(){return String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))!=="3,2"});Dyr({target:"Set",proto:!0,real:!0,forced:Uyr},{intersection:Lyr})});var zD=o(function(e6r,KD){"use strict";var Byr=lt(),jyr=Jr().has,kyr=za(),Gyr=qt(),Hyr=zt(),Wyr=ht(),Vyr=Q();KD.exports=function(e){var t=Byr(this),a=Gyr(e);if(kyr(t)<=a.size)return Hyr(t,function(n){if(a.includes(n))return!1},!0)!==!1;var i=a.getIterator();return Wyr(i,function(n){if(jyr(t,n))return Vyr(i.iterator,"normal",!1)})!==!1}});var YD=o(function(){"use strict";var Kyr=h(),zyr=zD(),Yyr=pt(),Jyr=!Yyr("isDisjointFrom",function(r){return!r});Kyr({target:"Set",proto:!0,real:!0,forced:Jyr},{isDisjointFrom:zyr})});var XD=o(function(i6r,JD){"use strict";var Xyr=lt(),Qyr=za(),Zyr=zt(),rEr=qt();JD.exports=function(e){var t=Xyr(this),a=rEr(e);return Qyr(t)>a.size?!1:Zyr(t,function(i){if(!a.includes(i))return!1},!0)!==!1}});var QD=o(function(){"use strict";var eEr=h(),tEr=XD(),aEr=pt(),iEr=!aEr("isSubsetOf",function(r){return r});eEr({target:"Set",proto:!0,real:!0,forced:iEr},{isSubsetOf:tEr})});var rM=o(function(o6r,ZD){"use strict";var nEr=lt(),uEr=Jr().has,oEr=za(),sEr=qt(),vEr=ht(),cEr=Q();ZD.exports=function(e){var t=nEr(this),a=sEr(e);if(oEr(t)<a.size)return!1;var i=a.getIterator();return vEr(i,function(n){if(!uEr(t,n))return cEr(i.iterator,"normal",!1)})!==!1}});var eM=o(function(){"use strict";var fEr=h(),lEr=rM(),hEr=pt(),qEr=!hEr("isSupersetOf",function(r){return!r});fEr({target:"Set",proto:!0,real:!0,forced:qEr},{isSupersetOf:lEr})});var aM=o(function(c6r,tM){"use strict";var pEr=lt(),kp=Jr(),dEr=Fs(),gEr=qt(),yEr=ht(),EEr=kp.add,SEr=kp.has,IEr=kp.remove;tM.exports=function(e){var t=pEr(this),a=gEr(e).getIterator(),i=dEr(t);return yEr(a,function(n){SEr(t,n)?IEr(i,n):EEr(i,n)}),i}});var Gp=o(function(f6r,iM){"use strict";iM.exports=function(r){try{var e=new Set,t={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},a=e[r](t);return a.size===1&&a.values().next().value===4}catch(i){return!1}}});var nM=o(function(){"use strict";var OEr=h(),mEr=aM(),TEr=Gp(),bEr=pt(),REr=!bEr("symmetricDifference")||!TEr("symmetricDifference");OEr({target:"Set",proto:!0,real:!0,forced:REr},{symmetricDifference:mEr})});var oM=o(function(q6r,uM){"use strict";var AEr=lt(),wEr=Jr().add,xEr=Fs(),PEr=qt(),CEr=ht();uM.exports=function(e){var t=AEr(this),a=PEr(e).getIterator(),i=xEr(t);return CEr(a,function(n){wEr(i,n)}),i}});var sM=o(function(){"use strict";var _Er=h(),NEr=oM(),FEr=Gp(),DEr=pt(),MEr=!DEr("union")||!FEr("union");_Er({target:"Set",proto:!0,real:!0,forced:MEr},{union:NEr})});var vM=o(function(){"use strict";var LEr=h(),$Er=S(),UEr=J(),BEr=rr(),jEr=F(),kEr=E(),GEr=$Er("".charAt),HEr=kEr(function(){return"\uD842\uDFB7".at(-2)!=="\uD842"});LEr({target:"String",proto:!0,forced:HEr},{at:function(e){var t=jEr(UEr(this)),a=t.length,i=BEr(e),n=i>=0?i:a+i;return n<0||n>=a?void 0:GEr(t,n)}})});var Un=o(function(E6r,lM){"use strict";var Hp=S(),WEr=rr(),VEr=F(),KEr=J(),zEr=Hp("".charAt),cM=Hp("".charCodeAt),YEr=Hp("".slice),fM=function(r){return function(e,t){var a=VEr(KEr(e)),i=WEr(t),n=a.length,u,s;return i<0||i>=n?r?"":void 0:(u=cM(a,i),u<55296||u>56319||i+1===n||(s=cM(a,i+1))<56320||s>57343?r?zEr(a,i):u:r?YEr(a,i,i+2):(u-55296<<10)+(s-56320)+65536)}};lM.exports={codeAt:fM(!1),charAt:fM(!0)}});var hM=o(function(){"use strict";var JEr=h(),XEr=Un().codeAt;JEr({target:"String",proto:!0},{codePointAt:function(e){return XEr(this,e)}})});var Ds=o(function(O6r,qM){"use strict";var QEr=Fn(),ZEr=TypeError;qM.exports=function(r){if(QEr(r))throw new ZEr("The method doesn't accept regular expressions");return r}});var Ms=o(function(m6r,pM){"use strict";var rSr=N(),eSr=rSr("match");pM.exports=function(r){var e=/./;try{"/./"[r](e)}catch(t){try{return e[eSr]=!1,"/./"[r](e)}catch(a){}}return!1}});var yM=o(function(){"use strict";var tSr=h(),aSr=Je(),iSr=cr().f,nSr=Vr(),dM=F(),uSr=Ds(),oSr=J(),sSr=Ms(),vSr=D(),cSr=aSr("".slice),fSr=Math.min,gM=sSr("endsWith"),lSr=!vSr&&!gM&&!!function(){var r=iSr(String.prototype,"endsWith");return r&&!r.writable}();tSr({target:"String",proto:!0,forced:!lSr&&!gM},{endsWith:function(e){var t=dM(oSr(this));uSr(e);var a=dM(e),i=arguments.length>1?arguments[1]:void 0,n=t.length,u=i===void 0?n:fSr(nSr(i),n);return cSr(t,u-a.length,u)===a}})});var Wp=o(function(){"use strict";var hSr=h(),qSr=S(),pSr=qe(),dSr=RangeError,EM=String.fromCharCode,SM=String.fromCodePoint,gSr=qSr([].join),ySr=!!SM&&SM.length!==1;hSr({target:"String",stat:!0,arity:1,forced:ySr},{fromCodePoint:function(e){for(var t=[],a=arguments.length,i=0,n;a>i;){if(n=+arguments[i],pSr(n,1114111)!==n)throw new dSr(n+" is not a valid code point");t[i++]=n<65536?EM(n):EM(((n-=65536)>>10)+55296,n%1024+56320)}return gSr(t,"")}})});var OM=o(function(){"use strict";var ESr=h(),SSr=S(),ISr=Ds(),OSr=J(),IM=F(),mSr=Ms(),TSr=SSr("".indexOf);ESr({target:"String",proto:!0,forced:!mSr("includes")},{includes:function(e){return!!~TSr(IM(OSr(this)),IM(ISr(e)),arguments.length>1?arguments[1]:void 0)}})});var TM=o(function(){"use strict";var bSr=h(),RSr=S(),ASr=J(),wSr=F(),mM=RSr("".charCodeAt);bSr({target:"String",proto:!0},{isWellFormed:function(){for(var e=wSr(ASr(this)),t=e.length,a=0;a<t;a++){var i=mM(e,a);if((i&63488)===55296&&(i>=56320||++a>=t||(mM(e,a)&64512)!==56320))return!1}return!0}})});var Vp=o(function(){"use strict";var xSr=Un().charAt,PSr=F(),RM=Y(),CSr=Eo(),bM=Fe(),AM="String Iterator",_Sr=RM.set,NSr=RM.getterFor(AM);CSr(String,"String",function(r){_Sr(this,{type:AM,string:PSr(r),index:0})},function(){var e=NSr(this),t=e.string,a=e.index,i;return a>=t.length?bM(void 0,!0):(i=xSr(t,a),e.index+=i.length,bM(i,!1))})});var Bn=o(function(F6r,_M){"use strict";_s();var wM=R(),xM=W(),FSr=Cs(),PM=E(),CM=N(),DSr=fr(),MSr=CM("species"),Kp=RegExp.prototype;_M.exports=function(r,e,t,a){var i=CM(r),n=!PM(function(){var f={};return f[i]=function(){return 7},""[r](f)!==7}),u=n&&!PM(function(){var f=!1,c=/a/;if(r==="split"){var l={};l[MSr]=function(){return c},c={constructor:l,flags:""},c[i]=/./[i]}return c.exec=function(){return f=!0,null},c[i](""),!f});if(!n||!u||t){var s=/./[i],v=e(i,""[r],function(f,c,l,q,p){var g=c.exec;return g===FSr||g===Kp.exec?n&&!p?{done:!0,value:wM(s,c,l,q)}:{done:!0,value:wM(f,l,c,q)}:{done:!1}});xM(String.prototype,r,v[0]),xM(Kp,i,v[1])}a&&DSr(Kp[i],"sham",!0)}});var jn=o(function(D6r,NM){"use strict";var LSr=Un().charAt;NM.exports=function(r,e,t){return e+(t&&LSr(r,e).length||1)}});var Ya=o(function(M6r,DM){"use strict";var FM=R(),$Sr=w(),USr=j(),BSr=sr(),jSr=Cs(),kSr=TypeError;DM.exports=function(r,e){var t=r.exec;if(USr(t)){var a=FM(t,r,e);return a!==null&&$Sr(a),a}if(BSr(r)==="RegExp")return FM(jSr,r,e);throw new kSr("RegExp#exec called on incompatible receiver")}});var LM=o(function(){"use strict";var GSr=R(),HSr=S(),WSr=Bn(),VSr=w(),KSr=_(),zSr=Vr(),Ls=F(),YSr=J(),JSr=vr(),XSr=jn(),QSr=je(),MM=Ya(),zp=HSr("".indexOf);WSr("match",function(r,e,t){return[function(i){var n=YSr(this),u=KSr(i)?JSr(i,r):void 0;if(u)return GSr(u,i,n);var s=Ls(n);return new RegExp(i)[r](s)},function(a){var i=VSr(this),n=Ls(a),u=t(e,i,n);if(u.done)return u.value;var s=Ls(QSr(i));if(!~zp(s,"g"))return MM(i,n);var v=!!~zp(s,"u")||!!~zp(s,"v");i.lastIndex=0;for(var f=[],c=0,l;(l=MM(i,n))!==null;){var q=Ls(l[0]);f[c]=q,q===""&&(i.lastIndex=XSr(n,zSr(i.lastIndex),v)),c++}return c===0?null:f}]})});var KM=o(function(){"use strict";var ZSr=h(),$M=R(),jM=Je(),rIr=po(),$s=Fe(),UM=J(),kM=Vr(),kn=F(),eIr=w(),tIr=_(),aIr=sr(),iIr=Fn(),GM=je(),nIr=vr(),uIr=W(),oIr=E(),sIr=N(),vIr=Tn(),cIr=jn(),fIr=Ya(),HM=Y(),Jp=D(),Bs=sIr("matchAll"),WM="RegExp String",VM=WM+" Iterator",lIr=HM.set,hIr=HM.getterFor(VM),BM=RegExp.prototype,qIr=TypeError,Us=jM("".indexOf),js=jM("".matchAll),Yp=!!js&&!oIr(function(){js("a",/./)}),pIr=rIr(function(e,t,a,i){lIr(this,{type:VM,regexp:e,string:t,global:a,unicode:i,done:!1})},WM,function(){var e=hIr(this);if(e.done)return $s(void 0,!0);var t=e.regexp,a=e.string,i=fIr(t,a);return i===null?(e.done=!0,$s(void 0,!0)):e.global?(kn(i[0])===""&&(t.lastIndex=cIr(a,kM(t.lastIndex),e.unicode)),$s(i,!1)):(e.done=!0,$s(i,!1))}),Xp=function(r){var e=eIr(this),t=kn(r),a=vIr(e,RegExp),i=kn(GM(e)),n=new a(a===RegExp?e.source:e,i),u=!!~Us(i,"g"),s=!!~Us(i,"u")||!!~Us(i,"v");return n.lastIndex=kM(e.lastIndex),new pIr(n,t,u,s)};ZSr({target:"String",proto:!0,forced:Yp},{matchAll:function(e){var t=UM(this),a,i,n,u;if(tIr(e)){if(iIr(e)&&(a=kn(UM(GM(e))),!~Us(a,"g")))throw new qIr("`.matchAll` does not allow non-global regexes");if(Yp)return js(t,e);if(n=nIr(e,Bs),n===void 0&&Jp&&aIr(e)==="RegExp"&&(n=Xp),n)return $M(n,e,t)}else if(Yp)return js(t,e);return i=kn(t),u=new RegExp(e,"g"),Jp?$M(Xp,u,i):u[Bs](i)}});Jp||Bs in BM||uIr(BM,Bs,Xp)});var Qp=o(function(j6r,zM){"use strict";var dIr=te();zM.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(dIr)});var YM=o(function(){"use strict";var gIr=h(),yIr=rn().end,EIr=Qp();gIr({target:"String",proto:!0,forced:EIr},{padEnd:function(e){return yIr(this,e,arguments.length>1?arguments[1]:void 0)}})});var JM=o(function(){"use strict";var SIr=h(),IIr=rn().start,OIr=Qp();SIr({target:"String",proto:!0,forced:OIr},{padStart:function(e){return IIr(this,e,arguments.length>1?arguments[1]:void 0)}})});var r2=o(function(){"use strict";var mIr=h(),ZM=S(),TIr=ur(),bIr=G(),XM=F(),RIr=H(),QM=ZM([].push),AIr=ZM([].join);mIr({target:"String",stat:!0},{raw:function(e){var t=TIr(bIr(e).raw),a=RIr(t);if(!a)return"";for(var i=arguments.length,n=[],u=0;;){if(QM(n,XM(t[u++])),u===a)return AIr(n,"");u<i&&QM(n,XM(arguments[u]))}}})});var e2=o(function(){"use strict";var wIr=h(),xIr=Zi();wIr({target:"String",proto:!0},{repeat:xIr})});var td=o(function(J6r,t2){"use strict";var ed=S(),PIr=G(),CIr=Math.floor,Zp=ed("".charAt),_Ir=ed("".replace),rd=ed("".slice),NIr=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,FIr=/\$([$&'`]|\d{1,2})/g;t2.exports=function(r,e,t,a,i,n){var u=t+r.length,s=a.length,v=FIr;return i!==void 0&&(i=PIr(i),v=NIr),_Ir(n,v,function(f,c){var l;switch(Zp(c,0)){case"$":return"$";case"&":return r;case"`":return rd(e,0,t);case"'":return rd(e,u);case"<":l=i[rd(c,1,-1)];break;default:var q=+c;if(q===0)return f;if(q>s){var p=CIr(q/10);return p===0?f:p<=s?a[p-1]===void 0?Zp(c,1):a[p-1]+Zp(c,1):f}l=a[q-1]}return l===void 0?"":l})}});var u2=o(function(){"use strict";var DIr=Lr(),a2=R(),ks=S(),MIr=Bn(),LIr=E(),$Ir=w(),UIr=j(),BIr=_(),jIr=rr(),kIr=Vr(),Yt=F(),GIr=J(),HIr=jn(),WIr=vr(),VIr=td(),KIr=je(),zIr=Ya(),YIr=N(),id=YIr("replace"),JIr=Math.max,XIr=Math.min,QIr=ks([].concat),ad=ks([].push),Ja=ks("".indexOf),i2=ks("".slice),ZIr=function(r){return r===void 0?r:String(r)},rOr=function(){return"a".replace(/./,"$0")==="$0"}(),n2=function(){return/./[id]?/./[id]("a","$0")==="":!1}(),eOr=!LIr(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});MIr("replace",function(r,e,t){var a=n2?"$":"$0";return[function(n,u){var s=GIr(this),v=BIr(n)?WIr(n,id):void 0;return v?a2(v,n,s,u):a2(e,Yt(s),n,u)},function(i,n){var u=$Ir(this),s=Yt(i),v=UIr(n);v||(n=Yt(n));var f=Yt(KIr(u));if(typeof n=="string"&&!~Ja(n,a)&&!~Ja(n,"$<")&&!~Ja(f,"y")){var c=t(e,u,s,n);if(c.done)return c.value}var l=!!~Ja(f,"g"),q;l&&(q=!!~Ja(f,"u")||!!~Ja(f,"v"),u.lastIndex=0);for(var p=[],g;g=zIr(u,s),!(g===null||(ad(p,g),!l));){var y=Yt(g[0]);y===""&&(u.lastIndex=HIr(s,kIr(u.lastIndex),q))}for(var d="",O=0,x=0;x<p.length;x++){g=p[x];for(var A=Yt(g[0]),U=JIr(XIr(jIr(g.index),s.length),0),V=[],Z,X=1;X<g.length;X++)ad(V,ZIr(g[X]));var Gr=g.groups;if(v){var It=QIr([A],V,U,s);Gr!==void 0&&ad(It,Gr),Z=Yt(DIr(n,void 0,It))}else Z=VIr(A,s,U,V,Gr,n);U>=O&&(d+=i2(s,O,U)+Z,O=U+A.length)}return d+i2(s,O)}]},!eOr||!rOr||n2)});var v2=o(function(){"use strict";var tOr=h(),aOr=R(),ud=S(),o2=J(),iOr=j(),nOr=_(),uOr=Fn(),Xa=F(),oOr=vr(),sOr=je(),vOr=td(),cOr=N(),fOr=D(),lOr=cOr("replace"),hOr=TypeError,nd=ud("".indexOf),qOr=ud("".replace),s2=ud("".slice),pOr=Math.max;tOr({target:"String",proto:!0},{replaceAll:function(e,t){var a=o2(this),i,n,u,s,v,f,c,l,q,p,g=0,y="";if(nOr(e)){if(i=uOr(e),i&&(n=Xa(o2(sOr(e))),!~nd(n,"g")))throw new hOr("`.replaceAll` does not allow non-global regexes");if(u=oOr(e,lOr),u)return aOr(u,e,a,t);if(fOr&&i)return qOr(Xa(a),e,t)}for(s=Xa(a),v=Xa(e),f=iOr(t),f||(t=Xa(t)),c=v.length,l=pOr(1,c),q=nd(s,v);q!==-1;)p=f?Xa(t(v,q,s)):vOr(v,s,q,[],void 0,t),y+=s2(s,g,q)+p,g=q+c,q=q+l>s.length?-1:nd(s,v,q+l);return g<s.length&&(y+=s2(s,g)),y}})});var l2=o(function(){"use strict";var dOr=R(),gOr=Bn(),yOr=w(),EOr=_(),SOr=J(),c2=bq(),f2=F(),IOr=vr(),OOr=Ya();gOr("search",function(r,e,t){return[function(i){var n=SOr(this),u=EOr(i)?IOr(i,r):void 0;if(u)return dOr(u,i,n);var s=f2(n);return new RegExp(i)[r](s)},function(a){var i=yOr(this),n=f2(a),u=t(e,i,n);if(u.done)return u.value;var s=i.lastIndex;c2(s,0)||(i.lastIndex=0);var v=OOr(i,n);return c2(i.lastIndex,s)||(i.lastIndex=s),v===null?-1:v.index}]})});var p2=o(function(){"use strict";var od=R(),fd=S(),mOr=Bn(),TOr=w(),bOr=_(),ROr=J(),AOr=Tn(),wOr=jn(),xOr=Vr(),sd=F(),POr=vr(),COr=je(),h2=Ya(),_Or=Dn(),NOr=E(),Qa=_Or.UNSUPPORTED_Y,FOr=4294967295,DOr=Math.min,vd=fd([].push),cd=fd("".slice),Gs=fd("".indexOf),MOr=!NOr(function(){var r=/(?:)/,e=r.exec;r.exec=function(){return e.apply(this,arguments)};var t="ab".split(r);return t.length!==2||t[0]!=="a"||t[1]!=="b"}),q2="abbc".split(/(b)*/)[1]==="c"||"test".split(/(?:)/,-1).length!==4||"ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||".".split(/()()/).length>1||"".split(/.?/).length;mOr("split",function(r,e,t){var a="0".split(void 0,0).length?function(i,n){return i===void 0&&n===0?[]:od(e,this,i,n)}:e;return[function(n,u){var s=ROr(this),v=bOr(n)?POr(n,r):void 0;return v?od(v,n,s,u):od(a,sd(s),n,u)},function(i,n){var u=TOr(this),s=sd(i);if(!q2){var v=t(a,u,s,n,a!==e);if(v.done)return v.value}var f=AOr(u,RegExp),c=sd(COr(u)),l=!!~Gs(c,"u")||!!~Gs(c,"v");Qa?~Gs(c,"g")||(c+="g"):~Gs(c,"y")||(c+="y");var q=new f(Qa?"^(?:"+u.source+")":u,c),p=n===void 0?FOr:n>>>0;if(p===0)return[];if(s.length===0)return h2(q,s)===null?[s]:[];for(var g=0,y=0,d=[];y<s.length;){q.lastIndex=Qa?0:y;var O=h2(q,Qa?cd(s,y):s),x;if(O===null||(x=DOr(xOr(q.lastIndex+(Qa?y:0)),s.length))===g)y=wOr(s,y,l);else{if(vd(d,cd(s,g,y)),d.length===p)return d;for(var A=1;A<=O.length-1;A++)if(vd(d,O[A]),d.length===p)return d;y=g=x}}return vd(d,cd(s,g)),d}]},q2||!MOr,Qa)});var y2=o(function(){"use strict";var LOr=h(),$Or=Je(),UOr=cr().f,BOr=Vr(),d2=F(),jOr=Ds(),kOr=J(),GOr=Ms(),HOr=D(),WOr=$Or("".slice),VOr=Math.min,g2=GOr("startsWith"),KOr=!HOr&&!g2&&!!function(){var r=UOr(String.prototype,"startsWith");return r&&!r.writable}();LOr({target:"String",proto:!0,forced:!KOr&&!g2},{startsWith:function(e){var t=d2(kOr(this));jOr(e);var a=d2(e),i=BOr(VOr(arguments.length>1?arguments[1]:void 0,t.length));return WOr(t,i,i+a.length)===a}})});var I2=o(function(){"use strict";var zOr=h(),YOr=S(),JOr=J(),E2=rr(),XOr=F(),QOr=YOr("".slice),ZOr=Math.max,S2=Math.min,rmr=!"".substr||"ab".substr(-1)!=="b";zOr({target:"String",proto:!0,forced:rmr},{substr:function(e,t){var a=XOr(JOr(this)),i=a.length,n=E2(e),u=n<0?ZOr(i+n,0):S2(n,i),s=t===void 0?i:E2(t);if(s<=0)return"";var v=S2(u+s,i);return u>=v?"":QOr(a,u,v)}})});var b2=o(function(){"use strict";var emr=h(),T2=R(),qd=S(),tmr=J(),amr=F(),imr=E(),nmr=Array,ld=qd("".charAt),O2=qd("".charCodeAt),umr=qd([].join),hd="".toWellFormed,omr="\uFFFD",m2=hd&&imr(function(){return T2(hd,1)!=="1"});emr({target:"String",proto:!0,forced:m2},{toWellFormed:function(){var e=amr(tmr(this));if(m2)return T2(hd,e);for(var t=e.length,a=nmr(t),i=0;i<t;i++){var n=O2(e,i);(n&63488)!==55296?a[i]=ld(e,i):n>=56320||i+1>=t||(O2(e,i+1)&64512)!==56320?a[i]=omr:(a[i]=ld(e,i),a[++i]=ld(e,i))}return umr(a,"")}})});var Hs=o(function(f8r,w2){"use strict";var smr=bt().PROPER,vmr=E(),R2=Ca(),A2="\u200B\x85\u180E";w2.exports=function(r){return vmr(function(){return!!R2[r]()||A2[r]()!==A2||smr&&R2[r].name!==r})}});var x2=o(function(){"use strict";var cmr=h(),fmr=kt().trim,lmr=Hs();cmr({target:"String",proto:!0,forced:lmr("trim")},{trim:function(){return fmr(this)}})});var pd=o(function(q8r,P2){"use strict";var hmr=kt().end,qmr=Hs();P2.exports=qmr("trimEnd")?function(){return hmr(this)}:"".trimEnd});var _2=o(function(){"use strict";var pmr=h(),C2=pd();pmr({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==C2},{trimRight:C2})});var F2=o(function(){"use strict";_2();var dmr=h(),N2=pd();dmr({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==N2},{trimEnd:N2})});var dd=o(function(E8r,D2){"use strict";var gmr=kt().start,ymr=Hs();D2.exports=ymr("trimStart")?function(){return gmr(this)}:"".trimStart});var L2=o(function(){"use strict";var Emr=h(),M2=dd();Emr({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==M2},{trimLeft:M2})});var U2=o(function(){"use strict";L2();var Smr=h(),$2=dd();Smr({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==$2},{trimStart:$2})});var Nr=o(function(T8r,j2){"use strict";var Imr=S(),Omr=J(),B2=F(),mmr=/"/g,Tmr=Imr("".replace);j2.exports=function(r,e,t,a){var i=B2(Omr(r)),n="<"+e;return t!==""&&(n+=" "+t+'="'+Tmr(B2(a),mmr,"&quot;")+'"'),n+">"+i+"</"+e+">"}});var Fr=o(function(b8r,k2){"use strict";var bmr=E();k2.exports=function(r){return bmr(function(){var e=""[r]('"');return e!==e.toLowerCase()||e.split('"').length>3})}});var G2=o(function(){"use strict";var Rmr=h(),Amr=Nr(),wmr=Fr();Rmr({target:"String",proto:!0,forced:wmr("anchor")},{anchor:function(e){return Amr(this,"a","name",e)}})});var H2=o(function(){"use strict";var xmr=h(),Pmr=Nr(),Cmr=Fr();xmr({target:"String",proto:!0,forced:Cmr("big")},{big:function(){return Pmr(this,"big","","")}})});var W2=o(function(){"use strict";var _mr=h(),Nmr=Nr(),Fmr=Fr();_mr({target:"String",proto:!0,forced:Fmr("blink")},{blink:function(){return Nmr(this,"blink","","")}})});var V2=o(function(){"use strict";var Dmr=h(),Mmr=Nr(),Lmr=Fr();Dmr({target:"String",proto:!0,forced:Lmr("bold")},{bold:function(){return Mmr(this,"b","","")}})});var K2=o(function(){"use strict";var $mr=h(),Umr=Nr(),Bmr=Fr();$mr({target:"String",proto:!0,forced:Bmr("fixed")},{fixed:function(){return Umr(this,"tt","","")}})});var z2=o(function(){"use strict";var jmr=h(),kmr=Nr(),Gmr=Fr();jmr({target:"String",proto:!0,forced:Gmr("fontcolor")},{fontcolor:function(e){return kmr(this,"font","color",e)}})});var Y2=o(function(){"use strict";var Hmr=h(),Wmr=Nr(),Vmr=Fr();Hmr({target:"String",proto:!0,forced:Vmr("fontsize")},{fontsize:function(e){return Wmr(this,"font","size",e)}})});var J2=o(function(){"use strict";var Kmr=h(),zmr=Nr(),Ymr=Fr();Kmr({target:"String",proto:!0,forced:Ymr("italics")},{italics:function(){return zmr(this,"i","","")}})});var X2=o(function(){"use strict";var Jmr=h(),Xmr=Nr(),Qmr=Fr();Jmr({target:"String",proto:!0,forced:Qmr("link")},{link:function(e){return Xmr(this,"a","href",e)}})});var Q2=o(function(){"use strict";var Zmr=h(),rTr=Nr(),eTr=Fr();Zmr({target:"String",proto:!0,forced:eTr("small")},{small:function(){return rTr(this,"small","","")}})});var Z2=o(function(){"use strict";var tTr=h(),aTr=Nr(),iTr=Fr();tTr({target:"String",proto:!0,forced:iTr("strike")},{strike:function(){return aTr(this,"strike","","")}})});var rL=o(function(){"use strict";var nTr=h(),uTr=Nr(),oTr=Fr();nTr({target:"String",proto:!0,forced:oTr("sub")},{sub:function(){return uTr(this,"sub","","")}})});var eL=o(function(){"use strict";var sTr=h(),vTr=Nr(),cTr=Fr();sTr({target:"String",proto:!0,forced:cTr("sup")},{sup:function(){return vTr(this,"sup","","")}})});var Ws=o(function(Q8r,aL){"use strict";var tL=T(),gd=E(),fTr=Bi(),lTr=k().NATIVE_ARRAY_BUFFER_VIEWS,hTr=tL.ArrayBuffer,Jt=tL.Int8Array;aL.exports=!lTr||!gd(function(){Jt(1)})||!gd(function(){new Jt(-1)})||!fTr(function(r){new Jt,new Jt(null),new Jt(1.5),new Jt(r)},!0)||gd(function(){return new Jt(new hTr(2),1,void 0).length!==1})});var yd=o(function(Z8r,iL){"use strict";var qTr=Go(),pTr=RangeError;iL.exports=function(r,e){var t=qTr(r);if(t%e)throw new pTr("Wrong offset");return t}});var uL=o(function(rHr,nL){"use strict";var dTr=Math.floor;nL.exports=function(r){var e=+r;if(e!==e||e<=0)return 0;if(e>=255)return 255;var t=dTr(e);return t+.5<e?t+1:e<t+.5||t%2===0?t:t+1}});var Ed=o(function(eHr,oL){"use strict";var gTr=Mr();oL.exports=function(r){var e=gTr(r);return e==="BigInt64Array"||e==="BigUint64Array"}});var Vs=o(function(tHr,sL){"use strict";var yTr=Ei(),ETr=TypeError;sL.exports=function(r){var e=yTr(r,"number");if(typeof e=="number")throw new ETr("Can't convert number to bigint");return BigInt(e)}});var Sd=o(function(aHr,vL){"use strict";var STr=Pr(),ITr=R(),OTr=L(),mTr=vs(),TTr=G(),bTr=H(),RTr=Ce(),ATr=Pe(),wTr=no(),xTr=Ed(),PTr=k().aTypedArrayConstructor,CTr=Vs();vL.exports=function(e){var t=mTr(this),a=arguments.length,i=a>1?arguments[1]:void 0,n=i!==void 0;n&&OTr(i);var u=TTr(e),s=ATr(u),v,f,c,l,q,p,g,y;if(s&&!wTr(s))for(g=RTr(u,s),y=g.next,u=[];!(p=ITr(y,g)).done;)u.push(p.value);for(n&&a>2&&(i=STr(i,arguments[2])),f=bTr(u),c=new(PTr(t))(f),l=xTr(c),v=0;f>v;v++)q=n?i(u[v],v):u[v],c[v]=l?CTr(q):+q;return c}});var be=o(function(iHr,wd){"use strict";var cL=h(),SL=T(),fL=R(),_Tr=P(),NTr=Ws(),Vn=k(),IL=Qi(),lL=Cr(),FTr=xr(),Gn=fr(),DTr=xa(),Id=zi(),Od=yd(),MTr=uL(),OL=Wr(),Hn=$(),LTr=Mr(),bd=_(),$Tr=Ve(),UTr=or(),BTr=gr(),Ks=$r(),jTr=Ye().f,hL=Sd(),kTr=lr().forEach,GTr=$t(),HTr=er(),mL=z(),TL=cr(),qL=Sa(),xd=Y(),WTr=rt(),Rd=xd.get,VTr=xd.set,KTr=xd.enforce,bL=mL.f,zTr=TL.f,md=SL.RangeError,RL=IL.ArrayBuffer,YTr=RL.prototype,JTr=IL.DataView,zs=Vn.NATIVE_ARRAY_BUFFER_VIEWS,pL=Vn.TYPED_ARRAY_TAG,dL=Vn.TypedArray,Wn=Vn.TypedArrayPrototype,Ad=Vn.isTypedArray,Ys="BYTES_PER_ELEMENT",Td="Wrong length",Js=function(r,e){HTr(r,e,{configurable:!0,get:function(){return Rd(this)[e]}})},gL=function(r){var e;return BTr(YTr,r)||(e=LTr(r))==="ArrayBuffer"||e==="SharedArrayBuffer"},AL=function(r,e){return Ad(r)&&!$Tr(e)&&e in r&&DTr(+e)&&e>=0},yL=function(e,t){return t=OL(t),AL(e,t)?FTr(2,e[t]):zTr(e,t)},EL=function(e,t,a){return t=OL(t),AL(e,t)&&bd(a)&&Hn(a,"value")&&!Hn(a,"get")&&!Hn(a,"set")&&!a.configurable&&(!Hn(a,"writable")||a.writable)&&(!Hn(a,"enumerable")||a.enumerable)?(e[t]=a.value,e):bL(e,t,a)};_Tr?(zs||(TL.f=yL,mL.f=EL,Js(Wn,"buffer"),Js(Wn,"byteOffset"),Js(Wn,"byteLength"),Js(Wn,"length")),cL({target:"Object",stat:!0,forced:!zs},{getOwnPropertyDescriptor:yL,defineProperty:EL}),wd.exports=function(r,e,t){var a=r.match(/\d+/)[0]/8,i=r+(t?"Clamped":"")+"Array",n="get"+r,u="set"+r,s=SL[i],v=s,f=v&&v.prototype,c={},l=function(y,d){var O=Rd(y);return O.view[n](d*a+O.byteOffset,!0)},q=function(y,d,O){var x=Rd(y);x.view[u](d*a+x.byteOffset,t?MTr(O):O,!0)},p=function(y,d){bL(y,d,{get:function(){return l(this,d)},set:function(O){return q(this,d,O)},enumerable:!0})};zs?NTr&&(v=e(function(y,d,O,x){return lL(y,f),WTr(function(){return bd(d)?gL(d)?x!==void 0?new s(d,Od(O,a),x):O!==void 0?new s(d,Od(O,a)):new s(d):Ad(d)?qL(v,d):fL(hL,v,d):new s(Id(d))}(),y,v)}),Ks&&Ks(v,dL),kTr(jTr(s),function(y){y in v||Gn(v,y,s[y])}),v.prototype=f):(v=e(function(y,d,O,x){lL(y,f);var A=0,U=0,V,Z,X;if(!bd(d))X=Id(d),Z=X*a,V=new RL(Z);else if(gL(d)){V=d,U=Od(O,a);var Gr=d.byteLength;if(x===void 0){if(Gr%a)throw new md(Td);if(Z=Gr-U,Z<0)throw new md(Td)}else if(Z=Id(x)*a,Z+U>Gr)throw new md(Td);X=Z/a}else return Ad(d)?qL(v,d):fL(hL,v,d);for(VTr(y,{buffer:V,byteOffset:U,byteLength:Z,length:X,view:new JTr(V)});A<X;)p(y,A++)}),Ks&&Ks(v,dL),f=v.prototype=UTr(Wn)),f.constructor!==v&&Gn(f,"constructor",v),KTr(f).TypedArrayConstructor=v,pL&&Gn(f,pL,i);var g=v!==s;c[i]=v,cL({global:!0,constructor:!0,forced:g,sham:!zs},c),Ys in v||Gn(v,Ys,a),Ys in f||Gn(f,Ys,a),GTr(i)}):wd.exports=function(){}});var wL=o(function(){"use strict";var XTr=be();XTr("Float32",function(r){return function(t,a,i){return r(this,t,a,i)}})});var xL=o(function(){"use strict";var QTr=be();QTr("Float64",function(r){return function(t,a,i){return r(this,t,a,i)}})});var PL=o(function(){"use strict";var ZTr=be();ZTr("Int8",function(r){return function(t,a,i){return r(this,t,a,i)}})});var CL=o(function(){"use strict";var rbr=be();rbr("Int16",function(r){return function(t,a,i){return r(this,t,a,i)}})});var _L=o(function(){"use strict";var ebr=be();ebr("Int32",function(r){return function(t,a,i){return r(this,t,a,i)}})});var NL=o(function(){"use strict";var tbr=be();tbr("Uint8",function(r){return function(t,a,i){return r(this,t,a,i)}})});var FL=o(function(){"use strict";var abr=be();abr("Uint8",function(r){return function(t,a,i){return r(this,t,a,i)}},!0)});var DL=o(function(){"use strict";var ibr=be();ibr("Uint16",function(r){return function(t,a,i){return r(this,t,a,i)}})});var ML=o(function(){"use strict";var nbr=be();nbr("Uint32",function(r){return function(t,a,i){return r(this,t,a,i)}})});var $L=o(function(){"use strict";var LL=k(),ubr=H(),obr=rr(),sbr=LL.aTypedArray,vbr=LL.exportTypedArrayMethod;vbr("at",function(e){var t=sbr(this),a=ubr(t),i=obr(e),n=i>=0?i:a+i;return n<0||n>=a?void 0:t[n]})});var BL=o(function(){"use strict";var cbr=S(),UL=k(),fbr=Df(),lbr=cbr(fbr),hbr=UL.aTypedArray,qbr=UL.exportTypedArrayMethod;qbr("copyWithin",function(e,t){return lbr(hbr(this),e,t,arguments.length>2?arguments[2]:void 0)})});var kL=o(function(){"use strict";var jL=k(),pbr=lr().every,dbr=jL.aTypedArray,gbr=jL.exportTypedArrayMethod;gbr("every",function(e){return pbr(dbr(this),e,arguments.length>1?arguments[1]:void 0)})});var HL=o(function(){"use strict";var GL=k(),ybr=ho(),Ebr=Vs(),Sbr=Mr(),Ibr=R(),Obr=S(),mbr=E(),Tbr=GL.aTypedArray,bbr=GL.exportTypedArrayMethod,Rbr=Obr("".slice),Abr=mbr(function(){var r=0;return new Int8Array(2).fill({valueOf:function(){return r++}}),r!==1});bbr("fill",function(e){var t=arguments.length;Tbr(this);var a=Rbr(Sbr(this),0,3)==="Big"?Ebr(e):+e;return Ibr(ybr,this,a,t>1?arguments[1]:void 0,t>2?arguments[2]:void 0)},Abr)});var Pd=o(function(CHr,WL){"use strict";var wbr=Sa(),xbr=k().getTypedArrayConstructor;WL.exports=function(r,e){return wbr(xbr(r),e)}});var KL=o(function(){"use strict";var VL=k(),Pbr=lr().filter,Cbr=Pd(),_br=VL.aTypedArray,Nbr=VL.exportTypedArrayMethod;Nbr("filter",function(e){var t=Pbr(_br(this),e,arguments.length>1?arguments[1]:void 0);return Cbr(this,t)})});var YL=o(function(){"use strict";var zL=k(),Fbr=lr().find,Dbr=zL.aTypedArray,Mbr=zL.exportTypedArrayMethod;Mbr("find",function(e){return Fbr(Dbr(this),e,arguments.length>1?arguments[1]:void 0)})});var XL=o(function(){"use strict";var JL=k(),Lbr=lr().findIndex,$br=JL.aTypedArray,Ubr=JL.exportTypedArrayMethod;Ubr("findIndex",function(e){return Lbr($br(this),e,arguments.length>1?arguments[1]:void 0)})});var ZL=o(function(){"use strict";var QL=k(),Bbr=Ui().findLast,jbr=QL.aTypedArray,kbr=QL.exportTypedArrayMethod;kbr("findLast",function(e){return Bbr(jbr(this),e,arguments.length>1?arguments[1]:void 0)})});var e$=o(function(){"use strict";var r$=k(),Gbr=Ui().findLastIndex,Hbr=r$.aTypedArray,Wbr=r$.exportTypedArrayMethod;Wbr("findLastIndex",function(e){return Gbr(Hbr(this),e,arguments.length>1?arguments[1]:void 0)})});var a$=o(function(){"use strict";var t$=k(),Vbr=lr().forEach,Kbr=t$.aTypedArray,zbr=t$.exportTypedArrayMethod;zbr("forEach",function(e){Vbr(Kbr(this),e,arguments.length>1?arguments[1]:void 0)})});var i$=o(function(){"use strict";var Ybr=Ws(),Jbr=k().exportTypedArrayStaticMethod,Xbr=Sd();Jbr("from",Xbr,Ybr)});var u$=o(function(){"use strict";var n$=k(),Qbr=At().includes,Zbr=n$.aTypedArray,rRr=n$.exportTypedArrayMethod;rRr("includes",function(e){return Qbr(Zbr(this),e,arguments.length>1?arguments[1]:void 0)})});var s$=o(function(){"use strict";var o$=k(),eRr=At().indexOf,tRr=o$.aTypedArray,aRr=o$.exportTypedArrayMethod;aRr("indexOf",function(e){return eRr(tRr(this),e,arguments.length>1?arguments[1]:void 0)})});var h$=o(function(){"use strict";var iRr=T(),nRr=E(),Cd=S(),c$=k(),_d=Gi(),uRr=N(),Nd=uRr("iterator"),v$=iRr.Uint8Array,oRr=Cd(_d.values),sRr=Cd(_d.keys),vRr=Cd(_d.entries),Fd=c$.aTypedArray,Xs=c$.exportTypedArrayMethod,Za=v$&&v$.prototype,Qs=!nRr(function(){Za[Nd].call([1])}),f$=!!Za&&Za.values&&Za[Nd]===Za.values&&Za.values.name==="values",l$=function(){return oRr(Fd(this))};Xs("entries",function(){return vRr(Fd(this))},Qs);Xs("keys",function(){return sRr(Fd(this))},Qs);Xs("values",l$,Qs||!f$,{name:"values"});Xs(Nd,l$,Qs||!f$,{name:"values"})});var p$=o(function(){"use strict";var q$=k(),cRr=S(),fRr=q$.aTypedArray,lRr=q$.exportTypedArrayMethod,hRr=cRr([].join);lRr("join",function(e){return hRr(fRr(this),e)})});var g$=o(function(){"use strict";var d$=k(),qRr=Lr(),pRr=Yf(),dRr=d$.aTypedArray,gRr=d$.exportTypedArrayMethod;gRr("lastIndexOf",function(e){var t=arguments.length;return qRr(pRr,dRr(this),t>1?[e,arguments[1]]:[e])})});var E$=o(function(){"use strict";var y$=k(),yRr=lr().map,ERr=Pd(),SRr=y$.aTypedArray,IRr=y$.exportTypedArrayMethod;IRr("map",function(e){var t=yRr(SRr(this),e,arguments.length>1?arguments[1]:void 0);return ERr(this,t)})});var I$=o(function(){"use strict";var S$=k(),ORr=Ws(),mRr=S$.aTypedArrayConstructor,TRr=S$.exportTypedArrayStaticMethod;TRr("of",function(){for(var e=0,t=arguments.length,a=new(mRr(this))(t);t>e;)a[e]=arguments[e++];return a},ORr)});var m$=o(function(){"use strict";var O$=k(),bRr=Hi().left,RRr=O$.aTypedArray,ARr=O$.exportTypedArrayMethod;ARr("reduce",function(e){var t=arguments.length;return bRr(RRr(this),e,t,t>1?arguments[1]:void 0)})});var b$=o(function(){"use strict";var T$=k(),wRr=Hi().right,xRr=T$.aTypedArray,PRr=T$.exportTypedArrayMethod;PRr("reduceRight",function(e){var t=arguments.length;return wRr(xRr(this),e,t,t>1?arguments[1]:void 0)})});var A$=o(function(){"use strict";var R$=k(),CRr=R$.aTypedArray,_Rr=R$.exportTypedArrayMethod,NRr=Math.floor;_Rr("reverse",function(){for(var e=this,t=CRr(e).length,a=NRr(t/2),i=0,n;i<a;)n=e[i],e[i++]=e[--t],e[t]=n;return e})});var N$=o(function(){"use strict";var x$=T(),P$=R(),Ld=k(),FRr=H(),DRr=yd(),MRr=G(),C$=E(),LRr=x$.RangeError,Dd=x$.Int8Array,w$=Dd&&Dd.prototype,_$=w$&&w$.set,$Rr=Ld.aTypedArray,URr=Ld.exportTypedArrayMethod,Md=!C$(function(){var r=new Uint8ClampedArray(2);return P$(_$,r,{length:1,0:3},1),r[1]!==3}),BRr=Md&&Ld.NATIVE_ARRAY_BUFFER_VIEWS&&C$(function(){var r=new Dd(2);return r.set(1),r.set("2",1),r[0]!==0||r[1]!==2});URr("set",function(e){$Rr(this);var t=DRr(arguments.length>1?arguments[1]:void 0,1),a=MRr(e);if(Md)return P$(_$,this,a,t);var i=this.length,n=FRr(a),u=0;if(n+t>i)throw new LRr("Wrong length");for(;u<n;)this[t+u]=a[u++]},!Md||BRr)});var F$=o(function(){"use strict";var $d=k(),jRr=E(),kRr=Kr(),GRr=$d.aTypedArray,HRr=$d.getTypedArrayConstructor,WRr=$d.exportTypedArrayMethod,VRr=jRr(function(){new Int8Array(1).slice()});WRr("slice",function(e,t){for(var a=kRr(GRr(this),e,t),i=HRr(this),n=0,u=a.length,s=new i(u);u>n;)s[n]=a[n++];return s},VRr)});var M$=o(function(){"use strict";var D$=k(),KRr=lr().some,zRr=D$.aTypedArray,YRr=D$.exportTypedArrayMethod;YRr("some",function(e){return KRr(zRr(this),e,arguments.length>1?arguments[1]:void 0)})});var k$=o(function(){"use strict";var JRr=T(),XRr=Je(),Ud=E(),QRr=L(),ZRr=Oo(),j$=k(),L$=Qf(),rAr=Zf(),$$=ie(),U$=mo(),eAr=j$.aTypedArray,tAr=j$.exportTypedArrayMethod,Kn=JRr.Uint16Array,ri=Kn&&XRr(Kn.prototype.sort),aAr=!!ri&&!(Ud(function(){ri(new Kn(2),null)})&&Ud(function(){ri(new Kn(2),{})})),B$=!!ri&&!Ud(function(){if($$)return $$<74;if(L$)return L$<67;if(rAr)return!0;if(U$)return U$<602;var r=new Kn(516),e=Array(516),t,a;for(t=0;t<516;t++)a=t%4,r[t]=515-t,e[t]=t-2*a+3;for(ri(r,function(i,n){return(i/4|0)-(n/4|0)}),t=0;t<516;t++)if(r[t]!==e[t])return!0}),iAr=function(r){return function(e,t){return r!==void 0?+r(e,t)||0:t!==t?e!==e?0:-1:e!==e?1:e===0&&t===0?1/e>0?1/t>0?0:1:1/t>0?-1:0:e>t?1:e<t?-1:0}};tAr("sort",function(e){return e!==void 0&&QRr(e),B$?ri(this,e):ZRr(eAr(this),iAr(e))},!B$||aAr)});var H$=o(function(){"use strict";var Bd=k(),nAr=Vr(),G$=qe(),uAr=Bd.aTypedArray,oAr=Bd.getTypedArrayConstructor,sAr=Bd.exportTypedArrayMethod;sAr("subarray",function(e,t){var a=uAr(this),i=a.length,n=G$(e,i),u=oAr(a);return new u(a.buffer,a.byteOffset+n*a.BYTES_PER_ELEMENT,nAr((t===void 0?i:G$(t,i))-n))})});var Y$=o(function(){"use strict";var vAr=T(),cAr=Lr(),K$=k(),jd=E(),W$=Kr(),Zs=vAr.Int8Array,V$=K$.aTypedArray,fAr=K$.exportTypedArrayMethod,z$=[].toLocaleString,lAr=!!Zs&&jd(function(){z$.call(new Zs(1))}),hAr=jd(function(){return[1,2].toLocaleString()!==new Zs([1,2]).toLocaleString()})||!jd(function(){Zs.prototype.toLocaleString.call([1,2])});fAr("toLocaleString",function(){return cAr(z$,lAr?W$(V$(this)):V$(this),W$(arguments))},hAr)});var J$=o(function(){"use strict";var qAr=H(),kd=k(),pAr=kd.aTypedArray,dAr=kd.exportTypedArrayMethod,gAr=kd.getTypedArrayConstructor;dAr("toReversed",function(){for(var e=pAr(this),t=qAr(e),a=new(gAr(e))(t),i=0;i<t;i++)a[i]=e[t-i-1];return a})});var X$=o(function(){"use strict";var rv=k(),yAr=S(),EAr=L(),SAr=Sa(),IAr=rv.aTypedArray,OAr=rv.getTypedArrayConstructor,mAr=rv.exportTypedArrayMethod,TAr=yAr(rv.TypedArrayPrototype.sort);mAr("toSorted",function(e){e!==void 0&&EAr(e);var t=IAr(this),a=SAr(OAr(t),t);return TAr(a,e)})});var Z$=o(function(){"use strict";var bAr=k().exportTypedArrayMethod,RAr=E(),AAr=T(),wAr=S(),Q$=AAr.Uint8Array,xAr=Q$&&Q$.prototype||{},ev=[].toString,PAr=wAr([].join);RAr(function(){ev.call({})})&&(ev=function(){return PAr(this)});var CAr=xAr.toString!==ev;bAr("toString",ev,CAr)});var eU=o(function(){"use strict";var Gd=k(),_Ar=Ed(),NAr=H(),FAr=rr(),DAr=Vs(),MAr=Gd.aTypedArray,LAr=Gd.getTypedArrayConstructor,$Ar=Gd.exportTypedArrayMethod,UAr=RangeError,rU=function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(r){return r===8}}(),BAr=rU&&function(){try{new Int8Array(1).with(-.5,1)}catch(r){return!0}}();$Ar("with",function(r,e){var t=MAr(this),a=NAr(t),i=FAr(r),n=i<0?a+i:i,u=_Ar(t)?DAr(e):+e;if(n>=a||n<0)throw new UAr("Incorrect index");for(var s=new(LAr(t))(a),v=0;v<a;v++)s[v]=v===n?u:t[v];return s},!rU||BAr)});var zn=o(function(_Wr,uU){"use strict";var nU="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",tU=nU+"+/",aU=nU+"-_",iU=function(r){for(var e={},t=0;t<64;t++)e[r.charAt(t)]=t;return e};uU.exports={i2c:tU,c2i:iU(tU),i2cUrl:aU,c2iUrl:iU(aU)}});var Hd=o(function(NWr,oU){"use strict";var jAr=TypeError;oU.exports=function(r){var e=r&&r.alphabet;if(e===void 0||e==="base64"||e==="base64url")return e||"base64";throw new jAr("Incorrect `alphabet` option")}});var Yd=o(function(FWr,vU){"use strict";var zd=T(),kAr=S(),GAr=un(),HAr=Ln(),WAr=$(),sU=zn(),VAr=Hd(),KAr=Ra(),zAr=sU.c2i,YAr=sU.c2iUrl,dt=zd.SyntaxError,JAr=zd.TypeError,XAr=zd.Array,Xt=kAr("".charAt),QAr=Math.floor,Wd=function(r,e){for(var t=r.length;e<t;e++){var a=Xt(r,e);if(a!==" "&&a!=="	"&&a!=="\n"&&a!=="\f"&&a!=="\r")break}return e},Vd=function(r,e,t){var a=r.length;a<4&&(r+=a===2?"AA":"A");var i=(e[Xt(r,0)]<<18)+(e[Xt(r,1)]<<12)+(e[Xt(r,2)]<<6)+e[Xt(r,3)],n=[i>>16&255,i>>8&255,i&255];if(a===2){if(t&&n[1]!==0)throw new dt("Extra bits");return[n[0]]}if(a===3){if(t&&n[2]!==0)throw new dt("Extra bits");return[n[0],n[1]]}return n},Kd=function(r,e,t){for(var a=e.length,i=0;i<a;i++)r[t+i]=e[i];return t+a};vU.exports=function(r,e,t,a){HAr(r),GAr(e);var i=VAr(e)==="base64"?zAr:YAr,n=e?e.lastChunkHandling:void 0;if(n===void 0&&(n="loose"),n!=="loose"&&n!=="strict"&&n!=="stop-before-partial")throw new JAr("Incorrect `lastChunkHandling` option");t&&KAr(t.buffer);var u=r.length,s=t||XAr(QAr(u*3/4)),v=0,f=0,c="",l=0;if(a)for(;;){if(l=Wd(r,l),l===u){if(c.length>0){if(n==="stop-before-partial")break;if(n==="loose"){if(c.length===1)throw new dt("Malformed padding: exactly one additional character");v=Kd(s,Vd(c,i,!1),v)}else throw new dt("Missing padding")}f=u;break}var q=Xt(r,l);if(++l,q==="="){if(c.length<2)throw new dt("Padding is too early");if(l=Wd(r,l),c.length===2){if(l===u){if(n==="stop-before-partial")break;throw new dt("Malformed padding: only one =")}Xt(r,l)==="="&&(++l,l=Wd(r,l))}if(l<u)throw new dt("Unexpected character after padding");v=Kd(s,Vd(c,i,n==="strict"),v),f=u;break}if(!WAr(i,q))throw new dt("Unexpected character");var p=a-v;if(p===1&&c.length===2||p===2&&c.length===3||(c+=q,c.length===4&&(v=Kd(s,Vd(c,i,!1),v),c="",f=l,v===a)))break}return t||(s.length=v),{bytes:s,read:f,written:v}}});var cU=o(function(){"use strict";var ZAr=h(),r0r=T(),e0r=Sa(),t0r=Yd(),ei=r0r.Uint8Array,a0r=!ei||!ei.fromBase64||!function(){try{ei.fromBase64("a");return}catch(r){}try{ei.fromBase64("",null)}catch(r){return!0}}();ei&&ZAr({target:"Uint8Array",stat:!0,forced:a0r},{fromBase64:function(e){var t=t0r(e,arguments.length>1?arguments[1]:void 0,null,9007199254740991);return e0r(ei,t.bytes)}})});var Jd=o(function(LWr,hU){"use strict";var lU=T(),i0r=S(),n0r=lU.Uint8Array,fU=lU.SyntaxError,u0r=Math.min,o0r=i0r("".match);hU.exports=function(r,e){var t=r.length;if(t%2!==0)throw new fU("String should be an even number of characters");for(var a=e?u0r(e.length,t/2):t/2,i=e||new n0r(a),n=o0r(r,/[\S\s]{2}/g),u=0;u<a;u++){var s=+("0x"+n[u]+"0");if(s!==s)throw new fU("String should only contain hex characters");i[u]=s>>4}return{bytes:i,read:u<<1}}});var qU=o(function(){"use strict";var s0r=h(),v0r=T(),c0r=Ln(),f0r=Jd();v0r.Uint8Array&&s0r({target:"Uint8Array",stat:!0},{fromHex:function(e){return f0r(c0r(e)).bytes}})});var Yn=o(function(BWr,pU){"use strict";var l0r=Mr(),h0r=TypeError;pU.exports=function(r){if(l0r(r)==="Uint8Array")return r;throw new h0r("Argument is not an Uint8Array")}});var dU=o(function(){"use strict";var q0r=h(),p0r=T(),d0r=Yd(),g0r=Yn(),tv=p0r.Uint8Array,y0r=!tv||!tv.prototype.setFromBase64||!function(){var r=new tv([255,255,255,255,255]);try{r.setFromBase64("",null);return}catch(e){}try{r.setFromBase64("a");return}catch(e){}try{r.setFromBase64("MjYyZg===")}catch(e){return r[0]===50&&r[1]===54&&r[2]===50&&r[3]===255&&r[4]===255}}();tv&&q0r({target:"Uint8Array",proto:!0,forced:y0r},{setFromBase64:function(e){g0r(this);var t=d0r(e,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:t.read,written:t.written}}})});var gU=o(function(){"use strict";var E0r=h(),S0r=T(),I0r=Ln(),O0r=Yn(),m0r=Ra(),T0r=Jd();function b0r(){try{var r=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(r).setFromHex("cafed00d")}catch(e){return!0}}S0r.Uint8Array&&E0r({target:"Uint8Array",proto:!0,forced:b0r()},{setFromHex:function(e){O0r(this),I0r(e),m0r(this.buffer);var t=T0r(e,this).read;return{read:t,written:t/2}}})});var IU=o(function(){"use strict";var R0r=h(),yU=T(),EU=S(),A0r=un(),w0r=Yn(),x0r=Ra(),SU=zn(),P0r=Hd(),C0r=SU.i2c,_0r=SU.i2cUrl,N0r=Math.floor,F0r=Math.ceil,D0r=EU("".charAt),av=yU.Uint8Array,M0r=yU.Array,L0r=EU([].join),$0r=!av||!av.prototype.toBase64||!function(){try{var r=new av;r.toBase64(null)}catch(e){return!0}}();av&&R0r({target:"Uint8Array",proto:!0,forced:$0r},{toBase64:function(){var e=w0r(this),t=arguments.length?A0r(arguments[0]):void 0,a=P0r(t)==="base64"?C0r:_0r,i=!!t&&!!t.omitPadding;x0r(this.buffer);for(var n=0,u=e.length,s=M0r(i?N0r(u/3)*4+(u%3?u%3+1:0):F0r(u/3)*4),v=0,f,c=function(l){return D0r(a,f>>6*l&63)};n+2<u;n+=3)f=(e[n]<<16)+(e[n+1]<<8)+e[n+2],s[v++]=c(3),s[v++]=c(2),s[v++]=c(1),s[v++]=c(0);return n+2===u?(f=(e[n]<<16)+(e[n+1]<<8),s[v++]=c(3),s[v++]=c(2),s[v++]=c(1),i||(s[v++]="=")):n+1===u&&(f=e[n]<<16,s[v++]=c(3),s[v++]=c(2),i||(s[v++]="=",s[v++]="=")),L0r(s,"")}})});var mU=o(function(){"use strict";var U0r=h(),B0r=T(),OU=S(),j0r=Yn(),k0r=Ra(),G0r=OU(1.1.toString),H0r=OU([].join),W0r=Array,iv=B0r.Uint8Array,V0r=!iv||!iv.prototype.toHex||!function(){try{var r=new iv([255,255,255,255,255,255,255,255]);return r.toHex()==="ffffffffffffffff"}catch(e){return!1}}();iv&&U0r({target:"Uint8Array",proto:!0,forced:V0r},{toHex:function(){j0r(this),k0r(this.buffer);for(var e=W0r(this.length),t=0,a=this.length;t<a;t++){var i=G0r(this[t],16);e[t]=i.length===1?"0"+i:i}return H0r(e,"")}})});var wU=o(function(){"use strict";var K0r=h(),Xd=S(),z0r=F(),TU=String.fromCharCode,bU=Xd("".charAt),RU=Xd(/./.exec),AU=Xd("".slice),Y0r=/^[\da-f]{2}$/i,J0r=/^[\da-f]{4}$/i;K0r({global:!0},{unescape:function(e){for(var t=z0r(e),a="",i=t.length,n=0,u,s;n<i;){if(u=bU(t,n++),u==="%"){if(bU(t,n)==="u"){if(s=AU(t,n+1,n+5),RU(J0r,s)){a+=TU(parseInt(s,16)),n+=5;continue}}else if(s=AU(t,n,n+2),RU(Y0r,s)){a+=TU(parseInt(s,16)),n+=2;continue}}a+=u}return a}})});var rg=o(function(XWr,FU){"use strict";var X0r=S(),xU=ye(),nv=st().getWeakData,Q0r=Cr(),Z0r=w(),rwr=ee(),Qd=_(),ewr=tr(),CU=lr(),PU=$(),_U=Y(),twr=_U.set,awr=_U.getterFor,iwr=CU.find,nwr=CU.findIndex,uwr=X0r([].splice),owr=0,uv=function(r){return r.frozen||(r.frozen=new NU)},NU=function(){this.entries=[]},Zd=function(r,e){return iwr(r.entries,function(t){return t[0]===e})};NU.prototype={get:function(r){var e=Zd(this,r);if(e)return e[1]},has:function(r){return!!Zd(this,r)},set:function(r,e){var t=Zd(this,r);t?t[1]=e:this.entries.push([r,e])},delete:function(r){var e=nwr(this.entries,function(t){return t[0]===r});return~e&&uwr(this.entries,e,1),!!~e}};FU.exports={getConstructor:function(r,e,t,a){var i=r(function(v,f){Q0r(v,n),twr(v,{type:e,id:owr++,frozen:null}),rwr(f)||ewr(f,v[a],{that:v,AS_ENTRIES:t})}),n=i.prototype,u=awr(e),s=function(v,f,c){var l=u(v),q=nv(Z0r(f),!0);return q===!0?uv(l).set(f,c):q[l.id]=c,v};return xU(n,{delete:function(v){var f=u(this);if(!Qd(v))return!1;var c=nv(v);return c===!0?uv(f).delete(v):c&&PU(c,f.id)&&delete c[f.id]},has:function(f){var c=u(this);if(!Qd(f))return!1;var l=nv(f);return l===!0?uv(c).has(f):l&&PU(l,c.id)}}),xU(n,t?{get:function(f){var c=u(this);if(Qd(f)){var l=nv(f);if(l===!0)return uv(c).get(f);if(l)return l[c.id]}},set:function(f,c){return s(this,f,c)}}:{add:function(f){return s(this,f,!0)}}),i}}});var kU=o(function(){"use strict";var swr=ot(),DU=T(),cv=S(),MU=ye(),vwr=st(),cwr=fn(),LU=rg(),ov=_(),sv=Y().enforce,fwr=E(),lwr=Oc(),Qn=Object,hwr=Array.isArray,vv=Qn.isExtensible,$U=Qn.isFrozen,qwr=Qn.isSealed,UU=Qn.freeze,pwr=Qn.seal,dwr=!DU.ActiveXObject&&"ActiveXObject"in DU,Jn,BU=function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},jU=cwr("WeakMap",BU,LU),ti=jU.prototype,fv=cv(ti.set),gwr=function(){return swr&&fwr(function(){var r=UU([]);return fv(new jU,r,1),!$U(r)})};lwr&&(dwr?(Jn=LU.getConstructor(BU,"WeakMap",!0),vwr.enable(),eg=cv(ti.delete),Xn=cv(ti.has),tg=cv(ti.get),MU(ti,{delete:function(r){if(ov(r)&&!vv(r)){var e=sv(this);return e.frozen||(e.frozen=new Jn),eg(this,r)||e.frozen.delete(r)}return eg(this,r)},has:function(e){if(ov(e)&&!vv(e)){var t=sv(this);return t.frozen||(t.frozen=new Jn),Xn(this,e)||t.frozen.has(e)}return Xn(this,e)},get:function(e){if(ov(e)&&!vv(e)){var t=sv(this);return t.frozen||(t.frozen=new Jn),Xn(this,e)?tg(this,e):t.frozen.get(e)}return tg(this,e)},set:function(e,t){if(ov(e)&&!vv(e)){var a=sv(this);a.frozen||(a.frozen=new Jn),Xn(this,e)?fv(this,e,t):a.frozen.set(e,t)}else fv(this,e,t);return this}})):gwr()&&MU(ti,{set:function(e,t){var a;return hwr(e)&&($U(e)?a=UU:qwr(e)&&(a=pwr)),fv(this,e,t),a&&a(e),this}}));var eg,Xn,tg});var GU=o(function(){"use strict";kU()});var Zn=o(function(tVr,HU){"use strict";var lv=S(),hv=WeakMap.prototype;HU.exports={WeakMap:WeakMap,set:lv(hv.set),get:lv(hv.get),has:lv(hv.has),remove:lv(hv.delete)}});var WU=o(function(){"use strict";var ywr=h(),ag=Zn(),Ewr=D(),Swr=ag.get,Iwr=ag.has,Owr=ag.set;ywr({target:"WeakMap",proto:!0,real:!0,forced:Ewr},{getOrInsert:function(e,t){return Iwr(this,e)?Swr(this,e):(Owr(this,e,t),t)}})});var KU=o(function(nVr,VU){"use strict";var mwr=Zn().has;VU.exports=function(r){return mwr(r),r}});var JU=o(function(uVr,YU){"use strict";var ig=Zn(),zU=new ig.WeakMap,Twr=ig.set,bwr=ig.remove;YU.exports=function(r){return Twr(zU,r,1),bwr(zU,r),r}});var QU=o(function(){"use strict";var Rwr=h(),Awr=L(),wwr=KU(),xwr=JU(),ng=Zn(),XU=D(),Pwr=ng.get,Cwr=ng.has,_wr=ng.set,Nwr=XU||!function(){try{WeakMap.prototype.getOrInsertComputed&&new WeakMap().getOrInsertComputed(1,function(){throw 1})}catch(r){return r instanceof TypeError}}();Rwr({target:"WeakMap",proto:!0,real:!0,forced:Nwr},{getOrInsertComputed:function(e,t){if(XU||wwr(this),xwr(e),Awr(t),Cwr(this,e))return Pwr(this,e);var a=t(e);return _wr(this,e,a),a}})});var ZU=o(function(){"use strict";var Fwr=fn(),Dwr=rg();Fwr("WeakSet",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},Dwr)});var rB=o(function(){"use strict";ZU()});var oB=o(function(){"use strict";var Mwr=h(),Lwr=T(),aB=M(),qv=S(),$wr=R(),pv=E(),Uwr=F(),Bwr=Br(),eB=zn().c2i,iB=/[^\d+/a-z]/i,jwr=/[\t\n\f\r ]+/g,kwr=/[=]{1,2}$/,Qt=aB("atob"),Gwr=Array,Hwr=String.fromCharCode,Wwr=qv("".charAt),tB=qv("".replace),Vwr=qv([].join),Kwr=qv(iB.exec),ai=!!Qt&&!pv(function(){return Qt("aGk=")!=="hi"}),nB=ai&&pv(function(){return Qt(" ")!==""}),uB=ai&&!pv(function(){Qt("a")}),zwr=ai&&!pv(function(){Qt()}),Ywr=ai&&Qt.length!==1,Jwr=!ai||nB||uB||zwr||Ywr;Mwr({global:!0,bind:!0,enumerable:!0,forced:Jwr},{atob:function(e){if(Bwr(arguments.length,1),ai&&!nB&&!uB)return $wr(Qt,Lwr,e);var t=tB(Uwr(e),jwr,""),a=0,i=0,n,u,s;t.length&3||(t=tB(t,kwr,"")),n=t.length;var v=n&3;if(v===1||Kwr(iB,t))throw new(aB("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(var f=new Gwr((n>>2)*3+(v?v-1:0)),c=0;a<n;)u=Wwr(t,a++),s=i&3?(s<<6)+eB[u]:eB[u],i++&3&&(f[c++]=Hwr(255&s>>(-2*i&6)));return Vwr(f,"")}})});var fB=o(function(){"use strict";var Xwr=h(),Qwr=T(),cB=M(),ug=S(),Zwr=R(),og=E(),sB=F(),rxr=Br(),exr=zn().i2c,ii=cB("btoa"),txr=Array,axr=ug([].join),vB=ug("".charAt),ixr=ug("".charCodeAt),ru=!!ii&&!og(function(){return ii("hi")!=="aGk="}),nxr=ru&&!og(function(){ii()}),uxr=ru&&og(function(){return ii(null)!=="bnVsbA=="}),oxr=ru&&ii.length!==1;Xwr({global:!0,bind:!0,enumerable:!0,forced:!ru||nxr||uxr||oxr},{btoa:function(e){if(rxr(arguments.length,1),ru)return Zwr(ii,Qwr,sB(e));for(var t=sB(e),a=new txr((t.length+2)/3<<2),i=0,n=0,u=exr,s,v;vB(t,n)||(u="=",n%1);){if(v=ixr(t,n+=3/4),v>255)throw new(cB("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");s=s<<8|v,a[i++]=vB(u,63&s>>8-n%1*8)}return axr(a,"")}})});var sg=o(function(gVr,lB){"use strict";lB.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}});var cg=o(function(yVr,qB){"use strict";var sxr=Si(),vg=sxr("span").classList,hB=vg&&vg.constructor&&vg.constructor.prototype;qB.exports=hB===Object.prototype?void 0:hB});var yB=o(function(){"use strict";var pB=T(),dB=sg(),vxr=cg(),fg=Uf(),cxr=fr(),gB=function(r){if(r&&r.forEach!==fg)try{cxr(r,"forEach",fg)}catch(e){r.forEach=fg}};for(dv in dB)dB[dv]&&gB(pB[dv]&&pB[dv].prototype);var dv;gB(vxr)});var mB=o(function(){"use strict";var EB=T(),IB=sg(),fxr=cg(),eu=Gi(),SB=fr(),lxr=Sr(),hxr=N(),lg=hxr("iterator"),hg=eu.values,OB=function(r,e){if(r){if(r[lg]!==hg)try{SB(r,lg,hg)}catch(a){r[lg]=hg}if(lxr(r,e,!0),IB[e]){for(var t in eu)if(r[t]!==eu[t])try{SB(r,t,eu[t])}catch(a){r[t]=eu[t]}}}};for(gv in IB)OB(EB[gv]&&EB[gv].prototype,gv);var gv;OB(fxr,"DOMTokenList")});var qg=o(function(mVr,TB){"use strict";TB.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}});var DB=o(function(){"use strict";var qxr=h(),Sv=M(),pxr=Al(),Sg=E(),dxr=or(),Ig=xr(),Iv=z().f,gxr=W(),yv=er(),Ev=$(),yxr=Cr(),Exr=w(),AB=bf(),bB=Nt(),ni=qg(),Sxr=Zu(),wB=Y(),Og=P(),xB=D(),ui="DOMException",Eg="DATA_CLONE_ERR",mv=Sv("Error"),ke=Sv(ui)||function(){try{var r=Sv("MessageChannel")||pxr("worker_threads").MessageChannel;new r().port1.postMessage(new WeakMap)}catch(e){if(e.name===Eg&&e.code===25)return e.constructor}}(),Ixr=ke&&ke.prototype,PB=mv.prototype,Oxr=wB.set,mxr=wB.getterFor(ui),Txr="stack"in new mv(ui),CB=function(r){return Ev(ni,r)&&ni[r].m?ni[r].c:0},mg=function(){yxr(this,au);var e=arguments.length,t=bB(e<1?void 0:arguments[0]),a=bB(e<2?void 0:arguments[1],"Error"),i=CB(a);if(Oxr(this,{type:ui,name:a,message:t,code:i}),Og||(this.name=a,this.message=t,this.code=i),Txr){var n=new mv(t);n.name=ui,Iv(this,"stack",Ig(1,Sxr(n.stack,1)))}},au=mg.prototype=dxr(PB),_B=function(r){return{enumerable:!0,configurable:!0,get:r}},pg=function(r){return _B(function(){return mxr(this)[r]})};Og&&(yv(au,"code",pg("code")),yv(au,"message",pg("message")),yv(au,"name",pg("name")));Iv(au,"constructor",Ig(1,mg));var Tv=Sg(function(){return!(new ke instanceof mv)}),NB=Tv||Sg(function(){return PB.toString!==AB||String(new ke(1,2))!=="2: 1"}),FB=Tv||Sg(function(){return new ke(1,"DataCloneError").code!==25}),bxr=Tv||ke[Eg]!==25||Ixr[Eg]!==25,RB=xB?NB||FB||bxr:Tv;qxr({global:!0,constructor:!0,forced:RB},{DOMException:RB?mg:ke});var iu=Sv(ui),Ov=iu.prototype;NB&&(xB||ke===iu)&&gxr(Ov,"toString",AB);FB&&Og&&ke===iu&&yv(Ov,"code",_B(function(){return CB(Exr(this).name)}));for(dg in ni)Ev(ni,dg)&&(gg=ni[dg],tu=gg.s,yg=Ig(6,gg.c),Ev(iu,tu)||Iv(iu,tu,yg),Ev(Ov,tu)||Iv(Ov,tu,yg));var gg,tu,yg,dg});var kB=o(function(){"use strict";var Rxr=h(),Axr=T(),Cg=M(),xg=xr(),Pg=z().f,MB=$(),wxr=Cr(),xxr=rt(),LB=Nt(),Tg=qg(),Pxr=Zu(),Cxr=P(),BB=D(),uu="DOMException",jB=Cg("Error"),ou=Cg(uu),_g=function(){wxr(this,_xr);var e=arguments.length,t=LB(e<1?void 0:arguments[0]),a=LB(e<2?void 0:arguments[1],"Error"),i=new ou(t,a),n=new jB(t);return n.name=uu,Pg(i,"stack",xg(1,Pxr(n.stack,1))),xxr(i,this,_g),i},_xr=_g.prototype=ou.prototype,Nxr="stack"in new jB(uu),Fxr="stack"in new ou(1,2),bg=ou&&Cxr&&Object.getOwnPropertyDescriptor(Axr,uu),Dxr=!!bg&&!(bg.writable&&bg.configurable),$B=Nxr&&!Dxr&&!Fxr;Rxr({global:!0,constructor:!0,forced:BB||$B},{DOMException:$B?_g:ou});var nu=Cg(uu),UB=nu.prototype;if(UB.constructor!==nu){BB||Pg(UB,"constructor",xg(1,nu));for(Rg in Tg)MB(Tg,Rg)&&(Ag=Tg[Rg],wg=Ag.s,MB(nu,wg)||Pg(nu,wg,xg(6,Ag.c)))}var Ag,wg,Rg});var HB=o(function(){"use strict";var Mxr=M(),Lxr=Sr(),GB="DOMException";Lxr(Mxr(GB),GB)});var VB=o(function(){"use strict";var $xr=h(),Uxr=T(),WB=An().clear;$xr({global:!0,bind:!0,enumerable:!0,forced:Uxr.clearImmediate!==WB},{clearImmediate:WB})});var bv=o(function(_Vr,zB){"use strict";var KB=T(),Bxr=Lr(),jxr=j(),kxr=Vi(),Gxr=te(),Hxr=Kr(),Wxr=Br(),Vxr=KB.Function,Kxr=/MSIE .\./.test(Gxr)||kxr==="BUN"&&function(){var r=KB.Bun.version.split(".");return r.length<3||r[0]==="0"&&(r[1]<3||r[1]==="3"&&r[2]==="0")}();zB.exports=function(r,e){var t=e?2:1;return Kxr?function(a,i){var n=Wxr(arguments.length,1)>t,u=jxr(a)?a:Vxr(a),s=n?Hxr(arguments,t):[],v=n?function(){Bxr(u,this,s)}:u;return e?r(v,i):r(v)}:r}});var QB=o(function(){"use strict";var zxr=h(),XB=T(),YB=An().set,Yxr=bv(),JB=XB.setImmediate?Yxr(YB,!1):YB;zxr({global:!0,bind:!0,enumerable:!0,forced:XB.setImmediate!==JB},{setImmediate:JB})});var ZB=o(function(){"use strict";VB();QB()});var rj=o(function(){"use strict";var Jxr=h(),Xxr=T(),Qxr=Vq(),Zxr=L(),rPr=Br(),ePr=E(),tPr=P(),aPr=ePr(function(){return tPr&&Object.getOwnPropertyDescriptor(Xxr,"queueMicrotask").value.length!==1});Jxr({global:!0,enumerable:!0,dontCallGetSet:!0,forced:aPr},{queueMicrotask:function(e){rPr(arguments.length,1),Qxr(Zxr(e))}})});var tj=o(function(){"use strict";var iPr=h(),gt=T(),nPr=er(),uPr=P(),oPr=TypeError,sPr=Object.defineProperty,ej=gt.self!==gt;try{uPr?(Rv=Object.getOwnPropertyDescriptor(gt,"self"),(ej||!Rv||!Rv.get||!Rv.enumerable)&&nPr(gt,"self",{get:function(){return gt},set:function(e){if(this!==gt)throw new oPr("Illegal invocation");sPr(gt,"self",{value:e,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})):iPr({global:!0,simple:!0,forced:ej},{self:gt})}catch(r){}var Rv});var hj=o(function(){"use strict";var vPr=D(),cPr=h(),dr=T(),vu=M(),fu=S(),$g=E(),fPr=ze(),oi=j(),lPr=Xe(),hPr=ee(),Cv=_(),qPr=Ve(),pPr=tr(),nj=w(),xv=Mr(),dPr=$(),gPr=ar(),Ng=fr(),Av=H(),yPr=Br(),EPr=je(),_v=qn(),Ug=Jr(),SPr=zt(),aj=Fl(),IPr=Ef(),Bg=Do(),su=dr.Object,OPr=dr.Array,uj=dr.Date,oj=dr.Error,mPr=dr.TypeError,TPr=dr.PerformanceMark,ra=vu("DOMException"),Mg=_v.Map,jg=_v.has,sj=_v.get,Pv=_v.set,vj=Ug.Set,cj=Ug.add,bPr=Ug.has,RPr=vu("Object","keys"),APr=fu([].push),wPr=fu((!0).valueOf),xPr=fu(1.1.valueOf),PPr=fu("".valueOf),CPr=fu(uj.prototype.getTime),Lg=fPr("structuredClone"),cu="DataCloneError",wv="Transferring",fj=function(r){return!$g(function(){var e=new dr.Set([7]),t=r(e),a=r(su(7));return t===e||!t.has(7)||!Cv(a)||+a!=7})&&r},ij=function(r,e){return!$g(function(){var t=new e,a=r({a:t,b:t});return!(a&&a.a===a.b&&a.a instanceof e&&a.a.stack===t.stack)})},_Pr=function(r){return!$g(function(){var e=r(new dr.AggregateError([1],Lg,{cause:3}));return e.name!=="AggregateError"||e.errors[0]!==1||e.message!==Lg||e.cause!==3})},Zt=dr.structuredClone,NPr=vPr||!ij(Zt,oj)||!ij(Zt,ra)||!_Pr(Zt),FPr=!Zt&&fj(function(r){return new TPr(Lg,{detail:r}).detail}),yt=fj(Zt)||FPr,Fg=function(r){throw new ra("Uncloneable type: "+r,cu)},Dr=function(r,e){throw new ra((e||"Cloning")+" of "+r+" cannot be properly polyfilled in this engine",cu)},Dg=function(r,e){return yt||Dr(e),yt(r)},DPr=function(){var r;try{r=new dr.DataTransfer}catch(e){try{r=new dr.ClipboardEvent("").clipboardData}catch(t){}}return r&&r.items&&r.files?r:null},lj=function(r,e,t){if(jg(e,r))return sj(e,r);var a=t||xv(r),i,n,u,s,v,f;if(a==="SharedArrayBuffer")yt?i=yt(r):i=r;else{var c=dr.DataView;!c&&!oi(r.slice)&&Dr("ArrayBuffer");try{if(oi(r.slice)&&!r.resizable)i=r.slice(0);else for(n=r.byteLength,u=("maxByteLength"in r)?{maxByteLength:r.maxByteLength}:void 0,i=new ArrayBuffer(n,u),s=new c(r),v=new c(i),f=0;f<n;f++)v.setUint8(f,s.getUint8(f))}catch(l){throw new ra("ArrayBuffer is detached",cu)}}return Pv(e,r,i),i},MPr=function(r,e,t,a,i){var n=dr[e];return Cv(n)||Dr(e),new n(lj(r.buffer,i),t,a)},pr=function(r,e){if(qPr(r)&&Fg("Symbol"),!Cv(r))return r;if(e){if(jg(e,r))return sj(e,r)}else e=new Mg;var t=xv(r),a,i,n,u,s,v,f,c;switch(t){case"Array":n=OPr(Av(r));break;case"Object":n={};break;case"Map":n=new Mg;break;case"Set":n=new vj;break;case"RegExp":n=new RegExp(r.source,EPr(r));break;case"Error":switch(i=r.name,i){case"AggregateError":n=new(vu(i))([]);break;case"EvalError":case"RangeError":case"ReferenceError":case"SuppressedError":case"SyntaxError":case"TypeError":case"URIError":n=new(vu(i));break;case"CompileError":case"LinkError":case"RuntimeError":n=new(vu("WebAssembly",i));break;default:n=new oj}break;case"DOMException":n=new ra(r.message,r.name);break;case"ArrayBuffer":case"SharedArrayBuffer":n=lj(r,e,t);break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float16Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":v=t==="DataView"?r.byteLength:r.length,n=MPr(r,t,r.byteOffset,v,e);break;case"DOMQuad":try{n=new DOMQuad(pr(r.p1,e),pr(r.p2,e),pr(r.p3,e),pr(r.p4,e))}catch(l){n=Dg(r,t)}break;case"File":if(yt)try{n=yt(r),xv(n)!==t&&(n=void 0)}catch(l){}if(!n)try{n=new File([r],r.name,r)}catch(l){}n||Dr(t);break;case"FileList":if(u=DPr(),u){for(s=0,v=Av(r);s<v;s++)u.items.add(pr(r[s],e));n=u.files}else n=Dg(r,t);break;case"ImageData":try{n=new ImageData(pr(r.data,e),r.width,r.height,{colorSpace:r.colorSpace})}catch(l){n=Dg(r,t)}break;default:if(yt)n=yt(r);else switch(t){case"BigInt":n=su(r.valueOf());break;case"Boolean":n=su(wPr(r));break;case"Number":n=su(xPr(r));break;case"String":n=su(PPr(r));break;case"Date":n=new uj(CPr(r));break;case"Blob":try{n=r.slice(0,r.size,r.type)}catch(l){Dr(t)}break;case"DOMPoint":case"DOMPointReadOnly":a=dr[t];try{n=a.fromPoint?a.fromPoint(r):new a(r.x,r.y,r.z,r.w)}catch(l){Dr(t)}break;case"DOMRect":case"DOMRectReadOnly":a=dr[t];try{n=a.fromRect?a.fromRect(r):new a(r.x,r.y,r.width,r.height)}catch(l){Dr(t)}break;case"DOMMatrix":case"DOMMatrixReadOnly":a=dr[t];try{n=a.fromMatrix?a.fromMatrix(r):new a(r)}catch(l){Dr(t)}break;case"AudioData":case"VideoFrame":oi(r.clone)||Dr(t);try{n=r.clone()}catch(l){Fg(t)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":Dr(t);default:Fg(t)}}switch(Pv(e,r,n),t){case"Array":case"Object":for(f=RPr(r),s=0,v=Av(f);s<v;s++)c=f[s],gPr(n,c,pr(r[c],e));break;case"Map":r.forEach(function(l,q){Pv(n,pr(q,e),pr(l,e))});break;case"Set":r.forEach(function(l){cj(n,pr(l,e))});break;case"Error":Ng(n,"message",pr(r.message,e)),dPr(r,"cause")&&Ng(n,"cause",pr(r.cause,e)),i==="AggregateError"?n.errors=pr(r.errors,e):i==="SuppressedError"&&(n.error=pr(r.error,e),n.suppressed=pr(r.suppressed,e));case"DOMException":IPr&&Ng(n,"stack",pr(r.stack,e))}return n},LPr=function(r,e){if(!Cv(r))throw new mPr("Transfer option cannot be converted to a sequence");var t=[];pPr(r,function(q){APr(t,nj(q))});for(var a=0,i=Av(t),n=new vj,u,s,v,f,c,l;a<i;){if(u=t[a++],s=xv(u),f=void 0,s==="ArrayBuffer"?bPr(n,u):jg(e,u))throw new ra("Duplicate transferable",cu);if(s==="ArrayBuffer"){cj(n,u);continue}if(Bg)f=Zt(u,{transfer:[u]});else switch(s){case"ImageBitmap":v=dr.OffscreenCanvas,lPr(v)||Dr(s,wv);try{c=new v(u.width,u.height),l=c.getContext("bitmaprenderer"),l.transferFromImageBitmap(u),f=c.transferToImageBitmap()}catch(q){}break;case"AudioData":case"VideoFrame":(!oi(u.clone)||!oi(u.close))&&Dr(s,wv);try{f=u.clone(),u.close()}catch(q){}break;case"MediaSourceHandle":case"MessagePort":case"MIDIAccess":case"OffscreenCanvas":case"ReadableStream":case"RTCDataChannel":case"TransformStream":case"WebTransportReceiveStream":case"WebTransportSendStream":case"WritableStream":Dr(s,wv)}if(f===void 0)throw new ra("This object cannot be transferred: "+s,cu);Pv(e,u,f)}return n},$Pr=function(r){SPr(r,function(e){Bg?Zt(e,{transfer:[e]}):oi(e.transfer)?e.transfer():aj?aj(e):Dr("ArrayBuffer",wv)})};cPr({global:!0,enumerable:!0,sham:!Bg,forced:NPr},{structuredClone:function(e){var t=yPr(arguments.length,1)>1&&!hPr(arguments[1])?nj(arguments[1]):void 0,a=t?t.transfer:void 0,i,n;a!==void 0&&(i=new Mg,n=LPr(a,i));var u=pr(e,i);return n&&$Pr(n),u}})});var dj=o(function(){"use strict";var UPr=h(),pj=T(),BPr=bv(),qj=BPr(pj.setInterval,!0);UPr({global:!0,bind:!0,forced:pj.setInterval!==qj},{setInterval:qj})});var Ej=o(function(){"use strict";var jPr=h(),yj=T(),kPr=bv(),gj=kPr(yj.setTimeout,!0);jPr({global:!0,bind:!0,forced:yj.setTimeout!==gj},{setTimeout:gj})});var Sj=o(function(){"use strict";dj();Ej()});var lu=o(function(YVr,Oj){"use strict";var GPr=E(),HPr=N(),WPr=P(),Ij=D(),VPr=HPr("iterator");Oj.exports=!GPr(function(){var r=new URL("b?a=1&b=2&c=3","https://a"),e=r.searchParams,t=new URLSearchParams("a=1&a=2&b=3"),a="";return r.pathname="c%20d",e.forEach(function(i,n){e.delete("b"),a+=n+i}),t.delete("a",2),t.delete("b",void 0),Ij&&(!r.toJSON||!t.has("a",1)||t.has("a",2)||!t.has("a",void 0)||t.has("b"))||!e.size&&(Ij||!WPr)||!e.sort||r.href!=="https://a/c%20d?a=1&c=3"||e.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!e[VPr]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("https://\u0442\u0435\u0441\u0442").host!=="xn--e1aybc"||new URL("https://a#\u0431").hash!=="#%D0%B1"||a!=="a1c3"||new URL("https://x",void 0).host!=="x"})});var Cj=o(function(JVr,Pj){"use strict";var ea=S(),kg=2147483647,hu=36,Aj=1,Wg=26,KPr=38,zPr=700,YPr=72,JPr=128,XPr="-",QPr=/[^\0-\u007E]/,wj=/[.\u3002\uFF0E\uFF61]/g,mj="Overflow: input needs wider integers to process",Gg=hu-Aj,Tj=RangeError,ZPr=ea(wj.exec),si=Math.floor,Hg=String.fromCharCode,bj=ea("".charCodeAt),xj=ea([].join),Et=ea([].push),r1r=ea("".replace),e1r=ea("".split),t1r=ea("".toLowerCase),a1r=function(r){for(var e=[],t=0,a=r.length;t<a;){var i=bj(r,t++);if(i>=55296&&i<=56319&&t<a){var n=bj(r,t++);(n&64512)===56320?Et(e,((i&1023)<<10)+(n&1023)+65536):(Et(e,i),t--)}else Et(e,i)}return e},Rj=function(r){return r+22+75*(r<26)},i1r=function(r,e,t){var a=0;for(r=t?si(r/zPr):r>>1,r+=si(r/e);r>Gg*Wg>>1;)r=si(r/Gg),a+=hu;return si(a+(Gg+1)*r/(r+KPr))},n1r=function(r){var e=[];r=a1r(r);var t=r.length,a=JPr,i=0,n=YPr,u,s;for(u=0;u<r.length;u++)s=r[u],s<128&&Et(e,Hg(s));var v=e.length,f=v;for(v&&Et(e,XPr);f<t;){var c=kg;for(u=0;u<r.length;u++)s=r[u],s>=a&&s<c&&(c=s);var l=f+1;if(c-a>si((kg-i)/l))throw new Tj(mj);for(i+=(c-a)*l,a=c,u=0;u<r.length;u++){if(s=r[u],s<a&&++i>kg)throw new Tj(mj);if(s===a){for(var q=i,p=hu;;){var g=p<=n?Aj:p>=n+Wg?Wg:p-n;if(q<g)break;var y=q-g,d=hu-g;Et(e,Hg(Rj(g+y%d))),q=si(y/d),p+=hu}Et(e,Hg(Rj(q))),n=i1r(i,l,f===v),i=0,f++}}i++,a++}return xj(e,"")};Pj.exports=function(r){var e=[],t=e1r(r1r(t1r(r),wj,"."),"."),a,i;for(a=0;a<t.length;a++)i=t[a],Et(e,ZPr(QPr,i)?"xn--"+n1r(i):i);return xj(e,".")}});var Kg=o(function(XVr,Fj){"use strict";Wp();var u1r=M(),qu=S(),o1r=String.fromCharCode,s1r=u1r("String","fromCodePoint"),_j=encodeURIComponent,v1r=parseInt,Vg=qu("".charAt),c1r=qu([].push),f1r=qu("".replace),l1r=qu("".slice),h1r=qu(/./.exec),Nv="\uFFFD",q1r=/^[0-9a-f]+$/i,p1r=/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g,Nj=function(r,e){var t=l1r(r,e,e+2);return h1r(q1r,t)?v1r(t,16):NaN},d1r=function(r){for(var e=0,t=128;t>0&&r&t;t>>=1)e++;return e},g1r=function(r){var e=null,t=r.length;switch(t){case 1:e=r[0];break;case 2:e=(r[0]&31)<<6|r[1]&63;break;case 3:e=(r[0]&15)<<12|(r[1]&63)<<6|r[2]&63;break;case 4:e=(r[0]&7)<<18|(r[1]&63)<<12|(r[2]&63)<<6|r[3]&63;break}return e===null||e>1114111||e>=55296&&e<=57343||e<(t>3?65536:t>2?2048:t>1?128:0)?null:e},y1r=function(r){return r.length===2?r:Nv},E1r=function(r){for(var e=r.length,t="",a=0;a<e;){var i=Vg(r,a);if(i==="%"){if(Vg(r,a+1)==="%"||a+3>e){t+="%",a++;continue}var n=Nj(r,a+1);if(n!==n){t+=i,a++;continue}a+=2;var u=d1r(n);if(u===0)i=o1r(n);else{if(u===1||u>4){t+=Nv,a++;continue}for(var s=[n],v=1;v<u&&(a++,!(a+3>e||Vg(r,a)!=="%"));){var f=Nj(r,a+1);if(f!==f||f>191||f<128||v===1&&(n===224&&f<160||n===237&&f>159||n===240&&f<144||n===244&&f>143))break;c1r(s,f),a+=2,v++}if(s.length!==u){t+=Nv;continue}var c=g1r(s);if(c===null){for(var l=0;l<u;l++)t+=Nv;a++;continue}else i=s1r(c)}}t+=i,a++}return t},S1r=function(r){try{return _j(r)}catch(e){return _j(f1r(r,p1r,y1r))}};Fj.exports={decode:E1r,encode:S1r}});var ey=o(function(QVr,ek){"use strict";Gi();var Qg=h(),I1r=T(),Zg=Uq(),Fv=R(),Re=S(),pu=P(),Vj=lu(),Kj=Kg(),zj=W(),O1r=er(),m1r=ye(),T1r=Sr(),b1r=po(),ry=Y(),Yj=Cr(),zg=j(),R1r=$(),A1r=Pr(),w1r=Mr(),x1r=w(),Jj=_(),mr=F(),P1r=or(),Dj=xr(),Mj=Ce(),C1r=Pe(),Dv=Fe(),vi=Br(),_1r=N(),N1r=Oo(),F1r=_1r("iterator"),fi="URLSearchParams",Xj=fi+"Iterator",Qj=ry.set,Xr=ry.getterFor(fi),D1r=ry.getterFor(Xj),M1r=Kj.decode,L1r=Kj.encode,Lj=Zg("fetch"),Lv=Zg("Request"),du=Zg("Headers"),Yg=Lv&&Lv.prototype,$j=du&&du.prototype,$1r=I1r.TypeError,U1r=Re("".charAt),Uj=Re([].join),ta=Re([].push),Zj=Re("".replace),B1r=Re([].shift),Bj=Re([].splice),jj=Re("".split),j1r=Re("".slice),k1r=/\+/g,kj=function(r){return M1r(Zj(r,k1r," "))},G1r=/[!'()~]|%20/g,H1r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},W1r=function(r){return H1r[r]},Gj=function(r){return Zj(L1r(r),G1r,W1r)},Jg=b1r(function(e,t){Qj(this,{type:Xj,target:Xr(e).entries,index:0,kind:t})},fi,function(){var e=D1r(this),t=e.target,a=e.index++;if(!t||a>=t.length)return e.target=null,Dv(void 0,!0);var i=t[a];switch(e.kind){case"keys":return Dv(i.key,!1);case"values":return Dv(i.value,!1)}return Dv([i.key,i.value],!1)},!0),rk=function(r){this.entries=[],this.url=null,r!==void 0&&(Jj(r)?this.parseObject(r):this.parseQuery(typeof r=="string"?U1r(r,0)==="?"?j1r(r,1):r:mr(r)))};rk.prototype={type:fi,bindURL:function(r){this.url=r,this.update()},parseObject:function(r){var e=this.entries,t=C1r(r),a,i,n,u,s,v,f;if(t)for(a=Mj(r,t),i=a.next;!(n=Fv(i,a)).done;){if(u=Mj(x1r(n.value)),s=u.next,(v=Fv(s,u)).done||(f=Fv(s,u)).done||!Fv(s,u).done)throw new $1r("Expected sequence with length 2");ta(e,{key:mr(v.value),value:mr(f.value)})}else for(var c in r)R1r(r,c)&&ta(e,{key:c,value:mr(r[c])})},parseQuery:function(r){if(r)for(var e=this.entries,t=jj(r,"&"),a=0,i,n;a<t.length;)i=t[a++],i.length&&(n=jj(i,"="),ta(e,{key:kj(B1r(n)),value:kj(Uj(n,"="))}))},serialize:function(){for(var r=this.entries,e=[],t=0,a;t<r.length;)a=r[t++],ta(e,Gj(a.key)+"="+Gj(a.value));return Uj(e,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var $v=function(){Yj(this,ci);var e=arguments.length>0?arguments[0]:void 0,t=Qj(this,new rk(e));pu||(this.size=t.entries.length)},ci=$v.prototype;m1r(ci,{append:function(e,t){var a=Xr(this);vi(arguments.length,2),ta(a.entries,{key:mr(e),value:mr(t)}),pu||this.size++,a.updateURL()},delete:function(r){for(var e=Xr(this),t=vi(arguments.length,1),a=e.entries,i=mr(r),n=t<2?void 0:arguments[1],u=n===void 0?n:mr(n),s=0;s<a.length;){var v=a[s];v.key===i&&(u===void 0||v.value===u)?Bj(a,s,1):s++}pu||(this.size=a.length),e.updateURL()},get:function(e){var t=Xr(this).entries;vi(arguments.length,1);for(var a=mr(e),i=0;i<t.length;i++)if(t[i].key===a)return t[i].value;return null},getAll:function(e){var t=Xr(this).entries;vi(arguments.length,1);for(var a=mr(e),i=[],n=0;n<t.length;n++)t[n].key===a&&ta(i,t[n].value);return i},has:function(e){for(var t=Xr(this).entries,a=vi(arguments.length,1),i=mr(e),n=a<2?void 0:arguments[1],u=n===void 0?n:mr(n),s=0;s<t.length;){var v=t[s++];if(v.key===i&&(u===void 0||v.value===u))return!0}return!1},set:function(e,t){var a=Xr(this);vi(arguments.length,2);for(var i=a.entries,n=!1,u=mr(e),s=mr(t),v=0,f;v<i.length;v++)f=i[v],f.key===u&&(n?Bj(i,v--,1):(n=!0,f.value=s));n||ta(i,{key:u,value:s}),pu||(this.size=i.length),a.updateURL()},sort:function(){var e=Xr(this);N1r(e.entries,function(t,a){return t.key>a.key?1:-1}),e.updateURL()},forEach:function(e){for(var t=Xr(this).entries,a=A1r(e,arguments.length>1?arguments[1]:void 0),i=0,n;i<t.length;)n=t[i++],a(n.value,n.key,this)},keys:function(){return new Jg(this,"keys")},values:function(){return new Jg(this,"values")},entries:function(){return new Jg(this,"entries")}},{enumerable:!0});zj(ci,F1r,ci.entries,{name:"entries"});zj(ci,"toString",function(){return Xr(this).serialize()},{enumerable:!0});pu&&O1r(ci,"size",{get:function(){return Xr(this).entries.length},configurable:!0,enumerable:!0});T1r($v,fi);Qg({global:!0,constructor:!0,forced:!Vj},{URLSearchParams:$v});!Vj&&zg(du)&&(Hj=Re($j.has),Wj=Re($j.set),Xg=function(r){if(Jj(r)){var e=r.body,t;if(w1r(e)===fi)return t=r.headers?new du(r.headers):new du,Hj(t,"content-type")||Wj(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),P1r(r,{body:Dj(0,mr(e)),headers:Dj(0,t)})}return r},zg(Lj)&&Qg({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(e){return Lj(e,arguments.length>1?Xg(arguments[1]):{})}}),zg(Lv)&&(Mv=function(e){return Yj(this,Yg),new Lv(e,arguments.length>1?Xg(arguments[1]):{})},Yg.constructor=Mv,Mv.prototype=Yg,Qg({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Mv})));var Hj,Wj,Xg,Mv;ek.exports={URLSearchParams:$v,getState:Xr}});var Rk=o(function(){"use strict";Vp();var V1r=h(),gy=P(),K1r=lu(),yy=T(),tk=Pr(),kr=S(),kv=W(),Qr=er(),z1r=Cr(),Gv=$(),Iu=Oq(),na=Bf(),le=Kr(),qk=Un().codeAt,ak=Cj(),pk=Kg(),He=F(),Y1r=Sr(),J1r=Br(),dk=ey(),gk=Y(),X1r=gk.set,Hv=gk.getterFor("URL"),Q1r=dk.URLSearchParams,Z1r=dk.getState,rCr=pk.decode,eCr=pk.encode,gu=yy.URL,py=yy.TypeError,Wv=yy.parseInt,tCr=Math.floor,ik=Math.pow,yk=String.fromCharCode,he=kr("".charAt),br=kr(/./.exec),Eu=kr([].join),aCr=kr(1.1.toString),iCr=kr([].pop),hi=kr([].push),ty=kr("".replace),nCr=kr([].shift),Ek=kr("".split),uCr=kr("".indexOf),qi=kr("".slice),Vv=kr("".toLowerCase),oCr=kr([].unshift),sCr="Invalid authority",ay="Invalid scheme",aa="Invalid host",nk="Invalid port",Sk=/[a-z]/i,vCr=/[\d+\-.a-z]/i,dy=/\d/,Ik=/^0x/i,cCr=/^[0-7]+$/,Ok=/^\d+$/,Ey=/^[\da-f]+$/i,fCr=/[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/,lCr=/[\0\t\n\r #/:<>?@[\\\]^|]/,hCr=/^[\u0000-\u0020]+/,qCr=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,pCr=/[\t\n\r]/g,dCr=/[^\u0000-\u007F]/,gCr="\xA8\xAF\xB4\xB8\u02D8\u02D9\u02DA\u02DB\u02DC\u02DD\u037A\u0384\u0385\u1FBD\u1FBF\u1FC0\u1FC1\u1FCD\u1FCE\u1FCF\u1FDD\u1FDE\u1FDF\u1FED\u1FEE\u1FFD\u1FFE\u2017\u203E\u2047\u2048\u2049\u2100\u2101\u2105\u2106\u2A74\u309B\u309C\uFC5E\uFC5F\uFC60\uFC61\uFC62\uFC63\uFDFA\uFDFB\uFE13\uFE16\uFE47\uFE48\uFE49\uFE4A\uFE4B\uFE4C\uFE55\uFE56\uFE5F\uFE64\uFE65\uFE68\uFE6A\uFE6B\uFE70\uFE72\uFE74\uFE76\uFE78\uFE7A\uFE7C\uFE7E\uFFE3",Zr,yCr=function(r){return r===173||r===847||r===8203||r===12644||r===65279||r===65440||r>=4447&&r<=4448||r>=6068&&r<=6069||r>=6155&&r<=6159||r>=8288&&r<=8292||r>=8298&&r<=8303||r>=65024&&r<=65039||r>=917760&&r<=917999},ECr=function(r){return r===65533||r>=55296&&r<=57343||r>=128&&r<=159||r>=8206&&r<=8207||r>=8232&&r<=8233||r>=8234&&r<=8238||r>=8293&&r<=8297||r>=64976&&r<=65007||(r&65534)===65534||r>=57344&&r<=63743||r>=983040&&r<=1114109},SCr=function(r){return r>=65281&&r<=65374?r-65248:r===160||r===5760||r===8239||r===8287||r===12288||r>=8192&&r<=8202||r<=65535&&uCr(gCr,yk(r))>-1?32:r},ICr=function(r){if(!br(dCr,r))return r===""?null:ak(r);var e=na(r),t="",a,i,n;for(a=0;a<e.length;a++){if(i=qk(e[a],0),ECr(i))return null;yCr(i)||(n=SCr(i),t+=n===i?e[a]:yk(n))}return t===""?null:ak(t)},OCr=function(r){var e=Ek(r,"."),t,a;if(e[e.length-1]===""){if(e.length===1)return!1;e.length--}return t=e[e.length-1],br(Ok,t)?!0:br(Ik,t)?(a=qi(t,2),a===""||!!br(Ey,a)):!1},mCr=function(r){var e=Ek(r,"."),t,a,i,n,u,s,v;if(e.length&&e[e.length-1]===""&&e.length--,t=e.length,t>4)return null;for(a=[],i=0;i<t;i++){if(n=e[i],n==="")return null;if(u=10,n.length>1&&he(n,0)==="0"&&(u=br(Ik,n)?16:8,n=qi(n,u===8?1:2)),n==="")s=0;else{if(!br(u===10?Ok:u===8?cCr:Ey,n))return null;s=Wv(n,u)}hi(a,s)}for(i=0;i<t;i++)if(s=a[i],i===t-1){if(s>=ik(256,5-t))return null}else if(s>255)return null;for(v=iCr(a),i=0;i<a.length;i++)v+=a[i]*ik(256,3-i);return v},TCr=function(r){var e=[0,0,0,0,0,0,0,0],t=0,a=null,i=0,n,u,s,v,f,c,l,q=function(){return he(r,i)};if(q()===":"){if(he(r,1)!==":")return;i+=2,t++,a=t}for(;q();){if(t===8)return;if(q()===":"){if(a!==null)return;i++,t++,a=t;continue}for(n=u=0;u<4&&br(Ey,q());)n=n*16+Wv(q(),16),i++,u++;if(q()==="."){if(u===0||(i-=u,t>6))return;for(s=0;q();){if(v=null,s>0)if(q()==="."&&s<4)i++;else return;if(!br(dy,q()))return;for(;br(dy,q());){if(f=Wv(q(),10),v===null)v=f;else{if(v===0)return;v=v*10+f}if(v>255)return;i++}e[t]=e[t]*256+v,s++,(s===2||s===4)&&t++}if(s!==4)return;break}else if(q()===":"){if(i++,!q())return}else if(q())return;e[t++]=n}if(a!==null)for(c=t-a,t=7;t!==0&&c>0;)l=e[t],e[t--]=e[a+c-1],e[a+--c]=l;else if(t!==8)return;return e},bCr=function(r){for(var e=null,t=1,a=null,i=0,n=0;n<8;n++)r[n]!==0?(i>t&&(e=a,t=i),a=null,i=0):(a===null&&(a=n),++i);return i>t?a:e},yu=function(r){var e,t,a,i;if(typeof r=="number"){for(e=[],t=0;t<4;t++)oCr(e,r%256),r=tCr(r/256);return Eu(e,".")}if(typeof r=="object"){for(e="",a=bCr(r),t=0;t<8;t++)i&&r[t]===0||(i&&(i=!1),a===t?(e+=t?":":"::",i=!0):(e+=aCr(r[t],16),t<7&&(e+=":")));return"["+e+"]"}return r},Kv={},mk=Iu({},Kv,{" ":1,'"':1,"#":1,"<":1,">":1}),RCr=Iu({},mk,{"'":1}),Tk=Iu({},Kv,{" ":1,'"':1,"<":1,">":1,"`":1}),bk=Iu({},Tk,{"#":1,"?":1,"{":1,"}":1,"^":1}),iy=Iu({},bk,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),St=function(r,e){var t=qk(r,0);return t>=32&&t<127&&!Gv(e,r)?r:r==="'"&&Gv(e,r)?"%27":eCr(r)},Uv={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Su=function(r,e){var t;return r.length===2&&br(Sk,he(r,0))&&((t=he(r,1))===":"||!e&&t==="|")},uk=function(r){var e;return r.length>1&&Su(qi(r,0,2))&&(r.length===2||(e=he(r,2))==="/"||e==="\\"||e==="?"||e==="#")},ACr=function(r){return r==="."||Vv(r)==="%2e"},wCr=function(r){return r=Vv(r),r===".."||r==="%2e."||r===".%2e"||r==="%2e%2e"},ny={},ok={},uy={},sk={},vk={},oy={},ck={},fk={},Bv={},jv={},sy={},vy={},cy={},fy={},lk={},ly={},li={},Ae={},hk={},ia={},Ge={},Sy=function(r,e,t){var a=He(r),i,n,u;if(e){if(n=this.parse(a),n)throw new py(n);this.searchParams=null}else{if(t!==void 0&&(i=new Sy(t,!0)),n=this.parse(a,null,i),n)throw new py(n);u=Z1r(new Q1r),u.bindURL(this),this.searchParams=u}};Sy.prototype={type:"URL",parse:function(r,e,t){var a=this,i=e||ny,n=0,u="",s=!1,v=!1,f=!1,c,l,q,p;for(r=He(r),e||(a.scheme="",a.username="",a.password="",a.host=null,a.port=null,a.path=[],a.query=null,a.fragment=null,a.cannotBeABaseURL=!1,r=ty(r,hCr,""),r=ty(r,qCr,"$1")),r=ty(r,pCr,""),c=na(r);n<=c.length;){switch(l=c[n],i){case ny:if(l&&br(Sk,l))u+=Vv(l),i=ok;else{if(e)return ay;i=uy;continue}break;case ok:if(l&&br(vCr,l))u+=Vv(l);else if(l===":"){if(e&&(a.isSpecial()!==Gv(Uv,u)||u==="file"&&(a.includesCredentials()||a.port!==null)||a.scheme==="file"&&a.host===""))return;if(a.scheme=u,e){a.isSpecial()&&Uv[a.scheme]===a.port&&(a.port=null);return}u="",a.scheme==="file"?i=fy:a.isSpecial()&&t&&t.scheme===a.scheme?i=sk:a.isSpecial()?i=fk:c[n+1]==="/"?(i=vk,n++):(a.cannotBeABaseURL=!0,hi(a.path,""),i=hk)}else{if(e)return ay;u="",i=uy,n=0;continue}break;case uy:if(!t||t.cannotBeABaseURL&&l!=="#")return ay;if(t.cannotBeABaseURL&&l==="#"){a.scheme=t.scheme,a.path=le(t.path),a.query=t.query,a.fragment="",a.cannotBeABaseURL=!0,i=Ge;break}i=t.scheme==="file"?fy:oy;continue;case sk:if(l==="/"&&c[n+1]==="/")i=Bv,n++;else{i=oy;continue}break;case vk:if(l==="/"){i=jv;break}else{i=Ae;continue}case oy:if(a.scheme=t.scheme,l===Zr)a.username=t.username,a.password=t.password,a.host=t.host,a.port=t.port,a.path=le(t.path),a.query=t.query;else if(l==="/"||l==="\\"&&a.isSpecial())i=ck;else if(l==="?")a.username=t.username,a.password=t.password,a.host=t.host,a.port=t.port,a.path=le(t.path),a.query="",i=ia;else if(l==="#")a.username=t.username,a.password=t.password,a.host=t.host,a.port=t.port,a.path=le(t.path),a.query=t.query,a.fragment="",i=Ge;else{a.username=t.username,a.password=t.password,a.host=t.host,a.port=t.port,a.path=le(t.path),a.path.length&&a.path.length--,i=Ae;continue}break;case ck:if(a.isSpecial()&&(l==="/"||l==="\\"))i=Bv;else if(l==="/")i=jv;else{a.username=t.username,a.password=t.password,a.host=t.host,a.port=t.port,i=Ae;continue}break;case fk:if(i=Bv,l!=="/"||c[n+1]!=="/")continue;n++;break;case Bv:if(l!=="/"&&l!=="\\"){i=jv;continue}break;case jv:if(l==="@"){s&&(u="%40"+u),s=!0,q=na(u);for(var g=0;g<q.length;g++){var y=q[g];if(y===":"&&!f){f=!0;continue}var d=St(y,iy);f?a.password+=d:a.username+=d}u=""}else if(l===Zr||l==="/"||l==="?"||l==="#"||l==="\\"&&a.isSpecial()){if(s&&u==="")return sCr;n-=na(u).length+1,u="",i=sy}else u+=l;break;case sy:case vy:if(e&&a.scheme==="file"){i=ly;continue}else if(l===":"&&!v){if(u==="")return aa;if(e===vy)return;if(p=a.parseHost(u),p)return p;u="",i=cy}else if(l===Zr||l==="/"||l==="?"||l==="#"||l==="\\"&&a.isSpecial()){if(a.isSpecial()&&u==="")return aa;if(e&&u===""&&(a.includesCredentials()||a.port!==null))return;if(p=a.parseHost(u),p)return p;if(u="",i=li,e)return;continue}else l==="["?v=!0:l==="]"&&(v=!1),u+=l;break;case cy:if(br(dy,l))u+=l;else if(l===Zr||l==="/"||l==="?"||l==="#"||l==="\\"&&a.isSpecial()||e){if(u!==""){var O=Wv(u,10);if(O>65535)return nk;a.port=a.isSpecial()&&O===Uv[a.scheme]?null:O,u=""}if(e)return;i=li;continue}else return nk;break;case fy:if(a.scheme="file",a.host="",l==="/"||l==="\\")i=lk;else if(t&&t.scheme==="file")switch(l){case Zr:a.host=t.host,a.path=le(t.path),a.query=t.query;break;case"?":a.host=t.host,a.path=le(t.path),a.query="",i=ia;break;case"#":a.host=t.host,a.path=le(t.path),a.query=t.query,a.fragment="",i=Ge;break;default:a.host=t.host,uk(Eu(le(c,n),""))||(a.path=le(t.path),a.shortenPath()),i=Ae;continue}else{i=Ae;continue}break;case lk:if(l==="/"||l==="\\"){i=ly;break}t&&t.scheme==="file"&&(a.host=t.host,!uk(Eu(le(c,n),""))&&Su(t.path[0],!0)&&hi(a.path,t.path[0])),i=Ae;continue;case ly:if(l===Zr||l==="/"||l==="\\"||l==="?"||l==="#"){if(!e&&Su(u))i=Ae;else if(u===""){if(a.host="",e)return;i=li}else{if(p=a.parseHost(u),p)return p;if(a.host==="localhost"&&(a.host=""),e)return;u="",i=li}continue}else u+=l;break;case li:if(a.isSpecial()){if(i=Ae,l!=="/"&&l!=="\\")continue}else if(!e&&l==="?")a.query="",i=ia;else if(!e&&l==="#")a.fragment="",i=Ge;else if(l!==Zr&&(i=Ae,l!=="/"))continue;break;case Ae:if(l===Zr||l==="/"||l==="\\"&&a.isSpecial()||!e&&(l==="?"||l==="#")){if(wCr(u)?(a.shortenPath(),l!=="/"&&!(l==="\\"&&a.isSpecial())&&hi(a.path,"")):ACr(u)?l!=="/"&&!(l==="\\"&&a.isSpecial())&&hi(a.path,""):(a.scheme==="file"&&!a.path.length&&Su(u)&&(a.host!==null&&a.host!==""&&(a.host=""),u=he(u,0)+":"),hi(a.path,u)),u="",a.scheme==="file"&&(l===Zr||l==="?"||l==="#"))for(;a.path.length>1&&a.path[0]==="";)nCr(a.path);l==="?"?(a.query="",i=ia):l==="#"&&(a.fragment="",i=Ge)}else u+=St(l,bk);break;case hk:l==="?"?(a.query="",i=ia):l==="#"?(a.fragment="",i=Ge):l!==Zr&&(l===" "?a.path[0]+=c[n+1]==="?"||c[n+1]==="#"?"%20":" ":a.path[0]+=St(l,Kv));break;case ia:!e&&l==="#"?(a.fragment="",i=Ge):l!==Zr&&(a.query+=St(l,a.isSpecial()?RCr:mk));break;case Ge:l!==Zr&&(a.fragment+=St(l,Tk));break}n++}},parseHost:function(r){var e,t,a;if(he(r,0)==="["){if(he(r,r.length-1)!=="]"||(e=TCr(qi(r,1,-1)),!e))return aa;this.host=e}else if(this.isSpecial()){if(r=ICr(rCr(r)),r===null||br(fCr,r))return aa;if(OCr(r)){if(e=mCr(r),e===null)return aa;this.host=e}else this.host=r}else{if(br(lCr,r))return aa;for(e="",t=na(r),a=0;a<t.length;a++)e+=St(t[a],Kv);this.host=e}},cannotHaveUsernamePasswordPort:function(){return this.host===null||this.host===""||this.cannotBeABaseURL||this.scheme==="file"},includesCredentials:function(){return this.username!==""||this.password!==""},isSpecial:function(){return Gv(Uv,this.scheme)},shortenPath:function(){var r=this.path,e=r.length;e&&(this.scheme!=="file"||e!==1||!Su(r[0],!0))&&r.length--},serialize:function(){var r=this,e=r.scheme,t=r.username,a=r.password,i=r.host,n=r.port,u=r.path,s=r.query,v=r.fragment,f=e+":";return i!==null?(f+="//",r.includesCredentials()&&(f+=t+(a?":"+a:"")+"@"),f+=yu(i),n!==null&&(f+=":"+n)):e==="file"&&(f+="//"),i===null&&!r.cannotBeABaseURL&&u.length>1&&u[0]===""&&(f+="/."),f+=r.cannotBeABaseURL?u[0]:u.length?"/"+Eu(u,"/"):"",s!==null&&(f+="?"+s),v!==null&&(f+="#"+v),f},setHref:function(r){var e=this.parse(r);if(e)throw new py(e);this.searchParams.update()},getOrigin:function(){var r=this.scheme,e=this.port;if(r==="blob")try{return new pi(this.path[0]).origin}catch(t){return"null"}return r==="file"||!this.isSpecial()?"null":r+"://"+yu(this.host)+(e!==null?":"+e:"")},getProtocol:function(){return this.scheme+":"},setProtocol:function(r){this.parse(He(r)+":",ny)},getUsername:function(){return this.username},setUsername:function(r){var e=na(He(r));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var t=0;t<e.length;t++)this.username+=St(e[t],iy)}},getPassword:function(){return this.password},setPassword:function(r){var e=na(He(r));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var t=0;t<e.length;t++)this.password+=St(e[t],iy)}},getHost:function(){var r=this.host,e=this.port;return r===null?"":e===null?yu(r):yu(r)+":"+e},setHost:function(r){this.cannotBeABaseURL||this.parse(r,sy)},getHostname:function(){var r=this.host;return r===null?"":yu(r)},setHostname:function(r){this.cannotBeABaseURL||this.parse(r,vy)},getPort:function(){var r=this.port;return r===null?"":He(r)},setPort:function(r){this.cannotHaveUsernamePasswordPort()||(r=He(r),r===""?this.port=null:this.parse(r,cy))},getPathname:function(){var r=this.path;return this.cannotBeABaseURL?r[0]:r.length?"/"+Eu(r,"/"):""},setPathname:function(r){this.cannotBeABaseURL||(this.path=[],this.parse(r,li))},getSearch:function(){var r=this.query;return r?"?"+r:""},setSearch:function(r){r=He(r),r===""?this.query=null:(he(r,0)==="?"&&(r=qi(r,1)),this.query="",this.parse(r,ia)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var r=this.fragment;return r?"#"+r:""},setHash:function(r){if(r=He(r),r===""){this.fragment=null;return}he(r,0)==="#"&&(r=qi(r,1)),this.fragment="",this.parse(r,Ge)},update:function(){this.query=this.searchParams.serialize()||null}};var pi=function(e){var t=z1r(this,Tr),a=J1r(arguments.length,1)>1?arguments[1]:void 0,i=X1r(t,new Sy(e,!1,a));gy||(t.href=i.serialize(),t.origin=i.getOrigin(),t.protocol=i.getProtocol(),t.username=i.getUsername(),t.password=i.getPassword(),t.host=i.getHost(),t.hostname=i.getHostname(),t.port=i.getPort(),t.pathname=i.getPathname(),t.search=i.getSearch(),t.searchParams=i.getSearchParams(),t.hash=i.getHash())},Tr=pi.prototype,re=function(r,e){return{get:function(){return Hv(this)[r]()},set:e&&function(t){return Hv(this)[e](t)},configurable:!0,enumerable:!0}};gy&&(Qr(Tr,"href",re("serialize","setHref")),Qr(Tr,"origin",re("getOrigin")),Qr(Tr,"protocol",re("getProtocol","setProtocol")),Qr(Tr,"username",re("getUsername","setUsername")),Qr(Tr,"password",re("getPassword","setPassword")),Qr(Tr,"host",re("getHost","setHost")),Qr(Tr,"hostname",re("getHostname","setHostname")),Qr(Tr,"port",re("getPort","setPort")),Qr(Tr,"pathname",re("getPathname","setPathname")),Qr(Tr,"search",re("getSearch","setSearch")),Qr(Tr,"searchParams",re("getSearchParams")),Qr(Tr,"hash",re("getHash","setHash")));kv(Tr,"toJSON",function(){return Hv(this).serialize()},{enumerable:!0});kv(Tr,"toString",function(){return Hv(this).serialize()},{enumerable:!0});gu&&(hy=gu.createObjectURL,qy=gu.revokeObjectURL,hy&&kv(pi,"createObjectURL",tk(hy,gu)),qy&&kv(pi,"revokeObjectURL",tk(qy,gu)));var hy,qy;Y1r(pi,"URL");V1r({global:!0,constructor:!0,forced:!K1r,sham:!gy},{URL:pi})});var Ak=o(function(){"use strict";Rk()});var Pk=o(function(){"use strict";var xCr=h(),PCr=M(),xk=E(),CCr=Br(),wk=F(),_Cr=lu(),Iy=PCr("URL"),NCr=_Cr&&xk(function(){Iy.canParse()}),FCr=xk(function(){return Iy.canParse.length!==1});xCr({target:"URL",stat:!0,forced:!NCr||FCr},{canParse:function(e){var t=CCr(arguments.length,1),a=wk(e),i=t<2||arguments[1]===void 0?void 0:wk(arguments[1]);try{return!!new Iy(a,i)}catch(n){return!1}}})});var _k=o(function(){"use strict";var DCr=h(),MCr=M(),LCr=Br(),Ck=F(),$Cr=lu(),UCr=MCr("URL");DCr({target:"URL",stat:!0,forced:!$Cr},{parse:function(e){var t=LCr(arguments.length,1),a=Ck(e),i=t<2||arguments[1]===void 0?void 0:Ck(arguments[1]);try{return new UCr(a,i)}catch(n){return null}}})});var Nk=o(function(){"use strict";var BCr=h(),jCr=R(),kCr=To(),GCr=kCr("URL","toString");BCr({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return jCr(GCr,this)}})});var Fk=o(function(){"use strict";ey()});var $k=o(function(){"use strict";var HCr=W(),zv=S(),Dk=F(),WCr=Br(),Lk=URLSearchParams,Yv=Lk.prototype,VCr=zv(Yv.append),Mk=zv(Yv.delete),KCr=zv(Yv.forEach),zCr=zv([].push),Oy=new Lk("a=1&a=2&b=3");Oy.delete("a",1);Oy.delete("b",void 0);Oy+""!="a=2"&&HCr(Yv,"delete",function(r){var e=arguments.length,t=e<2?void 0:arguments[1];if(e&&t===void 0)return Mk(this,r);var a=[];KCr(this,function(f,c){zCr(a,{key:c,value:f})}),WCr(e,1);for(var i=Dk(r),n=Dk(t),u=0,s=a.length,v;u<s;)v=a[u],Mk(this,v.key),u++;for(u=0;u<s;)v=a[u++],v.key===i&&v.value===n||VCr(this,v.key,v.value)},{enumerable:!0,unsafe:!0})});var kk=o(function(){"use strict";var YCr=W(),Bk=S(),JCr=F(),XCr=Br(),jk=URLSearchParams,my=jk.prototype,QCr=Bk(my.getAll),ZCr=Bk(my.has),Uk=new jk("a=1");(Uk.has("a",2)||!Uk.has("a",void 0))&&YCr(my,"has",function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&a===void 0)return ZCr(this,e);var i=QCr(this,e);XCr(t,1);for(var n=JCr(a),u=0;u<i.length;)if(i[u++]===n)return!0;return!1},{enumerable:!0,unsafe:!0})});var Gk=o(function(){"use strict";var r_r=P(),e_r=S(),t_r=er(),Ty=URLSearchParams.prototype,a_r=e_r(Ty.forEach);r_r&&!("size"in Ty)&&t_r(Ty,"size",{get:function(){var e=0;return a_r(this,function(){e++}),e},configurable:!0,enumerable:!0})});var Wk=o(function(g4r,Hk){"use strict";eO();cO();fO();lO();hO();qO();pO();dO();gO();yO();EO();SO();IO();OO();mO();TO();bO();em();nm();cm();wm();_m();Dm();Lm();Hm();zm();Jm();Zm();rT();tT();iT();oT();sT();fT();lT();pT();bT();AT();xT();PT();Gi();XT();eb();tb();ib();nb();hb();pb();gb();Sb();Ib();Lb();Bb();kb();Gb();Vb();Kb();zb();Yb();Jb();Xb();AR();UR();WR();KR();QR();aA();vA();bA();AA();wA();PA();FA();DA();WA();VA();XA();e0();f0();q0();S0();m0();A0();w0();F0();X0();Z0();tw();vw();cw();qw();pw();Ew();Sw();Iw();bw();ww();_w();Dw();Mw();kw();Gw();Yw();cx();px();dx();Tx();Px();lf();Cx();Kx();Xx();Qx();Zx();aP();nP();oP();sP();vP();lP();qP();pP();dP();yP();SP();OP();mP();TP();bP();wP();_P();DP();MP();LP();KP();zP();XP();QP();ZP();r1();e1();t1();s1();d1();S1();R1();x1();F1();D1();$1();B1();k1();G1();Y1();J1();X1();rC();eC();tC();iC();uC();oC();vC();fC();hC();pC();gC();yC();EC();SC();bC();RC();AC();PC();CC();NC();DC();X_();Q_();rN();iN();uN();oN();MN();HN();zN();YN();tF();uF();oF();lF();hF();qF();pF();dF();gF();yF();bF();AF();wF();HF();XF();ZF();_s();uD();sD();fD();pD();gD();kD();VD();YD();QD();eM();nM();sM();vM();hM();yM();Wp();OM();TM();Vp();LM();KM();YM();JM();r2();e2();u2();v2();l2();p2();y2();I2();b2();x2();F2();U2();G2();H2();W2();V2();K2();z2();Y2();J2();X2();Q2();Z2();rL();eL();wL();xL();PL();CL();_L();NL();FL();DL();ML();$L();BL();kL();HL();KL();YL();XL();ZL();e$();a$();i$();u$();s$();h$();p$();g$();E$();I$();m$();b$();A$();N$();F$();M$();k$();H$();Y$();J$();X$();Z$();eU();cU();qU();dU();gU();IU();mU();wU();GU();WU();QU();rB();oB();fB();yB();mB();DB();kB();HB();ZB();rj();tj();hj();Sj();Ak();Pk();_k();Nk();Fk();$k();kk();Gk();Hk.exports=bi()});var Vk=o(function(y4r,Ry){var by=function(r){"use strict";var e=Object.prototype,t=e.hasOwnProperty,a=Object.defineProperty||function(m,I,b){m[I]=b.value},i,n=typeof Symbol=="function"?Symbol:{},u=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",v=n.toStringTag||"@@toStringTag";function f(m,I,b){return Object.defineProperty(m,I,{value:b,enumerable:!0,configurable:!0,writable:!0}),m[I]}try{f({},"")}catch(m){f=function(I,b,B){return I[b]=B}}function c(m,I,b,B){var C=I&&I.prototype instanceof O?I:O,K=Object.create(C.prototype),Rr=new Xv(B||[]);return a(K,"_invoke",{value:Kk(m,b,Rr)}),K}r.wrap=c;function l(m,I,b){try{return{type:"normal",arg:m.call(I,b)}}catch(B){return{type:"throw",arg:B}}}var q="suspendedStart",p="suspendedYield",g="executing",y="completed",d={};function O(){}function x(){}function A(){}var U={};f(U,u,function(){return this});var V=Object.getPrototypeOf,Z=V&&V(V(Qv([])));Z&&Z!==e&&t.call(Z,u)&&(U=Z);var X=A.prototype=O.prototype=Object.create(U);x.prototype=A,a(X,"constructor",{value:A,configurable:!0}),a(A,"constructor",{value:x,configurable:!0}),x.displayName=f(A,v,"GeneratorFunction");function Gr(m){["next","throw","return"].forEach(function(I){f(m,I,function(b){return this._invoke(I,b)})})}r.isGeneratorFunction=function(m){var I=typeof m=="function"&&m.constructor;return I?I===x||(I.displayName||I.name)==="GeneratorFunction":!1},r.mark=function(m){return Object.setPrototypeOf?Object.setPrototypeOf(m,A):(m.__proto__=A,f(m,v,"GeneratorFunction")),m.prototype=Object.create(X),m},r.awrap=function(m){return{__await:m}};function It(m,I){function b(K,Rr,Ar,Hr){var wr=l(m[K],m,Rr);if(wr.type==="throw")Hr(wr.arg);else{var Zv=wr.arg,di=Zv.value;return di&&typeof di=="object"&&t.call(di,"__await")?I.resolve(di.__await).then(function(Ot){b("next",Ot,Ar,Hr)},function(Ot){b("throw",Ot,Ar,Hr)}):I.resolve(di).then(function(Ot){Zv.value=Ot,Ar(Zv)},function(Ot){return b("throw",Ot,Ar,Hr)})}}var B;function C(K,Rr){function Ar(){return new I(function(Hr,wr){b(K,Rr,Hr,wr)})}return B=B?B.then(Ar,Ar):Ar()}a(this,"_invoke",{value:C})}Gr(It.prototype),f(It.prototype,s,function(){return this}),r.AsyncIterator=It,r.async=function(m,I,b,B,C){C===void 0&&(C=Promise);var K=new It(c(m,I,b,B),C);return r.isGeneratorFunction(I)?K:K.next().then(function(Rr){return Rr.done?Rr.value:K.next()})};function Kk(m,I,b){var B=q;return function(K,Rr){if(B===g)throw new Error("Generator is already running");if(B===y){if(K==="throw")throw Rr;return Yk()}for(b.method=K,b.arg=Rr;;){var Ar=b.delegate;if(Ar){var Hr=Ay(Ar,b);if(Hr){if(Hr===d)continue;return Hr}}if(b.method==="next")b.sent=b._sent=b.arg;else if(b.method==="throw"){if(B===q)throw B=y,b.arg;b.dispatchException(b.arg)}else b.method==="return"&&b.abrupt("return",b.arg);B=g;var wr=l(m,I,b);if(wr.type==="normal"){if(B=b.done?y:p,wr.arg===d)continue;return{value:wr.arg,done:b.done}}else wr.type==="throw"&&(B=y,b.method="throw",b.arg=wr.arg)}}}function Ay(m,I){var b=I.method,B=m.iterator[b];if(B===i)return I.delegate=null,b==="throw"&&m.iterator.return&&(I.method="return",I.arg=i,Ay(m,I),I.method==="throw")||b!=="return"&&(I.method="throw",I.arg=new TypeError("The iterator does not provide a '"+b+"' method")),d;var C=l(B,m.iterator,I.arg);if(C.type==="throw")return I.method="throw",I.arg=C.arg,I.delegate=null,d;var K=C.arg;if(!K)return I.method="throw",I.arg=new TypeError("iterator result is not an object"),I.delegate=null,d;if(K.done)I[m.resultName]=K.value,I.next=m.nextLoc,I.method!=="return"&&(I.method="next",I.arg=i);else return K;return I.delegate=null,d}Gr(X),f(X,v,"Generator"),f(X,u,function(){return this}),f(X,"toString",function(){return"[object Generator]"});function zk(m){var I={tryLoc:m[0]};1 in m&&(I.catchLoc=m[1]),2 in m&&(I.finallyLoc=m[2],I.afterLoc=m[3]),this.tryEntries.push(I)}function Jv(m){var I=m.completion||{};I.type="normal",delete I.arg,m.completion=I}function Xv(m){this.tryEntries=[{tryLoc:"root"}],m.forEach(zk,this),this.reset(!0)}r.keys=function(m){var I=Object(m),b=[];for(var B in I)b.push(B);return b.reverse(),function C(){for(;b.length;){var K=b.pop();if(K in I)return C.value=K,C.done=!1,C}return C.done=!0,C}};function Qv(m){if(m!=null){var I=m[u];if(I)return I.call(m);if(typeof m.next=="function")return m;if(!isNaN(m.length)){var b=-1,B=function C(){for(;++b<m.length;)if(t.call(m,b))return C.value=m[b],C.done=!1,C;return C.value=i,C.done=!0,C};return B.next=B}}throw new TypeError(typeof m+" is not iterable")}r.values=Qv;function Yk(){return{value:i,done:!0}}return Xv.prototype={constructor:Xv,reset:function(m){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(Jv),!m)for(var I in this)I.charAt(0)==="t"&&t.call(this,I)&&!isNaN(+I.slice(1))&&(this[I]=i)},stop:function(){this.done=!0;var m=this.tryEntries[0],I=m.completion;if(I.type==="throw")throw I.arg;return this.rval},dispatchException:function(m){if(this.done)throw m;var I=this;function b(Hr,wr){return K.type="throw",K.arg=m,I.next=Hr,wr&&(I.method="next",I.arg=i),!!wr}for(var B=this.tryEntries.length-1;B>=0;--B){var C=this.tryEntries[B],K=C.completion;if(C.tryLoc==="root")return b("end");if(C.tryLoc<=this.prev){var Rr=t.call(C,"catchLoc"),Ar=t.call(C,"finallyLoc");if(Rr&&Ar){if(this.prev<C.catchLoc)return b(C.catchLoc,!0);if(this.prev<C.finallyLoc)return b(C.finallyLoc)}else if(Rr){if(this.prev<C.catchLoc)return b(C.catchLoc,!0)}else if(Ar){if(this.prev<C.finallyLoc)return b(C.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(m,I){for(var b=this.tryEntries.length-1;b>=0;--b){var B=this.tryEntries[b];if(B.tryLoc<=this.prev&&t.call(B,"finallyLoc")&&this.prev<B.finallyLoc){var C=B;break}}C&&(m==="break"||m==="continue")&&C.tryLoc<=I&&I<=C.finallyLoc&&(C=null);var K=C?C.completion:{};return K.type=m,K.arg=I,C?(this.method="next",this.next=C.finallyLoc,d):this.complete(K)},complete:function(m,I){if(m.type==="throw")throw m.arg;return m.type==="break"||m.type==="continue"?this.next=m.arg:m.type==="return"?(this.rval=this.arg=m.arg,this.method="return",this.next="end"):m.type==="normal"&&I&&(this.next=I),d},finish:function(m){for(var I=this.tryEntries.length-1;I>=0;--I){var b=this.tryEntries[I];if(b.finallyLoc===m)return this.complete(b.completion,b.afterLoc),Jv(b),d}},catch:function(m){for(var I=this.tryEntries.length-1;I>=0;--I){var b=this.tryEntries[I];if(b.tryLoc===m){var B=b.completion;if(B.type==="throw"){var C=B.arg;Jv(b)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(m,I,b){return this.delegate={iterator:Qv(m),resultName:I,nextLoc:b},this.method==="next"&&(this.arg=i),d}},r}(typeof Ry=="object"?Ry.exports:{});try{regeneratorRuntime=by}catch(r){typeof globalThis=="object"?globalThis.regeneratorRuntime=by:Function("r","regeneratorRuntime = r")(by)}});var E4r=xy(Wk()),S4r=xy(Vk());})();

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  "use strict";
  var $ = function $(s, e) {
    return (e || document).querySelector(s);
  };
  var lsGet = function lsGet(k) {
    try {
      return window.localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  };
  var lsSet = function lsSet(k, v) {
    try {
      window.localStorage.setItem(k, v);
    } catch (e) {}
  };
  var lsDel = function lsDel(k) {
    try {
      window.localStorage.removeItem(k);
    } catch (e) {}
  };
  var show = function show(el, on) {
    el.style.display = on ? "" : "none";
  };
  var today = function today() {
    var d = new Date(),
      p = function p(n) {
        return (n < 10 ? "0" : "") + n;
      };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  };
  var MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var DIAS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  var pad2 = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  Date.prototype.toLocaleDateString = function (loc, o) {
    var d = this;
    if (!o) return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear();
    var wd = o.weekday ? o.weekday === "long" ? DIAS[d.getDay()] : DIAS[d.getDay()].slice(0, 3) : "",
      core = "";
    var mes = o.month ? o.month === "long" ? MESES[d.getMonth()] : MESES[d.getMonth()].slice(0, 3) : "";
    if (o.month && o.day) core = d.getDate() + " de " + mes + (o.year ? " de " + d.getFullYear() : "");else if (o.month) core = mes + (o.year ? " de " + d.getFullYear() : "");else if (o.day) core = String(d.getDate());else if (o.year) core = String(d.getFullYear());
    return wd && core ? wd + ", " + core : wd || core;
  };
  Date.prototype.toLocaleTimeString = function (loc, o) {
    var d = this,
      s = pad2(d.getHours()) + ":" + pad2(d.getMinutes());
    return o && (o.hour || o.minute) ? s : s + ":" + pad2(d.getSeconds());
  };
  function xhrFetch(url, opt) {
    opt = opt || {};
    return new Promise(function (resolve, reject) {
      var x = new XMLHttpRequest();
      x.open(opt.method || "GET", url, true);
      var hd = opt.headers || {};
      for (var k in hd) if (Object.prototype.hasOwnProperty.call(hd, k)) x.setRequestHeader(k, hd[k]);
      x.onload = function () {
        resolve({
          ok: x.status >= 200 && x.status < 300,
          status: x.status,
          text: function text() {
            return Promise.resolve(x.responseText);
          },
          json: function json() {
            return new Promise(function (res, rej) {
              try {
                res(JSON.parse(x.responseText));
              } catch (e) {
                rej(e);
              }
            });
          }
        });
      };
      x.onerror = function () {
        reject(new Error("rede"));
      };
      x.send(opt.body || null);
    });
  }
  if (!window.fetch) window.fetch = xhrFetch;
  if (!window.AbortController) window.AbortController = function () {
    this.signal = {};
    this.abort = function () {};
  };
  function api(url, opt) {
    return new Promise(function (resolve, reject) {
      var t = setTimeout(function () {
        reject(new Error("tempo esgotado"));
      }, 15000);
      window.fetch(url, opt).then(function (r) {
        return r.text().then(function (txt) {
          clearTimeout(t);
          var j = null;
          try {
            j = txt ? JSON.parse(txt) : null;
          } catch (e) {}
          if (!r.ok) {
            var er = new Error(j && (j.msg || j.error_description || j.message || j.reason || (typeof j.error === "string" ? j.error : "")) || "HTTP " + r.status);
            er.status = r.status;
            return reject(er);
          }
          resolve(j);
        });
      })["catch"](function (e) {
        clearTimeout(t);
        reject(e);
      });
    });
  }
  var toNodes = function toNodes(args) {
    var f = document.createDocumentFragment();
    for (var i = 0; i < args.length; i++) {
      var n = args[i];
      if (n == null || n === false) continue;
      f.appendChild(n && n.nodeType ? n : document.createTextNode(String(n)));
    }
    return f;
  };
  var fixTimer = null;
  function scheduleFix() {
    if (fixTimer) return;
    fixTimer = setTimeout(function () {
      fixTimer = null;
      squarify();
    }, 25);
  }
  function squarify() {
    var els = document.querySelectorAll("[data-sq]");
    for (var i = 0; i < els.length; i++) {
      var w = els[i].offsetWidth;
      if (w && els[i].style.height !== w + "px") {
        els[i].style.height = w + "px";
        if (els[i].getAttribute("data-ctr")) els[i].style.lineHeight = Math.max(0, w - 6) + "px";
      }
    }
  }
  Element.prototype.append = function () {
    this.appendChild(toNodes(arguments));
    scheduleFix();
  };
  Element.prototype.prepend = function () {
    this.insertBefore(toNodes(arguments), this.firstChild);
    scheduleFix();
  };
  Element.prototype.replaceChildren = function () {
    while (this.firstChild) this.removeChild(this.firstChild);
    this.appendChild(toNodes(arguments));
    scheduleFix();
  };
  window.addEventListener("resize", scheduleFix, false);
  var THEME = lsGet("unkindle.theme") === "light" ? "light" : "dark";
  var PAL = THEME === "light" ? {
    TXT: "#000000",
    BG: "#ffffff",
    SURF: "#ffffff",
    SURF2: "#e0e0e0",
    LINE: "#000000",
    MUT: "#3c3c3c",
    MUT2: "#777777"
  } : {
    TXT: "#ffffff",
    BG: "#000000",
    SURF: "#000000",
    SURF2: "#3a3a3a",
    LINE: "#ffffff",
    MUT: "#c4c4c4",
    MUT2: "#8c8c8c"
  };
  var VARS = {
    "--line": PAL.LINE,
    "--fg": PAL.TXT,
    "--bg": PAL.BG,
    "--card": PAL.SURF,
    "--mut": PAL.MUT
  };
  var HEXMAP = {
    "000000": "TXT",
    "ffffff": "SURF",
    "dddddd": "SURF2",
    "cccccc": "SURF2",
    "eeeeee": "SURF2",
    "999999": "MUT2",
    "888888": "MUT2",
    "777777": "MUT2",
    "aaaaaa": "MUT2",
    "444444": "MUT",
    "555555": "MUT",
    "333333": "MUT",
    "222222": "MUT"
  };
  function mapColors(prop, val) {
    if (THEME === "light") return val;
    return val.replace(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g, function (m, hx) {
      if (hx.length === 3) hx = hx.charAt(0) + hx.charAt(0) + hx.charAt(1) + hx.charAt(1) + hx.charAt(2) + hx.charAt(2);
      var key = HEXMAP[hx.toLowerCase()];
      if (!key) return m;
      if (key === "TXT" && /^(border|outline)/.test(prop)) key = "LINE";
      return PAL[key];
    });
  }
  var PREFIXED = {
    "border-radius": 1,
    "box-shadow": 1,
    "transform": 1,
    "box-sizing": 1
  };
  var DROP = /^(gap|row-gap|column-gap|justify-content|align-items|align-content|align-self|flex|flex-wrap|flex-direction|flex-grow|flex-shrink|place-items|justify-items|grid-template-columns|grid-template-rows|grid-column|grid-row|aspect-ratio|keep-colors)$/;
  function countCols(v) {
    if (!v) return 0;
    if (/auto-(fit|fill)/.test(v)) return 2;
    v = v.replace(/repeat\(\s*(\d+)\s*,\s*[^)]*\)/g, function (m, n) {
      return new Array(+n + 1).join("x ");
    });
    return v.replace(/^\s+|\s+$/g, "").split(/\s+/).length;
  }
  function fixStyle(css) {
    var map = {},
      order = [],
      parts = String(css || "").split(";"),
      i;
    for (i = 0; i < parts.length; i++) {
      var p = parts[i],
        k = p.indexOf(":");
      if (k < 0) continue;
      var name = p.slice(0, k).replace(/^\s+|\s+$/g, "").toLowerCase(),
        val = p.slice(k + 1).replace(/^\s+|\s+$/g, "").replace(/var\((--[a-z-]+)\)/g, function (m, n) {
          return VARS[n] || "#000";
        });
      if (!(name in map)) order.push(name);
      map[name] = val;
    }
    if (!map["keep-colors"]) for (var mk in map) map[mk] = mapColors(mk, map[mk]);
    var d = map.display || "",
      cols = 0,
      sq = !!map["aspect-ratio"],
      center = false,
      alignC = map["align-items"] === "center";
    if (d === "grid") {
      cols = countCols(map["grid-template-columns"]) || 1;
      d = "";
    }
    if (/flex/.test(d)) {
      d = d === "inline-flex" ? "inline-block" : "block";
      if (alignC && /px$/.test(map.height || "")) map["line-height"] = map.height;
      center = true;
    }
    if (/center|space-/.test(map["justify-content"] || "")) center = true;
    if (center) {
      if (!("text-align" in map)) order.push("text-align");
      map["text-align"] = "center";
    }
    if (map["grid-column"]) {
      d = "block";
      if (!("width" in map)) order.push("width");
      map.width = "100%";
    }
    if (d) {
      if (!("display" in map)) order.push("display");
      map.display = d;
    } else delete map.display;
    var out = [];
    for (i = 0; i < order.length; i++) {
      var n = order[i];
      if (!(n in map) || DROP.test(n)) continue;
      out.push(n + ":" + map[n]);
      if (PREFIXED[n]) out.push("-webkit-" + n + ":" + map[n]);
    }
    return {
      css: out.join(";"),
      cols: cols,
      sq: sq,
      ctr: sq && alignC
    };
  }
  function setStyle(el, css) {
    var f = fixStyle(css);
    el.setAttribute("style", f.css);
    el.className = el.className.replace(/(^|\s)g\d+(?=\s|$)/g, "").replace(/\s+/g, " ").replace(/^\s|\s$/g, "") + (f.cols ? " g" + f.cols : "");
    if (f.sq) el.setAttribute("data-sq", "1");
    scheduleFix();
  }
  function h(tag, attrs) {
    var el = document.createElement(tag),
      cls = "",
      k;
    attrs = attrs || {};
    for (k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (k === "class") cls = v;else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v, false);else if (k === "style") {
        var f = fixStyle(v);
        el.setAttribute("style", f.css);
        if (f.cols) cls += " g" + f.cols;
        if (f.sq) el.setAttribute("data-sq", "1");
        if (f.ctr) el.setAttribute("data-ctr", "1");
      } else if (v !== false && v != null) el.setAttribute(k, v);
    }
    if (cls) el.className = cls;
    var _add = function add(x) {
      if (Object.prototype.toString.call(x) === "[object Array]") {
        for (var j = 0; j < x.length; j++) _add(x[j]);
      } else if (x !== false && x != null) el.appendChild(x.nodeType ? x : document.createTextNode(String(x)));
    };
    for (var i = 2; i < arguments.length; i++) _add(arguments[i]);
    if (tag === "button" && !(el.textContent || "").replace(/\s/g, "") && el.getElementsByTagName("svg").length) el.className = (el.className ? el.className + " " : "") + "ic-only";
    return el;
  }
  function onPointer(el, down, move, up) {
    var active = false,
      touched = false;
    var pt = function pt(e) {
      var t = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
      return {
        clientX: t.clientX,
        clientY: t.clientY
      };
    };
    el.addEventListener("touchstart", function (e) {
      touched = true;
      active = true;
      if (e.preventDefault) e.preventDefault();
      down && down(pt(e));
    }, false);
    el.addEventListener("touchmove", function (e) {
      if (!active) return;
      if (e.preventDefault) e.preventDefault();
      move && move(pt(e));
    }, false);
    el.addEventListener("touchend", function (e) {
      if (!active) return;
      active = false;
      up && up(pt(e));
    }, false);
    el.addEventListener("mousedown", function (e) {
      if (touched) return;
      active = true;
      down && down(e);
    }, false);
    el.addEventListener("mousemove", function (e) {
      if (!active || touched) return;
      move && move(e);
    }, false);
    document.addEventListener("mouseup", function (e) {
      if (!active || touched) return;
      active = false;
      up && up(e);
    }, false);
  }
  ;
  var ICONS = {
    cards: '<rect x="2.5" y="6" width="12" height="16" rx="1.5"/><path d="M7.5 3.5l.5-.5h11.5a1.5 1.5 0 0 1 1.5 1.5V18l-1 1"/><path d="M8.5 10.5l-2.5 3a1.6 1.6 0 0 0 2.5 2l-.6 2h1.2l-.6-2a1.6 1.6 0 0 0 2.5-2z"/>',
    notes: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    todo: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 12 3 3 5-6"/>',
    habits: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    reading: '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>',
    calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h2M14 11h2M8 15h2M14 15h2M8 19h2M14 19h2"/>',
    pomo: '<circle cx="12" cy="14" r="8"/><path d="M12 14v-4M9 2h6"/>',
    wiki: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    conv: '<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
    ttt: '<path d="M8 3v18M16 3v18M3 8h18M3 16h18"/>',
    forca: '<path d="M3 21h11M6 21V3h10v3"/><circle cx="16" cy="8" r="2"/><path d="M16 10v5M16 11.5l-2.5 2M16 11.5l2.5 2M16 15l-2 3.5M16 15l2 3.5"/>',
    guess: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6A17 17 0 0 0 2 12s4 7 10 7a9.7 9.7 0 0 0 4-.9"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    fwd: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    home: '<path d="M3 11 12 3l9 8M5 10v10h5v-6h4v6h5V10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    sunset: '<path d="M12 10V2M4.9 10.9l1.4 1.4M2 18h2M20 18h2M19.1 10.9l-1.4 1.4M22 22H2M16 18a4 4 0 0 0-8 0M8 6l4-4 4 4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-9-2 2-3 4-3 6-2-1-2-3-2-4-3 2-5 5-5 7 0 4 3 7 7 7z"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    pencil: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    down: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    app: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6v6H9z"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1"/><circle cx="15.5" cy="15.5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="15.5" cy="8.5" r="1"/><circle cx="8.5" cy="15.5" r="1"/>',
    card: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h.01M16 16h.01M12 12h.01"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    map: '<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3zM9 3v15M15 6v15"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pen: '<path d="m12 19 7-7 3 3-7 7zM18 13 16.5 5.5 2 2l3.5 14.5L13 18z"/><path d="m2 2 7.6 7.6"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    cloud: '<path d="M7 19a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 12 3.5 3.5 0 0 1 18 19z"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    puzzle: '<path d="M10 3a2 2 0 1 1 4 0v2h4v4h2a2 2 0 1 1 0 4h-2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4H4a2 2 0 1 1 0-4h2V5h4z"/>',
    text: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M17 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6"/>',
    film: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M2 12h5M2 16h5M17 8h5M17 12h5M17 16h5"/>',
    camera: '<path d="M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/>',
    ext: '<path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
    paw: '<circle cx="5" cy="11" r="2"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="6" r="2"/><circle cx="19" cy="11" r="2"/><path d="M12 12c-4 0-6 4-6 6a3 3 0 0 0 3 3c1.5 0 2-1 3-1s1.5 1 3 1a3 3 0 0 0 3-3c0-2-2-6-6-6z"/>',
    flag: '<path d="M5 22V3M5 4h13l-2 4 2 4H5"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
    sword: '<path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/>',
    food: '<path d="M4 3v7a3 3 0 0 0 3 3v8M7 3v7M10 3v7a3 3 0 0 1-3 3M18 21V3c-3 1-4 4-4 8h4"/>',
    coin: '<circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h5a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h5"/>',
    rain: '<path d="M7 15a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.5 9 3 3 0 0 1 18 15z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
    storm: '<path d="M7 15a4.5 4.5 0 1 1 1-8.9A5.5 5.5 0 0 1 18.5 9 3 3 0 0 1 18 15z"/><path d="m13 14-3 4h4l-3 4"/>',
    fog: '<path d="M4 8h16M2 12h20M4 16h16M7 20h10"/>',
    snow: '<path d="M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7"/>',
    partly: '<path d="M12 3v1.5M5.6 5.6l1 1M3 12h1.5M17.4 5.6l-1 1"/><path d="M8.5 11a3.5 3.5 0 0 1 6.3-2"/><path d="M9 20a4 4 0 1 1 .8-7.9A5 5 0 0 1 19 14.5 2.8 2.8 0 0 1 18.5 20z"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    rows: '<path d="M3 5h18M3 12h18M3 19h18"/>',
    bsky: '<path d="M12 11C10 7 6.5 4 3.5 4 2.5 4 2 4.7 2 6c0 2 1 5 3.5 6C3 13 2.5 15 4 16.5c2 2 5 .5 8-4.5 3 5 6 6.5 8 4.5 1.5-1.5 1-3.5-1.5-4.5C21 11 22 8 22 6c0-1.3-.5-2-1.5-2-3 0-6.5 3-8.5 7z"/>',
    ball8: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="11.2" r="5.6"/><g stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="9.3" r="1.45"/><circle cx="12" cy="12.75" r="1.85"/></g>',
    snake: '<path d="M15 4h3a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h8a3 3 0 0 1 0 6H6"/><path d="M15 4h-2M6 22l-3-1.5M6 22l-3 1"/><circle cx="17.5" cy="6.5" r=".6"/>',
    dino: '<path d="M11 21v-4H9l-4-4V9l2 2h4V6a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v3h-5v2h3v1.5h-3V15l-2 2v4"/><path d="M15 21v-3M15 5.5h1"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    reddit: '<circle cx="12" cy="14.5" r="7"/><circle cx="18.5" cy="4.5" r="1.5"/><path d="M12 7.5l1.5-5 5 2"/><circle cx="4.5" cy="11.5" r="1.5"/><circle cx="19.5" cy="11.5" r="1.5"/><path d="M9 13.5h.01M15 13.5h.01M9.5 17c1.5 1 3.5 1 5 0"/>',
    forum: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
    chess: '<path d="M6 21h12M8 21c0-3.5 1.5-5.5 3-8-2 .5-4 .5-5-1.5l4.5-5L11 3l1.5 2.5c3.5 1 5.5 4.5 5.5 9.5v6"/><path d="M11 8.5h.01"/>'
  };
  function ic(name, size, fill) {
    size = size || 22;
    var s = document.createElement("span");
    s.className = "ico";
    s.innerHTML = '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="' + (fill ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="' + (size >= 28 ? 1.9 : 2.1) + '" stroke-linecap="square" stroke-linejoin="miter" shape-rendering="' + (size >= 28 ? "geometricPrecision" : "crispEdges") + '" aria-hidden="true">' + (ICONS[name] || ICONS.app) + "</svg>";
    return s;
  }
  ;
  var KEY = "unkindle.v1";
  var DEFAULT = {
    favs: [],
    recents: [],
    hidden: [],
    settings: {
      font: 18
    },
    notes: [],
    todos: [],
    habits: [],
    reads: [],
    pomos: 0,
    x: {}
  };
  function normalize(o) {
    var s = Object.assign({}, DEFAULT, o || {});
    s.settings = Object.assign({
      font: 18
    }, s.settings || {});
    s.x = s.x || {};
    return s;
  }
  var S = function () {
    try {
      return normalize(JSON.parse(lsGet(KEY) || "{}"));
    } catch (e) {
      return normalize({});
    }
  }();
  var apps = [];
  var X = function X(k, d) {
    if (!(k in S.x)) S.x[k] = d;
    return S.x[k];
  };
  var CFG = window.UNKINDLE_CONFIG || {};
  var remote = !!(CFG.url && CFG.anonKey);
  var session = null;
  var pushTimer = null,
    lastSync = "";
  function stamp() {
    var d = new Date();
    lastSync = pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  }
  try {
    session = JSON.parse(lsGet("unkindle.session") || "null");
  } catch (e) {
    session = null;
  }
  function storeSession(j) {
    session = j && j.access_token ? {
      access_token: j.access_token,
      refresh_token: j.refresh_token,
      expires_at: Math.floor(Date.now() / 1000) + (j.expires_in || 3600),
      user: {
        id: j.user.id,
        email: j.user.email,
        username: j.user.user_metadata && j.user.user_metadata.username || session && session.user && session.user.username || ""
      }
    } : null;
    if (session) lsSet("unkindle.session", JSON.stringify(session));else lsDel("unkindle.session");
  }
  function sbHeaders(auth, extra) {
    var hd = {
      apikey: CFG.anonKey,
      "Content-Type": "application/json"
    };
    if (auth && session) hd.Authorization = "Bearer " + session.access_token;
    for (var k in extra || {}) hd[k] = extra[k];
    return hd;
  }
  function sbCall(method, path, body, auth, extra) {
    return api(CFG.url + path, {
      method: method,
      headers: sbHeaders(auth, extra),
      body: body ? JSON.stringify(body) : undefined
    });
  }
  function ensureToken() {
    if (!session) return Promise.reject(new Error("sem sessão"));
    if (session.expires_at - 60 > Date.now() / 1000) return Promise.resolve();
    return sbCall("POST", "/auth/v1/token?grant_type=refresh_token", {
      refresh_token: session.refresh_token
    }, false).then(storeSession, function (e) {
      storeSession(null);
      setAuthLbl();
      throw e;
    });
  }
  function pt(msg) {
    msg = String(msg || "");
    if (/anonymous|missing email|missing password|signup requires/i.test(msg)) return "Preencha e-mail e senha.";
    if (/invalid login/i.test(msg)) return "E-mail ou senha incorretos.";
    if (/already registered|already been registered/i.test(msg)) return "Esse e-mail já tem conta. Use Entrar.";
    if (/database error saving new user|duplicate key|unique/i.test(msg)) return "Esse @ já está em uso. Escolha outro.";
    if (/not confirmed/i.test(msg)) return "Este projeto ainda exige confirmação de e-mail. Desligue 'Confirm email' no painel do Supabase.";
    if (/password/i.test(msg)) return "A senha precisa de pelo menos 6 caracteres.";
    if (/rate limit/i.test(msg)) return "Muitas tentativas. Aguarde um pouco.";
    if (/rede|network|tempo/i.test(msg)) return "Sem conexão com o servidor.";
    return msg;
  }
  function signIn(email, password) {
    return sbCall("POST", "/auth/v1/token?grant_type=password", {
      email: email,
      password: password
    }, false).then(storeSession);
  }
  function cleanUser(u) {
    return String(u || "").replace(/^\s+|\s+$/g, "").replace(/^@+/, "").toLowerCase();
  }
  function userOk(u) {
    return /^[a-z0-9_.]{3,20}$/.test(u);
  }
  function userFree(u) {
    return sbCall("POST", "/rest/v1/rpc/unkindle_username_free", {
      u: u
    }, false);
  }
  function signUp(email, password, username) {
    return sbCall("POST", "/auth/v1/signup", {
      email: email,
      password: password,
      data: username ? {
        username: username
      } : {}
    }, false).then(function (j) {
      if (j && j.access_token) storeSession(j);else return signIn(email, password);
    });
  }
  function setUsername(u) {
    return ensureToken().then(function () {
      return sbCall("POST", "/rest/v1/rpc/unkindle_set_username", {
        u: u
      }, true);
    }).then(function () {
      return sbCall("PUT", "/auth/v1/user", {
        data: {
          username: u
        }
      }, true);
    }).then(function () {
      session.user.username = u;
      lsSet("unkindle.session", JSON.stringify(session));
      setAuthLbl();
    });
  }
  function signOut() {
    storeSession(null);
    setAuthLbl();
  }
  function push() {
    if (!remote || !session) return Promise.resolve();
    return ensureToken().then(function () {
      return sbCall("POST", "/rest/v1/unkindle_data?on_conflict=user_id", {
        user_id: session.user.id,
        data: S,
        updated_at: new Date().toISOString()
      }, true, {
        Prefer: "resolution=merge-duplicates,return=minimal"
      });
    }).then(function () {
      pendingPush = false;
      stamp();
    })["catch"](function () {
      pendingPush = true;
      toast("Sem conexão: salvo neste aparelho, envio depois");
    });
  }
  function pull() {
    if (!remote || !session) return Promise.resolve();
    return ensureToken().then(function () {
      return sbCall("GET", "/rest/v1/unkindle_data?select=data&user_id=eq." + session.user.id, null, true);
    }).then(function (rows) {
      if (rows && rows.length && rows[0].data) {
        S = normalize(rows[0].data);
        lsSet(KEY, JSON.stringify(S));
        applyFont();
        renderHome();
        stamp();
      } else return push();
    })["catch"](function () {
      toast("Não foi possível baixar seus dados");
    });
  }
  function sbFeedback(msg) {
    if (!remote || !session) return Promise.resolve();
    return ensureToken().then(function () {
      return sbCall("POST", "/rest/v1/unkindle_feedback", {
        user_id: session.user.id,
        msg: msg
      }, true, {
        Prefer: "return=minimal"
      });
    });
  }
  var pendingPush = false,
    draftApp = null;
  function fieldOk(el) {
    return (el.tagName === "TEXTAREA" || el.tagName === "INPUT") && !/^(password|file|checkbox|radio|range|hidden|button|submit|number|date|time)$/.test(el.type || "");
  }
  function fieldKeys(b) {
    var all = b.querySelectorAll("input,textarea"),
      seen = {},
      out = [];
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (!fieldOk(el)) continue;
      var k = el.tagName + ":" + (el.getAttribute("placeholder") || "");
      seen[k] = (seen[k] || 0) + 1;
      out.push([k + ":" + seen[k], el]);
    }
    return out;
  }
  function snapDrafts() {
    if (!draftApp) return;
    var b = $("#app-body"),
      d = {},
      any = false;
    fieldKeys(b).forEach(function (p) {
      var v = p[1].value;
      if (v && v.length < 20000) {
        d[p[0]] = v;
        any = true;
      }
    });
    S.x._drafts = S.x._drafts || {};
    if (any) S.x._drafts[draftApp] = d;else delete S.x._drafts[draftApp];
    lsSet(KEY, JSON.stringify(S));
  }
  function restoreDrafts(b, id) {
    draftApp = id;
    var d = S.x._drafts && S.x._drafts[id];
    if (!d) return;
    setTimeout(function () {
      if (draftApp !== id) return;
      fieldKeys(b).forEach(function (p) {
        if (d[p[0]] != null && !p[1].value) p[1].value = d[p[0]];
      });
    }, 0);
  }
  var draftT = null;
  function draftInput(e) {
    if (curView === "app" && e.target && fieldOk(e.target)) {
      clearTimeout(draftT);
      draftT = setTimeout(function () {
        snapDrafts();
        save();
      }, 900);
    }
  }
  function flushSave() {
    snapDrafts();
    if (remote && session && (pushTimer || pendingPush)) {
      clearTimeout(pushTimer);
      pushTimer = null;
      push();
    }
  }
  window.addEventListener("online", function () {
    if (pendingPush) push();
  }, false);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) flushSave();
  }, false);
  window.addEventListener("pagehide", flushSave, false);
  function save() {
    lsSet(KEY, JSON.stringify(S));
    if (remote && session) {
      clearTimeout(pushTimer);
      pushTimer = setTimeout(push, 800);
    }
  }
  function handle() {
    return session ? session.user.username ? "@" + session.user.username : session.user.email.split("@")[0] : "";
  }
  function setAuthLbl() {
    var e = $("#auth-lbl");
    if (!e) return;
    e.textContent = handle();
    show($("#btn-auth"), !!session);
    show($("#auth-out"), !session);
  }
  var BUCKET = "unkindle-files";
  function fileKey(name) {
    var m = {
      "á": "a",
      "à": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "é": "e",
      "ê": "e",
      "è": "e",
      "í": "i",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ú": "u",
      "ü": "u",
      "ç": "c",
      "ñ": "n"
    };
    return String(name).replace(/[^\x00-\x7f]/g, function (c) {
      var l = m[c.toLowerCase()];
      return l ? c === c.toLowerCase() ? l : l.toUpperCase() : "_";
    }).replace(/[^\w .()\-+,&@=;!']/g, "_").slice(0, 180) || "arquivo";
  }
  function relKey(rel) {
    return String(rel).split("/").map(fileKey).join("/");
  }
  function objPath(rel) {
    return session.user.id + "/" + relKey(rel).split("/").map(encodeURIComponent).join("/");
  }
  function filesList(sub) {
    return ensureToken().then(function () {
      return sbCall("POST", "/storage/v1/object/list/" + BUCKET, {
        prefix: session.user.id + (sub ? "/" + sub : ""),
        limit: 1000,
        offset: 0,
        sortBy: {
          column: "created_at",
          order: "desc"
        }
      }, true);
    }).then(function (rows) {
      return (rows || []).filter(function (r) {
        return r.id && r.name !== ".emptyFolderPlaceholder";
      }).map(function (r) {
        return {
          name: r.name,
          size: r.metadata && r.metadata.size || 0,
          date: r.created_at
        };
      });
    });
  }
  function fileUp(f, onProg) {
    return objUp(f.name, f, f.type, onProg);
  }
  function objUp(rel, f, type, onProg) {
    return ensureToken().then(function () {
      return new Promise(function (ok, no) {
        var x = new XMLHttpRequest();
        x.open("POST", CFG.url + "/storage/v1/object/" + BUCKET + "/" + objPath(rel), true);
        var hd = sbHeaders(true, {
          "x-upsert": "true",
          "Content-Type": type || "application/octet-stream"
        });
        for (var k in hd) x.setRequestHeader(k, hd[k]);
        if (x.upload && onProg) x.upload.onprogress = function (e) {
          if (e.lengthComputable) onProg(e.loaded / e.total);
        };
        x.onload = function () {
          if (x.status >= 200 && x.status < 300) return ok();
          var j = null;
          try {
            j = JSON.parse(x.responseText);
          } catch (e) {}
          var er = new Error(j && (j.message || j.error) || "HTTP " + x.status);
          er.status = x.status;
          no(er);
        };
        x.onerror = function () {
          no(new Error("rede"));
        };
        x.send(f);
      });
    });
  }
  function fileUrl(name) {
    return ensureToken().then(function () {
      return sbCall("POST", "/storage/v1/object/sign/" + BUCKET + "/" + objPath(name), {
        expiresIn: 3600
      }, true);
    }).then(function (j) {
      return CFG.url + "/storage/v1" + j.signedURL + "&download=" + encodeURIComponent(name);
    });
  }
  function fileDel(name) {
    return ensureToken().then(function () {
      return sbCall("DELETE", "/storage/v1/object/" + BUCKET, {
        prefixes: [session.user.id + "/" + relKey(name)]
      }, true);
    });
  }
  function signMany(rels) {
    if (!rels.length) return Promise.resolve([]);
    return ensureToken().then(function () {
      return sbCall("POST", "/storage/v1/object/sign/" + BUCKET, {
        expiresIn: 3600,
        paths: rels.map(function (r) {
          return session.user.id + "/" + relKey(r);
        })
      }, true);
    }).then(function (arr) {
      return arr.map(function (x) {
        return x.signedURL ? CFG.url + "/storage/v1" + x.signedURL : "";
      });
    });
  }
  var noteTimer = null;
  function rep(o) {
    try {
      if (window.__ukReport) window.__ukReport(o);
    } catch (e) {}
  }
  function toast(m) {
    var t = $("#note");
    t.textContent = m;
    show(t, true);
    clearTimeout(noteTimer);
    noteTimer = setTimeout(function () {
      show(t, false);
    }, 2500);
  }
  var curView = "home",
    sheetFrom = "home";
  function showView(v) {
    curView = v;
    ["home", "app", "sheet"].forEach(function (n) {
      show($("#view-" + n), n === v);
    });
    show($("#tabs"), v === "home");
    document.body.className = "v-" + v;
    window.scrollTo(0, 0);
    scheduleFix();
  }
  function modal() {
    var nodes = Array.prototype.slice.call(arguments);
    if (!inRoute) {
      var hh = here();
      go((hh.indexOf("~") < 0 ? hh : hh.split("~")[0]) + "~m", true);
    }
    if (curView !== "sheet") {
      sheetFrom = curView;
      if (curView === "home") homeY = window.pageYOffset || document.documentElement.scrollTop || 0;
    }
    $("#sheet-body").replaceChildren.apply($("#sheet-body"), nodes);
    showView("sheet");
  }
  function closeModal() {
    if (curView !== "sheet") return;
    if (canBack()) history.back();else go(sheetFrom === "app" && current ? current.id : "");
  }
  function hideSheet() {
    showView(sheetFrom);
    if (sheetFrom === "home") window.scrollTo(0, homeY);
  }
  var TIPOS = [["bookerly", "Bookerly", '"Bookerly", "Literata", Georgia, serif', 1.02]];
  if (S.settings.famV !== 3) {
    S.settings.fam = "bookerly";
    S.settings.famV = 3;
  }
  function fontOf(k) {
    for (var i = 0; i < TIPOS.length; i++) if (TIPOS[i][0] === k) return TIPOS[i];
    return TIPOS[0];
  }
  function applyFont() {
    var f = fontOf(S.settings.fam);
    document.body.style.fontFamily = f[2];
    document.body.style.fontWeight = f[0] === "bookerly" ? "500" : "";
    document.body.style.fontSize = Math.round(S.settings.font * f[3]) + "px";
  }
  var cat = 0,
    page = 0,
    editing = false,
    current = null;
  function plain(s) {
    return s.toLowerCase().replace(/[áàâã]/g, "a").replace(/[éê]/g, "e").replace(/í/g, "i").replace(/[óôõ]/g, "o").replace(/ú/g, "u").replace(/ç/g, "c");
  }
  function inList(a, id) {
    return a.indexOf(id) >= 0;
  }
  function toggle(arr, id) {
    var i = arr.indexOf(id);
    if (i < 0) arr.push(id);else arr.splice(i, 1);
    save();
    renderHome();
  }
  function openApp(id) {
    go(id);
  }
  function doOpenApp(id) {
    var a = null,
      i;
    for (i = 0; i < apps.length; i++) if (apps[i].id === id) a = apps[i];
    if (!a) return;
    current = a;
    if (curView === "home") homeY = window.pageYOffset || document.documentElement.scrollTop || 0;
    S.recents = [id].concat(S.recents.filter(function (x) {
      return x !== id;
    })).slice(0, 6);
    save();
    $("#app-title").replaceChildren(ic(a.i, 28), " " + a.n);
    favBtn();
    try {
      document.title = a.n + " · Unkindle";
    } catch (e1) {}
    snapDrafts();
    var b = $("#app-body");
    if (b._cleanup) {
      try {
        b._cleanup();
      } catch (e0) {}
    }
    b.replaceChildren();
    b._cleanup = null;
    b._sub = null;
    showView("app");
    try {
      a.r(b);
      restoreDrafts(b, id);
    } catch (e) {
      rep({
        tipo: "app-falhou",
        app: id,
        msg: String(e && e.message),
        pilha: e && e.stack ? String(e.stack).slice(0, 1500) : ""
      });
      b.replaceChildren(h("p", {}, "Este app não pôde ser aberto neste aparelho."), h("p", {
        "class": "muted"
      }, String(e && e.message)));
    }
  }
  function favBtn() {
    $("#app-fav").replaceChildren(ic("star", 22, inList(S.favs, current.id)));
  }
  function closeApp() {
    goHome();
  }
  function doCloseApp() {
    snapDrafts();
    draftApp = null;
    try {
      document.title = HOME_TITLE;
    } catch (e1) {}
    var b = $("#app-body");
    if (b._cleanup) {
      try {
        b._cleanup();
      } catch (e) {}
    }
    b._cleanup = null;
    b._sub = null;
    showView("home");
    renderHome();
    window.scrollTo(0, homeY);
  }
  var PAGES = {
    ajustes: "settings",
    conta: "auth",
    ajuda: "help",
    privacidade: "privacy",
    novidades: "changelog",
    diagnostico: "diag"
  };
  var inRoute = false,
    navIdx = 0,
    homeIdx = 0,
    bootIdx = 1,
    reopenApp = false,
    skipHash = null;
  function here() {
    return (location.hash || "").replace(/^#/, "");
  }
  function stIdx() {
    try {
      return history.state && history.state.uk != null ? history.state.uk : null;
    } catch (e) {
      return null;
    }
  }
  function canBack() {
    var i = stIdx();
    return i != null && i > bootIdx;
  }
  function go(hash, quiet) {
    if (here() === hash) {
      if (!quiet) route();
      return;
    }
    if (quiet) skipHash = hash;
    location.hash = hash;
    if (quiet) markIdx();
  }
  function markIdx() {
    var i = stIdx();
    if (i == null) {
      navIdx++;
      try {
        history.replaceState({
          uk: navIdx
        }, "", location.href);
      } catch (e) {}
    } else navIdx = i;
  }
  function goHome() {
    var i = stIdx();
    if (i != null && homeIdx != null && homeIdx < i && i - homeIdx < 50) history.go(homeIdx - i);else go("");
  }
  function pushSub(b, back) {
    b._sub = back;
    go(current.id + "/v", true);
  }
  function route() {
    if (inRoute) return;
    if (skipHash !== null && here() === skipHash) {
      skipHash = null;
      markIdx();
      return;
    }
    markIdx();
    var hs = here(),
      base = hs.split("~")[0].split("/")[0],
      modalOpen = hs.indexOf("~m") >= 0,
      sub = /\/v/.test(hs);
    inRoute = true;
    try {
      if (!base) {
        homeIdx = stIdx();
        if (curView === "app") doCloseApp();else if (curView === "sheet") {
          if (sheetFrom === "app") doCloseApp();else hideSheet();
        }
      } else if (PAGES[base]) {
        var arg = hs.split("/")[1];
        pagesRaw[PAGES[base]](arg);
      } else if (byId(base)) {
        if (curView === "sheet" && !modalOpen && current && current.id === base) {
          hideSheet();
          if (reopenApp) {
            reopenApp = false;
            doOpenApp(base);
          }
        } else if (curView === "sheet" && !modalOpen && sheetFrom === "app" && current && current.id !== base) doOpenApp(base);else if (curView !== "app" || !current || current.id !== base) {
          if (curView !== "sheet" || !modalOpen) doOpenApp(base);
        } else {
          var bd = $("#app-body");
          if (!sub && bd._sub) {
            var f = bd._sub;
            bd._sub = null;
            f();
          }
        }
      } else if (curView !== "home") {
        doCloseApp();
      }
    } finally {
      inRoute = false;
    }
  }
  window.addEventListener("hashchange", route, false);
  var homeY = 0,
    HOME_TITLE = document.title;
  var IPSRC = [["https://ipwho.is/", function (j) {
    return j.success === false ? null : {
      lat: j.latitude,
      lon: j.longitude,
      city: j.city
    };
  }], ["https://ipapi.co/json/", function (j) {
    return j.error ? null : {
      lat: j.latitude,
      lon: j.longitude,
      city: j.city
    };
  }], ["https://get.geojs.io/v1/ip/geo.json", function (j) {
    return {
      lat: +j.latitude,
      lon: +j.longitude,
      city: j.city
    };
  }], ["https://ipinfo.io/json", function (j) {
    var p = (j.loc || "").split(",");
    return {
      lat: +p[0],
      lon: +p[1],
      city: j.city
    };
  }], ["https://freeipapi.com/api/json", function (j) {
    return {
      lat: j.latitude,
      lon: j.longitude,
      city: j.cityName
    };
  }], ["https://api.ipapi.is/", function (j) {
    return j.location ? {
      lat: j.location.latitude,
      lon: j.location.longitude,
      city: j.location.city
    } : null;
  }]];
  function ipLocations() {
    return Promise.all(IPSRC.map(function (s) {
      return api(s[0]).then(function (j) {
        var p = s[1](j);
        return p && isFinite(p.lat) && isFinite(p.lon) && p.lat !== 0 ? p : null;
      }, function () {
        return null;
      });
    })).then(function (r) {
      return r.filter(Boolean);
    });
  }
  function medoid(pts) {
    var cost = function cost(p) {
      return pts.reduce(function (s, q) {
        return s + Math.sqrt(Math.pow(p.lat - q.lat, 2) + Math.pow(p.lon - q.lon, 2));
      }, 0);
    };
    return pts.reduce(function (a, b) {
      return cost(a) <= cost(b) ? a : b;
    });
  }
  function locate() {
    ipLocations().then(function (pts) {
      if (!pts.length) return weather(-23.55, -46.63, "São Paulo");
      var b = medoid(pts);
      weather(b.lat, b.lon, b.city || "sua região");
    });
  }
  var pages = {},
    pagesRaw = {
      help: function help() {
        modal(h("h2", {}, "Ajuda e FAQ"), h("p", {}, "O Unkindle é uma central de apps simples, feita para telas e-ink, celulares e computadores."), h("p", {}, "Favoritos: toque em Organizar e depois na estrela. Ocultar: use o ícone de olho no modo Organizar."), h("p", {}, "Sem conta, seus dados ficam só neste aparelho. Com conta, notas, tarefas, favoritos e arquivos ficam guardados na sua conta e aparecem em qualquer aparelho."), h("p", {}, "Se algum app não funcionar no seu aparelho, abra o diagnóstico abaixo e me envie o resultado."), h("button", {
          onclick: pages.diag
        }, "Diagnóstico do aparelho"));
      },
      privacy: function privacy() {
        modal(h("h2", {}, "Privacidade"), h("p", {}, "Não vendemos nem compartilhamos seus dados. Sem conta, tudo fica no seu navegador. Com conta, seus dados e arquivos ficam salvos na sua conta, protegidos por regras que só permitem acesso ao próprio dono."), h("p", {}, "Os apps online consultam serviços públicos (BrasilAPI, IBGE, ViaCEP, Wikipédia, Open-Meteo, GitHub e outros). Ao usar um deles, o que você digitou na busca é enviado a esse serviço, e seu IP aparece para ele. O clima da tela inicial consulta serviços de localização por IP."), h("p", {}, "Relatórios técnicos: quando algo falha, a página envia ao próprio servidor que a hospeda o erro, o modelo do navegador e o tamanho da tela, para eu corrigir. Nada do que você digita é enviado."));
      },
      changelog: function changelog() {
        modal(h("h2", {}, "Novidades"), h("p", {}, "v0.7 – Visual retrô em pixels, cabeçalho fixo, voltar/avançar do navegador, Notícias e Wikipédia lidas aqui dentro, Dicionário PT/EN, Clima e CEP unificados, Galeria na conta, Dino, Untetris e Damas novos."), h("p", {}, "v0.6 – Apps com visual novo, Calendário refeito, Arquivos guardados na sua conta, novas telas de login e Ajustes."), h("p", {}, "v0.5 – Visual novo para e-ink: preto e branco puro, categorias com índice, grade ou lista, e a tela inicial volta para onde você estava."), h("p", {}, "v0.4 – Visual escuro novo e dezenas de apps online (notícias, Brasil, mundo, finanças e mais)."), h("p", {}, "v0.1 – Primeira versão."));
      },
      settings: function settings() {
        var box = h("div");
        var seg = function seg(opts, cur, set) {
          return h("span", {
            "class": "seg"
          }, opts.map(function (o) {
            return h("button", {
              "class": o[0] === cur ? "on" : "",
              onclick: function onclick() {
                set(o[0]);
              }
            }, o[1]);
          }));
        };
        var item = function item(title, desc, ctrl, go) {
          return h("div", {
            "class": "si" + (go ? " go" : ""),
            onclick: go || null
          }, h("span", {
            "class": "st"
          }, h("b", {}, title), desc ? h("small", {}, desc) : null), h("span", {
            "class": "sc"
          }, ctrl));
        };
        var chev = function chev() {
          return ic("chev", 20);
        };
        var _draw = function draw() {
          var imp = h("input", {
            type: "file",
            accept: ".json,application/json"
          });
          imp.onchange = function () {
            if (!imp.files || !imp.files[0]) return;
            var fr = new FileReader();
            fr.onload = function () {
              try {
                S = normalize(JSON.parse(fr.result));
                save();
                applyFont();
                renderHome();
                toast("Backup importado");
                _draw();
              } catch (e) {
                toast("Arquivo inválido");
              }
            };
            fr.readAsText(imp.files[0]);
          };
          var hid = S.hidden.length;
          box.replaceChildren(h("div", {
            "class": "lbl2",
            style: "margin-top:6px"
          }, "Aparência"), h("div", {
            "class": "set"
          }, item("Tema", "Escuro é o mais confortável em e-ink à noite.", seg([["dark", "Escuro"], ["light", "Claro"]], THEME, function (t) {
            if (t !== THEME) {
              lsSet("unkindle.theme", t);
              location.reload();
            }
          })), item("Tamanho do texto", "Vale para o Unkindle inteiro.", h("span", {
            "class": "seg"
          }, h("button", {
            "aria-label": "Diminuir",
            onclick: function onclick() {
              S.settings.font = Math.max(14, S.settings.font - 2);
              save();
              applyFont();
              _draw();
            }
          }, "A−"), h("span", {
            "class": "val"
          }, S.settings.font + ""), h("button", {
            "aria-label": "Aumentar",
            onclick: function onclick() {
              S.settings.font = Math.min(30, S.settings.font + 2);
              save();
              applyFont();
              _draw();
            }
          }, "A+")))), h("div", {
            "class": "lbl2"
          }, "Tela inicial"), h("div", {
            "class": "set"
          }, item("Exibição dos apps", null, seg([["grid", "Grade"], ["list", "Lista"]], S.settings.view === "list" ? "list" : "grid", function (v) {
            S.settings.view = v;
            save();
            renderHome();
            _draw();
          })), item("Apps ocultos", hid ? hid + (hid === 1 ? " app oculto" : " apps ocultos") : "Nenhum app oculto", hid ? btn("Mostrar todos", function () {
            S.hidden = [];
            save();
            renderHome();
            _draw();
            toast("Todos os apps visíveis");
          }) : null), item("Favoritos e recentes", "Limpa as listas da tela inicial.", btn("Limpar", function () {
            if (confirm("Limpar favoritos e recentes?")) {
              S.favs = [];
              S.recents = [];
              save();
              renderHome();
              _draw();
              toast("Listas limpas");
            }
          }))), h("div", {
            "class": "lbl2"
          }, "Conta"), h("div", {
            "class": "set"
          }, session ? item(session.user.email, lastSync ? "Sincronizado às " + lastSync : "Seus dados sincronizam com a conta.", chev(), pages.auth) : item("Entrar ou criar conta", "Guarde apps, notas e arquivos na sua conta.", chev(), pages.auth)), h("div", {
            "class": "lbl2"
          }, "Backup"), h("div", {
            "class": "set"
          }, item("Exportar", "Baixa um arquivo .json com tudo.", btn("Exportar", function () {
            try {
              h("a", {
                href: URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], {
                  type: "application/json"
                })),
                download: "unkindle-backup.json"
              }).click();
            } catch (e) {
              toast("Este aparelho não permite baixar arquivos");
            }
          })), item("Importar", "Substitui seus dados pelos do arquivo.", h("label", {
            "class": "filebtn"
          }, "Importar", imp))), h("div", {
            "class": "lbl2"
          }, "Sobre"), h("div", {
            "class": "set"
          }, item("Ajuda", null, chev(), pages.help), item("Novidades", null, chev(), pages.changelog), item("Privacidade", null, chev(), pages.privacy), item("Diagnóstico do aparelho", null, chev(), pages.diag)));
        };
        _draw();
        modal(h("h2", {}, "Ajustes"), box);
      },
      auth: function auth(m) {
        var reopen = function reopen() {
          if (sheetFrom === "app" && current) reopenApp = true;
          closeModal();
        };
        var brand = function brand() {
          return h("div", {
            "class": "brand"
          }, "UN", h("b", {}, "KINDLE"));
        };
        if (!remote) return modal(h("div", {
          "class": "auth"
        }, brand(), h("h2", {}, "Conta"), h("p", {
          "class": "sub"
        }, "Modo local: seus dados ficam neste aparelho. Para ativar login e sincronização, preencha o arquivo config.js com seu projeto Supabase.")));
        if (session) {
          var stat = h("small", {
            "class": "muted"
          }, lastSync ? "Sincronizado às " + lastSync : "Sincronização automática ligada");
          return modal(h("div", {
            "class": "auth"
          }, brand(), h("h2", {}, "Sua conta"), h("p", {
            "class": "sub"
          }, "Tudo o que você faz no Unkindle fica guardado aqui e aparece em qualquer aparelho em que você entrar."), h("div", {
            "class": "who"
          }, h("b", {}, session.user.username ? "@" + session.user.username : session.user.email), session.user.username ? h("small", {}, session.user.email) : null, stat), session.user.username ? null : function () {
            var u = h("input", {
                type: "text",
                id: "f-us",
                autocapitalize: "off",
                autocorrect: "off",
                placeholder: "seunome",
                maxlength: "20"
              }),
              em2 = h("div", {
                "class": "err"
              });
            show(em2, false);
            var sv = btn("Salvar meu @", function () {
              var v = cleanUser(u.value);
              em2.textContent = "";
              show(em2, false);
              if (!userOk(v)) {
                em2.textContent = "Use de 3 a 20 letras minúsculas, números, ponto ou _.";
                return show(em2, true);
              }
              sv.disabled = true;
              setUsername(v).then(function () {
                toast("Agora você é @" + v);
                pages.auth();
              }, function (e) {
                sv.disabled = false;
                em2.textContent = pt(e.message);
                show(em2, true);
              });
            }, "wide");
            return h("div", {}, h("div", {
              "class": "fld"
            }, h("label", {
              "for": "f-us"
            }, "Escolha seu @"), h("div", {
              "class": "at"
            }, h("span", {}, "@"), u)), em2, sv);
          }(), btn("Sincronizar agora", function () {
            stat.textContent = "Sincronizando…";
            pull().then(function () {
              stat.textContent = lastSync ? "Sincronizado às " + lastSync : "Pronto";
            });
          }, "solid wide"), btn("Abrir meus arquivos", function () {
            openApp("files");
          }, "wide"), btn("Sair desta conta", function () {
            if (confirm("Sair da conta neste aparelho?")) {
              signOut();
              reopen();
              toast("Você saiu");
            }
          }, "wide")));
        }
        var mode = m === "up" ? "up" : "in";
        var box = h("div", {
          "class": "auth"
        });
        var _draw2 = function draw() {
          var up = mode === "up";
          var em = h("input", {
            type: "email",
            id: "f-em",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "email",
            placeholder: "voce@email.com"
          });
          var pw = h("input", {
            type: "password",
            id: "f-pw",
            autocomplete: up ? "new-password" : "current-password",
            placeholder: up ? "Mínimo de 6 caracteres" : "Sua senha"
          });
          var us = h("input", {
            type: "text",
            id: "f-us",
            autocapitalize: "off",
            autocorrect: "off",
            autocomplete: "username",
            placeholder: "seunome",
            maxlength: "20"
          });
          var uh = h("small", {
            "class": "hint"
          }, "3 a 20 caracteres: letras, números, ponto ou _.");
          us.addEventListener("blur", function () {
            var v = cleanUser(us.value);
            if (!v) return;
            if (!userOk(v)) {
              uh.textContent = "Use só letras minúsculas, números, ponto ou _ (3 a 20).";
              return;
            }
            uh.textContent = "Verificando…";
            userFree(v).then(function (ok) {
              uh.textContent = ok ? "@" + v + " está disponível." : "@" + v + " já está em uso.";
            }, function () {
              uh.textContent = "3 a 20 caracteres: letras, números, ponto ou _.";
            });
          }, false);
          var msg = h("div", {
            "class": "err"
          });
          show(msg, false);
          var go = h("button", {
            "class": "solid wide"
          }, up ? "Criar conta" : "Entrar");
          var say = function say(t) {
            msg.textContent = t;
            show(msg, !!t);
          };
          var run = function run() {
            var email = em.value.replace(/^\s+|\s+$/g, ""),
              password = pw.value,
              user = cleanUser(us.value);
            if (up && !userOk(user)) return say("Escolha um @ de 3 a 20 caracteres: letras minúsculas, números, ponto ou _.");
            if (!email || email.indexOf("@") < 1) return say("Digite um e-mail válido.");
            if (password.length < 6) return say("A senha precisa de pelo menos 6 caracteres.");
            say("");
            go.disabled = true;
            go.textContent = "Aguarde…";
            var fail = function fail(e) {
              go.disabled = false;
              go.textContent = up ? "Criar conta" : "Entrar";
              say(pt(e.message));
            };
            if (up) return userFree(user).then(function (free) {
              if (!free) return fail(new Error("unique"));
              return signUp(email, password, user).then(function () {
                setAuthLbl();
                toast("Bem-vindo, @" + user);
                reopen();
                return pull();
              }, fail);
            }, function () {
              return signUp(email, password, user).then(function () {
                setAuthLbl();
                toast("Bem-vindo, @" + user);
                reopen();
                return pull();
              }, fail);
            });
            signIn(email, password).then(function () {
              setAuthLbl();
              toast(up ? "Conta criada" : "Bem-vindo de volta");
              reopen();
              return pull();
            }, function (e) {
              go.disabled = false;
              go.textContent = up ? "Criar conta" : "Entrar";
              say(pt(e.message));
            });
          };
          go.onclick = run;
          var enter = function enter(e) {
            if (e.key === "Enter" || e.keyCode === 13) run();
          };
          em.addEventListener("keydown", enter, false);
          us.addEventListener("keydown", enter, false);
          pw.addEventListener("keydown", enter, false);
          var eye = h("button", {
            "class": "lnk",
            onclick: function onclick() {
              pw.type = pw.type === "password" ? "text" : "password";
              eye.textContent = pw.type === "password" ? "Mostrar" : "Ocultar";
            }
          }, "Mostrar");
          box.replaceChildren(brand(), h("h2", {}, up ? "Crie sua conta" : "Entre na sua conta"), h("p", {
            "class": "sub"
          }, up ? "Grátis. Escolha seu @, e-mail e senha." : "Para ver seus favoritos, notas e arquivos em qualquer aparelho."), up ? h("div", {
            "class": "fld"
          }, h("label", {
            "for": "f-us"
          }, "Nome de usuário"), h("div", {
            "class": "at"
          }, h("span", {}, "@"), us), uh) : null, h("div", {
            "class": "fld"
          }, h("label", {
            "for": "f-em"
          }, "E-mail"), em), h("div", {
            "class": "fld"
          }, h("label", {
            "for": "f-pw"
          }, "Senha", eye), pw), msg, go, h("p", {
            "class": "switch"
          }, up ? "Já tem conta?" : "Ainda não tem conta?", h("button", {
            "class": "lnk",
            onclick: function onclick() {
              mode = up ? "in" : "up";
              _draw2();
            }
          }, up ? "Entrar" : "Criar conta grátis")), h("ul", {
            "class": "perks"
          }, h("li", {}, ic("check", 20), "Favoritos, notas, tarefas e calendário em todos os aparelhos"), h("li", {}, ic("check", 20), "Seus arquivos guardados na conta"), h("li", {}, ic("check", 20), "Sem conta, tudo continua funcionando só neste aparelho")), h("p", {
            style: "text-align:center;margin-top:14px"
          }, h("button", {
            "class": "lnk",
            onclick: closeModal
          }, "Continuar sem conta")));
        };
        _draw2();
        modal(box);
      },
      diag: function diag() {
        var el = document.createElement("div"),
          t = function t(f) {
            try {
              return !!f();
            } catch (e) {
              return false;
            }
          };
        var st = document.body.style;
        var rows = [["Navegador", navigator.userAgent], ["Tela", window.innerWidth + "×" + window.innerHeight], ["Armazenamento local", t(function () {
          window.localStorage.setItem("t", "1");
          window.localStorage.removeItem("t");
          return 1;
        })], ["Canvas (jogos de desenho)", t(function () {
          return document.createElement("canvas").getContext("2d");
        })], ["Ícones SVG", t(function () {
          var s = document.createElement("span");
          s.innerHTML = '<svg width="2" height="2"><rect width="2" height="2"/></svg>';
          return s.firstChild && s.firstChild.namespaceURI === "http://www.w3.org/2000/svg";
        })], ["Toque", t(function () {
          return "ontouchstart" in window;
        })], ["Rede (fetch ou XHR)", t(function () {
          return window.fetch || window.XMLHttpRequest;
        })], ["Flexbox", t(function () {
          return "flex" in st || "webkitFlex" in st;
        })], ["CSS Grid", t(function () {
          return "grid" in st;
        })], ["Conta configurada", remote]];
        el.appendChild(h("table", {
          "class": "dg"
        }, rows.map(function (r) {
          return h("tr", {}, h("td", {}, r[0]), h("td", {}, r[1] === true ? "Sim" : r[1] === false ? "Não" : String(r[1])));
        })));
        modal(h("h2", {}, "Diagnóstico"), el, h("p", {
          "class": "muted"
        }, "O Unkindle funciona mesmo com Flexbox e Grid em “Não”: ele foi feito sem depender deles."));
      }
    };
  (function () {
    var slugOf = {};
    for (var k in PAGES) slugOf[PAGES[k]] = k;
    ["settings", "auth", "help", "privacy", "changelog", "diag"].forEach(function (n) {
      pages[n] = function (arg) {
        go(slugOf[n] + (typeof arg === "string" && arg ? "/" + arg : ""));
      };
    });
  })();
  ;
  var CATS = [["Essenciais", "check"], ["Ferramentas", "pencil"], ["Estilo de vida", "heart"], ["Notícias", "text"], ["Brasil", "flag"], ["Mundo", "map"], ["Cultura", "film"], ["Finanças", "coin"], ["Dev", "hash"], ["Diversão", "bulb"], ["Jogos", "dice"], ["Jogos para dois", "users"], ["Comunidade", "forum"]];
  function byId(id) {
    for (var i = 0; i < apps.length; i++) if (apps[i].id === id) return apps[i];
    return null;
  }
  function fill(el, nodes) {
    el.replaceChildren.apply(el, nodes);
  }
  function isList() {
    return S.settings.view === "list";
  }
  function listMode() {
    return editing || isList();
  }
  function slug(s) {
    return "c-" + plain(s).replace(/[^a-z0-9]+/g, "-");
  }
  function pageY(el) {
    var y = 0;
    while (el) {
      y += el.offsetTop || 0;
      el = el.offsetParent;
    }
    return y;
  }
  function goTo(id) {
    var el = document.getElementById(id);
    if (el) window.scrollTo(0, Math.max(0, pageY(el) - 8));
  }
  function toTop() {
    window.scrollTo(0, 0);
  }
  function tile(a, withCat) {
    var fav = inList(S.favs, a.id),
      hid = inList(S.hidden, a.id);
    return h("div", {
      "class": "t" + (hid ? " hid" : ""),
      role: "button",
      tabindex: "0",
      onclick: function onclick() {
        if (!editing) openApp(a.id);
      }
    }, h("span", {
      "class": "ti"
    }, ic(a.i, listMode() ? 24 : 28)), h("span", {
      "class": "tn"
    }, h("b", {}, a.n), withCat ? h("small", {}, a.c) : null), h("span", {
      "class": "tg"
    }, ic("chev", 18)), h("span", {
      "class": "mini"
    }, h("button", {
      "class": "ib sm" + (fav ? " on" : ""),
      "aria-label": "Favoritar",
      onclick: function onclick(e) {
        e.stopPropagation();
        toggle(S.favs, a.id);
      }
    }, ic("star", 18, fav)), h("button", {
      "class": "ib sm",
      "aria-label": hid ? "Mostrar" : "Ocultar",
      onclick: function onclick(e) {
        e.stopPropagation();
        toggle(S.hidden, a.id);
      }
    }, ic(hid ? "eyeoff" : "eye", 18))));
  }
  function block(list, withCat) {
    return h("div", {
      "class": listMode() ? "lst" : "grid"
    }, list.map(function (a) {
      return tile(a, withCat);
    }));
  }
  function section(name, list, id, withCat) {
    return h("div", {
      "class": "cs",
      id: id
    }, h("div", {
      "class": "sech"
    }, h("h2", {}, name), h("span", {
      "class": "tools"
    }, h("span", {
      "class": "cnt"
    }, String(list.length)), h("button", {
      "class": "ib sm",
      "aria-label": "Voltar ao topo",
      onclick: toTop
    }, ic("up", 18)))), block(list, withCat));
  }
  function byName(a, b) {
    var x = plain(a.n),
      y = plain(b.n);
    return x < y ? -1 : x > y ? 1 : 0;
  }
  var tab = "home",
    finding = false;
  var FEAT = [["news", "G1, Agência Brasil, BBC e mais"], ["weather", "Previsão para a sua cidade"], ["calendar", "Seus compromissos do mês"], ["files", "Guardados na sua conta"], ["notes", "Escreva e leve para todo lado"], ["wiki", "Leia qualquer artigo aqui mesmo"]];
  function catOrder() {
    var order = CATS.slice(),
      known = {};
    order.forEach(function (c) {
      known[c[0]] = 1;
    });
    apps.forEach(function (a) {
      if (!known[a.c]) {
        known[a.c] = 1;
        order.push([a.c, "app"]);
      }
    });
    return order;
  }
  function setTab(t) {
    tab = t;
    finding = false;
    $("#search").value = "";
    renderHome();
    toTop();
  }
  function renderTabs() {
    var mk = function mk(id, label, icon) {
      return h("button", {
        "class": "tab" + (tab === id ? " on" : ""),
        "aria-label": icon && !label ? id === "home" ? "Início" : "Todas as categorias" : null,
        onclick: function onclick() {
          setTab(id);
        }
      }, icon ? ic(icon, 16) : null, label || null);
    };
    var list = [mk("home", "", "home"), mk("all", "", "grid")];
    catOrder().forEach(function (c) {
      if (apps.some(function (a) {
        return a.c === c[0];
      })) list.push(mk(c[0], c[0]));
    });
    fill($("#tabs"), list);
  }
  function renderFeat() {
    fill($("#feat"), FEAT.map(function (f) {
      var a = byId(f[0]);
      if (!a) return null;
      return h("div", {
        "class": "fc",
        role: "button",
        tabindex: "0",
        onclick: function onclick() {
          openApp(a.id);
        }
      }, h("span", {
        "class": "fi"
      }, ic(a.i, 26)), h("span", {
        "class": "ft"
      }, h("b", {}, a.n), h("i", {}, f[1])));
    }));
  }
  function renderHome() {
    var q = plain($("#search").value.replace(/^\s+|\s+$/g, ""));
    var vis = function vis(a) {
      return editing || !inList(S.hidden, a.id);
    };
    var home = tab === "home" && !q;
    var rec = S.recents.map(byId).filter(function (a) {
      return a && vis(a);
    }).slice(0, (window.innerWidth || 800) <= 600 ? 5 : 6);
    var fav = S.favs.map(byId).filter(function (a) {
      return a && vis(a);
    });
    renderTabs();
    show($("#feat"), home && !editing);
    if (home) renderFeat();
    show($("#sec-recent"), home && rec.length > 0);
    fill($("#g-recent"), [block(rec)]);
    show($("#sec-fav"), home && fav.length > 0);
    fill($("#g-fav"), [block(fav)]);
    show($("#searchrow"), finding || !!q);
    show($("#edit-tip"), editing);
    var title = "Todos os apps",
      nodes;
    if (q) {
      var res = apps.filter(function (a) {
        return vis(a) && (plain(a.n).indexOf(q) >= 0 || plain(a.c).indexOf(q) >= 0);
      }).sort(byName);
      title = res.length + (res.length === 1 ? " resultado" : " resultados");
      nodes = [res.length ? block(res, true) : h("p", {
        "class": "empty"
      }, "Nenhum app com esse nome. Tente outra palavra.")];
    } else if (tab === "home") {
      nodes = [block(apps.filter(vis).sort(byName))];
    } else if (tab === "all") {
      title = "Todas as categorias";
      nodes = [];
      catOrder().forEach(function (c) {
        var list = apps.filter(function (a) {
          return a.c === c[0] && vis(a);
        }).sort(byName);
        if (list.length) nodes.push(h("div", {
          "class": "subh"
        }, h("span", {}, c[0]), h("small", {}, String(list.length))), block(list));
      });
    } else {
      var lc = apps.filter(function (a) {
        return a.c === tab && vis(a);
      }).sort(byName);
      title = tab;
      nodes = [block(lc)];
    }
    $("#all-title").textContent = title;
    fill($("#g-all"), nodes);
    $("#view-home").className = editing ? "editing" : "";
    $("#edit-lbl").textContent = editing ? "Concluir" : "Editar";
    $("#btn-view").replaceChildren(ic(isList() ? "grid" : "rows", 16));
    scheduleFix();
  }
  function tick() {
    var d = new Date();
    $("#clock").textContent = d.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    var wd = d.toLocaleDateString("pt-BR", {
      weekday: "long"
    });
    $("#date").textContent = wd.charAt(0).toUpperCase() + wd.slice(1) + ", " + d.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long"
    });
  }
  function wxInfo(code, day) {
    if (code === 0) return [day ? "sun" : "moon", "Céu limpo"];
    if (code <= 2) return ["partly", "Poucas nuvens"];
    if (code === 3) return ["cloud", "Nublado"];
    if (code === 45 || code === 48) return ["fog", "Neblina"];
    if (code >= 51 && code <= 57) return ["rain", "Garoa"];
    if (code >= 61 && code <= 67) return ["rain", "Chuva"];
    if (code >= 71 && code <= 77) return ["snow", "Neve"];
    if (code >= 80 && code <= 82) return ["rain", "Pancadas de chuva"];
    if (code >= 85 && code <= 86) return ["snow", "Neve"];
    if (code >= 95) return ["storm", "Trovoadas"];
    return ["cloud", ""];
  }
  function weather(lat, lon, place) {
    api("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=auto").then(function (j) {
      var c = j.current,
        w = wxInfo(c.weather_code, c.is_day !== 0);
      $("#wx-ic").replaceChildren(ic(w[0], 20));
      $("#wx-temp").textContent = Math.round(c.temperature_2m) + "°";
      var mx = j.daily && j.daily.temperature_2m_max ? " · " + Math.round(j.daily.temperature_2m_max[0]) + "° / " + Math.round(j.daily.temperature_2m_min[0]) + "°" : "";
      $("#weather-line").textContent = "";
      $("#wx-place").textContent = place ? " · " + place : "";
    }, function () {
      $("#weather-line").textContent = "Clima indisponível";
    });
  }
  ;
  var add = function add(id, n, i, c, r) {
    apps.push({
      id: id,
      n: n,
      i: i,
      c: c,
      r: r
    });
  };
  var onClose = function onClose(b, fn) {
    var p = b._cleanup;
    b._cleanup = function () {
      if (p) p();
      fn();
    };
  };
  var btn = function btn(t, f, cls) {
    return h("button", {
      "class": cls || "",
      onclick: f
    }, t);
  };
  var inp = function inp(ph, type, extra) {
    var a = {
      placeholder: ph,
      type: type || "text"
    };
    for (var k in extra || {}) a[k] = extra[k];
    return h("input", a);
  };
  var rnd = function rnd(n) {
    return Math.floor(Math.random() * n);
  };
  var pick = function pick(a) {
    return a[rnd(a.length)];
  };
  var shuffle = function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = rnd(i + 1),
        t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };
  var last = function last(a) {
    return a[a.length - 1];
  };
  var txt = function txt(html) {
    html = html || "";
    try {
      var d = new DOMParser().parseFromString(html, "text/html");
      if (d && d.body) return d.body.textContent;
    } catch (e) {}
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  };
  var _loadScript = function loadScript(src) {
    return new Promise(function (ok, no) {
      _loadScript.c = _loadScript.c || {};
      if (_loadScript.c[src]) return ok();
      var s = document.createElement("script");
      s.src = src;
      s.onload = function () {
        _loadScript.c[src] = 1;
        ok();
      };
      s.onerror = function () {
        no(new Error("script"));
      };
      document.head.appendChild(s);
    });
  };
  var cv = function cv(w, hh) {
    return h("canvas", {
      width: w,
      height: hh,
      "class": "cv",
      style: "max-width:100%;background:#fff;display:block;keep-colors:1"
    });
  };
  var ptr = function ptr(c, e) {
    var r = c.getBoundingClientRect();
    return [(e.clientX - r.left) * c.width / r.width, (e.clientY - r.top) * c.height / r.height];
  };
  function drawing(c, st) {
    var g = c.getContext("2d"),
      d = false,
      lp;
    g.lineCap = "round";
    g.lineJoin = "round";
    onPointer(c, function (e) {
      d = true;
      lp = ptr(c, e);
      g.fillStyle = st.color;
      g.beginPath();
      g.arc(lp[0], lp[1], st.size / 2, 0, 7);
      g.fill();
    }, function (e) {
      if (!d) return;
      var p = ptr(c, e);
      g.strokeStyle = st.color;
      g.lineWidth = st.size;
      g.beginPath();
      g.moveTo(lp[0], lp[1]);
      g.lineTo(p[0], p[1]);
      g.stroke();
      lp = p;
    }, function () {
      d = false;
    });
  }
  function keys(b, fn) {
    var f = function f(e) {
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
      fn(e.key, e);
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].indexOf(e.key) >= 0 && e.preventDefault) e.preventDefault();
    };
    document.addEventListener("keydown", f, false);
    onClose(b, function () {
      document.removeEventListener("keydown", f, false);
    });
  }
  function dpad(fn) {
    var k = function k(l, key, icon) {
      return h("button", {
        "aria-label": l,
        style: "min-width:60px;min-height:52px",
        onclick: function onclick() {
          fn(key);
        }
      }, ic(icon, 24));
    };
    return h("div", {
      "class": "row",
      style: "justify-content:center"
    }, k("Esquerda", "ArrowLeft", "back"), k("Cima", "ArrowUp", "up"), k("Baixo", "ArrowDown", "down"), k("Direita", "ArrowRight", "fwd"));
  }
  var keepT = {};
  function keepGet(k) {
    var v = S.x["save_" + k];
    return v ? JSON.parse(JSON.stringify(v)) : null;
  }
  function keepPut(k, v) {
    S.x["save_" + k] = v;
    clearTimeout(keepT[k]);
    keepT[k] = setTimeout(save, 600);
  }
  function keepDel(k) {
    delete S.x["save_" + k];
    save();
  }
  function loop(b, fn, ms) {
    var id = setInterval(fn, ms || 100);
    onClose(b, function () {
      clearInterval(id);
    });
    return id;
  }
  function linkApp(id, n, i, c, url, desc) {
    add(id, n, i, c, function (b) {
      b.append(h("p", {}, desc), h("p", {
        "class": "muted"
      }, "Este serviço exige conta própria e abre em outra aba."), btn("Abrir " + n, function () {
        window.open(url, "_blank");
      }, "solid"));
    });
  }
  function listApp(b, key, fields, o) {
    o = o || {};
    var items = X(key, []);
    var ins = fields.map(function (f) {
      return h(f.multi ? "textarea" : "input", {
        placeholder: f.ph,
        type: f.type || "text",
        style: f.multi ? "min-height:90px" : ""
      });
    });
    var list = h("ul", {
        "class": "list"
      }),
      head = h("p", {
        "class": "muted"
      }),
      emp = h("div", {
        "class": "empty2"
      }, o.empty || "Nada por aqui ainda. Use o campo acima para adicionar.");
    var _draw3 = function draw() {
      head.textContent = o.head ? o.head(items) : items.length + (items.length === 1 ? " item" : " itens");
      show(emp, !items.length);
      show(list, !!items.length);
      show(head, !!items.length);
      list.replaceChildren.apply(list, items.map(function (it, i) {
        return h("li", {}, o.done ? h("input", {
          type: "checkbox",
          checked: it.d ? "checked" : false,
          onchange: function onchange(e) {
            it.d = e.target.checked;
            save();
            _draw3();
          }
        }) : null, h("span", {
          "class": it.d ? "done" : ""
        }, o.show ? o.show(it) : fields.map(function (f) {
          return it[f.k];
        }).filter(Boolean).join(" — ")), o.extra ? o.extra(it, i, _draw3) : null, h("button", {
          "aria-label": "Apagar",
          onclick: function onclick() {
            items.splice(i, 1);
            save();
            _draw3();
          }
        }, ic("x", 18)));
      }));
    };
    var add1 = function add1() {
      var it = {};
      fields.forEach(function (f, i) {
        it[f.k] = ins[i].value.replace(/^\s+|\s+$/g, "");
      });
      if (!it[fields[0].k]) return;
      it.date = today();
      items.unshift(it);
      ins.forEach(function (i) {
        i.value = "";
      });
      save();
      _draw3();
    };
    ins.forEach(function (i) {
      if (i.tagName === "INPUT") i.addEventListener("keydown", function (e) {
        if (e.key === "Enter") add1();
      }, false);
    });
    b.append(h("div", {
      "class": "row"
    }, ins, btn("Adicionar", add1, "solid")), head, list, emp);
    _draw3();
    return {
      items: items,
      draw: _draw3
    };
  }
  ;
  add("notes", "Notas", "notes", "Essenciais", function (b) {
    var ta = h("textarea", {
        placeholder: "Escreva sua nota…"
      }),
      list = h("ul", {
        "class": "list"
      }),
      editIdx = -1;
    var _draw4 = function draw() {
      list.replaceChildren.apply(list, S.notes.map(function (n, i) {
        return h("li", {}, h("span", {}, n.slice(0, 80) + (n.length > 80 ? "…" : "")), h("button", {
          onclick: function onclick() {
            ta.value = n;
            editIdx = i;
          }
        }, "Abrir"), h("button", {
          onclick: function onclick() {
            S.notes.splice(i, 1);
            save();
            _draw4();
          }
        }, "Apagar"));
      }));
    };
    b.append(ta, h("div", {
      "class": "row"
    }, h("button", {
      "class": "solid",
      onclick: function onclick() {
        if (!ta.value.replace(/\s/g, "")) return;
        if (editIdx >= 0) S.notes[editIdx] = ta.value;else S.notes.unshift(ta.value);
        ta.value = "";
        editIdx = -1;
        save();
        _draw4();
        toast("Salvo");
      }
    }, "Salvar")), list);
    _draw4();
  });
  add("todo", "Tarefas", "todo", "Essenciais", function (b) {
    var i1 = h("input", {
        placeholder: "Nova tarefa"
      }),
      list = h("ul", {
        "class": "list"
      });
    var _draw5 = function draw() {
      list.replaceChildren.apply(list, S.todos.map(function (t, i) {
        return h("li", {}, h("input", {
          type: "checkbox",
          checked: t.d ? "checked" : false,
          onchange: function onchange(e) {
            t.d = e.target.checked;
            save();
            _draw5();
          }
        }), h("span", {
          "class": t.d ? "done" : ""
        }, t.t), h("button", {
          "aria-label": "Apagar",
          onclick: function onclick() {
            S.todos.splice(i, 1);
            save();
            _draw5();
          }
        }, ic("x", 18)));
      }));
    };
    var add1 = function add1() {
      if (i1.value.replace(/\s/g, "")) {
        S.todos.unshift({
          t: i1.value.replace(/^\s+|\s+$/g, ""),
          d: false
        });
        i1.value = "";
        save();
        _draw5();
      }
    };
    i1.addEventListener("keydown", function (e) {
      if (e.key === "Enter") add1();
    }, false);
    b.append(h("div", {
      "class": "row"
    }, i1, h("button", {
      "class": "solid",
      onclick: add1
    }, "Adicionar")), list);
    _draw5();
  });
  add("calc", "Calculadora", "calc", "Ferramentas", function (b) {
    var d = h("input", {
        readonly: "readonly",
        style: "width:100%;text-align:right;font-size:1.5em"
      }),
      g = h("div", {
        "class": "g4",
        style: "max-width:340px"
      }),
      ex = "";
    "7 8 9 / 4 5 6 * 1 2 3 - 0 . = +".split(" ").forEach(function (k) {
      g.appendChild(h("button", {
        style: "height:58px;font-size:1.2em",
        onclick: function onclick() {
          if (k === "=") {
            try {
              if (!/^[0-9+\-*/. ]+$/.test(ex)) throw 0;
              ex = String(Function('"use strict";return(' + ex + ")")());
            } catch (e) {
              ex = "Erro";
            }
          } else {
            if (ex === "Erro") ex = "";
            ex += k;
          }
          d.value = ex;
        }
      }, k));
    });
    g.appendChild(h("button", {
      style: "width:100%;height:50px",
      onclick: function onclick() {
        ex = "";
        d.value = "";
      }
    }, "Limpar"));
    b.append(d, h("div", {
      style: "height:8px"
    }), g);
  });
  add("pomo", "Pomodoro", "pomo", "Ferramentas", function (b) {
    var sec = 1500,
      iv = null,
      out = h("div", {
        "class": "big"
      }),
      info = h("p", {
        "class": "muted"
      });
    var show1 = function show1() {
      out.textContent = pad2(Math.floor(sec / 60)) + ":" + pad2(sec % 60);
      info.textContent = "Ciclos concluídos: " + S.pomos;
    };
    var stop = function stop() {
      clearInterval(iv);
      iv = null;
    };
    b.append(out, h("div", {
      "class": "row"
    }, h("button", {
      "class": "solid",
      onclick: function onclick() {
        if (iv) return;
        iv = setInterval(function () {
          sec--;
          if (sec <= 0) {
            stop();
            S.pomos++;
            save();
            sec = 1500;
            toast("Ciclo concluído!");
          }
          show1();
        }, 1000);
      }
    }, "Iniciar"), h("button", {
      onclick: stop
    }, "Pausar"), h("button", {
      onclick: function onclick() {
        stop();
        sec = 1500;
        show1();
      }
    }, "Zerar")), info);
    onClose(b, stop);
    show1();
  });
  add("ttt", "Jogo da velha", "ttt", "Jogos", function (b) {
    var bd = ["", "", "", "", "", "", "", "", ""],
      turn = "X",
      over = false,
      st = h("p"),
      g = h("div", {
        "class": "g3",
        style: "max-width:300px"
      });
    var W = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var _draw6 = function draw() {
      g.replaceChildren.apply(g, bd.map(function (c, i) {
        return h("button", {
          style: "height:96px;font-size:2.2em",
          onclick: function onclick() {
            if (c || over) return;
            bd[i] = turn;
            if (W.some(function (w) {
              return w.every(function (k) {
                return bd[k] === turn;
              });
            })) {
              over = true;
              st.textContent = turn + " venceu!";
            } else if (bd.every(function (x) {
              return x;
            })) {
              over = true;
              st.textContent = "Empate.";
            } else {
              turn = turn === "X" ? "O" : "X";
              st.textContent = "Vez de " + turn;
            }
            _draw6();
          }
        }, c);
      }));
    };
    st.textContent = "Vez de X";
    b.append(st, g, h("div", {
      style: "height:8px"
    }), h("button", {
      "class": "solid",
      onclick: function onclick() {
        bd = ["", "", "", "", "", "", "", "", ""];
        turn = "X";
        over = false;
        st.textContent = "Vez de X";
        _draw6();
      }
    }, "Reiniciar"));
    _draw6();
  });
  add("guess", "Adivinhe o número", "guess", "Jogos", function (b) {
    var n = 1 + rnd(100),
      tries = 0,
      i1 = h("input", {
        type: "number",
        placeholder: "1 a 100"
      }),
      m = h("p");
    b.append(h("div", {
      "class": "row"
    }, i1, h("button", {
      "class": "solid",
      onclick: function onclick() {
        var v = +i1.value;
        if (!v) return;
        tries++;
        if (v === n) {
          m.textContent = "Acertou em " + tries + " tentativas!";
          n = 1 + rnd(100);
          tries = 0;
        } else m.textContent = v < n ? "O número é maior." : "O número é menor.";
      }
    }, "Chutar")), m);
  });
  ;
  add("breath", "Respiração", "wind", "Estilo de vida", function (b) {
    var modes = {
      "Caixa 4-4-4-4": [["Inspire", 4], ["Segure", 4], ["Expire", 4], ["Segure", 4]],
      "4-7-8": [["Inspire", 4], ["Segure", 7], ["Expire", 8]],
      "Calma 5-5": [["Inspire", 5], ["Expire", 5]]
    };
    var sel = h.apply(void 0, ["select", {}].concat(_toConsumableArray(Object.keys(modes).map(function (k) {
        return h("option", {}, k);
      })))),
      out = h("div", {
        class: "big",
        style: "text-align:center;padding:30px 0"
      }, "Pronto"),
      info = h("p", {
        class: "muted",
        style: "text-align:center"
      });
    var iv = null;
    var stop = function stop() {
      clearInterval(iv);
      iv = null;
      out.textContent = "Pronto";
    };
    var start = function start() {
      stop();
      var seq = modes[sel.value];
      var p = 0,
        t = seq[0][1],
        cy = 0;
      var show = function show() {
        out.textContent = seq[p][0] + " · " + t;
        info.textContent = "Ciclos: " + cy;
      };
      show();
      iv = setInterval(function () {
        t--;
        if (t <= 0) {
          p = (p + 1) % seq.length;
          if (!p) cy++;
          t = seq[p][1];
        }
        show();
      }, 1000);
    };
    b.append(h("div", {
      class: "row"
    }, sel, btn("Começar", start, "solid"), btn("Parar", stop)), out, info);
    onClose(b, function () {
      return clearInterval(iv);
    });
  });
  add("calendar", "Calendário", "cal", "Essenciais", function (b) {
    var ev = X("events", {});
    var MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var SEM = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var key = function key(y, m, d) {
      return y + "-" + pad2(m + 1) + "-" + pad2(d);
    };
    var parse = function parse(k) {
      var p = k.split("-");
      return new Date(+p[0], +p[1] - 1, +p[2]);
    };
    var items = function items(k) {
      return (ev[k] || []).map(function (x) {
        return typeof x === "string" ? {
          t: x,
          h: ""
        } : x;
      });
    };
    var sortT = function sortT(a) {
      return a.slice().sort(function (x, y) {
        return (x.h || "99") < (y.h || "99") ? -1 : 1;
      });
    };
    var ym = new Date();
    ym.setDate(1);
    var sel = today();
    var nav = h("div", {
        class: "calnav"
      }),
      grid = h("div"),
      dayBox = h("div"),
      upBox = h("div");
    var tIn = inp("Hora", "time"),
      xIn = inp("Novo evento");
    var addE = function addE() {
      var t = xIn.value.trim();
      if (!t) return;
      var l = items(sel);
      l.push({
        t: t,
        h: tIn.value || ""
      });
      ev[sel] = sortT(l);
      xIn.value = "";
      tIn.value = "";
      save();
      _draw7();
    };
    xIn.addEventListener("keydown", function (e) {
      return e.key === "Enter" && addE();
    });
    var go = function go(n) {
      ym.setMonth(ym.getMonth() + n);
      _draw7();
    };
    var _draw7 = function draw() {
      var y = ym.getFullYear(),
        m = ym.getMonth(),
        t0 = today();
      nav.replaceChildren(h("span", {}, h("button", {
        class: "ib",
        "aria-label": "Mês anterior",
        onclick: function onclick() {
          return go(-1);
        }
      }, ic("back", 24))), h("span", {
        class: "mt"
      }, MES[m] + " " + y), h("span", {
        style: "text-align:right"
      }, h("button", {
        class: "ib",
        "aria-label": "Próximo mês",
        onclick: function onclick() {
          return go(1);
        }
      }, ic("fwd", 24))));
      var start = new Date(y, m, 1 - new Date(y, m, 1).getDay());
      var rows = [];
      for (var r = 0; r < 6; r++) {
        var tds = [];
        var _loop = function _loop() {
          var d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + r * 7 + c),
            k = key(d.getFullYear(), d.getMonth(), d.getDate());
          var cls = (d.getMonth() !== m ? "out " : "") + (k === t0 ? "now " : "") + (k === sel ? "sel" : "");
          tds.push(h("td", {
            class: cls,
            onclick: function onclick() {
              sel = k;
              if (d.getMonth() !== m) {
                ym = new Date(d.getFullYear(), d.getMonth(), 1);
              }
              _draw7();
            }
          }, h("span", {
            class: "n"
          }, d.getDate()), h("span", {
            class: "dot" + ((ev[k] || []).length ? "" : " no")
          })));
        };
        for (var c = 0; c < 7; c++) {
          _loop();
        }
        rows.push(h.apply(void 0, ["tr", {}].concat(tds)));
        if (r >= 4 && new Date(start.getFullYear(), start.getMonth(), start.getDate() + (r + 1) * 7).getMonth() !== m) break;
      }
      grid.replaceChildren(h("table", {
        class: "cal"
      }, h("thead", {}, h.apply(void 0, ["tr", {}].concat(_toConsumableArray("DSTQQSS".split("").map(function (x) {
        return h("th", {}, x);
      }))))), h.apply(void 0, ["tbody", {}].concat(rows))));
      var sd = parse(sel),
        l = sortT(items(sel));
      var isToday = sel === t0;
      dayBox.replaceChildren(h("div", {
        class: "dayh"
      }, h("h3", {}, (isToday ? "Hoje, " : SEM[sd.getDay()] + ", ") + sd.getDate() + " de " + MES[sd.getMonth()].toLowerCase()), isToday ? null : h("button", {
        class: "lnk",
        onclick: function onclick() {
          sel = t0;
          ym = new Date();
          ym.setDate(1);
          _draw7();
        }
      }, "Ir para hoje")), l.length ? h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(l.map(function (x, i) {
        return h("li", {}, h("span", {}, h("span", {
          class: "tm"
        }, x.h || "—"), " " + x.t), h("button", {
          "aria-label": "Apagar",
          onclick: function onclick() {
            l.splice(i, 1);
            if (l.length) ev[sel] = l;else delete ev[sel];
            save();
            _draw7();
          }
        }, ic("x", 20)));
      })))) : h("div", {
        class: "empty2"
      }, "Nenhum evento neste dia."), h("div", {
        class: "bar"
      }, h("span", {
        style: "width:7.5em"
      }, tIn), h("span", {}, xIn), h("span", {}, btn("Adicionar", addE, "solid"))));
      var up = Object.keys(ev).filter(function (k) {
        return k >= t0 && (ev[k] || []).length;
      }).sort().slice(0, 8);
      upBox.replaceChildren(h("div", {
        class: "lbl2"
      }, "Próximos eventos"), up.length ? h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(up.map(function (k) {
        var d = parse(k);
        return h("li", {
          style: "cursor:pointer",
          onclick: function onclick() {
            sel = k;
            ym = new Date(d.getFullYear(), d.getMonth(), 1);
            _draw7();
            window.scrollTo(0, 0);
          }
        }, h("span", {}, h("b", {}, k === t0 ? "Hoje" : SEM[d.getDay()].split("-")[0] + ", " + d.getDate() + "/" + pad2(d.getMonth() + 1)), h("small", {}, sortT(items(k)).map(function (x) {
          return (x.h ? x.h + " " : "") + x.t;
        }).join(" · "))));
      })))) : h("div", {
        class: "empty2"
      }, "Nada marcado daqui para frente."));
    };
    b.append(nav, grid, dayBox, upBox);
    _draw7();
  });
  add("decider", "Decisor", "shuffle", "Ferramentas", function (b) {
    var ta = h("textarea", {
        placeholder: "Uma opção por linha",
        style: "min-height:110px"
      }),
      out = h("p", {
        class: "big"
      });
    b.append(ta, h("div", {
      class: "row"
    }, btn("Sortear", function () {
      var o = ta.value.split("\n").map(function (s) {
        return s.trim();
      }).filter(Boolean);
      out.textContent = o.length ? pick(o) : "Escreva opções";
    }, "solid"), btn("Moeda", function () {
      return out.textContent = pick(["Cara", "Coroa"]);
    }), btn("Dado 6", function () {
      return out.textContent = 1 + rnd(6);
    }), btn("Dado 20", function () {
      return out.textContent = 1 + rnd(20);
    })), out);
  });
  add("files", "Arquivos", "list", "Ferramentas", function (b) {
    var body = h("div");
    b.append(body);
    if (!remote) {
      body.append(h("div", {
        class: "empty2"
      }, "A conta não está configurada neste Unkindle."));
      return;
    }
    var kb = function kb(n) {
      return n >= 1048576 ? (n / 1048576).toFixed(1).replace(".", ",") + " MB" : Math.max(1, Math.round(n / 1024)) + " KB";
    };
    var when = function when(s) {
      var d = new Date(s);
      return isNaN(d) ? "" : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear();
    };
    var login = function login() {
      return body.replaceChildren(h("div", {
        class: "card",
        style: "text-align:center"
      }, h("div", {
        style: "margin:6px 0 10px"
      }, ic("user", 36)), h("p", {}, h("b", {}, "Seus arquivos ficam na sua conta.")), h("p", {
        class: "muted"
      }, "Entre para enviar e abrir seus arquivos em qualquer aparelho."), btn("Entrar ou criar conta", function () {
        return pages.auth();
      }, "solid wide")));
    };
    if (!session) return login();
    var prog = h("div", {
        class: "prog"
      }, h("i")),
      st = h("p", {
        class: "muted"
      }),
      list = h("div");
    var file = h("input", {
      type: "file",
      multiple: ""
    });
    show(prog, false);
    var fail = function fail(e) {
      st.textContent = /bucket not found|not found/i.test(e.message) && e.status !== 401 ? "O armazenamento de arquivos ainda não foi ativado no Supabase (rode o supabase.sql)." : "Erro: " + pt(e.message);
    };
    var _draw8 = function draw() {
      st.textContent = "Carregando…";
      filesList().then(function (all) {
        var tot = all.reduce(function (a, f) {
          return a + f.size;
        }, 0);
        st.textContent = all.length ? all.length + (all.length === 1 ? " arquivo" : " arquivos") + " · " + kb(tot) : "";
        list.replaceChildren(all.length ? h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(all.map(function (f) {
          return h("li", {}, h("span", {}, h("b", {}, f.name), h("small", {}, kb(f.size) + (f.date ? " · " + when(f.date) : ""))), btn("Abrir", function () {
            st.textContent = "Abrindo…";
            fileUrl(f.name).then(function (u) {
              st.textContent = "";
              window.location.href = u;
            }, fail);
          }), h("button", {
            "aria-label": "Apagar",
            onclick: function onclick() {
              if (confirm("Apagar " + f.name + " da sua conta?")) fileDel(f.name).then(_draw8, fail);
            }
          }, ic("x", 20)));
        })))) : h("div", {
          class: "empty2"
        }, "Nenhum arquivo ainda. Toque em Enviar arquivo."));
      }, fail);
    };
    file.onchange = function () {
      var fs = Array.prototype.slice.call(file.files || []);
      file.value = "";
      if (!fs.length) return;
      var i = 0;
      show(prog, true);
      var _next = function next() {
        if (i >= fs.length) {
          show(prog, false);
          toast("Enviado");
          return _draw8();
        }
        var f = fs[i++];
        st.textContent = "Enviando " + f.name + " (" + i + "/" + fs.length + ")…";
        if (f.size > 50 * 1048576) {
          toast(f.name + ": máximo 50 MB");
          return _next();
        }
        fileUp(f, function (p) {
          prog.firstChild.style.width = Math.round(p * 100) + "%";
        }).then(_next, function (e) {
          show(prog, false);
          fail(e);
        });
      };
      _next();
    };
    body.append(h("p", {
      class: "muted"
    }, "Guardados na sua conta (" + session.user.email + "). Abra em qualquer aparelho em que você entrar."), h("label", {
      class: "filebtn solid wide"
    }, ic("plus", 20), " Enviar arquivo", file), prog, st, list);
    _draw8();
  });
  add("cards", "Flashcards", "card", "Estilo de vida", function (b) {
    var cards = X("cards", []),
      f = inp("Frente"),
      v = inp("Verso"),
      area = h("div", {
        class: "card",
        style: "text-align:center;margin-top:10px"
      });
    var due = function due() {
      return cards.filter(function (c) {
        return (c.due || "") <= today();
      });
    };
    var _study = function study() {
      var d = due();
      if (!d.length) {
        area.replaceChildren(h("p", {}, cards.length ? "Nada para revisar hoje." : "Crie seu primeiro cartão."));
        return;
      }
      var c = pick(d);
      var shown = false;
      var front = h("div", {
          class: "big"
        }, c.f),
        back = h("div", {
          style: "margin:8px 0;font-size:1.3em"
        }, "");
      var rate = function rate(ok) {
        c.box = ok ? Math.min((c.box || 0) + 1, 5) : 0;
        var days = [0, 1, 2, 4, 8, 16][c.box];
        var dt = new Date();
        dt.setDate(dt.getDate() + days);
        c.due = dt.toISOString().slice(0, 10);
        save();
        _study();
      };
      area.replaceChildren(front, back, h("div", {
        class: "row",
        style: "justify-content:center"
      }, btn("Mostrar", function () {
        back.textContent = c.v;
      }), btn("Errei", function () {
        return rate(false);
      }), btn("Acertei", function () {
        return rate(true);
      }, "solid")), h("p", {
        class: "muted"
      }, d.length + " para revisar"));
    };
    var addC = function addC() {
      if (f.value.trim() && v.value.trim()) {
        cards.push({
          f: f.value.trim(),
          v: v.value.trim(),
          box: 0,
          due: today()
        });
        f.value = v.value = "";
        save();
        _study();
      }
    };
    b.append(h("div", {
      class: "row"
    }, f, v, btn("Criar", addC, "solid")), area);
    _study();
  });
  add("flipbook", "Flipbook", "film", "Estilo de vida", function (b) {
    var c = cv(320, 240),
      st = {
        size: 4,
        color: "#000"
      };
    drawing(c, st);
    var g = c.getContext("2d");
    var frames = [];
    var iv = null;
    var info = h("p", {
      class: "muted"
    }, "0 quadros");
    var snap = function snap() {
      frames.push(c.toDataURL());
      info.textContent = frames.length + " quadros";
      g.clearRect(0, 0, 320, 240);
    };
    var play = function play() {
      if (!frames.length) return;
      clearInterval(iv);
      var i = 0;
      iv = setInterval(function () {
        var im = new Image();
        im.onload = function () {
          g.clearRect(0, 0, 320, 240);
          g.drawImage(im, 0, 0);
        };
        im.src = frames[i];
        i = (i + 1) % frames.length;
      }, 150);
    };
    b.append(c, h("div", {
      class: "row"
    }, btn("Salvar quadro", snap, "solid"), btn("Reproduzir", play), btn("Parar", function () {
      clearInterval(iv);
      g.clearRect(0, 0, 320, 240);
    }), btn("Limpar", function () {
      frames.length = 0;
      g.clearRect(0, 0, 320, 240);
      info.textContent = "0 quadros";
    })), info);
    onClose(b, function () {
      return clearInterval(iv);
    });
  });
  add("food", "Food Log", "food", "Estilo de vida", function (b) {
    return listApp(b, "food", [{
      k: "t",
      ph: "Alimento"
    }, {
      k: "k",
      ph: "kcal",
      type: "number"
    }], {
      show: function show(i) {
        return "".concat(i.date.slice(5), " \xB7 ").concat(i.t, " \xB7 ").concat(i.k || 0, " kcal");
      },
      head: function head(it) {
        return "Hoje: ".concat(it.filter(function (i) {
          return i.date === today();
        }).reduce(function (a, i) {
          return a + (+i.k || 0);
        }, 0), " kcal");
      }
    });
  });
  add("speed", "Leitor Interativo", "bolt", "Estilo de vida", function (b) {
    var ta = h("textarea", {
        placeholder: "Cole um texto para ler palavra por palavra",
        style: "min-height:120px"
      }),
      w = h("input", {
        type: "range",
        min: 100,
        max: 700,
        value: 300,
        step: 25
      }),
      lab = h("span", {}, "300 palavras/min"),
      out = h("div", {
        class: "big",
        style: "text-align:center;padding:30px 0;min-height:110px"
      }, "…");
    var iv = null;
    w.oninput = function () {
      return lab.textContent = w.value + " palavras/min";
    };
    var stop = function stop() {
      clearInterval(iv);
      iv = null;
    };
    var play = function play() {
      stop();
      var words = ta.value.split(/\s+/).filter(Boolean);
      var i = 0;
      if (!words.length) return;
      iv = setInterval(function () {
        if (i >= words.length) return stop();
        out.textContent = words[i++];
      }, 60000 / +w.value);
    };
    b.append(ta, h("div", {
      class: "row"
    }, w, lab), h("div", {
      class: "row"
    }, btn("Ler", play, "solid"), btn("Parar", stop)), out);
    onClose(b, stop);
  });
  add("diary", "Diário", "pen", "Estilo de vida", function (b) {
    var d = X("diary", {}),
      date = inp("", "date", {
        value: today()
      }),
      ta = h("textarea", {
        style: "min-height:220px",
        placeholder: "Como foi seu dia?"
      }),
      list = h("ul", {
        class: "list"
      });
    var load = function load() {
      return ta.value = d[date.value] || "";
    };
    date.onchange = load;
    var draw = function draw() {
      return list.replaceChildren.apply(list, _toConsumableArray(Object.keys(d).sort().reverse().map(function (k) {
        return h("li", {}, h("span", {}, k + " — " + d[k].slice(0, 50)), btn("Abrir", function () {
          date.value = k;
          load();
        }));
      })));
    };
    b.append(date, ta, h("div", {
      class: "row"
    }, btn("Salvar", function () {
      if (ta.value.trim()) d[date.value] = ta.value;else delete d[date.value];
      save();
      draw();
      toast("Salvo");
    }, "solid")), list);
    load();
    draw();
  });
  ;
  add("maps", "UnMaps", "map", "Mundo", function (b) {
    var q = inp("Cidade ou endereço"),
      box = h("div", {
        style: "margin-top:8px"
      }),
      msg = h("p", {
        class: "muted"
      });
    var show = function show(lat, lon) {
      box.replaceChildren(h("iframe", {
        title: "Mapa",
        style: "width:100%;height:420px;border:2px solid var(--line)",
        src: "https://www.openstreetmap.org/export/embed.html?bbox=".concat(lon - .02, ",").concat(lat - .012, ",").concat(lon + .02, ",").concat(lat + .012, "&layer=mapnik&marker=").concat(lat, ",").concat(lon)
      }));
    };
    var go = function () {
      var _ref = _asyncToGenerator(_regenerator().m(function _callee() {
        var j, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (q.value.trim()) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              msg.textContent = "Buscando…";
              _context.p = 2;
              _context.n = 3;
              return api("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + encodeURIComponent(q.value));
            case 3:
              j = _context.v;
              if (j.length) {
                _context.n = 4;
                break;
              }
              throw 0;
            case 4:
              msg.textContent = j[0].display_name;
              show(+j[0].lat, +j[0].lon);
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              msg.textContent = "Local não encontrado.";
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 5]]);
      }));
      return function go() {
        return _ref.apply(this, arguments);
      };
    }();
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go();
    });
    b.append(h("div", {
      class: "row"
    }, q, btn("Buscar", go, "solid")), msg, box);
  });
  add("bluesky", "Bluesky", "bsky", "Notícias", function (b) {
    var q = inp("Usuário, ex.: bsky.app"),
      out = h("div");
    var go = function () {
      var _ref2 = _asyncToGenerator(_regenerator().m(function _callee2() {
        var a, j, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              a = q.value.trim().replace(/^@/, "");
              if (a) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              out.textContent = "Carregando…";
              _context2.p = 2;
              _context2.n = 3;
              return api("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?limit=20&actor=" + encodeURIComponent(a));
            case 3:
              j = _context2.v;
              out.replaceChildren(h.apply(void 0, ["ul", {
                class: "list"
              }].concat(_toConsumableArray(j.feed.map(function (f) {
                return h("li", {
                  style: "display:block"
                }, h("p", {
                  style: "margin:4px 0"
                }, f.post.record.text || "(sem texto)"));
              })))));
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              out.textContent = "Perfil não encontrado.";
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4]]);
      }));
      return function go() {
        return _ref2.apply(this, arguments);
      };
    }();
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go();
    });
    b.append(h("p", {
      class: "muted"
    }, "Leitura dos posts públicos de um perfil."), h("div", {
      class: "row"
    }, q, btn("Ver", go, "solid")), out);
  });
  add("pixel", "Pixel", "grid", "Ferramentas", function (b) {
    var N = 24,
      S2 = 14,
      c = cv(N * S2, N * S2),
      g = c.getContext("2d"),
      cells = Array(N * N).fill(0);
    var on = 1,
      down = false;
    var draw = function draw() {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, c.width, c.height);
      g.fillStyle = "#000";
      cells.forEach(function (v, i) {
        return v && g.fillRect(i % N * S2, Math.floor(i / N) * S2, S2, S2);
      });
      g.strokeStyle = "#ccc";
      for (var i = 0; i <= N; i++) {
        g.beginPath();
        g.moveTo(i * S2, 0);
        g.lineTo(i * S2, N * S2);
        g.moveTo(0, i * S2);
        g.lineTo(N * S2, i * S2);
        g.stroke();
      }
    };
    var paint = function paint(e) {
      var _ptr = ptr(c, e),
        _ptr2 = _slicedToArray(_ptr, 2),
        x = _ptr2[0],
        y = _ptr2[1],
        k = Math.floor(y / S2) * N + Math.floor(x / S2);
      if (k >= 0 && k < N * N) {
        cells[k] = on;
        draw();
      }
    };
    onPointer(c, function (e) {
      down = true;
      paint(e);
    }, function (e) {
      if (down) paint(e);
    }, function () {
      down = false;
    });
    b.append(c, h("div", {
      class: "row"
    }, btn("Pintar", function () {
      return on = 1;
    }, "solid"), btn("Apagar", function () {
      return on = 0;
    }), btn("Limpar", function () {
      cells.fill(0);
      draw();
    }), galleryBtn(c, "pixel", function () {
      var o = cv(N * S2, N * S2),
        og = o.getContext("2d");
      og.fillStyle = "#fff";
      og.fillRect(0, 0, o.width, o.height);
      og.fillStyle = "#000";
      cells.forEach(function (v, i) {
        return v && og.fillRect(i % N * S2, Math.floor(i / N) * S2, S2, S2);
      });
      return o;
    })));
    draw();
  });
  add("quick", "ToDo Rápido", "todo", "Essenciais", function (b) {
    return listApp(b, "quick", [{
      k: "t",
      ph: "Anote rápido"
    }], {
      done: true,
      head: function head(i) {
        return "".concat(i.filter(function (x) {
          return !x.d;
        }).length, " pendentes");
      }
    });
  });
  add("sketch", "Bloco de Desenho", "pen", "Ferramentas", function (b) {
    var c = cv(600, 400),
      st = {
        size: 4,
        color: "#000"
      };
    drawing(c, st);
    var g = c.getContext("2d");
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 600, 400);
    var sz = h("input", {
      type: "range",
      min: 1,
      max: 30,
      value: 4,
      style: "max-width:160px",
      oninput: function oninput(e) {
        return st.size = +e.target.value;
      }
    });
    b.append(c, h("div", {
      class: "row"
    }, btn("Lápis", function () {
      return st.color = "#000";
    }, "solid"), btn("Borracha", function () {
      return st.color = "#fff";
    }), sz, btn("Limpar", function () {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, 600, 400);
    }), galleryBtn(c, "desenho")));
  });
  add("stocks", "Ações", "chart", "Finanças", function (b) {
    var q = inp("Código B3, ex.: PETR4", "text", {
        value: "PETR4"
      }),
      out = h("div");
    var go = function () {
      var _ref3 = _asyncToGenerator(_regenerator().m(function _callee3() {
        var t, j, r, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              t = q.value.trim().toUpperCase();
              if (t) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              out.textContent = "Consultando…";
              _context3.p = 2;
              _context3.n = 3;
              return api("https://brapi.dev/api/quote/" + encodeURIComponent(t));
            case 3:
              j = _context3.v;
              r = j.results[0];
              out.replaceChildren(h("h3", {}, "".concat(r.symbol, " \u2014 ").concat(r.shortName || "")), h("p", {
                class: "big"
              }, "R$ " + r.regularMarketPrice), h("p", {}, "Varia\xE7\xE3o no dia: ".concat((+r.regularMarketChangePercent).toFixed(2), "%")));
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              out.textContent = "Não foi possível consultar (alguns códigos exigem chave no serviço gratuito).";
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 4]]);
      }));
      return function go() {
        return _ref3.apply(this, arguments);
      };
    }();
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go();
    });
    b.append(h("div", {
      class: "row"
    }, q, btn("Consultar", go, "solid")), out, h("p", {
      class: "muted"
    }, "Apenas informação. Não é recomendação de investimento."));
  });
  add("ideas", "Sugestões", "bulb", "Ferramentas", function (b) {
    var ta = h("textarea", {
        placeholder: "Conte sua ideia ou problema"
      }),
      list = h("ul", {
        class: "list"
      });
    var items = X("feedback", []);
    var draw = function draw() {
      return list.replaceChildren.apply(list, _toConsumableArray(items.map(function (i) {
        return h("li", {}, h("span", {}, i.date + " — " + i.t));
      })));
    };
    b.append(ta, h("div", {
      class: "row"
    }, btn("Enviar", _asyncToGenerator(_regenerator().m(function _callee4() {
      var t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            t = ta.value.trim();
            if (t) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            items.unshift({
              t: t,
              date: today()
            });
            ta.value = "";
            save();
            draw();
            sbFeedback(t)["catch"](function () {});
            toast("Obrigado!");
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    })), "solid")), list);
    draw();
  });
  add("teleprompter", "Teleprompter", "text", "Ferramentas", function (b) {
    var ta = h("textarea", {
        placeholder: "Cole o roteiro",
        style: "min-height:110px"
      }),
      sp = h("input", {
        type: "range",
        min: 1,
        max: 10,
        value: 3
      }),
      box = h("div", {
        style: "height:300px;overflow:hidden;border:2px solid var(--line);margin-top:8px;font-size:32px;line-height:1.5;padding:10px;white-space:pre-wrap"
      });
    var iv = null;
    var stop = function stop() {
      clearInterval(iv);
      iv = null;
    };
    b.append(ta, h("div", {
      class: "row"
    }, "Velocidade", sp, btn("Iniciar", function () {
      stop();
      box.textContent = ta.value;
      box.scrollTop = 0;
      iv = setInterval(function () {
        return box.scrollTop += +sp.value;
      }, 50);
    }, "solid"), btn("Parar", stop)), box);
    onClose(b, stop);
  });
  add("timer", "Temporizador", "pomo", "Ferramentas", function (b) {
    var m = inp("Minutos", "number", {
        value: 5
      }),
      out = h("div", {
        class: "big",
        style: "margin:12px 0"
      }, "00:00");
    var iv = null,
      left = 0,
      sw = false;
    var fmt = function fmt(s) {
      return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
    };
    var stop = function stop() {
      clearInterval(iv);
      iv = null;
    };
    var run = function run(f) {
      stop();
      iv = setInterval(f, 1000);
    };
    b.append(h("div", {
      class: "row"
    }, m, btn("Contagem regressiva", function () {
      left = Math.round(+m.value * 60);
      sw = false;
      out.textContent = fmt(left);
      run(function () {
        left--;
        out.textContent = fmt(Math.max(left, 0));
        if (left <= 0) {
          stop();
          toast("Tempo esgotado!");
        }
      });
    }, "solid")), h("div", {
      class: "row"
    }, btn("Cronômetro", function () {
      left = 0;
      out.textContent = "00:00";
      run(function () {
        left++;
        out.textContent = fmt(left);
      });
    }), btn("Parar", stop), btn("Zerar", function () {
      stop();
      left = 0;
      out.textContent = "00:00";
    })), out);
    onClose(b, stop);
  });
  add("translate", "Tradutor", "chat", "Mundo", function (b) {
    var L = {
        pt: "Português",
        en: "Inglês",
        es: "Espanhol",
        fr: "Francês",
        de: "Alemão",
        it: "Italiano"
      },
      opt = function opt(v) {
        return h.apply(void 0, ["select", {}].concat(_toConsumableArray(Object.entries(L).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            n = _ref6[1];
          return h("option", _objectSpread({
            value: k
          }, k === v ? {
            selected: ""
          } : {}), n);
        }))));
      };
    var a = opt("pt"),
      z = opt("en"),
      ta = h("textarea", {
        placeholder: "Texto",
        style: "min-height:110px"
      }),
      out = h("p", {
        class: "card"
      });
    b.append(h("div", {
      class: "row"
    }, a, z), ta, h("div", {
      class: "row"
    }, btn("Traduzir", _asyncToGenerator(_regenerator().m(function _callee5() {
      var j, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (ta.value.trim()) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            out.textContent = "Traduzindo…";
            _context5.p = 2;
            _context5.n = 3;
            return api("https://api.mymemory.translated.net/get?q=".concat(encodeURIComponent(ta.value.slice(0, 480)), "&langpair=").concat(a.value, "|").concat(z.value));
          case 3:
            j = _context5.v;
            out.textContent = j.responseData.translatedText;
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t4 = _context5.v;
            out.textContent = "Falha na tradução.";
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4]]);
    })), "solid")), out);
  });
  ;
  var NOCONN = "Não foi possível carregar agora. Verifique a conexão ou tente de novo em instantes.";
  function apiText(url, ms) {
    return new Promise(function (ok, no) {
      var t = setTimeout(function () {
        no(new Error("tempo esgotado"));
      }, ms || 15000);
      window.fetch(url).then(function (r) {
        return r.text().then(function (x) {
          clearTimeout(t);
          if (!r.ok) return no(new Error("HTTP " + r.status));
          ok(x);
        });
      })["catch"](function (e) {
        clearTimeout(t);
        no(e);
      });
    });
  }
  function para(t) {
    return h("p", {}, t);
  }
  function big(t) {
    return h("div", {
      "class": "big"
    }, t);
  }
  function note(t) {
    return h("p", {
      "class": "muted"
    }, t);
  }
  function openBtn(url, label) {
    return h("button", {
      onclick: function onclick() {
        window.open(url, "_blank");
      }
    }, label || "Abrir", " ", ic("ext", 16));
  }
  function imgEl(src, alt) {
    return h("img", {
      src: src,
      alt: alt || "",
      style: "display:block;margin:8px 0"
    });
  }
  function kv(rows) {
    return h("table", {
      "class": "kv"
    }, rows.filter(function (r) {
      return r && r[1] != null && r[1] !== "" && r[1] !== "undefined";
    }).map(function (r) {
      return h("tr", {}, h("td", {}, r[0]), h("td", {}, String(r[1])));
    }));
  }
  function listOf(items) {
    if (!items.length) return note("Nada encontrado.");
    return h("ul", {
      "class": "list"
    }, items.map(function (it) {
      return h("li", {}, h("span", {}, h("b", {}, it.t), it.s ? h("br") : null, it.s ? h("small", {}, it.s) : null), it.u ? h("button", {
        "aria-label": "Abrir",
        onclick: function onclick() {
          window.open(it.u, "_blank");
        }
      }, ic("ext", 18)) : null);
    }));
  }
  function mediaList(items) {
    if (!items.length) return note("Nada encontrado.");
    return h("ul", {
      "class": "list"
    }, items.map(function (it) {
      return h("li", {
        "class": "card2"
      }, it.img ? h("div", {
        "class": "thumb"
      }, h("img", {
        src: it.img,
        alt: ""
      })) : null, h("div", {}, h("b", {}, it.t)), it.s ? h("div", {}, h("small", {}, it.s)) : null, it.extra || null);
    }));
  }
  function dbr(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || "");
    return m ? m[3] + "/" + m[2] + "/" + m[1] : s || "";
  }
  function wkd(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || "");
    return m ? DIAS[new Date(+m[1], +m[2] - 1, +m[3]).getDay()] : "";
  }
  function num(v, d) {
    var n = Number(v);
    if (!isFinite(n)) return String(v);
    var p = n.toFixed(d == null ? 0 : d).split(".");
    p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return p.join(",");
  }
  function digits(s) {
    return String(s || "").replace(/\D/g, "");
  }
  function trBtn(text) {
    var out = h("div");
    var b = h("button", {
      onclick: function onclick() {
        out.replaceChildren(note("Traduzindo…"));
        api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(String(text).slice(0, 480)) + "&langpair=en|pt").then(function (j) {
          out.replaceChildren(h("div", {
            "class": "rt"
          }, txt(j.responseData.translatedText)));
        }, function () {
          out.replaceChildren(note("Tradução indisponível."));
        });
      }
    }, "Traduzir para português");
    return h("div", {}, b, out);
  }
  function geo(q) {
    return api("https://geocoding-api.open-meteo.com/v1/search?count=1&language=pt&name=" + encodeURIComponent(q)).then(function (j) {
      var r = j.results && j.results[0];
      if (!r) throw new Error("Local não encontrado");
      return {
        lat: r.latitude,
        lon: r.longitude,
        name: r.name + (r.admin1 ? ", " + r.admin1 : "") + (r.country ? " – " + r.country : "")
      };
    });
  }
  var locCache = null;
  function myLoc() {
    if (!locCache) locCache = ipLocations().then(function (p) {
      if (!p.length) return {
        lat: -23.55,
        lon: -46.63,
        name: "São Paulo"
      };
      var b = medoid(p);
      return {
        lat: b.lat,
        lon: b.lon,
        name: b.city || "Sua região"
      };
    });
    return locCache;
  }
  function place(v) {
    return v && v.q ? geo(v.q) : myLoc();
  }
  var PLACE_IN = [{
    k: "q",
    ph: "Cidade (vazio = onde você está)",
    def: ""
  }];
  function W(id, n, icon, cat, o) {
    add(id, n, icon, cat, function (b) {
      var fields = (o.inputs || []).map(function (f) {
        var el = f.opts ? h("select", {}, f.opts.map(function (op) {
          return h("option", {
            value: op[0],
            selected: op[0] === f.def ? "selected" : false
          }, op[1]);
        })) : h("input", {
          type: f.type || "text",
          placeholder: f.ph,
          value: f.def != null ? f.def : ""
        });
        return {
          k: f.k,
          el: el
        };
      });
      var out = h("div", {
        "class": "web"
      });
      var read = function read() {
        var v = {};
        fields.forEach(function (f) {
          v[f.k] = f.el.value.replace(/^\s+|\s+$/g, "");
        });
        return v;
      };
      var run = function run() {
        out.replaceChildren(note("Carregando…"));
        var p;
        try {
          p = Promise.resolve(o.go(read(), b));
        } catch (e) {
          p = Promise.reject(e);
        }
        p.then(function (r) {
          out.replaceChildren.apply(out, [].concat(r));
        }, function (e) {
          if (!(e && e.userMsg)) rep({
            tipo: "online-falhou",
            app: id,
            msg: String(e && e.message || e),
            status: e && e.status || ""
          });
          out.replaceChildren(para(e && e.userMsg ? e.userMsg : NOCONN), note(String(e && e.message || "")));
        });
      };
      fields.forEach(function (f) {
        if (f.el.tagName === "INPUT") f.el.addEventListener("keydown", function (e) {
          if (e.key === "Enter") run();
        }, false);else f.el.onchange = run;
      });
      b.append(o.about ? note(o.about) : null, h("div", {
        "class": "row"
      }, fields.map(function (f) {
        return f.el;
      }), h("button", {
        "class": "solid",
        onclick: run
      }, o.btn || (fields.length ? "Buscar" : "Atualizar"))), out);
      if (o.auto !== false) run();
    });
  }
  function userErr(msg) {
    var e = new Error(msg);
    e.userMsg = msg;
    return e;
  }
  function feedNodes(url, tries) {
    tries = tries == null ? 3 : tries;
    return api("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url)).then(function (j) {
      if (j.status && j.status !== "ok") throw userErr("Esse feed não está disponível agora.");
      return listOf((j.items || []).slice(0, 30).map(function (i) {
        return {
          t: txt(i.title),
          s: (i.pubDate || "").slice(0, 16) + (i.description ? " · " + txt(i.description).replace(/\s+/g, " ").slice(0, 120) : ""),
          u: i.link
        };
      }));
    }, function (e) {
      if (e && e.status === 429 && tries > 0) return new Promise(function (ok) {
        setTimeout(ok, 3500);
      }).then(function () {
        return feedNodes(url, tries - 1);
      });
      throw e;
    });
  }
  function feedApp(id, n, icon, url, cat) {
    W(id, n, icon, cat || "Notícias", {
      go: function go() {
        return feedNodes(url);
      }
    });
  }
  ;
  W("b_feriados", "Feriados nacionais", "cal", "Brasil", {
    inputs: [{
      k: "y",
      ph: "Ano",
      type: "number",
      def: String(new Date().getFullYear())
    }],
    go: function go(v) {
      return api("https://brasilapi.com.br/api/feriados/v1/" + digits(v.y)).then(function (j) {
        return listOf(j.map(function (f) {
          return {
            t: f.name,
            s: dbr(f.date) + " · " + wkd(f.date)
          };
        }));
      });
    }
  });
  W("m_feriados", "Feriados no mundo", "cal", "Mundo", {
    inputs: [{
      k: "c",
      def: "PT",
      opts: [["BR", "Brasil"], ["PT", "Portugal"], ["US", "Estados Unidos"], ["GB", "Reino Unido"], ["DE", "Alemanha"], ["FR", "França"], ["ES", "Espanha"], ["IT", "Itália"], ["AR", "Argentina"], ["MX", "México"], ["JP", "Japão"], ["CA", "Canadá"], ["AU", "Austrália"]]
    }, {
      k: "y",
      ph: "Ano",
      type: "number",
      def: String(new Date().getFullYear())
    }],
    go: function go(v) {
      return api("https://date.nager.at/api/v3/PublicHolidays/" + digits(v.y) + "/" + v.c).then(function (j) {
        return listOf(j.map(function (f) {
          return {
            t: f.localName + (f.name !== f.localName ? " (" + f.name + ")" : ""),
            s: dbr(f.date) + " · " + wkd(f.date)
          };
        }));
      });
    }
  });
  var banksCache = null;
  W("b_nomes", "Nomes no Censo", "users", "Brasil", {
    about: "Quantas pessoas têm um nome, segundo os Censos do IBGE.",
    inputs: [{
      k: "n",
      ph: "Primeiro nome",
      def: "Maria"
    }],
    go: function go(v) {
      return api("https://servicodados.ibge.gov.br/api/v2/censos/nomes/" + encodeURIComponent(v.n)).then(function (j) {
        if (!j.length || !j[0].res) throw userErr("Esse nome não aparece no Censo.");
        var res = j[0].res.map(function (r) {
            var y = (String(r.periodo).match(/\d{4}/) || [""])[0];
            return {
              y: y,
              f: r.frequencia
            };
          }),
          total = res.reduce(function (a, r) {
            return a + r.f;
          }, 0);
        var top = res.slice().sort(function (a, b) {
          return b.f - a.f;
        })[0];
        return [big(num(total)), note("pessoas com o nome " + j[0].nome), kv([["Década mais comum", "a partir de " + top.y]]), h("h3", {}, "Por década"), kv(res.sort(function (a, b) {
          return a.y - b.y;
        }).map(function (r) {
          return [r.y + "", num(r.f)];
        }))];
      });
    }
  });
  add("b_fipe", "Tabela FIPE", "coin", "Brasil", function (b) {
    var base = "https://parallelum.com.br/fipe/api/v1/carros/marcas",
      sm = h("select"),
      sd = h("select"),
      sa = h("select"),
      out = h("div", {
        "class": "web"
      });
    var opt = function opt(sel, items, label) {
      sel.replaceChildren.apply(sel, [h("option", {
        value: ""
      }, label)].concat(items.map(function (i) {
        return h("option", {
          value: i.codigo
        }, i.nome);
      })));
    };
    var fail = function fail() {
      out.replaceChildren(para(NOCONN));
    };
    opt(sm, [], "Carregando marcas…");
    opt(sd, [], "Modelo");
    opt(sa, [], "Ano");
    api(base).then(function (j) {
      opt(sm, j, "Escolha a marca");
    }, fail);
    sm.onchange = function () {
      opt(sd, [], "Modelo");
      opt(sa, [], "Ano");
      if (!sm.value) return;
      opt(sd, [], "Carregando…");
      api(base + "/" + sm.value + "/modelos").then(function (j) {
        opt(sd, j.modelos, "Escolha o modelo");
      }, fail);
    };
    sd.onchange = function () {
      opt(sa, [], "Ano");
      if (!sd.value) return;
      opt(sa, [], "Carregando…");
      api(base + "/" + sm.value + "/modelos/" + sd.value + "/anos").then(function (j) {
        opt(sa, j, "Escolha o ano");
      }, fail);
    };
    sa.onchange = function () {
      if (!sa.value) return;
      out.replaceChildren(note("Consultando…"));
      api(base + "/" + sm.value + "/modelos/" + sd.value + "/anos/" + sa.value).then(function (j) {
        out.replaceChildren(big(j.Valor), kv([["Marca", j.Marca], ["Modelo", j.Modelo], ["Ano", j.AnoModelo], ["Combustível", j.Combustivel], ["Referência", j.MesReferencia], ["Código FIPE", j.CodigoFipe]]));
      }, fail);
    };
    b.append(note("Preço médio de carros pela Tabela FIPE."), h("div", {
      "class": "row"
    }, sm), h("div", {
      "class": "row"
    }, sd), h("div", {
      "class": "row"
    }, sa), out);
  });
  W("f_cotacoes", "Cotações", "coin", "Finanças", {
    about: "Valores em reais. Apenas informação, não é recomendação de investimento.",
    go: function go() {
      return api("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,BTC-BRL").then(function (j) {
        var rows = Object.keys(j).map(function (k) {
          var c = j[k];
          return [String(c.name).split("/")[0], "R$ " + num(c.bid, c.code === "JPY" || c.code === "ARS" ? 4 : 2) + "   " + (+c.pctChange > 0 ? "+" : "") + (+c.pctChange).toFixed(2).replace(".", ",") + "%"];
        });
        var first = j[Object.keys(j)[0]];
        return [kv(rows), note("Atualizado em " + (first && first.create_date || ""))];
      });
    }
  });
  W("f_cripto", "Criptomoedas", "coin", "Finanças", {
    about: "As 15 maiores por valor de mercado, em dólares. Apenas informação.",
    go: function go() {
      return api("https://api.coinpaprika.com/v1/tickers?limit=15").then(function (j) {
        return listOf(j.map(function (c) {
          var q = c.quotes && c.quotes.USD || {},
            p = q.price >= 1 ? num(q.price, 2) : Number(q.price).toFixed(4);
          return {
            t: c.rank + ". " + c.name + " (" + c.symbol + ")",
            s: "US$ " + p + " · " + (q.percent_change_24h > 0 ? "+" : "") + q.percent_change_24h + "% em 24h"
          };
        }));
      });
    }
  });
  var MOEDAS = ["BRL", "USD", "EUR", "GBP", "ARS", "JPY", "CAD", "AUD", "CHF", "CNY", "MXN", "CLP", "UYU", "PYG", "COP", "PEN", "INR", "KRW", "ZAR", "AED", "TRY", "SEK", "NOK", "NZD"];
  W("f_taxas", "Selic, CDI e IPCA", "chart", "Finanças", {
    go: function go() {
      return api("https://brasilapi.com.br/api/taxas/v1").then(function (j) {
        return [kv(j.map(function (t) {
          return [t.nome, num(t.valor, 2) + " %"];
        })), note("Taxas de referência. Apenas informação.")];
      });
    }
  });
  ;
  W("m_iss", "ISS agora", "bolt", "Mundo", {
    about: "Onde a Estação Espacial Internacional está neste momento.",
    go: function go() {
      return api("https://api.wheretheiss.at/v1/satellites/25544").then(function (j) {
        var vis = j.visibility === "daylight" ? "Em luz do dia" : j.visibility === "eclipsed" ? "Na sombra da Terra" : j.visibility;
        return [kv([["Latitude", j.latitude.toFixed(3)], ["Longitude", j.longitude.toFixed(3)], ["Altitude", num(j.altitude, 1) + " km"], ["Velocidade", num(j.velocity, 0) + " km/h"], ["Visibilidade", vis]]), h("iframe", {
          title: "Posição da ISS",
          style: "width:100%;height:300px;border:1px solid " + PAL.LINE + ";margin-top:8px",
          src: "https://www.openstreetmap.org/export/embed.html?bbox=" + (j.longitude - 20) + "," + (j.latitude - 12) + "," + (j.longitude + 20) + "," + (j.latitude + 12) + "&layer=mapnik&marker=" + j.latitude + "," + j.longitude
        })];
      });
    }
  });
  W("m_sismos", "Terremotos hoje", "bolt", "Mundo", {
    about: "Terremotos de magnitude 2,5 ou mais nas últimas 24 horas (USGS).",
    go: function go() {
      return api("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson").then(function (j) {
        return [note(j.features.length + " terremotos"), listOf(j.features.slice(0, 40).map(function (f) {
          var d = new Date(f.properties.time);
          return {
            t: "M " + f.properties.mag + " · " + f.properties.place,
            s: d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit"
            }),
            u: f.properties.url
          };
        }))];
      });
    }
  });
  W("m_ar", "Qualidade do ar", "wind", "Mundo", {
    inputs: PLACE_IN,
    go: function go(v) {
      return place(v).then(function (p) {
        return api("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + p.lat + "&longitude=" + p.lon + "&current=us_aqi,pm10,pm2_5").then(function (j) {
          var a = j.current.us_aqi,
            cls = a <= 50 ? "Boa" : a <= 100 ? "Moderada" : a <= 150 ? "Ruim para pessoas sensíveis" : a <= 200 ? "Ruim" : a <= 300 ? "Muito ruim" : "Perigosa";
          return [h("h3", {}, p.name), big(a), note("Índice de qualidade do ar (US AQI): " + cls), kv([["PM2,5", j.current.pm2_5 + " µg/m³"], ["PM10", j.current.pm10 + " µg/m³"]])];
        });
      });
    }
  });
  W("m_mar", "Ondas e mar", "wind", "Mundo", {
    inputs: [{
      k: "q",
      ph: "Cidade litorânea",
      def: "Santos"
    }],
    go: function go(v) {
      return geo(v.q || "Santos").then(function (p) {
        return api("https://marine-api.open-meteo.com/v1/marine?latitude=" + p.lat + "&longitude=" + p.lon + "&current=wave_height,wave_period,wave_direction").then(function (j) {
          var c = j.current;
          if (c.wave_height == null) throw userErr("Sem dados de mar para esse local. Tente uma cidade litorânea.");
          return [h("h3", {}, p.name), big(c.wave_height + " m"), note("altura das ondas"), kv([["Período", c.wave_period + " s"], ["Direção", c.wave_direction + "°"]])];
        }, function () {
          throw userErr("Sem dados de mar para esse local. Tente uma cidade litorânea.");
        });
      });
    }
  });
  W("m_rios", "Vazão de rios", "wind", "Mundo", {
    about: "Vazão prevista do rio mais próximo da cidade, em metros cúbicos por segundo.",
    inputs: [{
      k: "q",
      ph: "Cidade",
      def: "Manaus"
    }],
    go: function go(v) {
      return geo(v.q || "Manaus").then(function (p) {
        return api("https://flood-api.open-meteo.com/v1/flood?latitude=" + p.lat + "&longitude=" + p.lon + "&daily=river_discharge&forecast_days=7").then(function (j) {
          var d = j.daily;
          if (!d || d.river_discharge[0] == null) throw userErr("Sem dados de rio para esse local.");
          return [h("h3", {}, p.name), listOf(d.time.map(function (t, i) {
            return {
              t: dbr(t) + " · " + wkd(t),
              s: num(d.river_discharge[i], 1) + " m³/s"
            };
          }))];
        });
      });
    }
  });
  var CIDADES_MUNDO = [["São Paulo", -23.55, -46.63], ["Lisboa", 38.72, -9.14], ["Londres", 51.51, -0.13], ["Paris", 48.85, 2.35], ["Nova York", 40.71, -74.0], ["Los Angeles", 34.05, -118.24], ["Dubai", 25.2, 55.27], ["Mumbai", 19.08, 72.88], ["Tóquio", 35.68, 139.69], ["Sydney", -33.87, 151.21]];
  W("m_relogio", "Relógio mundial", "clock", "Mundo", {
    go: function go() {
      return Promise.all(CIDADES_MUNDO.map(function (c) {
        return api("https://api.open-meteo.com/v1/forecast?latitude=" + c[1] + "&longitude=" + c[2] + "&current=temperature_2m&timezone=auto");
      })).then(function (r) {
        return listOf(r.map(function (j, i) {
          return {
            t: CIDADES_MUNDO[i][0] + " · " + j.current.time.slice(11, 16),
            s: dbr(j.current.time) + " · " + wkd(j.current.time) + " · " + Math.round(j.current.temperature_2m) + "°C"
          };
        }));
      });
    }
  });
  var paisesCache = null;
  W("c_series", "Séries de TV", "film", "Cultura", {
    inputs: [{
      k: "q",
      ph: "Nome da série",
      def: "office"
    }],
    go: function go(v) {
      return api("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(v.q)).then(function (j) {
        return mediaList(j.slice(0, 10).map(function (r) {
          var s = r.show;
          return {
            t: s.name,
            s: [(s.premiered || "").slice(0, 4), (s.genres || []).join("/"), s.rating && s.rating.average ? "nota " + s.rating.average : ""].filter(Boolean).join(" · "),
            img: s.image && s.image.medium,
            extra: h("div", {}, para(txt(s.summary).slice(0, 180)), s.url ? openBtn(s.url, "Mais") : null)
          };
        }));
      });
    }
  });
  function recipeApp(id, n, icon, url, listKey, nameKey, thumbKey, ing, def) {
    W(id, n, icon, "Cultura", {
      about: "Receitas em inglês, com botão para traduzir.",
      inputs: [{
        k: "q",
        ph: "Nome ou ingrediente",
        def: def
      }],
      go: function go(v, b) {
        var out = b.querySelector(".web");
        return api(url + encodeURIComponent(v.q)).then(function (j) {
          var l = j[listKey] || [];
          if (!l.length) throw userErr("Nada encontrado. Tente em inglês.");
          return mediaList(l.slice(0, 12).map(function (m) {
            return {
              t: m[nameKey],
              s: [m.strCategory, m.strArea, m.strAlcoholic].filter(Boolean).join(" · "),
              img: m[thumbKey] + "/preview",
              extra: h("button", {
                onclick: function onclick() {
                  var rows = [];
                  for (var i = 1; i <= 20; i++) if (m["strIngredient" + i]) rows.push([m["strIngredient" + i], m["strMeasure" + i] || ""]);
                  var steps = m.strInstructions || "";
                  out.replaceChildren(h("button", {
                    onclick: function onclick() {
                      window.scrollTo(0, 0);
                      out.replaceChildren(para("Faça a busca de novo para ver a lista."));
                    }
                  }, "Voltar"), h("h3", {}, m[nameKey]), imgEl(m[thumbKey]), h("h3", {}, "Ingredientes"), kv(rows), h("h3", {}, "Modo de preparo"), h("pre", {}, steps), trBtn(steps));
                  window.scrollTo(0, 0);
                }
              }, "Ver receita")
            };
          }));
        });
      }
    });
  }
  W("c_rimas", "Rimas e sinônimos", "text", "Cultura", {
    about: "Palavras relacionadas, em inglês.",
    inputs: [{
      k: "w",
      ph: "Palavra em inglês",
      def: "love"
    }, {
      k: "m",
      def: "rel_rhy",
      opts: [["rel_rhy", "Rimas"], ["rel_syn", "Sinônimos"], ["rel_ant", "Antônimos"], ["ml", "Significado parecido"], ["sl", "Som parecido"]]
    }],
    go: function go(v) {
      return api("https://api.datamuse.com/words?max=40&" + v.m + "=" + encodeURIComponent(v.w)).then(function (j) {
        return j.length ? para(j.map(function (x) {
          return x.word;
        }).join(", ")) : note("Nada encontrado.");
      });
    }
  });
  ;
  add("g2048", "2048", "grid", "Jogos", function (b) {
    var g,
      sc = 0;
    var box = h("div", {
        style: "max-width:360px;touch-action:none"
      }),
      info = h("p", {
        class: "score"
      });
    var spawn = function spawn() {
      var e = [];
      g.forEach(function (v, i) {
        return !v && e.push(i);
      });
      if (e.length) g[pick(e)] = Math.random() < .9 ? 2 : 4;
    };
    var draw = function draw() {
      var rows = [];
      for (var r = 0; r < 4; r++) rows.push(h.apply(void 0, ["tr", {}].concat(_toConsumableArray(g.slice(r * 4, r * 4 + 4).map(function (v) {
        return h("td", {
          class: v ? "on" + (v >= 128 ? " hi" : "") : ""
        }, v || "");
      })))));
      box.replaceChildren(h("table", {
        class: "t2048"
      }, h.apply(void 0, ["tbody", {}].concat(rows))));
      info.textContent = "Pontos: " + sc;
      keepPut("2048", {
        g: g.slice(),
        sc: sc
      });
    };
    var line = function line(a) {
      a = a.filter(Boolean);
      for (var i = 0; i < a.length - 1; i++) if (a[i] === a[i + 1]) {
        a[i] *= 2;
        sc += a[i];
        a.splice(i + 1, 1);
      }
      while (a.length < 4) a.push(0);
      return a;
    };
    var move = function move(k) {
      if (!/^Arrow/.test(k)) return;
      var old = g.join();
      var _loop2 = function _loop2(i) {
        var idx = [0, 1, 2, 3].map(function (j) {
          return k === "ArrowLeft" || k === "ArrowRight" ? i * 4 + j : j * 4 + i;
        });
        if (k === "ArrowRight" || k === "ArrowDown") idx.reverse();
        var r = line(idx.map(function (x) {
          return g[x];
        }));
        idx.forEach(function (x, j) {
          return g[x] = r[j];
        });
      };
      for (var i = 0; i < 4; i++) {
        _loop2(i);
      }
      if (g.join() !== old) spawn();
      draw();
    };
    var reset = function reset() {
      g = Array(16).fill(0);
      sc = 0;
      spawn();
      spawn();
      draw();
    };
    var sx, sy;
    onPointer(box, function (e) {
      sx = e.clientX;
      sy = e.clientY;
    }, null, function (e) {
      var dx = e.clientX - sx,
        dy = e.clientY - sy;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 25) return;
      move(Math.abs(dx) > Math.abs(dy) ? dx > 0 ? "ArrowRight" : "ArrowLeft" : dy > 0 ? "ArrowDown" : "ArrowUp");
    });
    keys(b, move);
    b.append(info, box, dpad(move), btn("Novo jogo", reset));
    var sv = keepGet("2048");
    if (sv && sv.g) {
      g = sv.g;
      sc = sv.sc;
      draw();
    } else reset();
  });
  add("magic8", "Bola 8 Mágica", "ball8", "Jogos", function (b) {
    var a = ["Sim.", "Com certeza.", "Provavelmente.", "Tudo indica que sim.", "Pergunte de novo.", "Não dá para prever agora.", "Melhor não contar agora.", "Não conte com isso.", "Minha resposta é não.", "Muito duvidoso."],
      q = inp("Faça uma pergunta de sim ou não"),
      out = h("p", {
        class: "big",
        style: "text-align:center;padding:24px"
      }, "?");
    b.append(q, h("div", {
      class: "row"
    }, btn("Sacudir", function () {
      return out.textContent = pick(a);
    }, "solid")), out);
  });
  add("anagram", "Anagramas", "shuffle", "Jogos", function (b) {
    var W = ["livro", "janela", "cadeira", "estrada", "montanha", "floresta", "biblioteca", "relogio", "caderno", "bicicleta", "escola", "pintura", "musica", "viagem", "jardim", "cozinha", "tartaruga", "chocolate", "guitarra", "oceano"];
    var w,
      sc = 0;
    var out = h("p", {
        class: "big"
      }),
      g = inp("Sua resposta"),
      msg = h("p", {
        class: "muted"
      });
    var next = function next() {
      w = pick(W);
      var s;
      do s = shuffle(_toConsumableArray(w)).join(""); while (s === w);
      out.textContent = s.toUpperCase();
      g.value = "";
    };
    var chk = function chk() {
      if (g.value.trim().toLowerCase() === w) {
        sc++;
        msg.textContent = "Certo! Pontos: " + sc;
        next();
      } else msg.textContent = "Tente de novo.";
    };
    g.addEventListener("keydown", function (e) {
      return e.key === "Enter" && chk();
    });
    b.append(h("p", {}, "Desembaralhe a palavra (sem acentos)."), out, h("div", {
      class: "row"
    }, g, btn("Verificar", chk, "solid"), btn("Pular", next)), msg);
    next();
  });
  function runner(b, o) {
    var c = cv(400, 160),
      g = c.getContext("2d"),
      info = h("p");
    var y,
      vy,
      obs,
      sc,
      dead,
      t,
      spd,
      best = X("best_" + o.id, 0);
    var reset = function reset() {
      y = 0;
      vy = 0;
      obs = [];
      sc = 0;
      dead = false;
      t = 0;
      spd = o.speed;
    };
    var jump = function jump() {
      if (dead) return reset();
      if (y === 0) vy = o.jump;
    };
    onPointer(c, jump);
    keys(b, function (k) {
      return (k === " " || k === "ArrowUp") && jump();
    });
    reset();
    loop(b, function () {
      if (!dead) {
        t++;
        sc++;
        spd += .002;
        vy -= 1.2;
        y += vy;
        if (y < 0) {
          y = 0;
          vy = 0;
        }
        if (t % Math.max(28, o.gap - Math.floor(sc / 150)) === 0 && Math.random() < .85) obs.push({
          x: 400,
          w: o.spike ? 20 : 12 + rnd(14),
          h: o.spike ? 22 : 16 + rnd(22)
        });
        obs.forEach(function (a) {
          return a.x -= spd;
        });
        obs = obs.filter(function (a) {
          return a.x > -40;
        });
        if (obs.some(function (a) {
          return a.x < 64 && a.x + a.w > 40 && y < a.h - 2;
        })) {
          dead = true;
          if (sc > best) {
            best = sc;
            S.x["best_" + o.id] = sc;
            save();
          }
        }
      }
      g.clearRect(0, 0, 400, 160);
      g.fillStyle = "#000";
      g.fillRect(0, 140, 400, 2);
      g.fillRect(40, 140 - 24 - y, 24, 24);
      g.fillStyle = "#fff";
      g.fillRect(54, 140 - 18 - y, 5, 5);
      g.fillStyle = "#000";
      obs.forEach(function (a) {
        if (o.spike) {
          g.beginPath();
          g.moveTo(a.x, 140);
          g.lineTo(a.x + a.w / 2, 140 - a.h);
          g.lineTo(a.x + a.w, 140);
          g.fill();
        } else g.fillRect(a.x, 140 - a.h, a.w, a.h);
      });
      info.textContent = "Pontos: ".concat(Math.floor(sc / 5), "  \xB7  Recorde: ").concat(Math.floor(best / 5)) + (dead ? "  ·  Fim! Toque para reiniciar" : "");
    }, 40);
    b.append(h("p", {
      class: "muted"
    }, "Toque na tela ou use espaço para pular."), c, info, btn("Pular", jump, "solid"));
  }
  function lanes(b, o) {
    var c = cv(240, 360),
      g = c.getContext("2d"),
      info = h("p");
    var p,
      obs,
      sc,
      dead,
      t,
      spd,
      best = X("best_" + o.id, 0);
    var reset = function reset() {
      p = 1;
      obs = [];
      sc = 0;
      dead = false;
      t = 0;
      spd = o.speed;
    };
    var mv = function mv(k) {
      if (dead && (k === "ArrowLeft" || k === "ArrowRight" || k === " ")) return reset();
      if (k === "ArrowLeft") p = Math.max(0, p - 1);
      if (k === "ArrowRight") p = Math.min(2, p + 1);
    };
    onPointer(c, function (e) {
      return mv(ptr(c, e)[0] < 120 ? "ArrowLeft" : "ArrowRight");
    });
    keys(b, mv);
    reset();
    loop(b, function () {
      if (!dead) {
        t++;
        sc++;
        spd += .003;
        if (t % Math.max(18, o.gap - Math.floor(sc / 200)) === 0) obs.push({
          l: rnd(3),
          y: -40
        });
        obs.forEach(function (a) {
          return a.y += spd;
        });
        obs = obs.filter(function (a) {
          return a.y < 400;
        });
        if (obs.some(function (a) {
          return a.l === p && a.y > 270 && a.y < 340;
        })) {
          dead = true;
          if (sc > best) {
            best = sc;
            S.x["best_" + o.id] = sc;
            save();
          }
        }
      }
      g.clearRect(0, 0, 240, 360);
      g.fillStyle = "#000";
      g.fillRect(79, 0, 2, 360);
      g.fillRect(159, 0, 2, 360);
      g.fillRect(p * 80 + 20, 300, 40, 40);
      g.fillStyle = "#fff";
      g.fillRect(p * 80 + 30, 310, 20, 8);
      g.fillStyle = "#000";
      obs.forEach(function (a) {
        if (o.wave) {
          g.fillRect(a.l * 80 + 10, a.y, 60, 12);
          g.fillRect(a.l * 80 + 22, a.y - 10, 36, 10);
        } else {
          g.strokeRect(a.l * 80 + 22, a.y, 36, 40);
          g.fillRect(a.l * 80 + 22, a.y + 4, 36, 6);
        }
      });
      info.textContent = "Pontos: ".concat(Math.floor(sc / 5), "  \xB7  Recorde: ").concat(Math.floor(best / 5)) + (dead ? "  ·  Fim! Toque para reiniciar" : "");
    }, 40);
    b.append(h("p", {
      class: "muted"
    }, "Toque na metade esquerda ou direita, ou use as setas."), c, info, dpad(mv));
  }
  add("surf", "Surfista", "wind", "Jogos", function (b) {
    return lanes(b, {
      id: "surf",
      speed: 5,
      gap: 45,
      wave: true
    });
  });
  add("connections", "Conexões", "puzzle", "Jogos", function (b) {
    var P = [[["Frutas", "maçã", "banana", "uva", "pera"], ["Cores", "azul", "verde", "roxo", "cinza"], ["Animais", "gato", "rato", "pato", "cavalo"], ["Países", "Peru", "Chile", "Cuba", "Mali"]], [["Planetas", "Marte", "Vênus", "Terra", "Saturno"], ["Meses", "maio", "março", "junho", "agosto"], ["Instrumentos", "flauta", "violão", "piano", "tambor"], ["Móveis", "mesa", "sofá", "cama", "estante"]], [["Esportes", "tênis", "vôlei", "judô", "boxe"], ["Profissões", "médico", "padeiro", "pintor", "juiz"], ["Corpo", "mão", "pé", "olho", "nariz"], ["Roupas", "meia", "saia", "boné", "luva"]]];
    var pz, sel, found, lives, words;
    var grid = h("div", {
        style: "display:grid;grid-template-columns:repeat(4,1fr);gap:6px"
      }),
      msg = h("p");
    var start = function start() {
      pz = pick(P);
      words = shuffle(pz.flatMap(function (g) {
        return g.slice(1);
      }));
      sel = [];
      found = [];
      lives = 4;
      _draw9();
    };
    var _draw9 = function draw() {
      var done = found.flatMap(function (g) {
        return g.slice(1);
      });
      grid.replaceChildren.apply(grid, _toConsumableArray(found.map(function (g) {
        return h("div", {
          class: "card",
          style: "grid-column:1/5;text-align:center;background:var(--fg);color:var(--bg)"
        }, h("b", {}, g[0]), " — " + g.slice(1).join(", "));
      })).concat(_toConsumableArray(words.filter(function (w) {
        return !done.includes(w);
      }).map(function (w) {
        return h("button", {
          class: sel.includes(w) ? "solid" : "",
          style: "min-height:56px",
          onclick: function onclick() {
            sel = sel.includes(w) ? sel.filter(function (x) {
              return x !== w;
            }) : sel.length < 4 ? [].concat(_toConsumableArray(sel), [w]) : sel;
            _draw9();
          }
        }, w);
      }))));
      msg.textContent = found.length === 4 ? "Parabéns, você achou todos os grupos!" : lives <= 0 ? "Fim de jogo." : "Tentativas restantes: " + lives;
    };
    var guess = function guess() {
      if (sel.length !== 4 || lives <= 0) return;
      var g = pz.find(function (g) {
        return sel.every(function (w) {
          return g.includes(w);
        });
      });
      if (g && !found.includes(g)) found.push(g);else lives--;
      sel = [];
      _draw9();
    };
    b.append(h("p", {
      class: "muted"
    }, "Agrupe as 16 palavras em 4 grupos de 4."), grid, h("div", {
      class: "row"
    }, btn("Confirmar grupo", guess, "solid"), btn("Novo", start)), msg);
    start();
  });
  function crossword(b, puzzles) {
    var pz;
    var area = h("div"),
      clues = h("div"),
      msg = h("p");
    var load = function load(p) {
      pz = p;
      var R = p.g.length,
        C = p.g[0].length,
        num = {};
      var n = 0;
      var L = function L(r, c) {
        return p.g[r] && p.g[r][c] && p.g[r][c] !== "#";
      };
      var cl = [];
      for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) if (L(r, c)) {
        var a = !L(r, c - 1) && L(r, c + 1),
          d = !L(r - 1, c) && L(r + 1, c);
        if (a || d) {
          num[r + "," + c] = ++n;
          if (a) cl.push(n + "H");
          if (d) cl.push(n + "V");
        }
      }
      area.replaceChildren(h.apply(void 0, ["div", {
        style: "display:grid;grid-template-columns:repeat(".concat(C, ",1fr);max-width:").concat(C * 62, "px")
      }].concat(_toConsumableArray(p.g.flatMap(function (row, r) {
        return _toConsumableArray(row).map(function (ch, c) {
          return ch === "#" ? h("div", {
            style: "background:var(--fg);min-height:56px"
          }) : h("div", {
            style: "position:relative"
          }, num[r + "," + c] ? h("small", {
            style: "position:absolute;top:2px;left:4px;font-size:.6em"
          }, num[r + "," + c]) : null, h("input", {
            maxlength: "1",
            "data-a": ch,
            style: "text-align:center;text-transform:uppercase;font-size:1.4em;min-height:56px;padding:0"
          }));
        });
      })))));
      clues.replaceChildren(h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(cl.map(function (k) {
        return h("li", {}, h("span", {}, "".concat(k.replace("H", " Horizontal").replace("V", " Vertical"), ": ").concat(p.c[k] || "")));
      })))));
      msg.textContent = "";
    };
    var chk = function chk() {
      var ins = _toConsumableArray(area.querySelectorAll("input"));
      ins.forEach(function (i) {
        return i.style.background = i.value && i.value.toUpperCase() !== i.getAttribute("data-a") ? "#ccc" : "";
      });
      msg.textContent = ins.every(function (i) {
        return i.value.toUpperCase() === i.getAttribute("data-a");
      }) ? "Completo! Muito bem!" : "Casas erradas estão em cinza.";
    };
    b.append(area, clues, h("div", {
      class: "row"
    }, btn("Verificar", chk, "solid"), btn("Outro", function () {
      return load(pick(puzzles.filter(function (x) {
        return x !== pz;
      }).concat(puzzles.length === 1 ? puzzles : [])));
    })), msg);
    load(pick(puzzles));
  }
  var CW = {
    casa: {
      g: ["CASA", "O#U#", "RUA#"],
      c: {
        "1H": "Moradia",
        "1V": "Tonalidade",
        "2V": "Pronome possessivo feminino",
        "3H": "Via pública"
      }
    },
    mar: {
      g: ["MAR", "A#I", "RIO"],
      c: {
        "1H": "Grande massa de água salgada",
        "1V": "Oceano, em tamanho menor",
        "2V": "Corre para o mar",
        "3H": "Curso de água doce"
      }
    },
    pia: {
      g: ["PIA", "A#L", "IDA"],
      c: {
        "1H": "Louça da cozinha",
        "1V": "Chefe da família",
        "2V": "Lado de um prédio",
        "3H": "Contrário de volta"
      }
    },
    sol: {
      g: ["SOL", "A#U", "LUA"],
      c: {
        "1H": "Astro que ilumina o dia",
        "1V": "Tempero do mar",
        "2V": "Satélite natural da Terra",
        "3H": "Astro da noite"
      }
    }
  };
  add("maze", "Maze", "map", "Jogos", function (b) {
    var N = 12,
      S2 = 30,
      c = cv(N * S2, N * S2),
      g = c.getContext("2d"),
      msg = h("p");
    var W, px, py;
    var gen = function gen() {
      W = Array.from({
        length: N
      }, function () {
        return Array.from({
          length: N
        }, function () {
          return [1, 1, 1, 1];
        });
      });
      var seen = new Set(["0,0"]),
        st = [[0, 0]],
        D = [[0, -1, 0, 2], [1, 0, 1, 3], [0, 1, 2, 0], [-1, 0, 3, 1]];
      var _loop3 = function _loop3() {
        var _st = _slicedToArray(st[st.length - 1], 2),
          x = _st[0],
          y = _st[1],
          nb = shuffle(D).filter(function (_ref8) {
            var _ref9 = _slicedToArray(_ref8, 2),
              dx = _ref9[0],
              dy = _ref9[1];
            return x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < N && !seen.has("".concat(x + dx, ",").concat(y + dy));
          });
        if (!nb.length) {
          st.pop();
          return 1;
        }
        var _nb$ = _slicedToArray(nb[0], 4),
          dx = _nb$[0],
          dy = _nb$[1],
          a = _nb$[2],
          o = _nb$[3];
        W[y][x][a] = 0;
        W[y + dy][x + dx][o] = 0;
        seen.add("".concat(x + dx, ",").concat(y + dy));
        st.push([x + dx, y + dy]);
      };
      while (st.length) {
        if (_loop3()) continue;
      }
      px = py = 0;
    };
    var draw = function draw() {
      g.clearRect(0, 0, c.width, c.height);
      g.lineWidth = 2;
      g.strokeStyle = "#000";
      for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
        var w = W[y][x],
          X0 = x * S2,
          Y0 = y * S2;
        g.beginPath();
        if (w[0]) {
          g.moveTo(X0, Y0);
          g.lineTo(X0 + S2, Y0);
        }
        if (w[1]) {
          g.moveTo(X0 + S2, Y0);
          g.lineTo(X0 + S2, Y0 + S2);
        }
        if (w[2]) {
          g.moveTo(X0, Y0 + S2);
          g.lineTo(X0 + S2, Y0 + S2);
        }
        if (w[3]) {
          g.moveTo(X0, Y0);
          g.lineTo(X0, Y0 + S2);
        }
        g.stroke();
      }
      g.fillStyle = "#000";
      g.fillRect(px * S2 + 8, py * S2 + 8, S2 - 16, S2 - 16);
      g.strokeRect((N - 1) * S2 + 6, (N - 1) * S2 + 6, S2 - 12, S2 - 12);
      msg.textContent = px === N - 1 && py === N - 1 ? "Você saiu do labirinto!" : "Chegue ao quadrado vazio no canto inferior direito.";
    };
    var mv = function mv(k) {
      var i = {
        ArrowUp: 0,
        ArrowRight: 1,
        ArrowDown: 2,
        ArrowLeft: 3
      }[k];
      if (i === undefined || W[py][px][i]) return;
      px += [0, 1, 0, -1][i];
      py += [-1, 0, 1, 0][i];
      draw();
    };
    keys(b, mv);
    b.append(c, msg, dpad(mv), btn("Novo labirinto", function () {
      gen();
      draw();
    }));
    gen();
    draw();
  });
  ;
  add("trail", "Travessia", "map", "Jogos", function (b) {
    var s;
    var out = h("div"),
      log = h("ul", {
        class: "list"
      });
    var reset = function reset() {
      s = {
        d: 0,
        f: 20,
        hp: 10,
        m: 50,
        over: false
      };
      log.replaceChildren();
      draw();
    };
    var say = function say(t) {
      return log.prepend(h("li", {}, t));
    };
    var day = function day(kind) {
      if (s.over) return;
      s.f--;
      if (kind === "go") {
        s.d++;
        var r = rnd(6);
        if (r === 0) {
          s.hp--;
          say("Tempestade: -1 saúde.");
        } else if (r === 1) {
          s.f--;
          say("Uma ponte quebrada atrasou a viagem: -1 comida.");
        } else if (r === 2) {
          s.f += 2;
          say("Você achou frutas na trilha: +2 comida.");
        } else say("Dia tranquilo de caminhada.");
      }
      if (kind === "rest") {
        s.hp = Math.min(10, s.hp + 2);
        say("Você descansou: +2 saúde.");
      }
      if (kind === "hunt") {
        var g = rnd(5);
        s.f += g;
        if (rnd(4) === 0) {
          s.hp--;
          say("Você se machucou na caça: -1 saúde.");
        }
        say("Caçada: +" + g + " comida.");
      }
      if (kind === "buy") {
        if (s.m >= 10) {
          s.m -= 10;
          s.f += 5;
          say("Comprou comida: +5 (−10 moedas).");
        } else {
          s.f++;
          say("Sem moedas suficientes.");
        }
      }
      if (s.d >= 20) {
        s.over = true;
        say("Você completou a travessia!");
      } else if (s.f < 0 || s.hp <= 0) {
        s.over = true;
        say("Sua jornada terminou no dia " + s.d + ".");
      }
      draw();
    };
    var draw = function draw() {
      return out.replaceChildren(h("p", {}, "Dia ".concat(s.d, "/20 \xB7 Comida ").concat(Math.max(s.f, 0), " \xB7 Sa\xFAde ").concat(s.hp, " \xB7 Moedas ").concat(s.m)), h("div", {
        class: "row"
      }, btn("Avançar", function () {
        return day("go");
      }, "solid"), btn("Descansar", function () {
        return day("rest");
      }), btn("Caçar", function () {
        return day("hunt");
      }), btn("Comprar comida", function () {
        return day("buy");
      }), btn("Reiniciar", reset)));
    };
    b.append(h("p", {
      class: "muted"
    }, "Chegue ao fim da trilha em 20 dias, cuidando de comida e saúde."), out, log);
    reset();
  });
  add("circle", "Perfect Circle", "target", "Jogos", function (b) {
    var c = cv(300, 300),
      g = c.getContext("2d"),
      msg = h("p", {
        class: "big"
      }, "Desenhe um círculo");
    var pts = [],
      d = false;
    X("circle_best", 0);
    var clear = function clear() {
      g.clearRect(0, 0, 300, 300);
      g.fillStyle = "#000";
      g.beginPath();
      g.arc(150, 150, 3, 0, 7);
      g.fill();
    };
    var pdown = function pdown(e) {
      clear();
      d = true;
      pts = [ptr(c, e)];
    };
    var pmove = function pmove(e) {
      if (!d) return;
      var p = ptr(c, e),
        q = pts[pts.length - 1];
      pts.push(p);
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(q[0], q[1]);
      g.lineTo(p[0], p[1]);
      g.stroke();
    };
    var pup = function pup() {
      if (!d) return;
      d = false;
      if (pts.length < 25) return msg.textContent = "Desenhe um traço maior.";
      var cx = pts.reduce(function (a, p) {
          return a + p[0];
        }, 0) / pts.length,
        cy = pts.reduce(function (a, p) {
          return a + p[1];
        }, 0) / pts.length,
        rs = pts.map(function (p) {
          return Math.hypot(p[0] - cx, p[1] - cy);
        }),
        m = rs.reduce(function (a, v) {
          return a + v;
        }, 0) / rs.length;
      var dev = rs.reduce(function (a, v) {
          return a + Math.abs(v - m);
        }, 0) / rs.length / m,
        gap = Math.hypot(pts[0][0] - pts.at(-1)[0], pts[0][1] - pts.at(-1)[1]) / m,
        sc = m < 20 ? 0 : Math.max(0, Math.round(100 - dev * 260 - gap * 30));
      if (sc > S.x.circle_best) {
        S.x.circle_best = sc;
        save();
      }
      msg.textContent = "".concat(sc, "%  \xB7  Melhor: ").concat(S.x.circle_best, "%");
    };
    onPointer(c, pdown, pmove, pup);
    clear();
    b.append(c, msg);
  });
  add("snake", "Cobra", "snake", "Jogos", function (b) {
    var N = 20,
      S2 = 15,
      c = cv(N * S2, N * S2),
      g = c.getContext("2d"),
      info = h("p");
    var sn, dir, nd, ap, dead, sc;
    var reset = function reset() {
      sn = [[10, 10], [9, 10], [8, 10]];
      dir = nd = [1, 0];
      dead = false;
      sc = 0;
      food();
    };
    var food = function food() {
      do ap = [rnd(N), rnd(N)]; while (sn.some(function (s) {
        return s[0] === ap[0] && s[1] === ap[1];
      }));
    };
    var mv = function mv(k) {
      var m = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0]
      }[k];
      if (dead && m) return reset();
      if (m && (m[0] + dir[0] || m[1] + dir[1])) nd = m;
    };
    keys(b, mv);
    reset();
    loop(b, function () {
      if (!dead) {
        dir = nd;
        var h0 = [sn[0][0] + dir[0], sn[0][1] + dir[1]];
        if (h0[0] < 0 || h0[1] < 0 || h0[0] >= N || h0[1] >= N || sn.some(function (s) {
          return s[0] === h0[0] && s[1] === h0[1];
        })) dead = true;else {
          sn.unshift(h0);
          if (h0[0] === ap[0] && h0[1] === ap[1]) {
            sc++;
            food();
          } else sn.pop();
        }
      }
      g.clearRect(0, 0, N * S2, N * S2);
      g.fillStyle = "#000";
      sn.forEach(function (s, i) {
        g.fillRect(s[0] * S2 + 1, s[1] * S2 + 1, S2 - 2, S2 - 2);
        if (i && i % 2) {
          g.fillStyle = "#fff";
          g.fillRect(s[0] * S2 + 6, s[1] * S2 + 6, 3, 3);
          g.fillStyle = "#000";
        }
      });
      {
        var hx = sn[0][0] * S2,
          hy = sn[0][1] * S2;
        g.fillStyle = "#fff";
        var e = dir[0] ? [[dir[0] > 0 ? 9 : 3, 3], [dir[0] > 0 ? 9 : 3, 9]] : [[3, dir[1] > 0 ? 9 : 3], [9, dir[1] > 0 ? 9 : 3]];
        e.forEach(function (p) {
          return g.fillRect(hx + p[0], hy + p[1], 3, 3);
        });
        g.fillStyle = "#000";
        g.fillRect(hx + 7 + dir[0] * 9, hy + 7 + dir[1] * 9, 2 + Math.abs(dir[1]) * 0, 2);
      }
      g.fillRect(ap[0] * S2 + 4, ap[1] * S2 + 2, S2 - 8, S2 - 4);
      g.fillRect(ap[0] * S2 + 2, ap[1] * S2 + 4, S2 - 4, S2 - 8);
      info.textContent = "Pontos: " + sc + (dead ? " · Fim! Aperte uma seta para reiniciar" : "");
    }, 150);
    b.append(c, info, dpad(mv));
  });
  add("spelling", "Soletrando", "text", "Jogos", function (b) {
    var W = [["Aquilo que foge à regra", "exceção"], ["Quantidade além do necessário", "excesso"], ["Vantagem concedida a poucos", "privilégio"], ["Pelos acima dos olhos", "sobrancelha"], ["Pedir como direito", "reivindicar"], ["Auxiliar de uma autoridade", "assessor"], ["Conversa com opiniões opostas", "discussão"], ["Ideia fixa e persistente", "obsessão"], ["Que pode sofrer influência", "suscetível"], ["Ato de fazer o bem", "beneficência"], ["Parar completamente uma atividade", "paralisação"], ["Terra cercada de água", "ilha"], ["Profissional que conserta máquinas", "mecânico"], ["Fruta que dá em cacho, usada no vinho", "uva"]];
    var w,
      sc = 0,
      n = 0;
    var g = inp("Escreva a palavra, com acentos"),
      q = h("p", {
        class: "big"
      }),
      msg = h("p");
    var next = function next() {
      w = pick(W);
      q.textContent = w[0];
      g.value = "";
    };
    var chk = function chk() {
      n++;
      if (g.value.trim().toLowerCase() === w[1]) {
        sc++;
        msg.textContent = "Correto!";
      } else msg.textContent = "A grafia certa é: " + w[1];
      msg.textContent += "  (".concat(sc, "/").concat(n, ")");
      next();
    };
    g.addEventListener("keydown", function (e) {
      return e.key === "Enter" && chk();
    });
    b.append(h("p", {
      class: "muted"
    }, "Leia a pista e escreva a palavra com a grafia correta."), q, h("div", {
      class: "row"
    }, g, btn("Verificar", chk, "solid")), msg);
    next();
  });
  add("sudoku", "Sudoku", "hash", "Jogos", function (b) {
    var sol,
      pz,
      fixed,
      cur = null;
    var grid = h("div", {
        style: "display:grid;grid-template-columns:repeat(9,1fr);max-width:400px;border:3px solid var(--line)"
      }),
      msg = h("p");
    var gen = function gen() {
      var R = [0, 1, 2],
        rows = shuffle(R).flatMap(function (g) {
          return shuffle(R).map(function (r) {
            return g * 3 + r;
          });
        }),
        cols = shuffle(R).flatMap(function (g) {
          return shuffle(R).map(function (c) {
            return g * 3 + c;
          });
        }),
        nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      sol = rows.map(function (r) {
        return cols.map(function (c) {
          return nums[(3 * (r % 3) + Math.floor(r / 3) + c) % 9];
        });
      }).flat();
      pz = sol.slice();
      shuffle(_toConsumableArray(Array(81).keys())).slice(0, 42).forEach(function (i) {
        return pz[i] = 0;
      });
      fixed = pz.map(function (v) {
        return !!v;
      });
      cur = null;
      msg.textContent = "";
      _draw0();
    };
    var _draw0 = function draw() {
      return grid.replaceChildren.apply(grid, _toConsumableArray(pz.map(function (v, i) {
        var r = Math.floor(i / 9),
          c = i % 9;
        return h("button", {
          style: "min-height:0;aspect-ratio:1;padding:0;border-radius:0;border-width:1px;".concat(c % 3 === 0 && c ? "border-left:3px solid var(--line);" : "").concat(r % 3 === 0 && r ? "border-top:3px solid var(--line);" : "").concat(fixed[i] ? "font-weight:900;" : "").concat(cur === i ? "background:var(--fg);color:var(--bg)" : ""),
          "aria-label": "Casa",
          onclick: function onclick() {
            cur = i;
            _draw0();
          }
        }, v || "");
      })));
    };
    var put = function put(n) {
        if (cur === null || fixed[cur]) return;
        pz[cur] = n;
        _draw0();
        keepPut("sudoku", {
          sol: sol,
          pz: pz,
          fixed: fixed
        });
      },
      chk = function chk() {
        var bad = pz.some(function (v, i) {
            return v && v !== sol[i];
          }),
          full = pz.every(Boolean);
        msg.textContent = bad ? "Há números errados." : full ? "Resolvido! Parabéns!" : "Tudo certo até agora.";
      };
    b.append(grid, h.apply(void 0, ["div", {
      class: "row"
    }].concat(_toConsumableArray([1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) {
      return btn(n, function () {
        return put(n);
      });
    })), [btn("Apagar", function () {
      return put(0);
    })])), h("div", {
      class: "row"
    }, btn("Verificar", chk, "solid"), btn("Novo", function () {
      gen();
      keepPut("sudoku", {
        sol: sol,
        pz: pz,
        fixed: fixed
      });
    })), msg);
    var svS = keepGet("sudoku");
    if (svS && svS.pz) {
      sol = svS.sol;
      pz = svS.pz;
      fixed = svS.fixed;
      _draw0();
    } else {
      gen();
      keepPut("sudoku", {
        sol: sol,
        pz: pz,
        fixed: fixed
      });
    }
  });
  add("trivia", "Trivia", "bulb", "Jogos", function (b) {
    var Q = [["Qual é a capital do Brasil?", ["Rio de Janeiro", "Brasília", "Salvador", "São Paulo"], 1], ["Qual é o maior oceano do planeta?", ["Atlântico", "Pacífico", "Índico", "Ártico"], 1], ["Quantos planetas tem o Sistema Solar?", ["7", "8", "9", "10"], 1], ["Quem escreveu Dom Casmurro?", ["José de Alencar", "Machado de Assis", "Clarice Lispector", "Graciliano Ramos"], 1], ["Qual é o símbolo químico do oxigênio?", ["Ox", "O", "Og", "Os"], 1], ["Quantos lados tem um hexágono?", ["5", "6", "7", "8"], 1], ["Qual é o rio mais extenso do Brasil?", ["São Francisco", "Paraná", "Amazonas", "Tocantins"], 2], ["Em que ano o Brasil declarou independência?", ["1500", "1822", "1889", "1930"], 1], ["Qual é o maior planeta do Sistema Solar?", ["Saturno", "Júpiter", "Netuno", "Terra"], 1], ["Quem pintou a Mona Lisa?", ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"], 1], ["Em que continente fica o Egito?", ["Ásia", "África", "Europa", "Oceania"], 1], ["Qual é a raiz quadrada de 81?", ["7", "8", "9", "10"], 2], ["Qual é a moeda do Japão?", ["Won", "Iene", "Yuan", "Rupia"], 1], ["Qual mamífero é capaz de voar?", ["Pinguim", "Morcego", "Avestruz", "Tartaruga"], 1], ["Quantos jogadores de cada time ficam em campo no futebol?", ["9", "10", "11", "12"], 2], ["Que gás as plantas absorvem na fotossíntese?", ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hélio"], 2], ["Qual é a capital da França?", ["Lyon", "Paris", "Marselha", "Nice"], 1], ["Quantos meses do ano têm pelo menos 28 dias?", ["1", "2", "12", "6"], 2], ["Qual é o menor país do mundo?", ["Mônaco", "Vaticano", "Malta", "Luxemburgo"], 1], ["Qual é o osso mais longo do corpo humano?", ["Tíbia", "Fêmur", "Úmero", "Rádio"], 1]];
    var qs, i, sc;
    var out = h("div");
    var start = function start() {
      qs = shuffle(Q).slice(0, 10);
      i = 0;
      sc = 0;
      _draw1();
    };
    var _draw1 = function draw() {
      if (i >= qs.length) return out.replaceChildren(h("h3", {}, "Voc\xEA acertou ".concat(sc, " de ").concat(qs.length)), btn("Jogar de novo", start, "solid"));
      var _qs$i = _slicedToArray(qs[i], 3),
        q = _qs$i[0],
        o = _qs$i[1],
        a = _qs$i[2];
      out.replaceChildren.apply(out, [h("p", {
        class: "muted"
      }, "Pergunta ".concat(i + 1, "/").concat(qs.length)), h("h3", {}, q)].concat(_toConsumableArray(o.map(function (t, k) {
        return h("div", {
          class: "row"
        }, btn(t, function () {
          if (k === a) sc++;
          toast(k === a ? "Certo!" : "Era: " + o[a]);
          i++;
          _draw1();
        }));
      }))));
    };
    b.append(out);
    start();
  });
  ;
  add("battleship", "Battleship", "flag", "Jogos para dois", function (b) {
    var N = 7,
      SH = [3, 2, 2];
    var mine, theirs, shotsMe, shotsCpu, queue, over;
    var A = h("div"),
      Bd = h("div"),
      msg = h("p");
    var place = function place() {
      var g = Array(N * N).fill(0);
      SH.forEach(function (len) {
        var _loop4 = function _loop4() {
          var hz = rnd(2),
            x = rnd(N - (hz ? len - 1 : 0)),
            y = rnd(N - (hz ? 0 : len - 1)),
            cs = _toConsumableArray(Array(len).keys()).map(function (k) {
              return (y + (hz ? 0 : k)) * N + x + (hz ? k : 0);
            });
          if (cs.every(function (c) {
            return !g[c];
          })) {
            cs.forEach(function (c) {
              return g[c] = 1;
            });
            return 1;
          }
        };
        for (;;) {
          if (_loop4()) break;
        }
      });
      return g;
    };
    var cell = function cell(g, shots, i, show, click) {
      var s = shots[i],
        isShip = g[i];
      return h("button", {
        style: "min-height:0;aspect-ratio:1;padding:0;font-weight:700;".concat(s && isShip ? "background:var(--fg);color:var(--bg)" : "").concat(!s && show && isShip ? "border-style:dashed;background:#ddd" : ""),
        "aria-label": "Casa",
        onclick: click
      }, s ? isShip ? "X" : "·" : "");
    };
    var draw = function draw() {
      var wrap = function wrap(t, g) {
        return h("div", {
          style: "flex:1;min-width:230px"
        }, h("h3", {}, t), g);
      };
      A.replaceChildren(wrap("Seu mar", h.apply(void 0, ["div", {
        style: "display:grid;grid-template-columns:repeat(".concat(N, ",1fr);gap:2px;max-width:260px")
      }].concat(_toConsumableArray(mine.map(function (_, i) {
        return cell(mine, shotsCpu, i, true, function () {});
      }))))));
      Bd.replaceChildren(wrap("Mar inimigo (toque para atirar)", h.apply(void 0, ["div", {
        style: "display:grid;grid-template-columns:repeat(".concat(N, ",1fr);gap:2px;max-width:260px")
      }].concat(_toConsumableArray(theirs.map(function (_, i) {
        return cell(theirs, shotsMe, i, false, function () {
          return fire(i);
        });
      }))))));
    };
    var done = function done(g, s) {
      return g.every(function (v, i) {
        return !v || s[i];
      });
    };
    var fire = function fire(i) {
      if (over || shotsMe[i]) return;
      shotsMe[i] = 1;
      if (done(theirs, shotsMe)) {
        over = true;
        msg.textContent = "Você afundou todos os navios!";
        return draw();
      }
      var t;
      while (queue.length && shotsCpu[t = queue.shift()]) t = undefined;
      if (t === undefined) {
        do t = rnd(N * N); while (shotsCpu[t]);
      }
      shotsCpu[t] = 1;
      if (mine[t]) {
        var r = Math.floor(t / N),
          c = t % N;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(function (_ref0) {
          var _ref1 = _slicedToArray(_ref0, 2),
            a = _ref1[0],
            d = _ref1[1];
          return a >= 0 && a < N && d >= 0 && d < N && queue.push(a * N + d);
        });
      }
      msg.textContent = done(mine, shotsCpu) ? "O computador afundou todos os seus navios." : "Sua vez.";
      if (done(mine, shotsCpu)) over = true;
      draw();
    };
    var reset = function reset() {
      mine = place();
      theirs = place();
      shotsMe = Array(N * N).fill(0);
      shotsCpu = Array(N * N).fill(0);
      queue = [];
      over = false;
      msg.textContent = "Sua vez. Há 3 navios escondidos (tamanhos 3, 2 e 2).";
      draw();
    };
    b.append(msg, h("div", {
      class: "row",
      style: "align-items:flex-start"
    }, A, Bd), btn("Novo jogo", reset));
    reset();
  });
  ;
  function segTabs(opts, cur, onPick) {
    return h.apply(void 0, ["div", {
      class: "segtabs"
    }].concat(_toConsumableArray(opts.map(function (o) {
      return h("button", {
        class: o[0] === cur ? "on" : "",
        onclick: function onclick() {
          return onPick(o[0]);
        }
      }, o[1]);
    }))));
  }
  function subView(b, render, back) {
    pushSub(b, back);
    render();
  }
  var PROXIES = [function (u) {
    return "/__fetch?url=" + encodeURIComponent(u);
  }, function (u) {
    return "https://api.allorigins.win/raw?url=" + encodeURIComponent(u);
  }];
  function fetchPage(url) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return i >= PROXIES.length ? Promise.reject(new Error("sem acesso")) : apiText(PROXIES[i](url), 30000).catch(function () {
      return fetchPage(url, i + 1);
    });
  }
  function extractArticle(html) {
    var d = new DOMParser().parseFromString(html, "text/html");
    ["script", "style", "nav", "aside", "footer", "header", "form", "noscript", "iframe"].forEach(function (t) {
      return Array.prototype.forEach.call(d.querySelectorAll(t), function (e) {
        return e.parentNode && e.parentNode.removeChild(e);
      });
    });
    var roots = ["[itemprop=articleBody]", ".mc-article-body", ".content-text", "article", "main", "body"];
    var ps = [];
    for (var _i = 0, _roots = roots; _i < _roots.length; _i++) {
      var r = _roots[_i];
      var el = d.querySelector(r);
      if (!el) continue;
      ps = Array.prototype.map.call(el.querySelectorAll("p, h2"), function (p) {
        return {
          h: p.tagName === "H2",
          t: p.textContent.replace(/\s+/g, " ").trim()
        };
      }).filter(function (p) {
        return p.h ? p.t.length > 3 && p.t.length < 140 : p.t.length > 50;
      });
      if (ps.filter(function (p) {
        return !p.h;
      }).length >= 3) break;
    }
    var og = d.querySelector("meta[property='og:image']");
    return {
      paras: ps.slice(0, 80),
      img: og ? og.getAttribute("content") : ""
    };
  }
  function readerNodes(paras) {
    return paras.map(function (p) {
      return p.h ? h("h3", {}, p.t) : h("p", {
        class: "rp"
      }, p.t);
    });
  }
  function when(s) {
    var d = new Date(String(s).replace(" ", "T"));
    return isNaN(d) ? String(s || "").slice(0, 16) : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + " " + pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  }
  function host(u) {
    var m = /^https?:\/\/([^/]+)/.exec(u || "");
    return m ? m[1].replace(/^www\./, "") : "";
  }
  var FONTES = [["g1", "G1", "https://g1.globo.com/rss/g1/"], ["pol", "Política", "https://g1.globo.com/rss/g1/politica/"], ["eco", "Economia", "https://g1.globo.com/rss/g1/economia/"], ["mun", "Mundo", "https://g1.globo.com/rss/g1/mundo/"], ["sau", "Ciência e Saúde", "https://g1.globo.com/rss/g1/ciencia-e-saude/"], ["edu", "Educação", "https://g1.globo.com/rss/g1/educacao/"], ["tec", "Tecnologia", "https://g1.globo.com/rss/g1/tecnologia/"], ["abr", "Agência Brasil", "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml"], ["bbc", "BBC Brasil", "https://feeds.bbci.co.uk/portuguese/rss.xml"], ["uol", "UOL", "https://rss.uol.com.br/feed/noticias.xml"], ["ibge", "IBGE", ""], ["rss", "Outro feed", ""]];
  var newsCache = {};
  function loadFeed(key, url) {
    if (newsCache[key] && Date.now() - newsCache[key].t < 5 * 60000) return Promise.resolve(newsCache[key].items);
    var p = key === "ibge" ? api("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=25").then(function (j) {
      return j.items.map(function (i) {
        var img = "";
        try {
          img = "https://agenciadenoticias.ibge.gov.br/" + JSON.parse(i.imagens).image_intro;
        } catch (e) {}
        return {
          t: i.titulo,
          d: i.data_publicacao,
          u: i.link,
          img: img,
          txt: txt(i.introducao)
        };
      });
    }) : api("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url)).then(function (j) {
      if (j.status && j.status !== "ok") throw userErr("Essa fonte não está disponível agora.");
      return (j.items || []).slice(0, 30).map(function (i) {
        return {
          t: txt(i.title),
          d: i.pubDate,
          u: i.link,
          img: i.thumbnail || i.enclosure && i.enclosure.link || "",
          html: i.content || i.description || ""
        };
      });
    });
    return p.then(function (items) {
      newsCache[key] = {
        t: Date.now(),
        items: items
      };
      return items;
    });
  }
  add("news", "Notícias", "list", "Notícias", function (b) {
    var st = X("news", {
      src: "g1",
      rss: ""
    });
    var top = h("div"),
      body = h("div");
    b.append(top, body);
    var _list = function list() {
      var f = FONTES.find(function (x) {
        return x[0] === st.src;
      }) || FONTES[0];
      top.replaceChildren(segTabs(FONTES.map(function (x) {
        return [x[0], x[1]];
      }), st.src, function (k) {
        st.src = k;
        save();
        _list();
      }));
      if (st.src === "rss") {
        var u = inp("Endereço do feed (https://…)", "url", {
          value: st.rss
        });
        top.append(h("div", {
          class: "row"
        }, u, btn("Ler", function () {
          st.rss = u.value.trim();
          save();
          _list();
        }, "solid")));
        if (!/^https?:\/\//.test(st.rss)) {
          body.replaceChildren(note("Cole o endereço de um feed RSS de qualquer site."));
          return;
        }
      }
      body.replaceChildren(note("Carregando…"));
      loadFeed(st.src === "rss" ? "rss:" + st.rss : st.src, st.src === "rss" ? st.rss : f[2]).then(function (items) {
        body.replaceChildren(h.apply(void 0, ["ul", {
          class: "list news"
        }].concat(_toConsumableArray(items.map(function (it) {
          return h("li", {
            class: "nw",
            onclick: function onclick() {
              return article(it, f[1]);
            }
          }, it.img ? h("span", {
            class: "nthumb"
          }, h("img", {
            src: it.img,
            alt: ""
          })) : null, h("span", {}, h("b", {}, it.t), h("small", {}, (st.src === "rss" ? host(it.u) : f[1]) + " · " + when(it.d))));
        })))));
      }, function (e) {
        return body.replaceChildren(para(e.userMsg || NOCONN));
      });
    };
    var article = function article(it, srcName) {
      subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Notícias"));
        var text = h("div", {
          class: "art"
        });
        var first = it.html ? txt(it.html).replace(/\s+/g, " ").trim() : it.txt || "";
        text.replaceChildren(first ? h("p", {
          class: "rp"
        }, first) : null, note("Carregando a matéria completa…"));
        body.replaceChildren(h("div", {
          class: "kick2"
        }, srcName + " · " + when(it.d)), h("h2", {
          class: "ah"
        }, it.t), it.img ? h("img", {
          class: "aimg",
          src: it.img,
          alt: ""
        }) : null, text, h("p", {
          class: "muted"
        }, "Fonte: " + host(it.u)));
        window.scrollTo(0, 0);
        if (it.u) fetchPage(it.u).then(function (html) {
          var a = extractArticle(html);
          if (a.paras.length >= 2) text.replaceChildren.apply(text, _toConsumableArray(readerNodes(a.paras)));else text.lastChild && text.removeChild(text.lastChild);
        }, function () {
          if (text.lastChild) text.replaceChild(note("Não foi possível carregar o texto completo agora. Acima, o resumo da matéria."), text.lastChild);
        });
      }, _list);
    };
    _list();
  });
  var WP = "https://pt.wikipedia.org";
  function wpArticle(title) {
    return api(WP + "/w/api.php?action=query&prop=extracts|pageimages&explaintext=1&exsectionformat=wiki&piprop=thumbnail&pithumbsize=500&redirects=1&format=json&origin=*&titles=" + encodeURIComponent(title)).then(function (j) {
      var pg = j.query && j.query.pages && Object.values(j.query.pages)[0];
      if (!pg || pg.missing !== undefined || !pg.extract) throw userErr("Artigo não encontrado.");
      var paras = [];
      pg.extract.split(/\n+/).forEach(function (l) {
        l = l.trim();
        if (!l) return;
        var m = /^(=+)\s*(.+?)\s*=+$/.exec(l);
        if (m) {
          if (!/^(Referências|Ligações externas|Ver também|Bibliografia|Notas)$/i.test(m[2])) paras.push({
            h: true,
            t: m[2]
          });else paras.push({
            stop: true
          });
        } else paras.push({
          t: l
        });
      });
      var cut = paras.findIndex(function (p) {
        return p.stop;
      });
      return {
        title: pg.title,
        img: pg.thumbnail && pg.thumbnail.source,
        paras: (cut >= 0 ? paras.slice(0, cut) : paras).filter(function (p) {
          return !p.stop;
        })
      };
    });
  }
  add("wiki", "Wikipédia", "wiki", "Cultura", function (b) {
    var st = X("wikiapp", {
      tab: "busca",
      q: ""
    });
    var top = h("div"),
      body = h("div");
    b.append(top, body);
    var open = function open(title) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Wikipédia"));
        body.replaceChildren(note("Abrindo “" + title + "”…"));
        window.scrollTo(0, 0);
        wpArticle(title).then(function (a) {
          return body.replaceChildren(h("h2", {
            class: "ah"
          }, a.title), a.img ? h("img", {
            class: "aimg",
            src: a.img,
            alt: ""
          }) : null, h.apply(void 0, ["div", {
            class: "art"
          }].concat(_toConsumableArray(readerNodes(a.paras)))), note("Texto da Wikipédia, licença CC BY-SA."));
        }, function (e) {
          return body.replaceChildren(para(e.userMsg || NOCONN));
        });
      }, draw);
    };
    var items = function items(arr) {
      return h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(arr.map(function (x) {
        return h("li", {
          class: "nw",
          onclick: function onclick() {
            return x.p && open(x.p);
          }
        }, x.img ? h("span", {
          class: "nthumb"
        }, h("img", {
          src: x.img,
          alt: ""
        })) : null, h("span", {}, h("b", {}, x.t), x.s ? h("small", {}, x.s) : null));
      }))));
    };
    var d = new Date(),
      md = pad2(d.getMonth() + 1) + "/" + pad2(d.getDate());
    var TABS = {
      busca: function busca() {
        var q = inp("O que você quer ler?", "search", {
          value: st.q
        });
        var res = h("div");
        var go = function go() {
          st.q = q.value.trim();
          save();
          if (!st.q) return;
          res.replaceChildren(note("Buscando…"));
          api(WP + "/w/rest.php/v1/search/page?limit=15&q=" + encodeURIComponent(st.q)).then(function (j) {
            return res.replaceChildren((j.pages || []).length ? items(j.pages.map(function (p) {
              return {
                t: p.title,
                s: p.description || txt(p.excerpt).slice(0, 110),
                p: p.title,
                img: p.thumbnail && "https:" + p.thumbnail.url
              };
            })) : note("Nada encontrado."));
          }, function () {
            return res.replaceChildren(para(NOCONN));
          });
        };
        q.addEventListener("keydown", function (e) {
          return e.key === "Enter" && go();
        });
        body.replaceChildren(h("div", {
          class: "row"
        }, q, btn("Buscar", go, "solid")), res);
        if (st.q) go();
      },
      aleatorio: function aleatorio() {
        body.replaceChildren(note("Sorteando…"));
        api(WP + "/api/rest_v1/page/random/summary").then(function (j) {
          return open(j.title);
        }, function () {
          return body.replaceChildren(para(NOCONN));
        });
      },
      lidas: function lidas() {
        body.replaceChildren(note("Carregando…"));
        var y = new Date(Date.now() - 2 * 864e5);
        api("https://wikimedia.org/api/rest_v1/metrics/pageviews/top/pt.wikipedia/all-access/" + y.getUTCFullYear() + "/" + pad2(y.getUTCMonth() + 1) + "/" + pad2(y.getUTCDate())).then(function (j) {
          var a = j.items[0].articles.filter(function (x) {
            return !/^(Wikipédia:|Especial:|Página_principal|Ajuda:|Predefinição:|Ficheiro:)/.test(x.article);
          }).slice(0, 30);
          body.replaceChildren(items(a.map(function (x, i) {
            return {
              t: i + 1 + ". " + x.article.replace(/_/g, " "),
              s: num(x.views) + " leituras",
              p: x.article.replace(/_/g, " ")
            };
          })));
        }, function () {
          return body.replaceChildren(para(NOCONN));
        });
      },
      dia: function dia() {
        body.replaceChildren(note("Carregando…"));
        api(WP + "/api/rest_v1/feed/onthisday/all/" + md).then(function (j) {
          var ev = (j.events || []).slice(0, 20).map(function (e) {
            return {
              t: e.year + " — " + e.text,
              p: e.pages && e.pages[0] && e.pages[0].titles && e.pages[0].titles.normalized
            };
          });
          var bi = (j.births || []).slice(0, 20).map(function (e) {
            return {
              t: e.text,
              s: "Nasceu em " + e.year + " · faria " + (d.getFullYear() - e.year) + " anos",
              p: e.pages && e.pages[0] && e.pages[0].titles && e.pages[0].titles.normalized
            };
          });
          body.replaceChildren(h("div", {
            class: "lbl2"
          }, "Aconteceu num " + d.getDate() + " de " + ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][d.getMonth()]), items(ev), h("div", {
            class: "lbl2"
          }, "Aniversariantes famosos de hoje"), items(bi));
        }, function () {
          return body.replaceChildren(para(NOCONN));
        });
      }
    };
    function draw() {
      top.replaceChildren(segTabs([["busca", "Buscar"], ["aleatorio", "Aleatório"], ["lidas", "Mais lidas"], ["dia", "Hoje na história"]], st.tab, function (k) {
        st.tab = k;
        save();
        draw();
      }));
      TABS[st.tab]();
    }
    draw();
  });
  function wikiClean(s) {
    return s.replace(/<ref[^>]*\/>/g, "").replace(/<ref[\s\S]*?<\/ref>/g, "").replace(/<[^>]+>/g, "").replace(/\{\{(?:escopo2?|escopo|Escopo2?)\|([^}|]+)(?:\|[^}]*)?\}\}/g, "($1) ").replace(/\{\{[^{}]*\}\}/g, "").replace(/\{\{[^{}]*\}\}/g, "").replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, "$1").replace(/'''?/g, "").replace(/\s+/g, " ").trim();
  }
  function dictPT(w) {
    var tryWord = function tryWord(word) {
      return api("https://pt.wiktionary.org/w/api.php?action=parse&prop=wikitext&redirects=1&format=json&origin=*&page=" + encodeURIComponent(word));
    };
    return tryWord(w).catch(function () {
      return tryWord(w.toLowerCase());
    }).then(function (j) {
      if (!j.parse) throw userErr("Palavra não encontrada.");
      var wt = j.parse.wikitext["*"];
      var start = wt.search(/=\s*\{\{-pt-\}\}\s*=/);
      if (start < 0) throw userErr("Não há verbete em português para essa palavra.");
      var rest = wt.slice(start + 5),
        end = rest.search(/\n=\s*\{\{-[a-z]{2,3}-\}\}\s*=/),
        sec = end >= 0 ? rest.slice(0, end) : rest;
      var groups = [];
      var cur = null;
      sec.split("\n").forEach(function (l) {
        var hd = /^==+\s*(.+?)\s*==+\s*$/.exec(l);
        if (hd) {
          var n = wikiClean(hd[1].replace(/\{\{([^|}]+)\|?[^}]*\}\}/, "$1")).replace(/^\d+\s*/, "");
          if (/^(Substantivo|Adjetivo|Verbo|Advérbio|Pronome|Preposição|Conjunção|Interjeição|Numeral|Artigo|Locução)/i.test(n)) {
            cur = {
              pos: n,
              defs: []
            };
            groups.push(cur);
          } else cur = /Tradução|Etimologia|Pronúncia|Ver também|Sinônimos|Antônimos|Referências|Anagramas|Expressões|Conjugação|Forma/i.test(n) ? null : cur;
          return;
        }
        if (cur && /^#[^*:#]/.test(l)) {
          var t = wikiClean(l.replace(/^#+/, ""));
          if (t.length > 1) cur.defs.push(t);
        }
      });
      var ok = groups.filter(function (g) {
        return g.defs.length;
      });
      if (!ok.length) throw userErr("Encontrei a palavra, mas sem definições legíveis.");
      return {
        word: j.parse.title,
        groups: ok
      };
    });
  }
  add("dict", "Dicionário", "text", "Cultura", function (b) {
    var st = X("dictapp", {
      lang: "pt",
      w: ""
    });
    var top = h("div"),
      q = inp("Digite uma palavra", "search", {
        value: st.w
      }),
      out = h("div");
    var go = function go() {
      var w = q.value.trim();
      st.w = w;
      save();
      if (!w) return;
      out.replaceChildren(note("Procurando…"));
      if (st.lang === "pt") dictPT(w).then(function (r) {
        return out.replaceChildren.apply(out, [h("h2", {
          class: "ah"
        }, r.word)].concat(_toConsumableArray(r.groups.map(function (g) {
          return h("div", {}, h("div", {
            class: "lbl2"
          }, g.pos), h.apply(void 0, ["ol", {
            class: "defs"
          }].concat(_toConsumableArray(g.defs.slice(0, 8).map(function (d) {
            return h("li", {}, d);
          })))));
        }))));
      }, function (e) {
        return out.replaceChildren(para(e.userMsg || NOCONN));
      });else api("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w.toLowerCase())).then(function (j) {
        var e = j[0],
          tr = h("p", {
            class: "muted"
          }, "Traduzindo…");
        api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(e.word) + "&langpair=en|pt-br").then(function (t) {
          tr.textContent = "Em português: " + txt(t.responseData.translatedText);
        }, function () {
          tr.textContent = "";
        });
        out.replaceChildren.apply(out, [h("h2", {
          class: "ah"
        }, e.word, e.phonetic ? h("small", {}, "  " + e.phonetic) : null), tr].concat(_toConsumableArray(e.meanings.map(function (m) {
          return h("div", {}, h("div", {
            class: "lbl2"
          }, m.partOfSpeech), h.apply(void 0, ["ol", {
            class: "defs"
          }].concat(_toConsumableArray(m.definitions.slice(0, 4).map(function (d) {
            return h("li", {}, d.definition, d.example ? h("small", {}, "“" + d.example + "”") : null);
          })))));
        }))));
      }, function () {
        return out.replaceChildren(para("Palavra não encontrada no dicionário de inglês."));
      });
    };
    var _draw10 = function draw() {
      return top.replaceChildren(segTabs([["pt", "Português"], ["en", "Inglês"]], st.lang, function (k) {
        st.lang = k;
        save();
        _draw10();
        go();
      }));
    };
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go();
    });
    b.append(top, h("div", {
      class: "row"
    }, q, btn("Buscar", go, "solid")), out);
    _draw10();
    if (st.w) go();
  });
  var PAISES_ZIP = [["us", "Estados Unidos"], ["pt", "Portugal"], ["de", "Alemanha"], ["fr", "França"], ["es", "Espanha"], ["it", "Itália"], ["gb", "Reino Unido"], ["ca", "Canadá"], ["au", "Austrália"], ["mx", "México"], ["jp", "Japão"], ["nl", "Holanda"], ["ar", "Argentina"]];
  add("cep", "CEP", "map", "Brasil", function (b) {
    var st = X("cepapp", {
      m: "br",
      c: "us"
    });
    var top = h("div"),
      form = h("div"),
      out = h("div");
    b.append(top, form, out);
    var _draw11 = function draw() {
      top.replaceChildren(segTabs([["br", "Brasil"], ["ex", "Outro país"]], st.m, function (k) {
        st.m = k;
        save();
        out.replaceChildren();
        _draw11();
      }));
      var z = inp(st.m === "br" ? "CEP, ex.: 01001-000" : "Código postal", "text");
      var sel = h.apply(void 0, ["select", {
        onchange: function onchange() {
          st.c = sel.value;
          save();
        }
      }].concat(_toConsumableArray(PAISES_ZIP.map(function (p) {
        return h("option", {
          value: p[0],
          selected: p[0] === st.c ? "selected" : false
        }, p[1]);
      }))));
      var go = function go() {
        out.replaceChildren(note("Buscando…"));
        if (st.m === "br") {
          var c = digits(z.value);
          if (c.length !== 8) return out.replaceChildren(para("Digite um CEP com 8 números."));
          api("https://brasilapi.com.br/api/cep/v2/" + c).then(function (j) {
            return {
              cep: j.cep,
              rua: j.street,
              bairro: j.neighborhood,
              cidade: j.city,
              uf: j.state
            };
          }, function () {
            return api("https://viacep.com.br/ws/" + c + "/json/").then(function (j) {
              if (j.erro) throw userErr("CEP não encontrado.");
              return {
                cep: j.cep,
                rua: j.logradouro,
                bairro: j.bairro,
                cidade: j.localidade,
                uf: j.uf
              };
            });
          }).then(function (r) {
            return out.replaceChildren(h("div", {
              class: "big"
            }, r.cidade + " – " + r.uf), kv([["CEP", r.cep], ["Rua", r.rua], ["Bairro", r.bairro], ["Cidade", r.cidade], ["Estado", r.uf]]));
          }, function (e) {
            return out.replaceChildren(para(e.userMsg || "CEP não encontrado."));
          });
        } else api("https://api.zippopotam.us/" + st.c + "/" + encodeURIComponent(z.value.trim())).then(function (j) {
          return out.replaceChildren(kv([["País", j.country], ["Código", j["post code"]]]), listOf((j.places || []).map(function (p) {
            return {
              t: p["place name"],
              s: p.state || ""
            };
          })));
        }, function () {
          return out.replaceChildren(para("Código postal não encontrado nesse país."));
        });
      };
      z.addEventListener("keydown", function (e) {
        return e.key === "Enter" && go();
      });
      form.replaceChildren(st.m === "ex" ? h("div", {
        class: "row"
      }, sel) : null, h("div", {
        class: "row"
      }, z, btn("Buscar", go, "solid")));
    };
    _draw11();
  });
  var uvTxt = function uvTxt(v) {
    return v == null ? "" : Math.round(v) + " · " + (v < 3 ? "baixo" : v < 6 ? "moderado" : v < 8 ? "alto — use protetor" : v < 11 ? "muito alto — evite o sol do meio-dia" : "extremo — evite o sol");
  };
  var DSEM = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  add("weather", "Clima", "cloud", "Mundo", function (b) {
    var q = inp("Outra cidade", "search"),
      out = h("div");
    var show = function show(p) {
      out.replaceChildren(note("Carregando a previsão…"));
      api("https://api.open-meteo.com/v1/forecast?latitude=" + p.lat + "&longitude=" + p.lon + "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max&forecast_days=7&timezone=auto").then(function (j) {
        var c = j.current,
          w = wxInfo(c.weather_code, c.is_day !== 0),
          hr = j.hourly,
          from = Math.max(0, hr.time.indexOf(c.time.slice(0, 13) + ":00"));
        var hrs = [];
        for (var i = from; i < from + 12 && i < hr.time.length; i++) hrs.push(h("td", {}, h("small", {}, hr.time[i].slice(11, 13) + "h"), ic(wxInfo(hr.weather_code[i], true)[0], 16), h("b", {}, Math.round(hr.temperature_2m[i]) + "°"), h("small", {}, (hr.precipitation_probability[i] || 0) + "%")));
        var dy = j.daily;
        out.replaceChildren(h("div", {
          class: "wxnow"
        }, h("span", {
          class: "wxi"
        }, ic(w[0], 64)), h("span", {}, h("div", {
          class: "wxt2"
        }, Math.round(c.temperature_2m) + "°"), h("b", {}, w[1] || ""), h("small", {}, p.name))), kv([["Sensação", Math.round(c.apparent_temperature) + "°"], ["Umidade", c.relative_humidity_2m + "%"], ["Vento", Math.round(c.wind_speed_10m) + " km/h"], ["Hoje", Math.round(dy.temperature_2m_min[0]) + "° / " + Math.round(dy.temperature_2m_max[0]) + "°"], ["Nascer do sol", (dy.sunrise[0] || "").slice(11, 16)], ["Pôr do sol", (dy.sunset[0] || "").slice(11, 16)], ["Índice UV máximo", uvTxt(dy.uv_index_max[0])]]), h("div", {
          class: "lbl2"
        }, "Próximas 12 horas"), h("div", {
          class: "hscroll"
        }, h("table", {
          class: "hours"
        }, h("tbody", {}, h.apply(void 0, ["tr", {}].concat(hrs))))), h("div", {
          class: "lbl2"
        }, "Próximos 7 dias"), h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(dy.time.map(function (t, i) {
          var dd = new Date(t + "T12:00"),
            wi = wxInfo(dy.weather_code[i], true);
          return h("li", {}, h("span", {
            class: "dd"
          }, i === 0 ? "Hoje" : DSEM[dd.getDay()] + " " + dd.getDate()), h("span", {}, ic(wi[0], 16), " " + (wi[1] || "") + (dy.precipitation_probability_max[i] ? " · " + dy.precipitation_probability_max[i] + "%" : "")), h("b", {}, Math.round(dy.temperature_2m_min[i]) + "° / " + Math.round(dy.temperature_2m_max[i]) + "°"));
        })))));
      }, function () {
        return out.replaceChildren(para(NOCONN));
      });
    };
    var go = function go() {
      if (!q.value.trim()) return;
      out.replaceChildren(note("Procurando a cidade…"));
      geo(q.value.trim()).then(show, function (e) {
        return out.replaceChildren(para(e.message === "Local não encontrado" ? "Cidade não encontrada." : NOCONN));
      });
    };
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go();
    });
    b.append(h("div", {
      class: "row"
    }, q, btn("Ver", go, "solid")), out);
    out.replaceChildren(note("Localizando…"));
    myLoc().then(show);
  });
  ;
  function canvasBlob(c) {
    var d = c.toDataURL("image/png"),
      bin = atob(d.split(",")[1]),
      u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return new Blob([u], {
      type: "image/png"
    });
  }
  function saveToGallery(c, base) {
    if (!remote) return toast("A conta não está configurada.");
    if (!session) {
      toast("Entre na sua conta para salvar na galeria");
      return pages.auth("in");
    }
    var d = new Date(),
      name = "galeria/" + (base || "desenho") + "-" + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "-" + pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds()) + ".png";
    toast("Salvando na galeria…");
    return objUp(name, canvasBlob(c), "image/png").then(function () {
      return toast("Salvo na sua galeria");
    }, function (e) {
      return toast(/not found/i.test(e.message) ? "Ative os arquivos no Supabase (supabase.sql)" : "Não foi possível salvar");
    });
  }
  function galleryBtn(c, base, prep) {
    return btn("Salvar na galeria", function () {
      var cc = prep ? prep() : c;
      saveToGallery(cc, base);
    }, "solid");
  }
  add("gallery", "Galeria", "image", "Essenciais", function (b) {
    var body = h("div");
    b.append(body);
    if (!session) return body.append(h("div", {
      class: "card",
      style: "text-align:center"
    }, h("p", {}, h("b", {}, "Seus desenhos ficam na sua conta.")), h("p", {
      class: "muted"
    }, "Entre para ver a galeria em qualquer aparelho."), btn("Entrar ou criar conta", function () {
      return pages.auth("in");
    }, "solid wide")));
    var grid = h("div", {
        class: "gal"
      }),
      st = h("p", {
        class: "muted"
      }, "Carregando…");
    var list = function list() {
      return filesList("galeria").then(function (all) {
        st.textContent = all.length ? all.length + (all.length === 1 ? " imagem" : " imagens") : "";
        if (!all.length) return grid.replaceChildren(h("div", {
          class: "empty2"
        }, "Nada aqui ainda. Nos apps de desenho, toque em Salvar na galeria."));
        return signMany(all.map(function (f) {
          return "galeria/" + f.name;
        })).then(function (urls) {
          return grid.replaceChildren.apply(grid, _toConsumableArray(all.map(function (f, i) {
            return h("div", {
              class: "gi",
              onclick: function onclick() {
                return view(f, urls[i]);
              }
            }, h("img", {
              src: urls[i],
              alt: f.name
            }));
          })));
        });
      }).catch(function (e) {
        st.textContent = /not found/i.test(e.message) ? "A galeria ainda não foi ativada no Supabase (rode o supabase.sql)." : "Erro: " + pt(e.message);
      });
    };
    var view = function view(f, u) {
      return subView(b, function () {
        body.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Galeria"), h("img", {
          class: "aimg",
          src: u,
          alt: ""
        }), h("p", {
          class: "muted"
        }, f.name), btn("Apagar", function () {
          if (confirm("Apagar esta imagem da sua conta?")) fileDel("galeria/" + f.name).then(function () {
            return history.back();
          }, function () {
            return toast("Não foi possível apagar");
          });
        }));
      }, function () {
        body.replaceChildren(st, grid);
        list();
      });
    };
    body.append(st, grid);
    list();
  });
  function ptBR(text) {
    return api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(String(text).slice(0, 480)) + "&langpair=en|pt-br").then(function (j) {
      return txt(j.responseData.translatedText);
    });
  }
  add("x_fato", "Fato curioso", "bulb", "Diversão", function (b) {
    var out = h("div", {
      class: "fact"
    });
    var go = function go() {
      out.replaceChildren(note("Buscando um fato…"));
      api("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en").then(function (j) {
        return ptBR(j.text).then(function (t) {
          return t;
        }, function () {
          return j.text;
        });
      }).then(function (t) {
        return out.replaceChildren(h("div", {
          class: "qmark"
        }, "?"), h("p", {
          class: "ftx"
        }, t));
      }, function () {
        return out.replaceChildren(para(NOCONN));
      });
    };
    b.append(out, btn("Outro fato", go, "solid wide"));
    go();
  });
  function petApp(id, n, getter) {
    add(id, n, "paw", "Diversão", function (b) {
      var pic = h("div", {
          class: "pet"
        }),
        cap = h("div");
      var go = function go() {
        pic.replaceChildren(note("Buscando…"));
        cap.replaceChildren();
        getter().then(function (r) {
          var im = h("img", {
            src: r.img,
            alt: n
          });
          pic.replaceChildren(im);
          cap.replaceChildren(r.title ? h("h2", {
            class: "ah"
          }, r.title) : null, r.text ? h("p", {
            class: "ftx"
          }, r.text) : null);
        }, function () {
          return pic.replaceChildren(para(NOCONN));
        });
      };
      b.append(pic, cap, btn("Outro", go, "solid wide"));
      go();
    });
  }
  petApp("x_gato", "Gatos", function () {
    return Promise.all([api("https://api.thecatapi.com/v1/images/search"), api("https://catfact.ninja/fact").then(function (j) {
      return ptBR(j.fact);
    }, function () {
      return "";
    })]).then(function (r) {
      return {
        img: r[0][0].url,
        title: "Você sabia?",
        text: r[1]
      };
    });
  });
  var RACAS = {
    labrador: "Labrador",
    retriever: "Retriever",
    husky: "Husky",
    pug: "Pug",
    beagle: "Beagle",
    poodle: "Poodle",
    bulldog: "Buldogue",
    boxer: "Boxer",
    corgi: "Corgi",
    dachshund: "Dachshund (salsicha)",
    shihtzu: "Shih-tzu",
    chihuahua: "Chihuahua",
    collie: "Collie",
    germanshepherd: "Pastor-alemão",
    rottweiler: "Rottweiler",
    maltese: "Maltês",
    pomeranian: "Lulu-da-pomerânia",
    terrier: "Terrier",
    spaniel: "Spaniel",
    akita: "Akita",
    samoyed: "Samoieda",
    doberman: "Dobermann",
    dalmatian: "Dálmata",
    shiba: "Shiba"
  };
  petApp("x_cao", "Cachorros", function () {
    return api("https://dog.ceo/api/breeds/image/random").then(function (j) {
      var m = /breeds\/([^/]+)\//.exec(j.message),
        k = m ? m[1].split("-") : [""],
        nm = RACAS[k[0]] || (k[0] ? k[0].charAt(0).toUpperCase() + k[0].slice(1) : "");
      return {
        img: j.message,
        title: nm ? "Raça: " + nm + (k[1] && !RACAS[k[0]] ? " " + k[1] : "") : ""
      };
    });
  });
  var UNI = {
    Comprimento: {
      m: ["metro", 1],
      km: ["quilômetro", 1000],
      cm: ["centímetro", .01],
      mm: ["milímetro", .001],
      mi: ["milha", 1609.344],
      yd: ["jarda", .9144],
      ft: ["pé", .3048],
      in: ["polegada", .0254]
    },
    Peso: {
      kg: ["quilo", 1],
      g: ["grama", .001],
      t: ["tonelada", 1000],
      lb: ["libra", .45359237],
      oz: ["onça", .028349523]
    },
    Volume: {
      l: ["litro", 1],
      ml: ["mililitro", .001],
      m3: ["metro cúbico", 1000],
      gal: ["galão (EUA)", 3.785411784],
      xic: ["xícara", .24],
      cs: ["colher de sopa", .015]
    },
    Área: {
      m2: ["metro²", 1],
      km2: ["quilômetro²", 1e6],
      ha: ["hectare", 1e4],
      alq: ["alqueire paulista", 24200],
      ft2: ["pé²", .09290304],
      ac: ["acre", 4046.8564224]
    },
    Velocidade: {
      kmh: ["km/h", 1],
      ms: ["m/s", 3.6],
      mph: ["milha/h", 1.609344],
      kn: ["nó", 1.852]
    },
    Temperatura: {
      c: ["Celsius", 0],
      f: ["Fahrenheit", 0],
      k: ["Kelvin", 0]
    }
  };
  var toC = function toC(v, u) {
      return u === "c" ? v : u === "f" ? (v - 32) * 5 / 9 : v - 273.15;
    },
    fromC = function fromC(v, u) {
      return u === "c" ? v : u === "f" ? v * 9 / 5 + 32 : v + 273.15;
    };
  var fmt = function fmt(v) {
    return isFinite(v) ? num(v, Math.abs(v) >= 100 ? 2 : Math.abs(v) >= 1 ? 3 : 6).replace(/,?0+$/, "").replace(/,$/, "") : "—";
  };
  add("conv", "Conversor", "conv", "Ferramentas", function (b) {
    var st = X("convapp", {
      cat: "Comprimento",
      a: "km",
      z: "mi",
      v: "1"
    });
    var top = h("div"),
      box = h("div");
    b.append(top, box);
    var _draw12 = function draw() {
      var U = UNI[st.cat];
      if (!U[st.a] || !U[st.z]) {
        var k = Object.keys(U);
        st.a = k[0];
        st.z = k[1];
      }
      top.replaceChildren(segTabs(Object.keys(UNI).map(function (k) {
        return [k, k];
      }), st.cat, function (k) {
        st.cat = k;
        save();
        _draw12();
      }));
      var opt = function opt(cur) {
        return Object.keys(U).map(function (k) {
          return h("option", {
            value: k,
            selected: k === cur ? "selected" : false
          }, U[k][0]);
        });
      };
      var v = inp("Valor", "number", {
          value: st.v
        }),
        a = h.apply(void 0, ["select", {}].concat(_toConsumableArray(opt(st.a)))),
        z = h.apply(void 0, ["select", {}].concat(_toConsumableArray(opt(st.z)))),
        res = h("div", {
          class: "big"
        }),
        sub = h("p", {
          class: "muted",
          style: "text-align:center"
        });
      var calc = function calc() {
        st.v = v.value;
        st.a = a.value;
        st.z = z.value;
        save();
        var x = parseFloat(String(v.value).replace(",", "."));
        var r = st.cat === "Temperatura" ? fromC(toC(x, st.a), st.z) : x * U[st.a][1] / U[st.z][1];
        res.textContent = isFinite(x) ? fmt(r) + " " + U[st.z][0] : "—";
        sub.textContent = isFinite(x) ? fmt(x) + " " + U[st.a][0] + " =" : "Digite um valor";
      };
      v.oninput = calc;
      a.onchange = calc;
      z.onchange = calc;
      box.replaceChildren(h("div", {
        class: "cvbox"
      }, h("label", {}, "De"), h("div", {
        class: "bar"
      }, h("span", {}, v), h("span", {
        style: "width:45%"
      }, a)), h("div", {
        style: "text-align:center"
      }, h("button", {
        class: "sbtn",
        "aria-label": "Inverter",
        onclick: function onclick() {
          var t = st.a;
          st.a = st.z;
          st.z = t;
          save();
          _draw12();
        }
      }, ic("up", 16), ic("down", 16))), h("label", {}, "Para"), h("div", {
        class: "bar"
      }, h("span", {
        style: "width:100%"
      }, z))), sub, res);
      calc();
    };
    _draw12();
  });
  var MNOME = {
    BRL: "Real",
    USD: "Dólar americano",
    EUR: "Euro",
    GBP: "Libra esterlina",
    ARS: "Peso argentino",
    JPY: "Iene",
    CAD: "Dólar canadense",
    AUD: "Dólar australiano",
    CHF: "Franco suíço",
    CNY: "Yuan",
    MXN: "Peso mexicano",
    CLP: "Peso chileno",
    UYU: "Peso uruguaio",
    PYG: "Guarani",
    COP: "Peso colombiano",
    PEN: "Sol peruano",
    INR: "Rúpia indiana",
    KRW: "Won",
    ZAR: "Rand",
    AED: "Dirham",
    TRY: "Lira turca",
    SEK: "Coroa sueca",
    NOK: "Coroa norueguesa",
    NZD: "Dólar neozelandês"
  };
  var rateCache = {};
  function rates(base) {
    if (rateCache[base] && Date.now() - rateCache[base].t < 36e5) return Promise.resolve(rateCache[base].r);
    return api("https://open.er-api.com/v6/latest/" + base).then(function (j) {
      rateCache[base] = {
        t: Date.now(),
        r: j.rates
      };
      return j.rates;
    });
  }
  add("f_conversor", "Conversor de moedas", "coin", "Finanças", function (b) {
    var st = X("moedas", {
      a: "USD",
      z: "BRL",
      v: "100"
    });
    var opt = function opt(cur) {
      return Object.keys(MNOME).map(function (k) {
        return h("option", {
          value: k,
          selected: k === cur ? "selected" : false
        }, k + " · " + MNOME[k]);
      });
    };
    var v = inp("Valor", "number", {
        value: st.v
      }),
      a = h.apply(void 0, ["select", {}].concat(_toConsumableArray(opt(st.a)))),
      z = h.apply(void 0, ["select", {}].concat(_toConsumableArray(opt(st.z)))),
      res = h("div", {
        class: "big"
      }),
      sub = h("p", {
        class: "muted",
        style: "text-align:center"
      }),
      tbl = h("div");
    var calc = function calc() {
      st.v = v.value;
      st.a = a.value;
      st.z = z.value;
      save();
      res.textContent = "…";
      rates(st.a).then(function (r) {
        var x = parseFloat(String(v.value).replace(",", ".")) || 0,
          k = r[st.z];
        res.textContent = num(x * k, 2) + " " + st.z;
        sub.textContent = "1 " + st.a + " = " + num(k, 4) + " " + st.z + " · cotação de referência";
        rates("BRL").then(function (rb) {
          return tbl.replaceChildren(h("div", {
            class: "lbl2"
          }, "Em reais hoje"), kv(["USD", "EUR", "GBP", "ARS", "JPY"].map(function (c) {
            return [c + " · " + MNOME[c], "R$ " + num(1 / rb[c], c === "ARS" || c === "JPY" ? 4 : 2)];
          })));
        });
      }, function () {
        res.textContent = "—";
        sub.textContent = NOCONN;
      });
    };
    v.oninput = calc;
    a.onchange = calc;
    z.onchange = calc;
    b.append(h("div", {
      class: "cvbox"
    }, h("label", {}, "Valor"), v, h("label", {}, "De"), a, h("div", {
      style: "text-align:center"
    }, h("button", {
      class: "sbtn",
      "aria-label": "Inverter",
      onclick: function onclick() {
        var t = a.value;
        a.value = z.value;
        z.value = t;
        calc();
      }
    }, ic("up", 16), ic("down", 16))), h("label", {}, "Para"), z), sub, res, tbl);
    calc();
  });
  var TEMAS = [["moon", "Lua"], ["mars", "Marte"], ["saturn", "Saturno"], ["jupiter", "Júpiter"], ["galaxy", "Galáxias"], ["nebula", "Nebulosas"], ["earth", "Terra"], ["astronaut", "Astronautas"], ["rocket launch", "Lançamentos"]];
  add("m_nasa", "Imagens da NASA", "image", "Mundo", function (b) {
    var st = X("nasa", {
      q: "moon"
    });
    var top = h("div"),
      body = h("div");
    b.append(top, body);
    var search = function search(q) {
      body.replaceChildren(note("Buscando imagens…"));
      api("https://images-api.nasa.gov/search?media_type=image&q=" + encodeURIComponent(q)).then(function (j) {
        var it = j.collection.items.filter(function (x) {
          return x.links && x.links[0];
        }).slice(0, 24);
        body.replaceChildren(it.length ? h.apply(void 0, ["div", {
          class: "gal"
        }].concat(_toConsumableArray(it.map(function (x) {
          return h("div", {
            class: "gi",
            onclick: function onclick() {
              return view(x);
            }
          }, h("img", {
            src: x.links[0].href,
            alt: x.data[0].title
          }));
        })))) : note("Nada encontrado."));
      }, function () {
        return body.replaceChildren(para(NOCONN));
      });
    };
    var view = function view(x) {
      return subView(b, function () {
        var d = x.data[0],
          desc = h("p", {
            class: "ftx"
          }, note("Traduzindo a descrição…"));
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Imagens"));
        body.replaceChildren(h("img", {
          class: "aimg",
          src: x.links[0].href.replace("~thumb", "~medium"),
          alt: d.title
        }), h("h2", {
          class: "ah"
        }, d.title), h("p", {
          class: "muted"
        }, dbr(d.date_created) + (d.center ? " · " + d.center : "")), desc);
        window.scrollTo(0, 0);
        var en = txt(d.description || "").slice(0, 480);
        if (en) ptBR(en).then(function (t) {
          return desc.replaceChildren(t);
        }, function () {
          return desc.replaceChildren(en);
        });else desc.replaceChildren();
      }, draw);
    };
    var go = function go(q) {
      if (!q) return;
      st.q = q;
      save();
      search(q);
    };
    function draw() {
      var qi = inp("Buscar (ex.: cometa, eclipse)", "search");
      var typed = function typed() {
        var t = qi.value.trim();
        if (!t) return;
        body.replaceChildren(note("Buscando…"));
        api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(t) + "&langpair=pt-br|en").then(function (j) {
          return go(txt(j.responseData.translatedText));
        }, function () {
          return go(t);
        });
      };
      qi.addEventListener("keydown", function (e) {
        return e.key === "Enter" && typed();
      });
      top.replaceChildren(segTabs(TEMAS, st.q, go), h("div", {
        class: "row"
      }, qi, btn("Buscar", typed, "solid")));
      search(st.q);
    }
    draw();
  });
  var PALAVRAS = {
    Animais: ["girafa", "elefante", "tartaruga", "borboleta", "jacare", "pinguim", "tamandua", "capivara", "papagaio", "golfinho"],
    Frutas: ["abacaxi", "melancia", "jabuticaba", "goiaba", "maracuja", "laranja", "morango", "pitanga", "acerola", "caju"],
    Lugares: ["biblioteca", "praia", "montanha", "floresta", "cachoeira", "deserto", "mercado", "escola", "hospital", "aeroporto"],
    Objetos: ["guarda-chuva", "relogio", "bicicleta", "travesseiro", "lanterna", "tesoura", "computador", "geladeira", "escada", "chaveiro"]
  };
  add("forca", "Forca", "forca", "Jogos", function (b) {
    var c = cv(220, 220),
      g = c.getContext("2d"),
      word = h("div", {
        class: "hword"
      }),
      info = h("p", {
        class: "score"
      }),
      kb = h("div", {
        class: "keys"
      });
    var w, cat, got, err;
    var px = function px(x, y, wd, ht) {
      return g.fillRect(x, y, wd, ht);
    };
    var pic = function pic() {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, 220, 220);
      g.fillStyle = "#000";
      px(20, 200, 120, 8);
      px(40, 20, 8, 184);
      px(40, 20, 110, 8);
      px(142, 20, 6, 30);
      px(48, 40, 8, 8);
      px(56, 32, 8, 8);
      if (err > 0) {
        px(130, 50, 30, 6);
        px(130, 74, 30, 6);
        px(126, 54, 6, 22);
        px(158, 54, 6, 22);
      }
      if (err > 1) px(142, 80, 6, 50);
      if (err > 2) {
        px(132, 90, 10, 6);
        px(124, 96, 8, 6);
        px(118, 102, 6, 12);
      }
      if (err > 3) {
        px(148, 90, 10, 6);
        px(158, 96, 8, 6);
        px(166, 102, 6, 12);
      }
      if (err > 4) {
        px(136, 130, 6, 10);
        px(130, 140, 6, 14);
        px(124, 154, 6, 8);
      }
      if (err > 5) {
        px(148, 130, 6, 10);
        px(154, 140, 6, 14);
        px(160, 154, 6, 8);
        px(136, 60, 6, 6);
        px(148, 60, 6, 6);
      }
    };
    var _draw13 = function draw() {
      var won = w.split("").every(function (ch) {
          return ch === "-" || got.indexOf(ch) >= 0;
        }),
        lost = err >= 6;
      word.textContent = w.split("").map(function (ch) {
        return ch === "-" ? "-" : got.indexOf(ch) >= 0 || lost ? ch.toUpperCase() : "_";
      }).join(" ");
      info.textContent = won ? "Você ganhou!" : lost ? "Enforcado! Era: " + w.toUpperCase() : "Dica: " + cat + "  ·  Erros: " + err + "/6";
      kb.replaceChildren.apply(kb, _toConsumableArray("abcdefghijklmnopqrstuvwxyz".split("").map(function (ch) {
        return h("button", {
          class: got.indexOf(ch) >= 0 ? w.indexOf(ch) >= 0 ? "solid" : "" : "",
          disabled: got.indexOf(ch) >= 0 || won || lost ? "disabled" : false,
          onclick: function onclick() {
            got.push(ch);
            if (w.indexOf(ch) < 0) err++;
            _draw13();
          }
        }, ch.toUpperCase());
      })));
      pic();
      keepPut("forca", {
        w: w,
        cat: cat,
        got: got,
        err: err
      });
    };
    var start = function start() {
      cat = pick(Object.keys(PALAVRAS));
      w = pick(PALAVRAS[cat]);
      got = [];
      err = 0;
      _draw13();
    };
    b.append(h("div", {
      class: "hang"
    }, c), word, info, kb, btn("Nova palavra", start, "solid"));
    var svF = keepGet("forca");
    if (svF && svF.w) {
      w = svF.w;
      cat = svF.cat;
      got = svF.got;
      err = svF.err;
      _draw13();
    } else start();
  });
  var DINO = ["........######..", ".......##.#####.", ".......########.", ".......########.", ".......####.....", "#......######...", "#.....#####.....", "##...#######....", "###.########....", ".##########.....", "..########......", "...######.......", "....##.##.......", "....#...#.......", "....##..##......"];
  var DINO2 = DINO.slice(0, 12).concat(["....##.##.......", "....##..#.......", "........##......"]);
  var CACTO = ["..##..", "..##..", "#.##..", "#.##.#", "####.#", "..####", "..##..", "..##..", "..##..", "..##.."];
  function sprite(g, rows, x, y, s) {
    rows.forEach(function (r, j) {
      for (var i = 0; i < r.length; i++) if (r[i] === "#") g.fillRect(x + i * s, y + j * s, s, s);
    });
  }
  add("dino", "Dino", "dino", "Jogos", function (b) {
    var W2 = 600,
      H2 = 200,
      GY = 170,
      c = cv(W2, H2),
      g = c.getContext("2d"),
      info = h("p", {
        class: "score"
      });
    var y,
      vy,
      obs,
      sc,
      dead,
      spd,
      t,
      started,
      best = X("best_dino", 0);
    var reset = function reset() {
      y = 0;
      vy = 0;
      obs = [];
      sc = 0;
      dead = false;
      spd = 7;
      t = 0;
      started = true;
    };
    var jump = function jump() {
      if (!started || dead) return reset();
      if (y === 0) vy = 15;
    };
    onPointer(c, jump);
    keys(b, function (k) {
      return (k === " " || k === "ArrowUp") && jump();
    });
    started = false;
    y = 0;
    obs = [];
    sc = 0;
    dead = false;
    spd = 7;
    t = 0;
    loop(b, function () {
      if (started && !dead) {
        t++;
        sc++;
        spd += .004;
        vy -= 1.3;
        y += vy;
        if (y < 0) {
          y = 0;
          vy = 0;
        }
        if (t > 30 && (!obs.length || obs[obs.length - 1].x < W2 - 180 - rnd(220)) && Math.random() < .05) obs.push({
          x: W2,
          n: 1 + (Math.random() < .3 ? 1 : 0)
        });
        obs.forEach(function (o) {
          return o.x -= spd;
        });
        obs = obs.filter(function (o) {
          return o.x > -40;
        });
        if (obs.some(function (o) {
          return o.x < 92 && o.x + 18 * o.n > 58 && y < 36;
        })) {
          dead = true;
          if (Math.floor(sc / 4) > best) {
            best = Math.floor(sc / 4);
            S.x.best_dino = best;
            save();
          }
        }
      }
      g.fillStyle = "#fff";
      g.fillRect(0, 0, W2, H2);
      g.fillStyle = "#000";
      g.fillRect(0, GY, W2, 2);
      for (var i = 0; i < 12; i++) g.fillRect(((i * 53 - t * spd) % W2 + W2) % W2, GY + 8 + i % 3 * 5, 4 + i % 2 * 4, 2);
      sprite(g, started && !dead && y === 0 && Math.floor(t / 4) % 2 ? DINO2 : DINO, 40, GY - 45 - y, 3);
      obs.forEach(function (o) {
        for (var k = 0; k < o.n; k++) sprite(g, CACTO, o.x + k * 18, GY - 30, 3);
      });
      g.font = "bold 18px Bookerly, Literata, Georgia, serif";
      g.textAlign = "right";
      g.fillText("HI " + String(best).padStart(5, "0") + "  " + String(Math.floor(sc / 4)).padStart(5, "0"), W2 - 12, 28);
      g.textAlign = "center";
      if (!started) g.fillText("TOQUE PARA COMEÇAR", W2 / 2, 90);
      if (dead) g.fillText("G A M E   O V E R", W2 / 2, 80);
      info.textContent = dead ? "Toque na tela para jogar de novo" : "Toque na tela, espaço ou seta para cima para pular";
    }, 33);
    b.append(c, info, btn("Pular", jump, "solid wide"));
  });
  add("blocks", "Untetris", "grid", "Jogos", function (b) {
    var W = 10,
      H = 20,
      S2 = 18,
      c = cv(W * S2, H * S2),
      g = c.getContext("2d"),
      nx = cv(4 * 14, 4 * 14),
      ng = nx.getContext("2d"),
      info = h("div", {
        class: "tstat"
      });
    var SH = [[[0, 1], [1, 1], [2, 1], [3, 1]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[0, 1], [1, 1], [2, 1], [1, 0]], [[0, 0], [0, 1], [1, 1], [2, 1]], [[2, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [2, 0], [0, 1], [1, 1]], [[0, 0], [1, 0], [1, 1], [2, 1]]];
    var bd,
      p,
      nxt,
      px,
      py,
      sc,
      lines,
      lvl,
      dead,
      paused,
      tick = 0;
    var fits = function fits(s, x, y) {
      return s.every(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          a = _ref11[0],
          d = _ref11[1];
        return x + a >= 0 && x + a < W && y + d < H && (y + d < 0 || !bd[y + d][x + a]);
      });
    };
    var rot = function rot(s) {
      var r = s.map(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
            a = _ref13[0],
            d = _ref13[1];
          return [-d, a];
        }),
        mx = Math.min.apply(Math, _toConsumableArray(r.map(function (v) {
          return v[0];
        }))),
        my = Math.min.apply(Math, _toConsumableArray(r.map(function (v) {
          return v[1];
        })));
      return r.map(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
          a = _ref15[0],
          d = _ref15[1];
        return [a - mx, d - my];
      });
    };
    var spawn = function spawn() {
      p = nxt || pick(SH);
      nxt = pick(SH);
      px = 3;
      py = -1;
      if (!fits(p, px, py + 1)) dead = true;
    };
    var lock = function lock() {
      p.forEach(function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
          a = _ref17[0],
          d = _ref17[1];
        if (py + d >= 0) bd[py + d][px + a] = 1;
      });
      var keep = bd.filter(function (r) {
          return !r.every(Boolean);
        }),
        n = H - keep.length;
      lines += n;
      sc += [0, 100, 300, 500, 800][n] * lvl;
      lvl = 1 + Math.floor(lines / 10);
      bd = [].concat(_toConsumableArray(Array.from({
        length: n
      }, function () {
        return Array(W).fill(0);
      })), _toConsumableArray(keep));
      spawn();
    };
    var down = function down() {
      if (fits(p, px, py + 1)) {
        py++;
        return true;
      }
      lock();
      return false;
    };
    var act = function act(k) {
      if (dead) {
        if (k === "rot" || k === " " || k === "ArrowUp") reset();
        return;
      }
      if (k === "pause") {
        paused = !paused;
        draw();
        return;
      }
      if (paused) return;
      if (k === "ArrowLeft" && fits(p, px - 1, py)) px--;
      if (k === "ArrowRight" && fits(p, px + 1, py)) px++;
      if (k === "ArrowDown") {
        if (down()) sc += 1;
      }
      if (k === "ArrowUp" || k === "rot") {
        var r = rot(p);
        for (var _i2 = 0, _arr = [0, -1, 1, -2, 2]; _i2 < _arr.length; _i2++) {
          var dx = _arr[_i2];
          if (fits(r, px + dx, py)) {
            p = r;
            px += dx;
            break;
          }
        }
      }
      if (k === " " || k === "drop") {
        while (fits(p, px, py + 1)) {
          py++;
          sc += 2;
        }
        lock();
      }
      draw();
    };
    var cell = function cell(gg, x, y, s, ghost) {
      if (ghost) {
        gg.strokeRect(x + 2.5, y + 2.5, s - 5, s - 5);
        return;
      }
      gg.fillRect(x + 1, y + 1, s - 2, s - 2);
      gg.fillStyle = "#fff";
      gg.fillRect(x + 4, y + 4, s - 8, s - 8);
      gg.fillStyle = "#000";
      gg.fillRect(x + 6, y + 6, s - 12, s - 12);
    };
    var draw = function draw() {
      g.fillStyle = "#fff";
      g.fillRect(0, 0, W * S2, H * S2);
      g.fillStyle = "#000";
      g.strokeStyle = "#000";
      g.lineWidth = 1;
      for (var x = 1; x < W; x++) for (var y = 1; y < H; y++) g.fillRect(x * S2, y * S2, 1, 1);
      bd.forEach(function (r, y) {
        return r.forEach(function (v, x) {
          return v && cell(g, x * S2, y * S2, S2);
        });
      });
      if (!dead) {
        var gy = py;
        while (fits(p, px, gy + 1)) gy++;
        p.forEach(function (_ref18) {
          var _ref19 = _slicedToArray(_ref18, 2),
            a = _ref19[0],
            d = _ref19[1];
          return gy + d >= 0 && cell(g, (px + a) * S2, (gy + d) * S2, S2, true);
        });
        p.forEach(function (_ref20) {
          var _ref21 = _slicedToArray(_ref20, 2),
            a = _ref21[0],
            d = _ref21[1];
          return py + d >= 0 && cell(g, (px + a) * S2, (py + d) * S2, S2);
        });
      }
      if (dead || paused) {
        g.fillStyle = "#fff";
        g.fillRect(10, 150, W * S2 - 20, 60);
        g.fillStyle = "#000";
        g.strokeRect(10.5, 150.5, W * S2 - 21, 59);
        g.font = "bold 16px Bookerly, Literata, Georgia, serif";
        g.textAlign = "center";
        g.fillText(dead ? "FIM DE JOGO" : "PAUSADO", W * S2 / 2, 178);
        g.font = "12px Bookerly, Literata, Georgia, serif";
        g.fillText(dead ? "toque em Girar" : "toque em Pausa", W * S2 / 2, 198);
      }
      ng.fillStyle = "#fff";
      ng.fillRect(0, 0, 56, 56);
      ng.fillStyle = "#000";
      nxt.forEach(function (_ref22) {
        var _ref23 = _slicedToArray(_ref22, 2),
          a = _ref23[0],
          d = _ref23[1];
        return cell(ng, a * 14, 14 + d * 14, 14);
      });
      if (!dead) keepPut("tetris", {
        bd: bd,
        p: p,
        nxt: nxt,
        px: px,
        py: py,
        sc: sc,
        lines: lines,
        lvl: lvl
      });else keepDel("tetris");
      info.replaceChildren(h("div", {}, h("small", {}, "PONTOS"), h("b", {}, String(sc))), h("div", {}, h("small", {}, "LINHAS"), h("b", {}, String(lines))), h("div", {}, h("small", {}, "NÍVEL"), h("b", {}, String(lvl))), h("div", {}, h("small", {}, "PRÓXIMA")), nx);
    };
    var reset = function reset() {
      bd = Array.from({
        length: H
      }, function () {
        return Array(W).fill(0);
      });
      sc = 0;
      lines = 0;
      lvl = 1;
      dead = false;
      paused = false;
      nxt = null;
      spawn();
      draw();
    };
    keys(b, function (k) {
      return act(k === "p" ? "pause" : k);
    });
    loop(b, function () {
      if (dead || paused) return;
      tick++;
      if (tick >= Math.max(2, 12 - lvl)) {
        tick = 0;
        down();
        draw();
      }
    }, 50);
    var sx = 0,
      sy = 0;
    onPointer(c, function (e) {
      sx = e.clientX;
      sy = e.clientY;
    }, null, function (e) {
      var dx = e.clientX - sx,
        dy = e.clientY - sy;
      if (dy > 50 && Math.abs(dy) > Math.abs(dx)) return act("drop");
      if (Math.abs(dx) > 30) return act(dx < 0 ? "ArrowLeft" : "ArrowRight");
      var r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width;
      act(x < .33 ? "ArrowLeft" : x > .67 ? "ArrowRight" : "rot");
    });
    var hold = function hold(label, k, cls) {
      var iv = null,
        tm = null;
      var stop = function stop() {
        clearTimeout(tm);
        clearInterval(iv);
        tm = iv = null;
      };
      var el = h("button", {
        class: "tb2 " + (cls || "")
      }, label);
      var startH = function startH(e) {
        if (e && e.preventDefault) e.preventDefault();
        act(k);
        if (k === "ArrowLeft" || k === "ArrowRight" || k === "ArrowDown") tm = setTimeout(function () {
          iv = setInterval(function () {
            return act(k);
          }, 70);
        }, 220);
      };
      el.addEventListener("touchstart", startH, false);
      el.addEventListener("touchend", stop, false);
      el.addEventListener("mousedown", function (e) {
        if (!("ontouchstart" in window)) startH(e);
      }, false);
      el.addEventListener("mouseup", stop, false);
      el.addEventListener("mouseleave", stop, false);
      return el;
    };
    onClose(b, function () {});
    b.append(h("div", {
      class: "tet"
    }, h("div", {
      class: "tl2"
    }, c), info), h("table", {
      class: "tpad"
    }, h("tbody", {}, h("tr", {}, h("td", {}, hold(ic("back", 32), "ArrowLeft")), h("td", {}, hold("GIRAR", "rot", "solid")), h("td", {}, hold(ic("fwd", 32), "ArrowRight"))), h("tr", {}, h("td", {}, hold("PAUSA", "pause")), h("td", {}, hold(ic("down", 32), "ArrowDown")), h("td", {}, hold("QUEDA", "drop"))))), h("p", {
      class: "muted"
    }, "Toque nas laterais do tabuleiro para mover, no meio para girar, ou arraste para baixo para derrubar. No teclado: setas, espaço e P."));
    var svT = keepGet("tetris");
    if (svT && svT.bd) {
      bd = svT.bd;
      p = svT.p;
      nxt = svT.nxt;
      px = svT.px;
      py = svT.py;
      sc = svT.sc;
      lines = svT.lines;
      lvl = svT.lvl;
      dead = false;
      paused = true;
      draw();
    } else reset();
  });
  add("checkers", "Damas", "grid", "Jogos para dois", function (b) {
    var Z = 50,
      c = cv(8 * Z, 8 * Z),
      g = c.getContext("2d"),
      msg = h("p", {
        class: "score"
      });
    var bd, turn, sel, chain;
    var reset = function reset() {
      bd = Array(64).fill(null);
      for (var i = 0; i < 64; i++) {
        var r = Math.floor(i / 8),
          cc = i % 8;
        if ((r + cc) % 2) {
          if (r < 3) bd[i] = {
            p: 2,
            k: false
          };
          if (r > 4) bd[i] = {
            p: 1,
            k: false
          };
        }
      }
      turn = 1;
      sel = null;
      chain = false;
      draw();
    };
    var moves = function moves(i) {
      var pc = bd[i],
        r = Math.floor(i / 8),
        cc = i % 8,
        out = [],
        dirs = pc.k ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : pc.p === 1 ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]],
        caps = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      dirs.forEach(function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
          dr = _ref25[0],
          dc = _ref25[1];
        var r1 = r + dr,
          c1 = cc + dc;
        if (r1 >= 0 && r1 < 8 && c1 >= 0 && c1 < 8 && !bd[r1 * 8 + c1]) out.push({
          to: r1 * 8 + c1
        });
      });
      caps.forEach(function (_ref26) {
        var _ref27 = _slicedToArray(_ref26, 2),
          dr = _ref27[0],
          dc = _ref27[1];
        var r1 = r + dr,
          c1 = cc + dc,
          r2 = r + 2 * dr,
          c2 = cc + 2 * dc;
        if (r2 < 0 || r2 > 7 || c2 < 0 || c2 > 7) return;
        var t = bd[r1 * 8 + c1];
        if (t && t.p !== pc.p && !bd[r2 * 8 + c2]) out.push({
          to: r2 * 8 + c2,
          cap: r1 * 8 + c1
        });
      });
      return out;
    };
    var all = function all(p) {
      var o = [];
      bd.forEach(function (x, i) {
        if (x && x.p === p) moves(i).forEach(function (m) {
          return o.push(Object.assign({
            from: i
          }, m));
        });
      });
      return o;
    };
    var legal = function legal(i) {
      var a = all(turn),
        mustCap = a.some(function (m) {
          return m.cap !== undefined;
        });
      return a.filter(function (m) {
        return m.from === i && (!mustCap || m.cap !== undefined) && (!chain || m.cap !== undefined);
      });
    };
    var go = function go(m) {
      bd[m.to] = bd[m.from];
      bd[m.from] = null;
      if (m.cap !== undefined) bd[m.cap] = null;
      var r = Math.floor(m.to / 8);
      var crowned = false;
      if (!bd[m.to].k && (bd[m.to].p === 1 && r === 0 || bd[m.to].p === 2 && r === 7)) {
        bd[m.to].k = true;
        crowned = true;
      }
      if (m.cap !== undefined && !crowned && moves(m.to).some(function (x) {
        return x.cap !== undefined;
      })) {
        sel = m.to;
        chain = true;
      } else {
        turn = 3 - turn;
        sel = null;
        chain = false;
      }
      draw();
    };
    var click = function click(i) {
      if (sel !== null) {
        var m = legal(sel).find(function (x) {
          return x.to === i;
        });
        if (m) return go(m);
        if (chain) return;
      }
      if (bd[i] && bd[i].p === turn) {
        if (legal(i).length) sel = i;else {
          sel = null;
          msg.textContent = all(turn).some(function (m) {
            return m.cap !== undefined;
          }) ? "Você precisa capturar com outra peça." : "Essa peça não pode se mover.";
          return;
        }
      } else sel = null;
      draw();
    };
    var draw = function draw() {
      keepPut("damas", {
        bd: bd,
        turn: turn,
        chain: chain,
        sel: sel
      });
      var over = !all(turn).length;
      msg.textContent = over ? "Jogador " + (3 - turn) + " venceu!" : "Vez das " + (turn === 1 ? "brancas" : "pretas") + (chain ? " — continue capturando" : all(turn).some(function (m) {
        return m.cap !== undefined;
      }) ? " — captura obrigatória" : "");
      var hl = sel !== null ? legal(sel).map(function (m) {
        return m.to;
      }) : [];
      for (var i = 0; i < 64; i++) {
        var x = i % 8 * Z,
          y = Math.floor(i / 8) * Z,
          dark = (Math.floor(i / 8) + i % 8) % 2;
        g.fillStyle = dark ? "#777" : "#fff";
        g.fillRect(x, y, Z, Z);
        if (i === sel) {
          g.fillStyle = "#000";
          g.fillRect(x, y, Z, 4);
          g.fillRect(x, y + Z - 4, Z, 4);
          g.fillRect(x, y, 4, Z);
          g.fillRect(x + Z - 4, y, 4, Z);
        }
        if (hl.indexOf(i) >= 0) {
          g.fillStyle = "#000";
          g.fillRect(x + Z / 2 - 6, y + Z / 2 - 6, 12, 12);
          g.fillStyle = "#fff";
          g.fillRect(x + Z / 2 - 3, y + Z / 2 - 3, 6, 6);
        }
        var p = bd[i];
        if (p) {
          g.beginPath();
          g.arc(x + Z / 2, y + Z / 2, Z * .36, 0, 7);
          g.fillStyle = p.p === 1 ? "#fff" : "#000";
          g.fill();
          g.lineWidth = 3;
          g.strokeStyle = p.p === 1 ? "#000" : "#fff";
          g.stroke();
          if (p.k) {
            g.fillStyle = p.p === 1 ? "#000" : "#fff";
            g.fillRect(x + 16, y + 22, 18, 8);
            g.fillRect(x + 16, y + 16, 4, 6);
            g.fillRect(x + 23, y + 14, 4, 8);
            g.fillRect(x + 30, y + 16, 4, 6);
          }
        }
      }
      g.strokeStyle = "#000";
      g.lineWidth = 2;
      g.strokeRect(1, 1, 8 * Z - 2, 8 * Z - 2);
    };
    onPointer(c, function (e) {
      var p = ptr(c, e);
      click(Math.floor(p[1] / Z) * 8 + Math.floor(p[0] / Z));
    });
    b.append(h("p", {
      class: "muted"
    }, "Duas pessoas no mesmo aparelho. Toque numa peça e depois no quadradinho marcado. Captura é obrigatória; quem chega ao outro lado vira dama (coroa)."), msg, c, btn("Novo jogo", reset, "solid"));
    var svD = keepGet("damas");
    if (svD && svD.bd) {
      bd = svD.bd;
      turn = svD.turn;
      chain = svD.chain;
      sel = svD.sel;
      draw();
    } else reset();
  });
  var CP = ["livro", "casa", "mesa", "gato", "pedra", "nuvem", "vento", "fogo", "terra", "flor", "chuva", "praia", "janela", "cadeira", "escola", "jardim", "lago", "ponte", "trem", "barco", "estrela", "planeta", "sorvete", "banana"];
  add("wordsearch", "Caça-Palavras", "search", "Jogos", function (b) {
    var N = 10,
      tbl = h("table", {
        class: "ws"
      }),
      list = h("div", {
        class: "wsl"
      }),
      msg = h("p", {
        class: "score"
      });
    var g, ws, found, a;
    var gen = function gen() {
      g = Array(N * N).fill("");
      ws = [];
      found = {};
      a = null;
      var D = [[1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [1, -1]];
      shuffle(CP).forEach(function (w0) {
        if (ws.length >= 7) return;
        var w = w0.toUpperCase();
        for (var t = 0; t < 300; t++) {
          var _pick = pick(D),
            _pick2 = _slicedToArray(_pick, 2),
            dx = _pick2[0],
            dy = _pick2[1],
            x = rnd(N),
            y = rnd(N),
            ex = x + dx * (w.length - 1),
            ey = y + dy * (w.length - 1);
          if (ex < 0 || ey < 0 || ex >= N || ey >= N) continue;
          var ok = true;
          for (var k = 0; k < w.length; k++) {
            var v = g[(y + dy * k) * N + x + dx * k];
            if (v && v !== w[k]) {
              ok = false;
              break;
            }
          }
          if (ok) {
            for (var _k = 0; _k < w.length; _k++) g[(y + dy * _k) * N + x + dx * _k] = w[_k];
            ws.push(w);
            break;
          }
        }
      });
      g = g.map(function (v) {
        return v || "ABCDEFGHIJLMNOPRSTUV"[rnd(20)];
      });
      msg.textContent = "Toque na primeira letra e depois na última letra da palavra.";
      draw();
    };
    var draw = function draw() {
      var hit = {};
      Object.keys(found).forEach(function (w) {
        return found[w].forEach(function (i) {
          hit[i] = 1;
        });
      });
      var rows = [];
      var _loop5 = function _loop5(r) {
        rows.push(h.apply(void 0, ["tr", {}].concat(_toConsumableArray(Array.from({
          length: N
        }, function (_, cc) {
          var i = r * N + cc;
          return h("td", {
            class: (hit[i] ? "hit " : "") + (a === i ? "sel" : ""),
            onclick: function onclick() {
              return tap(i);
            }
          }, g[i]);
        })))));
      };
      for (var r = 0; r < N; r++) {
        _loop5(r);
      }
      tbl.replaceChildren(h.apply(void 0, ["tbody", {}].concat(rows)));
      list.replaceChildren.apply(list, _toConsumableArray(ws.map(function (w) {
        return h("span", {
          class: found[w] ? "got" : ""
        }, w);
      })));
      if (ws.every(function (w) {
        return found[w];
      })) msg.textContent = "Parabéns! Você achou todas as palavras.";
      keepPut("cacapal", {
        g: g,
        ws: ws,
        found: found
      });
    };
    var tap = function tap(i) {
      if (a === null) {
        a = i;
        msg.textContent = "Agora toque na última letra.";
        return draw();
      }
      if (a === i) {
        a = null;
        msg.textContent = "Seleção cancelada.";
        return draw();
      }
      var x0 = a % N,
        y0 = Math.floor(a / N),
        x1 = i % N,
        y1 = Math.floor(i / N),
        ddx = x1 - x0,
        ddy = y1 - y0;
      a = null;
      if (ddx && ddy && Math.abs(ddx) !== Math.abs(ddy)) {
        msg.textContent = "As letras precisam estar em linha reta.";
        return draw();
      }
      var len = Math.max(Math.abs(ddx), Math.abs(ddy)) + 1,
        sx = Math.sign(ddx),
        sy = Math.sign(ddy),
        cells = Array.from({
          length: len
        }, function (_, k) {
          return (y0 + sy * k) * N + x0 + sx * k;
        });
      var s = cells.map(function (cc) {
          return g[cc];
        }).join(""),
        r = s.split("").reverse().join(""),
        w = ws.find(function (x) {
          return x === s || x === r;
        });
      if (w && !found[w]) {
        found[w] = cells;
        msg.textContent = "Achou: " + w + "!";
      } else msg.textContent = w ? "Essa você já achou." : "“" + s + "” não está na lista.";
      draw();
    };
    b.append(msg, tbl, list, btn("Novo jogo", gen, "solid"));
    var svW = keepGet("cacapal");
    if (svW && svW.g) {
      g = svW.g;
      ws = svW.ws;
      found = svW.found;
      a = null;
      msg.textContent = "Continuando o jogo salvo.";
      draw();
    } else gen();
  });
  ;
  var KEEP = {
    H1: "h3",
    H2: "h3",
    H3: "h3",
    H4: "h4",
    P: "p",
    LI: "li",
    UL: "ul",
    OL: "ol",
    BLOCKQUOTE: "blockquote",
    PRE: "pre",
    TABLE: "table",
    TR: "tr",
    TD: "td",
    TH: "td",
    TBODY: "tbody",
    THEAD: "tbody",
    FIGCAPTION: "small",
    DT: "b",
    DD: "p"
  };
  var SKIP = /^(SCRIPT|STYLE|NOSCRIPT|IFRAME|SVG|BUTTON|INPUT|SELECT|TEXTAREA|NAV|FOOTER|ASIDE|TEMPLATE|CANVAS|VIDEO|AUDIO|OBJECT|EMBED|DIALOG)$/;
  function absUrl(u, base) {
    try {
      return new URL(u, base).href;
    } catch (e) {
      return "";
    }
  }
  function renderPage(html, url, onLink) {
    var d = new DOMParser().parseFromString(html, "text/html");
    var title = (d.querySelector("title") || {}).textContent || url;
    var root = null;
    for (var _i3 = 0, _arr2 = ["article", "main", "[role=main]", "#content", "#main", ".content", "body"]; _i3 < _arr2.length; _i3++) {
      var sel = _arr2[_i3];
      var el = d.querySelector(sel);
      if (el && el.textContent.trim().length > 200) {
        root = el;
        break;
      }
    }
    root = root || d.body;
    var imgs = 0,
      nodes = 0;
    var _walk = function walk(n, out) {
      if (nodes > 1500) return;
      if (n.nodeType === 3) {
        var t = n.textContent.replace(/\s+/g, " ");
        if (t.trim()) out.appendChild(document.createTextNode(t));
        return;
      }
      if (n.nodeType !== 1 || SKIP.test(n.tagName)) return;
      var st = (n.getAttribute("style") || "") + " " + (n.getAttribute("class") || "");
      if (/display:\s*none|hidden|sr-only|visually-hidden|cookie|banner|popup|modal/i.test(st) || n.getAttribute("aria-hidden") === "true") return;
      nodes++;
      if (n.tagName === "IMG") {
        var src = n.getAttribute("src") || n.getAttribute("data-src") || n.getAttribute("data-lazy-src") || "";
        var a = absUrl(src, url);
        if (a && !/^data:/.test(src) && imgs < 25 && !/pixel|track|spacer|1x1/i.test(a)) {
          imgs++;
          out.appendChild(h("img", {
            src: a,
            alt: n.getAttribute("alt") || "",
            class: "bimg"
          }));
        }
        return;
      }
      if (n.tagName === "FORM") {
        var method = (n.getAttribute("method") || "get").toLowerCase(),
          fields = Array.prototype.slice.call(n.querySelectorAll("input,textarea"));
        var texts = fields.filter(function (f) {
          return /^(text|search|)$/i.test(f.getAttribute("type") || "") || f.tagName === "TEXTAREA";
        });
        if (method !== "get" || !texts.length) {
          Array.prototype.forEach.call(n.childNodes, function (c) {
            return _walk(c, out);
          });
          return;
        }
        var _t5 = texts[0],
          box = h("input", {
            type: "search",
            placeholder: _t5.getAttribute("placeholder") || _t5.getAttribute("aria-label") || _t5.getAttribute("title") || "Pesquisar neste site"
          });
        var submit = function submit() {
          var v = box.value.trim();
          if (!v) return;
          var act = absUrl(n.getAttribute("action") || url, url).split("#")[0],
            ps = [];
          fields.forEach(function (f) {
            var nm = f.getAttribute("name");
            if (!nm) return;
            var ty = (f.getAttribute("type") || "").toLowerCase();
            if (f === _t5) ps.push(nm + "=" + encodeURIComponent(v));else if (ty === "hidden") ps.push(nm + "=" + encodeURIComponent(f.getAttribute("value") || ""));
          });
          onLink(act.split("?")[0] + "?" + ps.join("&"));
        };
        box.addEventListener("keydown", function (e) {
          return e.key === "Enter" && submit();
        });
        out.appendChild(h("div", {
          class: "bar bform"
        }, h("span", {}, box), h("span", {}, btn("Pesquisar", submit, "solid"))));
        nodes++;
        return;
      }
      if (n.tagName === "HEADER") {
        Array.prototype.forEach.call(n.querySelectorAll("form"), function (f) {
          return _walk(f, out);
        });
        return;
      }
      if (n.tagName === "A") {
        var href = absUrl(n.getAttribute("href") || "", url);
        var _a = h("a", {
          href: "#",
          class: "blink",
          onclick: function onclick(e) {
            e.preventDefault();
            if (/^https?:/.test(href)) onLink(href);
            return false;
          }
        });
        Array.prototype.forEach.call(n.childNodes, function (c) {
          return _walk(c, _a);
        });
        if (_a.textContent.trim() || _a.querySelector("img")) {
          out.appendChild(_a);
          out.appendChild(document.createTextNode(" "));
        }
        return;
      }
      if (n.tagName === "BR") {
        out.appendChild(h("br"));
        return;
      }
      var tag = KEEP[n.tagName],
        el = tag ? h(tag) : out;
      Array.prototype.forEach.call(n.childNodes, function (c) {
        return _walk(c, el);
      });
      if (tag && (el.textContent.trim() || el.querySelector("img"))) out.appendChild(el);else if (!tag && /^(DIV|SECTION|ARTICLE|MAIN)$/.test(n.tagName)) out.appendChild(document.createTextNode(" "));
    };
    var body = h("div", {
      class: "bpage"
    });
    _walk(root, body);
    if (!body.querySelector(".bform")) {
      var f = Array.prototype.filter.call(d.querySelectorAll("form"), function (fm) {
        return (fm.getAttribute("method") || "get").toLowerCase() === "get" && fm.querySelector("input[type=search],input[type=text],input:not([type])");
      })[0];
      if (f) {
        var tmp = h("div");
        _walk(f, tmp);
        if (tmp.firstChild) body.insertBefore(tmp.firstChild, body.firstChild);
      }
    }
    return {
      title: title.trim(),
      body: body
    };
  }
  function ddgSearch(q) {
    return fetchPage("https://lite.duckduckgo.com/lite/?q=" + encodeURIComponent(q) + "&kl=br-pt").then(function (html) {
      var d = new DOMParser().parseFromString(html, "text/html"),
        out = [];
      Array.prototype.forEach.call(d.querySelectorAll("a.result-link"), function (a) {
        var u = a.getAttribute("href") || "";
        var m = /uddg=([^&]+)/.exec(u);
        if (m) u = decodeURIComponent(m[1]);else u = absUrl(u, "https://duckduckgo.com/");
        var tr = a.parentNode;
        while (tr && tr.tagName !== "TR") tr = tr.parentNode;
        var sn = tr && tr.nextElementSibling ? tr.nextElementSibling.querySelector(".result-snippet") : null;
        if (/^https?:/.test(u) && !/duckduckgo\.com/.test(u) && !/^more info$/i.test(a.textContent.trim()) && !(tr && /sponsored|result-sponsored/.test(tr.className))) out.push({
          t: a.textContent.trim(),
          u: u,
          s: sn ? sn.textContent.trim() : ""
        });
      });
      return out;
    });
  }
  var ATALHOS = [["Wikipédia", "https://pt.m.wikipedia.org/"], ["G1", "https://g1.globo.com/"], ["Hacker News", "https://news.ycombinator.com/"], ["Projeto Gutenberg", "https://www.gutenberg.org/"], ["Tempo (CPTEC)", "https://www.cptec.inpe.br/"], ["Dicio", "https://www.dicio.com.br/"]];
  add("browser", "Navegador", "wiki", "Ferramentas", function (b) {
    var marks = X("bookmarks", []);
    var addr = inp("Endereço ou pesquisa", "search"),
      bar = h("div", {
        class: "bar"
      }, h("span", {}, addr), h("span", {}, btn("Ir", function () {
        return go(addr.value);
      }, "solid"))),
      info = h("div", {
        class: "binfo"
      }),
      body = h("div");
    var cur = null;
    addr.addEventListener("keydown", function (e) {
      return e.key === "Enter" && go(addr.value);
    });
    var isUrl = function isUrl(v) {
      return /^https?:\/\//i.test(v) || /^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(v);
    };
    var go = function go(v) {
      v = String(v || "").trim();
      if (!v) return;
      open(isUrl(v) ? /^https?:/i.test(v) ? v : "https://" + v : null, isUrl(v) ? null : v);
    };
    var searchOf = function searchOf(u) {
      var m = /^https?:\/\/(www\.)?(google\.[a-z.]+|bing\.com|duckduckgo\.com)\/(search|html|lite)?\/?\?(.*)$/i.exec(u || "");
      if (!m) return null;
      var q = /(?:^|&)q=([^&]*)/.exec(m[4]);
      return q ? decodeURIComponent(q[1].replace(/\+/g, " ")) : null;
    };
    var open = function open(url, q) {
      var sq = searchOf(url);
      if (sq) {
        url = null;
        q = sq;
      } else if (/^https?:\/\/(www\.)?google\.[a-z.]+\/?$/i.test(url || "")) {
        url = null;
        q = "";
      }
      return subView(b, function () {
        return q === "" ? searchHome() : _show(url, q);
      }, function () {
        return _home();
      });
    };
    var searchHome = function searchHome() {
      addr.value = "";
      info.replaceChildren();
      var qi = inp("Pesquisar na web", "search");
      var go2 = function go2() {
        return qi.value.trim() && open(null, qi.value.trim());
      };
      qi.addEventListener("keydown", function (e) {
        return e.key === "Enter" && go2();
      });
      body.replaceChildren(h("h2", {
        class: "ah"
      }, "Pesquisa"), h("div", {
        class: "bar"
      }, h("span", {}, qi), h("span", {}, btn("Pesquisar", go2, "solid"))), note("O Google não deixa ser aberto por outros sites; as pesquisas aqui usam o DuckDuckGo."));
    };
    var _show = function show(url, q) {
      cur = url;
      addr.value = url || q;
      window.scrollTo(0, 0);
      body.replaceChildren(note(q ? "Pesquisando…" : "Abrindo " + host(url) + "…"));
      if (q) {
        info.replaceChildren(h("b", {}, "Pesquisa: " + q));
        ddgSearch(q).then(function (r) {
          return body.replaceChildren(r.length ? h.apply(void 0, ["ul", {
            class: "list"
          }].concat(_toConsumableArray(r.map(function (x) {
            return h("li", {
              class: "nw",
              onclick: function onclick() {
                return open(x.u);
              }
            }, h("span", {}, h("b", {}, x.t), h("small", {}, host(x.u) + (x.s ? " · " + x.s : ""))));
          })))) : para("Nada encontrado."));
        }, function () {
          return body.replaceChildren(para("Não consegui pesquisar agora. Tente de novo."));
        });
        return;
      }
      var fav = marks.some(function (m) {
        return m.u === url;
      });
      info.replaceChildren(h("span", {
        class: "muted"
      }, host(url)), h("button", {
        class: "sbtn",
        onclick: function onclick() {
          var i = marks.findIndex(function (m) {
            return m.u === url;
          });
          if (i >= 0) marks.splice(i, 1);else marks.unshift({
            t: (body.querySelector("h2") || {}).textContent || host(url),
            u: url
          });
          save();
          _show(url);
        }
      }, ic("star", 16, fav), fav ? " Salvo" : " Salvar"));
      fetchPage(url).then(function (html) {
        var p = renderPage(html, url, function (u) {
          return open(u);
        });
        var thin = p.body.textContent.replace(/\s+/g, " ").trim().length < 200;
        body.replaceChildren(h("h2", {
          class: "ah"
        }, p.title), thin ? h("div", {
          class: "tip"
        }, "Este site depende de recursos que o modo leitura não executa. Mostrando o que deu para aproveitar.") : null, p.body);
      }, function () {
        return body.replaceChildren(para("Não foi possível abrir esse site agora."), note("Verifique o endereço ou tente de novo em instantes."));
      });
    };
    var _home = function home() {
      cur = null;
      addr.value = "";
      info.replaceChildren();
      body.replaceChildren(h("div", {
        class: "lbl2"
      }, "Atalhos"), h.apply(void 0, ["div", {
        class: "chips"
      }].concat(_toConsumableArray(ATALHOS.map(function (a) {
        return h("button", {
          onclick: function onclick() {
            return open(a[1]);
          }
        }, a[0]);
      })))), h("div", {
        class: "lbl2"
      }, "Salvos"), marks.length ? h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(marks.map(function (m, i) {
        return h("li", {
          class: "nw"
        }, h("span", {
          onclick: function onclick() {
            return open(m.u);
          }
        }, h("b", {}, m.t), h("small", {}, host(m.u))), h("button", {
          "aria-label": "Apagar",
          onclick: function onclick() {
            marks.splice(i, 1);
            save();
            _home();
          }
        }, ic("x", 16)));
      })))) : h("div", {
        class: "empty2"
      }, "Abra um site e toque em Salvar para guardar aqui."), note("Os sites abrem aqui mesmo, em modo leitura: só texto, imagens e links, leve para e-ink."));
    };
    b.append(bar, info, body);
    if (S.x.browserOpen) {
      var u0 = S.x.browserOpen;
      delete S.x.browserOpen;
      save();
      go(u0);
    } else _home();
  });
  add("lights", "UnLights", "bulb", "Jogos", function (b) {
    var N = 5,
      st = X("unlights", {
        lvl: 1,
        best: {}
      }),
      tbl = h("table", {
        class: "ul"
      }),
      head = h("div", {
        class: "ulh"
      }),
      msg = h("p", {
        class: "score"
      });
    var g, start, moves;
    var press = function press(x, y) {
      return [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (_ref28) {
        var _ref29 = _slicedToArray(_ref28, 2),
          dx = _ref29[0],
          dy = _ref29[1];
        var a = x + dx,
          c = y + dy;
        if (a >= 0 && a < N && c >= 0 && c < N) g[c * N + a] ^= 1;
      });
    };
    var _make = function make() {
      g = Array(N * N).fill(0);
      var k = Math.min(3 + st.lvl, 15),
        used = {};
      var n = 0;
      while (n < k) {
        var i = rnd(N * N);
        if (used[i]) continue;
        used[i] = 1;
        press(i % N, Math.floor(i / N));
        n++;
      }
      if (g.every(function (v) {
        return !v;
      })) return _make();
      start = g.slice();
      moves = 0;
      _draw14();
    };
    var _draw14 = function draw() {
      var on = g.filter(Boolean).length,
        won = !on;
      head.replaceChildren(h("div", {}, h("small", {}, "NÍVEL"), h("b", {}, String(st.lvl))), h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "ACESAS"), h("b", {}, String(on))), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[st.lvl] != null ? String(st.best[st.lvl]) : "—")));
      var rows = [];
      var _loop6 = function _loop6(y) {
        rows.push(h.apply(void 0, ["tr", {}].concat(_toConsumableArray(Array.from({
          length: N
        }, function (_, x) {
          return h("td", {
            class: g[y * N + x] ? "on" : "",
            onclick: function onclick() {
              if (won) return;
              press(x, y);
              moves++;
              _draw14();
            }
          }, g[y * N + x] ? ic("bulb", 32, true) : "");
        })))));
      };
      for (var y = 0; y < N; y++) {
        _loop6(y);
      }
      tbl.replaceChildren(h.apply(void 0, ["tbody", {}].concat(rows)));
      if (won) {
        if (st.best[st.lvl] == null || moves < st.best[st.lvl]) st.best[st.lvl] = moves;
        save();
        msg.textContent = "Tudo apagado em " + moves + " jogadas!";
      } else msg.textContent = "Apague todas as luzes. Cada toque inverte a casa e as vizinhas.";
      ctr.replaceChildren(won ? btn("Próximo nível", function () {
        st.lvl++;
        save();
        _make();
      }, "solid") : btn("Recomeçar nível", function () {
        g = start.slice();
        moves = 0;
        _draw14();
      }), st.lvl > 1 ? btn("Nível anterior", function () {
        st.lvl--;
        save();
        _make();
      }) : null);
    };
    var ctr = h("div", {
      class: "row"
    });
    b.append(head, msg, tbl, ctr);
    _make();
  });
  var MEM_IC = ["star", "heart", "sun", "moon", "cloud", "music", "flame", "bulb", "paw", "dino", "snake", "ball8", "home", "cal", "coin", "bolt", "camera", "map"];
  add("memory", "Jogo da Memória", "heart", "Jogos", function (b) {
    var st = X("memoria", {
        lv: "m",
        best: {}
      }),
      LV = {
        f: [4, 3, "Fácil"],
        m: [4, 4, "Médio"],
        d: [5, 4, "Difícil"]
      };
    var top = h("div"),
      head = h("div", {
        class: "ulh"
      }),
      tbl = h("table", {
        class: "mem"
      }),
      msg = h("p", {
        class: "score"
      });
    var cards, open, done, moves, lock, t0, timer;
    var deal = function deal() {
      var _LV$st$lv = _slicedToArray(LV[st.lv], 2),
        w = _LV$st$lv[0],
        hh = _LV$st$lv[1],
        n = w * hh / 2;
      cards = shuffle(shuffle(MEM_IC).slice(0, n).reduce(function (a, x) {
        return a.concat([x, x]);
      }, []));
      open = [];
      done = {};
      moves = 0;
      lock = false;
      t0 = 0;
      clearInterval(timer);
      timer = null;
      draw();
    };
    var secs = function secs() {
      return t0 ? Math.floor((Date.now() - t0) / 1000) : 0;
    };
    var draw = function draw() {
      var _LV$st$lv2 = _slicedToArray(LV[st.lv], 2),
        w = _LV$st$lv2[0],
        hh = _LV$st$lv2[1],
        pairs = Object.keys(done).length / 2,
        total = cards.length / 2,
        won = pairs === total;
      top.replaceChildren(segTabs(Object.keys(LV).map(function (k) {
        return [k, LV[k][2]];
      }), st.lv, function (k) {
        st.lv = k;
        save();
        deal();
      }));
      head.replaceChildren(h("div", {}, h("small", {}, "PARES"), h("b", {}, pairs + "/" + total)), h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "TEMPO"), h("b", {}, secs() + "s")), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[st.lv] ? st.best[st.lv] + " jog." : "—")));
      var rows = [];
      var _loop7 = function _loop7(y) {
        rows.push(h.apply(void 0, ["tr", {}].concat(_toConsumableArray(Array.from({
          length: w
        }, function (_, x) {
          var i = y * w + x,
            up = done[i] || open.indexOf(i) >= 0;
          return h("td", {
            class: up ? done[i] ? "up done" : "up" : "",
            onclick: function onclick() {
              return flip(i);
            }
          }, up ? ic(cards[i], 32) : h("span", {
            class: "back"
          }));
        })))));
      };
      for (var y = 0; y < hh; y++) {
        _loop7(y);
      }
      tbl.replaceChildren(h.apply(void 0, ["tbody", {}].concat(rows)));
      keepPut("memoria", {
        lv: st.lv,
        cards: cards,
        done: done,
        moves: moves
      });
      msg.textContent = won ? "Você achou todos os pares em " + moves + " jogadas e " + secs() + "s!" : "Vire duas cartas por vez e encontre os pares.";
    };
    var flip = function flip(i) {
      if (lock || done[i] || open.indexOf(i) >= 0) return;
      if (!t0) {
        t0 = Date.now();
        timer = setInterval(function () {
          var tb = head.querySelectorAll("b")[2];
          if (tb) tb.textContent = secs() + "s";
        }, 1000);
      }
      open.push(i);
      draw();
      if (open.length === 2) {
        moves++;
        var _open = open,
          _open2 = _slicedToArray(_open, 2),
          a = _open2[0],
          c = _open2[1];
        if (cards[a] === cards[c]) {
          done[a] = done[c] = 1;
          open = [];
          if (Object.keys(done).length === cards.length) {
            clearInterval(timer);
            if (!st.best[st.lv] || moves < st.best[st.lv]) {
              st.best[st.lv] = moves;
              save();
            }
          }
          draw();
        } else {
          lock = true;
          setTimeout(function () {
            open = [];
            lock = false;
            draw();
          }, 900);
        }
      }
    };
    onClose(b, function () {
      return clearInterval(timer);
    });
    b.append(top, head, tbl, msg, btn("Embaralhar de novo", deal, "solid"));
    var svM = keepGet("memoria");
    if (svM && svM.cards && svM.lv === st.lv && Object.keys(svM.done).length < svM.cards.length) {
      cards = svM.cards;
      done = svM.done;
      moves = svM.moves;
      open = [];
      lock = false;
      t0 = 0;
      draw();
    } else deal();
  });
  add("solitaire", "Paciência", "cards", "Jogos", function (b) {
    var CW = 70,
      CH = 96,
      GAP = 8,
      W2 = 7 * CW + 8 * GAP,
      c = cv(W2, 560),
      g = c.getContext("2d"),
      msg = h("p", {
        class: "score"
      });
    var SU = ["♠", "♥", "♦", "♣"],
      SO = ["♠", "♡", "♢", "♣"],
      red = function red(s) {
        return s === 1 || s === 2;
      },
      RK = function RK(r) {
        return {
          1: "A",
          11: "J",
          12: "Q",
          13: "K"
        }[r] || String(r);
      };
    var T,
      stock,
      waste,
      F,
      sel,
      moves,
      hist,
      hits = [];
    var snap = function snap() {
      return JSON.stringify({
        T: T,
        stock: stock,
        waste: waste,
        F: F,
        moves: moves
      });
    };
    var push = function push() {
      hist.push(snap());
      if (hist.length > 60) hist.shift();
    };
    var deal = function deal() {
      var d = shuffle([0, 1, 2, 3].reduce(function (a, s) {
        return a.concat(Array.from({
          length: 13
        }, function (_, i) {
          return {
            r: i + 1,
            s: s,
            up: false
          };
        }));
      }, []));
      T = [];
      for (var i = 0; i < 7; i++) {
        var p = d.splice(0, i + 1);
        p[i].up = true;
        T.push(p);
      }
      stock = d;
      waste = [];
      F = [[], [], [], []];
      sel = null;
      moves = 0;
      hist = [];
      draw();
    };
    var canT = function canT(cd, p) {
      return !p.length ? cd.r === 13 : p[p.length - 1].up && red(p[p.length - 1].s) !== red(cd.s) && p[p.length - 1].r === cd.r + 1;
    };
    var canF = function canF(cd, f) {
      return cd.r === F[f].length + 1 && (!F[f].length || F[f][0].s === cd.s);
    };
    var selCards = function selCards() {
      return !sel ? [] : sel.w ? [waste[waste.length - 1]] : sel.f != null ? [F[sel.f][F[sel.f].length - 1]] : T[sel.p].slice(sel.i);
    };
    var take = function take() {
      return sel.w ? [waste.pop()] : sel.f != null ? [F[sel.f].pop()] : T[sel.p].splice(sel.i);
    };
    var flip = function flip() {
      return T.forEach(function (p) {
        if (p.length && !p[p.length - 1].up) p[p.length - 1].up = true;
      });
    };
    var autoF = function autoF() {
      var cs = selCards();
      if (cs.length !== 1) return false;
      for (var f = 0; f < 4; f++) if (canF(cs[0], f)) {
        push();
        F[f].push(take()[0]);
        moves++;
        sel = null;
        flip();
        return true;
      }
      return false;
    };
    var card = function card(x, y, cd, hl) {
      g.fillStyle = "#000";
      g.fillRect(x, y, CW, CH);
      g.fillStyle = hl ? "#000" : "#fff";
      g.fillRect(x + 2, y + 2, CW - 4, CH - 4);
      if (!cd.up) {
        g.fillStyle = "#000";
        for (var i = 6; i < CW - 6; i += 6) for (var j = 6; j < CH - 6; j += 6) if ((i + j) % 12 === 0) g.fillRect(x + i, y + j, 3, 3);
        return;
      }
      g.fillStyle = hl ? "#fff" : "#000";
      g.font = "bold 20px Bookerly, Literata, Georgia, serif";
      g.textAlign = "left";
      g.fillText(RK(cd.r), x + 6, y + 22);
      g.font = "20px Bookerly, Literata, Georgia, serif";
      g.fillText(red(cd.s) ? SO[cd.s] : SU[cd.s], x + 6, y + 44);
      g.font = "34px Bookerly, Literata, Georgia, serif";
      g.textAlign = "center";
      g.fillText(red(cd.s) ? SO[cd.s] : SU[cd.s], x + CW / 2 + 8, y + CH - 16);
    };
    var slot = function slot(x, y, label) {
      g.strokeStyle = "#000";
      g.lineWidth = 2;
      g.setLineDash ? g.setLineDash([4, 4]) : 0;
      g.strokeRect(x + 1, y + 1, CW - 2, CH - 2);
      g.setLineDash ? g.setLineDash([]) : 0;
      if (label) {
        g.fillStyle = "#777";
        g.font = "28px Bookerly, Literata, Georgia, serif";
        g.textAlign = "center";
        g.fillText(label, x + CW / 2, y + CH / 2 + 10);
      }
    };
    var draw = function draw() {
      hits = [];
      var tops = T.map(function (p) {
          return p.reduce(function (y, cd, i) {
            return y + (i ? p[i - 1].up ? 26 : 12 : 0);
          }, 0);
        }),
        hgt = Math.max(560, 130 + Math.max.apply(Math, _toConsumableArray(tops)) + CH + 10);
      if (c.height !== hgt) c.height = hgt;
      g.fillStyle = "#fff";
      g.fillRect(0, 0, W2, c.height);
      var X0 = function X0(i) {
        return GAP + i * (CW + GAP);
      };
      if (stock.length) card(X0(0), 10, {
        up: false
      });else slot(X0(0), 10, "↻");
      hits.push({
        x: X0(0),
        y: 10,
        w: CW,
        h: CH,
        t: "stock"
      });
      if (waste.length) card(X0(1), 10, waste[waste.length - 1], sel && sel.w);else slot(X0(1), 10);
      hits.push({
        x: X0(1),
        y: 10,
        w: CW,
        h: CH,
        t: "waste"
      });
      for (var f = 0; f < 4; f++) {
        var x = X0(3 + f);
        if (F[f].length) card(x, 10, F[f][F[f].length - 1], sel && sel.f === f);else slot(x, 10, "A");
        hits.push({
          x: x,
          y: 10,
          w: CW,
          h: CH,
          t: "f",
          f: f
        });
      }
      T.forEach(function (p, pi) {
        var x = X0(pi);
        var y = 125;
        if (!p.length) slot(x, y, "K");
        hits.push({
          x: x,
          y: 125,
          w: CW,
          h: 2000,
          t: "col",
          p: pi,
          i: p.length
        });
        p.forEach(function (cd, i) {
          card(x, y, cd, sel && sel.p === pi && i >= sel.i);
          hits.push({
            x: x,
            y: y,
            w: CW,
            h: i === p.length - 1 ? CH : cd.up ? 26 : 12,
            t: "card",
            p: pi,
            i: i
          });
          y += cd.up ? 26 : 12;
        });
      });
      var won = F.every(function (f) {
        return f.length === 13;
      });
      if (won) keepDel("paciencia");else keepPut("paciencia", {
        T: T,
        stock: stock,
        waste: waste,
        F: F,
        moves: moves
      });
      msg.textContent = won ? "Você venceu em " + moves + " jogadas!" : "Jogadas: " + moves + "  ·  " + (sel ? "Agora toque no destino (toque de novo para mandar à fundação)." : "Toque numa carta para escolher.");
    };
    var tap = function tap(px, py) {
      var hit = null;
      for (var k = hits.length - 1; k >= 0; k--) {
        var o = hits[k];
        if (px >= o.x && px < o.x + o.w && py >= o.y && py < o.y + o.h) {
          hit = o;
          break;
        }
      }
      if (!hit) {
        sel = null;
        return draw();
      }
      if (hit.t === "stock") {
        push();
        if (stock.length) {
          var cd = stock.pop();
          cd.up = true;
          waste.push(cd);
        } else {
          stock = waste.reverse().map(function (cd) {
            return Object.assign({}, cd, {
              up: false
            });
          });
          waste = [];
        }
        sel = null;
        moves++;
        return draw();
      }
      if (sel) {
        var same = hit.t === "waste" && sel.w || hit.t === "card" && sel.p === hit.p && sel.i === hit.i || hit.t === "f" && sel.f === hit.f;
        if (same) {
          if (!autoF()) sel = null;
          return draw();
        }
        var cs = selCards();
        if (hit.t === "f") {
          if (cs.length === 1 && canF(cs[0], hit.f)) {
            push();
            F[hit.f].push(take()[0]);
            moves++;
            flip();
          }
          sel = null;
          return draw();
        }
        if (hit.t === "card" || hit.t === "col") {
          var p = T[hit.p];
          if (canT(cs[0], p) && !(sel.p === hit.p)) {
            push();
            T[hit.p] = p.concat(take());
            moves++;
            flip();
            sel = null;
            return draw();
          }
        }
        sel = null;
      }
      if (hit.t === "waste" && waste.length) sel = {
        w: true
      };else if (hit.t === "f" && F[hit.f].length) sel = {
        f: hit.f
      };else if (hit.t === "card" && T[hit.p][hit.i].up) sel = {
        p: hit.p,
        i: hit.i
      };
      draw();
    };
    onPointer(c, function (e) {
      var p = ptr(c, e);
      tap(p[0], p[1]);
    });
    b.append(msg, c, h("div", {
      class: "row"
    }, btn("Desfazer", function () {
      if (!hist.length) return;
      var o = JSON.parse(hist.pop());
      T = o.T;
      stock = o.stock;
      waste = o.waste;
      F = o.F;
      moves = o.moves;
      sel = null;
      draw();
    }), btn("Auto fundações", function () {
      var m = true;
      push();
      while (m) {
        m = false;
        var cands = [{
          w: true
        }].concat(T.map(function (p, pi) {
          return {
            p: pi,
            i: p.length - 1
          };
        }));
        var _iterator = _createForOfIteratorHelper(cands),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cd = _step.value;
            sel = cd;
            var cs = cd.w ? waste.length ? [waste[waste.length - 1]] : [] : T[cd.p].length ? [T[cd.p][cd.i]] : [];
            if (cs.length && cs[0].up !== false) for (var f = 0; f < 4; f++) if (canF(cs[0], f)) {
              F[f].push(take()[0]);
              moves++;
              flip();
              m = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      sel = null;
      draw();
    }), btn("Novo jogo", deal, "solid")));
    var svP = keepGet("paciencia");
    if (svP && svP.T) {
      T = svP.T;
      stock = svP.stock;
      waste = svP.waste;
      F = svP.F;
      moves = svP.moves;
      sel = null;
      hist = [];
      draw();
    } else deal();
  });
  add("c_musicas", "Músicas", "music", "Cultura", function (b) {
    var st = X("musicas", {
        q: ""
      }),
      q = inp("Música ou artista (ex.: Garota de Ipanema)", "search", {
        value: st.q
      }),
      top = h("div"),
      body = h("div");
    var list = function list() {
      var v = q.value.trim();
      st.q = v;
      save();
      if (!v) {
        body.replaceChildren(note("Busque uma música para ver a letra."));
        return;
      }
      body.replaceChildren(note("Buscando…"));
      api("https://lrclib.net/api/search?q=" + encodeURIComponent(v)).then(function (r) {
        var seen = {},
          items = r.filter(function (x) {
            return x.plainLyrics && !x.instrumental;
          }).filter(function (x) {
            var k = (x.trackName + "|" + x.artistName).toLowerCase();
            if (seen[k]) return false;
            seen[k] = 1;
            return true;
          }).slice(0, 25);
        body.replaceChildren(items.length ? h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(items.map(function (x) {
          return h("li", {
            class: "nw",
            onclick: function onclick() {
              return lyr(x);
            }
          }, h("span", {}, h("b", {}, x.trackName), h("small", {}, x.artistName + (x.albumName ? " · " + x.albumName : ""))));
        })))) : para("Nenhuma letra encontrada. Tente o nome da música e do artista."));
      }, function () {
        return body.replaceChildren(para(NOCONN));
      });
    };
    var lyr = function lyr(x) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Músicas"));
        body.replaceChildren(h("h2", {
          class: "ah"
        }, x.trackName), h("p", {
          class: "muted"
        }, x.artistName + (x.albumName ? " · " + x.albumName : "")), h("pre", {
          class: "lyr"
        }, x.plainLyrics), note("Letra: LRCLIB."));
        window.scrollTo(0, 0);
      }, function () {
        top.replaceChildren(h("div", {
          class: "row"
        }, q, btn("Buscar", list, "solid")));
        list();
      });
    };
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && list();
    });
    top.replaceChildren(h("div", {
      class: "row"
    }, q, btn("Buscar", list, "solid")));
    b.append(top, body);
    list();
  });
  var POETAS = ["Olavo Bilac", "Gonçalves Dias", "Castro Alves", "Cruz e Sousa", "Álvares de Azevedo", "Casimiro de Abreu", "Augusto dos Anjos", "Fernando Pessoa", "Florbela Espanca", "Luís de Camões", "Bocage", "Antero de Quental", "Raimundo Correia", "Machado de Assis", "Alphonsus de Guimaraens", "Fagundes Varela"];
  var WS = "https://pt.wikisource.org/w/api.php?format=json&origin=*&";
  function poemsBy(a) {
    return api(WS + "action=query&list=search&srlimit=50&srnamespace=0&srsearch=" + encodeURIComponent('insource:"<poem>" "' + a + '"')).then(function (j) {
      var all = (j.query.search || []).map(function (x) {
          return x.title;
        }).filter(function (t) {
          return !/\/|Índice|Galeria|Autor:/.test(t);
        }),
        own = all.filter(function (t) {
          return t.indexOf("(" + a + ")") >= 0;
        });
      return own.length ? own : all;
    });
  }
  function poemText(title) {
    return api(WS + "action=parse&prop=text&redirects=1&page=" + encodeURIComponent(title)).then(function (j) {
      var d = new DOMParser().parseFromString(j.parse.text["*"], "text/html"),
        ps = d.querySelectorAll(".poem");
      if (!ps.length) throw new Error("sem poema");
      return Array.prototype.map.call(ps, function (p) {
        return p.textContent.replace(/ /g, " ").replace(/^\n+|\n+$/g, "");
      }).join("\n\n").replace(/\n{3,}/g, "\n\n").slice(0, 6000);
    });
  }
  add("c_poesia", "Poesia", "pen", "Cultura", function (b) {
    var st = X("poesia", {
        a: ""
      }),
      top = h("div"),
      out = h("div");
    var show = function show() {
      var a = st.a || pick(POETAS);
      out.replaceChildren(note("Escolhendo um poema de " + a + "…"));
      poemsBy(a).then(function (ts) {
        if (!ts.length) throw 0;
        var _tryOne = function tryOne(n) {
          var t = pick(ts);
          return poemText(t).then(function (tx) {
            return {
              t: t,
              tx: tx
            };
          }, function (e) {
            return n > 0 ? _tryOne(n - 1) : Promise.reject(e);
          });
        };
        return _tryOne(4);
      }).then(function (r) {
        return out.replaceChildren(h("div", {
          class: "poem"
        }, h("h2", {
          class: "ah"
        }, r.t.replace(/\s*\([^)]*\)\s*$/, "")), h("p", {
          class: "muted"
        }, a), h("pre", {
          class: "lyr"
        }, r.tx)), note("Domínio público · Wikisource"));
      }, function () {
        return out.replaceChildren(para("Não consegui carregar um poema agora. Tente de novo."));
      });
    };
    var _draw15 = function draw() {
      return top.replaceChildren(segTabs([["", "Qualquer poeta"]].concat(POETAS.map(function (p) {
        return [p, p];
      })), st.a, function (k) {
        st.a = k;
        save();
        _draw15();
        show();
      }));
    };
    b.append(top, out, btn("Outro poema", show, "solid wide"));
    _draw15();
    show();
  });
  var PIADAS = ["Por que o livro de matemática ficou triste? Porque tinha muitos problemas.", "O que o zero disse para o oito? Que cinto bonito!", "Qual é o café mais perigoso do mundo? O ex-presso.", "Por que a planta não responde? Porque ela é muda.", "O que é um pontinho amarelo no céu? Um yellowcóptero.", "Qual é o animal mais antigo? A zebra, porque é em preto e branco.", "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano.", "O que o tomate foi fazer no banco? Tirar extrato.", "Qual é o rei dos queijos? O reiqueijão.", "O que a vaca foi fazer no espaço? Visitar a via láctea.", "Por que o espantalho ganhou um prêmio? Porque era excelente no seu campo.", "O que o pato disse para a pata? Vem quá!", "Qual é a cidade brasileira que não tem táxi? Uberlândia.", "Por que a galinha atravessou a rua? Para chegar ao outro lado, ué.", "O que é que a impressora disse para a folha? Essa impressão é sua.", "Qual o doce preferido do átomo? Pé de moléculas.", "Por que o computador foi ao médico? Porque estava com vírus.", "O que o celular disse para o carregador? Você me completa.", "Qual é o peixe que caiu do décimo andar? Aaaaaaatum!", "Como o elétron atende o telefone? Próton!", "O que o mar disse para a praia? Nada, só deu uma onda.", "Por que a vassoura chegou atrasada? Porque varreu da memória.", "Qual é o contrário de volátil? Vem cá, sobrinho.", "O que um cromossomo disse para o outro? Cromossomos bonitos!", "Por que a aranha é o animal mais carente? Porque é um aracnídeo.", "Qual é o lugar mais frio da casa? O cantinho, porque fica a 90 graus.", "O que o advogado do frango foi fazer na delegacia? Soltar a franga.", "Por que o pinheiro não se perde na floresta? Porque ele tem uma pinha.", "Qual é a fruta que anda de trem? O kiwiiii.", "O que é um vegetariano que come carne? Um ex-vegetariano.", "Por que o fantasma não mente? Porque dá para ver através dele.", "O que o pão francês disse para o pão de forma? Fica fatiado aí.", "Qual é o animal que não vale mais nada? O javali.", "Como se chama o boi que entende de tecnologia? Boi-telecom.", "O que a xícara disse para o pires? Você é meu suporte.", "Por que o músico foi preso? Porque estava sempre de dó.", "Qual é o cúmulo da paciência? Esperar o sinal abrir num semáforo desenhado.", "O que o relógio de parede disse para o de pulso? Sai do meu pé!", "Por que a geladeira foi ao psicólogo? Estava muito fria com as pessoas.", "Qual o nome do peixe que tem conta no banco? O pix-e."];
  add("x_piada", "Piadas", "chat", "Diversão", function (b) {
    var st = X("piadas", {
        seen: []
      }),
      out = h("div", {
        class: "fact"
      });
    var next = function next() {
      var pool = PIADAS.map(function (_, i) {
        return i;
      }).filter(function (i) {
        return st.seen.indexOf(i) < 0;
      });
      if (!pool.length) {
        st.seen = [];
        pool = PIADAS.map(function (_, i) {
          return i;
        });
      }
      var i = pick(pool);
      st.seen.push(i);
      save();
      var t = PIADAS[i],
        k = t.indexOf("?"),
        q = k > 0 ? t.slice(0, k + 1) : t,
        a = k > 0 ? t.slice(k + 1).trim() : "",
        ans = h("p", {
          class: "ftx",
          style: "display:none"
        }, h("b", {}, a));
      out.replaceChildren(h("p", {
        class: "ftx"
      }, q), ans, a ? btn("Ver resposta", function (e) {
        show(ans, true);
        e.target.style.display = "none";
      }) : null);
    };
    b.append(out, btn("Outra piada", next, "solid wide"));
    next();
  });
  ;
  var REGRAS = ["Seja gentil. Nada de ofensas, preconceito ou assédio.", "Sem spam, propaganda ou correntes.", "Não publique dados pessoais (seus ou de outras pessoas).", "Nada de conteúdo adulto, violento ou ilegal.", "Denuncie o que quebrar as regras: com 3 denúncias o conteúdo some."];
  var REGRAS_V = 1;
  function rulesNode() {
    return h.apply(void 0, ["ol", {
      class: "rules"
    }].concat(_toConsumableArray(REGRAS.map(function (r) {
      return h("li", {}, r);
    }))));
  }
  function ago(s) {
    var d = (Date.now() - new Date(s).getTime()) / 1000;
    return d < 60 ? "agora" : d < 3600 ? Math.floor(d / 60) + " min" : d < 86400 ? Math.floor(d / 3600) + " h" : d < 7 * 86400 ? Math.floor(d / 86400) + " d" : dbr(String(s).slice(0, 10));
  }
  function dbGet(path) {
    return (session ? ensureToken() : Promise.resolve()).then(function () {
      return sbCall("GET", "/rest/v1/" + path, null, !!session);
    });
  }
  function dbPost(table, row) {
    return ensureToken().then(function () {
      return sbCall("POST", "/rest/v1/" + table, row, true, {
        Prefer: "return=representation"
      });
    });
  }
  function dbDel(table, id) {
    return ensureToken().then(function () {
      return sbCall("DELETE", "/rest/v1/" + table + "?id=eq." + id, null, true, {
        Prefer: "return=minimal"
      });
    });
  }
  function report(kind, id) {
    if (!session) return toast("Entre para denunciar");
    if (!confirm("Denunciar este conteúdo por quebrar as regras?")) return;
    ensureToken().then(function () {
      return sbCall("POST", "/rest/v1/unkindle_reports", {
        kind: kind,
        ref_id: id
      }, true, {
        Prefer: "return=minimal"
      });
    }).then(function () {
      return toast("Denúncia enviada. Obrigado!");
    }, function () {
      return toast("Você já denunciou isso.");
    });
  }
  function commErr(e) {
    var m = String(e && e.message || "");
    if (/relation|does not exist|schema cache|404/i.test(m)) return "A comunidade ainda não foi ativada no Supabase (rode o supabase.sql).";
    if (/@/.test(m) || /Calma/.test(m)) return m;
    return NOCONN;
  }
  function canPost(onOk) {
    if (!remote) {
      toast("A conta não está configurada.");
      return false;
    }
    if (!session) {
      toast("Entre na sua conta para participar");
      pages.auth("in");
      return false;
    }
    if (!session.user.username) {
      toast("Escolha seu @ antes de participar");
      pages.auth();
      return false;
    }
    if (S.x.rulesOk !== REGRAS_V) {
      modal(h("h2", {}, "Regras da comunidade"), rulesNode(), h("p", {
        class: "muted"
      }, "Ao participar você concorda com essas regras. Quem desrespeitar pode ter o conteúdo removido."), btn("Concordo", function () {
        S.x.rulesOk = REGRAS_V;
        save();
        closeModal();
        if (onOk) setTimeout(onOk, 300);
      }, "solid wide"));
      return false;
    }
    return true;
  }
  function whoBar(b) {
    return session && session.user.username ? null : h("div", {
      class: "tip"
    }, session ? "Escolha seu @ na página da conta para participar." : "Você pode ler à vontade. Para participar, entre na sua conta.", " ", h("button", {
      class: "lnk",
      onclick: function onclick() {
        return pages.auth(session ? undefined : "in");
      }
    }, session ? "Escolher @" : "Entrar"));
  }
  function mine(r) {
    return session && r.user_id === session.user.id;
  }
  function postActs(r, kind, onDel) {
    var m = postMeta(r, kind, onDel);
    m.removeChild(m.firstChild);
    return m;
  }
  function postMeta(r, kind, onDel) {
    return h("span", {
      class: "pmeta"
    }, "@" + r.username + " · " + ago(r.created_at), " ", mine(r) ? h("button", {
      class: "lnk",
      onclick: function onclick() {
        if (confirm("Apagar?")) dbDel(kind === "post" ? "unkindle_posts" : kind === "topic" ? "unkindle_topics" : kind === "chat" ? "unkindle_chat" : "unkindle_polls", r.id).then(onDel, function () {
          return toast("Não foi possível apagar");
        });
      }
    }, "apagar") : h("button", {
      class: "lnk",
      onclick: function onclick() {
        return report(kind, r.id);
      }
    }, "denunciar"));
  }
  function avatar(name, size) {
    var hsh = 2166136261;
    var s = String(name || "?");
    for (var i = 0; i < s.length; i++) {
      hsh ^= s.charCodeAt(i);
      hsh = hsh * 16777619 >>> 0;
    }
    var d = "";
    for (var y = 0; y < 5; y++) for (var x = 0; x < 3; x++) if (hsh >> y * 3 + x & 1) {
      d += "M" + (x + 1) + " " + (y + 1) + "h1v1h-1z";
      if (x < 2) d += "M" + (5 - x) + " " + (y + 1) + "h1v1h-1z";
    }
    var sp = document.createElement("span");
    sp.className = "av";
    size = size || 32;
    sp.innerHTML = '<svg viewBox="0 0 7 7" width="' + size + '" height="' + size + '" shape-rendering="crispEdges" aria-hidden="true"><rect x="0" y="0" width="7" height="7" fill="none" stroke="currentColor" stroke-width=".6"/><path fill="currentColor" d="' + (d || "M3 3h1v1h-1z") + '"/></svg>';
    return sp;
  }
  function richText(t) {
    var box = h("div", {
      class: "rtx"
    });
    String(t || "").split("\n").forEach(function (line) {
      var q = /^>\s?/.test(line),
        el = h(q ? "blockquote" : "div", {
          class: q ? "qt" : ""
        });
      var src = q ? line.replace(/^>\s?/, "") : line,
        re = /(https?:\/\/[^\s]+)|(@[a-z0-9_.]{3,20})/gi;
      var last = 0,
        m;
      var _loop8 = function _loop8() {
        if (m.index > last) el.appendChild(document.createTextNode(src.slice(last, m.index)));
        if (m[1]) {
          var u = m[1];
          el.appendChild(h("a", {
            href: "#",
            class: "blink",
            onclick: function onclick(e) {
              e.preventDefault();
              S.x.browserOpen = u;
              save();
              openApp("browser");
              return false;
            }
          }, u.replace(/^https?:\/\//, "").slice(0, 40)));
        } else el.appendChild(h("b", {
          class: "mention" + (session && session.user.username && m[2].slice(1).toLowerCase() === session.user.username ? " me" : "")
        }, m[2]));
        last = m.index + m[0].length;
      };
      while (m = re.exec(src)) {
        _loop8();
      }
      if (last < src.length) el.appendChild(document.createTextNode(src.slice(last)));
      if (!line) el.appendChild(h("br"));
      box.appendChild(el);
    });
    return box;
  }
  function dayLabel(s) {
    var d = new Date(s),
      n = new Date(),
      y = new Date(Date.now() - 864e5),
      same = function same(a, b) {
        return a.toDateString() === b.toDateString();
      };
    return same(d, n) ? "Hoje" : same(d, y) ? "Ontem" : pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear();
  }
  var FCATS = ["Geral", "Leitura", "Kindle e e-readers", "Tecnologia", "Jogos", "Ajuda", "Bate-papo"];
  add("forum", "Fórum", "forum", "Comunidade", function (b) {
    var st = X("forum", {
        cat: "",
        sort: "ativos",
        q: ""
      }),
      seen = X("forumSeen", {}),
      top = h("div"),
      body = h("div");
    var page = 0,
      timer = null;
    b.append(whoBar(b), top, body);
    var ORD = {
      ativos: "last_at.desc",
      novos: "id.desc",
      populares: "replies.desc,last_at.desc"
    };
    var topicRow = function topicRow(r) {
      var isNew = !seen[r.id] || seen[r.id] < new Date(r.last_at).getTime();
      return h("li", {
        class: "nw fti"
      }, h("span", {
        class: "fav",
        onclick: function onclick() {
          return topic(r.id);
        }
      }, avatar(r.username, 36)), h("span", {
        onclick: function onclick() {
          return topic(r.id);
        }
      }, h("b", {}, isNew ? h("i", {
        class: "badge"
      }, "NOVO") : null, r.title), h("small", {
        class: "ex"
      }, String(r.body || "").replace(/\s+/g, " ").slice(0, 110)), h("small", {}, "@" + r.username + " · " + r.cat + " · " + ago(r.last_at))), h("span", {
        class: "rc",
        onclick: function onclick() {
          return topic(r.id);
        }
      }, h("b", {}, String(r.replies)), h("small", {}, r.replies === 1 ? "resp." : "resps.")));
    };
    var _list2 = function list(more) {
      clearInterval(timer);
      if (!more) page = 0;
      var q = inp("Buscar no fórum", "search", {
        value: st.q
      });
      q.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          st.q = q.value.trim();
          save();
          _list2();
        }
      });
      top.replaceChildren(h("div", {
        class: "row"
      }, q, btn("Buscar", function () {
        st.q = q.value.trim();
        save();
        _list2();
      })), segTabs([["", "Todos"]].concat(FCATS.map(function (c) {
        return [c, c];
      })), st.cat, function (k) {
        st.cat = k;
        save();
        _list2();
      }), segTabs([["ativos", "Ativos"], ["novos", "Novos"], ["populares", "Populares"]], st.sort, function (k) {
        st.sort = k;
        save();
        _list2();
      }), h("div", {
        class: "row"
      }, btn("Novo tópico", function () {
        if (canPost(newTopic)) newTopic();
      }, "solid"), btn("Regras", function () {
        return modal(h("h2", {}, "Regras"), rulesNode());
      })));
      if (!more) body.replaceChildren(note("Carregando tópicos…"));
      var flt = (st.cat ? "&cat=eq." + encodeURIComponent(st.cat) : "") + (st.q ? "&or=(title.ilike.*" + encodeURIComponent(st.q.replace(/[*,()]/g, " ")) + "*,body.ilike.*" + encodeURIComponent(st.q.replace(/[*,()]/g, " ")) + "*)" : "");
      dbGet("unkindle_topics?select=id,user_id,username,cat,title,body,replies,created_at,last_at&order=" + ORD[st.sort] + "&limit=25&offset=" + page * 25 + flt).then(function (rows) {
        var ul = more ? body.querySelector("ul.list") : h("ul", {
          class: "list"
        });
        rows.forEach(function (r) {
          return ul.appendChild(topicRow(r));
        });
        var moreBtn = rows.length === 25 ? btn("Carregar mais", function () {
          page++;
          moreBtn.parentNode && moreBtn.parentNode.removeChild(moreBtn);
          _list2(true);
        }) : null;
        if (!more) body.replaceChildren(rows.length ? ul : h("div", {
          class: "empty2"
        }, st.q ? "Nada encontrado para “" + st.q + "”." : "Nenhum tópico ainda. Que tal abrir o primeiro?"), moreBtn);else if (moreBtn) body.appendChild(moreBtn);
      }, function (e) {
        return body.replaceChildren(para(commErr(e)));
      });
    };
    var topic = function topic(id) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Fórum"));
        body.replaceChildren(note("Abrindo…"));
        window.scrollTo(0, 0);
        var ta = h("textarea", {
            placeholder: "Escreva sua resposta… (use @nome para chamar alguém)",
            style: "min-height:110px"
          }),
          m = h("p", {
            class: "muted"
          }),
          thread = h("div");
        var count = -1;
        var quote = function quote(who, txt0) {
          ta.value = "> @" + who + ": " + String(txt0).replace(/\n+/g, " ").slice(0, 160) + "\n\n" + ta.value;
          ta.focus();
          ta.scrollIntoView && ta.scrollIntoView();
        };
        var post = function post(r, n, first) {
          return h("div", {
            class: "post" + (first ? " first" : "")
          }, h("div", {
            class: "ph"
          }, avatar(r.username, 28), h("b", {}, " @" + r.username), h("small", {}, "  #" + n + " · " + ago(r.created_at))), richText(r.body), h("div", {
            class: "pa"
          }, h("button", {
            class: "lnk",
            onclick: function onclick() {
              if (canPost()) quote(r.username, r.body);
            }
          }, "citar"), postActs(r, first ? "topic" : "post", function () {
            return first ? history.back() : _load();
          })));
        };
        var _load = function load() {
          return Promise.all([dbGet("unkindle_topics?id=eq." + id + "&select=*"), dbGet("unkindle_posts?topic_id=eq." + id + "&select=*&order=id.asc&limit=500")]).then(function (_ref30) {
            var _ref31 = _slicedToArray(_ref30, 2),
              t = _ref31[0],
              ps = _ref31[1];
            if (!t.length) return body.replaceChildren(para("Esse tópico não existe mais."));
            var T = t[0];
            seen[id] = Date.now();
            save();
            if (ps.length === count) return;
            count = ps.length;
            thread.replaceChildren.apply(thread, [post(T, 1, true), h("div", {
              class: "lbl2"
            }, ps.length + (ps.length === 1 ? " resposta" : " respostas"))].concat(_toConsumableArray(ps.map(function (p, i) {
              return post(p, i + 2);
            }))));
            if (!body.contains(thread)) body.replaceChildren(h("div", {
              class: "kick2"
            }, T.cat), h("h2", {
              class: "ah"
            }, T.title), thread, h("div", {
              class: "lbl2"
            }, "Responder"), ta, h("div", {
              class: "row"
            }, btn("Enviar resposta", _send, "solid"), btn("Atualizar", _load)), m);
          }, function (e) {
            return body.replaceChildren(para(commErr(e)));
          });
        };
        var _send = function send() {
          var v = ta.value.trim();
          if (!v) return;
          if (!canPost(_send)) return;
          m.textContent = "Enviando…";
          dbPost("unkindle_posts", {
            topic_id: id,
            body: v.slice(0, 3000)
          }).then(function () {
            ta.value = "";
            snapDrafts();
            m.textContent = "Resposta enviada.";
            _load();
          }, function (e) {
            m.textContent = commErr(e);
          });
        };
        _load();
        clearInterval(timer);
        timer = setInterval(function () {
          if (!document.hidden) _load();
        }, 30000);
      }, function () {
        return _list2();
      });
    };
    var newTopic = function newTopic() {
      return subView(b, function () {
        clearInterval(timer);
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Fórum"));
        var cat = h.apply(void 0, ["select", {}].concat(_toConsumableArray(FCATS.map(function (c) {
            return h("option", {
              value: c,
              selected: c === (st.cat || "Geral") ? "selected" : false
            }, c);
          })))),
          t = inp("Título do tópico"),
          ta = h("textarea", {
            placeholder: "O que você quer dizer?",
            style: "min-height:160px"
          }),
          m = h("p", {
            class: "muted"
          }),
          cnt = h("small", {
            class: "muted"
          }, "0/5000");
        ta.addEventListener("input", function () {
          cnt.textContent = ta.value.length + "/5000";
        }, false);
        body.replaceChildren(h("div", {
          class: "cvbox"
        }, h("label", {}, "Categoria"), cat, h("label", {}, "Título"), t, h("label", {}, "Mensagem"), ta, cnt), m, btn("Publicar", function () {
          if (t.value.trim().length < 3 || !ta.value.trim()) {
            m.textContent = "Escreva um título (3+ letras) e a mensagem.";
            return;
          }
          m.textContent = "Publicando…";
          dbPost("unkindle_topics", {
            cat: cat.value,
            title: t.value.trim().slice(0, 120),
            body: ta.value.trim().slice(0, 5000)
          }).then(function (r) {
            t.value = ta.value = "";
            snapDrafts();
            history.back();
            setTimeout(function () {
              return topic(r[0].id);
            }, 250);
          }, function (e) {
            m.textContent = commErr(e);
          });
        }, "solid wide"));
      }, function () {
        return _list2();
      });
    };
    onClose(b, function () {
      return clearInterval(timer);
    });
    _list2();
  });
  var SALAS = [["geral", "Geral"], ["livros", "Livros"], ["kindle", "Kindle"], ["jogos", "Jogos"], ["off", "Off-topic"]];
  add("chat", "UnChat", "chat", "Comunidade", function (b) {
    var st = X("unchat", {
        room: "geral"
      }),
      seenR = X("chatSeen", {}),
      top = h("div"),
      info = h("div", {
        class: "chatinfo"
      }),
      box = h("div", {
        class: "chatbox"
      }),
      newBtn = h("button", {
        class: "newmsg",
        onclick: function onclick() {
          box.scrollTop = box.scrollHeight;
          show(newBtn, false);
        }
      }, "↓ Mensagens novas");
    var inpM = inp("Mensagem… (@nome para chamar alguém)"),
      cnt = h("small", {
        class: "muted"
      }, "0/500"),
      m = h("p", {
        class: "muted"
      });
    var rows = [],
      first = 0,
      last = 0,
      timer = null,
      busy = false,
      unread = {};
    show(newBtn, false);
    inpM.setAttribute("maxlength", "500");
    inpM.addEventListener("input", function () {
      cnt.textContent = inpM.value.length + "/500";
    }, false);
    var atEnd = function atEnd() {
      return box.scrollTop + box.clientHeight >= box.scrollHeight - 40;
    };
    var _paint = function paint(keep) {
      var wasEnd = atEnd(),
        oldH = box.scrollHeight,
        oldTop = box.scrollTop,
        nodes = [];
      if (rows.length >= 60 || first > 1) nodes.push(h("div", {
        class: "older"
      }, btn("Carregar mensagens anteriores", older)));
      var prevDay = "",
        prev = null;
      rows.forEach(function (r) {
        var dl = dayLabel(r.created_at);
        if (dl !== prevDay) {
          nodes.push(h("div", {
            class: "day"
          }, dl));
          prevDay = dl;
          prev = null;
        }
        var grouped = prev && prev.username === r.username && new Date(r.created_at) - new Date(prev.created_at) < 5 * 60000,
          me = mine(r);
        var mentioned = session && session.user.username && new RegExp("@" + session.user.username + "\\b", "i").test(r.msg);
        nodes.push(h("div", {
          class: "cm" + (me ? " me" : "") + (grouped ? " g" : "") + (mentioned ? " at" : "")
        }, grouped ? null : h("div", {
          class: "ch"
        }, avatar(r.username, 24), h("b", {
          class: "cu"
        }, " @" + r.username), h("span", {
          class: "ct"
        }, " " + new Date(r.created_at).toTimeString().slice(0, 5))), h("div", {
          class: "cx"
        }, richText(r.msg)), h("div", {
          class: "ca"
        }, me ? null : h("button", {
          class: "lnk",
          onclick: function onclick() {
            inpM.value = "@" + r.username + " " + inpM.value;
            inpM.focus();
          }
        }, "responder"), h("button", {
          class: "lnk",
          onclick: function onclick() {
            return me ? dbDel("unkindle_chat", r.id).then(function () {
              rows = rows.filter(function (x) {
                return x.id !== r.id;
              });
              _paint(true);
            }) : report("chat", r.id);
          }
        }, me ? "apagar" : "denunciar"))));
        prev = r;
      });
      if (!rows.length) nodes.push(h("div", {
        class: "empty2"
      }, "Ninguém falou nada ainda nesta sala. Diga oi!"));
      box.replaceChildren.apply(box, nodes);
      if (keep === "older") box.scrollTop = box.scrollHeight - oldH + oldTop;else if (wasEnd || !box._init) {
        box.scrollTop = box.scrollHeight;
        box._init = 1;
        show(newBtn, false);
      } else if (keep !== true) show(newBtn, true);
      var people = {};
      rows.forEach(function (r) {
        if (Date.now() - new Date(r.created_at) < 36e5) people[r.username] = 1;
      });
      var n = Object.keys(people).length;
      info.textContent = n ? n + (n === 1 ? " pessoa conversou" : " pessoas conversaram") + " aqui na última hora" : "Sala tranquila no momento";
    };
    var poll = function poll() {
      if (busy || document.hidden) return;
      busy = true;
      dbGet("unkindle_chat?room=eq." + st.room + "&select=id,user_id,username,msg,created_at&order=id.desc&limit=60" + (last ? "&id=gt." + last : "")).then(function (r) {
        busy = false;
        if (r.length) {
          var add2 = r.reverse();
          rows = rows.concat(add2).slice(-300);
          last = rows[rows.length - 1].id;
          if (!first) first = rows[0].id;
          seenR[st.room] = last;
          save();
          _paint();
        } else if (!box._init) _paint();
        m.textContent = "";
      }, function (e) {
        busy = false;
        if (!rows.length) box.replaceChildren(h("div", {
          class: "empty2"
        }, commErr(e)));else m.textContent = commErr(e);
      });
    };
    var older = function older() {
      if (!rows.length) return;
      dbGet("unkindle_chat?room=eq." + st.room + "&select=id,user_id,username,msg,created_at&order=id.desc&limit=60&id=lt." + rows[0].id).then(function (r) {
        if (!r.length) {
          first = 1;
          toast("Esse é o começo da conversa");
          _paint(true);
          return;
        }
        rows = r.reverse().concat(rows);
        first = rows[0].id;
        _paint("older");
      });
    };
    var roomsUnread = function roomsUnread() {
      return dbGet("unkindle_chat?select=room,id&order=id.desc&limit=200").then(function (r) {
        unread = {};
        r.forEach(function (x) {
          if (x.room !== st.room && x.id > (seenR[x.room] || 0)) unread[x.room] = (unread[x.room] || 0) + 1;
        });
        draw();
      }, function () {});
    };
    var enter = function enter(room) {
      st.room = room;
      save();
      rows = [];
      first = 0;
      last = 0;
      box._init = 0;
      unread[room] = 0;
      box.replaceChildren(note("Entrando na sala…"));
      draw();
      poll();
    };
    var _send2 = function send() {
      var v = inpM.value.trim();
      if (!v) return;
      if (!canPost(_send2)) return;
      m.textContent = "Enviando…";
      dbPost("unkindle_chat", {
        room: st.room,
        msg: v.slice(0, 500)
      }).then(function () {
        inpM.value = "";
        cnt.textContent = "0/500";
        m.textContent = "";
        box._init = 0;
        poll();
      }, function (e) {
        m.textContent = commErr(e);
      });
    };
    var draw = function draw() {
      return top.replaceChildren(segTabs(SALAS.map(function (s) {
        return [s[0], s[1] + (unread[s[0]] ? " (" + (unread[s[0]] > 9 ? "9+" : unread[s[0]]) + ")" : "")];
      }), st.room, enter));
    };
    box.addEventListener("scroll", function () {
      if (atEnd()) show(newBtn, false);
    }, false);
    inpM.addEventListener("keydown", function (e) {
      return e.key === "Enter" && _send2();
    });
    timer = setInterval(poll, 4000);
    var t2 = setInterval(roomsUnread, 30000);
    onClose(b, function () {
      clearInterval(timer);
      clearInterval(t2);
    });
    b.append(whoBar(b), top, info, h("div", {
      class: "chatwrap"
    }, box, newBtn), h("div", {
      class: "bar"
    }, h("span", {}, inpM), h("span", {}, btn("Enviar", _send2, "solid"))), h("div", {
      class: "row"
    }, cnt, " ", h("button", {
      class: "lnk",
      onclick: function onclick() {
        return modal(h("h2", {}, "Regras"), rulesNode());
      }
    }, "Regras da sala")), m);
    enter(st.room);
    roomsUnread();
  });
  add("polls", "Enquetes", "chart", "Comunidade", function (b) {
    var top = h("div"),
      body = h("div");
    b.append(whoBar(b), top, body);
    var myVotes = {};
    var bars = function bars(p) {
      var v = p.votes && p.votes.length ? p.votes : p.opts.map(function () {
          return 0;
        }),
        tot = v.reduce(function (a, x) {
          return a + x;
        }, 0) || 0;
      return h.apply(void 0, ["div", {
        class: "poll"
      }, h("b", {
        class: "pq"
      }, p.q)].concat(_toConsumableArray(p.opts.map(function (o, i) {
        var pc = tot ? Math.round(v[i] * 100 / tot) : 0;
        return h("div", {
          class: "po" + (myVotes[p.id] === i ? " mine" : ""),
          onclick: function onclick() {
            return _vote(p, i);
          }
        }, h("div", {
          class: "pl"
        }, h("span", {}, o), h("span", {}, pc + "% · " + v[i])), h("div", {
          class: "pb"
        }, h("i", {
          style: "width:" + pc + "%"
        })));
      })), [h("div", {}, h("small", {
        class: "muted"
      }, tot + (tot === 1 ? " voto" : " votos") + " · "), postMeta(p, "poll", list))]));
    };
    var _vote = function vote(p, i) {
      if (!canPost(function () {
        return _vote(p, i);
      })) return;
      ensureToken().then(function () {
        return sbCall("POST", "/rest/v1/unkindle_poll_votes?on_conflict=poll_id,user_id", {
          poll_id: p.id,
          opt: i
        }, true, {
          Prefer: "resolution=merge-duplicates,return=minimal"
        });
      }).then(function () {
        myVotes[p.id] = i;
        toast("Voto registrado");
        list();
      }, function (e) {
        return toast(commErr(e));
      });
    };
    var list = function list() {
      top.replaceChildren(btn("Criar enquete", function () {
        if (canPost(create)) create();
      }, "solid"));
      body.replaceChildren(note("Carregando…"));
      var mineQ = session ? dbGet("unkindle_poll_votes?select=poll_id,opt&user_id=eq." + session.user.id).then(function (r) {
        return r.forEach(function (x) {
          myVotes[x.poll_id] = x.opt;
        });
      }, function () {}) : Promise.resolve();
      mineQ.then(function () {
        return dbGet("unkindle_polls?select=*&order=id.desc&limit=40");
      }).then(function (r) {
        return body.replaceChildren.apply(body, _toConsumableArray(r.length ? r.map(bars) : [h("div", {
          class: "empty2"
        }, "Nenhuma enquete ainda. Crie a primeira!")]));
      }, function (e) {
        return body.replaceChildren(para(commErr(e)));
      });
    };
    var create = function create() {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Enquetes"));
        var q = inp("Pergunta"),
          os = [inp("Opção 1"), inp("Opção 2"), inp("Opção 3 (opcional)"), inp("Opção 4 (opcional)")],
          m = h("p", {
            class: "muted"
          });
        body.replaceChildren(h.apply(void 0, ["div", {
          class: "cvbox"
        }, h("label", {}, "Pergunta"), q, h("label", {}, "Opções")].concat(os)), m, btn("Publicar enquete", function () {
          var o = os.map(function (x) {
            return x.value.trim();
          }).filter(Boolean);
          if (q.value.trim().length < 3 || o.length < 2) {
            m.textContent = "Escreva a pergunta e pelo menos 2 opções.";
            return;
          }
          m.textContent = "Publicando…";
          dbPost("unkindle_polls", {
            q: q.value.trim(),
            opts: o
          }).then(function () {
            q.value = "";
            os.forEach(function (x) {
              x.value = "";
            });
            snapDrafts();
            history.back();
          }, function (e) {
            m.textContent = commErr(e);
          });
        }, "solid wide"));
      }, list);
    };
    list();
  });
  add("library", "Biblioteca", "reading", "Essenciais", function (b) {
    var lib = X("lib", {
        books: {},
        size: 19
      }),
      top = h("div"),
      body = h("div");
    b.append(top, body);
    var fmtTxt = function fmtTxt(bk) {
      return bk.formats["text/plain; charset=utf-8"] || bk.formats["text/plain; charset=us-ascii"] || bk.formats["text/plain"] || Object.keys(bk.formats).filter(function (k) {
        return /^text\/plain/.test(k);
      }).map(function (k) {
        return bk.formats[k];
      })[0];
    };
    var author = function author(bk) {
      return bk.authors && bk.authors[0] ? bk.authors[0].name.replace(/^([^,]+), (.+)$/, "$2 $1") : "Autor desconhecido";
    };
    var home = function home() {
      var q = inp("Título ou autor (ex.: Machado de Assis)", "search"),
        res = h("div");
      var search = function search(term) {
        res.replaceChildren(note("Buscando livros…"));
        api("https://gutendex.com/books/?languages=pt" + (term ? "&search=" + encodeURIComponent(term) : "")).then(function (j) {
          var r = j.results.filter(fmtTxt);
          res.replaceChildren(r.length ? h.apply(void 0, ["ul", {
            class: "list"
          }].concat(_toConsumableArray(r.map(function (bk) {
            return h("li", {
              class: "nw",
              onclick: function onclick() {
                return read({
                  id: bk.id,
                  t: bk.title,
                  a: author(bk),
                  u: fmtTxt(bk)
                });
              }
            }, h("span", {}, h("b", {}, bk.title), h("small", {}, author(bk) + " · " + num(bk.download_count) + " leituras")));
          })))) : para("Nenhum livro encontrado."));
        }, function () {
          return res.replaceChildren(para(NOCONN));
        });
      };
      q.addEventListener("keydown", function (e) {
        return e.key === "Enter" && search(q.value.trim());
      });
      var cont = Object.keys(lib.books).map(function (k) {
        return lib.books[k];
      }).sort(function (x, y) {
        return (y.at || 0) - (x.at || 0);
      });
      top.replaceChildren(h("div", {
        class: "row"
      }, q, btn("Buscar", function () {
        return search(q.value.trim());
      }, "solid")));
      body.replaceChildren(cont.length ? h("div", {}, h("div", {
        class: "lbl2"
      }, "Continuar lendo"), h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(cont.map(function (bk) {
        return h("li", {
          class: "nw",
          onclick: function onclick() {
            return read(bk);
          }
        }, h("span", {}, h("b", {}, bk.t), h("small", {}, bk.a + " · página " + ((bk.p || 0) + 1) + (bk.n ? " de " + bk.n : ""))));
      }))))) : null, h("div", {
        class: "lbl2"
      }, "Livros em português"), res, note("Obras em domínio público do Projeto Gutenberg."));
      search("");
    };
    var read = function read(meta) {
      return subView(b, function () {
        var bk = lib.books[meta.id] = Object.assign({
          p: 0
        }, lib.books[meta.id] || {}, {
          id: meta.id,
          t: meta.t,
          a: meta.a,
          u: meta.u,
          at: Date.now()
        });
        save();
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Biblioteca"));
        body.replaceChildren(note("Baixando o livro…"));
        window.scrollTo(0, 0);
        fetchPage(bk.u).then(function (raw) {
          var t = raw.replace(/\r/g, "");
          var s0 = t.search(/\*\*\* ?START OF (THE|THIS) PROJECT GUTENBERG[^\n]*\n/i),
            e0 = t.search(/\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG/i);
          if (s0 >= 0) t = t.slice(t.indexOf("\n", s0) + 1);
          if (e0 >= 0) t = t.slice(0, t.search(/\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG/i));
          t = t.replace(/([^\n])\n(?!\n)/g, "$1 ").replace(/\n{3,}/g, "\n\n").trim();
          var PER = 1800,
            pages = [];
          var i = 0;
          while (i < t.length) {
            var j = Math.min(t.length, i + PER);
            if (j < t.length) {
              var k = t.lastIndexOf("\n\n", j);
              var k2 = t.lastIndexOf(". ", j);
              j = k > i + PER * .6 ? k : k2 > i + PER * .6 ? k2 + 1 : j;
            }
            pages.push(t.slice(i, j).trim());
            i = j;
          }
          bk.n = pages.length;
          save();
          var pg = h("div", {
              class: "bookpg"
            }),
            info = h("div", {
              class: "bookinfo"
            });
          var show = function show() {
            bk.p = Math.max(0, Math.min(pages.length - 1, bk.p));
            pg.style.fontSize = lib.size + "px";
            pg.replaceChildren.apply(pg, _toConsumableArray(pages[bk.p].split(/\n\n/).map(function (x) {
              return h("p", {}, x);
            })));
            info.textContent = "Página " + (bk.p + 1) + " de " + pages.length + " · " + Math.round((bk.p + 1) * 100 / pages.length) + "%";
            bk.at = Date.now();
            save();
            window.scrollTo(0, 0);
          };
          var nav = h("div", {
            class: "booknav"
          }, btn("‹ Anterior", function () {
            bk.p--;
            show();
          }), btn("A−", function () {
            lib.size = Math.max(14, lib.size - 2);
            show();
          }), btn("A+", function () {
            lib.size = Math.min(32, lib.size + 2);
            show();
          }), btn("Próxima ›", function () {
            bk.p++;
            show();
          }, "solid"));
          onPointer(pg, null, null, function (e) {
            var r = pg.getBoundingClientRect();
            if (e.clientX - r.left > r.width * .66) {
              bk.p++;
              show();
            } else if (e.clientX - r.left < r.width * .33) {
              bk.p--;
              show();
            }
          });
          body.replaceChildren(h("h2", {
            class: "ah"
          }, bk.t), h("p", {
            class: "muted"
          }, bk.a), info, pg, nav, note("Toque na lateral direita da página para avançar e na esquerda para voltar. Seu ponto de leitura fica salvo na conta."));
          show();
        }, function () {
          return body.replaceChildren(para("Não consegui baixar esse livro agora. Tente de novo."));
        });
      }, home);
    };
    home();
  });
  function atom(xml) {
    var d = new DOMParser().parseFromString(xml, "text/xml"),
      ents = d.getElementsByTagName("entry"),
      out = [];
    var _loop9 = function _loop9() {
      var e = ents[i],
        g = function g(n) {
          var x = e.getElementsByTagName(n)[0];
          return x ? x.textContent : "";
        },
        ln = e.getElementsByTagName("link")[0];
      out.push({
        t: g("title"),
        a: (e.getElementsByTagName("name")[0] || {
          textContent: ""
        }).textContent.trim().replace(/^\/u\//, "u/"),
        html: g("content"),
        u: ln ? ln.getAttribute("href") : "",
        d: g("updated") || g("published"),
        thumb: (e.getElementsByTagName("media:thumbnail")[0] || {
          getAttribute: function getAttribute() {
            return "";
          }
        }).getAttribute("url")
      });
    };
    for (var i = 0; i < ents.length; i++) {
      _loop9();
    }
    return out;
  }
  var SUBS = ["brasil", "portugal", "books", "kindle", "suggestmeabook", "technology", "worldnews", "futebol", "gaming", "todayilearned"];
  add("reddit", "Reddit", "reddit", "Notícias", function (b) {
    var st = X("reddit", {
        sub: "brasil",
        sort: "hot"
      }),
      top = h("div"),
      body = h("div");
    b.append(top, body);
    var _list3 = function list() {
      var q = inp("Comunidade, ex.: brasil", "text", {
        value: st.sub
      });
      var go = function go(v) {
        st.sub = String(v || "").trim().replace(/^\/?r\//, "") || "brasil";
        save();
        _list3();
      };
      q.addEventListener("keydown", function (e) {
        return e.key === "Enter" && go(q.value);
      });
      top.replaceChildren(h("div", {
        class: "row"
      }, q, btn("Abrir", function () {
        return go(q.value);
      }, "solid")), segTabs(SUBS.map(function (s) {
        return [s, "r/" + s];
      }), st.sub, go), segTabs([["hot", "Em alta"], ["new", "Novos"], ["top", "Top do dia"]], st.sort, function (k) {
        st.sort = k;
        save();
        _list3();
      }));
      body.replaceChildren(note("Carregando r/" + st.sub + "…"));
      fetchPage("https://www.reddit.com/r/" + encodeURIComponent(st.sub) + "/" + st.sort + "/.rss" + (st.sort === "top" ? "?t=day" : "")).then(function (x) {
        var es = atom(x);
        body.replaceChildren(es.length ? h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(es.map(function (e) {
          return h("li", {
            class: "nw",
            onclick: function onclick() {
              return _post(e);
            }
          }, e.thumb ? h("span", {
            class: "nthumb"
          }, h("img", {
            src: e.thumb,
            alt: ""
          })) : null, h("span", {}, h("b", {}, e.t), h("small", {}, e.a + " · " + ago(e.d))));
        })))) : para("Essa comunidade não existe ou está fechada."));
      }, function () {
        return body.replaceChildren(para("Não consegui carregar o Reddit agora. Tente de novo em instantes."));
      });
    };
    var _post = function post(e) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " r/" + st.sub));
        body.replaceChildren(note("Abrindo o post e os comentários…"));
        window.scrollTo(0, 0);
        var u = (e.u || "").replace(/\/?$/, "/") + ".rss";
        fetchPage(u).then(function (x) {
          var es = atom(x),
            p = es[0] || e,
            cs = es.slice(1);
          var pc = renderPage("<div>" + (p.html || "") + "</div>", e.u, function (l) {
            if (/reddit\.com\/r\/[^/]+\/comments\//.test(l)) _post({
              u: l,
              t: ""
            });else openApp("browser");
          });
          body.replaceChildren.apply(body, [h("div", {
            class: "kick2"
          }, "r/" + st.sub + " · " + p.a + " · " + ago(p.d)), h("h2", {
            class: "ah"
          }, p.t || e.t), pc.body, h("div", {
            class: "lbl2"
          }, cs.length + " comentários")].concat(_toConsumableArray(cs.map(function (c) {
            return h("div", {
              class: "post"
            }, h("div", {
              class: "pmeta"
            }, c.a + " · " + ago(c.d)), renderPage("<div>" + c.html + "</div>", e.u, function () {}).body);
          }))));
        }, function () {
          return body.replaceChildren(h("h2", {
            class: "ah"
          }, e.t), renderPage("<div>" + (e.html || "") + "</div>", e.u, function () {}).body, note("Não consegui carregar os comentários agora."));
        });
      }, _list3);
    };
    _list3();
  });
  function b64utf8(s) {
    try {
      return decodeURIComponent(escape(atob(String(s).replace(/\s/g, ""))));
    } catch (e) {
      return "";
    }
  }
  function mdNodes(md, base, onLink) {
    var out = [],
      lines = md.replace(/\r/g, "").split("\n");
    var i = 0,
      para2 = [];
    var _inline = function inline(t) {
      var frag = h("span");
      var rest = t.replace(/<[^>]+>/g, "");
      var re = /(!?\[([^\]]*)\]\(([^)\s]+)[^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*|__[^_]+__)/;
      var m;
      var _loop0 = function _loop0() {
        if (m.index) frag.appendChild(document.createTextNode(rest.slice(0, m.index)));
        if (m[1] && m[1][0] === "!") frag.appendChild(h("img", {
          src: absUrl(m[3], base),
          alt: m[2],
          class: "bimg"
        }));else if (m[1]) {
          var href = absUrl(m[3], base);
          frag.appendChild(h("a", {
            href: "#",
            class: "blink",
            onclick: function onclick(e) {
              e.preventDefault();
              onLink(href);
              return false;
            }
          }, m[2]));
        } else if (m[4]) frag.appendChild(h("code", {}, m[4].slice(1, -1)));else frag.appendChild(h("b", {}, _inline(m[5].slice(2, -2))));
        rest = rest.slice(m.index + m[0].length);
      };
      while (m = re.exec(rest)) {
        _loop0();
      }
      if (rest) frag.appendChild(document.createTextNode(rest));
      return frag;
    };
    var flush = function flush() {
      if (para2.length) {
        out.push(h("p", {}, _inline(para2.join(" "))));
        para2 = [];
      }
    };
    while (i < lines.length) {
      var l = lines[i];
      if (/^```/.test(l)) {
        flush();
        var buf = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
        out.push(h("pre", {
          class: "code"
        }, buf.join("\n")));
        i++;
        continue;
      }
      var hd = /^(#{1,6})\s+(.*)/.exec(l);
      if (hd) {
        flush();
        out.push(h(hd[1].length <= 2 ? "h3" : "h4", {}, _inline(hd[2])));
        i++;
        continue;
      }
      if (/^\s*[-*+]\s+/.test(l)) {
        flush();
        var ul = h("ul");
        while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) ul.appendChild(h("li", {}, _inline(lines[i++].replace(/^\s*[-*+]\s+/, ""))));
        out.push(ul);
        continue;
      }
      if (/^\s*\d+\.\s+/.test(l)) {
        flush();
        var ol = h("ol");
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) ol.appendChild(h("li", {}, _inline(lines[i++].replace(/^\s*\d+\.\s+/, ""))));
        out.push(ol);
        continue;
      }
      if (/^>\s?/.test(l)) {
        flush();
        out.push(h("blockquote", {}, _inline(l.replace(/^>\s?/, ""))));
        i++;
        continue;
      }
      if (!l.trim()) {
        flush();
        i++;
        continue;
      }
      if (/^\s*(---|\*\*\*|___)\s*$/.test(l)) {
        flush();
        out.push(h("hr"));
        i++;
        continue;
      }
      para2.push(l.trim());
      i++;
    }
    flush();
    return out;
  }
  var GH = "https://api.github.com";
  function ghErr(e) {
    return e && e.status === 403 ? "O GitHub limita 60 consultas por hora sem login. Espere um pouco e tente de novo." : e && e.status === 404 ? "Não encontrado." : NOCONN;
  }
  add("d_repos", "GitHub", "github", "Dev", function (b) {
    var st = X("repos", {
        q: "kindle",
        mode: "repos",
        u: ""
      }),
      top = h("div"),
      body = h("div");
    b.append(top, body);
    var repoRow = function repoRow(r) {
      return h("li", {
        class: "nw",
        onclick: function onclick() {
          return _repo(r.full_name);
        }
      }, h("span", {}, h("b", {}, r.full_name), h("small", {}, (r.description || "Sem descrição") + " · ★ " + num(r.stargazers_count) + (r.language ? " · " + r.language : ""))));
    };
    var _search = function search() {
      var users = st.mode === "users",
        q = inp(users ? "Buscar pessoas ou organizações (ex.: torvalds)" : "Buscar repositórios (ex.: e-reader)", "search", {
          value: users ? st.u : st.q
        });
      var go = function go() {
        if (users) st.u = q.value.trim();else st.q = q.value.trim();
        save();
        _search();
      };
      q.addEventListener("keydown", function (e) {
        return e.key === "Enter" && go();
      });
      top.replaceChildren(segTabs([["repos", "Repositórios"], ["users", "Pessoas"]], st.mode, function (k) {
        st.mode = k;
        save();
        _search();
      }), h("div", {
        class: "row"
      }, q, btn("Buscar", go, "solid")));
      var term = users ? st.u : st.q;
      if (!term) return body.replaceChildren(note(users ? "Digite um nome de usuário ou organização." : "Digite algo para buscar. Também dá para colar dono/repositório, ex.: torvalds/linux."));
      if (!users && /^[\w.-]+\/[\w.-]+$/.test(term)) return _repo(term);
      body.replaceChildren(note("Buscando…"));
      if (users) api(GH + "/search/users?per_page=20&q=" + encodeURIComponent(term)).then(function (j) {
        return body.replaceChildren(j.items.length ? h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(j.items.map(function (u) {
          return h("li", {
            class: "nw",
            onclick: function onclick() {
              return user(u.login);
            }
          }, h("span", {
            class: "nthumb sq"
          }, h("img", {
            src: u.avatar_url + "&s=96",
            alt: ""
          })), h("span", {}, h("b", {}, "@" + u.login), h("small", {}, u.type === "Organization" ? "Organização" : "Pessoa")));
        })))) : para("Ninguém encontrado."));
      }, function (e) {
        return body.replaceChildren(para(ghErr(e)));
      });else api(GH + "/search/repositories?per_page=20&q=" + encodeURIComponent(term)).then(function (j) {
        return body.replaceChildren(h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(j.items.map(repoRow)))));
      }, function (e) {
        return body.replaceChildren(para(ghErr(e)));
      });
    };
    var user = function user(login) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Busca"));
        body.replaceChildren(note("Abrindo @" + login + "…"));
        window.scrollTo(0, 0);
        Promise.all([api(GH + "/users/" + login), api(GH + "/users/" + login + "/repos?sort=updated&per_page=30")]).then(function (_ref32) {
          var _ref33 = _slicedToArray(_ref32, 2),
            u = _ref33[0],
            rs = _ref33[1];
          return body.replaceChildren(h("div", {
            class: "wxnow"
          }, h("span", {
            class: "wxi"
          }, h("img", {
            class: "bimg",
            src: u.avatar_url,
            alt: "",
            style: "width:72px;margin:0"
          })), h("span", {}, h("b", {}, u.name || u.login), h("small", {}, "@" + u.login + (u.type === "Organization" ? " · organização" : "")))), u.bio ? h("p", {}, u.bio) : null, kv([["Seguidores", num(u.followers)], ["Seguindo", num(u.following)], ["Repositórios públicos", num(u.public_repos)], ["Local", u.location], ["Empresa", u.company], ["Site", u.blog], ["No GitHub desde", dbr(u.created_at)]]), h("div", {
            class: "lbl2"
          }, "Repositórios atualizados recentemente"), rs.length ? h.apply(void 0, ["ul", {
            class: "list"
          }].concat(_toConsumableArray(rs.map(repoRow)))) : note("Nenhum repositório público."));
        }, function (e) {
          return body.replaceChildren(para(ghErr(e)));
        });
      }, _search);
    };
    var _repo = function repo(full) {
      return subView(b, function () {
        var owner = full.split("/")[0];
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Voltar"), h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return user(owner);
          }
        }, ic("user", 16), " @" + owner));
        body.replaceChildren(note("Abrindo " + full + "…"));
        window.scrollTo(0, 0);
        api(GH + "/repos/" + full).then(function (r) {
          var tabs = h("div"),
            area = h("div");
          var _tab = function tab(k) {
            tabs.replaceChildren(segTabs([["readme", "Leia-me"], ["files", "Arquivos"], ["commits", "Commits"], ["issues", "Issues"]], k, _tab));
            area.replaceChildren(note("Carregando…"));
            if (k === "readme") api(GH + "/repos/" + full + "/readme").then(function (j) {
              return area.replaceChildren(h.apply(void 0, ["div", {
                class: "bpage md"
              }].concat(_toConsumableArray(mdNodes(b64utf8(j.content), "https://raw.githubusercontent.com/" + full + "/" + r.default_branch + "/", function (u) {
                var m = /github\.com\/([\w.-]+\/[\w.-]+)\/?$/.exec(u);
                if (m) _repo(m[1]);
              })))));
            }, function (e) {
              return area.replaceChildren(para(e && e.status === 404 ? "Esse repositório não tem Leia-me." : ghErr(e)));
            });
            if (k === "files") _dir("");
            if (k === "commits") api(GH + "/repos/" + full + "/commits?per_page=25").then(function (j) {
              return area.replaceChildren(h.apply(void 0, ["ul", {
                class: "list"
              }].concat(_toConsumableArray(j.map(function (c) {
                return h("li", {}, h("span", {}, h("b", {}, c.commit.message.split("\n")[0]), h("small", {}, (c.commit.author && c.commit.author.name || "") + " · " + ago(c.commit.author && c.commit.author.date))));
              })))));
            }, function (e) {
              return area.replaceChildren(para(ghErr(e)));
            });
            if (k === "issues") api(GH + "/repos/" + full + "/issues?state=open&per_page=25").then(function (j) {
              return area.replaceChildren(j.length ? h.apply(void 0, ["ul", {
                class: "list"
              }].concat(_toConsumableArray(j.map(function (x) {
                return h("li", {
                  class: "nw",
                  onclick: function onclick() {
                    return modal(h("h2", {}, x.title), h("p", {
                      class: "muted"
                    }, "#" + x.number + " · @" + x.user.login + " · " + ago(x.created_at)), h.apply(void 0, ["div", {
                      class: "bpage md"
                    }].concat(_toConsumableArray(mdNodes(x.body || "(sem descrição)", "https://github.com/" + full + "/", function () {})))));
                  }
                }, h("span", {}, h("b", {}, x.title), h("small", {}, "#" + x.number + " · " + (x.pull_request ? "pull request" : "issue") + " · " + ago(x.created_at))));
              })))) : note("Nenhuma issue aberta."));
            }, function (e) {
              return area.replaceChildren(para(ghErr(e)));
            });
          };
          var _dir = function dir(path) {
            area.replaceChildren(note("Carregando…"));
            api(GH + "/repos/" + full + "/contents/" + path).then(function (items) {
              items.sort(function (x, y) {
                return x.type === y.type ? x.name < y.name ? -1 : 1 : x.type === "dir" ? -1 : 1;
              });
              area.replaceChildren(h("div", {
                class: "kick2"
              }, "/" + path), path ? h("button", {
                class: "sbtn",
                onclick: function onclick() {
                  return _dir(path.split("/").slice(0, -1).join("/"));
                }
              }, ic("up", 16), " Pasta acima") : null, h.apply(void 0, ["ul", {
                class: "list"
              }].concat(_toConsumableArray(items.map(function (it) {
                return h("li", {
                  class: "nw",
                  onclick: function onclick() {
                    return it.type === "dir" ? _dir(it.path) : file(it);
                  }
                }, h("span", {}, h("b", {}, (it.type === "dir" ? "▸ " : "") + it.name), h("small", {}, it.type === "dir" ? "pasta" : Math.max(1, Math.round(it.size / 1024)) + " KB")));
              })))));
            }, function (e) {
              return area.replaceChildren(para(ghErr(e)));
            });
          };
          var file = function file(it) {
            area.replaceChildren(note("Abrindo " + it.name + "…"));
            window.scrollTo(0, 0);
            var backBtn = h("button", {
              class: "sbtn",
              onclick: function onclick() {
                return _dir(it.path.split("/").slice(0, -1).join("/"));
              }
            }, ic("back", 16), " Arquivos");
            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(it.name)) return area.replaceChildren(backBtn, h("h3", {}, it.name), h("img", {
              class: "bimg",
              src: it.download_url,
              alt: it.name
            }));
            if (it.size > 400000) return area.replaceChildren(backBtn, para("Arquivo grande demais para mostrar aqui (" + Math.round(it.size / 1024) + " KB)."));
            apiText(it.download_url).then(function (t) {
              return area.replaceChildren(backBtn, h("h3", {}, it.path), /\.md$/i.test(it.name) ? h.apply(void 0, ["div", {
                class: "bpage md"
              }].concat(_toConsumableArray(mdNodes(t, it.download_url, function () {})))) : h("pre", {
                class: "code"
              }, t));
            }, function () {
              return area.replaceChildren(backBtn, para(NOCONN));
            });
          };
          body.replaceChildren(h("h2", {
            class: "ah"
          }, r.full_name), r.description ? h("p", {}, r.description) : null, kv([["Estrelas", num(r.stargazers_count)], ["Forks", num(r.forks_count)], ["Linguagem", r.language || "—"], ["Licença", r.license ? r.license.spdx_id : "—"], ["Atualizado", ago(r.pushed_at)]]), tabs, area);
          _tab("readme");
        }, function (e) {
          return body.replaceChildren(para(ghErr(e)));
        });
      }, _search);
    };
    _search();
  });
  var radioEl = null,
    radioNow = null;
  function radioAudio() {
    if (!radioEl) {
      radioEl = document.createElement("audio");
      radioEl.preload = "none";
      document.body.appendChild(radioEl);
    }
    return radioEl;
  }
  var RGEN = [["", "Mais ouvidas"], ["mpb", "MPB"], ["pop", "Pop"], ["rock", "Rock"], ["samba", "Samba"], ["sertanejo", "Sertanejo"], ["jazz", "Jazz"], ["classical", "Clássica"], ["news", "Notícias"], ["talk", "Conversa"], ["lofi", "Lo-fi"]];
  add("c_radio", "Rádio", "mic", "Cultura", function (b) {
    var st = X("radio", {
        tag: "",
        c: "BR",
        favs: [],
        vol: 0.8
      }),
      au = radioAudio(),
      player = h("div", {
        class: "player"
      }),
      top = h("div"),
      body = h("div");
    au.volume = st.vol;
    var stateTxt = function stateTxt() {
      return !radioNow ? "Nada tocando" : au.paused ? "Pausado" : au.readyState < 3 ? "Conectando…" : "Ao vivo";
    };
    var _paintPlayer = function paintPlayer() {
      return player.replaceChildren(h("div", {
        class: "pnow"
      }, h("span", {
        class: "pic"
      }, ic("mic", 32)), h("span", {}, h("small", {}, stateTxt().toUpperCase()), h("b", {}, radioNow ? radioNow.name : "Escolha uma rádio abaixo"), radioNow ? h("small", {}, [radioNow.country, (radioNow.tags || "").split(",").slice(0, 2).join(", ")].filter(Boolean).join(" · ")) : null)), h("div", {
        class: "pctl"
      }, btn(au.paused ? "▶ Tocar" : "❚❚ Pausar", function () {
        if (!radioNow) return;
        if (au.paused) au.play().catch(function () {
          return toast("Não foi possível tocar essa rádio");
        });else au.pause();
      }, "solid"), btn("■ Parar", function () {
        au.pause();
        au.removeAttribute("src");
        au.load && au.load();
        radioNow = null;
        _paintPlayer();
      }), btn("Vol −", function () {
        st.vol = Math.max(0, +(st.vol - .1).toFixed(1));
        au.volume = st.vol;
        save();
        _paintPlayer();
      }), h("span", {
        class: "vol"
      }, Math.round(st.vol * 100) + "%"), btn("Vol +", function () {
        st.vol = Math.min(1, +(st.vol + .1).toFixed(1));
        au.volume = st.vol;
        save();
        _paintPlayer();
      }), radioNow ? btn(st.favs.some(function (f) {
        return f.id === radioNow.stationuuid;
      }) ? "★ Favorita" : "☆ Favoritar", function () {
        var i = st.favs.findIndex(function (f) {
          return f.id === radioNow.stationuuid;
        });
        if (i >= 0) st.favs.splice(i, 1);else st.favs.unshift({
          id: radioNow.stationuuid,
          name: radioNow.name,
          url: radioNow.url_resolved,
          country: radioNow.country,
          tags: radioNow.tags
        });
        save();
        _paintPlayer();
        load();
      }) : null));
    };
    ["playing", "pause", "waiting", "error", "canplay"].forEach(function (ev) {
      return au.addEventListener(ev, function () {
        if (ev === "error" && radioNow) toast("Essa rádio está fora do ar agora");
        if (player.parentNode) _paintPlayer();
      }, false);
    });
    var play = function play(s) {
      radioNow = s;
      au.src = s.url_resolved || s.url;
      au.play().catch(function () {});
      _paintPlayer();
    };
    var row = function row(s) {
      return h("li", {
        class: "nw" + (radioNow && radioNow.stationuuid === s.stationuuid ? " on" : ""),
        onclick: function onclick() {
          return play(s);
        }
      }, s.favicon && /^https:/.test(s.favicon) ? h("span", {
        class: "nthumb sq"
      }, h("img", {
        src: s.favicon,
        alt: ""
      })) : null, h("span", {}, h("b", {}, s.name.trim()), h("small", {}, [s.country, (s.tags || "").split(",").slice(0, 3).join(", "), s.bitrate ? s.bitrate + " kbps" : ""].filter(Boolean).join(" · "))));
    };
    var load = function load(name) {
      body.replaceChildren(st.favs.length ? h("div", {}, h("div", {
        class: "lbl2"
      }, "Favoritas"), h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(st.favs.map(function (f) {
        return row({
          stationuuid: f.id,
          name: f.name,
          url_resolved: f.url,
          country: f.country,
          tags: f.tags
        });
      }))))) : null, h("div", {
        class: "lbl2"
      }, name ? "Resultados" : "Rádios"), note("Carregando…"));
      api("https://all.api.radio-browser.info/json/stations/search?hidebroken=true&limit=30&order=clickcount&reverse=true" + (st.c ? "&countrycode=" + st.c : "") + (st.tag ? "&tag=" + encodeURIComponent(st.tag) : "") + (name ? "&name=" + encodeURIComponent(name) : "")).then(function (r) {
        body.lastChild.replaceWith ? body.lastChild.replaceWith(h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(r.map(row))))) : body.replaceChild(h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(r.map(row)))), body.lastChild);
      }, function () {
        body.replaceChild(para(NOCONN), body.lastChild);
      });
    };
    var q = inp("Nome da rádio (ex.: CBN, Jovem Pan)", "search");
    q.addEventListener("keydown", function (e) {
      return e.key === "Enter" && load(q.value.trim());
    });
    var _draw16 = function draw() {
      return top.replaceChildren(h("div", {
        class: "row"
      }, q, btn("Buscar", function () {
        return load(q.value.trim());
      }, "solid")), segTabs([["BR", "Brasil"], ["PT", "Portugal"], ["", "Mundo"]], st.c, function (k) {
        st.c = k;
        save();
        _draw16();
        load();
      }), segTabs(RGEN, st.tag, function (k) {
        st.tag = k;
        save();
        _draw16();
        load();
      }));
    };
    b.append(player, top, body);
    _paintPlayer();
    _draw16();
    load();
    b.append(note("A rádio continua tocando quando você sai do app. Use Parar para desligar."));
  });
  add("recipes", "Minhas receitas", "food", "Estilo de vida", function (b) {
    var R = X("recipes", []),
      top = h("div"),
      body = h("div");
    b.append(top, body);
    var list = function list() {
      top.replaceChildren(btn("Nova receita", function () {
        return edit(-1);
      }, "solid"));
      body.replaceChildren(R.length ? h.apply(void 0, ["ul", {
        class: "list"
      }].concat(_toConsumableArray(R.map(function (r, i) {
        return h("li", {
          class: "nw",
          onclick: function onclick() {
            return _view(i);
          }
        }, h("span", {}, h("b", {}, r.t), h("small", {}, (r.i ? r.i.split("\n").filter(Boolean).length : 0) + " ingredientes" + (r.src ? " · " + r.src : ""))));
      })))) : h("div", {
        class: "empty2"
      }, "Nenhuma receita ainda. Crie a sua ou salve uma de Receitas do mundo."));
    };
    var _view = function view(i) {
      return subView(b, function () {
        var r = R[i],
          ings = (r.i || "").split("\n").map(function (x) {
            return x.trim();
          }).filter(Boolean),
          steps = (r.p || "").split(/\n+/).map(function (x) {
            return x.trim();
          }).filter(Boolean);
        r.chk = r.chk || {};
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Receitas"));
        body.replaceChildren(h("h2", {
          class: "ah"
        }, r.t), r.img ? h("img", {
          class: "aimg",
          src: r.img,
          alt: ""
        }) : null, h("div", {
          class: "lbl2"
        }, "Ingredientes"), h.apply(void 0, ["ul", {
          class: "list"
        }].concat(_toConsumableArray(ings.map(function (x, k) {
          return h("li", {}, h("input", {
            type: "checkbox",
            checked: r.chk[k] ? "checked" : false,
            onchange: function onchange(e) {
              r.chk[k] = e.target.checked;
              save();
            }
          }), h("span", {
            class: r.chk[k] ? "done" : ""
          }, x));
        })))), h("div", {
          class: "lbl2"
        }, "Modo de preparo"), h.apply(void 0, ["ol", {
          class: "steps"
        }].concat(_toConsumableArray(steps.map(function (s) {
          return h("li", {}, s);
        })))), h("div", {
          class: "row"
        }, btn("Editar", function () {
          history.back();
          setTimeout(function () {
            return edit(i);
          }, 200);
        }), btn("Desmarcar ingredientes", function () {
          r.chk = {};
          save();
          history.back();
          setTimeout(function () {
            return _view(i);
          }, 200);
        }), btn("Apagar", function () {
          if (confirm("Apagar esta receita?")) {
            R.splice(i, 1);
            save();
            history.back();
          }
        })));
        window.scrollTo(0, 0);
      }, list);
    };
    var edit = function edit(i) {
      return subView(b, function () {
        var r = i >= 0 ? R[i] : {
            t: "",
            i: "",
            p: ""
          },
          t = inp("Nome da receita", "text", {
            value: r.t
          }),
          ing = h("textarea", {
            placeholder: "Um ingrediente por linha",
            style: "min-height:140px"
          }),
          pr = h("textarea", {
            placeholder: "Passos do preparo (um por linha)",
            style: "min-height:160px"
          });
        ing.value = r.i || "";
        pr.value = r.p || "";
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Receitas"));
        body.replaceChildren(h("div", {
          class: "cvbox"
        }, h("label", {}, "Nome"), t, h("label", {}, "Ingredientes"), ing, h("label", {}, "Modo de preparo"), pr), btn("Salvar receita", function () {
          if (!t.value.trim()) return toast("Dê um nome à receita");
          var o = Object.assign(r, {
            t: t.value.trim(),
            i: ing.value,
            p: pr.value
          });
          if (i < 0) R.unshift(o);
          save();
          t.value = ing.value = pr.value = "";
          snapDrafts();
          toast("Receita salva");
          history.back();
        }, "solid wide"));
      }, list);
    };
    list();
  });
  function trChunks(text, from, to) {
    var parts = [];
    var rest = String(text || "").trim();
    while (rest) {
      var cut = rest.length <= 450 ? rest.length : Math.max(rest.lastIndexOf(". ", 450), rest.lastIndexOf("\n", 450));
      if (cut < 100) cut = 450;
      parts.push(rest.slice(0, cut + 1));
      rest = rest.slice(cut + 1).trim();
    }
    return parts.reduce(function (p, part) {
      return p.then(function (acc) {
        return api("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(part) + "&langpair=" + from + "|" + to).then(function (j) {
          return acc.concat(txt(j.responseData.translatedText));
        }, function () {
          return acc.concat(part);
        });
      });
    }, Promise.resolve([])).then(function (a) {
      return a.join(" ");
    });
  }
  var MPT = {
    Chicken: "Frango",
    Beef: "Carne",
    Pasta: "Massa",
    Seafood: "Frutos do mar",
    Dessert: "Sobremesa",
    Vegetarian: "Vegetariano",
    Vegan: "Vegano",
    Pork: "Porco",
    Lamb: "Cordeiro",
    Goat: "Cabrito",
    Side: "Acompanhamento",
    Starter: "Entrada",
    Breakfast: "Café da manhã",
    Miscellaneous: "Diversos",
    American: "Americana",
    British: "Britânica",
    Canadian: "Canadense",
    Chinese: "Chinesa",
    Croatian: "Croata",
    Dutch: "Holandesa",
    Egyptian: "Egípcia",
    Filipino: "Filipina",
    French: "Francesa",
    Greek: "Grega",
    Indian: "Indiana",
    Irish: "Irlandesa",
    Italian: "Italiana",
    Jamaican: "Jamaicana",
    Japanese: "Japonesa",
    Kenyan: "Queniana",
    Malaysian: "Malaia",
    Mexican: "Mexicana",
    Moroccan: "Marroquina",
    Polish: "Polonesa",
    Portuguese: "Portuguesa",
    Russian: "Russa",
    Spanish: "Espanhola",
    Thai: "Tailandesa",
    Tunisian: "Tunisiana",
    Turkish: "Turca",
    Ukrainian: "Ucraniana",
    Vietnamese: "Vietnamita",
    Australian: "Australiana",
    Brazilian: "Brasileira",
    Argentinian: "Argentina",
    Norwegian: "Norueguesa",
    Saudi: "Saudita",
    Syrian: "Síria",
    Uruguayan: "Uruguaia",
    Venezulan: "Venezuelana",
    Algerian: "Argelina"
  };
  var mpt = function mpt(x) {
    return MPT[x] || x;
  };
  var MCATS = [["chicken", "Frango"], ["beef", "Carne"], ["pasta", "Massas"], ["fish", "Peixe"], ["cake", "Bolos"], ["soup", "Sopas"], ["rice", "Arroz"], ["salad", "Saladas"], ["pork", "Porco"], ["pie", "Tortas"]];
  add("c_receitas", "Receitas do mundo", "food", "Cultura", function (b) {
    var st = X("mundo", {
        q: "chicken",
        label: "Frango"
      }),
      top = h("div"),
      body = h("div");
    b.append(top, body);
    var _search2 = function search() {
      var q = inp("Buscar (ex.: lasanha, bolo de chocolate)", "search");
      var typed = function typed() {
        var v = q.value.trim();
        if (!v) return;
        body.replaceChildren(note("Buscando…"));
        trChunks(v, "pt-br", "en").then(function (en) {
          st.q = en.replace(/[.!?]$/, "");
          st.label = v;
          save();
          _search2();
        });
      };
      q.addEventListener("keydown", function (e) {
        return e.key === "Enter" && typed();
      });
      top.replaceChildren(h("div", {
        class: "row"
      }, q, btn("Buscar", typed, "solid")), segTabs(MCATS, st.q, function (k) {
        st.q = k;
        st.label = (MCATS.find(function (x) {
          return x[0] === k;
        }) || [k, k])[1];
        save();
        _search2();
      }));
      body.replaceChildren(note("Buscando receitas de " + st.label + "…"));
      api("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(st.q)).then(function (j) {
        var ms = (j.meals || []).slice(0, 16);
        if (!ms.length) return body.replaceChildren(para("Nada encontrado. Tente outra palavra."));
        var names = ms.map(function (m) {
          return h("b", {}, m.strMeal);
        });
        body.replaceChildren(h.apply(void 0, ["div", {
          class: "gal"
        }].concat(_toConsumableArray(ms.map(function (m, i) {
          return h("div", {
            class: "gi rc",
            onclick: function onclick() {
              return meal(m);
            }
          }, h("img", {
            src: m.strMealThumb + "/preview",
            alt: ""
          }), names[i], h("small", {}, [mpt(m.strArea), mpt(m.strCategory)].filter(Boolean).join(" · ")));
        })))));
        trChunks(ms.map(function (m) {
          return m.strMeal;
        }).join("\n"), "en", "pt-br").then(function (t) {
          var tt = t.split(/\s*\n\s*|\s{2,}/);
          if (tt.length === ms.length) tt.forEach(function (x, i) {
            names[i].textContent = x;
            ms[i].pt = x;
          });
        });
      }, function () {
        return body.replaceChildren(para(NOCONN));
      });
    };
    var meal = function meal(m) {
      return subView(b, function () {
        top.replaceChildren(h("button", {
          class: "sbtn",
          onclick: function onclick() {
            return history.back();
          }
        }, ic("back", 16), " Receitas"));
        var rows = [];
        for (var i = 1; i <= 20; i++) if (m["strIngredient" + i] && m["strIngredient" + i].trim()) rows.push(((m["strMeasure" + i] || "").trim() + " " + m["strIngredient" + i].trim()).trim());
        var ingBox = h("ul", {
            class: "list"
          }, note("Traduzindo…")),
          stepBox = h("ol", {
            class: "steps"
          }, note("Traduzindo o modo de preparo…"));
        var ptIng = rows,
          ptSteps = [];
        body.replaceChildren(h("h2", {
          class: "ah"
        }, m.pt || m.strMeal), h("p", {
          class: "muted"
        }, [mpt(m.strArea), mpt(m.strCategory)].filter(Boolean).join(" · ")), h("img", {
          class: "aimg",
          src: m.strMealThumb,
          alt: ""
        }), h("div", {
          class: "lbl2"
        }, "Ingredientes"), ingBox, h("div", {
          class: "lbl2"
        }, "Modo de preparo"), stepBox, btn("Salvar em Minhas receitas", function () {
          X("recipes", []).unshift({
            t: m.pt || m.strMeal,
            i: ptIng.join("\n"),
            p: ptSteps.join("\n"),
            img: m.strMealThumb,
            src: "Receitas do mundo"
          });
          save();
          toast("Salva em Minhas receitas");
        }, "solid wide"));
        window.scrollTo(0, 0);
        trChunks(rows.join("\n"), "en", "pt-br").then(function (t) {
          var a = t.split(/\s*\n\s*/);
          ptIng = a.length >= rows.length * .7 ? a : rows;
          ingBox.replaceChildren.apply(ingBox, _toConsumableArray(ptIng.map(function (x) {
            return h("li", {}, h("span", {}, x));
          })));
        });
        var steps = (m.strInstructions || "").replace(/\r/g, "").replace(/\.\s+(?=STEP|\d+\.)/gi, ".\n").split(/\n+/).map(function (x) {
          return x.replace(/^(STEP\s*\d+:?|\d+\.)\s*/i, "").trim();
        }).filter(function (x) {
          return x.length > 2;
        });
        trChunks(steps.join("\n"), "en", "pt-br").then(function (t) {
          var a = t.split(/\s*\n\s*/).filter(Boolean);
          ptSteps = a.length > 1 ? a : t.replace(/\.\s+/g, ".\n").split("\n");
          stepBox.replaceChildren.apply(stepBox, _toConsumableArray(ptSteps.map(function (x) {
            return h("li", {}, x);
          })));
        });
      }, _search2);
    };
    _search2();
  });
  add("slide", "Quebra-Cabeça", "puzzle", "Jogos", function (b) {
    var st = X("slidep", {
        n: 3,
        best: {}
      }),
      top = h("div"),
      head = h("div", {
        class: "ulh"
      }),
      tbl = h("table", {
        class: "slp"
      }),
      msg = h("p", {
        class: "score"
      });
    var t, moves, t0, tm;
    var solved = function solved() {
      return t.every(function (v, i) {
        return v === (i + 1) % (st.n * st.n);
      });
    };
    var _shuffleT = function shuffleT() {
      var n = st.n;
      t = Array.from({
        length: n * n
      }, function (_, x) {
        return (x + 1) % (n * n);
      });
      var e = n * n - 1,
        prev = -1;
      for (var k = 0; k < 120 * n; k++) {
        var r = Math.floor(e / n),
          c = e % n,
          nb = [];
        if (r) nb.push(e - n);
        if (r < n - 1) nb.push(e + n);
        if (c) nb.push(e - 1);
        if (c < n - 1) nb.push(e + 1);
        var m = pick(nb.filter(function (x) {
          return x !== prev;
        }));
        t[e] = t[m];
        t[m] = 0;
        prev = e;
        e = m;
      }
      if (solved()) return _shuffleT();
      moves = 0;
      t0 = 0;
      clearInterval(tm);
      tm = null;
      draw();
    };
    var secs = function secs() {
      return t0 ? Math.floor((Date.now() - t0) / 1000) : 0;
    };
    var tap = function tap(i) {
      var n = st.n,
        e = t.indexOf(0),
        r = Math.floor(i / n),
        c = i % n,
        er = Math.floor(e / n),
        ec = e % n;
      if (solved()) return;
      if (r !== er && c !== ec) return;
      if (!t0) {
        t0 = Date.now();
        tm = setInterval(function () {
          var x = head.querySelectorAll("b")[1];
          if (x) x.textContent = secs() + "s";
        }, 1000);
      }
      var step = r === er ? c < ec ? -1 : 1 : r < er ? -n : n;
      var cur = e;
      while (cur !== i) {
        t[cur] = t[cur + step];
        cur += step;
      }
      t[i] = 0;
      moves++;
      if (solved()) {
        clearInterval(tm);
        var k = st.n;
        if (!st.best[k] || moves < st.best[k]) {
          st.best[k] = moves;
          save();
        }
      }
      draw();
    };
    var draw = function draw() {
      var n = st.n,
        won = solved();
      top.replaceChildren(segTabs([[3, "3×3 Fácil"], [4, "4×4 Médio"], [5, "5×5 Difícil"]], st.n, function (k) {
        st.n = k;
        save();
        _shuffleT();
      }));
      head.replaceChildren(h("div", {}, h("small", {}, "JOGADAS"), h("b", {}, String(moves))), h("div", {}, h("small", {}, "TEMPO"), h("b", {}, secs() + "s")), h("div", {}, h("small", {}, "RECORDE"), h("b", {}, st.best[n] ? st.best[n] + " jog." : "—")));
      var rows = [];
      var _loop1 = function _loop1(r) {
        rows.push(h.apply(void 0, ["tr", {}].concat(_toConsumableArray(Array.from({
          length: n
        }, function (_, c) {
          var i = r * n + c,
            v = t[i];
          return h("td", {
            class: v ? v === i + 1 ? "ok" : "" : "empty",
            onclick: function onclick() {
              return tap(i);
            }
          }, v ? String(v) : "");
        })))));
      };
      for (var r = 0; r < n; r++) {
        _loop1(r);
      }
      tbl.className = "slp n" + n;
      tbl.replaceChildren(h.apply(void 0, ["tbody", {}].concat(rows)));
      msg.textContent = won ? "Resolvido em " + moves + " jogadas e " + secs() + "s!" : "Toque numa peça da mesma linha ou coluna do espaço vazio para deslizar. Peças no lugar certo ficam marcadas.";
      keepPut("slide", {
        n: st.n,
        t: t,
        moves: moves
      });
    };
    onClose(b, function () {
      return clearInterval(tm);
    });
    b.append(top, head, tbl, msg, btn("Embaralhar", _shuffleT, "solid"));
    var sv = keepGet("slide");
    if (sv && sv.t && sv.n === st.n) {
      t = sv.t;
      moves = sv.moves;
      t0 = 0;
      draw();
    } else _shuffleT();
  });
  ;
  var CHP = {
    P: ["............", ".....##.....", "....####....", "....####....", ".....##.....", "....####....", ".....##.....", ".....##.....", "....####....", "...######...", "..########..", "............"],
    R: ["............", "..##.##.##..", "..########..", "...######...", "...######...", "....####....", "....####....", "....####....", "...######...", "..########..", "..########..", "............"],
    N: ["............", "....##......", "...#####....", "..#######...", "..##.#####..", ".#########..", ".###.#####..", ".....#####..", "....######..", "...#######..", "..########..", "............"],
    B: ["............", ".....##.....", "....####....", "...##.###...", "...#.####...", "...######...", "....####....", ".....##.....", "....####....", "...######...", "..########..", "............"],
    Q: ["............", "..#..##..#..", "..##.##.##..", "..########..", "...######...", "....####....", "....####....", "...######...", "....####....", "...######...", "..########..", "............"],
    K: [".....##.....", "....####....", ".....##.....", "...######...", "..########..", "..########..", "...######...", "....####....", "....####....", "...######...", "..########..", "............"]
  };
  var VAL = {
    P: 100,
    N: 320,
    B: 330,
    R: 500,
    Q: 900,
    K: 0
  };
  var isW = function isW(p) {
      return p !== "." && p === p.toUpperCase();
    },
    sideOf = function sideOf(p) {
      return p === "." ? null : isW(p) ? "w" : "b";
    };
  var RC = function RC(i) {
    return [i >> 3, i & 7];
  };
  function chessStart() {
    return {
      b: "rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR".split(""),
      turn: "w",
      cs: "KQkq",
      ep: -1,
      half: 0,
      full: 1,
      last: null,
      cap: {
        w: [],
        b: []
      },
      moves: [],
      reps: {}
    };
  }
  function attacked(b, sq, by) {
    var _RC = RC(sq),
      _RC2 = _slicedToArray(_RC, 2),
      r = _RC2[0],
      c = _RC2[1],
      at = function at(rr, cc) {
        return rr >= 0 && rr < 8 && cc >= 0 && cc < 8 ? b[rr * 8 + cc] : null;
      };
    var P = by === "w" ? "P" : "p",
      N = by === "w" ? "N" : "n",
      B = by === "w" ? "B" : "b",
      R = by === "w" ? "R" : "r",
      Q = by === "w" ? "Q" : "q",
      K = by === "w" ? "K" : "k";
    var pr = by === "w" ? r + 1 : r - 1;
    if (at(pr, c - 1) === P || at(pr, c + 1) === P) return true;
    for (var _i4 = 0, _arr3 = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]; _i4 < _arr3.length; _i4++) {
      var _arr3$_i = _slicedToArray(_arr3[_i4], 2),
        dr = _arr3$_i[0],
        dc = _arr3$_i[1];
      if (at(r + dr, c + dc) === N) return true;
    }
    for (var _i5 = 0, _arr4 = [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]]; _i5 < _arr4.length; _i5++) {
      var _arr4$_i = _slicedToArray(_arr4[_i5], 2),
        _dr = _arr4$_i[0],
        _dc = _arr4$_i[1];
      if (at(r + _dr, c + _dc) === K) return true;
      var rr = r + _dr,
        cc = c + _dc;
      while (rr >= 0 && rr < 8 && cc >= 0 && cc < 8) {
        var p = b[rr * 8 + cc];
        if (p !== ".") {
          if (p === Q || (_dr && _dc ? p === B : p === R)) return true;
          break;
        }
        rr += _dr;
        cc += _dc;
      }
    }
    return false;
  }
  function kingSq(b, side) {
    return b.indexOf(side === "w" ? "K" : "k");
  }
  function inCheck(s, side) {
    return attacked(s.b, kingSq(s.b, side), side === "w" ? "b" : "w");
  }
  function pseudo(s) {
    var b = s.b,
      me = s.turn,
      out = [],
      add = function add(f, t, x) {
        return out.push(Object.assign({
          f: f,
          t: t
        }, x || {}));
      };
    var _loop10 = function _loop10(i) {
      var p = b[i];
      if (sideOf(p) !== me) return 1;
      var _RC3 = RC(i),
        _RC4 = _slicedToArray(_RC3, 2),
        r = _RC4[0],
        c = _RC4[1],
        t = p.toUpperCase();
      var free = function free(rr, cc) {
          return rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && b[rr * 8 + cc] === ".";
        },
        foe = function foe(rr, cc) {
          return rr >= 0 && rr < 8 && cc >= 0 && cc < 8 && sideOf(b[rr * 8 + cc]) && sideOf(b[rr * 8 + cc]) !== me;
        };
      if (t === "P") {
        var d = me === "w" ? -1 : 1,
          _last = me === "w" ? 0 : 7,
          start = me === "w" ? 6 : 1,
          pr = function pr(to, x) {
            if (to >> 3 === _last) "QRBN".split("").forEach(function (q) {
              return add(i, to, Object.assign({
                promo: q
              }, x));
            });else add(i, to, x);
          };
        if (free(r + d, c)) {
          pr((r + d) * 8 + c);
          if (r === start && free(r + 2 * d, c)) add(i, (r + 2 * d) * 8 + c, {
            dbl: true
          });
        }
        for (var _i6 = 0, _arr5 = [-1, 1]; _i6 < _arr5.length; _i6++) {
          var dc = _arr5[_i6];
          var rr = r + d,
            cc = c + dc;
          if (cc < 0 || cc > 7) continue;
          if (foe(rr, cc)) pr(rr * 8 + cc);else if (rr * 8 + cc === s.ep) add(i, rr * 8 + cc, {
            epc: true
          });
        }
      } else if (t === "N" || t === "K") {
        var offs = t === "N" ? [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]] : [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
        offs.forEach(function (_ref34) {
          var _ref35 = _slicedToArray(_ref34, 2),
            dr = _ref35[0],
            dc = _ref35[1];
          if (free(r + dr, c + dc) || foe(r + dr, c + dc)) add(i, (r + dr) * 8 + c + dc);
        });
        if (t === "K") {
          var opp = me === "w" ? "b" : "w",
            row = me === "w" ? 7 : 0;
          if (i === row * 8 + 4 && !attacked(b, i, opp)) {
            if (s.cs.indexOf(me === "w" ? "K" : "k") >= 0 && b[row * 8 + 5] === "." && b[row * 8 + 6] === "." && !attacked(b, row * 8 + 5, opp) && !attacked(b, row * 8 + 6, opp)) add(i, row * 8 + 6, {
              castle: "k"
            });
            if (s.cs.indexOf(me === "w" ? "Q" : "q") >= 0 && b[row * 8 + 3] === "." && b[row * 8 + 2] === "." && b[row * 8 + 1] === "." && !attacked(b, row * 8 + 3, opp) && !attacked(b, row * 8 + 2, opp)) add(i, row * 8 + 2, {
              castle: "q"
            });
          }
        }
      } else {
        var dirs = t === "B" ? [[1, 1], [1, -1], [-1, 1], [-1, -1]] : t === "R" ? [[1, 0], [-1, 0], [0, 1], [0, -1]] : [[1, 1], [1, -1], [-1, 1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
        dirs.forEach(function (_ref36) {
          var _ref37 = _slicedToArray(_ref36, 2),
            dr = _ref37[0],
            dc = _ref37[1];
          var rr = r + dr,
            cc = c + dc;
          while (rr >= 0 && rr < 8 && cc >= 0 && cc < 8) {
            var q = b[rr * 8 + cc];
            if (q === ".") add(i, rr * 8 + cc);else {
              if (sideOf(q) !== me) add(i, rr * 8 + cc);
              break;
            }
            rr += dr;
            cc += dc;
          }
        });
      }
    };
    for (var i = 0; i < 64; i++) {
      if (_loop10(i)) continue;
    }
    return out;
  }
  function applyMove(s, m) {
    var b = s.b.slice(),
      p = b[m.f],
      me = s.turn,
      n = {
        b: b,
        turn: me === "w" ? "b" : "w",
        cs: s.cs,
        ep: -1,
        half: s.half + 1,
        full: s.full + (me === "b" ? 1 : 0),
        last: [m.f, m.t],
        cap: {
          w: s.cap.w.slice(),
          b: s.cap.b.slice()
        },
        moves: s.moves,
        reps: s.reps
      };
    var taken = b[m.t];
    if (m.epc) {
      var vs = m.t + (me === "w" ? 8 : -8);
      taken = b[vs];
      b[vs] = ".";
    }
    b[m.t] = m.promo ? me === "w" ? m.promo : m.promo.toLowerCase() : p;
    b[m.f] = ".";
    if (m.castle) {
      var row = me === "w" ? 7 : 0;
      if (m.castle === "k") {
        b[row * 8 + 5] = b[row * 8 + 7];
        b[row * 8 + 7] = ".";
      } else {
        b[row * 8 + 3] = b[row * 8];
        b[row * 8] = ".";
      }
    }
    if (taken !== ".") n.cap[me].push(taken);
    if (p.toUpperCase() === "P" || taken !== ".") n.half = 0;
    if (m.dbl) n.ep = (m.f + m.t) / 2;
    var kill = function kill(sq) {
      if (sq === 63) n.cs = n.cs.replace("K", "");
      if (sq === 56) n.cs = n.cs.replace("Q", "");
      if (sq === 7) n.cs = n.cs.replace("k", "");
      if (sq === 0) n.cs = n.cs.replace("q", "");
    };
    if (p === "K") n.cs = n.cs.replace("K", "").replace("Q", "");
    if (p === "k") n.cs = n.cs.replace("k", "").replace("q", "");
    kill(m.f);
    kill(m.t);
    return n;
  }
  function legalMoves(s) {
    return pseudo(s).filter(function (m) {
      return !attacked(applyMove(s, m).b, kingSq(applyMove(s, m).b, s.turn), s.turn === "w" ? "b" : "w");
    });
  }
  var FILES = "abcdefgh",
    sqName = function sqName(i) {
      return FILES[i & 7] + (8 - (i >> 3));
    };
  var PT = {
    K: "R",
    Q: "D",
    R: "T",
    B: "B",
    N: "C",
    P: ""
  };
  function moveName(s, m) {
    var p = s.b[m.f].toUpperCase();
    if (m.castle) return m.castle === "k" ? "O-O" : "O-O-O";
    var cap = s.b[m.t] !== "." || m.epc;
    return (p === "P" ? cap ? FILES[m.f & 7] : "" : PT[p]) + (cap ? "x" : "") + sqName(m.t) + (m.promo ? "=" + PT[m.promo] : "");
  }
  function insufficient(b) {
    var ps = b.filter(function (p) {
      return p !== "." && p.toUpperCase() !== "K";
    });
    return !ps.length || ps.length === 1 && /[NBnb]/.test(ps[0]);
  }
  var CENTER = [0, 1, 2, 3, 3, 2, 1, 0];
  function evalPos(b) {
    var v = 0;
    for (var i = 0; i < 64; i++) {
      var p = b[i];
      if (p === ".") continue;
      var t = p.toUpperCase(),
        _RC5 = RC(i),
        _RC6 = _slicedToArray(_RC5, 2),
        r = _RC6[0],
        c = _RC6[1];
      var x = VAL[t] + (t === "N" || t === "B" ? (CENTER[r] + CENTER[c]) * 4 : t === "P" ? (isW(p) ? 6 - r : r - 1) * 6 + CENTER[c] * 2 : 0);
      v += isW(p) ? x : -x;
    }
    return v;
  }
  function search(s, depth, alpha, beta) {
    var ms = legalMoves(s);
    if (!ms.length) return inCheck(s, s.turn) ? -100000 - depth : 0;
    if (!depth) return (s.turn === "w" ? 1 : -1) * evalPos(s.b);
    ms.sort(function (x, y) {
      return (s.b[y.t] !== "." ? VAL[s.b[y.t].toUpperCase()] : 0) - (s.b[x.t] !== "." ? VAL[s.b[x.t].toUpperCase()] : 0);
    });
    var _iterator2 = _createForOfIteratorHelper(ms),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var m = _step2.value;
        var v = -search(applyMove(s, m), depth - 1, -beta, -alpha);
        if (v >= beta) return beta;
        if (v > alpha) alpha = v;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return alpha;
  }
  function bestMove(s, lvl) {
    var ms = legalMoves(s);
    if (!ms.length) return null;
    if (lvl === "facil" && Math.random() < .35) return pick(ms);
    var depth = lvl === "facil" ? 1 : 2;
    var best = null,
      bv = -Infinity;
    shuffle(ms).forEach(function (m) {
      var v = -search(applyMove(s, m), depth, -Infinity, Infinity) + Math.random() * 6;
      if (v > bv) {
        bv = v;
        best = m;
      }
    });
    return best;
  }
  add("chess", "Xadrez", "chess", "Jogos para dois", function (b) {
    var Z = 64,
      c = cv(8 * Z, 8 * Z),
      g = c.getContext("2d"),
      st = X("xadrez", {
        mode: "2p",
        flip: false
      });
    var top = h("div"),
      msg = h("p", {
        class: "score"
      }),
      capW = h("div", {
        class: "caps"
      }),
      capB = h("div", {
        class: "caps"
      }),
      promoBox = h("div", {
        class: "row"
      }),
      list = h("div", {
        class: "mvlist"
      });
    var S0,
      hist,
      sel = null,
      targets = [],
      thinking = false,
      promoWait = null;
    var sprite = function sprite(key, x, y, white) {
      var fg = white ? "#fff" : "#000",
        ln = "#000",
        det = white ? "#000" : "#fff";
      g.save();
      g.translate(x, y);
      g.scale(Z, Z);
      g.lineJoin = "round";
      g.lineCap = "round";
      g.lineWidth = 2.6 / Z;
      var poly = function poly(pts) {
        g.beginPath();
        g.moveTo(pts[0], pts[1]);
        for (var i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
        g.closePath();
      };
      var paint = function paint() {
        g.fillStyle = fg;
        g.fill();
        g.strokeStyle = ln;
        g.stroke();
      };
      var base = function base() {
        poly([.24, .86, .76, .86, .74, .78, .26, .78]);
        paint();
      };
      if (key === "P") {
        g.beginPath();
        g.moveTo(.36, .78);
        g.quadraticCurveTo(.38, .56, .45, .48);
        g.lineTo(.55, .48);
        g.quadraticCurveTo(.62, .56, .64, .78);
        g.closePath();
        paint();
        g.beginPath();
        g.arc(.5, .35, .12, 0, Math.PI * 2);
        paint();
        base();
      }
      if (key === "R") {
        poly([.33, .78, .35, .42, .65, .42, .67, .78]);
        paint();
        poly([.27, .42, .27, .22, .36, .22, .36, .29, .45, .29, .45, .22, .55, .22, .55, .29, .64, .29, .64, .22, .73, .22, .73, .42]);
        paint();
        base();
        g.beginPath();
        g.moveTo(.36, .5);
        g.lineTo(.64, .5);
        g.strokeStyle = det;
        g.lineWidth = 1.6 / Z;
        g.stroke();
      }
      if (key === "N") {
        poly([.30, .78, .70, .78, .70, .62, .66, .44, .62, .3, .54, .2, .46, .16, .45, .23, .36, .27, .24, .42, .23, .5, .3, .55, .4, .48, .46, .5, .38, .64, .33, .72]);
        paint();
        base();
        g.beginPath();
        g.arc(.43, .32, .025, 0, Math.PI * 2);
        g.fillStyle = det;
        g.fill();
        g.beginPath();
        g.moveTo(.46, .2);
        g.lineTo(.52, .13);
        g.lineTo(.53, .22);
        g.closePath();
        g.fillStyle = fg;
        g.fill();
        g.strokeStyle = ln;
        g.stroke();
      }
      if (key === "B") {
        g.beginPath();
        g.moveTo(.36, .74);
        g.quadraticCurveTo(.3, .5, .5, .24);
        g.quadraticCurveTo(.7, .5, .64, .74);
        g.closePath();
        paint();
        poly([.33, .78, .67, .78, .64, .72, .36, .72]);
        paint();
        g.beginPath();
        g.arc(.5, .19, .05, 0, Math.PI * 2);
        paint();
        g.beginPath();
        g.moveTo(.47, .46);
        g.lineTo(.57, .36);
        g.strokeStyle = det;
        g.lineWidth = 2 / Z;
        g.stroke();
        base();
      }
      if (key === "Q") {
        poly([.34, .78, .38, .44, .62, .44, .66, .78]);
        paint();
        poly([.26, .26, .36, .44, .64, .44, .74, .26, .62, .36, .56, .2, .5, .34, .44, .2, .38, .36]);
        paint();
        [[.26, .24], [.44, .18], [.56, .18], [.74, .24]].forEach(function (_ref38) {
          var _ref39 = _slicedToArray(_ref38, 2),
            cx = _ref39[0],
            cy = _ref39[1];
          g.beginPath();
          g.arc(cx, cy, .04, 0, Math.PI * 2);
          paint();
        });
        base();
      }
      if (key === "K") {
        poly([.34, .78, .37, .42, .63, .42, .66, .78]);
        paint();
        g.beginPath();
        g.moveTo(.3, .42);
        g.quadraticCurveTo(.3, .26, .5, .3);
        g.quadraticCurveTo(.7, .26, .7, .42);
        g.closePath();
        paint();
        poly([.46, .3, .46, .2, .41, .2, .41, .14, .46, .14, .46, .09, .54, .09, .54, .14, .59, .14, .59, .2, .54, .2, .54, .3]);
        paint();
        base();
      }
      g.restore();
    };
    var vis = function vis(i) {
      return st.flip ? 63 - i : i;
    };
    var status = function status() {
      var ms = legalMoves(S0),
        ck = inCheck(S0, S0.turn),
        who = S0.turn === "w" ? "brancas" : "pretas";
      if (!ms.length) return ck ? "Xeque-mate! Vitória das " + (S0.turn === "w" ? "pretas" : "brancas") + "." : "Afogamento: empate.";
      if (S0.half >= 100) return "Empate pela regra dos 50 lances.";
      if (insufficient(S0.b)) return "Empate: material insuficiente.";
      if ((S0.reps[S0.b.join("") + S0.turn] || 0) >= 3) return "Empate por repetição.";
      return (thinking ? "O computador está pensando…" : "Vez das " + who) + (ck ? " — XEQUE!" : "");
    };
    var over = function over() {
      return /mate|empate|Empate|Afogamento/.test(status());
    };
    var draw = function draw() {
      var _loop11 = function _loop11() {
        var i = vis(k),
          x = (k & 7) * Z,
          y = (k >> 3) * Z,
          dark = ((i >> 3) + (i & 7)) % 2;
        g.fillStyle = dark ? "#9a9a9a" : "#fff";
        g.fillRect(x, y, Z, Z);
        if (S0.last && S0.last.indexOf(i) >= 0) {
          g.fillStyle = "#000";
          [[0, 0], [Z - 10, 0], [0, Z - 10], [Z - 10, Z - 10]].forEach(function (_ref40) {
            var _ref41 = _slicedToArray(_ref40, 2),
              a = _ref41[0],
              d = _ref41[1];
            g.fillRect(x + a, y + d, 10, 3);
            g.fillRect(x + a + (a ? 7 : 0), y + d, 3, 10);
          });
        }
        var p = S0.b[i];
        if (p !== "." && p.toUpperCase() === "K" && sideOf(p) === S0.turn && inCheck(S0, S0.turn)) {
          g.fillStyle = "#000";
          for (var t = 0; t < Z; t += 6) {
            g.fillRect(x + t, y, 3, Z);
          }
          g.fillStyle = dark ? "#9a9a9a" : "#fff";
          g.fillRect(x + 6, y + 6, Z - 12, Z - 12);
        }
        if (i === sel) {
          g.fillStyle = "#000";
          g.fillRect(x, y, Z, 5);
          g.fillRect(x, y + Z - 5, Z, 5);
          g.fillRect(x, y, 5, Z);
          g.fillRect(x + Z - 5, y, 5, Z);
        }
        if (p !== ".") sprite(p.toUpperCase(), x, y, isW(p));
        if (targets.indexOf(i) >= 0) {
          g.beginPath();
          if (p !== ".") {
            g.arc(x + Z / 2, y + Z / 2, Z * .46, 0, Math.PI * 2);
            g.lineWidth = 4;
            g.strokeStyle = "#000";
            g.stroke();
          } else {
            g.arc(x + Z / 2, y + Z / 2, Z * .13, 0, Math.PI * 2);
            g.fillStyle = "#000";
            g.fill();
            g.lineWidth = 2;
            g.strokeStyle = "#fff";
            g.stroke();
          }
        }
      };
      for (var k = 0; k < 64; k++) {
        _loop11();
      }
      g.fillStyle = "#000";
      g.font = "12px Bookerly, Literata, Georgia, serif";
      for (var _k2 = 0; _k2 < 8; _k2++) {
        var f = st.flip ? 7 - _k2 : _k2;
        g.fillText(FILES[f], _k2 * Z + Z - 10, 8 * Z - 4);
        g.fillText(String(st.flip ? _k2 + 1 : 8 - _k2), 3, _k2 * Z + 13);
      }
      g.strokeStyle = "#000";
      g.lineWidth = 2;
      g.strokeRect(1, 1, 8 * Z - 2, 8 * Z - 2);
      msg.textContent = status();
      var capTxt = function capTxt(arr) {
        return arr.map(function (p) {
          return {
            P: "peão",
            N: "cavalo",
            B: "bispo",
            R: "torre",
            Q: "dama"
          }[p.toUpperCase()] || "";
        }).join(", ");
      };
      capW.textContent = "Brancas capturaram: " + (capTxt(S0.cap.w) || "—");
      capB.textContent = "Pretas capturaram: " + (capTxt(S0.cap.b) || "—");
      list.replaceChildren.apply(list, _toConsumableArray(S0.moves.reduce(function (a, mv, k) {
        if (k % 2 === 0) a.push(h("span", {}, k / 2 + 1 + ". " + mv));else a[a.length - 1].appendChild(document.createTextNode(" " + mv));
        return a;
      }, [])));
      keepPut("chess2", {
        S0: S0,
        hist: hist.slice(-40)
      });
    };
    var doMove = function doMove(m) {
      var name = moveName(S0, m);
      hist.push(JSON.stringify(S0));
      S0 = applyMove(S0, m);
      S0.moves = S0.moves.concat([name]);
      var key = S0.b.join("") + S0.turn;
      S0.reps = Object.assign({}, S0.reps, _defineProperty({}, key, (S0.reps[key] || 0) + 1));
      sel = null;
      targets = [];
      draw();
      maybeAI();
    };
    var maybeAI = function maybeAI() {
      if (st.mode === "2p" || over()) return;
      var ai = st.flip ? "w" : "b";
      if (S0.turn !== ai) return;
      thinking = true;
      draw();
      setTimeout(function () {
        var m = bestMove(S0, st.mode === "facil" ? "facil" : "medio");
        thinking = false;
        if (m) {
          if (m.promo) m.promo = "Q";
          doMove(m);
        } else draw();
      }, 60);
    };
    var tap = function tap(k) {
      if (thinking || over() || promoWait) return;
      var i = vis(k),
        me = S0.turn;
      if (st.mode !== "2p" && me === (st.flip ? "w" : "b")) return;
      if (sel !== null && targets.indexOf(i) >= 0) {
        var ms = legalMoves(S0).filter(function (m) {
          return m.f === sel && m.t === i;
        });
        if (ms.length > 1 && ms[0].promo) {
          promoWait = ms;
          promoBox.replaceChildren.apply(promoBox, [h("b", {}, "Promover para: ")].concat(_toConsumableArray(["Q", "R", "B", "N"].map(function (q) {
            return btn({
              Q: "Dama",
              R: "Torre",
              B: "Bispo",
              N: "Cavalo"
            }[q], function () {
              var mm = promoWait.find(function (x) {
                return x.promo === q;
              });
              promoWait = null;
              promoBox.replaceChildren();
              doMove(mm);
            }, q === "Q" ? "solid" : "");
          }))));
          return;
        }
        return doMove(ms[0]);
      }
      if (sideOf(S0.b[i]) === me) {
        sel = i;
        targets = legalMoves(S0).filter(function (m) {
          return m.f === i;
        }).map(function (m) {
          return m.t;
        });
        if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora.";
        draw();
        if (!targets.length) msg.textContent = inCheck(S0, me) ? "Você está em xeque: essa peça não resolve." : "Essa peça não tem lances agora.";
      } else {
        sel = null;
        targets = [];
        draw();
      }
    };
    onPointer(c, function (e) {
      var p = ptr(c, e);
      tap(Math.floor(p[1] / Z) * 8 + Math.floor(p[0] / Z));
    });
    var newGame = function newGame() {
      S0 = chessStart();
      hist = [];
      sel = null;
      targets = [];
      promoWait = null;
      promoBox.replaceChildren();
      draw();
      maybeAI();
    };
    var _drawTop = function drawTop() {
      return top.replaceChildren(segTabs([["2p", "2 jogadores"], ["facil", "Contra o PC: fácil"], ["medio", "Contra o PC: médio"]], st.mode, function (k) {
        st.mode = k;
        save();
        _drawTop();
        newGame();
      }));
    };
    c.className += " smooth";
    b.append(top, msg, capB, c, capW, promoBox, h("div", {
      class: "row"
    }, btn("Desfazer", function () {
      if (!hist.length || thinking) return;
      var n = st.mode === "2p" ? 1 : Math.min(2, hist.length);
      for (var k = 0; k < n - 1; k++) hist.pop();
      S0 = JSON.parse(hist.pop());
      sel = null;
      targets = [];
      promoWait = null;
      promoBox.replaceChildren();
      draw();
    }), btn("Virar tabuleiro", function () {
      st.flip = !st.flip;
      save();
      sel = null;
      targets = [];
      draw();
      maybeAI();
    }), btn("Novo jogo", newGame, "solid")), h("div", {
      class: "lbl2"
    }, "Lances"), list, h("p", {
      class: "muted"
    }, "Toque numa peça: as casas possíveis ficam marcadas (bolinha = andar, anel = capturar). Contra o PC você joga com as brancas; use Virar tabuleiro para jogar com as pretas."));
    _drawTop();
    var sv = keepGet("chess2");
    if (sv && sv.S0 && sv.S0.b) {
      S0 = sv.S0;
      hist = sv.hist || [];
      draw();
      maybeAI();
    } else newGame();
  });
  ;
  function boot() {
    $("#modal-x").onclick = closeModal;
    var links = document.querySelectorAll("[data-modal]");
    for (var i = 0; i < links.length; i++) (function (a) {
      a.onclick = function (e) {
        if (e.preventDefault) e.preventDefault();
        pages[a.getAttribute("data-modal")]();
        return false;
      };
    })(links[i]);
    $("#btn-auth").onclick = function () {
      pages.auth();
    };
    $("#btn-signup").onclick = function () {
      pages.auth("up");
    };
    $("#btn-login").onclick = function () {
      pages.auth("in");
    };
    $("#btn-set").onclick = function () {
      pages.settings();
    };
    $("#btn-find").onclick = function () {
      finding = !finding;
      if (!finding) $("#search").value = "";
      renderHome();
      if (finding) $("#search").focus();
    };
    $("#btn-view").onclick = function () {
      S.settings.view = isList() ? "grid" : "list";
      save();
      renderHome();
    };
    $("#logo").onclick = function (e) {
      if (e.preventDefault) e.preventDefault();
      goHome();
      setTab("home");
      return false;
    };
    $("#btn-edit").onclick = function () {
      editing = !editing;
      renderHome();
    };
    $("#clear-recent").onclick = function () {
      S.recents = [];
      save();
      renderHome();
    };
    $("#search").oninput = function () {
      renderHome();
    };
    $("#back").onclick = closeApp;
    $("#app-fav").onclick = function () {
      toggle(S.favs, current.id);
      favBtn();
    };
    document.addEventListener("keydown", function (e) {
      var tg = document.activeElement && document.activeElement.tagName;
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(tg)) {
        if (e.preventDefault) e.preventDefault();
        if (curView === "app") closeApp();
        finding = true;
        renderHome();
        $("#search").focus();
      }
      if (e.key === "Escape") closeModal();
    }, false);
    var icons = document.querySelectorAll("i[data-ic]");
    for (var j = icons.length - 1; j >= 0; j--) icons[j].parentNode.replaceChild(ic(icons[j].getAttribute("data-ic"), 20), icons[j]);
    var padTop = function padTop() {
      var hd = $("#hdr");
      if (hd) document.body.style.paddingTop = hd.offsetHeight + "px";
    };
    window.addEventListener("resize", padTop, false);
    setTimeout(padTop, 0);
    setTimeout(padTop, 1500);
    $("#app-body").addEventListener("input", draftInput, false);
    applyFont();
    setAuthLbl();
    tick();
    setInterval(tick, 30000);
    renderHome();
    locate();
    bootIdx = stIdx() || 1;
    if (!stIdx()) {
      navIdx = 1;
      try {
        history.replaceState({
          uk: 1
        }, "", location.href);
      } catch (e) {}
    } else navIdx = stIdx();
    homeIdx = here() ? null : bootIdx;
    if (here()) route();
    if (remote && session) pull();
    var nat = function nat(f) {
      return typeof f === "function" && /\[native code\]/.test(Function.prototype.toString.call(f));
    };
    rep({
      tipo: "iniciou",
      apps: apps.length,
      ms: window.__ukT0 ? new Date().getTime() - window.__ukT0 : "",
      fetchNativo: nat(window.fetch),
      promiseNativa: nat(window.Promise),
      svg: !!document.querySelector("#top svg"),
      tema: THEME
    });
  }
  window.__uk = {
    apps: apps,
    openApp: openApp,
    closeApp: closeApp,
    doOpenApp: doOpenApp,
    doCloseApp: doCloseApp,
    go: go,
    pages: pages,
    get S() {
      return S;
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, false);else boot();
})();