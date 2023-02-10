const {DataTypes, Sequelize} = require('sequelize'); // 시퀼라이즈 모듈 불러오기 

module.exports = (sequelize) =>{ //객체 모델 내보내기 
    return sequelize.define(//객체 모델 정의)
    'GlobalStat', //매개 변수 1 : 모델 이름 
    {   /// 매개 변수 2 : 속성 목록
            //생략
    },
    {
        //매개변수 3 : 추가 옵션
    },
    );
    
}