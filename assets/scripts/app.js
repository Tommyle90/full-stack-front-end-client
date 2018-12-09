'use strict'
const authEvents = require('./auth/events.js')
const mealEvents = require('./meal/events.js')
// const store = require('./store.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#meal-form').on('submit', mealEvents.onCreateMeal)
  $('#show-meal-btn').on('click', mealEvents.onGetMeals)
  $('.meal-box').on('click', '.delete-meal', mealEvents.onDeleteMeal)
  $('.meal-box').on('submit', '.update-meal-form', mealEvents.onUpdateMeal)
  // $('.meal-box').on('click, '.update-meal-btn',)
  // $('body').on('submit', '#meal-form', mealEvents.onCreateMeal)
  // $('#meal-form').on(() => {
  //   $('.mealforms').on('submit', mealEvents.onCreatemeal)
  // })
})

$('.submit-btn').click(function () {
  debugger
  $('.update-' + event.target.attributes['data-id'].value).addClass('hidden')
})

$('#show-meal-btn').click(function () {
  $('.mealsforms').hide()
  $('.get-all-meals').show()
  $('#message').show(500)
})

$('#new-meal-btn').click(function () {
  $('.mealsforms').show()
  $('.get-all-meals').hide()
  $('#message').show(500)
})

$('#sign-up-btn').click(function () {
  // $('#sign-up-form').fadeIn(500)
  $('#sign-up-form').show()
  // $('#sign-in-form').fadeOut(500)
  $('#sign-in-form').hide()
  // $('#change-password-form').fadeOut(500)
  $('#change-password-form').hide()
  $('#message').show(500)
})

$('#sign-in-btn').click(function () {
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#message').show(500)
})

$('#change-pass-btn').click(function () {
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#message').show(500)
})
