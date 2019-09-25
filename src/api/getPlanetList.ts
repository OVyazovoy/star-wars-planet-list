import axios from 'axios'
const url = 'https://swapi.co/api/planets?search=';
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

function* getPlanetList (searchText: string){
  return yield axios.get(`${url}${searchText}`, config)
}

export default getPlanetList
