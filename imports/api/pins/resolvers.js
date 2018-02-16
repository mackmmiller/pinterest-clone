import Pins from "./pins";

export default {
  Query: {
    pins(obj, args) {
      return Pins.find({}).fetch();
    }
  },

  Mutation: {
    newPin(obj, { title, url }, { userId }) {
      const pinId = Pins.insert({
        title,
        url,
        author: userId
      });
      return Pins.findOne(pinId);
    }
  }
};
