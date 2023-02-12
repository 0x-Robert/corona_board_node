//1z2d4gBO8JSI8SEotnHDKdcq8EQ9X4O5fWPxeUCAqW1c
//invalid grant 오류 뜨면 "4/0AWtgzh7dwj_ZnXDN13nEeAJgSUCn071wFG_RkkTvnZrqT0qUxS_Ug-8xy3RlF7_eek26Rg" 
//accessToken.json지우고 main.js 다시 실행해서 위와 같은 코드 입력후 똑같이 엑세스 토큰 적용해주면 됨

const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main() {
  try {
    const sheetApiClient = await SheetApiClientFactory.create();
    const downloader = new SheetDownloader(sheetApiClient);

    // 아래와 같은 구글 스프레드시트 주소 중 d와 edit 사이에 들어있는 부분이 스프레드시트의 ID 값 입니다.
    // https://docs.google.com/document/d/1bZbLi45kqRyE1fSBphWzFFKaJobcaMplBzr82rRXjPM/edit#
    const spreadsheetId = '1z2d4gBO8JSI8SEotnHDKdcq8EQ9X4O5fWPxeUCAqW1c';

    const notice = await downloader.downloadToJson(
      spreadsheetId,
      'notice',
      'downloaded/notice.json',
    );

    console.log(notice);

    const countryInfo = await downloader.downloadToJson(
      spreadsheetId,
      'countryInfo',
      'downloaded/countryInfo.json',
    );

    console.log(countryInfo);
  } catch (e) {
    console.error(e);
  }
}

main();
