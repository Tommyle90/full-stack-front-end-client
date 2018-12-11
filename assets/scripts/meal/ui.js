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
  // console.log(data.meals.length)
  const showMealsHtml = showMealsTemplate({ meals: data.meals })
  $('.get-all-meals').html(showMealsHtml)
  $('.update-meal-btn').click(function () {
    $('.update-' + event.target.attributes['data-id'].value).removeClass('hidden')
  })
  $('#message').html(`Total meals: ${data.meals.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const onDeleteMeal = (deleteReponse) => {
  $('#message').html('Meal has been deleted!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const updateMealSuccess = (updateMealResponse) => {
  $('#message-box').html('Meal has been updated')
  $('#message-box').addClass('success-message')
  $('#message-box').removeClass('error-message')
  setTimeout(function () {
    $('#message-box').fadeOut().empty()
  }, 1000)
}
module.exports = {
  createMealSuccess,
  failure,
  onGetMealsSuccess,
  onDeleteMeal,
  updateMealSuccess
}
