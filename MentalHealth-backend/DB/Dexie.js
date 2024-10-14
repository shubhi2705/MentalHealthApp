// db.js
import Dexie from "dexie";

const db = new Dexie("UserDatabase");

db.version(1).stores({
  users:
    "++id, name,gender,phoneNumber,dob,email,areasOfIntrest, otp, otpExpires", // Define your schema
});

export default db;
