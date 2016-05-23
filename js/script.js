window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var mov;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 200;
                tamanoTierra = 27;
                tamanoMercurio = 10;
                tamanoVenus = 25;
                tamanoMarte = 14;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

	 
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),

		escalaJupiter = true;
        var tierra = crearPlaneta({
									tamano 	: tamanoTierra,
									imagen	: 'img/tierra.jpg'
							  }),
                escalaTierra = true;
	var mercurio = crearPlaneta({
									tamano 	: tamanoMercurio,
									imagen	: 'img/mercurio.jpg'
							  }),
                escalaMercurio= true;
        var venus = crearPlaneta({
									tamano 	: tamanoVenus,
									imagen	: 'img/venus.jpg'
							  }),

		escalaVenus = true;
        var marte = crearPlaneta({
									tamano 	: tamanoMarte,
									imagen	: 'img/marte.jpg'
							  }),

		escalaMarte = true;


		

	container = document.createElement( 'div' );
	container.style.background.color = 'black';
	document.body.appendChild( container );

	var info = document.createElement( 'h3' );
	info.style.position = 'absolute';
	info.style.top = '150px';
	info.style.right = '425px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = 'Mercurio';//titulo planeta
	container.appendChild( info );

	var infor = document.createElement( 'div');
	infor.style.position = 'absolute';
	infor.style.top = '100px';
	infor.style.right = '100px';
	infor.style.width = '400px';
	infor.style.height = '500px';
	infor.style.textAlign = 'left';
	infor.innerHTML = 'hola <br> como estas <br> yuliana';//texto de la caja para escribir enter se usa <br>
	container.appendChild( infor );

	
	
	function movcamar(mov)
	{
		mov+=10;
	}

    escena.add(jupiter);
    escena.add(tierra);
	escena.add(mercurio);
    escena.add(venus);
    escena.add(marte);
    var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 0;
	camara.position.z = 50;
	camara.lookAt(mercurio.position);
	jupiter.position.x = 1500;
    tierra.position.x=480;
    mercurio.position.x=-28;
    venus.position.x=-150;
    marte.position.x=70;
	escena.add(camara);
	function renderizar()
	{
		jupiter.rotation.y += 0.001;
	    tierra.rotation.y += 0.09;
	    mercurio.rotation.y += 0.5;
	    venus.rotation.y += 0.02;
	    marte.rotation.y += 0.1;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
