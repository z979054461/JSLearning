const Sequelize = require('sequelize');
const config = require('./config');

try{
    var sequelize = new Sequelize(config.database, config.user, config.password, {
        host: config.host,
        port:config.port,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    });
    
    var Pet = sequelize.define('pet', {
        id: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        gender: Sequelize.BOOLEAN,
        birth: Sequelize.STRING(10),
        createdAt: Sequelize.BIGINT,
        updatedAt: Sequelize.BIGINT,
        version: Sequelize.BIGINT
    }, {
        timestamps: false
    });
    
    //新增
    // var now = Date.now();
    // Pet.create({
    //     id: 'g-' + now,
    //     name: 'Gaffey',
    //     gender: false,
    //     birth: '2007-07-07',
    //     createdAt: now,
    //     updatedAt: now,
    //     version: 0
    // }).then(function (p) {
    //     console.log('created.' + JSON.stringify(p));
    // }).catch(function (err) {
    //     console.log('failed: ' + err);
    // });


    //查询
    // Pet.findAll().then(res => {
    //     console.log(res)
    // })
    // (async() =>{
    //     const pets = await Pet.findAll({
    //         where: {
    //             name: 'Gaffey'
    //         }
    //     });
    //     console.log(`find ${pets.length} pets:`);
    //     for (let p of pets) {
    //         console.log(JSON.stringify(p));
    //     }
    // })()

    (async () => {
        var pets = await Pet.findAll({
            where: {
                id: 'g-1606125637593'
            }
        });
        let p = pets[0]
        //修改
        // p.gender = true;
        // p.updatedAt = Date.now();
        // p.version ++;
        // await p.save();
        //删除
        p && await p.destroy();
    })();

}catch(e){
    console.debug(e)
}