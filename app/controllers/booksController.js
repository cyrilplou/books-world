import axios from "axios";

export const booksController = {

    async homeBooks(req,res){
        
               
                // Je définis ma requête.
                const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=chattam+maxime&langRestrict=fr`;
                // &orderBy=newest
        
                // Je lance ma requête vers Google Books API
                const response = await axios.get(apiUrl);
            
                // Récupération des données.
                const results = response.data.items;
                // Les informations intéressantes se trouvent dans un objet volumeInfo du tableau Books. Mes informations utiles pour la suite après .volumeInfo    :
                // ID google du livre (c'est ce qui sera stocker dans la BDD lorsqu'un utilisateur ajoute un livre à sa librairie).
                // -> Titre : .title STRING
                // -> Auteur : .author STRING
                // -> date de publication : .publishedDate STRING 
                // -> ISBN : industryIdentifieres[0].identifier STRING
                // -> genre : .categories Array
                // -> image de couv : .imageLinks.thumbnail STRING
        
                const books = results.filter((book)=>book.volumeInfo.imageLinks !== undefined)
        
                // J'envoie ma page ainsi que le résultat de ma requête.
                res.render('home', {books})
                console.log(books)
        
            },



    async findBook(req,res){
// L'API Google Books gère pas bien les champs vides c'est pourquoi je définis une string dans le cas ou le champs est vide qui n'aura aucun effet dans la requête. Autrement, l'ensemble de la query et de son paramètre son passé dans la requête.

        let bookTitle = '';
        let bookauthor='';
        // Si ma requête est vide j'insère tout de même une string pour éviter que l'API ne plante.
        if(req.query.title.length<=0){
            bookTitle = '';
        }else{
            bookTitle= `"${req.query.title}"`
        }
        // Idem avec l'auteur.

        if(req.query.author.length<=0){
            bookauthor = '';
        }else{
            bookauthor= `+inauthor:${req.query.author}`
        }
     
        // Je définis ma requête.
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}${bookauthor}&langRestrict=fr`;
        // &orderBy=newest

        // Je lance ma requête vers Google Books API
        const response = await axios.get(apiUrl);
    
        // Récupération des données.
        const results = response.data.items;
        // Les informations intéressantes se trouvent dans un objet volumeInfo du tableau Books. Mes informations utiles pour la suite après .volumeInfo    :
        // ID google du livre (c'est ce qui sera stocker dans la BDD lorsqu'un utilisateur ajoute un livre à sa librairie).
        // -> Titre : .title STRING
        // -> Auteur : .author STRING
        // -> date de publication : .publishedDate STRING 
        // -> ISBN : industryIdentifieres[0].identifier STRING
        // -> genre : .categories Array
        // -> image de couv : .imageLinks.thumbnail STRING

        const books = results.filter((book)=>book.volumeInfo.imageLinks !== undefined)

        // J'envoie ma page ainsi que le résultat de ma requête.
        res.render('search', {books})
        console.log(books)

    },


}