import db from '../DB/Dexie';
async function handleSignin(phoneNumber, otp) {   
    
    const user = await db.users.where('phoneNumber').equals(phoneNumber).first();

    if (user) {
        // Check if OTP is valid
        if (user.otp === otp && Date.now() <= user.otpExpires) {
            // Valid OTP, now generate JWT by sending to server
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, otp }),
            });

            const data = await response.json();
            if (data.success) {
                console.log('Login successful, token:', data.token);
                await clearUserData(phoneNumber); // Clear local data on success
            } else {
                console.error(data.msg);
            }
        } else {
            console.error('Invalid or expired OTP.');
        }
    } else {
        console.error('User not found in offline storage.');
    }
}

async function clearUserData(phoneNumber) {
    await db.users.where('phoneNumber').equals(phoneNumber).delete();
}
