
import SQLite from 'react-native-sqlite-storage';

const db = () => SQLite.openDatabase('miDB.sqlite', "1.0", "Test Database", 200000,
    ()=>console.log('open Conexion...'),()=>console.log('error conexion...'));

const checarTablas = () =>{
    const sql = db();
    sql.transaction(tx=>{
        console.log('crear tabla');
        tx.executeSql('CREATE TABLE IF NOT EXISTS favoritas( id INTEGER AUTOINCREMENT,idSerie INTEGER);',[],()=>{
            console.log('listo');
        })
    });
}

export const select = ()=>{
    const sql = db();
    checarTablas();
    return {
        favoritas(){
        sql.transaction(tx=>{
            console.log('select series fav.');
            tx.executeSql('select * from favoritas;',[],(tx, results)=>{
                console.log('query complete...');
                if(results){
                    console.log('res=>',results.rows.length);
                }   
            });
        })},

    }
};

export const insertar = () =>{
    const sql = db();

    return{
        insertarSerie(id){
            sql.transaction(tx=>{
                console.log('insert series fav.');
                tx.executeSql('insert into favoritas (idSerie) values(?);',[id],(tx, results)=>{
                    console.log('query complete...');
                    if(results){
                        console.log('res=>',results.rows.length);
                    }   
                });
            })
        }, 
    }
} 

