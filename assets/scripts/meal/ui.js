'use strict'
const showMealsTemplate = require('../templates/helpers/meals.handlebars')
// const getMeal = require('./api.js')
const store = require('../store.js')

const createMealSuccess = (createMealResponse) => {
  $('#message').html('New Meal Saved')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const onGetMealsSuccess = (data) => {
  store.data = data
  console.log(store)
  const showMealsHtml = showMealsTemplate({ meals: data.meals })
  $('.get-all-meals').html(showMealsHtml)
  $('.update-meal-btn').click(function () {
    $('.update-' + event.target.attributes['data-id'].value).removeClass('hidden')
  })
}

const onDeleteMeal = (deleteReponse) => {
  $('#message').html('Meal has been deleted!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
module.exports = {
  createMealSuccess,
  failure,
  onGetMealsSuccess,
  onDeleteMeal
}
