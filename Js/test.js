// test.js - Unit tests for form validation in script.js
// These tests use Jest-like syntax for demonstration. You can adapt to your preferred test runner.

// Mocking DOM for testing
document.body.innerHTML = `
<form id="testForm">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
`;

const form = document.querySelector('form');

function triggerSubmit() {
  const event = new Event('submit', { bubbles: true, cancelable: true });
  return form.dispatchEvent(event);
}

describe('Form Validation', () => {
  beforeEach(() => {
    form.reset();
  });

  test('should prevent submit if required fields are empty', () => {
    let prevented = false;
    form.addEventListener('submit', e => { prevented = e.defaultPrevented; }, { once: true });
    triggerSubmit();
    expect(prevented).toBe(true);
  });

  test('should allow submit if all required fields are filled', () => {
    form.name.value = 'Juan';
    form.email.value = 'juan@email.com';
    form.message.value = 'Hola';
    let prevented = false;
    form.addEventListener('submit', e => { prevented = e.defaultPrevented; }, { once: true });
    triggerSubmit();
    expect(prevented).toBe(false);
  });

  test('should show error for empty name', () => {
    form.name.value = '';
    form.email.value = 'a@b.com';
    form.message.value = 'msg';
    let prevented = false;
    form.addEventListener('submit', e => { prevented = e.defaultPrevented; }, { once: true });
    triggerSubmit();
    expect(prevented).toBe(true);
  });
});
