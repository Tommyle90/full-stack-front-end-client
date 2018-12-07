const store = require('../store.js')
const config = require('../config.js')

const createMeal = (mealtype, userData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/meals',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'meal': {
        'user_id': store.user.id,
        'mealtype': mealtype,
        'date': userData.meal.date,
        'description': userData.meal.description
      }
    })
  })
}

module.exports = {
  createMeal
}
