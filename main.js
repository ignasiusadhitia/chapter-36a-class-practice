export function add(a, b) {
  return a + b;
}

add(1, 2); // Output: 3

export function subtract(a, b) {
  return a - b;
}

subtract(1, 2); // Output: -1

export function multiply(a, b) {
  return a * b;
}

multiply(1, 2); // Output: 2

export function divide(a, b) {
  return a / b;
}

divide(1, 2); // Output: 0.5

export function modulo(a, b) {
  return a % b;
}

modulo(1, 2); // Output: 1

export function power(a, b) {
  return a ** b;
}

power(1, 2); // Output: 1

export function sqrt(a) {
  return Math.sqrt(a);
}

sqrt(4); // Output: 2

export const shoppingList = ["milk", "apple", "eggs", "orange", "bread"];

export const user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

export function promiseTest() {
  return new Promise((resolve, reject) => {
    resolve("Hello World!");
  });
}

export async function asyncTest() {
  return "Hello World!";
}

export async function asyncTestObject() {
  return {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  };
}

export function errorTest() {
  throw new Error("Error");
}

// mocking, function peniru
import axios from "axios";
export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

// mock function
export const mockFunction = jest.fn().mockResolvedValue("mock data");

// snapshot testing, membandingkan data sebelum dan sesudah
export const snapshotTest = (name) => {
  //   return `Hello, my name is ${name}`;
  return {
    name,
    age: 30,
    city: "New York",
    country: "USA",
  };
};

// fucntion yang terus berjalan

export const delayFunction = (callback) => {
  setTimeout(callback, 1000);
};

export const fetchHobbies = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject(new Error("Failed to fetch hobbies"));
    } else {
      resolve(["coding", "reading", "writing", "gaming"]);
    }
  });
};

export const fetchHobbiesWithCallback = (callback, shouldFail) => {
  if (callback) {
    if (shouldFail) {
      callback(new Error("Failed to fetch hobbies"));
    } else {
      callback(null, ["coding", "reading", "writing", "gaming"]);
    }
  }
};

export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}
