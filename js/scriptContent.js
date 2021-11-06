// Se recupera el id del post a leer de la url de llamado
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('p')

// Sección de SCORES DINAMICOS
$('.numbers#reactions').text(5);
$('.numbers#unicorns').text(10);
$('.numbers#comments').text(15);

// Dato de imageCover DINAMICO
const imageCover = "https://res.cloudinary.com/practicaldev/image/fetch/s--DFDVlmMj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ztc3fq2x1adkhx39r6ua.png";
$('img#imgCover').attr({src:imageCover});

$('h1#title').text("TITULO");

// SIGUEN LOS TAGS