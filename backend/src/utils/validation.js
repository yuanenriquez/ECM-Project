function normalizeEmail(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidDateOnly(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function validateRegistrationInput(input = {}) {
  input = input && typeof input === 'object' ? input : {};
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const date = typeof input.date === 'string' ? input.date.trim() : '';
  const email = normalizeEmail(input.email);
  const password = typeof input.password === 'string' ? input.password : '';

  if (!name || !date || !email || !password) {
    return { valid: false, error: 'Name, date, email, and password are required.' };
  }
  if (name.length > 100) {
    return { valid: false, error: 'Name must be 100 characters or fewer.' };
  }
  if (!isValidDateOnly(date)) {
    return { valid: false, error: 'Date must be a valid date in YYYY-MM-DD format.' };
  }
  if (!isValidEmail(email)) {
    return { valid: false, error: 'A valid email address is required.' };
  }
  // bcrypt processes at most 72 bytes. Limit the input to 72 characters here
  // and document that non-ASCII strings may use more than one byte per char.
  if (password.length < 8 || Buffer.byteLength(password, 'utf8') > 72) {
    return { valid: false, error: 'Password must be at least 8 characters and no more than 72 UTF-8 bytes.' };
  }

  return {
    valid: true,
    data: { name, date, email, password }
  };
}

function validateLoginInput(input = {}) {
  input = input && typeof input === 'object' ? input : {};
  const email = normalizeEmail(input.email);
  const password = typeof input.password === 'string' ? input.password : '';

  if (!email || !password) {
    return { valid: false, error: 'Email and password are required.' };
  }
  if (!isValidEmail(email)) {
    return { valid: false, error: 'A valid email address is required.' };
  }
  if (Buffer.byteLength(password, 'utf8') > 72) {
    return { valid: false, error: 'Password is too long.' };
  }

  return { valid: true, data: { email, password } };
}

module.exports = {
  normalizeEmail,
  isValidEmail,
  isValidDateOnly,
  validateRegistrationInput,
  validateLoginInput
};
