var win8=win8 || {
	"elements":{},
	"tiles":[],
	"s":{},
	"DOM":{
		"h":[],
		"v":[],
		"s11":[],
		"s22":[],
		"s42":[],
		"s44":[]
	},
	"get":[]
};
window.onload=function() {
	for(var i=0;i<16;i++)
		document.body.innerHTML+="<div id='tile"+
			i+
			"' class='tile "+
			((Math.ceil(Math.random()*10)%2)?"vertical ":"horizontal ")+
			rs("cn")+
			"'><div class='front active'>front</div><div class='back'>back</div></div>";
	processTiles();
	processDOM();
	document.onmousedown=bindDrag;
	document.onmousemove=bindDrag.move;
	document.onmouseup=bindDrag.destroy;
};
window.toggleClass=function(element,cls) {
	if(element.classList.contains(cls)) element.classList.remove(cls);
	else element.classList.add(cls);
};
function rs(q) {
	var r;
	if(q=="cn") {
		switch(Math.ceil(Math.random()*100)%4) {
			case 0:return "s11";
			case 1:return "s22";
			case 2:return "s42";
			case 3:return "s44";
		}
	} else if(q=="s11") {
		r={"w":"42px","h":"42px"}
	} else if(q=="s22") {
		r={"w":"92px","h":"92px"}
	} else if(q=="s42") {
		r={"w":"196px","h":"92px"}
	} else if(q=="s44") {
		r={"w":"196px","h":"196px"}
	} else {
	}
	return r;
}
function processTiles() {
	var tiles=document.getElementsByClassName("tile");
	for(var i=0;i<tiles.length;i++) {
		var id=tiles[i].getAttribute("id");
		var e=tiles[i];
		win8.elements[id]={
			"id":id,
			"do":e,
			"active":e.getElementsByClassName("active")[0].classList.contains("front")?"front":"back",
			"data": {
				"front":e.getElementsByClassName("front")[0].innerHTML,
				"back":e.getElementsByClassName("back")[0].innerHTML
			}
		};
		win8.get.push(id);
	}
	win8.tiles=tiles;
}
function processDOM() {
	var tiles=win8.tiles;
	var len=tiles.length;
	win8.s={
		"aw":screen.availWidth,
		"ah":screen.availHeight,
		"w":screen.width,
		"h":screen.height,
		"dir":screen.orientation.type.includes("portrait")?"p":"l"
	};
	for(var i=0;i<tiles.length;i++) {
		var e=tiles[i];
		var id=e.getAttribute("id");
		var td=e.className.match(/s(\d)(\d)/i);
		var so=rs(td[0]);
		new bindDrag(e);
		/*
		win8.elements[id]["v"]=td[2];
		win8.elements[id]["h"]=td[1];
		*/
		win8.elements[id]["size"]=td[0];
		win8.DOM[td[0]].push({"i":i,"e":e}); /********Error**********/
		//win8.DOM.ele.push(win8.elements[id]);
		/*
		win8.DOM.h.push(td[1]);
		win8.DOM.v.push(td[2]);
		*/
		//hl+=Number(td[1]); vl+=Number(td[2]); area+=(td[1]*td[2]);
		e.style.width=rs(td[0]).w;
		e.style.height=rs(td[0]).h;
	}
	adjustTiles();
}
/*
class Draggable {
	constructor(e) {
		if(typeof e=="string") {
			e=document.getElementById(e);
		}
		this.e=e;
	}
	get init() {
		this.e.onmousedown=function() {
			Draggable.selected=this.e;
			return false;
		}
	}
}
*/
function bindDrag(element) {
	element.onmousedown=function() {
		bindDrag.init(element);
		return false;
	};
}
bindDrag.init=function(element) {
	bindDrag.selected=element;
	bindDrag.x_ele=bindDrag.x_pos-bindDrag.selected.offsetLeft;
	bindDrag.y_ele=bindDrag.y_pos-bindDrag.selected.offsetTop;
};
bindDrag.move=function(e) {
	bindDrag.x_pos = document.all ? window.event.clientX : e.pageX;
	bindDrag.y_pos = document.all ? window.event.clientY : e.pageY;
	if (bindDrag.selected!=null) {
		bindDrag.selected.style.left=(bindDrag.x_pos-bindDrag.x_ele)+'px';
		bindDrag.selected.style.top=(bindDrag.y_pos-bindDrag.y_ele)+'px';
    }
};
bindDrag.destroy=function() {
	if(bindDrag.selected!=null) {
		var elem=bindDrag.selected;
		var left=Number(elem.style.left.match(/\d+/g));
		var top=Number(elem.style.top.match(/\d+/g));
		elem.style.left=(Math.round(left/50)*50+"px");
		elem.style.top=(Math.round(top/50)*50+"px");
		bindDrag.selected=null;
	}
};
function adjustTiles() {
	var setpos=function(ele,left,top) {
		console.log(ele);
		if(typeof ele!="object")
			ele=(typeof ele=="string")?win8.elements[ele].e:win8.tiles[ele];
		ele.style.left=(left*50)+"px";
		ele.style.top=(top*50)+"px";
		console.log(left+":"+top);
	};
	var get=function(i) {
		return win8.elements[win8.get[i]];
	};
	var l4x4=0,t4x4=0;
	var i=0;
	var make4x4=function(l,t) {
		if(ptiles[0].s=="s11" || ptiles[0].s=="s22") {
			make2x2(l,t);
			make2x2(l+2,t);
			make4x2(l,t+2);
		} else if(ptiles[0].s=="s42") {
			make4x2(l,t);
			make4x2(l,t+2);
		} else if(ptiles[0].s=="s44") {
			setpos(ptiles[0].e,l,t);
			ptiles=filter(ptiles,0);
		}
	};
	var make4x2=function(l,t) {
		var i=0;
		while(ptiles.length>0) {
			if(ptiles[i].s=="s11" || ptiles[i].s=="s22") {
				make2x2(l,t);
				make2x2(l+2,t);
				break;
			} else if(ptiles[i].s=="s42") {
				setpos(ptiles[i].e,l,t);
				ptiles=filter(ptiles,i);
				break;
			} else if(ptiles[i].s=="s44" && i<(ptiles.length-1)) {
				i++;
			} else {
				break;
			}
		}
	};
	var make2x2=function(l,t) {
		var index=0;
		var gets11tiles=function(i) {
			var s11e=[];
			for(var j=i;j<ptiles.length && s11e.length<4;j++) {
				if(ptiles[j].s=="s11") {
					s11e.push(ptiles[j]);
					delete ptiles[j];
				}
			}
			return s11e;
		};
		while(ptiles.length>0) {
			if(ptiles[index].s=="s11") {
				var s11e=gets11tiles(index);
				console.log(s11e);
				for(var j=0;j<s11e.length;j++) {
					setpos(s11e[j].e,l+(j)%2,t+Math.floor(j/2));
				}
				console.log(ptiles);
				ptiles=filter(ptiles);
				console.log(ptiles);
				break;
			} else if(ptiles[index].s=="s22") {
				setpos(ptiles[index].e,l,t);
				ptiles=filter(ptiles,index);
				break;
			} else if((ptiles[index].s=="s42" || ptiles[index].s=="s44") && index<(ptiles.length-1)) {
				index++;
			} else {
				break;
			}
		}
	};
	var filter=function(arr,index) {
		if(index!=undefined && index.length)
			index.forEach(function(v,i) {
				delete arr[i];
			});
		else if(index!=undefined)
			delete arr[index];
		return arr.filter(function(v) {
			if(v!=null) return v;
		});
	};
	var ptiles=[];
	win8.get.forEach(function(v,i) {
		ptiles.push({
			"e":win8.tiles[i],
			"s":win8.elements[v].size
		});
	});
	console.log(ptiles);
	while(ptiles.length>0) {
		make4x4(l4x4,t4x4);
		i++;
		l4x4=(i%3)==0?0:(i%3)==1?4:8;
		t4x4=Math.floor(i/3)*4;
	}
}
