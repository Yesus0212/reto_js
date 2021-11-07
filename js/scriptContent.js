// Se recupera el id del post a leer de la url de llamado
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('p');

$.ajax({
    method:'GET',
    url: `https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/${id}.json`,
    data: JSON.stringify({}),
    success: (response) => {
        post2 = Object.keys(response);
        console.log(post2)
        post = Object.values(response);          
        renderResPost(post);
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


const renderResPost = (post) => {
        
    // Sección de SCORES DINAMICOS
    $('.numbers#reactions').text(post[5]);
    $('.numbers#unicorns').text(post[8]);
    $('.numbers#comments').text(post[0]);
    
    // Dato de imageCover DINAMICO
    const imgCover = post[2];
    $('img#imgCover').attr({src:imgCover});
    
    const title = post[7];
    $('h1#title').text(title);
    
    // SIGUEN LOS TAGS
    const divTags = $('div#contTags');
    
    const tags = Object.values(post[6]);
    tags.forEach(tag => {
        const anchorTag = $(`<a href="#" class="text-black-50 me-3"><span class="text-black-50">#</span>${tag}</a>`);
        divTags.append(anchorTag);
    });

    const imgAvatar = post[10];
    $('img.avatar').attr({src:imgAvatar});
    
    const userName = post[9]
    $('#userName').text(userName);

    const content = post[1]
    $('p#postContent').text(content)

}    

// 3: "datePublication"
