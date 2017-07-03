const apiFn = (url) => {
   return fetch(url)
      .then(response => {
        return response.json();
      }).then(
        data => {
          let response = data.results
          return {response}
        },
        error => {
          error
        }
      )
 };
 export default apiFn;