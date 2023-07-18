const container = document.getElementById("container");

/* creo array di oggetti che rappresentano i singoli post */

const posts = [
    {
        id: 1,
        author: {
            name: "John Doe",
            profile: "https://unsplash.it/300/300?image=12",
        },
        date: "2020-05-12",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=200",
        likes: 10
    },
    {
        id: 2,
        author: {
            name: "Martin Ford",
            profile: "https://unsplash.it/300/300?image=45",
        },
        date: "2022-06-23",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=250",
        likes: 34
    },
    {
        id: 3,
        author: {
            name: "George Stone",
            profile: null,
        },
        date: "2023-01-10",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=567",
        likes: 21
    },
    {
        id: 4,
        author: {
            name: "Richard Miller",
            profile: "https://unsplash.it/300/300?image=157",
        },
        date: "2023-02-09",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=900",
        likes: 50
    },
    {
        id: 5,
        author: {
            name: "Elena Rossi",
            profile: "https://unsplash.it/300/300?image=202",
        },
        date: "2021-11-12",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=1000",
        likes: 55
    },
    {
        id: 6,
        author: {
            name: "Corey Taylor",
            profile: "https://unsplash.it/300/300?image=345",
        },
        date: "2023-05-20",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        image: "https://unsplash.it/600/400?image=867",
        likes: 70
    }
];
//array con gli id dei post a cui abbiamo messo like
let idLikedPost = [];

//ciclo l'array di oggetti e per ogni oggetto genero un post
posts.forEach((post, i) => {
    //creo la card che contiene tutto il post
    let postEl = document.createElement("div");
    postEl.classList.add("post");

    //riempio il contenuto di ogni post con i dati relativi ad ogni giro del ciclo
    postEl.innerHTML = `<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${post.author.profile}" alt="${post.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${post.author.name}</div>
            <div class="post-meta__time">${formatDate(post.date)}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${post.text}</div>
<div class="post__image">
    <img src="${post.image}" alt="img${post.id}-${i}">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
        </div>
    </div> 
</div>`;

    container.append(postEl);

    //se non è presente l'immagine profilo
    if (post.author.profile === null) {
        //recupero il div contenente l'immagine profilo
        const divPic = postEl.querySelector(".post-meta__icon");

        divPic.innerHTML = `<div class="no-pic">${initials(post.author.name)}</div>`;
    }


    //cerco all'interno dell'elemento appena creato il bottone e gli applico
    //un ascoltatore
    postEl.querySelector(".like-button").addEventListener("click", function () {

        //this rappresenta il bottone su cui ho cliccato
        //al click il testo diventa blu
        this.style.color = "#0A00FF";

        //incremento di 1 il contatore dei like
        post.likes = post.likes + 1;
        //recupero il contatore dei like
        const counterLike = postEl.querySelector(".js-likes-counter");
        //aggiorno i like al post nel html
        counterLike.innerHTML = post.likes;

        //pusho nell'array l'id del post a cui è stato messo like
        idLikedPost.push(post.id);
        console.log(idLikedPost);
    });
});

// funzione che formatta la data in formato italiano
// formato default esercizio aaaa-mm-gg ---> a formato gg/mm/aaaa  
function formatDate(stringDate) {
    const arrDate = stringDate.split("-");


    let arrDateInverted = [];
    for (let i = arrDate.length - 1; i >= 0; i--) {
        arrDateInverted.push(arrDate[i]);
    }

    let output = arrDateInverted.join('/');
    return output;
}

//funzione che restituisce le iniziali del nome dell'utente
function initials(nameString) {
    const arrName = nameString.split(" ");
    
    let ris = "";
    const firstLetter = arrName[0][0];
    const secFirstLetter = arrName[1][0];
    ris += (firstLetter + secFirstLetter);

    return ris;
}