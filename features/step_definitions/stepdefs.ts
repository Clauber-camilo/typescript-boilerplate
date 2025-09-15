import { Given, Then, When } from '@cucumber/cucumber'

import assert from 'assert'

const isItFriday = (day: string): string => {
  return day === 'Friday' ? 'TGIF' : 'Nope'
}

Given('today is {string}', function (day: string) {
  this.today = day
})

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today)
})

Then('I should be told {string}', function (expectedAnswer: string) {
  assert.strictEqual(this.actualAnswer.toString(), expectedAnswer)
})
