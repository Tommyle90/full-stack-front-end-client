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
const onGetMeals = (event) => {
  event.preventDefault()
  api.getMeal()
    .then(ui.onGetMealsSuccess)
    .catch(ui.failure)
}

const onDeleteMeal = (event) => {
  event.preventDefault()
  const id = $(event.target).parents('div').data('id')
  console.log(id)
  api.deleteMeal(id)
    .then(() => onGetMeals(event))
    .catch(ui.failure)
}

const onUpdateMeal = (event) => {
  event.preventDefault()
  const id = $(event.target).parents('div').data('id')
  const description = $('.description-submits').val()
  const mealtype = $('.meal-hb').html()
  const date = $('.date-hb').html()
  console.log(id, mealtype, date, description)
  api.updateMeal(id, mealtype, date, description)
    .then(() => onGetMeals(event))
    .catch(ui.failure)
}
module.exports = {
  onCreateMeal,
  onGetMeals,
  onDeleteMeal,
  onUpdateMeal
}
