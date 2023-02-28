const bcrypt = require("bcrypt");
const model = require("../model/model_gallery");
const { requestResponse } = require("../utils");

let response;

const create = async (data) => {
    await model.create(data);
    return { ...requestResponse.success, data: model };
};

const getAll = async (condition) => {
    return model.find(condition, { _id: false }, { lean: true });
};

const getById = async (condition) => {
    return model.find(condition, { _id: false }, { lean: true });
};

const updateOne = async (condition, body) => {
    await model.updateOne(condition, body);
    const data = await model.findOne({GUID: condition.GUID}, { _id: false }, { lean: true });
    const result = { ...requestResponse.success, data: {
        data: { ...data }
    }};
    return result;
}

const find = async (condition) => {
    return model.findOne(condition, { _id: false }, { lean: true });
};

const deleteOne = async (condition ) => {
    return model.deleteOne(condition)
};

module.exports = {
    create,
    getAll,
    getById,
    updateOne,
    deleteOne,
    find
};
