
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'rejected promise!'});}, 500);
    });
}
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});}, 500);
    });
}


resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(err => console.log(err))