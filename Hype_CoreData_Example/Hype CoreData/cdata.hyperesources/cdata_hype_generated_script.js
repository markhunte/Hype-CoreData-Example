//	HYPE.documents["cdata"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="cdata.hyperesources",f="cdata",g="cdata_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/cdata_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_734F||null!=window.HYPE_dtl_734F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-734.full.min.js":"HYPE-734.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_734"+c,"HYPE_dtl_734"+c,a,d),false==!0&&(a=a||k("HYPE_w_734","HYPE_wdtl_734","HYPE-734.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_734","HYPE-734.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initLoadIToApp",source:"function(hypeDocument, element, event) {\n\n/// The text Boxes are persistent symbols\n\n\t///  we will recieve a call from the App to gather and send the each box name (id) and text as a json string.\n\t\n\tvar boxes = document.querySelectorAll('.boxtext')\n\t\n\tfor (let i = 0; i < boxes.length; i++) { \n  var cont =   hypeDocument.getElementById( boxes[i].id   ).innerText  \n\t\n \tvar json = {name: boxes[i].id , content : cont}  \n \n \tvar jsonTxt =  JSON.stringify(json);\n \t\n\twindow.webkit.messageHandlers.setcont.postMessage(jsonTxt);\n\t\n\t\n}\n\t\n\t\n\t\n\t\n\t\n}",identifier:"9"},{name:"sendEditeData",source:"function(hypeDocument, element, event) {\t\n\t/// The text Boxes are persistent symbols\n\t\n\t\n\t\t///  We send the App a message containg the text box id and innerText that we want to edit via the App\n\tvar thisBox = element.querySelector('.boxtext')\n  \tvar cont =   thisBox.innerText  // hypeDocument.getElementById(element.id + \"_text\" ).innerText  \n\t\n \tvar json = {name: thisBox.id   , content : cont}  \n \n\tvar jsonTxt =  JSON.stringify(json);\n\t\n\twindow.webkit.messageHandlers.edit.postMessage(jsonTxt);\n\t\n\t\n}",identifier:"25"},{name:"layoutAdjust",source:"function(hypeDocument, element, event) {\n/// The text Boxes are persistent symbols\n\n/// set up layout name var\n if (typeof lastLayout === 'undefined') {\n   lastLayout = \"\"\n}\n\n\n/// get the text boxes\n\tvar boxes = document.querySelectorAll('.boxtext') \n\t\n\t\n \n\t\n\n    /// change the width of the boxes depending on layout.\n    \n  if (hypeDocument.currentSceneName() == \"mainscene\" && hypeDocument.currentLayoutName() !==  lastLayout ){\n \n  for (let i = 0; i < boxes.length; i++) { \n\t\t\t\n\t\t\tvar theWidth = boxes[i].closest('.boxGroup').dataset.layoutwidth\n     \n\t\t\thypeDocument.setElementProperty(  boxes[i], 'width', theWidth)\n\t\t \n\t\t}\n\nlastLayout = \t\thypeDocument.currentLayoutName()\n\n}\n}",identifier:"150"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_734"+c](f,g,{"3":{p:1,n:"coreimage_2x.jpg",g:"114",o:true,t:"@2x"},"-2":{n:"blank.gif"},"4":{p:1,n:"coreimage-2.jpg",g:"119",o:true,t:"@1x"},"0":{p:1,n:"coreimage-1.jpg",g:"109",o:true,t:"@1x"},"5":{p:1,n:"coreimage-2_2x.jpg",g:"119",o:true,t:"@2x"},"1":{p:1,n:"coreimage-1_2x.jpg",g:"109",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"2":{p:1,n:"coreimage.jpg",g:"114",o:true,t:"@1x"}},l,[],e,[{n:"mainscene",o:"1",X:[0,1]}],
[{o:"3",A:{a:[{p:4,h:"9"},{p:4,h:"150"}]},p:"600px",a:100,Y:414,Z:896,b:100,cA:false,c:"#EBEBEB",L:[],bY:1,d:414,U:{"138":{V:{"Main Timeline":"164"},W:"164",n:"box1"},"142":{V:{"Main Timeline":"165"},W:"165",n:"box2"},"146":{V:{"Main Timeline":"166"},W:"166",n:"box3"}},T:{"164":{b:[],c:"138",q:false,z:0,i:"164",n:"Main Timeline",a:[],s:"138",f:30},"165":{b:[],c:"142",q:false,z:0,i:"165",n:"Main Timeline",a:[],s:"142",f:30},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"166":{b:[],c:"146",q:false,z:0,i:"166",n:"Main Timeline",a:[],s:"146",f:30}},bZ:180,O:["151","154","153","152","161","138","156","155","157","162","142","159","158","160","163","146"],n:"upLayout","_":0,v:{"156":{p:"no-repeat",c:75,q:"100% 100%",d:59,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"114",M:1,bF:"155",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"151":{aU:8,G:"#000",c:135,cP:"boxLabel",bS:37,aV:8,r:"inline",d:21,s:"Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",w:"Tap a box to Edit",j:"absolute",x:"visible",k:"div",y:"preserve",z:13,aS:8,aT:8,a:131,b:57},"162":{b:0,z:3,K:"Solid",c:279,cP:"boxtext",d:114,L:"Solid",M:1,bD:"none",aS:8,N:1,aT:8,O:1,g:"#9CC",aU:8,P:1,bF:"142",aV:8,i:"box2_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",w:"At w3schools.com you will learn how to make a&nbsp;",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"159":{p:"no-repeat",c:78,q:"100% 100%",d:62,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"119",M:1,bF:"158",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"154":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box1",bF:"152",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:5,aS:8,aT:8,a:169,b:-4},"160":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box3",bF:"158",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:4,aS:8,aT:8,a:171,b:-1},"157":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box2",bF:"155",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:4,aS:8,aT:8,a:172,b:-4},"152":{x:"visible",i:"box1",dY:[["data-layoutwidth","297"]],dB:"button",a:21,bS:5,aA:{a:[{p:4,h:"25"}]},cP:"boxGroup",z:15,d:171,j:"absolute",b:116,k:"div",c:373,aP:"pointer"},"146":{cS:true,x:"visible",a:72,cA:false,b:47,j:"absolute",bF:"158",c:297,k:"div",z:2,cL:"146",d:132,bY:1,bX:false,bZ:180,cM:true,cK:{a:[{p:3,b:"166",z:false}]},cV:[]},"163":{b:0,z:3,K:"Solid",c:279,cP:"boxtext",d:114,L:"Solid",M:1,bD:"none",aS:8,N:1,aT:8,O:1,g:"#9CC",aU:8,P:1,bF:"146",aV:8,i:"box3_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",w:"At w3schools.com you will learn how to make a&nbsp;",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"161":{b:0,z:3,K:"Solid",c:277,cP:"boxtext",d:112,L:"Solid",M:1,bD:"none",aS:9,N:1,aT:9,O:1,g:"#9CC",aU:9,P:1,bF:"138",aV:9,i:"box1_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",w:"At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"138":{cS:true,x:"visible",a:68,dY:[["",""]],b:40,j:"absolute",bF:"152",c:297,k:"div",z:2,d:132,cL:"138",bY:1,cA:false,bZ:180,cM:true,bX:false,cK:{a:[{p:3,b:"164",z:false}]},cV:[]},"155":{x:"visible",i:"box2",dY:[["data-layoutwidth","297"]],dB:"button",a:18,bS:5,aA:{a:[{p:4,h:"25"}]},cP:"boxGroup",z:16,d:172,j:"absolute",b:360,k:"div",c:367,aP:"pointer"},"158":{x:"visible",i:"box3",dY:[["data-layoutwidth","297"]],dB:"button",a:17,bS:5,aA:{a:[{p:4,h:"25"}]},cP:"boxGroup",z:17,d:178,j:"absolute",b:599,k:"div",c:368,aP:"pointer"},"153":{p:"no-repeat",c:74,q:"100% 100%",d:59,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"109",M:1,bF:"152",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"142":{cS:true,x:"visible",a:71,cA:false,b:41,j:"absolute",bF:"155",c:297,k:"div",z:2,cL:"142",d:132,bY:1,bX:false,bZ:180,cM:true,cK:{a:[{p:3,b:"165",z:false}]},cV:[]}}},{o:"78",A:{a:[{p:4,h:"9"},{p:4,h:"150"}]},p:"600px",a:100,Y:980,Z:400,b:100,cA:false,c:"#EBEBEB",L:[],bY:1,d:896,U:{"138":{V:{"Main Timeline":"164"},W:"164",n:"box1"},"142":{V:{"Main Timeline":"165"},W:"165",n:"box2"},"146":{V:{"Main Timeline":"166"},W:"166",n:"box3"}},T:{"164":{b:[],c:"138",q:false,z:0,i:"164",n:"Main Timeline",a:[],s:"138",f:30},"165":{b:[],c:"142",q:false,z:0,i:"165",n:"Main Timeline",a:[],s:"142",f:30},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"166":{b:[],c:"146",q:false,z:0,i:"166",n:"Main Timeline",a:[],s:"146",f:30}},bZ:180,O:["167","170","173","169","168","172","171","175","174","176","161","138","162","142","163","146"],n:"landLayout","_":1,v:{"173":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box2",bF:"171",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:172,b:-4},"162":{b:0,z:3,K:"Solid",c:279,cP:"boxtext",d:114,L:"Solid",M:1,bD:"none",aS:8,N:1,aT:8,O:1,g:"#9CC",aU:8,P:1,bF:"142",aV:8,i:"box2_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",cM:true,w:"At w3schools.com you will learn how to make a&nbsp;",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"176":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box3",bF:"174",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:171,b:-1},"171":{x:"visible",a:336,dY:[["data-layoutwidth","198"]],dB:"button",bS:40,j:"absolute",aA:{a:[{p:4,h:"25"}]},k:"div",cP:"boxGroup",d:215,z:14,b:96,c:299,aP:"pointer"},"174":{x:"visible",a:635,dY:[["data-layoutwidth","198"]],dB:"button",bS:40,j:"absolute",aA:{a:[{p:4,h:"25"}]},k:"div",cP:"boxGroup",d:220,z:15,b:96,c:302,aP:"pointer"},"168":{x:"visible",a:37,dY:[["data-layoutwidth","198"]],dB:"button",bS:40,j:"absolute",aA:{a:[{p:4,h:"25"}]},k:"div",cP:"boxGroup",d:218,z:13,b:96,c:294,aP:"pointer"},"146":{cS:true,x:"visible",a:2,cA:false,b:86,j:"absolute",bF:"174",c:297,k:"div",z:4,cL:"146",d:132,bY:1,bX:false,bZ:180,cM:true,cK:{a:[{p:3,b:"166",z:false}]},cV:[]},"163":{b:0,z:3,K:"Solid",c:279,cP:"boxtext",d:114,L:"Solid",M:1,bD:"none",aS:8,N:1,aT:8,O:1,g:"#9CC",aU:8,P:1,bF:"146",aV:8,i:"box3_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",cM:true,w:"At w3schools.com you will learn how to make a&nbsp;",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"172":{p:"no-repeat",c:75,q:"100% 100%",d:59,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"114",M:1,bF:"171",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"161":{b:0,z:3,K:"Solid",c:277,cP:"boxtext",d:112,L:"Solid",M:1,bD:"none",aS:9,N:1,aT:9,O:1,g:"#9CC",aU:9,P:1,bF:"138",aV:9,i:"box1_text",j:"absolute",k:"div",aI:6,aJ:6,aK:6,aL:6,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,dY:[],G:"#000",cM:true,w:"At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"138":{cS:true,x:"visible",a:-3,cA:false,b:86,j:"absolute",bF:"168",c:297,k:"div",z:4,cL:"138",d:132,bY:1,bX:false,bZ:180,cM:true,cK:{a:[{p:3,b:"164",z:false}]},cV:[]},"169":{p:"no-repeat",c:74,q:"100% 100%",d:59,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"109",M:1,bF:"168",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"170":{aU:8,G:"#000",cP:"boxLabel",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"box1",bF:"168",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:169,b:-4},"175":{p:"no-repeat",c:78,q:"100% 100%",d:62,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",aP:"pointer",h:"119",M:1,bF:"174",N:1,j:"absolute",x:"visible",O:1,k:"div",P:1,aJ:2,dB:"img",z:1,aI:2,aK:2,a:-1,aL:2,b:-1},"142":{cS:true,x:"visible",a:0,cA:false,b:86,j:"absolute",bF:"171",c:297,k:"div",z:4,cL:"142",d:132,bY:1,bX:false,bZ:180,cM:true,cK:{a:[{p:3,b:"165",z:false}]},cV:[]},"167":{aU:8,G:"#000",c:135,cP:"boxLabel",bS:37,aV:8,r:"inline",d:21,s:"Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",w:"Tap a box to Edit",j:"absolute",x:"visible",k:"div",y:"preserve",z:12,aS:8,aT:8,a:414,F:"center",b:37}}}],{"138":["161"],"142":["162"],"146":["163"]},h,{},null,false,false,-1,true,false,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
