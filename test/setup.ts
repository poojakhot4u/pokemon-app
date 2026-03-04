import "@testing-library/jest-dom";
import { server } from "./server";

// Start MSW before all tests
beforeAll(() => server.listen());

// Reset any runtime request handlers
afterEach(() => server.resetHandlers());

// Clean up after all tests
afterAll(() => server.close());