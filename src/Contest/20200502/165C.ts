export class Main {
  static main(input: string): string {
    const tmp: string[] = input.split("\n");
    const [n, m, q]: number[] = tmp
      .shift()
      .split(" ")
      .map((int) => parseInt(int));
    const l = Main.makeList(1, 0, n, m, []);
    const len = l.length;
    let result = [];
    for (let j = 0; j < len; j++) {
      result.push(0);
    }
    for (let i = 0; i < q; i++) {
      const x: number[] = tmp
        .shift()
        .split(" ")
        .map((int) => parseInt(int));
      for (let j = 0; j < len; j++) {
        const list = l[j];
        if (list[x[1] - 1] - list[x[0] - 1] == x[2]) {
          result[j] = result[j] + x[3];
        }
      }
    }
    return `${Math.max.apply(null, result)}`;
  }

  static makeList(i, k, n, m, list) {
    if (k == n) {
      return [list];
    }
    let result = [];
    for (let j = i; j <= m; j++) {
      result = result.concat(Main.makeList(j, k + 1, n, m, list.concat([j])));
    }
    return result;
  }
}
console.log(Main.main(require("fs").readFileSync("/dev/stdin", "utf8")));
