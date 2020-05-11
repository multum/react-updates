export const mockConsole = () => {
  const originalConsole = Object.assign({}, console);
  const consoleKeys = Object.keys(console);

  beforeEach(() => {
    console.calls = [];
  });

  beforeAll(() => {
    consoleKeys.forEach((key) => {
      console[key] = (...args) => {
        console.calls.push({ __: `console.${key}`, arguments: args });
      };
    });
  });

  afterAll(() => {
    delete console.calls;
    consoleKeys.forEach((key) => {
      console[key] = originalConsole[key];
    });
  });
};
