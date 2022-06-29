/* NodeJs 12 샘플 코드 */


var request = require('request');

var url = 'http://api.data.go.kr/openapi/tn_pubr_public_weighted_envlp_api';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=ER6BTOZ%2FAw6c4PglzfEHp90D%2F4lRJ1GBiVo8QUsBwU9bIWyuk9ZK%2B%2FGx3nMv4ZWvelaCTGUJyV2XX09npfwWgQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /* */
queryParams += '&' + encodeURIComponent('CTPRVN_NM') + '=' + encodeURIComponent('인천광역시'); /* */
queryParams += '&' + encodeURIComponent('SIGNGU_NM') + '=' + encodeURIComponent('계양구'); /* */
queryParams += '&' + encodeURIComponent('WEIGHTED_ENVLP_TYPE') + '=' + encodeURIComponent('규격봉투'); /* */
queryParams += '&' + encodeURIComponent('WEIGHTED_ENVLP_MTHD') + '=' + encodeURIComponent('소각용'); /* */
queryParams += '&' + encodeURIComponent('WEIGHTED_ENVLP_PRPOS') + '=' + encodeURIComponent('생활쓰레기'); /* */
queryParams += '&' + encodeURIComponent('WEIGHTED_ENVLP_TRGET') + '=' + encodeURIComponent('기타'); /* */
queryParams += '&' + encodeURIComponent('PRICE_1') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_1_HALF') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_2') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_2_HALF') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_3') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_5') + '=' + encodeURIComponent('160'); /* */
queryParams += '&' + encodeURIComponent('PRICE_10') + '=' + encodeURIComponent('310'); /* */
queryParams += '&' + encodeURIComponent('PRICE_20') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_30') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_50') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_60') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_75') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_100') + '=' + encodeURIComponent('3060'); /* */
queryParams += '&' + encodeURIComponent('PRICE_120') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('PRICE_125') + '=' + encodeURIComponent('0'); /* */
queryParams += '&' + encodeURIComponent('CHRG_DEPT_NM') + '=' + encodeURIComponent('청결지도팀'); /* */
queryParams += '&' + encodeURIComponent('PHONE_NUMBER') + '=' + encodeURIComponent('032-450-5464'); /* */
queryParams += '&' + encodeURIComponent('REFERENCE_DATE') + '=' + encodeURIComponent('2020-02-01'); /* */
queryParams += '&' + encodeURIComponent('instt_code') + '=' + encodeURIComponent('B551295'); /* */
queryParams += '&' + encodeURIComponent('instt_nm') + '=' + encodeURIComponent('인천광역시계양구시설관리공단'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});