import { createUuid } from "utils";

describe("createUuid", () => {
  it("string length", () => {
    const uuid: string = createUuid();
    expect(uuid.length).toBe(36);
  });

  it("1000 unique string", () => {
    let stringSet: Set<string> = new Set<string>();
    for (let i: number = 0; i < 1000; ++i) {
      stringSet.add(createUuid());
    }
    expect(stringSet.size).toBe(1000);
  });
});
