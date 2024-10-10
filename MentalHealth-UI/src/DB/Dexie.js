// db.js
import Dexie from 'dexie';

const db = new Dexie('UserSchema');

db.version(1).stores({
    users: '++id, name,gender,phoneNumber,email,password,areasOfIntrest, otp, otpExpires', // Define your schema
});

export default db;
