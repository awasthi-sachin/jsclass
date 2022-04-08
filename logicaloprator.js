let isverified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(!isverified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting message to user')
    console.log('Grant access to paid courese')

} else if (isGuest || isverified) {
    console.log('Allow free courese')
} else{
    console.log('Please contact to admin')
}