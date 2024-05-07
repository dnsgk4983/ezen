const MongoClient = require('mongodb').MongoClient;

// Replace <password> with your MongoDB Atlas password, and <clusterinfo> with the information about your cluster
const url = 'mongodb+srv://dnsgk4983:r9bfcgdiM0G4nBNX@cluster0.dkhkvdy.mongodb.net//test?retryWrites=true&w=majority';

// Create a new MongoClient
// 불러온 접속정보와 mongoDB 패키지 기능으로 객체생성
const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
    try {
        // 커넥션을 생성하고 연결을 시도
        await client.connect();
        // mongodb에서 하위 클러스터와 테이블은 만들기 쉽습니다.
        // test 데이터베이스의 person 컬렉션을 가져옵니다.
        // 클러스터 정보와 테이블 정보를 collection에 저장합니다.
        // 해당 클러스터가 없다면 생성해주고 이미 있다면 그 내용을 사용합니다.
        console.log('MongoDB 접속 성공');
        const collection = client.db('test8888').collection('person');
        
        // Document 하나 추가
        // 만들어진 클러스터와 테이블 소속으로 데이터 하나 추가합니다.
        await collection.insertOne({ nmae: 'Andy', age: 30 });
        console.log('document 추가 완료');

        // Document 찾기
        // 찾고싶은 데이터의 key & value 값으로 원하는 데이터를 조회합니다.
        const documents = await collection.find({ name: 'Andy' }).toArray();
        console.log('찾은 document:', documents);

        // Document 갱신하기
        // 찾은 데이터를 수정합니다.
        await collection.updateOne({name: 'Andy'}, { $set: { age: 31 } });
        console.log('document 업데이트');

        // 갱신된 Document 확인하기
        // 수정한 데이터의 key & value 값으로 수정되었는지 확인합니다.
        const updatedDocuments = await collection.find({name: 'Andy'}).toArray();
        console.log('갱신된 document:', updatedDocuments);

        // Document 삭제하기
        // await collection.deleteOne({name: 'Andy'});
        console.log('document 삭제');

        // 연결끊기
        await client.close();
    }

    catch (err) {
        console.error(err);
    }
}

main();