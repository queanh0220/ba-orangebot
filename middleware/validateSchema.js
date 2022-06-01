const Joi = require("joi");
const { FindOperators } = require("mongodb");

function createAccountSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        name: Joi.string().empty(''),
        email: Joi.string().email().empty(''),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        role: Joi.string().valid('Admin', 'User').required()
    });
    validateRequest(req,res, next, schema);
}

function updateAccountSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().empty(''),
        email: Joi.string().email().empty(''),
        birthday: Joi.string().empty(),
        img: Joi.string().empty(),
    });

    // only admins can update role
    if (req.role === 'Admin') {
        schemaRules.role = Joi.string().valid('Admin', 'User').empty('');
    }
    validateRequest(req,res, next, schema);
}

function updatePasswordSchema(req, res, next) {
    const schema = Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
    });

    validateRequest(req,res, next, schema);
}


// helper functions

function validateRequest(req,res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        res.status(406).send(error.details.reduce((result, item) => {
            result[item.path[0]] = item.message;
            return result;
        },{}));
    } else {
        req.body = value;
        next();
    }
}

module.exports = {createAccountSchema, updateAccountSchema, updatePasswordSchema}