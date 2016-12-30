window.addEventListener('load', init, false);

function init() {
	// set up the scene, the camera and the renderer
	//createScene();

	// add the lights
	//createLights();

	// add the objects
	//createLandscape()


	//createPlane();
	//createSea();
	//createSky();

    //document.addEventListener('mousemove', handleMouseMove, false);

	// start a loop that will update the objects' positions 
	// and render the scene on each frame
	//loop();

	document.addEventListener("keydown", function(e){
		if(e.keyCode == 37) { // left
			rotateMap(-1)
		}
		else if(e.keyCode == 39) { // right
			rotateMap(1)
		}
	});

}

function rotateMap(direction){
	var mAngle = getcsstransform($("#map"));
	if (mAngle.TType=="2D")
	{
		//$("#Result").html("Transform 2D [rotateZ=" + mAngle.rotateZ + "&deg;]");
		$("#map").css("transform", currentRotation +" rotateZ(180deg)")
	}else
	{
		console.log(mAngle.rotateZ)
		//("#Result").html("Transform 3D [rotateX=" + mAngle.rotateX + "&deg;|rotateY=" + mAngle.rotateY + "&deg;|rotateZ=" + mAngle.rotateZ + "&deg;]");
		$("#map").css("transform", "rotateX(" + mAngle.rotateX + "deg) rotateY(" + mAngle.rotateY + "deg) rotateZ(" + (mAngle.rotateZ+1) + "deg)");
	}



	
	//mapEl.style.transform = "rotateX("+(currentRotation + direction)+"deg)";
}


function getcsstransform(obj)
{
    var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);

  var TType="undefined",
        rotateX = 0,
        rotateY = 0,
      rotateZ = 0;

  var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform") ||
    obj.css("-ms-transform") ||
    obj.css("-o-transform") ||
    obj.css("transform");
  if (matrix!==undefined && matrix !== 'none')
  {
        // if matrix is 2d matrix
    TType="2D";
    if (matrix.indexOf('matrix(') >= 0)
    {
      var values = matrix.split('(')[1].split(')')[0];
      if (isIE)  //case IE
      {
        angle = parseFloat(values.replace('deg', STR_EMPTY));
      }else
      {
        values = values.split(',');
        var a = values[0];
        var b = values[1];
        var rotateZ = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      }
    }else
    {
      // matrix is matrix3d
      TType="3D";
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var sinB = parseFloat(values[8]);
      var b = Math.round(Math.asin(sinB) * 180 / Math.PI);
      var cosB = Math.cos(b * Math.PI / 180);
      var matrixVal10 = parseFloat(values[9]);
      var a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / Math.PI);
      var matrixVal1 = parseFloat(values[0]);
      var c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / Math.PI);
      rotateX = a;
      rotateY = b;
      rotateZ = c;
    }
  }

    return  { TType: TType, rotateX: rotateX,  rotateY: rotateY,  rotateZ: rotateZ };
};

