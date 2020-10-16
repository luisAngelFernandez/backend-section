const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");
const { text } = require("express");

const UserSchema = new Schema({
    name : {type : String, required:true},
    username : {type : String, required:true},
    password : {type : String, required:true}
});

// Esto lo hace para borrar la contraseña del objeto que se envía al usuario
UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

//
UserSchema.methods.comparePassword = function(password) {
    return compareSync(password, this.password);
}

// Se añade este metodo para poder aplicar alguna lógica antes de guardar
UserSchema.pre("save", async function(next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password,salt);
    user.password = hashedPassword;
    next();
});


module.exports = mongoose.model("user", UserSchema);