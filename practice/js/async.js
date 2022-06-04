async function logInOrder(urls) {
  const textPromises = urls.map(async url => {
    const response = await timeTick(1000, url);
    console.log(response);
    return response;
  });

  for (const textPromise of textPromises) {
    // console.log(await textPromise);
  }
}

async function timeTick(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

let urls = [1, 2, 3];
logInOrder(urls);
