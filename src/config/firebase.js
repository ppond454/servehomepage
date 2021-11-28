var admin = require("firebase-admin");

var serviceAccount = require("./hompage-66b3d-firebase-adminsdk-49f6s-48d91e1f0d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin.firestore()