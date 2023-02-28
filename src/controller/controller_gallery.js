require("dotenv").config();
var path = require("path");
// var scriptName = path.basename(__filename);
// const filename = scriptName.split("_");
const service = require("../services/services_gallery");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");
const fileService = require("../services/file_service");
const joi = require("joi");
const fs = require("fs-extra")
const { v4, validate: isUuid } = require("uuid");
const Promise = require("bluebird");
const formidable = Promise.promisifyAll(require("formidable"), { multiArgs: true });
const form = formidable();

let response;

const create = async (req, res) => {
    try {
        req.body.GUID = v4();
        const data = await service.create(req.body);
        response = { ...data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
};

const getAll = async (req, res) => {
    try {
        const data = await service.getAll();
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const getById = async (req, res) => {
    try {
        const data = await service.getById({ GUID: req.params.guid });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const updateOne = async (req, res) => {
    try {
        const data = await service.updateOne({ GUID: req.params.guid }, req.body);
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

const deleteOne = async (req, res) => {
    try {
        const data = await service.deleteOne({ GUID: req.params.guid });
        response = { ...requestResponse.success, data };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }
    res.json(response);
}

module.exports = {
    create,
    getAll,
    getById,
    updateOne,
    deleteOne
}