const {DataTypes, Sequelize, DATE} = require('sequelize'); // 시퀼라이즈 모듈 불러오기 

module.exports = (sequelize) =>{ //화살표 함수를 외부로 익스포트 
    return sequelize.define(//
    'GlobalStat', //매개 변수 1 : 모델 이름 
    {   /// 매개 변수 2 : 속성 목록
            id :{
                autoIncrement: true, 
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false, 
                primaryKey: true, 
            },
            cc: {   //국가 코드 (cc는 country code의 약자 )
                type: DataTypes.CHAR(2),
                allowNull: false, 
            },
            date:{  //날짜 
                type: DataTypes.DATEONLY,
                allowNull: false, 
            },
            confirmed:{ //확진자 수 
                type: DataTypes.INTEGER,
                allowNull: false, 
            },
            death:{ //사망자 수 
                type: DataTypes.INTEGER, 
                allowNull: true, 
            },
            released: { //완치자 수 
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            tested: { // 총 검사자 수
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            testing: { //검사 중 수 
                type : DataTypes.INTEGER,
                allowNull: true, 
            },
            negative: { //결과 음성 수 
                type: DataTypes.INTEGER,
                allowNull: true, 
            },
    },
    {
        //매개변수 3 : 추가 옵션
        sequelize, //시퀼라이즈 인스턴스 
        tableName : 'GlobalStat',
        indexes:[
            {
                name: 'PRIMARY',
                unique: true,
                fields: [{ name: 'id' }],
            },
            {
                name: 'ccWithDate',
                unique: true,
                fields: [{ name: 'cc'}, {name: 'date'}],
            },
        ],
        timestamps: false, //타임스탬프 속성 자동 생성 X 
    },
    );
    
};

