/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();
const mongoose = require("mongoose");
mongoose.set("debug", true);
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});
const Schema = mongoose.Schema;

const TerminalSchema = new Schema({
    _id: Schema.Types.ObjectId,
    bank: Schema.Types.ObjectId,
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    address: String,
    created_at: {type: String, required: true},
    updated_at: {type: String, required: true},
    deleted_at: {type: String, required: false},
});

const BankShema = new Schema({
    country: Number,
    color: String,
    name: String,
    icon: String,
    url: String,
    created_at: String,
    updated_at: String,
    deleted_at: {type: String, required: false},
});
const Banks = mongoose.model("banks", BankShema, "banks");
const Terminals = mongoose.model("terminals", TerminalSchema, "terminals");

app.get("/banks", (req, res) => {
    mongoose.connect("mongodb://dams:dams@mongo/trouvkash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // eslint-disable-next-line array-callback-return
    Banks.find((err, data) => {
        res.json(data);
    });
});
app.get("/terminals", (req, res) => {
    mongoose.connect("mongodb://dams:dams@mongo/trouvkash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // eslint-disable-next-line array-callback-return
    Terminals.find((err, data) => {
        res.json(data);
    });
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
