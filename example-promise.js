// function getTempCallback(location, callback) {
//     callback(undefined, 20);
//     callback('City not found');
// }

// getTempCallback('Sydney', function(err, data) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', data);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(25);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Sydney').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('A & b need to be numbers');
        }
    });
}

addPromise(2,3).then(function (sum) {
    console.log('success', sum);
}, function (err) {
    console.log('error', err);
});


addPromise('hey', 9).then(function (sum) {
    console.log('success', sum);
}, function (err) {
    console.log('error', err);
});