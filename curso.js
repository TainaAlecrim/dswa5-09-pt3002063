const findDocuments = function(db, callback) {

    const collection = db.collection('cursos'); // se der errado mudar para curso

    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("foram encontrados os seguintes docs");
        console.log(docs)
        callback(docs);
    });

};

const MongoCliente = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://dswa5:dswa5@cluster0.vuhwh.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'ifsp';

MongoCliente.connect(url, {useNewUrlParser: true, userUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Aluno: Taina Braga Alecrim");
    console.log("Servidor conectado");

    const db = client.db(dbName);

    findDocuments(db, function(){
        client.close();
    });
});