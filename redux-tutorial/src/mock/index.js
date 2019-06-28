const sleep = ms => new Promise((resolve) => {
  setTimeout(() => resolve(), ms);
});

export default async function () {
  const n = Math.random();
  const successOrFail = n > 0.3;

  await sleep(1500);

  return {
    success: successOrFail,
    data: successOrFail ? [
      {
        index: 1,
        title: 'nice fetch 1',
        description: 'fetch 1',
      },
      {
        index: 2,
        title: 'nice fetch 2',
        description: 'fetch 2',
      },
    ] : null,
  };
}
