// import {SQLiteDatabase, enablePromise, openDatabase} from 'react-native-sqlite-storage';

// const databaseName = 'myplaces.sqlite';

// // Enable promise for SQLite
// enablePromise(true);

// export const getDBConnection = async() => {
//     return openDatabase(
//         {name: `${databaseName}`, createFromLocation:`~${databaseName}`},
//         openCallback,
//         errorCallback,
//     );
// }

const serverPath = "http://10.0.2.2:5000"

export const getPlaces = async() => {
    const url = serverPath + "/api/places";

    let placeData = await fetch(url)
    .then(response => { 
      return response.json();
    })
    .catch(error => console.log(error));

    return placeData;
      
}


export const getPlaceById = async( db: SQLiteDatabase, placeId: string ): Promise<any> => {
    try{
        const query = `SELECT * FROM places WHERE id=?`;
        const results = await db.executeSql(query,[placeId]);
        return results[0].rows.item(0)
      } catch (error) {
        console.error(error);
        throw Error('Failed to get place !!!');
      }
}


export const createPlace = async( 
        db: SQLiteDatabase,
        name: string,
        city : string,
        date : number,
    ) => {
    try{
        const query = 'INSERT INTO places(name,city,date) VALUES(?,?,?)';
        const parameters = [name,city,date]
        await db.executeSql(query,parameters);
      } catch (error) {
        console.error(error);
        throw Error('Failed to create place !!!');
      }
}



export const updatePlace = async( 
    db: SQLiteDatabase,
    name: string,
    city : string,
    date : number,
    placeId: string
) => {
try{
    const query = 'UPDATE places SET name=?,city=?,date=? WHERE id=?';
    const parameters = [name, city, date, placeId]
    await db.executeSql(query,parameters);
  } catch (error) {
    console.error(error);
    throw Error('Failed to update place !!!');
  }
}

export const deletePlace = async( 
    db: SQLiteDatabase,
    placeId: string
    ) => {
    try{
        const query = 'DELETE FROM places WHERE id = ?' ;
        await db.executeSql(query,[placeId]);
    } catch (error) {
        console.error(error);
        throw Error('Failed to delete place !!!');
    }
}

const openCallback = () => {
    console.log('database open success');
}

const errorCallback = (err: any) => {
    console.log('Error in opening the database: ' + err);
}