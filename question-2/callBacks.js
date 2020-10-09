function resolvedPromise() {
    setTimeout(() => {
        let success = {'message': 'Resolved Promise!'}
        console.log(success);
    }, 500)
}

function rejectedPromise() {
    setTimeout(() => {
        try {
            throw new Error('error: Rejected Promise!');
        } catch(e) {
            console.error(e);
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()