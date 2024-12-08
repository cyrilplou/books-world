import database from './database.js'; 

export const userDatamapper = {
  async findOneUser (id){

    const query = "SELECT * FROM users WHERE id = $1";
    const value = [id];
    const result = await database.query(query,value);
    return result.rows
    
    }
}