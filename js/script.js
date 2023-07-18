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
            profile: "https://unsplash.it/300/300?image=67",
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
            <div class="post-meta__time">${post.date}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${post.text}</div>
<div class="post__image">
    <img src="${post.image}" alt="img${post.id}">
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
})