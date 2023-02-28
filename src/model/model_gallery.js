const mongoose = require("mongoose");
const collectionName = "gallery";

const UserSchema = new mongoose.Schema(
    {
        GUID: {
            type: String
        },
        PHOTO: {
            type: String
        },
        ACTIVITY: {
            type: String
        },
        DESCRIPTION: {
            type: String
        },
        POST_BY: {
            type: String
        },
        CREATED_AT: {
            type: Date,
            default: () => new Date()
        },
        UPDATED_AT: {
            type: Date,
            default: () => new Date()
        }
    },
    {
        versionKey: false,
        collection: collectionName
    });

module.exports = mongoose.model(collectionName, UserSchema);