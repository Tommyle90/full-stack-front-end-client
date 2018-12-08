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

const getMeal = (inputData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/meals',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)

  })
}

const deleteMeal = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/meals/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateMeal = (id, mealtype, date, description) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/meals/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'meal': {
        'user_id': store.user.id,
        'mealtype': mealtype,
        'date': date,
        'description': description
      }
    })
  })
}
module.exports = {
  createMeal,
  getMeal,
  deleteMeal,
  updateMeal
}
