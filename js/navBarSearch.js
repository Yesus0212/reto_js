//  Algoritmo: 
// crea el boton y el imput como elemento del js,
// integrale al boton un evento click que ejecute la siguiente funcion:

// realiza la peticion a la base de datos  con Get
// guarda ese resultado en una variable ???
// filtra los resultados con base en los terminos de busqueda
// 

// muestra en pantalla los resultados de la busqueda, esto se hace de la siguiente forma: 
// 1.- limpia el div donde se guardan todos los post que tiene la clase 'col-lg-6 col-md-6 col-sm-10 main_body
// 2.- el objeto que te sale como resultado del filtrado debe llenar un div con la clase card rounded-3 mb-2
// 3.- dentro de ese div debe haber una etiqueta article con la clase 'card-body'
//  4.- dentro de article habra un div con la clase 'd-flex'
// 5.- dentro de ese div habra otro div  sin clase, este contendra un anchord con la clase 'p-0 m-0 w-75' 
// este anchord contendra a su vez una etiqueta img con la clase 'rounded-circle p-0'   y un src de 'https://res.cloudinary.com/practicaldev/image/fetch/s--9vzdT4Ts--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/243850/50980395-72a9-45f6-ae80-ed8aa49b87d6.jpeg'
// y un alt vacio
// 6.-a la altura del div sin clase de la linea  5 crea otro div con la clase ' row pe-0 mb-3 lh-sm' y style = "margin-left: -10px;"
// 7.- dentro de ese div debes poner una etiqueta anchord con la clase text dark, esta etiqueta debe contener el NOMBRE DE USUARIO
// 8.-A  la altura del anchord anterior va otro con la clase 'text-black-50' y dentro de esta etiqueta lleva una de time con propiedad datetime ='PT2H30M 
// dicha etiqueta debe encerrar la fecha de publicacion del post
// 9.- abrimos otro div a la altura del que tiene la clase 'd-flex', este nuevo div tendra la clase 'ms-5' y contendra tres divs
// 10.- El primer div tendra la clase 'card-title mb-3', este contendra una etiqueta h2 y dentro del h2 un anchord con la clase 'text- dark fw-bolder' 
// y un href con un link que lleve a la publicacion, dentro de este anchord ira la propiedad titulo del objeto post.
// 11.-El segundo div tendra una clase 'mb-3 text-black-50' que contendra  etiquetas anchord con la clase 'text-black-50 me-3' que lleva dentro una etiqueta spam
// que lleva una clase 'text-black-50' y contendra la propiedad tag.
// 12.- El tercer div tendra la clase 'd-flex justify-content-between', en su interior llevara un div con la clase 'd-flex align-items-center'
//icono de corazon
// 13.- crear dentro de dicho div un anchord con la clase 'me-3', dentro del anchord una etiqueta svg con xmlns='http://www.w3.org/2000/svg' widht= '24' height= '24'
// dentro de la etiqueta svg una path con d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
// a su altura una etiqueta p con clase 'd-inline-block text-dark m-0' que contenga el numero de reacciones
// a su altura un span con clase 'text-dark m-0' que contenga el texto 'reactions'
// icono de globo de mensaje
// 14.- crear dentro de dicho div un anchord con la clase 'me-3', dentro del anchord una etiqueta svg con xmlns='http://www.w3.org/2000/svg' widht= '24' height= '24'
// dentro de la etiqueta svg una path con d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
// a su altura una etiqueta p con clase 'd-inline-block text-dark m-0' que contenga el numero de reacciones
// a su altura un span con clase 'text-dark m-0' que contenga el texto 'reactions'
// 15.- a la altura de los divs de los iconos  va un div sin clase que lleva dentro una etiqueta small con la clase me-1 con el tiempo de lectura '6 min read'                                             
// y a la altura un boton con la clase 'btn btn-light' que siga 'save'


const filtherSearch = (response, imputValue)=> {
    //console.log(consultObject)
    let filtherArray = [];

    response.forEach(element => {
        postContent = element.content
        
        if (postContent.includes(imputValue)) {
            filtherArray.push(element);
        }
        else{
            filtherArray;
        };
    });

    console.log(filtherArray, 'resultadofilther');
    renderPosts(filtherArray);
}

const button = $('#buttonSearchNav').click( () => {
    const imputValue = $('#navBarSearch').val();
    filtherSearch(postList, imputValue);       
});
