// https://www.w3schools.com/Jsref/met_document_getelementbyid.asp
// https://www.w3schools.com/jsref/prop_element_classlist.asp
var img1 = "images/BottomSink.PNG";
var img2 = "images/ClosetDrawer-Closed.PNG";
var img3 = "images/ClosetDrawer-Top.PNG";
var img4 = "images/ClosetDrawer-day.PNG";
var img5 = "images/ClosetDrawer1.PNG";
var img6 = "images/ClosetDrawer2.PNG";
var img7 = "images/ClosetDrawer3.PNG";
var img8 = "images/Drawer1-Done.PNG";
var img9 = "images/Drawer1-Open.PNG";
var img10 = "images/Drawer1.PNG";
var img11 = "images/Drawer2-1.PNG";
var img12 = "images/Drawer2-2.PNG";
var img13 = "images/Drawer2-3.PNG";
var img14 = "images/Drawer2-4.PNG";
var img15 = "images/Drawer2.PNG";
var img16 = "images/Drawer3-Locked.PNG";
var img17 = "images/Drawer4-day.PNG";
var img18 = "images/Drawer4-night.PNG";
var img19 = "images/Drawer4.PNG";
var img20 = "images/Frezzer-Closed.PNG";
var img21 = "images/Frezzer-Open.PNG";
var img22 = "images/Frige-Closed.PNG";
var img23 = "images/Frige-Open.PNG";
var img24 = "images/LightSwitch1.PNG";
var img25 = "images/LowerDrawer-night.PNG";
var img26 = "images/LowerDrawer.PNG";
var img27 = "images/Sink.png";
var img28 = "images/SinkWater.png";
var img29 = "images/Window-night-broken.png";
var img30 = "images/Window-night.png";
var img31 = "images/Window.png";
var img32 = "images/easter_egg2.png";
var img33 = "images/wallpaper1.png";
var img34 = "images/wallpaper2.png";
var img35 = "images/Greenbutton.png";
var img36 = "images/purplebutton.png";
var img37 = "images/redbutton.png";
var img38 = "images/bluebutton.png";
var img39 = "images/Drawer1-Failed.PNG";
var img40 = "images/LowerDrawerOpen-Interacted.png";
var img41 = "images/LowerDrawerOpen.png";
var img42 = "images/saferoom.png";
var img43 = "images/saferoomopen.png";
var img44 = "images/topdrawer.png";
var img45 = "images/topdrawernight.png";
var img46 = "images/topdrawernightopen.png";
var img47 = "images/topdrawernightopengone.png";

var Chlng1Prb = 1;
var Chlng1Num = 0;
var obj2 = 0;
var keyvar = 0;
var a = document.getElementById;

function Drawerlocked(e) {
  console.log(e);
  if (e.src == img16) {
    e.src = img42;
  } else if ((e.src = img42)) {
    if (keyvar == 1) {
      e.src = img43;
    }
  }
}

