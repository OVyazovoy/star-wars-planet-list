import axios from 'axios'
const url = 'https://swapi.co/api/planets';

export interface IPlanet {
  name: string
}
interface IResponse {
  data : {
    results: IPlanet[]
  }
}

function* getPlanetList(searchText : string) : IterableIterator < Promise < IResponse >> {
  return yield axios.get(url, {
    params: {
      search: searchText,
      format: 'json'
    }
  })
}

export default getPlanetList
