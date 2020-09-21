const assert = chai.assert;

describe("Practice Assignment 7", function () {
  describe("Question 1", function () {
    it("webDev should exist.", function () {
      assert.exists(webDev);
    });
    it("webDev should be an object.", function () {
      assert.isObject(webDev);
    });
    it("webDev should have all required keys.", function () {
      assert.hasAllKeys(webDev, ["frame", "style", "logic"]);
    });
    it("The 1st property should return string data.", function () {
      const result = webDev.frame;
      assert.isString(result);
    });
    it("The 1st property should return accurate data.", function () {
      const result = webDev.frame;
      assert.strictEqual(result, "HTML");
    });
    it("The 2nd property should return string data.", function () {
      const result = webDev.style;
      assert.isString(result);
    });
    it("The 2nd property should return accurate data.", function () {
      const result = webDev.style;
      assert.strictEqual(result, "CSS");
    });
    it("The 3rd property should return string data.", function () {
      const result = webDev.logic;
      assert.isString(result);
    });
    it("The 3rd property should return accurate data.", function () {
      const result = webDev.logic;
      assert.strictEqual(result, "JavaScript");
    });
  });
  describe("Question 2", function () {
    it("pizza should exist.", function () {
      assert.exists(pizza);
    });
    it("pizza should be an object.", function () {
      assert.isObject(pizza);
    });
    it("pizza should have all required keys.", function () {
      assert.hasAllKeys(pizza, ["crust", "setCrust"]);
    });
    it("The crust property should return string data.", function () {
      const result = pizza.crust;
      assert.isString(result);
    });
    it("The key setCrust should refer to a method.", function () {
      const result = pizza.setCrust;
      assert.isFunction(result);
    });
    it("The setCrust method should change the crust property value.", function () {
      pizza.setCrust("thick");
      let result = pizza.crust;
      assert.strictEqual(result, "thick");
      pizza.setCrust("original");
      result = pizza.crust;
      assert.strictEqual(result, "original");
    });
  });
  describe("Question 3", function () {
    it("doesItContain should exist.", function () {
      assert.exists(doesItContain);
    });
    it("doesItContain should be a function.", function () {
      assert.isFunction(doesItContain);
    });
    it("doesItContain should return boolean data.", function () {
      const q3Obj1 = { name: "Dave" };
      let result = doesItContain("name", q3Obj1);
      assert.isBoolean(result);
      const q3Obj2 = { food: "Bread" };
      result = doesItContain("name", q3Obj2);
      assert.isBoolean(result);
    });
    it("doesItContain should return accurate data.", function () {
      const q3Obj1 = { sport: "football" };
      let result = doesItContain("sport", q3Obj1);
      assert.strictEqual(result, true);
      const q3Obj2 = { lang: "Python" };
      result = doesItContain("dept", q3Obj2);
      assert.isBoolean(result);
    });
  });
  describe("Question 4", function () {
    it("introduceTheActors should exist.", function () {
      assert.exists(introduceTheActors);
    });
    it("introduceTheActors should be a function.", function () {
      assert.isFunction(introduceTheActors);
    });
    it("The function introduceTheActors should return an array.", function () {
      const q4Array = [{ name: "Arnold", movie: "The Terminator" }];
      const result = introduceTheActors(q4Array);
      assert.isArray(result);
    });
    it("The function introduceTheActors should return an array with the accurate length.", function () {
      const q4Array1 = [
        { name: "a", movie: "b" },
        { name: "a", movie: "b" },
        { name: "a", movie: "b" }
      ];
      let result = introduceTheActors(q4Array1);
      assert.strictEqual(result.length, 3);
      const q4Array2 = [{ name: "a", movie: "b" }];
      result = introduceTheActors(q4Array2);
      assert.strictEqual(result.length, 1);
    });
    it("The function introduceTheActors should return an array with accurate data.", function () {
      let result = introduceTheActors(actors);
      assert.strictEqual(result[1], "Hi, I'm Amy and I was in Arrival.");
      const q4Array = [
        { name: "a", movie: "b" },
        { name: "c", movie: "d" }
      ];
      result = introduceTheActors(q4Array);
      assert.strictEqual(result[1], "Hi, I'm c and I was in d.");
    });
  });
  describe("Question 5", function () {
    it("techCompanies should exist.", function () {
      assert.exists(techCompanies);
    });
    it("techCompanies should be an object.", function () {
      assert.isObject(techCompanies);
    });
    it("techCompanies should have all required keys.", function () {
      assert.hasAllKeys(techCompanies, [
        "Microsoft",
        "Amazon",
        "Tesla",
        "Facebook",
        "Apple",
        "founderLookup"
      ]);
    });
    it("techCompanies should contain accurate data.", function () {
      let result = techCompanies.Microsoft;
      assert.strictEqual(result, "Bill Gates");
      result = techCompanies.Apple;
      assert.strictEqual(result, "Steve Jobs");
      result = techCompanies.Amazon;
      assert.strictEqual(result, "Jeff Bezos");
    });
    it("founderLookup should be a method.", function () {
      assert.isFunction(techCompanies.founderLookup);
    });
    it("founderLookup should return accurate data.", function () {
      let result = techCompanies.founderLookup("Microsoft");
      assert.strictEqual(result, "Bill Gates");
      result = techCompanies.founderLookup("Facebook");
      assert.strictEqual(result, "Mark Zuckerberg");
      result = techCompanies.founderLookup("Tesla");
      assert.strictEqual(result, "Elon Musk");
    });
  });
  describe("Question 6", function () {
    it("storeFounders should exist.", function () {
      assert.exists(storeFounders);
    });
    it("storeFounders should be a function.", function () {
      assert.isFunction(storeFounders);
    });
    it("The function storeFounders should return an array.", function () {
      const entrepreneurs = { Reddit: "Alexis O'Hanian", Zappos: "Tony Hsieh" };
      const result = storeFounders(entrepreneurs);
      assert.isArray(result);
    });
    it("The function storeFounders should return accurate data.", function () {
      const entrepreneurs = { Reddit: "Alexis O'Hanian", Zappos: "Tony Hsieh" };
      let result = storeFounders(entrepreneurs);
      assert.strictEqual(result[1], "Tony Hsieh");
      const band = { vocals: "Axl", guitar: "Slash", bass: "Duff" };
      result = storeFounders(band);
      assert.strictEqual(result[0], "Axl");
      assert.strictEqual(result[1], "Slash");
    });
  });
  describe("Question 7", function () {
    it("goToSecondClass should exist.", function () {
      assert.exists(goToSecondClass);
    });
    it("goToSecondClass should be a function.", function () {
      assert.isFunction(goToSecondClass);
    });
    it("The function goToSecondClass should return a string.", function () {
      const myClasses = { secondHour: "Math" };
      const result = goToSecondClass(myClasses);
      assert.isString(result);
    });
    it("The function goToSecondClass should return accurate data.", function () {
      const myClasses = {
        firstHour: "English",
        secondHour: "Math",
        thirdHour: "History"
      };
      let result = goToSecondClass(myClasses);
      assert.isString(result, "Time to go to Math class!");
      const moreClasses = {
        firstHour: "Spanish",
        secondHour: "IT"
      };
      result = goToSecondClass(moreClasses);
      assert.isString(result, "Time to go to IT class!");
    });
  });
  describe("Question 8", function () {
    it("pie should exist.", function () {
      assert.exists(pie);
    });
    it("pie should be an object.", function () {
      assert.isObject(pie);
    });
    it("pie should have all required keys.", function () {
      assert.hasAllKeys(pie, ["slices", "taste"]);
    });
    it("taste should be a method.", function () {
      assert.isFunction(pie.taste);
    });
    it("The method taste should return a string.", function () {
      const result = pie.taste();
      assert.isString(result);
    });
    it("The method taste should return accurate data.", function () {
      const result = pie.taste();
      assert.strictEqual(result, "Wow!");
    });
    it("blueBerryPie should exist.", function () {
      assert.exists(blueBerryPie);
    });
    it("blueBerryPie should be an object.", function () {
      assert.isObject(blueBerryPie);
    });
    it("blueBerryPie should have all required keys.", function () {
      assert.hasAllKeys(blueBerryPie, ["flavor", "taste"]);
    });
    it("blueBerryPie should inherit the slices property.", function () {
      const result = blueBerryPie.slices;
      assert.strictEqual(result, 8);
    });
    it("blueBerryPie's flavor property should return accurate data.", function () {
      const result = blueBerryPie.flavor;
      assert.strictEqual(result, "blueberry");
    });
    it("blueBerryPie's taste method should return accurate data.", function () {
      const result = blueBerryPie.taste();
      assert.strictEqual(result, "Delicious!");
    });
  });
});
