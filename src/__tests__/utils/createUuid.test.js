import createUuid from "../../utils/createUuid";

describe("createUuid", () => {
  it("string length", () => {
    const uuid = createUuid();
    expect(uuid.length).toBe(36);
  });

  it("1000 unique string", () => {
    let stringSet = new Set();
    for (let i = 0; i < 1000; ++i) {
      stringSet.add(createUuid());
    }
    expect(stringSet.size).toBe(1000);
  });
});
