async function timeTick (time) {
  return new Promise((resolve) => {
    setTimeout (function () {
      resolve('complete')
    }, time)
  })
  
}


async function test () {
  let obj = await timeTick(1000);
  console.log(obj)
}

test();
