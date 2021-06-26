const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId; 
const Schema = mongoose.Schema;


const DepartmentsSchema = new Schema({
  info: {
    name: String, 
    apiKey: String,
    customFields: [{ name: String, value: String }]
  },
  contactPerson: {
    name: String,
    email: String, 
    telephone: String,
    customFields: [{ name: String, value: String }]
  }
});

const Departments = mongoose.model('Departments', DepartmentsSchema );


async function listAll() {
  try {
    const result = await Departments.find().exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return [];
};

async function findOne(id) {
  try {
    const objectId = ObjectId(id);
    const result = await Departments.findOne(objectId).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function create(payload) {
  try {
    const result = await Departments.create(payload, { runValidators: true });
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function update(payload) {
  try {
    const { _id } = payload;
    const department = await Departments.findOne({ _id }).exec();
    department.overwrite(payload);
    const result = await department.save();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function patch(payload) {
  try {
    const { _id } = payload;
    const result = await Departments.updateOne({ _id }, { $set: payload }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function addFields({ id, place, payload }) {
  try {
    const department = await Departments.findOne({ _id: id });
    department[place].customFields.push(payload);
    const result = await department.save();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

async function remove(id) {
  try {
    const result = await Departments.deleteOne({ _id: id }).exec();
    return result;
  } catch(error) {
    console.log(error.message);
  }
  return null;
};

module.exports = {
  listAll,
  findOne,
  create,
  update,
  patch,
  addFields,
  remove
};
