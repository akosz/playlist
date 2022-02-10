const BASE_URL = "http://localhost:3030";

const request = async (path = '', options = {}, token, userId) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  if(token){
    headers.Authorization = `Bearer ${token}`;
  }

  if(userId){
    path += `?userId=${userId}`
  }

  const response = await fetch(`${BASE_URL}/${path}`, {
    ...options,
    headers
  })

  return response.json()
}


class RestApi {
  constructor(path, convertFn) {
    this.path = path
    this.convertFn = convertFn
  }
  async create(obj, token) {
    const playlist = await request(this.path, {
      method: 'POST',
      body: JSON.stringify(obj)
    }, token)
    return this.convertFn(playlist);
  }
  async fill(obj) {
    await this.db.remove({}, { multi: true });
    const newObj = await Promise.all(
      obj.map((playlist) => this.create(playlist))
    );
    return newObj;
  }
  async getAll(token, userId) {
    const items = await request(this.path, {}, token, userId)

    const playlists = items.data
    return playlists.map(this.convertFn)
  }

  async update(obj, token) {
    if (!obj.id) return;

    const playlist = await request(`${this.path}/${obj.id}`, {
      method: 'PUT',
      body: JSON.stringify(obj)
    }, token)

    return this.convertFn(playlist);
  }

  async delete(id, token) {
    return await request(`${this.path}/${id}`, {
      method: 'DELETE'
    }, token)
  }
}


const convertFn = (playlist) => {
  return {
    ...playlist,
    id: playlist.id.toString(),
    tracks: playlist.tracks.map(id => id.toString())
  }
}

export const playlistsApi = new RestApi('playlists', convertFn)

const convertTrackIds = track => {
  return {
    ...track,
    id: track.id.toString()
  }
}

export const tracksApi = new RestApi('tracks', convertTrackIds)


class AuthApi {
  async login(username, password){
    const authData = {
      email: username,
      password,
      strategy: 'local'
    }

    const response = await request('authentication', {
      method: 'POST',
      body: JSON.stringify(authData)
    })
    window.sessionStorage.setItem('api-token', response.accessToken)
    return response
  }

  logout(){
    window.sessionStorage.removeItem('api-token')
  }

  getToken(){
    return window.sessionStorage.getItem('api-token')
  }

  async getuserById(userId, token){
    return await request(`users/${userId}`, {}, token)
  }
}

export const authApi = new AuthApi();