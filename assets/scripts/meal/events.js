const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateMeal = (event) => {
  event.preventDefault()
  const mealtype = $('#meal-type option:selected').text()
  // console.log(mealtype)
  const userData = getFormFields(event.target)
  // console.log(userData)
  $(event.target).trigger('reset')
  api.createMeal(mealtype, userData)
    .then(ui.createMealSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateMeal
}
