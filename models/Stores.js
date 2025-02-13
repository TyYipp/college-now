const mongoose = require("mongoose");
const slugify = require("slugify");
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a store name",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

shopSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name); //Create URL friendly slug;
  next();
  //note for future, check if slugs are unique
});
module.exports = mongoose.model("Shop", shopSchema);
