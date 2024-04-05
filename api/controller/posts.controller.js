// create the database js
const pool = require("../database/index.js")
const postsController={
    //
    getCategoryNameAndSumPerCategory: async(req,res)=>{
        try {
            const {id} = req.params
            const sql = "SELECT category_tb.CATEGORY_ID, IFNULL(category_tb.CATEGORY_NAME,0) as CATEGORY_NAME, ifnull(SUM(transaction_tb.TRANSAC_QUANT),0) as SumPerCategory From  transaction_tb right join item_tb on item_tb.ITEM_ID=transaction_tb.ITEM_ID right join category_tb  on item_tb.CATEGORY_ID=category_tb.CATEGORY_ID where category_tb.CATEGORY_ID>0 Group by category_tb.CATEGORY_ID, category_tb.CATEGORY_NAME;"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getItemListTable: async(req,res)=>{
        try {
            const sql = "SELECT i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME, ifnull(SUM(t.TRANSAC_QUANT),0) as QUANTITY from item_tb `i` left join transaction_tb `t` on t.ITEM_ID=i.ITEM_ID right join category_tb `c` on i.CATEGORY_ID=c.CATEGORY_ID where i.ITEM_ID>0 Group by i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getItemListperCateg: async(req,res)=>{
        try {
            
            const {id} = req.params;
            const sql = "SELECT i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME, ifnull(SUM(t.TRANSAC_QUANT),0) as QUANTITY from item_tb `i` left join transaction_tb `t` on t.ITEM_ID=i.ITEM_ID right join category_tb `c` on i.CATEGORY_ID=c.CATEGORY_ID where i.CATEGORY_ID=? Group by i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getListOfNearExpiry: async(req,res)=>{
        try {
            const sql = "SELECT * FROM transaction_tb `t` WHERE DATEDIFF(t.TRANSAC_EXPIRY, NOW()) BETWEEN 0 AND 5;"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    getCountOfNearExpiry: async(req,res)=>{
        try {
            const sql = "SELECT IFNULL(SUM(t.TRANSAC_QUANT),0) as QUANTITY FROM transaction_tb `t` WHERE DATEDIFF(t.TRANSAC_EXPIRY, NOW()) BETWEEN 0 AND 5;"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getItemByID: async(req,res)=>{
        try {
            
            const {id} = req.params;
            const sql = "SELECT i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME, ifnull(SUM(t.TRANSAC_QUANT),0) as QUANTITY from item_tb `i` left join transaction_tb `t` on t.ITEM_ID=i.ITEM_ID right join category_tb `c` on i.CATEGORY_ID=c.CATEGORY_ID where i.ITEM_ID=? Group by i.ITEM_ID, i.ITEM_NAME, c.CATEGORY_NAME"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getItemTable: async(req,res)=>{
        try {
            const {id} = req.params
            const sql = "SELECT * FROM rrmis_db.item_tb"
            const [rows, fields] = await pool.query(sql)
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getTransactionPerItem: async(req,res)=>{
        try {
            
            const {id} = req.params;
            const sql = "SELECT * FROM rrmis_db.transaction_tb where transaction_tb.ITEM_ID=?"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getTransactionDetails: async(req,res)=>{
        try {
            
            const {id} = req.params;
            const sql = "SELECT * FROM rrmis_db.transaction_tb where transaction_tb.TRANSAC_ID=?"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    getTransactionQuantity: async(req,res)=>{
        try {
            
            const {id} = req.params;
            const sql = "SELECT transaction_tb.TRANSAC_QUANT FROM rrmis_db.transaction_tb where transaction_tb.TRANSAC_ID=?"
            const [rows, fields] = await pool.query(sql,[id])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    createNewItem: async(req,res)=>{
        try {
            const {ITEM_NAME, CATEGORY_ID} = req.body;
            const sql = "INSERT INTO `rrmis_db`.`item_tb` (`ITEM_NAME`, `CATEGORY_ID`) VALUES (?, ?)"
            const [rows, fields] = await pool.query(sql, [ITEM_NAME, CATEGORY_ID])
            res.json({
                success: true,
                data: rows,
                message: "Item inserted successfully"
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    createNewTransaction: async(req,res)=>{
        try {
            const {BRAND_NAME, TRANSAC_DATE, TRANSAC_QUANT, TRANSAC_EXPIRY, TRANSAC_PLCMNT, ITEM_ID} = req.body;
            const sql = "INSERT INTO `rrmis_db`.`transaction_tb` (`BRAND_NAME`, `TRANSAC_DATE`, `TRANSAC_QUANT`, `TRANSAC_EXPIRY`, `TRANSAC_PLCMNT`, `ITEM_ID`) VALUES (?, ?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [BRAND_NAME, TRANSAC_DATE, TRANSAC_QUANT, TRANSAC_EXPIRY, TRANSAC_PLCMNT, ITEM_ID])
            res.json({
                success: true,
                data: rows,
                message: "Item inserted successfully"
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    deleteItemByID: async(req,res)=>{
        try {
            const {id} = req.params;
            
            const sql1 = "DELETE FROM transaction_tb where transaction_tb.ITEM_ID=?"
            const sql2 = "DELETE FROM item_tb where item_tb.ITEM_ID=?"
            const [rows1, fields1] = await pool.query(sql1,[id])
            const [rows2, fields2] = await pool.query(sql2,[id])
            res.json({
                status: 'success'
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    deleteTransactionByID: async(req,res)=>{
        try {
            const {id} = req.params;
            
            const sql1 = "DELETE FROM transaction_tb where transaction_tb.TRANSAC_ID=?"
            const [rows1, fields1] = await pool.query(sql1,[id])
            res.json({
                status: 'success'
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
    //
    editQuantity: async(req,res)=>{
        try {
            const {quant, id} = req.body;
            const sql1 = "UPDATE transaction_tb `t` SET t.TRANSAC_QUANT = ? WHERE t.TRANSAC_ID = ?"
            const [rows1, fields1] = await pool.query(sql1,[quant, id])
            res.json({
                status: 'success'
            })
        } catch (error) {
            res.json({
                status: error
            })
        }
    },
};

module.exports= postsController;