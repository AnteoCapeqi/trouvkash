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

const TerminalSchema = new Schema({
    bank: {type: "ObjectId", ref: "banks"},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    address: String,
    created_at: {type: String, required: true},
    updated_at: {type: String, required: true},
    deleted_at: {type: String, required: false},
});

const Banks = mongoose.model("banks", BankShema, "banks");
const Terminals = mongoose.model("terminals", TerminalSchema, "terminals");

app.get("/banks", async (req, res) => {
    mongoose.connect("mongodb://dams:dams@mongo/trouvkash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const banks = await Banks.find((err, data) => data);
    mongoose.disconnect();
    res.json(banks);
});
app.get("/terminals", async (req, res) => {
    mongoose.connect("mongodb://dams:dams@mongo/trouvkash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const terminal = await Terminals.find((err, data) => data)
        .limit(100)
        .exec();
    res.json(terminal);
});

app.get("/banks/:id", async (req, res) => {
    mongoose.connect("mongodb://dams:dams@mongo/trouvkash", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const bank = await Banks.findById(req.params.id, (err, data) => {
        if (err) {
            return "oups erreur";
        }
        return data;
    });
    res.json(bank);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);