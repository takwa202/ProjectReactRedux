const productModel = require("../models/productModel");
///////////////////////add product//////////////////////////
const addproduct = async (req, res) => {
  // protocole :http
  // host : localhost
  const url = `${req.protocol}://${req.get("host")}`;
  // console.log(req.file);
  const { file } = req;
  try {
    const newProduct = new productModel({ ...req.body });
    newProduct.image = `${url}/${file.path}`;
    await newProduct.save();
    res.send({ product: newProduct, message: "product succesffuly" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

/////get all products/////
const getallproducts = async (req, res) => {
  try {
    const allproducts = await productModel.find({});
    res.send({ allproducts });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

//get one product
const getoneproduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
//filter products
const filtersbytype = async (req, res) => {
  const { Type } = req.query;

  try {
    const products = await productModel.find({});
    fiteredproducts = products.filter((el) => el.Type == Type);
    console.log({ fiteredproducts });
    res.send(fiteredproducts);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
//filter by price
const filtersbyprice = async (req, res) => {
  const { price } = req.query;
  try {
    const products = await productModel.find({});
    fiteredproducts = products.filter((el) => el.price == price);
    console.log({ fiteredproducts });
    res.send(fiteredproducts);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
// search by name
const searchbyname = async (req, res) => {
  try {
    const products = await productModel.find({
      $or: [
        {
          name: { $regex: req.params.key },
        },
      ],
    });

    res.send(products);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

//delete product
const deleteproduct = async (req, res) => {
  try {
    await productModel.deleteOne({ _id: req.params.id });
    res.send("SUCCUSESFULY DELETED");
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
//update product
const updateproduct = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
   console.log("file" ,req.file);
   const { file } = req;
  try {
   let updateproduct  = await productModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body ,image:`${url}/${file.path}`} }
    );
    res.send({ updateproduct , msg: "SUCCUSESFULY UPDATED" });
  } catch (error) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addproduct,
  getallproducts,
  getoneproduct,
  filtersbytype,
  filtersbyprice,
  searchbyname,
  deleteproduct,
updateproduct
};
