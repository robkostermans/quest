"use strict";function createScene(){console.log("Create Scene"),HEIGHT=window.innerHeight,WIDTH=window.innerWidth,scene=new THREE.Scene,aspectRatio=WIDTH/HEIGHT,fieldOfView=60,nearPlane=1,farPlane=1e4,camera=new THREE.PerspectiveCamera(fieldOfView,aspectRatio,nearPlane,farPlane),camera.position.x=0,camera.position.z=0,camera.position.y=100;var e=new THREE.CameraHelper(camera);scene.add(e),renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),renderer.setSize(WIDTH,HEIGHT),renderer.shadowMap.enabled=!0,container=document.getElementById("world"),container.appendChild(renderer.domElement),window.addEventListener("resize",handleWindowResize,!1)}function handleWindowResize(){HEIGHT=window.innerHeight,WIDTH=window.innerWidth,renderer.setSize(WIDTH,HEIGHT),camera.aspect=WIDTH/HEIGHT,camera.updateProjectionMatrix()}function createLights(){hemisphereLight=new THREE.HemisphereLight(11184810,0,.9),shadowLight=new THREE.DirectionalLight(16777215,.9),shadowLight.position.set(150,350,350),shadowLight.castShadow=!0,shadowLight.shadow.camera.left=-400,shadowLight.shadow.camera.right=400,shadowLight.shadow.camera.top=400,shadowLight.shadow.camera.bottom=-400,shadowLight.shadow.camera.near=1,shadowLight.shadow.camera.far=1e3,shadowLight.shadow.mapSize.width=2048,shadowLight.shadow.mapSize.height=2048,scene.add(hemisphereLight),scene.add(shadowLight)}function createPlane(){console.log("Create Plane"),airplane=new AirPlane,airplane.mesh.scale.set(.25,.25,.25),airplane.mesh.position.y=0,scene.add(airplane.mesh)}var Colors={red:15881030,white:14209233,brown:5845806,pink:16095342,brownDark:2300175,blue:6865856},scene,camera,fieldOfView,aspectRatio,nearPlane,farPlane,HEIGHT,WIDTH,renderer,container,hemisphereLight,shadowLight,AirPlane=function(){this.mesh=new THREE.Object3D;var e=new THREE.BoxGeometry(60,50,50,1,1,1),t=new THREE.MeshPhongMaterial({color:Colors.red,shading:THREE.FlatShading}),n=new THREE.Mesh(e,t);n.castShadow=!0,n.receiveShadow=!0,this.mesh.add(n);var o=new THREE.BoxGeometry(20,50,50,1,1,1),a=new THREE.MeshPhongMaterial({color:Colors.white,shading:THREE.FlatShading}),i=new THREE.Mesh(o,a);i.position.x=40,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);var r=new THREE.BoxGeometry(15,20,5,1,1,1),s=new THREE.MeshPhongMaterial({color:Colors.red,shading:THREE.FlatShading}),c=new THREE.Mesh(r,s);c.position.set(-35,25,0),c.castShadow=!0,c.receiveShadow=!0,this.mesh.add(c);var d=new THREE.BoxGeometry(40,8,150,1,1,1),l=new THREE.MeshPhongMaterial({color:Colors.red,shading:THREE.FlatShading}),h=new THREE.Mesh(d,l);h.castShadow=!0,h.receiveShadow=!0,this.mesh.add(h);var E=new THREE.BoxGeometry(20,10,10,1,1,1),m=new THREE.MeshPhongMaterial({color:Colors.brown,shading:THREE.FlatShading});this.propeller=new THREE.Mesh(E,m),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;var u=new THREE.BoxGeometry(1,100,20,1,1,1),p=new THREE.MeshPhongMaterial({color:Colors.brownDark,shading:THREE.FlatShading}),b=new THREE.Mesh(u,p);b.position.set(8,0,0),b.castShadow=!0,b.receiveShadow=!0,this.propeller.add(b),this.propeller.position.set(50,0,0),this.mesh.add(this.propeller)},airplane;THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*D.autoRotateSpeed}function o(){return Math.pow(.95,D.zoomSpeed)}function a(e){F.theta-=e}function i(e){F.phi-=e}function r(e){D.object instanceof THREE.PerspectiveCamera?Z/=e:D.object instanceof THREE.OrthographicCamera?(D.object.zoom=Math.max(D.minZoom,Math.min(D.maxZoom,D.object.zoom*e)),D.object.updateProjectionMatrix(),G=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),D.enableZoom=!1)}function s(e){D.object instanceof THREE.PerspectiveCamera?Z*=e:D.object instanceof THREE.OrthographicCamera?(D.object.zoom=Math.max(D.minZoom,Math.min(D.maxZoom,D.object.zoom/e)),D.object.updateProjectionMatrix(),G=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),D.enableZoom=!1)}function c(e){W.set(e.clientX,e.clientY)}function d(e){Q.set(e.clientX,e.clientY)}function l(e){K.set(e.clientX,e.clientY)}function h(e){B.set(e.clientX,e.clientY),X.subVectors(B,W);var t=D.domElement===document?D.domElement.body:D.domElement;a(2*Math.PI*X.x/t.clientWidth*D.rotateSpeed),i(2*Math.PI*X.y/t.clientHeight*D.rotateSpeed),W.copy(B),D.update()}function E(e){J.set(e.clientX,e.clientY),$.subVectors(J,Q),$.y>0?r(o()):$.y<0&&s(o()),Q.copy(J),D.update()}function m(e){_.set(e.clientX,e.clientY),q.subVectors(_,K),ne(q.x,q.y),K.copy(_),D.update()}function u(){}function p(e){e.deltaY<0?s(o()):e.deltaY>0&&r(o()),D.update()}function b(e){switch(e.keyCode){case D.keys.UP:ne(0,D.keyPanSpeed),D.update();break;case D.keys.BOTTOM:ne(0,-D.keyPanSpeed),D.update();break;case D.keys.LEFT:ne(D.keyPanSpeed,0),D.update();break;case D.keys.RIGHT:ne(-D.keyPanSpeed,0),D.update()}}function T(e){W.set(e.touches[0].pageX,e.touches[0].pageY)}function w(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Q.set(0,o)}function H(e){K.set(e.touches[0].pageX,e.touches[0].pageY)}function R(e){B.set(e.touches[0].pageX,e.touches[0].pageY),X.subVectors(B,W);var t=D.domElement===document?D.domElement.body:D.domElement;a(2*Math.PI*X.x/t.clientWidth*D.rotateSpeed),i(2*Math.PI*X.y/t.clientHeight*D.rotateSpeed),W.copy(B),D.update()}function f(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);J.set(0,a),$.subVectors(J,Q),$.y>0?s(o()):$.y<0&&r(o()),Q.copy(J),D.update()}function g(e){_.set(e.touches[0].pageX,e.touches[0].pageY),q.subVectors(_,K),ne(q.x,q.y),K.copy(_),D.update()}function v(){}function O(e){if(D.enabled!==!1){if(e.preventDefault(),e.button===D.mouseButtons.ORBIT){if(D.enableRotate===!1)return;c(e),V=k.ROTATE}else if(e.button===D.mouseButtons.ZOOM){if(D.enableZoom===!1)return;d(e),V=k.DOLLY}else if(e.button===D.mouseButtons.PAN){if(D.enablePan===!1)return;l(e),V=k.PAN}V!==k.NONE&&(document.addEventListener("mousemove",y,!1),document.addEventListener("mouseup",P,!1),D.dispatchEvent(N))}}function y(e){if(D.enabled!==!1)if(e.preventDefault(),V===k.ROTATE){if(D.enableRotate===!1)return;h(e)}else if(V===k.DOLLY){if(D.enableZoom===!1)return;E(e)}else if(V===k.PAN){if(D.enablePan===!1)return;m(e)}}function P(e){D.enabled!==!1&&(u(e),document.removeEventListener("mousemove",y,!1),document.removeEventListener("mouseup",P,!1),D.dispatchEvent(I),V=k.NONE)}function M(e){D.enabled===!1||D.enableZoom===!1||V!==k.NONE&&V!==k.ROTATE||(e.preventDefault(),e.stopPropagation(),p(e),D.dispatchEvent(N),D.dispatchEvent(I))}function C(e){D.enabled!==!1&&D.enableKeys!==!1&&D.enablePan!==!1&&b(e)}function S(e){if(D.enabled!==!1){switch(e.touches.length){case 1:if(D.enableRotate===!1)return;T(e),V=k.TOUCH_ROTATE;break;case 2:if(D.enableZoom===!1)return;w(e),V=k.TOUCH_DOLLY;break;case 3:if(D.enablePan===!1)return;H(e),V=k.TOUCH_PAN;break;default:V=k.NONE}V!==k.NONE&&D.dispatchEvent(N)}}function j(e){if(D.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(D.enableRotate===!1)return;if(V!==k.TOUCH_ROTATE)return;R(e);break;case 2:if(D.enableZoom===!1)return;if(V!==k.TOUCH_DOLLY)return;f(e);break;case 3:if(D.enablePan===!1)return;if(V!==k.TOUCH_PAN)return;g(e);break;default:V=k.NONE}}function L(e){D.enabled!==!1&&(v(e),D.dispatchEvent(I),V=k.NONE)}function x(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-(1/0),this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return z.phi},this.getAzimuthalAngle=function(){return z.theta},this.reset=function(){D.target.copy(D.target0),D.object.position.copy(D.position0),D.object.zoom=D.zoom0,D.object.updateProjectionMatrix(),D.dispatchEvent(A),D.update(),V=k.NONE},this.update=function(){var t=new THREE.Vector3,o=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),i=o.clone().inverse(),r=new THREE.Vector3,s=new THREE.Quaternion;return function(){var e=D.object.position;return t.copy(e).sub(D.target),t.applyQuaternion(o),z.setFromVector3(t),D.autoRotate&&V===k.NONE&&a(n()),z.theta+=F.theta,z.phi+=F.phi,z.theta=Math.max(D.minAzimuthAngle,Math.min(D.maxAzimuthAngle,z.theta)),z.phi=Math.max(D.minPolarAngle,Math.min(D.maxPolarAngle,z.phi)),z.makeSafe(),z.radius*=Z,z.radius=Math.max(D.minDistance,Math.min(D.maxDistance,z.radius)),D.target.add(Y),t.setFromSpherical(z),t.applyQuaternion(i),e.copy(D.target).add(t),D.object.lookAt(D.target),D.enableDamping===!0?(F.theta*=1-D.dampingFactor,F.phi*=1-D.dampingFactor):F.set(0,0,0),Z=1,Y.set(0,0,0),!!(G||r.distanceToSquared(D.object.position)>U||8*(1-s.dot(D.object.quaternion))>U)&&(D.dispatchEvent(A),r.copy(D.object.position),s.copy(D.object.quaternion),G=!1,!0)}}(),this.dispose=function(){D.domElement.removeEventListener("contextmenu",x,!1),D.domElement.removeEventListener("mousedown",O,!1),D.domElement.removeEventListener("wheel",M,!1),D.domElement.removeEventListener("touchstart",S,!1),D.domElement.removeEventListener("touchend",L,!1),D.domElement.removeEventListener("touchmove",j,!1),document.removeEventListener("mousemove",y,!1),document.removeEventListener("mouseup",P,!1),window.removeEventListener("keydown",C,!1)};var D=this,A={type:"change"},N={type:"start"},I={type:"end"},k={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},V=k.NONE,U=1e-6,z=new THREE.Spherical,F=new THREE.Spherical,Z=1,Y=new THREE.Vector3,G=!1,W=new THREE.Vector2,B=new THREE.Vector2,X=new THREE.Vector2,K=new THREE.Vector2,_=new THREE.Vector2,q=new THREE.Vector2,Q=new THREE.Vector2,J=new THREE.Vector2,$=new THREE.Vector2,ee=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),Y.add(e)}}(),te=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),Y.add(e)}}(),ne=function(){var e=new THREE.Vector3;return function(t,n){var o=D.domElement===document?D.domElement.body:D.domElement;if(D.object instanceof THREE.PerspectiveCamera){var a=D.object.position;e.copy(a).sub(D.target);var i=e.length();i*=Math.tan(D.object.fov/2*Math.PI/180),ee(2*t*i/o.clientHeight,D.object.matrix),te(2*n*i/o.clientHeight,D.object.matrix)}else D.object instanceof THREE.OrthographicCamera?(ee(t*(D.object.right-D.object.left)/D.object.zoom/o.clientWidth,D.object.matrix),te(n*(D.object.top-D.object.bottom)/D.object.zoom/o.clientHeight,D.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),D.enablePan=!1)}}();D.domElement.addEventListener("contextmenu",x,!1),D.domElement.addEventListener("mousedown",O,!1),D.domElement.addEventListener("wheel",M,!1),D.domElement.addEventListener("touchstart",S,!1),D.domElement.addEventListener("touchend",L,!1),D.domElement.addEventListener("touchmove",j,!1),window.addEventListener("keydown",C,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});
//# sourceMappingURL=quest-lib-min.js.map