function FrezzerOpen(e) {
  console.log(e);
  if (e.src == img20);
  {
    e.src = img21;
    setTimeout(function () {
      e.src = img20;
    }, 2000);
  }
}
function LightsOn(e) {
  console.log(e);
  if (e.id == "Light") {
    document.getElementById("LowDrawer").classList.add("interact");
    document.getElementById("box").classList.add("shadow2");
    document.getElementById("box").classList.remove("transparent");
    document.getElementById("box2").classList.add("shadow2");
    document.getElementById("box2").classList.remove("transparent");
    document.getElementById("box3").classList.add("shadow2");
    document.getElementById("box3").classList.remove("transparent");

    /*Change */
    document.getElementById("EasterEgg2").classList.add("shadow");
    document.getElementById("Drawer1").classList.add("shadow");
    document.getElementById("Drawer2").classList.add("shadow");
    document.getElementById("Drawer3").classList.add("shadow");
    document.getElementById("Drawer4").classList.add("shadow");
    document.getElementById("Frezzer").classList.add("shadow");
    document.getElementById("Window").classList.add("shadow");
    document.getElementById("Sink").classList.add("shadow");
    document.getElementById("Light").classList.add("shadow");
    document.getElementById("EasterEgg").classList.add("shadow");
    document.getElementById("TopCloset").classList.add("shadow");
    document.getElementById("Frige").classList.add("shadow");
    document.getElementById("TopSink").classList.add("shadow");
    document.getElementById("LowDrawer").classList.add("shadow");
    document.getElementById("BotSink").classList.add("shadow");
    document.getElementById("Closet").classList.add("shadow");
    document.getElementById("TopClosetLight").id = "TopClosetDark";
    e.id = "Dark";

    /* 
    Image Changes
    */
    document.getElementById("LowDrawer").src = img25;
    document.getElementById("Window").src = img30;
  } else if (e.id == "Dark") {
    document.getElementById("LowDrawer").classList.remove("interact");
    document.getElementById("box").classList.remove("shadow2");
    document.getElementById("box").classList.add("transparent");
    document.getElementById("box2").classList.remove("shadow2");
    document.getElementById("box2").classList.add("transparent");
    document.getElementById("box3").classList.remove("shadow2");
    document.getElementById("box3").classList.add("transparent");

    /*Change */
    document.getElementById("EasterEgg2").classList.remove("shadow");
    document.getElementById("Drawer1").classList.remove("shadow");
    document.getElementById("Drawer2").classList.remove("shadow");
    document.getElementById("Drawer3").classList.remove("shadow");
    document.getElementById("Drawer4").classList.remove("shadow");
    document.getElementById("Frezzer").classList.remove("shadow");
    document.getElementById("Window").classList.remove("shadow");
    document.getElementById("Sink").classList.remove("shadow");
    document.getElementById("Dark").classList.remove("shadow");
    document.getElementById("EasterEgg").classList.remove("shadow");
    document.getElementById("TopCloset").classList.remove("shadow");
    document.getElementById("Frige").classList.remove("shadow");
    document.getElementById("TopSink").classList.remove("shadow");
    document.getElementById("LowDrawer").classList.remove("shadow");
    document.getElementById("BotSink").classList.remove("shadow");
    document.getElementById("Closet").classList.remove("shadow");
    e.id = "Light";
    document.getElementById("TopClosetDark").id = "TopClosetLight";
    /* 
    Image Changes
    */
    document.getElementById("LowDrawer").src = img26;
    document.getElementById("Window").src = img31;
  }
}
function FridgeOpen(e) {
  console.log(e);
  if (e.src == img22);
  {
    e.src = img23;
    setTimeout(function () {
      e.src = img22;
    }, 2000);
  }
}
function SinkWaterRuning(e) {
  console.log(e);
  if (e.src == img27);
  {
    e.src = img28;
    setTimeout(function () {
      e.src = img27;
    }, 2000);
  }
}
function DrawerFake(e) {
  console.log(e);
  if (e.src == img19);
  {
    if (e.classList == "fill-img interact") {
      e.src = img17;
      setTimeout(function () {
        e.src = img19;
      }, 2000);
    } else if (e.classList == "fill-img interact shadow") {
      e.src = img18;
      setTimeout(function () {
        e.src = img19;
      }, 2000);
    }
  }
}
function DrawerOne(e) {
  console.log(e);
  if (e.classList == "box5 transparent interact drawer1");
  {
    e.classList.remove("interact");
    e.classList.remove("drawer1");
    e.classList.add("drawer1open");
    e.setAttribute("onclick", "none");
    document.getElementById("option1").classList.add("interact");
    document.getElementById("option2").classList.add("interact");
    document.getElementById("option3").classList.add("interact");
    document.getElementById("option4").classList.add("interact");
    document.getElementById("option1").classList.add("fill-img");
    document.getElementById("option2").classList.add("fill-img");
    document.getElementById("option3").classList.add("fill-img");
    document.getElementById("option4").classList.add("fill-img");
    document.getElementById("option1").src = img35;
    document.getElementById("option2").src = img36;
    document.getElementById("option3").src = img37;
    document.getElementById("option4").src = img38;
    document.getElementById("option1").classList.remove("transparent");
    document.getElementById("option2").classList.remove("transparent");
    document.getElementById("option3").classList.remove("transparent");
    document.getElementById("option4").classList.remove("transparent");
    document.getElementById("option1").setAttribute("onclick", "Option1(this)");
    document.getElementById("option2").setAttribute("onclick", "Option2(this)");
    document.getElementById("option3").setAttribute("onclick", "Option3(this)");
    document.getElementById("option4").setAttribute("onclick", "Option4(this)");
  }
}
function Option1(e) {
  console.log(e);
  if (Chlng1Prb == 5) {
    document.getElementById("option1").classList.add("greendropshadow");
    setTimeout(function () {
      document.getElementById("option1").classList.remove("greendropshadow");
    }, 100);
    Chlng1Prb = 1;
    document.getElementById("Drawer1").classList.remove("drawer1open");
    document.getElementById("Drawer1").classList.add("drawer1pass");
    document.getElementById("option1").setAttribute("onclick", "none");
    document.getElementById("option2").setAttribute("onclick", "none");
    document.getElementById("option3").setAttribute("onclick", "none");
    document.getElementById("option4").setAttribute("onclick", "none");
    document.getElementById("option1").classList.remove("interact");
    document.getElementById("option2").classList.remove("interact");
    document.getElementById("option3").classList.remove("interact");
    document.getElementById("option4").classList.remove("interact");
    Chlng1Num += 1;
  } else {
    document.getElementById("option1").classList.add("reddropshadow");
    setTimeout(function () {
      document.getElementById("option1").classList.remove("reddropshadow");
    }, 100);
    /*Failed*/
    document.getElementById("Drawer1").classList.add("drawer1failed");
    document.getElementById("Drawer1").classList.remove("drawer1open");
    Chlng1Prb = 0;
    setTimeout(function () {
      Chlng1Prb = 1;
      document.getElementById("Drawer1").classList.remove("drawer1failed");
      document.getElementById("Drawer1").classList.add("drawer1open");
    }, 1500);
  }
}
function Option2(e) {
  console.log(e);
  if (Chlng1Prb == 3) {
    document.getElementById("option2").classList.add("greendropshadow");
    setTimeout(function () {
      document.getElementById("option2").classList.remove("greendropshadow");
    }, 100);
    Chlng1Prb += 1;
  } else {
    document.getElementById("option2").classList.add("reddropshadow");
    setTimeout(function () {
      document.getElementById("option2").classList.remove("reddropshadow");
    }, 100);
    /*Failed*/
    document.getElementById("Drawer1").classList.add("drawer1failed");
    document.getElementById("Drawer1").classList.remove("drawer1open");
    Chlng1Prb = 0;
    setTimeout(function () {
      Chlng1Prb = 1;
      document.getElementById("Drawer1").classList.remove("drawer1failed");
      document.getElementById("Drawer1").classList.add("drawer1open");
    }, 1500);
  }
}
function Option3(e) {
  console.log(e);
  if (Chlng1Prb == 2) {
    document.getElementById("option3").classList.add("greendropshadow");
    setTimeout(function () {
      document.getElementById("option3").classList.remove("greendropshadow");
    }, 100);
    Chlng1Prb += 1;
  } else if (Chlng1Prb == 4) {
    document.getElementById("option3").classList.add("greendropshadow");
    setTimeout(function () {
      document.getElementById("option3").classList.remove("greendropshadow");
    }, 100);
    Chlng1Prb += 1;
  } else {
    document.getElementById("option3").classList.add("reddropshadow");
    setTimeout(function () {
      document.getElementById("option3").classList.remove("reddropshadow");
    }, 100);
    /*Failed*/
    document.getElementById("Drawer1").classList.add("drawer1failed");
    document.getElementById("Drawer1").classList.remove("drawer1open");
    Chlng1Prb = 0;
    setTimeout(function () {
      Chlng1Prb = 1;
      document.getElementById("Drawer1").classList.remove("drawer1failed");
      document.getElementById("Drawer1").classList.add("drawer1open");
    }, 1500);
  }
}
function Option4(e) {
  console.log(e);
  if (Chlng1Prb == 1) {
    document.getElementById("option4").classList.add("greendropshadow");
    setTimeout(function () {
      document.getElementById("option4").classList.remove("greendropshadow");
    }, 100);
    Chlng1Prb += 1;
  } else {
    document.getElementById("option4").classList.add("reddropshadow");
    setTimeout(function () {
      document.getElementById("option4").classList.remove("reddropshadow");
    }, 100);

    /*Failed*/
    document.getElementById("Drawer1").classList.add("drawer1failed");
    document.getElementById("Drawer1").classList.remove("drawer1open");
    Chlng1Prb = 0;
    setTimeout(function () {
      Chlng1Prb = 1;
      document.getElementById("Drawer1").classList.remove("drawer1failed");
      document.getElementById("Drawer1").classList.add("drawer1open");
    }, 1500);
  }
}
function hintBox(e) {
  console.log(e);
  if (e.src.match("images/Drawer2.PNG")) {
    e.src = img11;
  } else if (e.src.match("images/Drawer2-1.PNG")) {
    e.src = img12;
  } else if (e.src.match("images/Drawer2-2.PNG")) {
    e.src = img13;
  } else if (e.src.match("images/Drawer2-3.PNG")) {
    e.src = img14;
  } else if (e.src.match("images/Drawer2-4.PNG")) {
    e.src = img15;
  }
}
function nightdrawer(e) {
  if (obj2 == 0) {
    if (e.src.match(img25)) {
      e.src = img41;
      /*e.src = img25;*/
    } else if (e.src.match(img41)) {
      e.src = img40;
      obj2 = 1;
      Chlng1Num += 1;
      document.getElementById("LowDrawer").classList.remove("interact");
    }
  } else {
    e.src = img40;
  }
}
function topGyan(e) {
  console.log(e);
  if (e.src.match(img3)) {
    console.log(e.id);
    if (e.id.match("TopClosetDark")) {
      console.log(e.src);
      e.src = img45;
      if (e.src === img45) {
        e.src = img46;
      } else if (e.src === img46) {
        e.src = img47;
        keyvar = 1;
      }
    }
  } else if (e.id.match("TopClosetLight")) {
    console.log(e.onclick);
    e.src = img44;
  }
}
