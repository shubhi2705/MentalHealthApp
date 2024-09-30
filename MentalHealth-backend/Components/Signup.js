import {db} from '../DB/Dexie'

async function handleSignup(phoneNumber, password, name, email, areasOfInterest, gender) {
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password, name, email, areasOfInterest, gender }),
    });

    const data = await response.json();

    if (data.success) {
        // Store OTP and user info in Dexie.js
        await db.users.add({
            phoneNumber,
            otp: data.otp, // Save the OTP returned from the server
            otpExpires: Date.now() + 300000, // Set expiration time
        });
        console.log('User signed up and OTP stored locally.');
    } else {
        console.error(data.msg);
    }
}
