const isSucceeded = true;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve('Success');
  } else {
    reject(new Error('Failure'));
  }
});

console.log(promise);

promise.then((value) => {
    console.log('1.', value);

    return 'Succees again';
  })
  .then((value) => {
    console.log('2.', value);

    return '2のあとやで';
  })
  .then((value) => {
    console.log('5.', value);
  })
  .catch((error) => {
    console.error('3.', error);
  })
  .finally(() => {
    console.log('4.', 'Complite');
  });

