/* global fetch */

const apiKey = 'Kj5tDg2JUePQdg2o4VvI5cAOdPGFylL5mDhb5TL584aLM5TpXFY37qN8Up3Bu3V0reguMlu1KVm9t8MlMaebsW8RqWFmc1D3691GsQ2syuLEdSbQ_vIem2dEWk9PW3Yx'
const Yelp = {
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers:
      {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
}

export default Yelp
