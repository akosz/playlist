const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIn0.RdTDcCUiM6AAgNMZGzuZzSWosS14dVO2JUQjdbAwfMc';

class RestApi {
    constructor() {}
    async create(obj) {
        const response = await fetch('http://localhost:3030/playlists', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const playlist = await response.json()
        return playlist;
    }
    async fill(obj) {
      await this.db.remove({}, { multi: true });
      const newObj = await Promise.all(
        obj.map((playlist) => this.create(playlist))
      );
      return newObj;
    }
    async getAll() {
      const obj = await this.db.find({});
      return obj.map((playlist) => ({ ...playlist, id: playlist._id }));
    }
  
    async update(obj) {
      if (!obj.id) return;
      obj._id = obj.id;
      await this.db.update({ _id: obj._id }, obj, {});
      return obj;
    }
  
    async delete(id) {
      await this.db.remove({ _id: id });
    }
  }
  

  export const playlistsApi = new RestApi()