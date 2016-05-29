import { arrayToMap } from "lib/utils";

describe("lib/utils", () => {
  describe("arrayToMap", () => {
    it("converts array to map using the given key", () => {
      expect(arrayToMap([
        { id: 1, test: 123 },
        { id: 2, test: 456 },
        { id: 3, test: 789 },
      ], "id")).to.deep.equal({
        1: { id: 1, test: 123 },
        2: { id: 2, test: 456 },
        3: { id: 3, test: 789 },
      });
    });

    it("exludes items missing the key field", () => {
      expect(arrayToMap([
        { id: 1, test: 123 },
        { id: 2, test: 456 },
        { test: 789 },
      ], "id")).to.deep.equal({
        1: { id: 1, test: 123 },
        2: { id: 2, test: 456 },
      });
    });

    it("returns empty object for malformed arrays", () => {
      expect(arrayToMap([ 1, 2, 3 ], "id")).to.deep.equal({});
    });

    it("returns empty object for undefined input", () => {
      expect(arrayToMap(void 0, "id")).to.deep.equal({});
    });
  });
});
