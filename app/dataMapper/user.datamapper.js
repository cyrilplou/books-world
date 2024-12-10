import database from './database.js'; 

export const userDatamapper = {
  async findOneUser (id){

    const query = "SELECT * FROM users WHERE id = $1";
    const value = [id];
    const result = await database.query(query,value);
    return result.rows[0]
    
    },
    async findOneUserMail (mail){

      const query = "SELECT * FROM users WHERE email = $1";
      const value = [mail];
      const result = await database.query(query,value);
      return result.rows[0]
      
      },
      async addFavoriteBookQuery (user_id,google_id){

        const query = "INSERT INTO has_books (user_id,owned_book_id) VALUES ($1,$2) ";
        const value = [user_id,google_id];
        const result = await database.query(query,value);
        console.log(result)
        },
      async addFavoriteToBDD (titre,auteur,description,image,google_book_id){

        const query = "INSERT INTO owned_book (google_book_id,title,author,description,image_path) VALUES ($1,$2,$3,$4,$5) ";
        const value = [google_book_id,titre,auteur,description,image];
        const result = await database.query(query,value);
        console.log(result)
        },

}