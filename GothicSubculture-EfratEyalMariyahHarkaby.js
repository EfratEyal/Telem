(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"GothicSubculture_EfratEyalMariyahHarkaby_atlas_", frames: [[3713,0,297,244],[2400,1064,1198,495],[1016,1596,512,512],[0,0,1198,574],[3653,602,408,169],[3111,0,600,600],[2072,1596,243,98],[3600,1292,243,98],[3845,1291,243,98],[2904,1561,500,685],[1200,910,401,107],[3845,1391,243,98],[3600,1392,243,98],[0,1108,508,690],[3845,991,243,98],[3111,880,401,107],[0,576,1198,530],[3845,1091,243,98],[3406,1561,499,683],[3514,882,401,107],[1603,910,243,99],[1200,0,709,908],[1911,0,1198,530],[1911,532,1198,530],[3713,246,256,256],[3971,246,99,102],[2400,1561,502,692],[3713,504,178,64],[0,1804,540,275],[3111,602,540,276],[1200,1064,1198,530],[0,2110,1185,142],[3600,1192,243,98],[3600,1092,243,98],[3600,991,243,99],[3845,1191,243,98],[510,1108,504,694],[3653,773,411,107],[1530,1596,540,275]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bat_infor = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.batkeiv_text = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33copy = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.classic_batkeiv = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.classic_darck80 = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.classic_gothrock = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.classic_people = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.classsic_title = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cyber_coldvibe = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cyber_ebm = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cyber_people = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cyber_techno = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cyber_title = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ebm_text = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fery_pegani = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fery_people = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fery_title = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.fery_viking = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.goth_explanation = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gothrock_text = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.melodik_text = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.playb = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.reguliar = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.reset_text_b = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.signon_levush = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.signon_music = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.tecn_text = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Title1 = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.victorian_deathmetal = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.victorian_dommetal = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.victorian_melodik = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.victorian_opera = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.victorian_people = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.victorian_title = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.zramim_goths = function() {
	this.spriteSheet = ss["GothicSubculture_EfratEyalMariyahHarkaby_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.what_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bat_infor();
	this.instance.parent = this;
	this.instance.setTransform(-12,-25,0.236,0.205);

	this.text = new cjs.Text("?מהי תרבות גותית", "12px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 95;
	this.text.parent = this;
	this.text.setTransform(25.4,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-25,70,50);


(lib.what = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goth_explanation();
	this.instance.parent = this;
	this.instance.setTransform(-158.3,-190,0.447,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.3,-190,316.7,380);


(lib.viking_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fery_viking();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.victorian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_people();
	this.instance.parent = this;
	this.instance.setTransform(-125,-175,0.496,0.504);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-175,250,350);


(lib.tecn_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cyber_techno();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-29,-17,0.064,0.064);

	this.instance_1 = new lib.reset_text_b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-14,0.393,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-17,103.6,33);


(lib.play_melodic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("gothicmetalepicaThePhantomAgonymp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.playb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.play_batkeiv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("batcaveSpecimenKissKissBangBangmp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.playb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.play_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("victoriandraconiandeathcomenearmemp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.play();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.156,0.156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.pegani_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fery_pegani();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.opera_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_opera();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.melodic_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_melodik();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.gothrock_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classic_gothrock();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-104,-33.5,0.51,0.397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-33.5,208,67.1);


(lib.fery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fery_people();
	this.instance.parent = this;
	this.instance.setTransform(-88,-175,0.501,0.512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-175,250,350);


(lib.ebm_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cyber_ebm();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.dommetal_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_dommetal();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.deathmetal_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_deathmetal();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.dark_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classic_darck80();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.cyber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cyber_people();
	this.instance.parent = this;
	this.instance.setTransform(-85,-115,0.335,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-115,170,230);


(lib.coldvibe_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cyber_coldvibe();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-5.3,0.018,0.018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,10.7,10.7);


(lib.classic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classic_people();
	this.instance.parent = this;
	this.instance.setTransform(-125,-175,0.5,0.511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-175,250,350);


(lib.batkeiv_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classic_batkeiv();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22.5,0.477,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-22.5,116,45);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.victorian_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.victorian_title();
	this.instance.parent = this;
	this.instance.setTransform(-90,-25,0.438,0.467);

	this.instance_1 = new lib.glow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-25,180,50);


(lib.play_tecn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("technocombichristelectroheadmp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.play_batkeiv = new lib.play_batkeiv();
	this.play_batkeiv.parent = this;
	this.play_batkeiv.setTransform(49.5,51,1,1,0,0,0,49.5,51);
	new cjs.ButtonHelper(this.play_batkeiv, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.play_batkeiv).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.fery_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fery_title();
	this.instance.parent = this;
	this.instance.setTransform(-85,-25,0.424,0.467);

	this.instance_1 = new lib.glow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-25,170,50);


(lib.cyber_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cyber_title();
	this.instance.parent = this;
	this.instance.setTransform(-85,-25,0.424,0.467);

	this.instance_1 = new lib.glow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-25,170,50);


(lib.close_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.close();
	this.instance.parent = this;
	this.instance.setTransform(4.7,14.5,1,1,0,0,0,3.3,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADUg2QgJA4g0AqQg+AyhYAAQhYAAg+gyQg+gxAAhGQAAgJACgJ");
	this.shape.setTransform(1.1,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiVB4Qg2grgHg8IgBgRQAAhFA+gyQA+gyBXAAQBYAAA+AyQA+AyAABFIgBASQgBAOgFAOIgBADQgPAngnAgQg+AyhYAAQhXAAg+gyg");
	this.shape_1.setTransform(1.9,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-19.4,44.3,37.8);


(lib.close_dom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.close_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(649.6,130.2,1.322,1.322,0,0,0,1.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(620.5,105.7,58,49.6);


(lib.classic_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classsic_title();
	this.instance.parent = this;
	this.instance.setTransform(-85,-25,0.424,0.467);

	this.instance_1 = new lib.glow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-25,170,50);


(lib.batkeiv_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("להשמעה", "20px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(364.5,207.9);

	this.instance = new lib.play_batkeiv();
	this.instance.parent = this;
	this.instance.setTransform(248.5,199,0.505,0.49,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.batkeiv_x = new lib.close_dom();
	this.batkeiv_x.parent = this;
	this.batkeiv_x.setTransform(-613,-93.9);
	new cjs.ButtonHelper(this.batkeiv_x, 0, 1, 1);

	this.instance_1 = new lib.batkeiv_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.501,0.566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.batkeiv_x},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.batkeiv_text_1, new cjs.Rectangle(0,0,600,280), null);


(lib.tecn_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("technocombichristelectroheadmp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("להשמעה", "20px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(351.5,204.9);

	this.instance = new lib.play_tecn();
	this.instance.parent = this;
	this.instance.setTransform(238.5,192,0.505,0.49,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.tecn_x = new lib.close_dom();
	this.tecn_x.parent = this;
	this.tecn_x.setTransform(-601.9,-95.9);
	new cjs.ButtonHelper(this.tecn_x, 0, 1, 1);

	this.instance_1 = new lib.tecn_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.501,0.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.tecn_x},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tecn_text_1, new cjs.Rectangle(0,0,600,276), null);


(lib.melodic_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("להשמעה", "20px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(369.5,215.9);

	this.instance = new lib.play_melodic1();
	this.instance.parent = this;
	this.instance.setTransform(260.6,202,0.505,0.49);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.melodic_x = new lib.close_dom();
	this.melodic_x.parent = this;
	this.melodic_x.setTransform(-616.9,-98.9);
	new cjs.ButtonHelper(this.melodic_x, 0, 1, 1);

	this.instance_1 = new lib.melodik_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.501,0.528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.melodic_x},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.melodic_text, new cjs.Rectangle(0,0,600,280), null);


(lib.gothrock_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gothrock_xx = new lib.close_dom();
	this.gothrock_xx.parent = this;
	this.gothrock_xx.setTransform(-607.9,-93.9);
	new cjs.ButtonHelper(this.gothrock_xx, 0, 1, 1);

	this.instance = new lib.gothrock_text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.501,0.528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.gothrock_xx}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gothrock_text_1, new cjs.Rectangle(0,0,600,280), null);


(lib.ebm_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ebm_x = new lib.close_dom();
	this.ebm_x.parent = this;
	this.ebm_x.setTransform(-617.9,-98.9);
	new cjs.ButtonHelper(this.ebm_x, 0, 1, 1);

	this.instance = new lib.ebm_text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.501,0.528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.ebm_x}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ebm_text_1, new cjs.Rectangle(0,0,600,280), null);


(lib.dommetal_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Base
	this.text = new cjs.Text("להשמעה", "20px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(30.5,77);

	this.play_btn = new lib.play_1();
	this.play_btn.parent = this;
	this.play_btn.setTransform(-38,88);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2);

	this.close_dom = new lib.close_dom();
	this.close_dom.parent = this;
	this.close_dom.setTransform(-910.2,-238.7);
	new cjs.ButtonHelper(this.close_dom, 0, 1, 1);

	this.instance = new lib.Bitmap33copy();
	this.instance.parent = this;
	this.instance.setTransform(-300,-143.7,0.501,0.501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_dom},{t:this.play_btn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dommetal_text, new cjs.Rectangle(-300,-143.7,600,287.5), null);


// stage content:
(lib.GothicSubcultureEfratEyalMariyahHarkaby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var wasclicked = 0
		
		
		//הסתרת תמונות ביגוד גותיים+טיבת טקסט הסבר
		
		this.classic.alpha = 0;
		this.victorian.alpha = 0;
		this.cyber.alpha = 0;
		this.fery.alpha = 0;
		this.what.alpha = 0;
		this.dommetal_text.alpha = 0;
		this.tecn_text.alpha = 0;
		this.melodic_text.alpha = 0;
		this.gothrock_text.alpha = 0;
		this.ebm_text.alpha = 0;
		this.batkeiv_text.alpha = 0;
		
		// הוספת ארוע מעבר עכבר
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.classic_btn.addEventListener("mouseover", fl_MouseOverclassic.bind(this));
		
		function fl_MouseOverclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 1;
				console.log("in");
			}
		}
		
		this.victorian_btn.addEventListener("mouseover", fl_MouseOvervicorian.bind(this));
		function fl_MouseOvervicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 1;
				console.log("in");
			}
		}
		
		this.cyber_btn.addEventListener("mouseover", fl_MouseOvercyber.bind(this));
		function fl_MouseOvercyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 1;
				console.log("in");
			}
		}
		
		this.fery_btn.addEventListener("mouseover", fl_MouseOverfery.bind(this));
		function fl_MouseOverfery() {
			if (wasclicked == 0) {
				this.fery.alpha = 1;
				console.log("in");
			}
		}
		
		
		
		this.gothrock_btn.addEventListener("mouseover", fl_MouseOverclassic.bind(this));
		function fl_MouseOverclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.dark_btn.addEventListener("mouseover", fl_MouseOverclassic.bind(this));
		function fl_MouseOverclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.batkeiv_btn.addEventListener("mouseover", fl_MouseOverclassic.bind(this));
		function fl_MouseOverclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 1;
				console.log("in");
			}
		}
		
		this.opera_btn.addEventListener("mouseover", fl_MouseOvervicorian.bind(this));
		function fl_MouseOvervicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 1;
				console.log("in");
			}
		}
		
		
		
		this.melodic_btn.addEventListener("mouseover", fl_MouseOvervicorian.bind(this));
		function fl_MouseOvervicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.deathmetal_btn.addEventListener("mouseover", fl_MouseOvervicorian.bind(this));
		function fl_MouseOvervicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.dommetal_btn.addEventListener("mouseover", fl_MouseOvervicorian.bind(this));
		function fl_MouseOvervicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 1;
				console.log("in");
			}
		}
		
		this.ebm_btn.addEventListener("mouseover", fl_MouseOvercyber.bind(this));
		function fl_MouseOvercyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 1;
				console.log("in");
			}
		}
		
		this.tecno_btn.addEventListener("mouseover", fl_MouseOvercyber.bind(this));
		function fl_MouseOvercyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.coldvibe_btn.addEventListener("mouseover", fl_MouseOvercyber.bind(this));
		function fl_MouseOvercyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 1;
				console.log("in");
			}
		}
		
		
		
		this.viking_btn.addEventListener("mouseover", fl_MouseOverfery.bind(this));
		function fl_MouseOverfery() {
			if (wasclicked == 0) {
				this.fery.alpha = 1;
				console.log("in");
			}
		}
		
		
		this.pegani_btn.addEventListener("mouseover", fl_MouseOverfery.bind(this));
		function fl_MouseOverfery() {
			if (wasclicked == 0) {
				this.fery.alpha = 1;
				console.log("in");
			}
		}
		
		
		
		// הוספת ארוע יציאת עכבר
		this.classic_btn.addEventListener("mouseout", fl_MouseOutclssic.bind(this));
		function fl_MouseOutclssic() {
			if (wasclicked == 0) {
				this.classic.alpha = 0
			}
		}
		
		this.victorian_btn.addEventListener("mouseout", fl_MouseOutvicorian.bind(this));
		function fl_MouseOutvicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 0
			}
		}
		
		this.cyber_btn.addEventListener("mouseout", fl_MouseOutcyber.bind(this));
		function fl_MouseOutcyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 0
			}
		}
		
		this.fery_btn.addEventListener("mouseout", fl_MouseOutfery.bind(this));
		function fl_MouseOutfery() {
			if (wasclicked == 0) {
				this.fery.alpha = 0
			}
		}
		
		
		
		this.gothrock_btn.addEventListener("mouseout", fl_MouseOutclassic.bind(this));
		function fl_MouseOutclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 0
			}
		}
		
		this.dark_btn.addEventListener("mouseout", fl_MouseOutclassic.bind(this));
		function fl_MouseOutclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 0
			}
		}
		
		
		this.batkeiv_btn.addEventListener("mouseout", fl_MouseOutclassic.bind(this));
		function fl_MouseOutclassic() {
			if (wasclicked == 0) {
				this.classic.alpha = 0
			}
		}
		
		this.opera_btn.addEventListener("mouseout", fl_MouseOutvicorian.bind(this));
		function fl_MouseOutvicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 0
			}
		}
		
		this.melodic_btn.addEventListener("mouseout", fl_MouseOutvicorian.bind(this));
		function fl_MouseOutvicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 0
			}
		}
		
		
		this.deathmetal_btn.addEventListener("mouseout", fl_MouseOutvicorian.bind(this));
		function fl_MouseOutvicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 0
			}
		}
		
		
		this.dommetal_btn.addEventListener("mouseout", fl_MouseOutvicorian.bind(this));
		function fl_MouseOutvicorian() {
			if (wasclicked == 0) {
				this.victorian.alpha = 0
			}
		}
		
		
		
		this.ebm_btn.addEventListener("mouseout", fl_MouseOutcyber.bind(this));
		function fl_MouseOutcyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 0
			}
		}
		
		this.tecno_btn.addEventListener("mouseout", fl_MouseOutcyber.bind(this));
		function fl_MouseOutcyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 0
			}
		}
		
		this.coldvibe_btn.addEventListener("mouseout", fl_MouseOutcyber.bind(this));
		function fl_MouseOutcyber() {
			if (wasclicked == 0) {
				this.cyber.alpha = 0
			}
		}
		
		
		this.viking_btn.addEventListener("mouseout", fl_MouseOutvictorian.bind(this));
		function fl_MouseOutvictorian() {
			if (wasclicked == 0) {
				this.fery.alpha = 0
			}
		}
		
		this.pegani_btn.addEventListener("mouseout", fl_MouseOutvictorian.bind(this));
		function fl_MouseOutvictorian() {
			if (wasclicked == 0) {
				this.fery.alpha = 0
			}
		}
		
		
		//הוספת ארוע לחיצה על בחירת סגנון גותי
		this.classic_btn.addEventListener("click", f_MouseClickclassic.bind(this));
		function f_MouseClickclassic(event) {
			this.classic.alpha = 1;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			classic_music.bind(this)();
		}
		
		
		this.victorian_btn.addEventListener("click", f_MouseClickvictorian.bind(this));
		function f_MouseClickvictorian(event) {
			this.victorian.alpha = 1;
			this.classic.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.victorian_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			victorian_music.bind(this)();
		}
		
		this.cyber_btn.addEventListener("click", f_MouseClickcyber.bind(this));
		function f_MouseClickcyber(event) {
			this.cyber.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.fery.alpha = 0;
			this.cyber_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			cyber_music.bind(this)();
		}
		
		this.fery_btn.addEventListener("click", f_MouseClickfery.bind(this));
		function f_MouseClickfery(event) {
			this.fery.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			fery_music.bind(this)();
		}
		
		
		
		this.gothrock_btn.addEventListener("click", f_MouseClickclassic.bind(this));
		function f_MouseClickclassic(event) {
			this.classic.alpha = 1;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			classic_music.bind(this)();
		}
		
		this.dark_btn.addEventListener("click", f_MouseClickclassic.bind(this));
		function f_MouseClickclassic(event) {
			this.classic.alpha = 1;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			classic_music.bind(this)();
		}
		
		
		this.batkeiv_btn.addEventListener("click", f_MouseClickclassic.bind(this));
		function f_MouseClickclassic(event) {
			this.classic.alpha = 1;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			classic_music.bind(this)();
		}
		
		
		this.opera_btn.addEventListener("click", f_MouseClickvictorian.bind(this));
		function f_MouseClickvictorian(event) {
			this.victorian.alpha = 1;
			this.classic.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.victorian_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			victorian_music.bind(this)();
		}
		
		this.melodic_btn.addEventListener("click", f_MouseClickvictorian.bind(this));
		function f_MouseClickvictorian(event) {
			this.victorian.alpha = 1;
			this.classic.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.victorian_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			victorian_music.bind(this)();
		}
		
		this.deathmetal_btn.addEventListener("click", f_MouseClickvictorian.bind(this));
		function f_MouseClickvictorian(event) {
			this.victorian.alpha = 1;
			this.classic.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.victorian_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			victorian_music.bind(this)();
		}
		
		
		this.dommetal_btn.addEventListener("click", f_MouseClickvictorian.bind(this));
		function f_MouseClickvictorian(event) {
			this.victorian.alpha = 1;
			this.classic.alpha = 0;
			this.cyber.alpha = 0;
			this.fery.alpha = 0;
			this.victorian_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			victorian_music.bind(this)();
		}
		
		
		this.ebm_btn.addEventListener("click", f_MouseClickcyber.bind(this));
		function f_MouseClickcyber(event) {
			this.cyber.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.fery.alpha = 0;
			this.cyber_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			cyber_music.bind(this)();
		}
		
		
		this.tecno_btn.addEventListener("click", f_MouseClickcyber.bind(this));
		function f_MouseClickcyber(event) {
			this.cyber.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.fery.alpha = 0;
			this.cyber_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			cyber_music.bind(this)();
		}
		
		this.coldvibe_btn.addEventListener("click", f_MouseClickcyber.bind(this));
		function f_MouseClickcyber(event) {
			this.cyber.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.fery.alpha = 0;
			this.cyber_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			cyber_music.bind(this)();
		}
		
		
		this.viking_btn.addEventListener("click", f_MouseClickfery.bind(this));
		function f_MouseClickfery(event) {
			this.fery.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			fery_music.bind(this)();
		}
		
		this.pegani_btn.addEventListener("click", f_MouseClickfery.bind(this));
		function f_MouseClickfery(event) {
			this.fery.alpha = 1;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery_btn.alpha = 1;
			this.classic_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			wasclicked = 1;
			console.log(wasclicked);
			fery_music.bind(this)();
		}
		
		
		
		//הוספת ארוע לחיצה על עתלף
		this.what_btn.addEventListener("click", f_MouseClickwhat.bind(this));
		function f_MouseClickwhat(event) {
			if (wasclicked == 1) {
				this.what.alpha = 0;
				wasclicked = 0
			} else {
				this.what.alpha = 1;
				wasclicked = 1
				console.log(wasclicked);
			}
		}
		
		
		//הוספת ארוע לחיצה על כפתור איפוס
		this.reset_btn.addEventListener("click", fl_MouseClickOnReset.bind(this));
		
		function fl_MouseClickOnReset() {
			this.fery.alpha = 0;
			this.classic.alpha = 0;
			this.victorian.alpha = 0;
			this.cyber.alpha = 0;
			this.fery_btn.alpha = 1;
			this.classic_btn.alpha = 1;
			this.cyber_btn.alpha = 1;
			this.victorian_btn.alpha = 1;
			this.ebm_btn.alpha = 1;
			this.viking_btn.alpha = 1;
			this.dommetal_btn.alpha = 1;
			this.tecno_btn.alpha = 1;
			this.opera_btn.alpha = 1;
			this.dark_btn.alpha = 1;
			this.batkeiv_btn.alpha = 1;
			this.melodic_btn.alpha = 1;
			this.gothrock_btn.alpha = 1;
			this.pegani_btn.alpha = 1;
			this.deathmetal_btn.alpha = 1;
			this.coldvibe_btn.alpha = 1;
			wasclicked = 0;
		
		}
		
		//סינונים של מוזיקה לפי סוגי גותים
		
		function classic_music() {
			this.ebm_btn.alpha = 0.2;
			this.viking_btn.alpha = 0.2;
			this.dommetal_btn.alpha = 0.2;
			this.tecno_btn.alpha = 0.2;
			this.opera_btn.alpha = 0.2;
			this.dark_btn.alpha = 1;
			this.batkeiv_btn.alpha = 1;
			this.melodic_btn.alpha = 0.2;
			this.gothrock_btn.alpha = 1;
			this.pegani_btn.alpha = 0.2;
			this.deathmetal_btn.alpha = 0.2;
			this.coldvibe_btn.alpha = 0.2;
		}
		
		function victorian_music() {
			this.ebm_btn.alpha = 0.2;
			this.viking_btn.alpha = 0.2;
			this.dommetal_btn.alpha = 1;
			this.tecno_btn.alpha = 0.2;
			this.opera_btn.alpha = 1;
			this.dark_btn.alpha = 0.2;
			this.batkeiv_btn.alpha = 0.2;
			this.melodic_btn.alpha = 1;
			this.gothrock_btn.alpha = 0.2;
			this.pegani_btn.alpha = 0.2;
			this.deathmetal_btn.alpha = 1;
			this.coldvibe_btn.alpha = 0.2;
		}
		
		function cyber_music() {
			this.ebm_btn.alpha = 1;
			this.viking_btn.alpha = 0.2;
			this.dommetal_btn.alpha = 0.2;
			this.tecno_btn.alpha = 1;
			this.opera_btn.alpha = 0.2;
			this.dark_btn.alpha = 0.2;
			this.batkeiv_btn.alpha = 0.2;
			this.melodic_btn.alpha = 0.2;
			this.gothrock_btn.alpha = 0.2;
			this.pegani_btn.alpha = 0.2;
			this.deathmetal_btn.alpha = 0.2;
			this.coldvibe_btn.alpha = 1;
		}
		
		function fery_music() {
			this.ebm_btn.alpha = 0.2;
			this.viking_btn.alpha = 1;
			this.dommetal_btn.alpha = 0.2;
			this.tecno_btn.alpha = 0.2;
			this.opera_btn.alpha = 0.2;
			this.dark_btn.alpha = 0.2;
			this.batkeiv_btn.alpha = 0.2;
			this.melodic_btn.alpha = 0.2;
			this.gothrock_btn.alpha = 0.2;
			this.pegani_btn.alpha = 1;
			this.deathmetal_btn.alpha = 0.2;
			this.coldvibe_btn.alpha = 0.2;
		}
		
		
		
		//הוספת הסבר לפתיחה וסגירה של תיבת טקסט דומטאל
		this.dommetal_btn.addEventListener("click", f_opendommetal.bind(this));
		
		function f_opendommetal() {
			this.dommetal_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.dommetal_text.close_dom.addEventListener("click", f_closedommetal.bind(this));
		
		function f_closedommetal() {
			this.dommetal_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		
		//הוספת הסבר לפתיחת וסגירה תיבת טקסט גותרוק
		
		this.gothrock_btn.addEventListener("click", f_opengothrock.bind(this));
		
		function f_opengothrock() {
			this.gothrock_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.gothrock_text.gothrock_xx.addEventListener("click", f_closegothrock.bind(this));
		
		function f_closegothrock() {
			this.gothrock_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		
		//הוספת הסבר לפתיחת וסגירה תיבת טקסט מלודיק
		
		this.melodic_btn.addEventListener("click", f_openmelodic.bind(this));
		
		function f_openmelodic() {
			this.melodic_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.melodic_text.melodic_x.addEventListener("click", f_closemelodic.bind(this));
		
		function f_closemelodic() {
			this.melodic_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		//הוספת הסבר לפתיחת וסגירת תיבת טקסט איביאם
		
		this.ebm_btn.addEventListener("click", f_openebm.bind(this));
		
		function f_openebm() {
			this.ebm_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.ebm_text.ebm_x.addEventListener("click", f_closeebm.bind(this));
		
		function f_closeebm() {
			this.ebm_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		//הוספת הסבר לפתיחת וסגירה תיבת טקסט באטקייב
		
		this.batkeiv_btn.addEventListener("click", f_openbatkeiv.bind(this));
		
		function f_openbatkeiv() {
			this.batkeiv_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.batkeiv_text.batkeiv_x.addEventListener("click", f_closbatkeiv.bind(this));
		
		function f_closbatkeiv() {
			this.batkeiv_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		
		//הוספת הסבר לפתיחת תיבת טקסט טכנו
		this.tecno_btn.addEventListener("click", f_opentecn.bind(this));
		
		function f_opentecn() {
			this.tecn_text.alpha = 1;
			wasclicked = 1;
			console.log(wasclicked);
		}
		
		
		this.tecn_text.tecn_x.addEventListener("click", f_closetecn.bind(this));
		
		function f_closetecn() {
			this.tecn_text.alpha = 0;
			wasclicked = 0;
			console.log(wasclicked);
		}
		
		
		//סינון של מוזיקה
		
		this.ebm_btn.addEventListener("mouseover", fl_MouseOverebm.bind(this));
		function fl_MouseOverebm() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		this.dommetal_btn.addEventListener("mouseover", fl_MouseOverdom.bind(this));
		function fl_MouseOverdom() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 1;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		
		this.viking_btn.addEventListener("mouseover", fl_MouseOverviking.bind(this));
		function fl_MouseOverviking() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 1;
			console.log("in");
			}
		}
		
		
		this.tecno_btn.addEventListener("mouseover", fl_MouseOvertecno.bind(this));
		function fl_MouseOvertecno() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 1;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		
		this.opera_btn.addEventListener("mouseover", fl_MouseOveropera.bind(this));
		function fl_MouseOveropera() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 1;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		
		this.dark_btn.addEventListener("mouseover", fl_MouseOverdark.bind(this));
		function fl_MouseOverdark() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		this.batkeiv_btn.addEventListener("mouseover", fl_MouseOverbatkeiv.bind(this));
		function fl_MouseOverbatkeiv() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		
		this.melodic_btn.addEventListener("mouseover", fl_MouseOvermelodic.bind(this));
		function fl_MouseOvermelodic() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 1;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		
		this.gothrock_btn.addEventListener("mouseover", fl_MouseOvergothrock.bind(this));
		function fl_MouseOvergothrock() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		this.pegani_btn.addEventListener("mouseover", fl_MouseOverpegani.bind(this));
		function fl_MouseOverpegani() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 1;
			console.log("in");
			}
		}
		
		
		this.deathmetal_btn.addEventListener("mouseover", fl_MouseOverdeathmetal.bind(this));
		function fl_MouseOverdeathmetal() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 1;
			this.cyber_btn.alpha = 0.2;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		this.coldvibe_btn.addEventListener("mouseover", fl_MouseOverdcoldvibe.bind(this));
		function fl_MouseOverdcoldvibe() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 0.2;
			this.victorian_btn.alpha = 0.2;
			this.cyber_btn.alpha = 1;
			this.fery_btn.alpha = 0.2;
			console.log("in");
			}
		}
		
		// הוספת ארוע יציאת עכבר
		this.ebm_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.dommetal_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.viking_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.tecno_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.opera_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.dark_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.batkeiv_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.melodic_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.gothrock_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.pegani_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.deathmetal_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		this.coldvibe_btn.addEventListener("mouseout", fl_MouseOut.bind(this));
		
		
		function fl_MouseOut() {
			if (wasclicked == 0) {
			this.classic_btn.alpha = 1;
			this.victorian_btn.alpha = 1;
			this.cyber_btn.alpha = 1;
			this.fery_btn.alpha = 1;
			}
		}
		playSound("batcaveSpecimenKissKissBangBangmp3cutnet");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(480,325);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// Actions
	this.play_melodic1 = new lib.play_melodic1();
	this.play_melodic1.parent = this;
	this.play_melodic1.setTransform(-208.4,681,1,1,0,0,0,49.5,51);
	new cjs.ButtonHelper(this.play_melodic1, 0, 1, 2);

	this.batkeiv_text = new lib.batkeiv_text_1();
	this.batkeiv_text.parent = this;
	this.batkeiv_text.setTransform(756,462.3,1,1,0,0,0,599,247.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.batkeiv_text},{t:this.play_melodic1}]}).wait(1));

	// What is goth?
	this.what = new lib.what();
	this.what.parent = this;
	this.what.setTransform(512.9,422.7,1.197,1.197);

	this.timeline.addTween(cjs.Tween.get(this.what).wait(1));

	// Text boxes
	this.ebm_text = new lib.ebm_text_1();
	this.ebm_text.parent = this;
	this.ebm_text.setTransform(753,479.8,1,1,0,0,0,599,265);

	this.gothrock_text = new lib.gothrock_text_1();
	this.gothrock_text.parent = this;
	this.gothrock_text.setTransform(753,478,1,1,0,0,0,599,265);

	this.melodic_text = new lib.melodic_text();
	this.melodic_text.parent = this;
	this.melodic_text.setTransform(756,479.9,1,1,0,0,0,599,267.1);

	this.tecn_text = new lib.tecn_text_1();
	this.tecn_text.parent = this;
	this.tecn_text.setTransform(755,484,1,1.022,0,0,0,599,265.4);

	this.dommetal_text = new lib.dommetal_text();
	this.dommetal_text.parent = this;
	this.dommetal_text.setTransform(331.5,354.3,1,1,0,0,0,-125.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dommetal_text},{t:this.tecn_text},{t:this.melodic_text},{t:this.gothrock_text},{t:this.ebm_text}]}).wait(1));

	// Goths styles
	this.fery = new lib.fery();
	this.fery.parent = this;
	this.fery.setTransform(513,455,1,1,0,0,0,37,0);

	this.victorian = new lib.victorian();
	this.victorian.parent = this;
	this.victorian.setTransform(512,457);

	this.classic = new lib.classic();
	this.classic.parent = this;
	this.classic.setTransform(512,456);

	this.cyber = new lib.cyber();
	this.cyber.parent = this;
	this.cyber.setTransform(512,458,1.471,1.522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cyber},{t:this.classic},{t:this.victorian},{t:this.fery}]}).wait(1));

	// Objects
	this.instance = new lib.signon_music();
	this.instance.parent = this;
	this.instance.setTransform(38,98,0.426,0.471);

	this.instance_1 = new lib.zramim_goths();
	this.instance_1.parent = this;
	this.instance_1.setTransform(713,99,0.426,0.473);

	this.instance_2 = new lib.signon_levush();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,99,0.426,0.473);

	this.pegani_btn = new lib.pegani_btn();
	this.pegani_btn.parent = this;
	this.pegani_btn.setTransform(71,544.5);
	new cjs.ButtonHelper(this.pegani_btn, 0, 1, 1);

	this.coldvibe_btn = new lib.coldvibe_btn();
	this.coldvibe_btn.parent = this;
	this.coldvibe_btn.setTransform(71,602.1);
	new cjs.ButtonHelper(this.coldvibe_btn, 0, 1, 1);

	this.deathmetal_btn = new lib.deathmetal_btn();
	this.deathmetal_btn.parent = this;
	this.deathmetal_btn.setTransform(225,602.1);
	new cjs.ButtonHelper(this.deathmetal_btn, 0, 1, 1);

	this.gothrock_btn = new lib.gothrock_btn();
	this.gothrock_btn.parent = this;
	this.gothrock_btn.setTransform(225,544.5);
	new cjs.ButtonHelper(this.gothrock_btn, 0, 1, 1);

	this.melodic_btn = new lib.melodic_btn();
	this.melodic_btn.parent = this;
	this.melodic_btn.setTransform(71,484.5);
	new cjs.ButtonHelper(this.melodic_btn, 0, 1, 1);

	this.batkeiv_btn = new lib.batkeiv_btn();
	this.batkeiv_btn.parent = this;
	this.batkeiv_btn.setTransform(225,484.5);
	new cjs.ButtonHelper(this.batkeiv_btn, 0, 1, 1);

	this.dark_btn = new lib.dark_btn();
	this.dark_btn.parent = this;
	this.dark_btn.setTransform(71,423.5);
	new cjs.ButtonHelper(this.dark_btn, 0, 1, 1);

	this.opera_btn = new lib.opera_btn();
	this.opera_btn.parent = this;
	this.opera_btn.setTransform(225,423.5);
	new cjs.ButtonHelper(this.opera_btn, 0, 1, 1);

	this.tecno_btn = new lib.tecn_btn();
	this.tecno_btn.parent = this;
	this.tecno_btn.setTransform(71,365.5);
	new cjs.ButtonHelper(this.tecno_btn, 0, 1, 1);

	this.dommetal_btn = new lib.dommetal_btn();
	this.dommetal_btn.parent = this;
	this.dommetal_btn.setTransform(225,361.5);
	new cjs.ButtonHelper(this.dommetal_btn, 0, 1, 1);

	this.viking_btn = new lib.viking_btn();
	this.viking_btn.parent = this;
	this.viking_btn.setTransform(71,303.5);
	new cjs.ButtonHelper(this.viking_btn, 0, 1, 1);

	this.ebm_btn = new lib.ebm_btn();
	this.ebm_btn.parent = this;
	this.ebm_btn.setTransform(225,302.5);
	new cjs.ButtonHelper(this.ebm_btn, 0, 1, 1);

	this.what_btn = new lib.what_btn();
	this.what_btn.parent = this;
	this.what_btn.setTransform(44,32);
	new cjs.ButtonHelper(this.what_btn, 0, 1, 1);

	this.fery_btn = new lib.fery_btn();
	this.fery_btn.parent = this;
	this.fery_btn.setTransform(829,511);
	new cjs.ButtonHelper(this.fery_btn, 0, 1, 1);

	this.cyber_btn = new lib.cyber_btn();
	this.cyber_btn.parent = this;
	this.cyber_btn.setTransform(830,439);
	new cjs.ButtonHelper(this.cyber_btn, 0, 1, 1);

	this.victorian_btn = new lib.victorian_btn();
	this.victorian_btn.parent = this;
	this.victorian_btn.setTransform(825,370);
	new cjs.ButtonHelper(this.victorian_btn, 0, 1, 1);

	this.classic_btn = new lib.classic_btn();
	this.classic_btn.parent = this;
	this.classic_btn.setTransform(829,308);
	new cjs.ButtonHelper(this.classic_btn, 0, 1, 1);

	this.reset_btn = new lib.reset();
	this.reset_btn.parent = this;
	this.reset_btn.setTransform(935,30);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 1);

	this.text = new cjs.Text("עברו בין סגנוות מוזיקה כדי לגלות לאיזה זרם הסגנון שייך", "12px 'Arial'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(146.6,230.9);

	this.text_1 = new cjs.Text("עברו בין סוגי זרמים כדי לראות את הלבוש המקובל ולגלות סגנונות מוזיקה", "12px 'Arial'", "#6633CC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 182;
	this.text_1.parent = this;
	this.text_1.setTransform(828,231);

	this.instance_3 = new lib.reguliar();
	this.instance_3.parent = this;
	this.instance_3.setTransform(387,280,0.498,0.506);

	this.instance_4 = new lib.Title1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(129,-11,0.591,0.704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.text_1},{t:this.text},{t:this.reset_btn},{t:this.classic_btn},{t:this.victorian_btn},{t:this.cyber_btn},{t:this.fery_btn},{t:this.what_btn},{t:this.ebm_btn},{t:this.viking_btn},{t:this.dommetal_btn},{t:this.tecno_btn},{t:this.opera_btn},{t:this.dark_btn},{t:this.batkeiv_btn},{t:this.melodic_btn},{t:this.gothrock_btn},{t:this.deathmetal_btn},{t:this.coldvibe_btn},{t:this.pegani_btn},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(222.1,314,1219,743);
// library properties:
lib.properties = {
	id: 'BB0B18D327E90345AC4E929D27A8DA38',
	width: 960,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GothicSubculture_EfratEyalMariyahHarkaby_atlas_.png", id:"GothicSubculture_EfratEyalMariyahHarkaby_atlas_"},
		{src:"sounds/batcaveSpecimenKissKissBangBangmp3cutnet.mp3", id:"batcaveSpecimenKissKissBangBangmp3cutnet"},
		{src:"sounds/gothicmetalepicaThePhantomAgonymp3cutnet.mp3", id:"gothicmetalepicaThePhantomAgonymp3cutnet"},
		{src:"sounds/technocombichristelectroheadmp3cutnet.mp3", id:"technocombichristelectroheadmp3cutnet"},
		{src:"sounds/victoriandraconiandeathcomenearmemp3cutnet.mp3", id:"victoriandraconiandeathcomenearmemp3cutnet"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BB0B18D327E90345AC4E929D27A8DA38'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;