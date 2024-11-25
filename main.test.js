import {
  add,
  asyncTest,
  asyncTestObject,
  delayFunction,
  divide,
  errorTest,
  fetchHobbies,
  fetchHobbiesWithCallback,
  getUser,
  mockFunction,
  modulo,
  multiply,
  power,
  promiseTest,
  shoppingList,
  snapshotTest,
  sqrt,
  subtract,
  user,
} from "./main";

// parameter 1 is the test name string, parameter 2 is the test function
test("add 1 + 2 is to equal e", () => {
  expect(add(1, 2)).toBe(3);
});

test("substract 1 - 2 is to equal -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("multiply 1 * 2 is to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("divide 1 / 2 is to equal 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});

test("modulo 1 % 2 is to equal 1", () => {
  expect(modulo(1, 2)).toBe(1);
});

test("power 1 ** 2 is to equal 1", () => {
  expect(power(1, 2)).toBe(1);
});

test("sqrt 4 is to equal 2", () => {
  expect(sqrt(4)).toBe(2);
});

test("shopping list has milk", () => {
  expect(shoppingList).toContain("orange");
});

test("check shopping list", () => {
  const data = ["milk", "orange", "apple", "eggs", "bread"];

  for (const item of data) {
    expect(shoppingList).toContain(item);
  }
});

test("check user", () => {
  expect(user).toMatchObject({
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  });
});

test("promise test", () => {
  expect(promiseTest()).resolves.toBe("Hello World!");
});

test("promise test 2", () => {
  return promiseTest().then((res) => expect(res).toBe("Hello World!"));
});

test("async test", async () => {
  expect(await asyncTest()).toBe("Hello World!");
});

test("async test 2", async () => {
  const res = await asyncTest();
  expect(res).toBe("Hello World!");
});

test("async test object", async () => {
  const res = await asyncTestObject();
  expect(res).toMatchObject({
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  });
});

test("error test", () => {
  expect(() => errorTest()).toThrow("Error");
});

// mocking, simulasi get data, karena api tidak selalu tersedia
jest.mock("axios"); // mocking axios
import axios from "axios";

axios.get.mockResolvedValue({
  data: {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  },
});

test("test mocking user data", async () => {
  const user = await getUser(1);
  console.log(user);
  expect(user.name).toBe("John");
});

// test("fetch mock data", async () => {
//   const res = await mockFunction();
//   expect(res).toBe("mock data");
// });

test("snapshot testing", async () => {
  expect(snapshotTest("John")).toMatchSnapshot();
  expect(snapshotTest("John")).toMatchSnapshot();
});

jest.useFakeTimers();
test("delay function", () => {
  const mockCallback = jest.fn();
  delayFunction(mockCallback);
  jest.advanceTimersByTime(1000);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

// Common Matchers
test("4 multiplied by 2 is 8", () => {
  expect(4 * 2).toBe(8);
});

test("object assignment", () => {
  const data = { name: "John" };
  data["age"] = 30;
  expect(data).toEqual({ name: "John", age: 30 });
});

test("multiplying positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a * b).not.toBe(0);
    }
  }
});

// Thruthiness
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers
test("2 multipllied by 2", () => {
  const value = 2 * 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("multiplying floats", () => {
  const value = 2.3 * 0.2;
  expect(value).toBeCloseTo(0.46);
});

// Strings
test("there is no A in John", () => {
  expect("John").not.toMatch(/A/);
});

test('but there is an "Angel" in Los Angeles', () => {
  expect("Los Angeles").toMatch(/Angel/);
});

// Arrays and iterables
const hobbies = ["coding", "reading", "writing", "gaming"];

test('the list has "coding" in it', () => {
  expect(hobbies).toContain("coding");
  expect(new Set(hobbies)).toContain("coding");
});

// Testing Asynchronous Code
test("the data is array of hobbies 1", async () => {
  const data = await fetchHobbies();
  expect(data).toEqual(["coding", "reading", "writing", "gaming"]);
});

test("the fetch fails with an error 1", async () => {
  expect.assertions(1); // fitur di Jest untuk memastikan bahwa sejumlah assertions tertentu benar-benar dipanggil selama eksekusi test case. Fitur ini berguna terutama dalam pengujian asynchronous, di mana assertion bisa saja tidak dijalankan karena suatu alasan (misalnya catch block tidak pernah dieksekusi).
  try {
    await fetchHobbies(true);
  } catch (e) {
    expect(e).toEqual(new Error("Failed to fetch hobbies"));
  }
});

test("the data is array of hobbies 2", async () => {
  await expect(fetchHobbies()).resolves.toEqual([
    "coding",
    "reading",
    "writing",
    "gaming",
  ]);
});

test("the fetch fails with an error 2", async () => {
  await expect(fetchHobbies(true)).rejects.toEqual(
    new Error("Failed to fetch hobbies")
  );
});

test("the fetch fails with an error 3", async () => {
  try {
    await fetchHobbies(true);
  } catch (e) {
    expect(e.message).toBe("Failed to fetch hobbies");
  }
});

// Callbacks
test("the data is array of hobbies 3", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toEqual(["coding", "reading", "writing", "gaming"]);
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchHobbiesWithCallback(callback);
});

test("data is array of hobbies 4", () => {
  return expect(fetchHobbies()).resolves.toEqual([
    "coding",
    "reading",
    "writing",
    "gaming",
  ]);
});

test("the fetch fails with an error 4", () => {
  return expect(fetchHobbies(true)).rejects.toEqual(
    new Error("Failed to fetch hobbies")
  );
});

