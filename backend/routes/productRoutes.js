const express = require("express");
const upload = require("../utils/multer");
const {
  addproduct,
  getallproducts,
  filtersbytype,
  filtersbyprice,
  searchbyname,
  getoneproduct,
  deleteproduct,
  updateproduct,
} = require("../controllers/productControlers");
const router = express.Router();
 
/*
 * @params POST/product/addproduct
 * @description adding a new product
 * @ acess public
 */
router.post("/addproduct", upload("products").single("file"), addproduct);

/*filtersbytype?prise=55
 * @params GET/product/getallproducts
 * @description getting all product
 * @ acess public
 */
router.get("/", getallproducts);
/*
 * @params GET/product/filterbytype
 * @description feltring products by type
 * @ acess public
 */
router.get("/filtersbytype", filtersbytype);
/*
 * @params GET/product/filter
 * @description feltring products
 * @ acess public
 */
router.get("/filtersbyprice", filtersbyprice);
/*
 * @params GET/product/searchbyname
 * @description searching for prodect by name
 * @ acess public
 */
router.get("/searchbyname/:key", searchbyname);

/*
 * @params GET/product/getoneproducts
 * @description getting one product
 * @ acess public
 */
router.get("/:id", getoneproduct);

/*
 * @params DELETE/product/deleteproduct
 * @description deleting one product
 * @ acess public
 */
router.delete("/deleteproduct/:id", deleteproduct); 

/* 
 * @params PUT/product/updateproduct 
 * @description updating one product
 * @ acess public
 */
router.put(
  "/updateproduct/:id",
  upload("products").single("file"),
  updateproduct
);

module.exports = router;
