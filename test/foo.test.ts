import {FooBar} from "../src/fooBar"


describe("test print Foo", () => {
  it("should return Foo for FooBar(3)", () => {
    expect(FooBar(3)).toBe("Foo");
  });
  it("should return Foo for FooBar(27)", () => {
    expect(FooBar(27)).toBe("Foo");
  });
  it("should return Foo for FooBar(393)", () => {
    expect(FooBar(393)).toBe("Foo");
  });
})


describe("test print Bar", () => {
  it("should return Bar for FooBar(5)", () => {
    expect(FooBar(5)).toBe("Bar");
  });
  it("should return Bar for FooBar(25)", () => {
    expect(FooBar(25)).toBe("Bar");
  });
  it("should return Bar for FooBar(355)", () => {
    expect(FooBar(355)).toBe("Bar");
  });
  
})


describe("test print FooBar", () => {
  it("should return FooBar for FooBar(5)", () => {
    expect(FooBar(15)).toBe("FooBar");
  });
  it("should return FooBar for FooBar(25)", () => {
    expect(FooBar(30)).toBe("FooBar");
  });
  it("should return FooBar for FooBar(355)", () => {
    expect(FooBar(315)).toBe("FooBar");
  });
  
})


describe("test print number", () => {
  it("should return 4 for FooBar(4)", () => {
    expect(FooBar(4)).toBe(4);
  });
  it("should return 26 for FooBar(6)", () => {
    expect(FooBar(26)).toBe(26);
  });
  it("should return 341 for FooBar(341)", () => {
    expect(FooBar(341)).toBe(341);
  });
})