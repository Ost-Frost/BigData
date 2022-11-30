var mongo = require("mongoose");
var Schema = mongo.Schema;
var CardsSchema = new Schema({
    name: { type: String},
    id: { type: String },
    imageUrl: { type: String}
}, { versionKey: false})

var db = mongo.connect("mongodb://localhost:27017/MTGCards");

var model = mongo.model('mtgCards', CardsSchema, 'mtgCards')

export async function getCards(name: string) {
    return await model.find({name: name}).exec();
}