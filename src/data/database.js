
import SQLite from 'react-native-sqlite-storage';
import { ToastAndroid } from 'react-native';

const db = () => SQLite.openDatabase('miDB.sqlite', "1.0", "Test Database", 200000,
    ()=>{},()=>ToastAndroid.show(`Error en base de datos!`, ToastAndroid.SHORT));

const checarTablas = () =>{
    const sql = db();
    sql.transaction(tx=>{
        tx.executeSql('CREATE TABLE IF NOT EXISTS favoritas(idSerie INTEGER);',[],()=>{})},
        e=>{console.log('error al crear ',e);});
}

export const select = ()=>{
    const sql = db();
    checarTablas();
    return {
        favoritas(exec=e=>e){
        sql.transaction(tx=>{
            tx.executeSql('select * from favoritas;',[],(tx, results)=>{
                if(results){
                    exec(results.rows.raw())
                }   
            },(e)=>console.log('error',e));
        })},

    }
};

export const insertar = () =>{
    const sql = db();

    return{
        insertarSerie(id,name=''){
            sql.transaction(tx=>{
                tx.executeSql('insert into favoritas (idSerie) values(?);',[id],(tx, results)=>{
                    ToastAndroid.show(`Se Agrego serie ${name} a lista  por ver!`, ToastAndroid.SHORT);
                    if(results){
                    }   
                },()=>ToastAndroid.show(`No se agrego serie ${name}!`, ToastAndroid.SHORT));
            })
        }, 
    }
} 

export const remover = () =>{
    const sql = db();

    return{
        idSerie(id,name=''){
            sql.transaction(tx=>{
                tx.executeSql('DELETE FROM favoritas where idSerie=?;',[id],(tx, results)=>{
                    ToastAndroid.show(`Se elimino ${name} de lista  por ver!`, ToastAndroid.SHORT);
                    if(results){
                        console.log('res=>',results.rows.length);
                    }   
                });
            })
        }, 
    }
} 
