const test = require('node:test');
const assert = require('node:assert/strict');
const {
  normalizeEmail,
  isValidDateOnly,
  validateRegistrationInput,
  validateLoginInput
} = require('../src/utils/validation');

test('normalizes email addresses', () => {
  assert.equal(normalizeEmail('  PERSON@Example.COM '), 'person@example.com');
});

test('accepts a real calendar date and rejects an impossible date', () => {
  assert.equal(isValidDateOnly('2001-02-28'), true);
  assert.equal(isValidDateOnly('2024-02-30'), false);
  assert.equal(isValidDateOnly('02/28/2001'), false);
});

test('validates a complete registration payload', () => {
  const result = validateRegistrationInput({
    name: 'Test User',
    date: '2001-02-28',
    email: 'TEST@example.com',
    password: 'correct-horse-battery'
  });
  assert.equal(result.valid, true);
  assert.equal(result.data.email, 'test@example.com');
});

test('rejects a registration payload with a short password', () => {
  const result = validateRegistrationInput({
    name: 'Test User',
    date: '2001-02-28',
    email: 'test@example.com',
    password: 'short'
  });
  assert.equal(result.valid, false);
});

test('rejects null or non-object payloads safely', () => {
  assert.equal(validateRegistrationInput(null).valid, false);
  assert.equal(validateLoginInput(null).valid, false);
  assert.equal(validateRegistrationInput('not-an-object').valid, false);
});

test('validates login input', () => {
  assert.equal(validateLoginInput({ email: 'test@example.com', password: 'password123' }).valid, true);
  assert.equal(validateLoginInput({ email: 'not-an-email', password: 'password123' }).valid, false);
});
