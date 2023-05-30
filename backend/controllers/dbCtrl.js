let router = require('express').Router();
let db = require('mysql').createPool({
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS
});


router.get('/:table', (req,res)=>{
    db.query(`select * from ${req.params.table}`, (err,data)=>{
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    })
})
router.get('/:table/:field/:value', (req, res)=>{
    db.query(`select * from ${req.params.table} where ${req.params.field}=?`, [req.params.value], (err,data)=>{
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    })
})

router.delete('/:table/:field/:value', (req,res)=>{
    db.query(`delete from ${req.params.table} where ${req.params.field}=?`, [req.params.value], (err,data)=>{
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    })
})

router.post('/:table', (req,res)=>{
    let fields = Object.keys(req.body).join(',');
    let values = Object.values(req.body).map(e=>"'"+e+"'").join(',');
    db.query(`insert into ${req.params.table} (${fields}) values (${values})`, (err,data)=>{
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    });
})

router.patch('/:table/:field/:value', (req,res)=>{
    let fields = Object.keys(req.body)
    let values = Object.values(req.body).map(e=>"'"+e+"'");
    let updatetext = [];
    fields.forEach((element, i) => {
        updatetext.push(`${element}=${values[i]}`);
    });
    db.query(`update ${req.params.table} set ${updatetext.join(',')} where ${req.params.field}=?`, [req.params.value], (err,data)=>{
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    })


})

module.exports = router;