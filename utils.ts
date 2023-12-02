export async function getInput(day: number) {
  const url = `https://adventofcode.com/2023/day/${day}/input`;
  const res = await fetch(url, {
    headers: {
      Cookie: `session=${process.env.AUTH}`,
    },
  });
  return (await res.text()).trim().split('\n');
}
