
function createLandscape(){
    var landscape = new THREE.Mesh(
        new THREE.PlaneGeometry( 10, 10, 10, 10),
        new THREE.MeshBasicMaterial( { color: Colors.brown, wireframe: false } )
    );
    landscape.rotateX(Math.PI/2);
    scene.add( landscape );
}
