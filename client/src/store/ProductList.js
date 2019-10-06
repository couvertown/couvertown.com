import { db } from "./firebase";

export default class ProductList {
  constructor(path) {
    this.ref = db.ref(path);
  }

  get(quantity, offset, cb) {
    let resultsRef = this.ref.orderByKey().limitToFirst(quantity);
    resultsRef.on('value', (snapshot) => {
      let val = snapshot.val();
      if (val == null) {
        return cb([]);
      }
      return cb(val);
    });
  }

}
