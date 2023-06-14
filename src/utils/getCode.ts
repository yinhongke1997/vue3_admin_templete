import md5 from "md5";
export function getTestICode() {
  let num: number = Date.now();
  const now = parseInt((num / 1000).toString());
  const code = now + "LGD_Sunday-1991-12-30";
  return {
    icode: md5(code),
    time: now,
  };
}
